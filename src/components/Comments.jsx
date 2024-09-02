import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styling/Comments.css";
import { getComments } from "../../api-calls/api-calls";
import CommentCard from "./CommentCard";

function Comments({ comments, setComments, setArticleData }) {
  const { article_id } = useParams();
  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, []);

  const commentCards = comments.map((comment) => {
    const formatDate = new Date(comment.created_at).toLocaleString();
    return (
      <CommentCard
        key={comment.comment_id}
        comment={comment}
        formatDate={formatDate}
        setComments={setComments}
        setArticleData={setArticleData}
      />
    );
  });
  return <section className="comment-cards-container">{commentCards}</section>;
}

export default Comments;
