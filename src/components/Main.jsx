import React from 'react';
import Typewriter from 'typewriter-effect';
function Main() {
  //for whatsapp number
  const handleWhatsAppClick = (phoneNumber) => {
    const message = encodeURIComponent('Hi');
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(url, '_blank');
  };
  const imageMyself = 'https://live.staticflickr.com/65535/53160700296_297807ed3d_n.jpg'
  return (
    <div className="main flex justify-between pt-20 md:pt-44 pb-96 md:pb-0  pl-[12%] pr-[23%] " id='home'>
        {/* left  */}
        <div className="left flex-initial text-text-color text-xl mt-2 ">
          <div className="social grid gap-10">
            <a href="">
            <i class="fa-brands fa-square-facebook cursor-pointer hover:opacity-80"></i>
            </a>
            <a href="https://twitter.com/BhuwanP69" target='_blank'>
              <div className="div cursor-pointer hover:opacity-80 text-2xl">
            <iconify-icon icon="ri:twitter-line"></iconify-icon>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/bhuwan-paudel-591468224/
            " target='_blank'>
          <i class="fa-brands fa-linkedin cursor-pointer hover:opacity-80"></i>
            </a>
            <a href=""  onClick={() => handleWhatsAppClick('+977 9861658435')}>
          <i class="fa-brands fa-whatsapp cursor-pointer hover:opacity-80"></i>
            </a>
            <a href="https://github.com/bhuwanP69" target='_blank'>
          <i class="fa-brands fa-github cursor-pointer hover:opacity-80"></i>
            </a>
          </div>

          {/* middle */}
        </div>
        <div className="middle absolute top-96 md:top-0 md:relative  grid gap-4 font-semibold w-80  ">
          <h1 className='text-[46px] font-semibold whitespace-nowrap'>Hi, I'm Bhuwan</h1>
          <h3 className='flex text-2xl text-gray-400'>Creatve <span className='ml-1 text-text-color'> <Typewriter
        options={{
            strings: ['web developer.'],
            autoStart: true,
            loop: true,
        }} 
        /></span></h3>
        <p className='text-lg text-gray-400'>I develop beautiful and responsive <span className='text-text-color'>SEO</span> optimized websites.</p>
        <p className='text-gray-400'>Want to take your <span className='text-text-color'>brand</span> to the next level?</p>
        <button className='flex items-center justify-between hover:bg-button-color bg-text-color w-28 px-3 font-semibold py-4 rounded-lg mb-24 mt-4 transition-all' onClick={() => handleWhatsAppClick('+977 9861658435')}>
          <p className='-mt-1'>Hire Me </p>
          <div className="icon text-xl">
          <iconify-icon icon="uil:message"></iconify-icon>
          </div>
          
        </button>
        <div className="scroll hidden md:flex items-center -mt-2 animate-bounce cursor-pointer transition-all">
          <div className="mouse text-3xl text-text-color ">
          <iconify-icon icon="mingcute:mouse-line"></iconify-icon>
          </div>
     
            <p className='text-base font-semibold mr-2 -mt-2'>Scroll down</p>
            <i class="fa-solid fa-arrow-down text-sm text-text-color"></i>
         
        </div>

        </div>
        {/* right  */}
        <div className="right flex-initial w-64 mr-[15 mt-5">
          <img src={imageMyself} alt=""  className='w-64'/>

        </div>
    </div>
  );
}

export default Main;
