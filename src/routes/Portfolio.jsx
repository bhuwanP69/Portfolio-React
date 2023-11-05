import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';

const img1 = './src/images/portfolio1.jpg'
const img2 = './src/images/portfolio2.jpg'
const img3 = './src/images/portfolio3.jpg'

export function Grid1() {
  return (
   <div className="grid1 px-12 sm:px-8 w-[700px]  sm:h-72 pt-10  grid sm:flex gap-5 md:gap-12 pb-10 justify-center  transition-all">
    <div className="left w-80 sm:w-64 md:w-80 md:pl-0  pl-10">
      <img src={img1} alt="portfolio1" className="rounded-xl" />
      
    </div>
    <div className="right  w-80 sm:w-80 md:w-96 sm:text-start text-center font-sans">
      <h3 className=" text-lg md:text-xl font-semibold text-black">Modern Consultancy Website</h3>
      <p className=" pb-3 text-base md:text-lg ">Responsive modern website with adaptable UI components for Kdr Consultancy. Responsive in all device</p>
        <a href="https://kdrsingle.vercel.app/" target="_blank">
      <button className="demo  w-28 flex items-center gap-2 px-5 py-4 bg-text-color  hover:text-black rounded-lg transition-all ">
        <p>Demo</p>
        <i class="fa-solid fa-arrow-right text-sm"></i>
      </button>
        </a>
    </div>
   </div>
  )
}

export function Grid2() {
  return (
   <div className="grid2 px-12 sm:px-8 w-[700px]  sm:h-72 pt-10  grid sm:flex gap-5 md:gap-12 pb-10 justify-center  transition-all">
    <div className="left w-80 sm:w-64 md:w-80 md:pl-0  pl-10">
    <img src={img2} alt="portfolio1" className="rounded-xl" />
      
    </div>
    <div className="right  w-80 sm:w-80 md:w-96 sm:text-start text-center font-sans">
      <h3 className=" text-lg md:text-xl font-semibold text-black">Log In Form</h3>
      <p className=" pb-3 text-base md:text-lg ">It is Log In form with register.</p>
        <a href="https://registerloginwebsite.netlify.app/" target="_blank">
      <button className="demo  w-28 flex items-center gap-2 px-5 py-4 bg-text-color   rounded-lg transition-all hover:text-black ">
        <p>Demo</p>
        <i class="fa-solid fa-arrow-right text-sm"></i>
      </button>
        </a>
    </div>
   </div>
  )
}

export function Grid3() {
  return (
   <div className="grid3 px-12 sm:px-8 w-[700px]  sm:h-72 pt-10  grid sm:flex gap-5 md:gap-12 pb-10 justify-center  transition-all">
    <div className="left w-80 sm:w-64 md:w-80 md:pl-0  pl-10">
    <img src={img3} alt="portfolio1" className="rounded-xl" />
      
    </div>
    <div className="right  w-80 sm:w-80 md:w-96 sm:text-start text-center font-sans">
      <h3 className=" text-lg md:text-xl font-semibold text-black">Github live users Loading</h3>
      <p className=" pb-3 text-base md:text-lg ">Live User Filter using search</p>
        <a href="https://liveuserfeeds.netlify.app/" target="_blank">
      <button className="demo  w-28 flex items-center gap-2 px-5 py-4 bg-text-color hover:text-black rounded-lg transition-all ">
        <p>Demo</p>
        <i class="fa-solid fa-arrow-right text-sm"></i>
      </button>
        </a>
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
       className={index === activeSlide ? 'solid-circle text-[9px] ' : 'solid-circle text-[9px] text-footer'}
     />
   </div>
 ));
};

  return (
    <div className="portfolio pt-20  pr-20" id='portfolio'>
          <div className="services text-center justify-center">
            <h2 className="text-4xl font-semibold text-black">Portfolio</h2>
            <p className="text-text-color text-sm pt-2">My past works</p>
        </div>
        <div className="middle pl-20  flex justify-center items-center pt-20 px-16 sm:px-24 sm:pl-40">
            <div className="grid relative transition-transform duration-500 ease-in-out transform translate-x-[calc(-100%*${activeSlide})]  hover:shadow-xl" 
             >
              {slideData[activeSlide]}
              
          <div className="left-port absolute top-1/2 left-40 sm:left-10 md:-left-10   cursor-pointer group-hover:shadow-xl p-1" onClick={handleLeftClick}>
          <i class="fa-solid fa-chevron-left text-xl md:text-3xl text-text-color"></i>
          </div>
          <div className="right-port  absolute top-1/2 right-28 sm:right-10 md:-right-10 cursor-pointer group-hover:shadow-xl  p-1" onClick={handleRightClick}>
          <i class="fa-solid fa-chevron-right text-xl md:text-3xl text-text-color"></i>
          </div>
            </div>
        </div>
        <div className="bottom pt-16 flex  text-text-color  justify-center">
        {renderCircles()}
           </div>
    </div>
  )
}
