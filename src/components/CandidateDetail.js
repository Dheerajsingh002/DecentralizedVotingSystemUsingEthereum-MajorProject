import React, { useState, useEffect } from 'react';
import '../css/UserInfo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const CandidateDetail = () => {
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
        <div className="">
          <i className="fas fa-info-circle"></i>
          <span>Candidate Details</span>
        </div>
        <div className={`panel-item ${activeSection === 'addcandidate' ? 'active' : ''}`} onClick={() => handlePanelItemClick('addcandidate')}>
          <i className="fas fa-user-plus"></i>
          <span>Add Candidate</span>
        </div>
        <div className={`panel-item ${activeSection === 'register' ? 'active' : ''}`} onClick={() => handlePanelItemClick('votingRegistration')}>
          <i className="fas fa-clipboard-check"></i>
          <span>Register</span>
        </div>
        <div className={`panel-item ${activeSection === 'changestate' ? 'active' : ''}`} onClick={() => handlePanelItemClick('changestate')}>
          <i className="fas fa-exchange-alt"></i>
          <span>Change State</span>
        </div>
        <div className={`panel-item ${activeSection === 'logout' ? 'active' : ''}`} onClick={() => handlePanelItemClick('logout')}>
          <i className="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </div>
      </div>
      <div className="content-container">
        {activeSection === 'addcandidate' && (
          <div className="content">
          
            <h4 style={{fontSize:'30px'}}>Add Information</h4>
            <div className="input-group">
              <label htmlFor="candidateName" style={{fontSize:'20px'}}>Candidate Name:</label>
              <input type="text" id="candidateName" />
            </div>
            <div className="input-group">
              <label htmlFor="party" style={{fontSize:'20px'}}>Party:</label>
              <input type="text" id="party" />
            </div>
            <div className="input-group">
              <label htmlFor="age" style={{fontSize:'20px'}}>Age:</label>
              <input type="text" id="age" />
            </div>
            <div className="input-group">
              <label htmlFor="qualification" style={{fontSize:'20px'}}>Qualification:</label>
              <input type="text" id="qualification" />
            </div>
            <button className="add-button">
              <i className="fas fa-plus"></i> Add
            </button>
          </div>
        )}
        {activeSection === 'changestate' && (
          <div className="content">
            <h4>Change State</h4>
            <p>
               Current Vote:Voting
            </p>
            {/* ... content for Change State ... */}
            <button className="change-button">
              <i className="fas fa-exchange-alt"></i> Change
            </button>
          </div>
        )}
        {/* ... other content sections ... */}
      </div>
    </div>
  );
};

export default CandidateDetail;
