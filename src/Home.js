import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="overall">
      
      {/* ===== Hero Section ===== */}
      <div className="homeImgText">
        
        {/* Profile Image */}
        <div className="suryaImgDiv">
          <img className="suryaImg" src="suryaImg.jpg" alt="Sai Surya" />
        </div>

        {/* Text Content */}
        <div className="myText">
          <p className="hello"> Hello, I'm</p>
          <h2 className="saisurya">Sai Surya</h2>
          <p className="frontend">Frontend Developer</p>

          {/* Buttons */}
          <div className="btn-group">
            <a className="resume" href="sai_surya_resume.pdf" download>
               Download CV
            </a>
            <Link className="contact-info" to="/contactInfo">
               Contact Info
            </Link>
          </div>

          {/* Social Links */}
          <div className="home-icons">
            <a href="https://github.com/KoradaSaiSurya" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/sai-surya-korada"  target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* ===== Other Sections ===== */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
