import React, { useEffect, useState } from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

import {Link} from 'react-router-dom'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <footer>
      <ul className='permalinks'>
      <li><a href="https://github.com/khemrajshrestha471" target='_blank' className='blink'>GitHub</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* <li><a href="https://khemrajshrestha471.github.io/certificates/" target='_blank' className='blink'>Achievements</a></li> */}
        <li><Link to='/certificates' target='_blank' className='blink'> Certificates </Link></li>
        
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/khemrajshrestha471/" target="_blank" data-aos="fade-down-left"><FaLinkedinIn /></a>
        <a href="https://www.facebook.com/khemrajshrestha471" target='_blank' data-aos="fade-left"><FaFacebookF /></a>
        <a href="https://www.instagram.com/khemrajshrestha471/" target='_blank' data-aos="zoom-in"><FiInstagram /></a>
        <a href="https://twitter.com/khemrajstha471" target='_blank' data-aos="zoom-out-up"><IoLogoTwitter /></a>
        <a href="https://discord.com/invite/FGnHhh9ycC" target='_blank' data-aos="zoom-in-down"><BsDiscord /></a>
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; KHEMRAJ SHRESTHA 2023 | All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer