import React, { useState } from 'react';

const Navbar = React.memo(({ isAuthenticated, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  // If still loading, show a loading indicator or skeleton
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
            <a className="nav-link" href="/">Home</a>
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
});

export default Navbar;
