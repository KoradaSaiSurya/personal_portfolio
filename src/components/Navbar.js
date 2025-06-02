import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {

  
  return (
    
     <div className="navbar">
  <div className="logo">Surya </div>
  <ul className="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/skills">Skills</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</div>

   
  );  
};

export default Navbar;

