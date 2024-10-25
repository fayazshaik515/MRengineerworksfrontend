// HomePage.js
import React from 'react';
import './HomePage.css';
import background from '../assets/welding3.jpg';
import { useNavigate } from 'react-router-dom'; 

const HomePage = () => {
  const navigate = useNavigate(); 

  const handleConnectClick = () => {
    navigate('/contact'); 
  };

  return (
    <div className="homepage-container">
      <div
        className="background-layer"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="content">
        <p>Welcome to <b>MR Engineering Works</b></p>
        <h1>We build your dreams</h1>
        <button className="connect-btn" onClick={handleConnectClick}>
          Connect with Us
        </button>
      </div>
    </div>
  );
};

export default HomePage;
