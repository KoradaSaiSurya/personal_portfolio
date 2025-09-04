import React from 'react';
import { FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <h1 className='contact-text'>Contact Information</h1>

      <div className='contact-box'>
        <div className="modal">
          <p><FaUser color="#ff5500" /> <strong>Name:</strong> Korada Sai Surya</p>
          <p><FaPhoneAlt color="#ff5500" /> <strong>Phone:</strong> +91 90144*****</p>
          <p><FaEnvelope color="#ff5500" /> <strong>Gmail:</strong> koradasaisurya2003@gmail.com</p>
          <p><FaMapMarkerAlt color="#ff5500" /> <strong>Place:</strong> Tuni, Andhra Pradesh</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
