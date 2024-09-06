import { useEffect, useState } from "react";
import { getTopics } from "../../api-calls/api-calls";
import { useNavigate } from "react-router-dom";
import "../../styling/Dropdown.css"; // Import the CSS file

function TopicDropdown() {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  function handleClick(event) {
    const topic = event.target.value;
    topic ? navigate(`/topic/${topic}`) : navigate("/");
  }

  return (
    <select name="topics" id="topic-select" onChange={handleClick}>
      <option value="">--View by Topic--</option>
      {topics.map((topic) => (
        <option key={topic.slug} value={topic.slug}>
          {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
        </option>
      ))}
    </select>
  );
}

export default TopicDropdown;
