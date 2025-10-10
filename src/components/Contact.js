import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaUser, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact-section'>
      <p className='contact-subtitle'>Get in Touch</p>
      <h2 className='contact-title'>Contact Me</h2>

      <div className='contact-card'>

         <div className='contact-item'>
          <FaUser className='contact-icon' />
         <strong>  Korada Sai Surya</strong> 
        </div>

         <div className='contact-item'>
          <FaLinkedin className='contact-icon' />
          <a 
            href='https://linkedin.com/in/sai-surya-korada' 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className='contact-item'>
          <FaPhoneAlt className='contact-icon' />
          +91 90144 81050
        </div>


        
        <div className='contact-item'>
          <FaEnvelope className='contact-icon' />
          <a href="mailto:koradasaisurya2003@gmail.com">
            koradasaisurya2003@gmail.com
          </a>
        </div>

        
       
        <div className='contact-item'>
          <FaMapMarkerAlt className='contact-icon' />
         Tuni, Andhra Pradesh 
        </div>


       

         
       

      </div>
    </div>
  );
};

export default Contact