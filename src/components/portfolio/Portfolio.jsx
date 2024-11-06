import React, { useEffect } from 'react'
import './portfolio.css'

import IMG1 from '../../assets/fifa.jpg'
import IMG2 from '../../assets/npm.jpg'
import IMG3 from '../../assets/meroSpace.png'
import IMG4 from '../../assets/thapathali.jpg'
import IMG5 from '../../assets/ecommerce.jpg'
import IMG6 from '../../assets/banking.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Portfolio = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2 className='blink'>Creativity</h2>
      <div className="container portfolio__container">

      <article className='portfolio__item' data-aos="flip-up"
     data-aos-anchor-placement="center-bottom">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" height={210}/>
          </div>
          <h3>meroSpace - Rent finder portal</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/khemrajshrestha471/meroSpace-frontend-deployment" className='btn' target='_blank'>GitHub</a>
            <a href="https://mero-space.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      <article className='portfolio__item' data-aos="flip-down">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" height={210}/>
          </div>
          <h3>FIFA WorldCup Analyzer</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/khemrajshrestha471/FIFA_WorldCup_Analyzer" className='btn' target='_blank'>GitHub</a>
            <a href="https://fifa-worldcup-analyzer.streamlit.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      <article className='portfolio__item' data-aos="flip-left">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" height={210}/>
          </div>
          <h3>NPM Package</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/khemrajshrestha471/country-province-district-munvdc" className='btn' target='_blank'>GitHub</a>
            <a href="https://conditional-selection-demo-i15v8bth5-khemraj-shresthas-projects.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item' data-aos="flip-left">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" height={210}/>
          </div>
          <h3>Thapathali Campus Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Strange18/tcioe-node" className='btn' target='_blank'>GitHub</a>
            <a href="https://tcioe.edu.np/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item' data-aos="flip-down">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" height={210}/>
          </div>
          <h3>Ecommerce Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/khemrajshrestha471/ecommerce-website" className='btn' target='_blank'>GitHub</a>
            <a href="https://youtu.be/idXbvIXYW34" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item' data-aos="flip-up">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" height={210}/>
          </div>
          <h3>Banking System Workflow</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/khemrajshrestha471/Banking_System_Workflow" className='btn' target='_blank'>GitHub</a>
            <a href="https://youtu.be/VA3XnvtUknQ" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio