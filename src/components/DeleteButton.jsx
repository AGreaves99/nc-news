import { Button } from "react-bootstrap";
import { FaDeleteLeft } from "react-icons/fa6";
import { deleteComment } from "../../api-calls/api-calls";
import { useState } from "react";

function DeleteButton({
  setComments,
  comment_id,
  setCommentToDelete,
  setArticleData,
}) {
  const [loading, setLoading] = useState(false);
  function handleClick(event) {
    setLoading(true);
    setCommentToDelete(comment_id);
    deleteComment(comment_id).then(() => {
      setTimeout(() => {
        setComments((currentComments) => {
          return currentComments.filter(
            (comment) => comment.comment_id !== comment_id
          );
        });
        setCommentToDelete(null);
      }, 300);
      setLoading(false);
      setArticleData((currentData) => {
        return { ...currentData, comment_count: currentData.comment_count - 1 };
      });
    });
  }
  return (
    <Button
      value={comment_id}
      disabled={loading}
      className="vote-button"
      onClick={handleClick}
    >
      <FaDeleteLeft />
    </Button>
  );
}

export default DeleteButton;
