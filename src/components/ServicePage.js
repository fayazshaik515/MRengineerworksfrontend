import React from 'react';
import './SimpleServicePage.css'; // Import the CSS file
import gate from '../assets/gateservice.jpg';
import shutter from '../assets/shutterservice.jpg';
import mswork from '../assets/msworkservice.jpeg';
import ssrailing from '../assets/ssrailingservice.jpeg';
import pvc from '../assets/pvcservice.jpeg';
import ironshed from '../assets/ironshedservice.jpg';
import steplanding from '../assets/steplanding.jpeg';
import trolly from '../assets/trollyservice.jpeg';

const services = [
  { title: 'Gates', image: gate, description: <p>High-quality gates for residential and <br/>commercial use</p> },
  { title: 'Shutters', image: shutter, description: 'Durable and secure shutters.' },
  { title: 'MS Work', image: mswork, description: 'Metal structure fabrication with precision.' },
  { title: 'SS Railings', image: ssrailing, description: 'Stainles steel railings for durability and style' },
  { title: 'PVC Doors', image: pvc, description: 'Affordable and sturdy PVC doors.' },
  { title: 'Iron Sheds', image: ironshed, description: 'Iron sheds built for heavy-duty usage.' },
  { title: 'Step Landings', image: steplanding, description: 'Safe and durable step landings.' },
  { title: 'Trolleys', image: trolly, description: 'Heavy-duty trolleys for industrial purposes.' },
];

const SimpleServicePage = () => {
  return (
    <div className="service-page">
      <h1>Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleServicePage;
