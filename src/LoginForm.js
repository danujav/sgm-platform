import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './LoginForm.css'; // Import the CSS file for styling

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your authentication logic, for simplicity, I'm just checking if the username and password are not empty
    if (username && password) {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div className="login-container">
      {loggedIn ? (
        <h1>Welcome, {username}!</h1>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          <p className="register-text">Don't have an account? <Link to="/register">Register here</Link></p>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
