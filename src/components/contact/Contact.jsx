import React, { useEffect, useState } from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const form = useRef();
  const [verfied, setVerifed] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_zefpl8q', 'template_q7kpe0c', form.current, 'qiXAomFTvl83lpCKw')
      .then(() => {
        e.target.reset();
        toast.success('Message has been sent!', {
          closeButton: true
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
    document.getElementById("unique").style.background = "#4db5ff";
    document.getElementById("unique").style.color = "#1f1f38";
    document.getElementById("unique").style.border = "none";
    document.getElementById("unique").style.cursor = "pointer";
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
            <h5>contact@khemrajshrestha.com.np</h5>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@khemrajshrestha.com.np" target='_blank' rel="noopener noreferrer">Send a mail</a>

          </article>

          <article className='contact__option' data-aos="zoom-in-up" data-aos-duration="3000">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Khemraj Shrestha</h5>
            <a href="https://m.me/khemrajshrestha471" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className='contact__option' data-aos="zoom-in-up" data-aos-duration="3500">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+977-9825988781</h5>
            <a href="https://api.whatsapp.com/send?phone=+9779825988781" target='_blank' rel="noopener noreferrer">Ping me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <input type="text" name="subject" placeholder='Subject' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <ReCAPTCHA
            sitekey="6LfakowiAAAAALbS94ZaquYxhzYOBMhvJ_XlCfTI"
            onChange={onChange}
          />
          <button type='submit' className='btn btn-primary' id='unique' disabled={!verfied}>
            Send Message
          </button>
        </form>

        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
