import React, { useEffect, useState } from 'react'

export default function Header() {
  const [activeLink, setActiveLink] = useState('home'); 

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
 
  return (
    <header className='fixed top-0 right-0 left-0 z-50'>
    <div className="header flex justify-between  items-center font-semibold font-sans ml-[12%] mr-[15%] h-0 md:h-16">
        <div className="left hidden md:flex">
            <h1 className='cursor-pointer hover:text-text-color'>Bhuwan</h1>

        </div>
        <div className="right hidden mr-20 md:flex  lg:mr-0 gap-6 w-[50%]  ">
            <a
            href="#home"
            className={` cursor-pointer hover:text-text-color ${activeLink === 'home' ? ' text-text-color' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={`cursor-pointer hover:text-text-color ${activeLink === 'about' ? 'active text-text-color' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </a>
          <a
            href="#skills"
            className={`cursor-pointer hover:text-text-color  ${activeLink === 'skills' ? 'active text-text-color' : ''}`}
            onClick={() => handleLinkClick('skills')}
          >
            Skills
          </a>

          <a
            href="#services"
            className={`cursor-pointer hover:text-text-color ${activeLink === 'services' ? 'active text-text-color' : ''}`}
            onClick={() => handleLinkClick('services')}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={`cursor-pointer hover:text-text-color  ${activeLink === 'portfolio' ? 'active text-text-color' : ''}`}
            onClick={() => handleLinkClick('portfolio')}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={`cursor-pointer hover:text-text-color whitespace-nowrap ${activeLink === 'contact' ? 'active text-text-color' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact Me
          </a>
           
        </div>
    </div>
    </header>
  )
}
