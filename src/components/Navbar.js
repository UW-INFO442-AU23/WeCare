import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../f-config';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

// if current user is not null then you set the link

  return (
    <nav className="navbar navbar-expand-sm">
      {/* <nav className="navbar navbar-expand-sm bg-body-secondary"></nav> */}
      <div className="container-fluid">
        <a className="navbar-brand" href="/">WeCare</a>
        <button className="navbar-toggler collapsed" type="button" onClick={toggleIcon} data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
          {/* <i className="fas fa-hamburger"></i> */}
          <div className={`animated-icon2 ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/">Home</a>
            {/* <a className="nav-link" href="/home2">Home2</a> */}
            <a className="nav-link" href="/quiz">Quiz</a>
            <a className="nav-link" href="/resources">Resources</a>
            {isAuthenticated ? (
            <a className="nav-link" href="/profile">Profile</a>
          ) : (
            <a className="nav-link" href="/login">Login</a>
          )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
