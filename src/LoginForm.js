import React, { useState } from "react";
// import { Link, useHistory } from 'react-router-dom'; // Import Link and useHistory from React Router
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./LoginForm.css"; // Import the CSS file for styling

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to your backend endpoint
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Authentication successful
        const data = await response.json();

        const { id, role } = data.data;
        localStorage.setItem('role', role);
        localStorage.setItem('userId', id);
        // Redirect based on user role
        if (role === "member") {
          // history.push('/member-dashboard');
          console.log("navigate to the member");
          navigate("/");
        } else if (role === "owner") {
          console.log("navigate to the owner");
          // history.push('/owner-dashboard');
          navigate("/");
        }
      } else {
        // Authentication failed
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-container">
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
        <p className="register-text">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
