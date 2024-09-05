import "../../styling/Navbar.css";
import TopicDropdown from "./TopicDropdown";
function Navbar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li>All Articles</li>
        <li>
          <TopicDropdown />
        </li>
        <li>Write an Article</li>
      </ul>
    </nav>
  );
}

export default Navbar;
