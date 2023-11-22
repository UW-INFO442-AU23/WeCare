import React, { useState, useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import { Link } from 'react-router-dom';

const Navbar = React.memo(() => {

  const { isAuthenticated, isLoading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  if (isLoading) {
    return <div>Loading...</div>; // Replace with a more sophisticated loader or skeleton if needed
  }

  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">WeCare</a>
        <button className="navbar-toggler collapsed" type="button" onClick={toggleIcon} data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <div className={`animated-icon2 ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/quiz">Quiz</Link>
            <Link className="nav-link" to="/resources">Resources</Link>
            {isAuthenticated ? (
              <Link className="nav-link" to="/profile">Profile</Link>
            ) : (
              <Link className="nav-link" to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
