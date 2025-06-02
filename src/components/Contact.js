import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contacts-surya'>
      <h2 className='contact-heading'>Contact</h2>

      <div className='contact-details'>
        <p className='surya-gmail'>
          ✉ : koradasaisurya2003@gmail.com
        </p>
        <a className='surya-linkedin' href='https://linkedin.com/in/sai-surya-korada' target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> Linkedin
        </a>
      </div>
    </div>
  );
};

export default Contact;

