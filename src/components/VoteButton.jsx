import { useState } from "react";
import {
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  Button,
} from "react-bootstrap";
import "../../styling/VoteButton.css";

function VoteButton() {
  const [value, setValue] = useState([]);
  const [active, setActive] = useState("none");

  function handleClick(event) {
    console.log(event.target);
    setActive(event.target.id)
  }

  return (
    <div>
      <Button id="upvote"value={1} active={active === "upvote"} onClick={handleClick}>
        Upvote
      </Button>
      <Button id="downvote" value={-1} active={active === "downvote"} onClick={handleClick}>
        Downvote
      </Button>
    </div>
  );
}

export default VoteButton;
