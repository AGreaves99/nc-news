import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeSingleArticle } from "../../api-calls/api-processing";
import "../../styling/SingleArticle.css"

function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState(<></>);
  const { article_id } = useParams();
  useEffect(() => {
    makeSingleArticle(article_id).then((articleCard) => {
      setSingleArticle(articleCard);
    });
  }, []);

  return <>{singleArticle}</>;
}

export default SingleArticle;
