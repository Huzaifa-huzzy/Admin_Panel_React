// src/LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';
import Sidebar from '../Sidebar/Sidebar';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic (e.g., validate inputs, make API request)
    console.log('Logging in with:', { email, password });
  };

  return (
    <>
      {/* Sidebar */}
      <div className="sidebar-container">
        <Sidebar />
      </div>

      {/* Login Form */}
      <div className="login-container">
        <div className="login-form">
          <h2>Welcome Back!</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
