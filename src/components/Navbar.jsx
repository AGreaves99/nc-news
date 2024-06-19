import "../../styling/Navbar.css";
function Navbar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li>All Articles</li>
        <li>Articles by Topic</li>
        <li>Write an Article</li>
      </ul>
    </nav>
  );
}

export default Navbar;
