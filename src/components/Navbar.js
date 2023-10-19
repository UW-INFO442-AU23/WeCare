import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <div className="navbar">
          <div className="website-name">WeCare</div>
          <div className="nav-links">
              <a href="/">Home</a>
              <a href="/quiz">Quiz</a>
              <a href="/profile">Profile</a>
              <a href="/resources">Resources</a>
          </div>
      </div>
  );
}


export default Navbar;
