import React, { useEffect, useState } from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

import Aos from 'aos'
import 'aos/dist/aos.css'

import ReCAPTCHA from "react-google-recaptcha"

const Contact = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
}, []);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zefpl8q', 'template_q7kpe0c', form.current, 'qiXAomFTvl83lpCKw')

      e.target.reset()
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2 className='blink'>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option' data-aos="zoom-in-up" data-aos-duration="2500">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>khemrajshrestha471@gmail.com</h5>
            <a href="mailto:khemrajshrestha471@gmail.com" target='_blank'>Send a mail</a>
          </article>

          <article className='contact__option' data-aos="zoom-in-up" data-aos-duration="3000">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Khemraj Shrestha</h5>
            <a href="https://m.me/khemrajshrestha471" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option' data-aos="zoom-in-up" data-aos-duration="3500">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+977-9825988781</h5>
            <a href="https://api.whatsapp.com/send?phone=+9779825988781" target='_blank'>Ping me</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <input type="text" name="subject" placeholder='Subject' required />
          <textarea name="message" rows="7" placeholder='Your Message' required>
          </textarea>
          <ReCAPTCHA
    sitekey="6LfakowiAAAAALbS94ZaquYxhzYOBMhvJ_XlCfTI"
    onChange={onChange} required
  />
          <button type='submit' className='btn btn-primary blink'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact