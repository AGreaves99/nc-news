import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./UserContext";
import { Button, Card, Form } from "react-bootstrap";
import { BsFillSendFill } from "react-icons/bs";
import {postComment} from "../../api-calls/api-calls"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PostComment({ setComments }) {
  const { user } = useContext(UserContext);
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState({
    username: user,
    body: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    postComment(article_id, newComment).then((returnedComment) => {
        console.log(returnedComment);
        setComments((currentComments) => {
            return [returnedComment, ...currentComments]
        })
    })
    setNewComment({
      author: user,
      body: "",
    });
  }

  function handleChange(event) {
    setNewComment({ ...newComment, body: event.target.value });
  }

  return (
    <Form className="comment-form" onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col xs="auto">
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
          <Button type="submit" aria-describedby="post comment">
            <BsFillSendFill />
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default PostComment;
