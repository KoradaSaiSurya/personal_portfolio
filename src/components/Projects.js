// import React from 'react'


// const Projects = () => {
//   return (
//     <div className='container-box'>
//       <p className='browse'> Browse My Recent </p>
//       <h2 className='projects'>  Projects </h2>
//       <div className='cards'>

//       <div className='project-Card'>
//          <img className='surya-img-in-project' src='portfoliopic.png' alt='suryaImg'/>
//          <h3> PortPolio </h3> 
//          <div className='Gitlive'> 
//            <a className='git' href='https://github.com/KoradaSaiSurya/personal-portfolio.git'>  GitHub  </a>
//            <a className='git'  href="personal-portfolio-kappa-nine-39.vercel.app"> Live Demo </a>
//          </div>
//       </div>

//       <div className='project-Card'>
//         <img className='surya-img-in-project' src='weatherapp.png' alt='suryaImg'/>
//          <h3> Weather </h3> 
//          <div className='Gitlive'> 
//          <a  className='git' href='https://github.com/KoradaSaiSurya/search-weather.git'> GitHub </a>
//          <a className='git'  href="http://search-weather-zeta.vercel.app"> Live Demo </a>
//          </div>
//       </div>

//       <div className='project-Card'>
//         <img className='surya-img-in-project' src='expense.png' alt='suryaImg'/>
//          <h3> Expense Tracker </h3> 
//          <div className='Gitlive'> 
//          <a  className='git' href='https://github.com/KoradaSaiSurya/expense-tracker.git'> GitHub </a>
//         <a className='git'  href="http://expense-tracker-dun-two.vercel.app"> Live Demo </a>
//          </div>
//       </div>
      
      

     
//     </div>
//     </div>
//   )
// }

// export default Projects




import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Portfolio',
    img: 'portfoliopic.png',
    github: 'https://github.com/KoradaSaiSurya/personal-portfolio.git',
    live: 'https://personal-portfolio-kappa-nine-39.vercel.app',
    tags: ['React', 'Responsive', 'Vercel']
  },
  {
    id: 2,
    title: 'Weather App',
    img: 'weatherapp.png',
    github: 'https://github.com/KoradaSaiSurya/search-weather.git',
    live: 'https://search-weather-zeta.vercel.app',
    tags: ['API', 'OpenWeather', 'JS']
  },
  {
    id: 3,
    title: 'Expense Tracker',
    img: 'expense.png',
    github: 'https://github.com/KoradaSaiSurya/expense-tracker.git',
    live: 'https://expense-tracker-dun-two.vercel.app',
    tags: ['LocalStorage', 'React', 'CRUD']
  },
  {
    id: 4,
    title: 'Interior Design',
    img: 'interior.webp',
    github: 'https://github.com/KoradaSaiSurya/interiors',
    live: 'https://interiors-iota.vercel.app',
    tags: ['LocalStorage', 'React', 'CRUD']
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <p className="browse">Browse My Recent</p>
        <h2 className="projects-title">Projects</h2>
        {/* <p className="projects-sub">Best works — clean UI, responsive & deploy-ready.</p> */}
      </div>

      <div className="projects-grid">
        {projectsData.map(p => (
          <article key={p.id} className="project-card" tabIndex="0" aria-labelledby={`proj-${p.id}`}>
            <div className="project-media">
              <img
                src={p.img}
                alt={`${p.title} screenshot`}
                className="project-thumb"
              />
              <div className="project-tags">
                {/* {p.tags.map((t, i) => <span key={i} className="tag">{t}</span>)} */}
              </div>
            </div>

            <div className="project-body">
              <h3 id={`proj-${p.id}`} className="project-name">{p.title}</h3>
              <p className="project-desc">A clean, responsive demo showing design + functionality.</p>

              <div className="project-actions">
                <a
                  className="btn btn-outline"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} GitHub`}
                >
                  <FaGithub /> <span>GitHub</span>
                </a>

                <a
                  className="btn btn-solid"
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} Live demo`}
                >
                  <FaExternalLinkAlt /> <span>Live Demo</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
