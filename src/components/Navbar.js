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

  return (
    <nav class="navbar navbar-expand-sm">
      {/* <nav class="navbar navbar-expand-sm bg-body-secondary"></nav> */}
      <div class="container-fluid">
        <a class="navbar-brand" href="/">WeCare</a>
        <button class="navbar-toggler collapsed" type="button" onClick={toggleIcon} data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span class="navbar-toggler-icon"></span> */}
          {/* <i class="fas fa-hamburger"></i> */}
          <div className={`animated-icon2 ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            {/* <a class="nav-link" href="/login">Login</a> */}
            <a class="nav-link" href="/">Home</a>
            {/* <a class="nav-link" href="/home2">Home2</a> */}
            <a class="nav-link" href="/quiz">Quiz</a>
            <a class="nav-link" href="/resources">Resources</a>
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
