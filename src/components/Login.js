// Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './f-config';
import { NavLink, useNavigate } from 'react-router-dom';
import './style.css'; 

// Define the Login component
const Login = () => {
  // Initialize state variables using the useState hook
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Function to handle the login process
  const onLogin = (e) => {
    e.preventDefault();
    // Attempt to sign in with provided email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in and navigate to the profile page
        const user = userCredential.user;
        navigate('/profile');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code; //error message if user does not have an account with us
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main className="login-container">
      <section className="login-section">
        <div className="login-content">
          <p className="login-logo">WeCare</p>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email-address">Email address:</label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="login-button" onClick={onLogin}>
                Login
              </button>
            </div>
          </form>
          {error && <p className="error-message">{error}</p>}
          <p className="login-signup-link">
            No account yet?{' '}
            <NavLink to="/register" className="login-link">
              Sign up
            </NavLink>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
