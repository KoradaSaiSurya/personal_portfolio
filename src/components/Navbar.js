import React, { useState, useEffect } from 'react';
import { FaHome, FaProjectDiagram, FaInfoCircle, FaLaptopCode, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ✅ React Router link

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div>
        {/* <div className="mobile-top-fixed">
          <span>🚀 Sai Surya | Frontend Developer</span>
        </div> */}

      <div className="bottom-navbar">
         <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/projects"><FaProjectDiagram /> Projects</Link></li>
        <li><Link to="/about"><FaInfoCircle /> About</Link></li>
        <li><Link to="/skills"><FaLaptopCode /> Skills</Link></li>
        <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
      </div> 
      </div>
    );
  }

  // Desktop version
  return (
    <div className="navbar">
  <div className="logo"> Sai Surya</div>
  <ul className="nav-links">
    <li><Link to="/"><FaHome /><span>Home</span></Link></li>
    <li><Link to="/projects"><FaProjectDiagram /><span>Projects</span></Link></li>
    <li><Link to="/about"><FaInfoCircle /><span>About</span></Link></li>
    <li><Link to="/skills"><FaLaptopCode /><span>Skills</span></Link></li>
    <li><Link to="/contact"><FaEnvelope /><span>Contact</span></Link></li>
  </ul>
</div>

  );
};

export default Navbar;
