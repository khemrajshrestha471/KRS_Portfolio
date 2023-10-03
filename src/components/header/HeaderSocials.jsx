import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/khemrajshrestha471" target="_blank" title='GitHub'><FaGithub /></a>
        <a href="https://leetcode.com/khemrajshrestha471/" target="_blank" title='Leetcode'><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials