import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/khemrajshrestha471/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/khemrajshrestha471" target="_blank"><FaGithub /></a>
        <a href="https://www.facebook.com/khemrajshrestha471" target="_blank"><FaFacebookSquare /></a>
    </div>
  )
}

export default HeaderSocials