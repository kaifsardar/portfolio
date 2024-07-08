import React from 'react'
import project from '../project'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <div className='project-section'>
    <h2 className='project-title'>PROJECTS</h2>
    <div className='project-cards'>
        {project.map((p,index)=>(<ProjectCard key={index} {...p}/>))}
        <div className='scroll'>
        <div className='project-navigation'></div>
        <div className='project-navigation-scroll'></div>
        </div>
        
    </div>
    </div>
  )
}

export default Projects