import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="website-name">WeCare</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
}

export default Navbar;
