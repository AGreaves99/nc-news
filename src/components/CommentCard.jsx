/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "../../styling/Comments.css";
import { Card } from "react-bootstrap";
import DeleteButton from "./DeleteButton";
import { UserContext } from "./UserContext";
import AlertMessage from "./AlertMessage";

function CommentCard({ comment, formatDate, setComments, setArticleData }) {
  const { user } = useContext(UserContext);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [error, setError] = useState(false);
  return (
    <div>
      <Card
        className={`comment-card ${
          commentToDelete === comment.comment_id ? "delete" : ""
        }`}
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
              setError={setError}
            />
          )}
          <span className="comment-votes">{comment.votes} votes</span>
        </Card.Footer>
      </Card>
      {error && (
        <AlertMessage
          className="new-comment-validation"
          formMessageDetails={{
            variant: "danger",
            message: "An error occurred, please try again later",
          }}
        />
      )}
    </div>
  );
}

export default CommentCard;
