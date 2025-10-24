import React from "react";
import { NavLink } from "react-router-dom";
import logo_light from "../assets/logo_light.png";
import logo_dark from "../assets/logo_dark.png";
import search_icon_light from "../assets/search-w.png";
import search_icon_dark from "../assets/search-b.png";
import toggle_icon_light from "../assets/night.png";
import toggle_icon_dark from "../assets/day.png";

const Header = ({theme, setTheme}) => {

const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
}
    return (
        <div className='navbar'>
            <img src={theme === 'light' ? logo_dark : logo_light} alt="" className='logo'/>
        
            <nav className='nav-links'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
            </nav>
            <div className='search-box'>
                <input type="text" placeholder='Search'/>
                <img src={theme === 'light' ? search_icon_dark : search_icon_light} alt="" className='search_icon'/>
            </div>
            <div className='toggle-icon'>
                <img onClick={()=>{toggle_mode()}} src={theme === 'light' ? toggle_icon_dark : toggle_icon_light} alt="" className='toggle_icon'/>
            </div>
        </div>
    )
}

export default Header;