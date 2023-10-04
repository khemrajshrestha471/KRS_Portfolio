import React, { useEffect } from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsDiscord} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';


import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="https://certificate.khemrajshrestha.com.np/" target='_blank'>Certificates</a></li>
        <li><a href="http://activity.khemrajshrestha.com.np/" target='_blank'>Activities</a></li>
        
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/khemrajshrestha471/" target="_blank" data-aos="fade-down-left"><FaLinkedinIn /></a>
        <a href="https://www.facebook.com/khemrajshrestha471" target='_blank' data-aos="fade-left"><FaFacebookF /></a>
        <a href="https://www.instagram.com/khemrajshrestha471/" target='_blank' data-aos="zoom-in"><FiInstagram /></a>
        <a href="https://twitter.com/khemrajstha471" target='_blank' data-aos="zoom-out-up"><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href="https://discord.com/invite/FGnHhh9ycC" target='_blank' data-aos="zoom-in-down"><BsDiscord /></a>
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; KHEMRAJ SHRESTHA 2023 | All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer