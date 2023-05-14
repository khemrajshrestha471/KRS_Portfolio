import React, { useEffect, useState } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";

import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2 className="blink">My Experience</h2>

      <div className="container experience__container">
        <article className="experience">
          <div className="experience__head">
            <h3>Hard Skills</h3>
          </div>
          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p data-aos="fade-right">Languages :- C/C++, Python, PHP, HTML, CSS, JavaScript...</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p data-aos="fade-right">
                Library / Frameworks :- React, Bootstrap, jQuery, Wordpress...
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p data-aos="fade-right">
                Tools :- GIT & GitHub, API's, Arduino, Docker, Kubernetes,
                NodeJS...
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p data-aos="fade-right">Platform :- Windows, Google Cloud, Microsoft Azure...</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p data-aos="fade-right">Databases :- MySQL, MongoDB...</p>
            </li>
          </ul>
        </article>

        <article className="experience" data-aos="zoom-in-down">
          <div className="experience__head">
            <h3>Soft Skills</h3>
          </div>
          <ul className="experience__list ex">
            <div className="lists">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Leadership,</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Decision making,</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Punctuality,</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Teamwork and collaboration,</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Problem-solving,</p>
            </li>

            <li>
              <BiCheck className="experience__list-icon" />
              <p>Adaptability,</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Self-Improvement,</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Positive Attitude,</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Active Listener,</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Resilience</p>
            </li>
            </div>

          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
