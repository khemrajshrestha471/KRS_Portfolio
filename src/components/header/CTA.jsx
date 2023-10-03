import React from 'react'
import Khemraj_Shrestha from '../../assets/Khemraj_Shrestha.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={Khemraj_Shrestha} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary' id='removed'>Let's Talk</a>
    </div>
  )
}

export default CTA