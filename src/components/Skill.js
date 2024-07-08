import React from 'react'

export const Skill = ({skill,percent}) => {
  return (
    <div className='skill' >
        <h3>{skill}</h3>
        <div style={{width:`${percent}%`}}></div>
    </div>
  )
}
