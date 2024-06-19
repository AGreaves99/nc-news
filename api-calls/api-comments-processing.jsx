import { Card, CardFooter } from "react-bootstrap";
import { getComments } from "./api-calls";

export function makeCommentsList(article_id) {
  return getComments(article_id).then((comments) => {
    return comments.map((comment) => {
        const formatDate = new Date(comment.created_at).toLocaleString()
      return <Card className="comment-card" key={comment.comment_id}>
        <Card.Header className="comment-header">
            <span>{comment.author}</span>
            <span>{formatDate}</span>
        </Card.Header>
        <Card.Body className="comment-body">
            {comment.body}
        </Card.Body>
        <Card.Footer className="comment-footer">
            {comment.votes} votes
        </Card.Footer>
      </Card>;
    });
  });
}
