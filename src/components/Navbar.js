import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav class="navbar navbar-expand-sm bg-body-secondary">
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
            <a class="nav-link" href="/login">Login</a>
            <a class="nav-link" href="/">Home</a>
            <a class="nav-link" href="/quiz">Quiz</a>
            <a class="nav-link" href="/resources">Resources</a>
            <a class="nav-link" href="/profile">Profile</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
