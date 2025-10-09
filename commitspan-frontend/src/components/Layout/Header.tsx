import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>CommitSpan</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/goals">My Goals</Link>
          </li>
        </ul>
        <div>
          <a>Profile</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
