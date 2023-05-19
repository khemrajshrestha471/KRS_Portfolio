import React, { useEffect } from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <section id='services'>
      <h5>What I Do</h5>
      <h2 className='blink'>Services</h2>
      <div className="container services__container">
        <article className='service' data-aos="fade-right">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>Use design tools such as Sketch, Figma, or Adobe XD,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Research user needs,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design UI for brand and goals,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create intuitive UX,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Collaborate with developers,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ensure UX is intuitive,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Test and iterate designs.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Student Ambassador (Microsoft)</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p data-aos="fade-right">Promote Microsoft products,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p data-aos="fade-right">Host events and workshops,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p data-aos="fade-right">Develop technical skills,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p data-aos="fade-right">Build a community of students,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p data-aos="fade-right">Share feedback with Microsoft,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p data-aos="fade-right">Collaborate with other ambassadors,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p data-aos="fade-right">Represent Microsoft on campus.</p>
            </li>
          </ul>
        </article>
        {/* END OF MLSA */}

        <article className='service' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <div className="service__head">
            <h3>Web Developemnt</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>Code web applications,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Use HTML, CSS, and JS with its framework and librarys,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Work with databases,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Use version control tools,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Build responsive websites,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ensure website security,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Collaborate with designers.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services