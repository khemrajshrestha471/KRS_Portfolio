import React, { useEffect } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="services">
      <h5>What I Do</h5>
      <h2 className="blink">Services</h2>
      <div className="container services__container">
        <article
          className="service"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Code web applications,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Core HTML, CSS, and JS,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Work with databases,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Use version control tools,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build responsive websites,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website security,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaborate with designers.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service" data-aos="fade-right">
          <div className="service__head">
            <h3>Machine Learning</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Preprocess and analyze datasets,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Supervised and Unsupervised process,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop and train ML models,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimize performance and accuracy,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deploy models in clouds,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fine-tune pre-trained models,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Automate workflows with pipelines.</p>
            </li>
          </ul>
        </article>
        {/* END OF ML */}

        <article className="service">
          <div className="service__head">
            <h3>DevOps</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p data-aos="fade-right">(CI/CD) pipelines,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p data-aos="fade-right">Scalability and Efficiency,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p data-aos="fade-right">Monitor system performance,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p data-aos="fade-right">Use containerization tools (Docker),</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p data-aos="fade-right">Security in deployment pipelines,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p data-aos="fade-right">Troubleshoot system issues,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p data-aos="fade-right">Optimize cloud resources.</p>
            </li>
          </ul>
        </article>
        {/* END OF DevOps */}
      </div>
    </section>
  );
};

export default Services;
