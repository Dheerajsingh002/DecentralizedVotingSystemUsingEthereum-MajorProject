import React, { useState } from 'react';
import '../css/CandidateLogin.css';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const CandidateLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  return (
    
    <div className="login-container">
      
      <form className="login-form">
      <h2>Login</h2>
      <hr/>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <p>Don't have an account? <Link to="/candidateregister"><span className="signup-link">Sign Up</span></Link></p>
      </form>
    </div>
  );
};

export default CandidateLogin;
