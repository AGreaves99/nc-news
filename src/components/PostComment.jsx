import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./UserContext";
import { Button, Form } from "react-bootstrap";
import { BsFillSendFill } from "react-icons/bs";
import { postComment } from "../../api-calls/api-calls";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AlertMessage from "./AlertMessage";
import "../../styling/PostComment.css";

function PostComment({
  setComments,
  setArticleData,
  formMessage,
  setFormMessage,
  setFormMessageDetails,
  formMessageDetails
}) {
  const { user } = useContext(UserContext);
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState({
    username: user,
    body: "",
  });

  function handleSubmit(event) {
    setFormMessage(true);
    event.preventDefault();
    if (newComment.body) {
      postComment(article_id, newComment)
        .then((returnedComment) => {
          setComments((currentComments) => {
            return [returnedComment, ...currentComments];
          });
          setArticleData((currentData) => {
            return {
              ...currentData,
              comment_count: currentData.comment_count + 1,
            };
          });

          setFormMessageDetails({
            variant: "success",
            message: "Comment posted successfully",
          });
          setTimeout(() => {
            setFormMessage(false);
          }, 3000);
        })
        .catch((err) => {
          setFormMessageDetails({
            variant: "danger",
            message: "An error occurred, please try again later",
          });
        });
      setNewComment({
        author: user,
        body: "",
      });
    } else {
      setFormMessageDetails({
        variant: "danger",
        message: "You must type a comment before submitting",
      });
    }
  }

  function handleChange(event) {
    setNewComment({ ...newComment, body: event.target.value });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="comment-form">
        <Col>
          <FloatingLabel
            controlId="comment-input"
            label="Post a new comment: "
            className="comment-body"
          >
            <Form.Control
              as="textarea"
              placeholder="Post a new comment"
              aria-describedby="form to post a new comment"
              value={newComment.body}
              onChange={handleChange}
            />
          </FloatingLabel>
        </Col>
        <Col xs="auto">
          <Button
            className="vote-button"
            type="submit"
            aria-describedby="post comment"
          >
            <BsFillSendFill />
          </Button>
        </Col>
      </Row>
      {formMessage && (
        <AlertMessage
          className="new-comment-validation"
          formMessageDetails={formMessageDetails}
        />
      )}
    </Form>
  );
}

export default PostComment;
