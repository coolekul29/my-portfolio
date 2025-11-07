// Bring in React so we can use JSX
import React from "react";
import { Helmet } from "react-helmet";
// Bring in the image that will appear on the resume page
import resume_image from '../assets/hero_1.png';

// This is the Resume page that shows my details, skills, and education
export default function Resume() {
  return (
    // Main section for the Resume page
    <section className='resume'>
      <Helmet>
        <title>My Portfolio | Resume</title>
      </Helmet>
      <div className='resume-inner container'>

        {/* Left side of the resume - personal info, contact, and education */}
        <div className='resume-left'>

          {/* My photo */}
          <div className='resume-row-image'>
            <img className='hero-image'
              src={resume_image}
              alt="Hero"
            />
          </div>

          {/* My name and title */}
          <div className='resume-row-name'>
            <h3>LUKE AZUMBRADO</h3>
            <h4>AUTOMATION DEVELOPER</h4>
          </div>

          {/* Contact details */}
          <h4 className='section-header'>CONTACT INFO</h4>
          <div className='resume-row-contact'>
            <span>+61414082220</span>
            <span>lukeanthony.azumbrado@suncorp.com.au</span>
            <span>Brisbane, Australia</span>
          </div>

          {/* Education history */}
          <h4 className='section-header'>EDUCATION</h4>
          <div className='resume-row-education'>
            <div className='school-details'>
              <span className='school-details-year'>2024 - Present</span>
              <span>Master of Information Technology</span>
              <span>Queensland University of Technology</span>                        
            </div>
            <div className='school-details'>
              <span className='school-details-year'>2007 - 2011</span>
              <span>Bachelor of Science in Information Technology</span>
              <span>Cebu Mary Immaculate College</span>                        
            </div>
            <div className='school-details'>
              <span className='school-details-year'>1999 - 2003</span>
              <span>Secondary Education</span>
              <span>Candelaria Institute</span>                        
            </div>
            <div className='school-details'>
              <span className='school-details-year'>1993 - 1999</span>
              <span>Primary Education</span>
              <span>North Cabadbaran Central Elementary School</span>                        
            </div>
          </div>

          {/* Languages I can speak */}
          <h4 className='section-header'>LANGUAGE</h4>
          <div className='resume-row-language'>
            <div>
              <span>English</span>
              <span>Filipino</span>
              <span>Cebuano</span>
            </div>
          </div>
        </div>

        {/* Right side of the resume - profile, work experience, and skills */}
        <div className='resume-right'>

          {/* Short summary about me */}
          <h4>PROFILE</h4>
          <div className='resume-row-profile'>
            <p>
              I am an experienced Robotic Process Automation Developer and Business Process Analyst 
              with 5 years of professional experience in automation. I have designed and built 
              automation solutions that improved efficiency and reduced manual work for many teams.
            </p>
            <p>
              I mainly use UiPath as my main RPA tool to create strong and scalable automation workflows.
            </p>
            <p>
              I also focus on finding automation opportunities and making business processes 
              faster and more productive.
            </p>
          </div>

          {/* Work experience section */}
          <h4>EXPERIENCE</h4>
          <div className='resume-row-experience'>
            <div>
              <div>
                <span>2018 - PRESENT</span>
                <span>Suncorp Automation</span>
              </div>
              <div>
                <span>Automation Developer</span>
                <span>Design, develop, test, and deploy Robotic Process Automation (RPA) solutions using UiPath Studio, Orchestrator, and related automation tools to improve operational efficiency, accuracy, and scalability.</span>
              </div>
            </div>
            <div>
              <div>
                <span>2017 - 2018</span>
                <span>Suncorp Policy Operations</span>
              </div>
              <div>
                <span>Policy Support Officer</span>
                <span>Provide administrative and operational support in processing and maintaining insurance policies, including New Business, Renewals, Alterations, and Cancellations. Ensure accuracy, compliance, and timely completion of policy transactions in accordance with company standards and regulatory requirements.</span>
              </div>
            </div>
            <div>
              <div>
                <span>2015 - 2017</span>
                <span>QBE</span>
              </div>
              <div>
                <span>General Admin Support</span>
                <span>Ensure all customer and broker documentation is complete and compliant before submission for underwriting or processing. Communicate with brokers, underwriters, or customers to obtain missing information or clarify policy details. Manage shared mailboxes and distribute incoming correspondence to the right teams.</span>
              </div>
            </div>
          </div>

          {/* Skill section with progress bars */}
          <h4>PROFESSIONAL SKILLS</h4>
          <div className='resume-row-skill'>
            <div className='skill'>
              <span className='skill-name'>UiPath Studio</span>
              <div className='bar'>
                <div className='progress' style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className='skill'>
              <span className='skill-name'>UiPath Orchestrator</span>
              <div className='bar'>
                <div className='progress' style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className='skill'>
              <span className='skill-name'>UiPath Robots</span>
              <div className='bar'>
                <div className='progress' style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className='skill'>
              <span className='skill-name'>BPMN Process Modeling</span>
              <div className='bar'>
                <div className='progress' style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>

          {/* Hobbies and interests */}
          <h4>INTEREST</h4>
          <div className='resume-row-interest'>
            <div>
              <span>Gaming</span>
              <span>Singing</span>
              <span>Reading</span>
              <span>Cooking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
