import React, { useEffect, useState } from "react";
import "./certificates.css";
import './disabled'

import img1 from '../../assets/certificates/coursera_Azure.jpg'
import img2 from '../../assets/certificates/sololearn_PHP.jpg'
import img3 from '../../assets/certificates/Coursera_UX.jpg'
import img4 from '../../assets/certificates/internship_TSF.png'
import img5 from '../../assets/certificates/MLSA-Alpha.jpg'

import img6 from '../../assets/certificates/CP_cer.jpg'
import img7 from '../../assets/certificates/coursera_python.jpg'
import img8 from '../../assets/certificates/RAC_cer.jpg'
import img9 from '../../assets/certificates/Hardware_Fellowship_cer.jpg'
import img10 from '../../assets/certificates/Programiz_OOP_Advance.jpg'

import img11 from '../../assets/certificates/Python_behind_programiz.jpg'
import img12 from '../../assets/certificates/Python_master_programiz.jpg'
import img13 from '../../assets/certificates/sololearn_SQL.png'
import img14 from '../../assets/certificates/Coursera_WebDev.jpg'

import Aos from "aos";
import "aos/dist/aos.css";

const Certificates = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

    // opening the images

    function dimg1() {document.querySelector('.popup-image1').style.display = 'block';}
    function dimg2() {document.querySelector('.popup-image2').style.display = 'block';}
    function dimg3() {document.querySelector('.popup-image3').style.display = 'block';}
    function dimg4() {document.querySelector('.popup-image4').style.display = 'block';}
    function dimg5() {document.querySelector('.popup-image5').style.display = 'block';}

    function dimg6() {document.querySelector('.popup-image6').style.display = 'block';}
    function dimg7() {document.querySelector('.popup-image7').style.display = 'block';}
    function dimg8() {document.querySelector('.popup-image8').style.display = 'block';}
    function dimg9() {document.querySelector('.popup-image9').style.display = 'block';}
    function dimg10() {document.querySelector('.popup-image10').style.display = 'block';}

    function dimg11() {document.querySelector('.popup-image11').style.display = 'block';}
    function dimg12() {document.querySelector('.popup-image12').style.display = 'block';}
    function dimg13() {document.querySelector('.popup-image13').style.display = 'block';}
    function dimg14() {document.querySelector('.popup-image14').style.display = 'block';}


    // closing the images

    function close1() {document.querySelector('.popup-image1').style.display = 'none';}
    function close2() {document.querySelector('.popup-image2').style.display = 'none';}
    function close3() {document.querySelector('.popup-image3').style.display = 'none';}
    function close4() {document.querySelector('.popup-image4').style.display = 'none';}
    function close5() {document.querySelector('.popup-image5').style.display = 'none';}

    function close6() {document.querySelector('.popup-image6').style.display = 'none';}
    function close7() {document.querySelector('.popup-image7').style.display = 'none';}
    function close8() {document.querySelector('.popup-image8').style.display = 'none';}
    function close9() {document.querySelector('.popup-image9').style.display = 'none';}
    function close10() {document.querySelector('.popup-image10').style.display = 'none';}

    function close11() {document.querySelector('.popup-image11').style.display = 'none';}
    function close12() {document.querySelector('.popup-image12').style.display = 'none';}
    function close13() {document.querySelector('.popup-image13').style.display = 'none';}
    function close14() {document.querySelector('.popup-image14').style.display = 'none';}

  return (
    <section id="certificates">
      <h5>My Completion Certificate</h5>
      <h2 className="blink">Achievements</h2>
      <div className="container certificates__container">

        <div className="certificates__item-image">
          <article className="certificates__item" data-aos="flip-up">
            <div className="col">
              <div className="card h-100">
                <img src={img1} className="card-img-top" alt="..." />
                <div className="content">
                  <button className="button text-center btn btn-primary" onClick={dimg1}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="certificates__item-image">
          <article className="certificates__item" data-aos="flip-left">
            <div className="col">
              <div className="card h-100">
                <img src={img2} className="card-img-top" alt="..." />
                <div className="content">
                  <button className="button text-center btn btn-primary" onClick={dimg2}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="certificates__item-image">
          <article className="certificates__item" data-aos="flip-down">
            <div className="col">
              <div className="card h-100">
                <img src={img3} className="card-img-top" alt="..." />
                <div className="content">
                  <button className="button text-center btn btn-primary" onClick={dimg3}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="certificates__item-image">
          <article className="certificates__item" data-aos="flip-left">
            <div className="col">
              <div className="card h-100">
                <img src={img4} className="card-img-top" alt="..." />
                <div className="content">
                  <button className="button text-center btn btn-primary" onClick={dimg4}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="certificates__item-image">
          <article className="certificates__item" data-aos="flip-up">
            <div className="col">
              <div className="card h-100">
                <img src={img5} className="card-img-top" alt="..." />
                <div className="content">
                  <button className="button text-center btn btn-primary" onClick={dimg5}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="certificates__item-image">
          <article className="certificates__item" data-aos="flip-down">
            <div className="col">
              <div className="card h-100">
                <img src={img6} className="card-img-top" alt="..." />
                <div className="content">
                  <button className="button text-center btn btn-primary" onClick={dimg6}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="certificates__item-image">
          <article className="certificates__item" data-aos="flip-up">
            <div className="col">
              <div className="card h-100">
                <img src={img7} className="card-img-top" alt="..." />
                <div className="content">
                  <button className="button text-center btn btn-primary" onClick={dimg7}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="certificates__item-image">
          <article className="certificates__item" data-aos="flip-left">
            <div className="col">
              <div className="card h-100">
                <img src={img8} className="card-img-top" alt="..." />
                <div className="content">
                  <button className="button text-center btn btn-primary" onClick={dimg8}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="certificates__item-image">
          <article className="certificates__item" data-aos="flip-down">
            <div className="col">
              <div className="card h-100">
                <img src={img9} className="card-img-top" alt="..." />
                <div className="content">
                  <button className="button text-center btn btn-primary" onClick={dimg9}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="certificates__item-image">
          <article className="certificates__item" data-aos="flip-up">
            <div className="col">
              <div className="card h-100">
                <img src={img10} className="card-img-top" alt="..." />
                <div className="content">
                  <button className="button text-center btn btn-primary" onClick={dimg10}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="certificates__item-image">
          <article className="certificates__item" data-aos="flip-left">
            <div className="col">
              <div className="card h-100">
                <img src={img11} className="card-img-top" alt="..." />
                <div className="content">
                  <button className="button text-center btn btn-primary" onClick={dimg11}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="certificates__item-image">
          <article className="certificates__item" data-aos="flip-down">
            <div className="col">
              <div className="card h-100">
                <img src={img12} className="card-img-top" alt="..." />
                <div className="content">
                  <button className="button text-center btn btn-primary" onClick={dimg12}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="certificates__item-image">
          <article className="certificates__item" data-aos="flip-up">
            <div className="col">
              <div className="card h-100">
                <img src={img13} className="card-img-top" alt="..." />
                <div className="content">
                  <button className="button text-center btn btn-primary" onClick={dimg13}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="certificates__item-image">
          <article className="certificates__item" data-aos="flip-left">
            <div className="col">
              <div className="card h-100">
                <img src={img14} className="card-img-top" alt="..." />
                <div className="content">
                  <button className="button text-center btn btn-primary" onClick={dimg14}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

      </div>
    <div className="pops popup-image1"><button onClick={close1}>&times;</button> <img src={img1} alt="certificates" /></div>
    <div className="pops popup-image2"><button onClick={close2}>&times;</button> <img src={img2} alt="certificates" /></div>
    <div className="pops popup-image3"><button onClick={close3}>&times;</button> <img src={img3} alt="certificates" /></div>
    <div className="pops popup-image4"><button onClick={close4}>&times;</button> <img src={img4} alt="certificates" /></div>
    <div className="pops popup-image5"><button onClick={close5}>&times;</button> <img src={img5} alt="certificates" /></div>

    <div className="pops popup-image6"><button onClick={close6}>&times;</button> <img src={img6} alt="certificates" /></div>
    <div className="pops popup-image7"><button onClick={close7}>&times;</button> <img src={img7} alt="certificates" /></div>
    <div className="pops popup-image8"><button onClick={close8}>&times;</button> <img src={img8} alt="certificates" /></div>
    <div className="pops popup-image9"><button onClick={close9}>&times;</button> <img src={img9} alt="certificates" /></div>
    <div className="pops popup-image10"><button onClick={close10}>&times;</button> <img src={img10} alt="certificates" /></div>

    <div className="pops popup-image11"><button onClick={close11}>&times;</button> <img src={img11} alt="certificates" /></div>
    <div className="pops popup-image12"><button onClick={close12}>&times;</button> <img src={img12} alt="certificates" /></div>
    <div className="pops popup-image13"><button onClick={close13}>&times;</button> <img src={img13} alt="certificates" /></div>
    <div className="pops popup-image14"><button onClick={close14}>&times;</button> <img src={img14} alt="certificates" /></div>
    </section>
    
  );
};

export default Certificates;
