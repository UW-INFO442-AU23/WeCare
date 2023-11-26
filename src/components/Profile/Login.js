import React, { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../f-config';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user); // Update user state in context
        navigate('/profile');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <main className="login-container" id="container-bg">
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
