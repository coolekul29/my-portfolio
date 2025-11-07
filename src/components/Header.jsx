// Import React so we can use JSX
import React from "react";

// Import NavLink so we can move between pages
import { NavLink } from "react-router-dom";

// Import image files for light and dark themes
import logo_light from "../assets/logo_light.png";
import logo_dark from "../assets/logo_dark.png";
import search_icon_light from "../assets/search-w.png";
import search_icon_dark from "../assets/search-b.png";
import toggle_icon_light from "../assets/night.png";
import toggle_icon_dark from "../assets/day.png";

// Header component (the top part of the website)
const Header = ({ theme, setTheme }) => {

  // Change between light and dark mode when clicked
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    // The main header area (navbar)
    <div className='navbar'>
      
      {/* Show logo depending on the theme */}
      <img 
        src={theme === 'light' ? logo_dark : logo_light} 
        alt="logo" 
        className='logo'
      />
      
      {/* Navigation links to different pages */}
      <nav className='nav-links'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </nav>

      {/* Search box with an input and search icon }
      <div className='search-box'>
        <input type="text" placeholder='Search'/>
        <img 
          src={theme === 'light' ? search_icon_dark : search_icon_light} 
          alt="search" 
          className='search_icon'
        />
      </div>*/}

      {/* Theme toggle button (switch between light/dark) */}
      <div className='toggle-icon'>
        <img 
          onClick={() => { toggle_mode() }} 
          src={theme === 'light' ? toggle_icon_dark : toggle_icon_light} 
          alt="toggle theme" 
          className='toggle_icon'
        />
      </div>
    </div>
  )
}

// Let other files use the Header component
export default Header;
