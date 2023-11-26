import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth} from '../../f-config';
import { AuthContext } from '../../AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { setUser } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user); // Update user state in context
      navigate('/profile');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="main-container" id="container-bg">
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

          {error && <p className="error-message">{error}</p>}

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


