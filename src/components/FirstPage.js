import { Link } from 'react-router-dom';
import React from 'react';
import '../css/FirstPage.css';


const FirstPage = () => {
  return (
    <div>
      <header className="site-header clearfix">
        <nav>
          <div className="logo">
            <h1>E-Vote</h1>
          </div>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>AboutUs</li>
              <li>ContactUs</li>
            </ul>
          </div>
        </nav>
        <section>
          <div className="leftside">
            <img src={process.env.PUBLIC_URL + '/img/home_page.png'} alt="Home Page" />
          </div>
          <div className="rightside">
            <h1>VOTE!</h1>
            <p> LET YOUR VOICE BE HEARD! </p>
            <Link to="/register">
              <button>USER SIGN-UP/LOGIN</button>
            </Link>
            <Link to="/candidateregister">
              <button>ADMIN SIGN-UP/LOGIN</button>
            </Link>
          </div>
        </section>
      </header>
    </div>
  );
};

export default FirstPage;
