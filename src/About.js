// import React from 'react';

// const About = () => {


//   return (
//    <div className='about'> 
//       <p className='browse'> Get To Know More </p>
//       <h2 className='projects'> About Me </h2>

//       <div className='img-text'>
//         <img className="surya-Img-About" src='suryaImg.jpg' alt='surya-Img' />

//         <div className='cards-text'>
//           <div className='experience-cards'>
//             <div className='experience'>
//               <h4> Experience </h4>
//               <p> Fresher </p>
//               <p> Frontend Web Development</p>
//             </div>

//             <div className='experience'>
//               <h4> Education </h4>
//               <p> 2025 </p>
//               <p style={{fontSize:"15px"}}> Bachelor Science in Computers </p>
//             </div>
//           </div>

//           <p className='about-paragraph'>
//             I'm a self-taught <strong>  Frontend Developer </strong> from Tuni, AndhraPradesh,
//             passionate about building beautiful, fast, and user-friendly websites.
//             I specialize in HTML, CSS, JavaScript, and React.
//             I love turning designs into real-world applications that solve problems and look great on all devices.
//             My goal is to keep learning and growing as a developer while building meaningful digital experiences.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;




import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <p className="section-subtitle">Get To Know More</p>
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <div className="about-img-wrapper">
          <img className="about-img" src="suryaImg.jpg" alt="Sai Surya" />
          {/* <div className="img-overlay"></div> */}
        </div>

        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <h4>Experience</h4>
              <p>Fresher</p>
              <p>Frontend Web Development</p>
            </div>
            <div className="about-card">
              <h4>Education</h4>
              <p>2025</p>
              <p>Bachelor Science in Computers</p>
            </div>
          </div>

          <p className="about-text">
            I'm a self-taught <strong>Frontend Developer</strong> from Tuni, Andhra Pradesh,
            passionate about building beautiful, fast, and user-friendly websites.
            I specialize in HTML, CSS, JavaScript, and React.
            I love turning designs into real-world applications that solve problems and
            look great on all devices. My goal is to keep learning and growing as a
            developer while building meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
