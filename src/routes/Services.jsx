import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

// grid 1
export  function Grid1() {
      // State to manage the visibility of more-info section
      const [showMoreInfo, setShowMoreInfo] = useState(false);

      // Ref to the more-info container
      const moreInfoRef = useRef(null);
  
      // Function to handle button click
      const handleButtonClick = () => {
          setShowMoreInfo(!showMoreInfo);
      };
      
        const handleCloseClick = () => {
          setShowMoreInfo(false);
      };
    
        // Function to handle clicks outside the more-info section
        const handleClickOutside = (event) => {
          if (moreInfoRef.current && !moreInfoRef.current.contains(event.target)) {
              setShowMoreInfo(false);
          }
      };
  
      // Attach click event listener to detect clicks outside the more-info section
      useEffect(() => {
          document.addEventListener('mousedown', handleClickOutside);
          return () => {
              document.removeEventListener('mousedown', handleClickOutside);
          };
      }, []);
    return (
  
     <div className="grid-1 relative flex flex-col  justify-center  items-start  bg-grid-color
     w-48 md:w-64 md:h-80 h-60">
        <div className="wrap pl-10 grid gap-5 ">
        <div className="icon text-text-color text-2xl md:text-4xl">
        <iconify-icon icon="uil:web-grid"></iconify-icon>
        </div>
        <h4 className=" text-lg md:text-xl w-10 font-semibold ">Website Development</h4>
        <div className="view flex gap-2 item-center text-text-color transition-all cursor-pointer" onClick={handleButtonClick}>
            <p >View More</p>
            <i class="fa-solid fa-arrow-right duration-500  pt-1"></i>
        </div>
        </div>
        {/* absolute */}
        {/* 1 */}
        <div ref={moreInfoRef}  className={`click z-10  absolute left-0 top-0 pl-5 pt-5 border-gray-700 border-2 bg-grid-color h-64 w-[290px] md:w-[450px] rounded-lg ${showMoreInfo ? '' : 'hidden'}`}>
          <div className="top flex">
            {/* absolute */}
        <button onClick={handleCloseClick} className="inline">
                    <i class="fa-solid fa-x absolute text-base top-5  right-3 text-button-color  p-1 rounded-full hover:scale-110 duration-500"></i>
                     </button>
          <h1 className=" text-lg md:text-xl font-semibold w-52 tracking-wide  pb-5">Web2 and Web3 Development</h1>
          </div>
          <div className="lists grid gap-3 text-base">
            <div className="one flex  items-center gap-2 ">
            <i class="fa-regular fa-circle-check text-text-color"></i>
            <p>Highly intuitive UI</p>
            </div>
            <div className="one flex  items-center gap-2">
            <i class="fa-regular fa-circle-check text-text-color"></i>
            <p>Easy Navigation</p>
            </div>
            <div className="one flex  items-center gap-2">
            <i class="fa-regular fa-circle-check text-text-color"></i>
            <p>Responsive in all devices</p>
            </div>
            <div className="one flex  items-center gap-2">
            <i class="fa-regular fa-circle-check text-text-color"></i>
            <p>Optimized for search engines</p>
            </div>
           
          </div>
        </div>
        
    </div>
  )
}

  //grid 2
  export  function Grid2() {
      // State to manage the visibility of more-info section
      const [showMoreInfo, setShowMoreInfo] = useState(false);

      // Ref to the more-info container
      const moreInfoRef = useRef(null);
  
      // Function to handle button click
      const handleButtonClick = () => {
          setShowMoreInfo(!showMoreInfo);
      };
      
        const handleCloseClick = () => {
          setShowMoreInfo(false);
      };
    
        // Function to handle clicks outside the more-info section
        const handleClickOutside = (event) => {
          if (moreInfoRef.current && !moreInfoRef.current.contains(event.target)) {
              setShowMoreInfo(false);
          }
      };
  
      // Attach click event listener to detect clicks outside the more-info section
      useEffect(() => {
          document.addEventListener('mousedown', handleClickOutside);
          return () => {
              document.removeEventListener('mousedown', handleClickOutside);
          };
      }, []);
    return (
  
     <div className="grid-2 relative flex flex-col  justify-center  items-start  bg-grid-color w-48 md:w-64 md:h-80 h-60">
        <div className="wrap pl-5 md:pl-10 grid gap-5 ">
        <div className="icon text-text-color text-2xl md:text-4xl">
        <iconify-icon icon="material-symbols:code"></iconify-icon>
        </div>
        <h4 className="text-lg md:text-xl   font-semibold ">Custom Software Development</h4>
        <div className="view flex gap-2 item-center text-text-color transition-all cursor-pointer" onClick={handleButtonClick}>
            <p>View More</p>
            <i class="fa-solid fa-arrow-right duration-500  pt-1"></i>
        </div>
        </div>
        {/* absolute  */}
        <div ref={moreInfoRef}  className={`click z-10 absolute -left-32 top-0 pl-5 pt-5 border-gray-700 border-2 bg-grid-color h-64 w-[290px] md:w-[450px] rounded-lg ${showMoreInfo ? '' : 'hidden'}`}>
          <div className="top flex">

        <button onClick={handleCloseClick} className="inline">
                    <i class="fa-solid fa-x absolute text-base top-5  right-3 text-button-color  p-1 rounded-full hover:scale-110 duration-500"></i>
                     </button>
          <h1 className=" text-lg md:text-xl font-semibold w-52 tracking-wide  pb-5">Software Development</h1>
          </div>
          <div className="lists grid gap-3 text-base">
            <div className="one flex  items-center gap-2 ">
            <i class="fa-regular fa-circle-check text-text-color"></i>
            <p>Easy to use</p>
            </div>
            <div className="one flex  items-center gap-2">
            <i class="fa-regular fa-circle-check text-text-color"></i>
            <p>Optimized for efficiency</p>
            </div>
            <div className="one flex  items-center gap-2">
            <i class="fa-regular fa-circle-check text-text-color"></i>
            <p>Highly scalable</p>
            </div>
            <div className="one flex  items-center gap-2">
            <i class="fa-regular fa-circle-check text-text-color"></i>
            <p>Secure and dependable</p>
            </div>
           
          </div>
        </div>
        
    </div>
  )
} 
  //grid 3
  export  function Grid3() {
      // State to manage the visibility of more-info section
      const [showMoreInfo, setShowMoreInfo] = useState(false);

      // Ref to the more-info container
      const moreInfoRef = useRef(null);
  
      // Function to handle button click
      const handleButtonClick = () => {
          setShowMoreInfo(!showMoreInfo);
      };
      
        const handleCloseClick = () => {
          setShowMoreInfo(false);
      };
    
        // Function to handle clicks outside the more-info section
        const handleClickOutside = (event) => {
          if (moreInfoRef.current && !moreInfoRef.current.contains(event.target)) {
              setShowMoreInfo(false);
          }
      };
  
      // Attach click event listener to detect clicks outside the more-info section
      useEffect(() => {
          document.addEventListener('mousedown', handleClickOutside);
          return () => {
              document.removeEventListener('mousedown', handleClickOutside);
          };
      }, []);
    return (
  
     <div className="grid-3 relative flex flex-col  justify-center  items-start  bg-grid-color w-48 md:w-64 md:h-80 h-60">
        <div className="wrap pl-10 grid gap-5 ">
        <div className="icon text-text-color text-4xl">
        <iconify-icon icon="ph:pen"></iconify-icon>
        </div>
        <h4 className="text-xl w-32 font-semibold ">Website and Platform Maintenance</h4>
        <div className="view flex gap-2 item-center text-text-color transition-all cursor-pointer" onClick={handleButtonClick}>
            <p>View More</p>
            <i class="fa-solid fa-arrow-right duration-500  pt-1"></i>
        </div>
        </div>
        <div ref={moreInfoRef}  className={`click z-10  absolute left-0 md:-left-96 top-0 pl-5 pt-5 border-gray-700 border-2 bg-grid-color h-64  w-[290px] md:w-[450px] rounded-lg ${showMoreInfo ? '' : 'hidden'}`}>
          <div className="top flex">

        <button onClick={handleCloseClick} className="inline">
                    <i class="fa-solid fa-x absolute text-base top-5  right-3 text-button-color  p-1 rounded-full hover:scale-110 duration-500"></i>
                     </button>
          <h1 className=" text-lg md:text-xl font-semibold w-52 tracking-wide  pb-5">Support and Maintenance</h1>
          </div>
          <div className="lists grid gap-3 text-base">
            <div className="one flex  items-center gap-2 ">
            <i class="fa-regular fa-circle-check text-text-color"></i>
            <p>Efficient Support</p>
            </div>
            <div className="one flex  items-center gap-2">
            <i class="fa-regular fa-circle-check text-text-color"></i>
            <p>Maximum availability</p>
            </div>
            <div className="one flex  items-center gap-2">
            <i class="fa-regular fa-circle-check text-text-color"></i>
            <p>Attention to detail</p>
            </div>
            <div className="one flex  items-center gap-2">
            <i class="fa-regular fa-circle-check text-text-color"></i>
            <p>Problem solving</p>
            </div>
           
          </div>
        </div>
        
    </div>
  )
}

export default function Services() {
  return (
    <div className="services  pt-32" id="services">
        <div className="services text-center justify-center">
            <h2 className="text-4xl font-semibold text-black">Services </h2>
            <p className="text-text-color text-sm pt-2">The value I offer You</p>
        </div>
        <div className="md:flex grid  grid-cols-2   items-center justify-center z-10 pt-10  gap-8  pl-5 pr-5
        ">
      <Grid1/>
      <Grid2/>
      <Grid3/>
</div>
    </div>
  )
}
