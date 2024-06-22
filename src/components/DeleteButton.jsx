import { Button } from "react-bootstrap";
import { FaDeleteLeft } from "react-icons/fa6";
import { deleteComment } from "../../api-calls/api-calls";

function DeleteButton({ setComments, comment_id, setCommentToDelete }) {
  function handleClick(event) {
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
    });
  }
  return (
    <Button value={comment_id} className="vote-button" onClick={handleClick}>
      <FaDeleteLeft />
    </Button>
  );
}

export default DeleteButton;
