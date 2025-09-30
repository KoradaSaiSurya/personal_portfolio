
import React, { useState, useEffect } from 'react';
import { FaHome, FaProjectDiagram, FaInfoCircle, FaLaptopCode, FaEnvelope, FaCalendarCheck, FaServicestack } from 'react-icons/fa';
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
        

      <div className="bottom-navbar">
         <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/projects"><FaProjectDiagram /> Projects</Link></li>
        <li><Link to="/about"><FaInfoCircle /> About</Link></li>
        <li><Link to="/skills"><FaLaptopCode /> Skills</Link></li>
        <li><Link to="/service"><FaEnvelope /> Service</Link></li>
      </div> 
      </div>
    );
  }

  // Desktop version
  return (
    <div className="navbar">
  <div className='logo'> <Link to="/"><span>Sai Surya</span></Link></div>
  <ul className="nav-links">
    <li><Link to="/"><FaHome /><span>Home</span></Link></li>
    <li><Link to="/projects"><FaProjectDiagram /><span>Projects</span></Link></li>
    <li><Link to="/about"><FaInfoCircle /><span>About</span></Link></li>
    <li><Link to="/skills"><FaLaptopCode /><span>Skills</span></Link></li>
    <li><Link to="/contact"><FaEnvelope /><span>Contact</span></Link></li>
    <li><Link to="/service"><FaServicestack /><span>Service</span></Link></li>
  </ul>
 <button className="book-btn">
  <li>
    <Link to="/book">
      <FaCalendarCheck /> <span>Book Now</span>
    </Link>
  </li>
</button>
</div>

  );
};

export default Navbar;
