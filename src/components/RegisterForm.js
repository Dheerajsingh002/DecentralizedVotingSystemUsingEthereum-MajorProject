// Import React and necessary components
import React, { useState } from 'react';
import '../css/LoginForm.css'; // Make sure to adjust the path to your actual CSS file
import { Link } from 'react-router-dom';

// Functional component representing the sign-up form
const RegisterForm = () => {
  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit}>
            <h2 className="title">Sign up</h2>
            {/* Display any alert messages here */}
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="ConfirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>

          <div className="signup-image">
            {/* Add your image source */}
            <img src={process.env.PUBLIC_URL + '/img/home_page.png'} alt="Signup page" />
            <b>
            <p>
              If you have already signed up, that's great!! Please LOGIN
            </p>
            </b>
           
            <Link to="/login">
              <button className="btn transparent" id="sign-up-btn">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
