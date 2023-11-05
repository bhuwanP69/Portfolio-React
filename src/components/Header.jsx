import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Outlet} from "react-router-dom";

export default function Header() {
  const [activeLink, setActiveLink] = useState('home'); 

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const location = useLocation();

 
  return (
    <header>
    <div className="header fixed top-0 right-0 left-0 z-50 flex justify-between  items-center font-semibold font-sans ml-[12%] mr-[15%] h-0 md:h-16">
        <div className="left hidden md:flex">
            <h1 className='cursor-pointer hover:text-button-color text-black'>Bhuwan</h1>

        </div>
        <div className="right hidden mr-20 md:flex  lg:mr-0 gap-6 w-[50%]  ">
            <Link
            to="home"
            className={` ${location.pathname === '/route1' ? 'active' : '' }cursor-pointer hover:text-text-color ${activeLink === 'home' ? ' text-text-color' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </Link>
          <Link
            to="about"
            className={`cursor-pointer hover:text-text-color ${activeLink === 'about' ? 'active text-text-color' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </Link>
          <Link
            to="skills"
            className={`cursor-pointer hover:text-text-color  ${activeLink === 'skills' ? 'active text-text-color' : ''}`}
            onClick={() => handleLinkClick('skills')}
          >
            Skills
          </Link>

          <Link
            to="services"
            className={`cursor-pointer hover:text-text-color ${activeLink === 'services' ? 'active text-text-color' : ''}`}
            onClick={() => handleLinkClick('services')}
          >
            Services
          </Link>
          <Link
            to="portfolio"
            className={`cursor-pointer hover:text-text-color  ${activeLink === 'portfolio' ? 'active text-text-color' : ''}`}
            onClick={() => handleLinkClick('portfolio')}
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            className={`cursor-pointer hover:text-text-color whitespace-nowrap ${activeLink === 'contact' ? 'active text-text-color' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact Me
          </Link>
           
        </div>
    </div>
    <main>
        <Outlet />
      </main>
    </header>
  )
}
