import React, { useState } from 'react';
import { Link } from "react-scroll";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

 function Navbar() {
    const [showNav,setShowNav]=useState(false);
  return (
    <div className='navbar '>
      <div onClick={()=>{setShowNav(!showNav)}} className='nav-button'>
      {showNav?(<IoIosArrowDropup />):(<IoIosArrowDropdown />)}

      </div>
      <div  className= {!showNav?'nav-items visible-none':'nav-items'}>
          <Link onClick={()=>{setShowNav(!showNav)}} activeClass='active' className='nav-item' smooth spy to="home">HOME</Link>
          <Link onClick={()=>{setShowNav(!showNav)}} activeClass='active' className='nav-item' smooth spy to="skills">SKILLS</Link>
          <Link onClick={()=>{setShowNav(!showNav)}} activeClass='active' className='nav-item'  smooth spy to="projects">PROJECTS</Link>
          <Link onClick={()=>{setShowNav(!showNav)}} activeClass='active' className='nav-item' smooth spy to="education">EDUCATION</Link>
      </div>
    </div>
  );
}

export default Navbar;
