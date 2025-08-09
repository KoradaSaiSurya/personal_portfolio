import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact-section'>
      <p className='contact-subtitle'>Get in Touch</p>
      <h2 className='contact-title'>Contact Me</h2>

      <div className='contact-card'>
        
        <div className='contact-item'>
          <FaEnvelope className='contact-icon' />
          <a href="mailto:koradasaisurya2003@gmail.com">
            koradasaisurya2003@gmail.com
          </a>
        </div>

        <div className='contact-item'>
          <FaPhoneAlt className='contact-icon' />
          <a href="tel:+919000000000">+91 90000 00000</a>
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

      </div>
    </div>
  );
};

export default Contact;
