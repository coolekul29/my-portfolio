// Import React so we can use JSX
import React from "react";
import { Helmet } from "react-helmet";
// Import the hero image we’ll show on the home page
import hero_image from '../assets/hero_2.png';
// import the PDF file
import cvFile from "../assets/Luke_CV.pdf"; 
// Import the typewriter effect for the animated text
import { Typewriter } from "react-simple-typewriter";

// This is the Home page
export default function Home() {

  // function that triggers the download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;                 
    link.download = "Luke_CV.pdf";      
    link.click();                       
  };

  return (
    // The main section for the hero area
    <section className='hero'>
      <Helmet>
        <title>My Portfolio | Home</title>
      </Helmet>
      <div className='hero-inner container'>

        {/* Left side: image */}
        <div className='hero-col'>
          <img 
            className='hero-image'
            src={hero_image}
            alt="Hero"
          />
        </div>

        {/* Right side - text details */}
        <div className='hero-col'>
          
          <div className='hero-details'>
            <h2>
              <span>Hi, I’m Luke Anthony</span>, I am a
            </h2>
          </div>

          {/* Animated typewriter text */}
          <div className='hero-details'>  
            <h2>
              <i className='color-change'>
                <Typewriter
                  words={[
                    'Enthusiastic Dev',  
                    'Full Stack Developer',  
                    'UiPath Developer',  
                    'Web Developer',  
                    'Business Process Analyst',  
                  ]}
                  loop={0}          
                  typeSpeed={70}    // how fast each letter types
                  deleteSpeed={50}  // how fast it deletes
                  delaySpeed={1000} 
                />
                <span className='cursor'>|</span>
              </i>
            </h2>
          </div>              

          {/* Short description of what I do */}
          <p>I build useful, human friendly software. Explore my projects, CV, and articles.</p>

          {/* Social media icons */}
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

          {/* Button to download my CV */}
          <button className='hero-btn-contact' onClick={handleDownload}>Download CV</button>
        </div>
      </div>
    </section>
  );
}