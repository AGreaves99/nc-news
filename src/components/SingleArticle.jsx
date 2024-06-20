import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styling/SingleArticle.css";
import { getArticle } from "../../api-calls/api-calls";
import { Card, CardFooter } from "react-bootstrap";

function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState(<></>);
  const { article_id } = useParams();
  useEffect(() => {
    getArticle(article_id)
      .then((article) => {
        const formatTopic =
          article.topic.charAt(0).toUpperCase() + article.topic.slice(1);
        const formatDate = new Date(article.created_at).toLocaleString();
        return (
          <Card className="single-article-card">
            <Card.Header className="single-article-header">
              <span>{formatTopic}</span>
              <span className="single-article-author">{article.author}</span>
            </Card.Header>
            <Card.Img
              src={article.article_img_url}
              alt="article image"
            ></Card.Img>
            <Card.Body>
              <Card.Body className="single-article-date">
                {formatDate}
              </Card.Body>
              <Card.Title className="single-article-title">
                {article.title}
              </Card.Title>
              <Card.Text>{article.body}</Card.Text>
            </Card.Body>
            <CardFooter className="single-article-header">
              <span>{article.comment_count} comments</span>
              <span>{article.votes} votes</span>
            </CardFooter>
          </Card>
        );
      })
      .then((articleCard) => {
        setSingleArticle(articleCard);
      });
  }, []);

  return <>{singleArticle}</>;
}

export default SingleArticle;
