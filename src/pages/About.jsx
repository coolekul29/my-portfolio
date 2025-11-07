// Import React so we can use JSX
import React from "react";
import { Helmet } from "react-helmet";
// Import the image we’ll use on this page
import about_image from '../assets/hero_1.png';


// This is the About page that shows information about me
export default function About() {
  return (
    // The main section for the About page
    <section className='about'>
      <Helmet>
        <title>My Portfolio | About</title>
      </Helmet>
      <div className='about-inner container'>

        {/* Page title */}
        <div className='about-row'>
          <h1>About Me</h1>
        </div> 

        {/* Row that holds the image and text side by side */}
        <div className='about-row'>
          {/* Left side: image */}
          <div className='about-col'>
            <img className='about-image' src={about_image} alt="About" />
          </div>

          {/* Right side: description */}
          <div className='about-col'>
            <p>
              I am an experienced Robotic Process Automation Developer and Business Process Analyst 
              with 5 years of professional experience in the field of automation. 
              I have designed and built many automation solutions that helped improve 
              business processes and reduce manual work for different organizations.
            </p>
            <p>
              I mainly use UiPath as my main RPA tool to create strong and scalable automation workflows. 
            </p>
            <p>
              I also focus on process analysis — finding good opportunities for automation 
              and making business processes more efficient and productive.
            </p>
          </div>
        </div>

        {/* Social media icons */}
        <div className='about-socials'>
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

      </div>
    </section>
  );
}