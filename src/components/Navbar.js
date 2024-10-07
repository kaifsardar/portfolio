import React, { useState } from 'react';
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import { IoMdDownload } from "react-icons/io";

 function Navbar() {
    const [showNav,setShowNav]=useState(false);
  return (
    <div className='navbar '>
      <a className='resume' href='./assets/new_cv2.pdf' download={true}>
        < IoMdDownload />
        <p>Resume</p>
      </a>
      <div onClick={()=>{setShowNav(!showNav)}} className='nav-button'>
      {showNav?(<ImCross />):(<GiHamburgerMenu />)}

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
