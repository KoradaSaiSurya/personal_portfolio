import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
       <li><Link className='logo' to="/">Surya</Link></li>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>

        <li><Link className='footer-link' to="/">Home</Link></li>
        <li><Link className='footer-link' to="/projects">Projects</Link></li>
        <li><Link className='footer-link' to="/about">About</Link></li>
        <li><Link className='footer-link' to="/skills">Skills</Link></li>
        <li><Link className='footer-link' to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
