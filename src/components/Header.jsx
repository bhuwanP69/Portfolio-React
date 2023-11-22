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

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked((prevIsButtonClicked) => !prevIsButtonClicked);
  };
  const closeButton = () => {
    setIsButtonClicked(false);
  };

 
  return (
    <header className=''>
      <div className="smallScreen fixed flex  bottom-10 md:hidden justify-between w-full px-10 z-50">

      <Link to="home" smooth className="left text-lg">
            <h1 className='cursor-pointer hover:text-button-color text-black'>Bhuwan</h1>

        </Link>

      <div onClick={handleButtonClick} className="icon text-2xl cursor-pointer hover:text-button-color h-8 p-1 rounded-xl ">
        <iconify-icon icon="ph:squares-four"></iconify-icon>
        </div>
      </div>

      {isButtonClicked && (

        <div className="clicked ">
          
       <div className="right grid grid-cols-3 gap-y-4  bg-body border-t border-gray-400  fixed  w-full bottom-0 pb-10 z-50 p-5   ">
            <Link
            to="home"
            className={` ${location.pathname === '/route1' ? 'active' : '' }cursor-pointer hover:text-text-color ${activeLink === 'home' ? ' text-text-color' : ''} flex flex-col items-center `}
            onClick={() => handleLinkClick('home')}
          >
            <div className="icon text-xl">
            <iconify-icon icon="material-symbols:home-outline"></iconify-icon>
            </div>
          <p>Home</p>
          </Link>
          <Link
            to="about"
            className={`cursor-pointer hover:text-text-color ${activeLink === 'about' ? 'active text-text-color' : ''} flex flex-col items-center`}
            onClick={() => handleLinkClick('about')}
            >
               <div className="icon">
               <iconify-icon icon="ph:user"></iconify-icon>
            </div>
          <p>About</p>
            
          </Link>
          <Link
            to="skills"
            className={`cursor-pointer hover:text-text-color  ${activeLink === 'skills' ? 'active text-text-color' : ''} flex flex-col items-center`}
            onClick={() => handleLinkClick('skills')}
            >
               <div className="icon">
                 <iconify-icon icon="icon-park-outline:notes"></iconify-icon>
                </div>
          <p>Skills</p>
          </Link>

          <Link
            to="services"
            className={`cursor-pointer hover:text-text-color ${activeLink === 'services' ? 'active text-text-color' : ''} flex flex-col items-center`}
            onClick={() => handleLinkClick('services')}
            > <div className="icon">
                <iconify-icon icon="uil:briefcase"></iconify-icon>    
            </div>
          <p>Services</p>
            
          </Link>
          <Link
            to="portfolio"
            className={`cursor-pointer hover:text-text-color  ${activeLink === 'portfolio' ? 'active text-text-color' : ''} flex flex-col items-center`}
            onClick={() => handleLinkClick('portfolio')}
            >
               <div className="icon">
               <iconify-icon icon="solar:gallery-linear"></iconify-icon>
            </div>
          <p>Portfolio</p>
          </Link>
          <Link
            to="contact"
            className={`cursor-pointer hover:text-text-color whitespace-nowrap ${activeLink === 'contact' ? 'active text-text-color' : ''} flex flex-col items-center`}
            onClick={() => handleLinkClick('contact')}
            >
               <div className="icon">
               <iconify-icon icon="uil:message"></iconify-icon>
            </div>
          <p>Contact Me</p>
          </Link>   
          <div onClick={closeButton} className=" text-button-color text-2xl cross absolute right-8 bottom-2   cursor-pointer h-8 p-1 rounded-xl">
          <iconify-icon icon="ph:x-bold"></iconify-icon></div> 
        </div>

          </div>
              )}

    <div className="header fixed top-0 right-0 left-0 z-50 flex justify-between  items-center font-semibold font-sans ml-[12%] mr-[15%] h-0 md:h-16">
        <Link to="home" smooth className="left hidden md:flex">
            <h1 className='cursor-pointer hover:text-button-color text-black'>Bhuwan</h1>

        </Link>
        
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
