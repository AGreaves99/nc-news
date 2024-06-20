import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styling/SingleArticle.css";
import { getArticle } from "../../api-calls/api-calls";
import { Card, CardFooter } from "react-bootstrap";
import VoteButton from "./VoteButton";

function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState(<></>);
  const { article_id } = useParams();
  const [articleVotes, setArticleVotes] = useState(0);
  const [articleData, setArticleData] = useState({});

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticleData({
        ...article,
        topic:
          article.topic.charAt(0).toUpperCase() + article.topic.slice(1),
        created_at: new Date(article.created_at).toLocaleString()
      });
    });
  }, []);

    
  const articleCard = (
    <Card className="single-article-card">
      <Card.Header className="single-article-header">
        <span>{articleData.topic}</span>
        <span className="single-article-author">{articleData.author}</span>
      </Card.Header>
      <Card.Img
        src={articleData.article_img_url}
        alt="article image"
      ></Card.Img>
      <Card.Body>
        <Card.Body className="single-article-date">{articleData.created_at}</Card.Body>
        <Card.Title className="single-article-title">
          {articleData.title}
        </Card.Title>
        <Card.Text>{articleData.body}</Card.Text>
      </Card.Body>
      <CardFooter className="single-article-header">
        <span>{articleData.comment_count} comments</span>
        <span>{articleVotes} votes</span>
      </CardFooter>
    </Card>
  );

  return (
    <>
      {articleCard}
      <VoteButton articleVotes={articleVotes} setArticleVotes={setArticleVotes} />
    </>
  );
}

export default SingleArticle;
