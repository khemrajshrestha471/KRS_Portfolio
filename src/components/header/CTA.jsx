import React from 'react'
import Khem_Raj_Shrestha from '../../assets/Khem_Raj_Shrestha_Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={Khem_Raj_Shrestha} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary' id='removed'>Let's Talk</a>
    </div>
  )
}

export default CTA