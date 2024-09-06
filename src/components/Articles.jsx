import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { makeArticleList } from "../../api-calls/api-articles-processing";
import "../../styling/Articles.css";

function Articles({ pageNumber, setTotalPage, itemsPerPage, children }) {
  const [articleList, setArticleList] = useState([]);
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
    makeArticleList({ params }).then(([articleCards, total_count]) => {
      setArticleList(articleCards);
      setTotalPage(Math.ceil(total_count / itemsPerPage));
    });
  }, [pageNumber, itemsPerPage, topic, sort_by, order]);

  return (
    <>
      <section className="articles-list">{articleList}</section>
      {children}
    </>
  );
}

export default Articles;
