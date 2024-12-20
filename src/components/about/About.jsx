import React, { useEffect, useState } from 'react'
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2 className='blink'>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Done</small>
            </article>
          </div>
          <p>
            I'm <strong>Khem Raj</strong>, a technology enthusiast...!
            <br /><br /><i>"Smart-working and self-motivated individual dedicated towards achieving the best-quality outcomes"</i>
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
