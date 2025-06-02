import React from 'react'
import { Link } from 'react-router-dom';
// import Navbar from './components/Navbar'
import About from './About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { FaGithub ,FaLinkedin} from "react-icons/fa";
import Footer from './components/Footer'


const Home = () => {
  return (
    <div>
     <div className='homeImgText'> 

      <div className='suryaImgDiv '> <img className='suryaImg' src='suryaImg.jpg' alt='suryaImg'/> <br/> </div>
       <div className='myText'> 
       <p className='hello'> Hello I'm</p>
       <h2 className='saisurya'> Sai Surya </h2>
        <p className='frontend'>  Frontend Developer </p>


        <a className='resume' href='Frontend_Resume.pdf' download>  Download CV </a>
         <Link className='contact-info' to="/contactInfo"> <span > Contact Info </span></Link>


        
        <div className='home-icons'>
        <a href='https://github.com/KoradaSaiSurya'>  <FaGithub /> </a>
        <a href='https://linkedin.com/in/sai-surya-korada'>  <FaLinkedin /> </a>
        </div>
       </div>
      </div>
       <About />
       <Skills />
       <Projects />
       <Contact />
       <Footer />
    </div>
  )
}

export default Home
