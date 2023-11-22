import React from 'react'

export default function Footer() {
  return (
    <div className="footer absolute  w-full  grid justify-start md:justify-center bg-footer  pt-10 pl-10 h-[440px]  md:h-72">
      <div className="md:flex md:gap-28 grid gap-5 ">
         <div className=" text-start">
            <h2 className="md:text-4xl text-3xl font-semibold text-black">Bhuwan</h2>
            <p className="text-text-color text-sm pt-2 whitespace-nowrap">Creative web developer</p>
        </div>

        <div className="right md:flex grid justify-between w-full gap-4 h-full md:h-5  ">
            <a href="#services" className=' cursor-pointer hover:text-text-color'>Services</a>
            <a href="#portfolio" className=' cursor-pointer hover:text-text-color'>Portfolio</a>
            <a href="#contact" className=' cursor-pointer hover:text-text-color whitespace-nowrap'>Contact</a>
           
        </div>
        <div className="right flex gap-10 w-full md:h-5 text-xl ">
         
            <a href="https://github.com/bhuwanP69" target='_blank'>
          <i class="fa-brands fa-github cursor-pointer hover:text-button-color hover:scale-110 transition-all"></i>
            </a>
              
            
          
            <a href="https://twitter.com/BhuwanP69" target='_blank' className=' cursor-pointer transition-all hover:text-text-color text-2xl'>
            <iconify-icon icon="ri:twitter-line"></iconify-icon>
            </a>
        </div>
      </div>

      <div className="last text-start md:text-center text-sm  py-10 pl-0 md:pl-20 font-sans ">
        <p>© Bhuwan Paudel. All right reserved.</p>
          <a href="https://timokonkwo.com/" className=' underline' target='_blank'>
        <p className='pt-10'>Refrence from this website (timokonkwo) </p>
          </a>
      </div>
    </div>
  )
}
