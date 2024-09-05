import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeArticleList } from "../../api-calls/api-articles-processing";
import "../../styling/Articles.css";

function Articles({ pageNumber, setTotalPage, itemsPerPage, children }) {
  const [articleList, setArticleList] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    const params = {
      p: pageNumber,
      limit: itemsPerPage,
      topic,
    };
    makeArticleList({ params }).then(([articleCards, total_count]) => {
      setArticleList(articleCards);
      setTotalPage(Math.ceil(total_count / itemsPerPage));
    });
  }, [pageNumber, itemsPerPage, topic]);

  return (
    <>
      <section className="articles-list">{articleList}</section>
      {children}
    </>
  );
}

export default Articles;
