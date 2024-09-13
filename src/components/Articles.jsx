import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { makeArticleList } from "../../api-calls/api-articles-processing";
import "../../styling/Articles.css";
import ErrorMessage from "./ErrorMessage";

function Articles({ pageNumber, setTotalPage, itemsPerPage, children }) {
  const [articleList, setArticleList] = useState([]);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { topic } = useParams();
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  useEffect(() => {
    const params = {
      p: pageNumber,
      limit: itemsPerPage,
      topic,
      sort_by,
      order,
    };
    makeArticleList({ params })
      .then(([articleCards, total_count]) => {
        setError("");
        setArticleList(articleCards);
        setTotalPage(Math.ceil(total_count / itemsPerPage));
      })
      .catch((err) => {
        setError(err.msg);
      });
  }, [pageNumber, itemsPerPage, topic, sort_by, order]);

  return (
    <>
      {error ? (
        <ErrorMessage err={error} />
      ) : (
        <>
          <section className="articles-list">{articleList}</section>
          {children}
        </>
      )}
    </>
  );
}

export default Articles;
