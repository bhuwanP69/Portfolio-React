import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
    
    <div className="notFound h-screen text-center items-center flex flex-col justify-center">
        <h2 className='text-7xl'>Page Not Found</h2>
       
        <p className='pt-8 text-3xl '>Go to the <NavLink to="/" className='p-4  bg-text-color hover:bg-button-color rounded-lg transition-all duration-500 hover:text-black'>HomePage</NavLink></p>
    </div>
    </>
  )
}