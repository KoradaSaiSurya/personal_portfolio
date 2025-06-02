import React from 'react';

const About = () => {


  return (
   <div> 
      <p className='browse'> Get To Know More </p>
      <h2 className='projects'> About Me </h2>

      <div className='img-text'>
        <img className="surya-Img-About" src='suryaImg.jpg' alt='surya-Img' />

        <div className='cards-text'>
          <div className='experience-cards'>
            <div className='experience'>
              <h4> Experience </h4>
              <p> Fresher </p>
              <p> Frontend Development</p>
            </div>

            <div className='experience'>
              <h4> Education </h4>
              <p> 2025 </p>
              <p> Bachelor Science in Computers </p>
            </div>
          </div>

          <p className='about-paragraph'>
            I'm a self-taught Frontend Developer from Tuni, AndhraPradesh,
            passionate about building beautiful, fast, and user-friendly websites.
            I specialize in HTML, CSS, JavaScript, and React.
            I love turning designs into real-world applications that solve problems and look great on all devices.
            My goal is to keep learning and growing as a developer while building meaningful digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
