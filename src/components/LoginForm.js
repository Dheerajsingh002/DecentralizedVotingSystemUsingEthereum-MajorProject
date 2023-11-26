import React from 'react';
import { Link } from 'react-router-dom';
// import '../css/LoginForm.css'; 

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic to handle form submission here
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form method="post" action="/login" onSubmit={handleSubmit}>
            <h2 className="title">Sign in</h2>

            {/* Assuming alertMsg is a prop passed to the component */}
            {/* {typeof alertMsg !== 'undefined' ? alertMsg : ''} */}

            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Email Address"
                name="email_address"
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
          <div className="signup-image">
            {/* Add your image source */}
            <img src={process.env.PUBLIC_URL + '/img/ev.png'} alt="Login page" />
            <p>
              If you haven't signed up yet, please
            
            </p>
            <Link to="/register">
              <button className="btn transparent" id="sign-up-btn">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
