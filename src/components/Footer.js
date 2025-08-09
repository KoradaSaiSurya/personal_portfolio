import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo / Name */}
      <div className="footer-brand">
        <h2>Sai Surya</h2>
        <p>Frontend Developer</p>
      </div>

      {/* Navigation Links */}
      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contactInfo">Contact</Link>
      </nav>

      {/* Social Links */}
      <div className="footer-social">
        <a href="https://github.com/KoradaSaiSurya" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/sai-surya-korada" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        
      </div>

      {/* Bottom Credits */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sai Surya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
