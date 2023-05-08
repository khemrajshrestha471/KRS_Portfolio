import React, { useEffect, useState } from 'react'
import './portfolio.css'

import IMG1 from '../../assets/banking.jpg'
import IMG2 from '../../assets/pdf2word.jpg'
import IMG3 from '../../assets/compiler.jpg'
import IMG4 from '../../assets/quiz.jpg'
import IMG5 from '../../assets/hospital.jpg'
import IMG6 from '../../assets/coming.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Portfolio = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2 className='blink'>Portfolio</h2>
      <div className="container portfolio__container">

        <article className='portfolio__item' data-aos="fade-up">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Banking System Workflow</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/khemrajshrestha471/Banking_System_Workflow" className='btn' target='_blank'>GitHub</a>
            <a href="https://basicworkflow.000webhostapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item' data-aos="flip-left">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>PDF 2 Word Converter</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/khemrajshrestha471/PDF2Word_Converter" className='btn' target='_blank'>GitHub</a>
            <a href="http://convertspdf2word.pythonanywhere.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item' data-aos="zoom-in">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Compiler Design - Own Syntax</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/khemrajshrestha471/compiler-design" className='btn' target='_blank'>GitHub</a>
            <a href="https://www.linkedin.com/in/khemrajshrestha471/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item' data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Quiz Application - PHP</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/khemrajshrestha471/Quiz_PHP" className='btn' target='_blank'>GitHub</a>
            <a href="https://www.linkedin.com/in/khemrajshrestha471/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Hospital Management System</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/khemrajshrestha471/CProject-077-BCT-HMS" className='btn' target='_blank'>GitHub</a>
            <a href="https://www.linkedin.com/in/khemrajshrestha471/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item' data-aos="flip-down">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>To Do List (On The Way)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/khemrajshrestha471" className='btn' target='_blank'>GitHub</a>
            <a href="https://www.linkedin.com/in/khemrajshrestha471/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio