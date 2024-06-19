import { useEffect, useState } from "react";
import { makeArticleList } from "../../api-calls/api-processing";
import "../../styling/Articles.css";

function Articles({pageNumber, setTotalPage, itemsPerPage, children}) {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const params = {
        p: pageNumber,
        limit: itemsPerPage
    }
    makeArticleList({params}).then(([articleCards, total_count]) => {
      setArticleList(articleCards);
      setTotalPage(Math.ceil(total_count / itemsPerPage))
    });
  }, [pageNumber, itemsPerPage]);

  
  return (
    <>
      <div className="articles-list">{articleList}</div>
      {children}
    </>
  );
}

export default Articles;
