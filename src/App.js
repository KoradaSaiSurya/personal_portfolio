import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './components/Projects'; // this is important
import About from './About'; // this is important
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import ContactInfo from './components/ContactInfo';

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contactInfo' element={<ContactInfo />} />

      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
