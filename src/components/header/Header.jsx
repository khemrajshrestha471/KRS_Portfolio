import React, { useEffect, useState } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-about.jpg'
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

      <div className="container header__container" id='header_top'>
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
                        <h3>Hey...</h3>
                        <h4>Glad to see you here,</h4>
                    </div>
    </div>
      </div>



    </header>
  )

}


export default Header