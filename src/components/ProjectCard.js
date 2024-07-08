import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";


const ProjectCard = ({img,name,desc,date,tech,link,github}) => {
  return (
    <div className='project-container' data-aos="fade-right">
    <div className='project-card'>
        <img src={img} />
        <a  href={link}className='project-name'>{name}</a>
        <div className='links'>
        <a href={github}><FaGithub /></a>
        <a href={link}><FaExternalLinkAlt /></a>
        </div>
       
    </div>
    <div className='project-desc-container'>
        <p className='project-date'>{date}</p>
        <p className='project-desc'>{desc}</p>
        <div className='project-tech'>
            {tech.map((t)=>{
                return (<p className='tech'>{t}</p>)
            })}
        </div>
    </div>
    </div>
  )
}

export default ProjectCard