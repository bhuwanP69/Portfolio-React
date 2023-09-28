import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';


const img1 = './src/images/portfolio1.jpg'
const img2 = './src/images/portfolio2.jpg'
const img3 = './src/images/portfolio3.jpg'

export function Grid1() {
  return (
   <div className="grid1  pl-8  h-72 pt-10  flex gap-16 pb-10 justify-center hover:shadow-xl transition-all">
    <div className="left w-80  ">
      <img src={img1} alt="portfolio1" className="rounded-xl" />
      
    </div>
    <div className="right w-80 font-sans">
      <h3 className="text-xl font-semibold">Modern Construction Website</h3>
      <p className="text-gray-400 pb-3 text-lg">Responsive modern website with adaptable UI components for Ostruct group of company. Responsive in all device</p>
      <button className="demo   w-28 flex items-center gap-2 px-5 py-4 bg-text-color  hover:opacity-80 rounded-lg transition-all ">
        <p>Demo</p>
        <i class="fa-solid fa-arrow-right text-sm"></i>
      </button>
    </div>
   </div>
  )
}

export function Grid2() {
  return (
   <div className="grid1  pl-8  h-72 pt-10  flex gap-16 pb-10 justify-center hover:shadow-xl transition-all   ">
    <div className="left w-80  ">
      <img src={img2} alt="portfolio1" className="rounded-xl" />
      
    </div>
    <div className="right w-80 font-sans">
      <h3 className="text-xl font-bold w-64 pb-1">Responsive Website for Plantex</h3>
      <p className="text-gray-400 pb-3 text-lg">Beautifully designed website for Plantex, a plant company. Highly adaptable and easy to navigate.</p>
      <button className=" demo  w-28 flex items-center gap-3 px-5 py-4 hover:bg-button-color bg-text-color  rounded-lg  transition-all">
        <p className="font-bold">Demo</p>
        <i class="fa-solid fa-arrow-right text-sm"></i>
      </button>
    </div>
   </div>
  )
}

export function Grid3() {
  return (
   <div className="grid1  pl-8  h-72 pt-10  flex gap-16 pb-10 justify-center hover:shadow-xl transition-all">
    <div className="left w-80  ">
      <img src={img3} alt="portfolio1" className="rounded-xl" />
      
    </div>
    <div className="right w-80 font-sans ">
      <h3 className="text-xl font-bold">Beautiful Landing page for Easybank</h3>
      <p className="text-gray-400 pb-6 text-lg ">Easybank landing page with modern and responsive UI.</p>
      <button className="demo  w-28 flex items-center gap-3 px-5 py-4 hover:bg-button-color bg-text-color  rounded-lg  transition-all ">
        <p>Demo</p>
        <i class="fa-solid fa-arrow-right text-sm"></i>
      </button>
    </div>
   </div>
  )
}



export default function Portfolio() {
  const slideData = [
    <Grid1/>,
    <Grid2/>,
    <Grid3/>
     ];
   
     const [activeSlide, setActiveSlide] = useState(0);
     const handleRightClick = () => {
       setActiveSlide((prevSlide) => (prevSlide + 1) % slideData.length);
     };
   
     const handleLeftClick = () => {
       setActiveSlide((prevSlide) => (prevSlide - 1 + slideData.length) % slideData.length);
     };
    
     
     const handleCircleClick = (index) => {
       setActiveSlide(index);
     };
     
 
const renderCircles = () => {
 return slideData.map((_, index) => (
   <div key={index}
   onClick={() => handleCircleClick(index)}
    className="circle flex justify-between w-5 cursor-pointer "
   >
     <FontAwesomeIcon
       icon={index === activeSlide ? faCircleSolid : faCircleSolid}
       className={index === activeSlide ? 'solid-circle text-[9px] ' : 'solid-circle text-[9px] text-circle'}
     />
   </div>
 ));
};

  return (
    <div className="portfolio h-screen  pt-20" id='portfolio'>
          <div className="services text-center justify-center">
            <h2 className="text-4xl font-semibold">Portfolio</h2>
            <p className="text-text-color text-sm pt-2">My past works</p>
        </div>
        <div className="middle   relative flex justify-center items-center pt-20">

          <div className="left pr-12 cursor-pointer" onClick={handleLeftClick}>
          <i class="fa-solid fa-chevron-left text-4xl text-text-color"></i>
          </div>
        
            <div className="grid transition-transform duration-500 ease-in-out transform translate-x-[calc(-100%*${activeSlide})]">
              {slideData[activeSlide]}
            </div>

          <div className="right pl-12 cursor-pointer" onClick={handleRightClick}>
          <i class="fa-solid fa-chevron-right text-4xl text-text-color"></i>
          </div>
        </div>
        
        <div className="bottom pt-16 flex  text-text-color  justify-center">
        {renderCircles()}
           </div>
    </div>
  )
}
