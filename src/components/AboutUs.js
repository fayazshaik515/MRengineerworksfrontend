import React from 'react';
import './AboutUs.css';
import pic from '../assets/welding3.jpg';

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-wrapper">
        <div className="about-image">
          <img src={pic} alt="Welder at Work" />
        </div>

        <div className="about-content">
          <h3 className="about-title">ABOUT US</h3>
          <h1 className="main-heading">OUR MISSION</h1>
          <p>We aim to provide high-quality services<br/> 
            that meet your needs.</p>
          <h1 className="main-heading">OUR TEAM</h1>
          <p>Our team consists of 25 skilled professionals<br/> with experience:</p>

          <h1 className="Why-Us">WHY CHOOSE US?</h1>
          <ul className="features">
            <li>✅ Quality Workmanship</li>
            <li>✅ Affordable Pricing</li>
            <li>✅ On-Time Project Delivery</li>
            <li>✅ Premium Materials</li>
            <li>✅ Skilled Workforce</li>
          </ul>
        </div>

        <div className="experience-box">
          <h2>20+</h2>
          <h1>Years of Experience</h1>
          <p>
            We work in areas like construction and manufacturing. Our team is certified and keeps up with the latest training. We’ve completed many important projects that show our commitment to quality. Safety is very important to us, and we have a great safety record. We are dedicated to providing excellent service and making our clients happy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
