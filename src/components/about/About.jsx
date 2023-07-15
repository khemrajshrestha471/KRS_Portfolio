import React, { useEffect, useState } from 'react'
import "./about.css";
import ME from "../../assets/me.png";
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
            <article className="about__card" data-aos="fade-up-left">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card" data-aos="flip-down">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>
            <article className="about__card" data-aos="zoom-out">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>45+ Completed</small>
            </article>
          </div>
          <p>
            This is <strong>Khemraj</strong>, a technology enthusiast...!
            <br />I have extensive experience working on various web development
            field, Python, C, and C++ projects. Through my dedication and hard
            work, I have successfully hosted over 10 websites via GitHub. I
            thrive on facing different challenges and stepping outside my
            comfort zone to continually improve my skills.
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
