import { useState } from "react";
import {
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../../styling/VoteButton.css";

function VoteButton({ articleVotes, setArticleVotes }) {
  const [value, setValue] = useState(0);
  const [currentAndPreviousValue, setCurrentAndPreviousValue] = useState({
    current: 0,
    previous: 0,
  });
  const [previousValue, setPreviousValue] = useState(0);
  const { article_id } = useParams();

  function handleClick(event) {
    setCurrentAndPreviousValue((currentValues) => {
      const updatedObject = { ...currentValues };
      updatedObject.previous = currentValues.current;
      if (currentValues.current === Number(event.target.value)) {
        updatedObject.current = 0;
      } else {
        updatedObject.current = Number(event.target.value);
      }
      console.log(
        `votes should increase by: ${
          updatedObject.current - updatedObject.previous
        }`
      );
      setArticleVotes(
        articleVotes + updatedObject.current - updatedObject.previous
      );
      return updatedObject;
    });
    // setCurrentAndPreviousValue({
    //   ...currentAndPreviousValue,
    //   previous: currentAndPreviousValue.current,
    // });
    // setPreviousValue(value);
    // if (currentAndPreviousValue.current === Number(event.target.value)) {
    //   setValue(0);
    //   setCurrentAndPreviousValue({ ...currentAndPreviousValue, current: 0 });
    // } else {
    //   setValue(Number(event.target.value));
    //   setCurrentAndPreviousValue({
    //     ...currentAndPreviousValue,
    //     current: Number(event.target.value),
    //   });
    // }
  }

  return (
    <div>
      <Button
        id="upvote"
        value={1}
        active={currentAndPreviousValue.current === 1}
        onClick={handleClick}
      >
        Upvote
      </Button>
      <Button
        id="downvote"
        value={-1}
        active={currentAndPreviousValue.current === -1}
        onClick={handleClick}
      >
        Downvote
      </Button>
    </div>
  );
}

export default VoteButton;
