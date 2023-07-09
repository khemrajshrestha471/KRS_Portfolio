import React, { useEffect, useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleSetActiveNav = (navId) => {
    setActiveNav(navId);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const navId = entry.target.getAttribute('id');
        if (entry.isIntersecting && activeNav !== navId) {
          setActiveNav(navId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const sectionIds = ['#home', '#about', '#experience', '#services', '#portfolio', '#contact'];

    sectionIds.forEach((sectionId) => {
      const section = document.querySelector(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeNav]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const navId = entry.target.getAttribute('id');
        if (entry.isIntersecting && activeNav !== navId) {
          setActiveNav(navId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    const homeSection = document.querySelector('#home');
    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => handleSetActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleSetActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => handleSetActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => handleSetActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => handleSetActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#contact"
        onClick={() => handleSetActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
