import React from 'react';
import { FaHtml5, FaJsSquare, FaGithub, FaCss3Alt, FaReact, FaCode, FaPaintBrush, FaVideo, FaMobileAlt, FaLightbulb, FaComments } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className='skills-section'>
      <p className='browse'>Explore My</p>
      <h2 className='projects'>Skills</h2>

      <div className='skills-grid'>

        {/* Professional Skills */}
        <div className='skill-card'>
          <h3>Professional</h3>
          <div className='skill-list'>
            <div className='skill-item'><FaHtml5 /> HTML</div>
            <div className='skill-item'><FaJsSquare /> JavaScript</div>
            <div className='skill-item'><FaGithub /> GitHub</div>
            <div className='skill-item'><FaCss3Alt /> CSS</div>
            <div className='skill-item'><FaReact /> React</div>
            <div className='skill-item'><FaCode /> VS Code</div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className='skill-card'>
          <h3>Additional</h3>
          <div className='skill-list'>
            <div className='skill-item'><FaPaintBrush /> Canva</div>
            <div className='skill-item'><FaVideo /> Video Editing</div>
            <div className='skill-item'><FaMobileAlt /> Capcut</div>
            <div className='skill-item'><FaLightbulb /> Design Thinking</div>
            <div className='skill-item'><FaComments /> Communication</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
