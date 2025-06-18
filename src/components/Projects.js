import React from 'react'


const Projects = () => {
  return (
    <div className='container-box'>
      <p className='browse'> Browse My Recent </p>
      <h2 className='projects'>  Projects </h2>
      <div className='cards'>

      <div className='project-Card'>
         <img className='surya-img-in-project' src='portfoliopic.png' alt='suryaImg'/>
         <h3> PortPolio </h3> 
         <div className='Gitlive'> 
           <a className='git' href='https://github.com/KoradaSaiSurya/personal-portfolio.git'>  GitHub  </a>
           <a className='git'  href="personal-portfolio-kappa-nine-39.vercel.app"> Live Demo </a>
         </div>
      </div>

      <div className='project-Card'>
        <img className='surya-img-in-project' src='weatherapp.png' alt='suryaImg'/>
         <h3> Weather </h3> 
         <div className='Gitlive'> 
         <a  className='git' href='https://github.com/KoradaSaiSurya/search-weather.git'> GitHub </a>
         <span className='git'> Live Demo </span>
         </div>
      </div>

      <div className='project-Card'>
        <img className='surya-img-in-project' src='expense.png' alt='suryaImg'/>
         <h3> Expense Tracker </h3> 
         <div className='Gitlive'> 
         <a  className='git' href='https://github.com/KoradaSaiSurya/expense-tracker.git'> GitHub </a>
         <span className='git'> Live Demo </span>
         </div>
      </div>
      
      

     
    </div>
    </div>
  )
}

export default Projects
