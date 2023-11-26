import React from 'react';
import '../css/CandidateRegister.css';
import { Link } from 'react-router-dom';

const CandidateRegister = () => {
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        {/* Registration form fields */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" />
        </div>
        <button className="register-button">Register</button>
        <p>Already have an account? <Link to="/candidatelogin"><span className="signup-link">Sign In</span></Link></p>
      </div>
    </div>
  );
};

export default CandidateRegister ;
