import React from 'react'

const Skills = () => {
  return (
<div className='skills-container'>
    <p className='browse'> Explore My </p>
    <h2 className='projects'>  skills  </h2>

<div className='skill-container'>
       
    <div className='skill-box'>
       <h3> Professional </h3>

         <div className='proffesional'> 

          <div className='htmljs'> 
            <div className='skill'> <img className='tick' src='tick.png' alt='tick'/> <p> HTML </p> </div>
            <div className='skill'> <img className='tick' src='tick.png' alt='tick'/> <p> JavaScript </p> </div>
            <div className='skill'> <img className='tick' src='tick.png' alt='tick'/> <p> GitHub </p> </div>
          </div>
          
          <div className='htmljs'> 
            <div className='skill'> <img className='tick' src='tick.png' alt='tick'/> <p> CSS </p> </div>
            <div className='skill'> <img className='tick' src='tick.png' alt='tick'/> <p> React </p> </div>
            <div className='skill'> <img className='tick' src='tick.png' alt='tick'/> <p> VS Code </p> </div>
          </div>

        </div>
    </div>

    <div className='skills-box'>
       <h3> Additional  </h3>

         <div className='proffesional'> 

          <div className='htmljs'> 
            <div className='skill'> <img className='tick' src='tick.png' alt='tick'/> <p> Canva </p> </div>
            <div className='skill'> <img className='tick' src='tick.png' alt='tick'/> <p> Video editing </p> </div>
            <div className='skill'> <img className='tick' src='tick.png' alt='tick'/> <p> Capcut </p> </div>

          </div>
          
          <div className='htmljs'> 
            <div className='skill'> <img className='tick' src='tick.png' alt='tick'/> <p> Design Thinking </p> </div>
            <div className='skill'> <img className='tick' src='tick.png' alt='tick'/> <p> Commmunication  </p> </div>
          </div>
        </div>
    </div>

</div>
</div>
    
  )
}

export default Skills;
