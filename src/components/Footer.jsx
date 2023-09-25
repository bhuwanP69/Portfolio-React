import React from 'react'

export default function Footer() {
  return (
    <div className="footer  w-full  grid justify-center bg-footer  pt-10 h-72">
      <div className="flex gap-28">


         <div className=" text-start">
            <h2 className="text-4xl font-semibold">Bhuwan</h2>
            <p className="text-text-color text-sm pt-2 whitespace-nowrap">Creative web developer</p>
        </div>

        <div className="right flex justify-between w-full gap-10 h-5  ">
            <a href="#services" className=' cursor-pointer hover:text-text-color'>Services</a>
            <a href="#portfolio" className=' cursor-pointer hover:text-text-color'>Portfolio</a>
            <a href="#contact" className=' cursor-pointer hover:text-text-color whitespace-nowrap'>Contact</a>
           
        </div>
        <div className="right flex justify-between w-full gap-8 h-5 text-xl ">
            <a href="" className=' cursor-pointer transition-all hover:text-hover'>
              
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="" className=' cursor-pointer transition-all hover:text-hover'>
              
            <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="" className=' cursor-pointer transition-all hover:text-hover text-2xl'>
            <iconify-icon icon="ri:twitter-line"></iconify-icon>
            </a>
           
           
        </div>
      </div>

      <div className="last text-center text-sm text-gray-400 pt-10 font-sans">
        <p>© Tim Okonkwo. All right reserved.</p>
      </div>


    </div>
  )
}
