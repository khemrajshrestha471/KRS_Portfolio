import React, { useEffect, useState } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Typewriter from 'typewriter-effect'
import {AiOutlineArrowDown} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

  const [state] = useState({
    title: "Fullstack Developer and",
  });

  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  
  return (
    <header>

      <div className="bubbles">
        <span className='b1'></span>
        <span className='b2'></span>
        <span className='b3'></span>
        <span className='b4'></span>
        <span className='b5'></span>
        <span className='b6'></span>
        <span className='b7'></span>
        <span className='b8'></span>
        <span className='b9'></span>
        <span className='b10'></span>
        <span className='b11'></span>
        <span className='b12'></span>
        <span className='b13'></span>
        <span className='b14'></span>
        <span className='b15'></span>
        <span className='b16'></span>
        <span className='b17'></span>
        <span className='b18'></span>
        <span className='b19'></span>
        <span className='b20'></span>
      </div>

      <div className="container header__container">
    <h5>Hello, I'm</h5>
    <p className='intros' data-aos="zoom-in"><span className='fletter'>K</span><span className='lletter'>hemraj</span> <span className='fletter'>S</span><span className='lletter'>hrestha</span></p>
    

    <h5 className="text-light">{state.title}</h5>  
    <div className="text">
      <Typewriter
      options={{autoStart: true,
      loop: true,
      delay: 40,
      strings: [
        "A Learner",
        "A Blogger",
        "A Freelancer"
      ],
      }} />
    </div>
    <CTA />
    <HeaderSocials />

    <div className="me">
      <img src={ME} alt="me" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" />
                         <div class="img-text">
                        <h3>Hello...!</h3>
                        <h5>Glad to see you here,</h5>
                    </div>
    </div>
      </div>



    </header>
  )

}


export default Header