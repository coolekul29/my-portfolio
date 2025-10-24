import React from 'react'

const Footer = ({theme, setTheme}) => {

const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
}
  return (
    <footer className='footer'>
      <div className='col'>
        <h4>Services Offer</h4>
          <span>Process Automation</span>
          <span>Process Analysis</span>
          <span>Mobile Development</span>
          <span>Web Development</span>
      </div>
      <div className='col'>
        <h4>Resources</h4>
          <span>Home</span>
          <span>About</span>
          <span>Resume</span>
          <span>Portfolio</span>
      </div>
      <div className='col'>
        <h4>Socials</h4>
          <span>Facebook</span>
          <span>X</span>
          <span>Youtube</span>
          <span>Instgram</span>
      </div>
    </footer>
  )
}

export default Footer

