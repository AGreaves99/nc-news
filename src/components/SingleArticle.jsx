import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styling/SingleArticle.css";
import { getArticle, voteComment } from "../../api-calls/api-calls";
import { Card, CardFooter } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";
import "../../styling/VoteButton.css";

function SingleArticle() {
  const { article_id } = useParams();
  const [articleVotes, setArticleVotes] = useState(0);
  const [articleData, setArticleData] = useState({});
  const [currentAndPreviousValue, setCurrentAndPreviousValue] = useState({
    current: 0,
    previous: 0,
  });

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticleData({
        ...article,
        topic: article.topic.charAt(0).toUpperCase() + article.topic.slice(1),
        created_at: new Date(article.created_at).toLocaleString(),
      });
      setArticleVotes(article.votes);
    });
  }, []);

  function handleClick(event) {
    const currentTargetValue = event.currentTarget.value
    console.log(currentTargetValue);
    setCurrentAndPreviousValue((currentValues) => {
      const updatedObject = { ...currentValues };
      updatedObject.previous = currentValues.current;
      if (currentValues.current === Number(currentTargetValue)) {
        updatedObject.current = 0;
      } else {
        updatedObject.current = Number(currentTargetValue);
      }
      setArticleVotes(
        articleVotes + updatedObject.current - updatedObject.previous
      );
      voteComment(
        article_id,
        updatedObject.current - updatedObject.previous
      ).then((article) => {});
      return updatedObject;
    });
  }

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
        <Card.Body className="single-article-date">
          {articleData.created_at}
        </Card.Body>
        <Card.Title className="single-article-title">
          {articleData.title}
        </Card.Title>
        <Card.Text>{articleData.body}</Card.Text>
      </Card.Body>
      <CardFooter className="single-article-header">
        <span>{articleData.comment_count} comments</span>
        <div className="votes-and-buttons">
          <Button
            className="vote-button"
            id="upvote"
            value={1}
            active={currentAndPreviousValue.current === 1}
            onClick={handleClick}
          >            
            {currentAndPreviousValue.current === 1 ? (
              <FaThumbsUp />
            ) : (
              <FaRegThumbsUp />
            )}
          </Button>
          <span className="votes-number">{articleVotes} votes</span>
          <Button
            className="vote-button"
            id="downvote"
            value={-1}
            active={currentAndPreviousValue.current === -1}
            onClick={handleClick}
          >
            {currentAndPreviousValue.current === -1 ? (
              <FaThumbsDown />
            ) : (
              <FaRegThumbsDown />
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );

  return <>{articleCard}</>;
}

export default SingleArticle;
