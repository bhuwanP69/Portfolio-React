import React from 'react'

export default function Header() {
  return (
    <header className='fixed top-0 right-0 left-0'>
    <div className="header flex justify-between  items-center font-semibold font-sans ml-[12%] mr-[15%] h-16">
        <div className="left">
            <h1 className='cursor-pointer hover:text-text-color'>Bhuwan</h1>

        </div>
        <div className="right flex justify-between w-96 ">
            <a href="#home" className='text-text-color cursor-pointer hover:text-text-color'>Home</a>
            <a href="#about" className=' cursor-pointer hover:text-text-color'>About</a>
            <a href="#skills" className=' cursor-pointer hover:text-text-color'>Skills</a>
            <a href="#home" className=' cursor-pointer hover:text-text-color'>Services</a>
            <a href="#home" className=' cursor-pointer hover:text-text-color'>Contact Me</a>
           
        </div>
    </div>
    </header>
  )
}
