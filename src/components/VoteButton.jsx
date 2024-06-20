import { useState } from "react";
import {
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../../styling/VoteButton.css";

function VoteButton() {
  const [value, setValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(0)
  const { article_id } = useParams();

  function handleClick(event) {
    setPreviousValue(value)
    if (value === Number(event.target.value)) {
      setValue(0)
    }
    else {
      setValue(Number(event.target.value))
    }
    console.log(value - previousValue);
  }

  return (
    <div>
      <Button id="upvote" value={1} active={value === 1} onClick={handleClick}>
        Upvote
      </Button>
      <Button id="downvote" value={-1} active={value === -1} onClick={handleClick}>
        Downvote
      </Button>
    </div>
  );
}

export default VoteButton;
