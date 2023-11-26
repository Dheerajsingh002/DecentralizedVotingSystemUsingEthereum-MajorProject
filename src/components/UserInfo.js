import React, { useState, useEffect } from 'react';
import '../css/UserInfo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const UserInfo = () => {
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  const handlePanelItemClick = (section) => {
    setActiveSection(section);
  };


  return (
    <div className="panel-container">
    <div className="panel">
      <div className={`panel-item ${activeSection === 'information' ? 'active' : ''}`} onClick={() => handlePanelItemClick('information')}>
        <i className="fas fa-info-circle"></i>
        <span>Information</span>
      </div>
      <div className={`panel-item ${activeSection === 'votingRegistration' ? 'active' : ''}`} onClick={() => handlePanelItemClick('votingRegistration')}>
        <i className="fas fa-check-square"></i>
        <span>Voting Registration</span>
      </div>
      <div className={`panel-item ${activeSection === 'votingArea' ? 'active' : ''}`} onClick={() => handlePanelItemClick('votingArea')}>
        <i className="fas fa-vote-yea"></i>
        <span>Voting Area</span>
      </div>
      <div className={`panel-item ${activeSection === 'result' ? 'active' : ''}`} onClick={() => handlePanelItemClick('result')}>
        <i className="fas fa-poll"></i>
        <span>Result</span>
      </div>
      <div className={`panel-item ${activeSection === 'logout' ? 'active' : ''}`} onClick={() => handlePanelItemClick('logout')}>
        <i className="fas fa-sign-out-alt"></i>
        <span>Logout</span>
      </div>
    </div>
    <div className="content-container">
      {activeSection === 'information' && (
        <div className="content">
          <h4 style={{fontSize:'20px'}}>Welcome</h4>
            <h5>These are few Guidelines for the user:</h5>
            <h5 style={{fontSize:'20px'}}>1. Voter Registration</h5>
            <ul>
              <li>For casting the vote, the user needs to first register himself. For this registration purpose, the user will be provided a voter registration form on this website.</li>
              <li>The voter can only register in the registration phase. After the registration phase is over, the user cannot register and thus will not be able to vote.</li>
              <li>For registration, the user will have to enter his Aadhar card number and the account address which the user will be using for voting purpose.</li>
              <li>At the first stage, the user’s age will be checked. If the user is 18 or above 18 years of age, then only he is eligible to vote.</li>
              <li>The second stage is OTP verification. This stage is required to validate the voter itself. After entering the Aadhar number and successful age verification.</li>
              <li>After entering the correct OTP, the user will get successfully registered.</li>
            </ul>
            <h5 style={{fontSize:'20px'}}>2. Voting Process</h5>
            <ul>
              <li>Overall, the voting process is divided into three phases. All of which will be initialized and terminated by the admin. Users have to participate in the process according to the current phase.</li>
            </ul>
            <ol>
              <li><strong>Registration Phase</strong>: During this phase, the registration of the users (who are going to cast the vote) will be carried out.</li>
              <li><strong>Voting Phase</strong>: After initialization of the voting phase from the admin, the user can cast the vote in the voting section. The casting of vote can be simply done by clicking on the “VOTE” button, after which the transaction will be initiated and after confirming the transaction the vote will get successfully casted. After the voting phase gets over, the user will not be able to cast a vote.</li>
              <li><strong>Result Phase</strong>: This is the final stage of the whole voting process during which the results of the election will be displayed at the “Result” section.</li>
            </ol>
        </div>
      )}
      {activeSection === 'votingRegistration' && (
        <div className="content">
          <h4 style={{fontSize:'30px'}}>Register to Vote</h4>
          <p>Enter your Aadhar number and address to register for voting:</p>
          <div className="input-group">
            <label htmlFor="aadharNumber">Aadhar Number:</label>
            <input type="text" id="aadharNumber" />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address for Voting:</label>
            <input type="text" id="address" />
          </div>
          <button className="register-button">Register</button>
        </div>
      )}
      {activeSection === 'votingArea' && (
        <div className="content">
          <h1>Registration Phase is on ,go register yoursef to vote!!</h1>
        </div>
      )}
    </div>
  </div>
  );
};

export default UserInfo;
