import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styling/Comments.css";
import { getComments } from "../../api-calls/api-calls";
import { Card } from "react-bootstrap";

function Comments({ comments, setComments }) {
  const { article_id } = useParams();
  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, []);

  const commentCards = comments.map((comment) => {
    const formatDate = new Date(comment.created_at).toLocaleString();
    return (
      <Card className="comment-card" key={comment.comment_id}>
        <Card.Header className="comment-header">
          <span>{comment.author}</span>
          <span>{formatDate}</span>
        </Card.Header>
        <Card.Body className="comment-body">{comment.body}</Card.Body>
        <Card.Footer className="comment-footer">
          {comment.votes} votes
        </Card.Footer>
      </Card>
    );
  });
  return <section className="comment-cards-container">{commentCards}</section>;
}

export default Comments;
