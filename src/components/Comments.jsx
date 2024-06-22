import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styling/Comments.css";
import { getComments } from "../../api-calls/api-calls";
import { Card } from "react-bootstrap";
import DeleteButton from "./DeleteButton";
import { UserContext } from "./UserContext";

function Comments({ comments, setComments, setArticleData }) {
  const { user } = useContext(UserContext);
  const { article_id } = useParams();
  const [commentToDelete, setCommentToDelete] = useState(null);
  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, []);

  const commentCards = comments.map((comment) => {
    const formatDate = new Date(comment.created_at).toLocaleString();
    return (
      <Card
        className={`comment-card ${
          commentToDelete === comment.comment_id ? "delete" : ""
        }`}
        key={comment.comment_id}
      >
        <Card.Header className="comment-header">
          <span>{comment.author}</span>
          <span>{formatDate}</span>
        </Card.Header>
        <Card.Body className="comment-body">{comment.body}</Card.Body>
        <Card.Footer className="comment-footer">
          {user === comment.author && (
            <DeleteButton
              setComments={setComments}
              comment_id={comment.comment_id}
              setCommentToDelete={setCommentToDelete}
              setArticleData={setArticleData}
            />
          )}
          <span className="comment-votes">{comment.votes} votes</span>
        </Card.Footer>
      </Card>
    );
  });
  return <section className="comment-cards-container">{commentCards}</section>;
}

export default Comments;
