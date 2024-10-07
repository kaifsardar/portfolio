import React, { useEffect, useState } from 'react'
import { Skill } from './Skill'
import skills from '../skill'
const Skills = () => {
    const [skill,setSkill]=useState('Programming Languages');
    const [skillList,setSkillList]=useState(skills[skill]);
    const onClickHandeler=(e)=>{
        setSkill(e.target.innerText);
        
    }

    useEffect(()=>{
        setSkillList(skills[skill]);
    },[skill]);
   
  return (
    <div >
        <h2 className='skills-title'>SKILLS</h2>
        <div className='skills-container'>
        <div className='skills-button'>
            <div>
            <button className={skill==='Programming Languages'?'selected-button':''} onClick={onClickHandeler}>Programming Languages</button>
            <button className={skill==='Web Development'?'selected-button':''} onClick={onClickHandeler}>Web Development</button>
            </div>

            <div>
            <button className={skill==='Databases'?'selected-button':''} onClick={onClickHandeler}>Databases</button>
            <button className={skill==='Tools'?'selected-button':''} onClick={onClickHandeler}>Tools</button>
            </div>
            <div>
            <button className={skill==='CourseWork'?'selected-button':''} onClick={onClickHandeler}>CourseWork</button>
            </div>
        </div>
        <div className='skills'>
            {skillList.map((s)=>{
                return (<Skill skill={s.name} percent={s.percent} />)
            })}
            
        </div>
        </div>
    </div>
  )
}

export default Skills