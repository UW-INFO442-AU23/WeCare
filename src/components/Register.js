// Register.js
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './f-config';
import './style.css'; 

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/login');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main className="main-container">
      <section className="register-section">
        <div className="register-content">
          <h1 className="register-logo">WeCare</h1>
          <form className="register-form">
            <div className="form-group">
              <label htmlFor="email-address">Email address:</label>
              <input
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="register-button"
                onClick={onSubmit}
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="register-login-link">
            Already have an account?{' '}
            <NavLink to="/login" className="login-link">
              Sign in
            </NavLink>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Register;
