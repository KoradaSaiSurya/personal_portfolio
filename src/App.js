import React from 'react';
import { HashRouter , Routes, Route } from "react-router-dom";
import Home from './Home';
import Projects from './components/Projects'; 
import About from './About';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import ContactInfo from './components/ContactInfo';

const App = () => {
  return (
    <HashRouter>
     <Navbar />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contactInfo' element={<ContactInfo />} />

      </Routes>
      
  </HashRouter>
  );
};

export default App;
