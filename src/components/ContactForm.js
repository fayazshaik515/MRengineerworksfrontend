import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [showNotification, setShowNotification] = useState(false); 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    try {
      const response = await axios.post('http://localhost:8080/api/user/SubmitDetails', formData);
      setResponseMessage(response.data);
      setIsError(false);
      setShowNotification(true); 
      setTimeout(() => setShowNotification(false), 3000); 

      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      setResponseMessage('Failed to submit details: ' + (error.response ? error.response.data : error.message));
      setIsError(true);
      setShowNotification(true); 
      setTimeout(() => setShowNotification(false), 3000); 
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:mrengineerworks5@gmail.com';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+917095333509', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919603055349';
  };

  return (
    <div className="container">
      <h2>Get In Touch With Us</h2>
      
      {showNotification && (
        <div className={`notification ${isError ? 'error' : 'success'}`}>
          {responseMessage}
        </div>
      )}
      
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Name"
            className="input"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Phone Number"
            className="input"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="input"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <textarea
            placeholder="Message"
            className="textarea"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="button">Send Now</button>
      </form>

      <div className="icons-container">
        <div className="icon-wrapper" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
          <FaEnvelope size={32} className="icon" />
          <span><a href="mailto:mrengineerworks5@gmail.com">mrengineerworks5@gmail.com</a></span>
        </div>
        <div className="icon-wrapper" onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }}>
          <FaWhatsapp size={32} className="icon" />
          <span><a href="https://wa.me/+917095333509">+91 7095333509</a></span>
        </div>
        <div className="icon-wrapper" onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
          <FaPhoneAlt size={32} className="icon" />
          <span><a href="tel:+919603055349">+91 9603055349</a></span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
