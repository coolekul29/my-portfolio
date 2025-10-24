import React from "react";
import hero_image from '../assets/hero_2.png';
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className='hero'>
      <div className='hero-inner container'>
        <div className='hero-col'>
          <img className='hero-image'
            src={hero_image}
            alt="Hero"
          />
        </div>
        <div className='hero-col'>
          <div className='hero-details'>
            <h2>
              <span>Hi, I’m Luke Anthony</span>
              , I am a
            </h2>
          </div>
          <div className='hero-details'>  
            <h2>
            <i className='color-change'>
              {" "}
              <Typewriter
                words={[
                  'Enthusiastic Dev',  
                  'Full Stack Developer',  
                  'UiPath Developer',  
                  'Web Developer',  
                  'Business Process Analyst',  
                ]}
                loop={0}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
                <span className='cursor'>|</span>
            </i>
            </h2>
          </div>              
          <p>I build useful, human-friendly software. Explore my projects, CV, and writing.</p>
          <div className='hero-socials'>
            <a href='https://facebook.com'>
              <i className='fa fa-facebook-square'></i>
            </a>
            <a href='https://www.google.com'>
              <i className='fa fa-google-plus-square'></i>
            </a>
            <a href='https://instagram.com'>
              <i className='fa fa-instagram'></i>
            </a>
            <a href='https://youtube.com'>
              <i className='fa fa-youtube-square'></i>
            </a>
            <a href='https://twitter.com'>
              <i className='fa fa-twitter'></i>
            </a>
          </div>
          <button className='hero-btn-contact'>Download CV</button>
        </div>
      </div>
    </section>
  );
}
