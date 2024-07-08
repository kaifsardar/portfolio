import React from 'react'
import Typewriter from 'typewriter-effect';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";


const Banner = () => {
  return (
    <div className='banner'>
        <div className='left-banner'>

            <p className='hello'>Hello, </p>
            <h1 className='banner-title'>I'm Kaif </h1>
            <div className='typewritter'>
            <Typewriter 
            options={{
                strings: ['CS Engineer','Programmer', 'Software Developer','Backend Developer','MERN Developer','Software Engineer','Web Developer'],
                autoStart: true,
                loop: true,

            }}/>
           
            </div>

            

        </div>
        <div className='right-banner'>

            <img className='myphoto' src='./assets/myphoto.png'/>
            <div className='contact-links'>
                <h2>Kaif Sardar</h2>
                <p className='banner-education'>CS, Jadavpur University
                </p>
                <a href='https://www.linkedin.com/feed/' target='_blank'><FaLinkedin /></a>
                <a href='https://github.com/kaifsardar' target='_blank'><FaGithub /></a>
                <a href='https://www.geeksforgeeks.org/user/kaifsardar/' target='_blank'><SiGeeksforgeeks /></a>
                <a href='https://leetcode.com/u/Kaif_JU_CSE/' target='_blank'><SiLeetcode /></a>


            </div>

        </div>

    </div>
  )
}

export default Banner