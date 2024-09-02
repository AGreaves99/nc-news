import { Button } from "react-bootstrap";
import { FaDeleteLeft } from "react-icons/fa6";
import { deleteComment } from "../../api-calls/api-calls";
import { useState } from "react";

function DeleteButton({
  setComments,
  comment_id,
  setCommentToDelete,
  setArticleData,
  setError,
}) {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);

    deleteComment(comment_id)
      .then(() => {
        setCommentToDelete(comment_id);
        setTimeout(() => {
          setComments((currentComments) => {
            return currentComments.filter(
              (comment) => comment.comment_id !== comment_id
            );
          });
          setCommentToDelete(null);

          setArticleData((currentData) => {
            return {
              ...currentData,
              comment_count: currentData.comment_count - 1,
            };
          });

          setLoading(false);
        }, 300);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      })
      .finally(() => {
        setTimeout(() => {
          setError(false);
        }, 3000);
      });
  }

  return (
    <Button
      aria-describedby="delete button"
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
