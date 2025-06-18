import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className='footer'>
        <li><Link className='footer-link' to="/">Home</Link></li>
        <li><Link className='footer-link' to="/projects">Projects</Link></li>
        <li><Link className='footer-link' to="/about">About</Link></li>
        <li><Link className='footer-link' to="/skills">Skills</Link></li>
        <li><Link className='footer-link' to="/contact">Contact</Link></li>
      </ul>
      
      <p className='copyright'>
        © {new Date().getFullYear()} Korada Sai Surya. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer;
