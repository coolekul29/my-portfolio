// Import React so we can use JSX
import React from 'react'
import { NavLink } from "react-router-dom"; // <-- add this

// Footer component that shows info at the bottom of the page
const Footer = ({ theme, setTheme }) => {

  // This lets us switch between light and dark mode
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    // The footer section of the website
    <footer className='footer'>
      
      {/* First column - list of services offered */}
      <div className='col'>
        <h4>Services Offer</h4>
        <span>Process Automation</span>
        <span>Process Analysis</span>
        <span>Mobile Development</span>
        <span>Web Development</span>
      </div>

      {/* Second column - links to pages */}
      <div className='col'>
        <h4>Resources</h4>
        <NavLink to="/" className="footer-link">Home</NavLink>
        <NavLink to="/about" className="footer-link">About</NavLink>
        <NavLink to="/resume" className="footer-link">Resume</NavLink>
        <NavLink to="/portfolio" className="footer-link">Portfolio</NavLink>
      </div>

      {/* Third column - social media links */}
      <div className='col'>
        <h4>Socials</h4>
        <a href='https://facebook.com'>Facebook</a>
        <a href='https://twitter.com'>X</a>
        <a href='https://youtube.com'>Youtube</a>
        <a href='https://instagram.com'>Instagram</a>
      </div>
    </footer>
  )
}

// Let other files use the Footer component
export default Footer
