import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


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
  
     <div className="grid-1 relative flex flex-col  justify-center  items-start  bg-grid-color w-64 h-80">
        <div className="wrap pl-10 grid gap-5 ">
        <div className="icon text-text-color text-4xl">
        <iconify-icon icon="uil:web-grid"></iconify-icon>
        </div>
        <h4 className="text-xl w-10 font-semibold ">Website Development</h4>
        <div className="view flex gap-2 item-center text-text-color transition-all cursor-pointer" onClick={handleButtonClick}>
            <p>View More</p>
            <i class="fa-solid fa-arrow-right duration-500  pt-1"></i>
        </div>
        </div>
        <div ref={moreInfoRef}  className={`click z-10  absolute left-36 top-0 pl-5 pt-5 border-gray-700 border-2 bg-grid-color h-64 w-[450px] rounded-lg ${showMoreInfo ? '' : 'hidden'}`}>
          <div className="top flex">

        <button onClick={handleCloseClick} className="inline">
                    <i class="fa-solid fa-x absolute text-base top-5  right-3 text-text-color  p-1 rounded-full hover:scale-110 duration-500"></i>
                     </button>
          <h1 className="text-xl font-semibold w-52 tracking-wide  pb-5">Web2 and Web3 Development</h1>
          </div>
          <div className="lists grid gap-3 font-lg text-gray-400">
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
  
     <div className="grid-1 relative flex flex-col  justify-center  items-start  bg-grid-color w-64 h-80">
        <div className="wrap pl-10 grid gap-5 ">
        <div className="icon text-text-color text-4xl">
        <iconify-icon icon="uil:web-grid"></iconify-icon>
        </div>
        <h4 className="text-xl w-10 font-semibold ">Website Development</h4>
        <div className="view flex gap-2 item-center text-text-color transition-all cursor-pointer" onClick={handleButtonClick}>
            <p>View More</p>
            <i class="fa-solid fa-arrow-right duration-500  pt-1"></i>
        </div>
        </div>
        <div ref={moreInfoRef}  className={`click z-10 absolute -left-32 top-0 pl-5 pt-5 border-gray-700 border-2 bg-grid-color h-64 w-[450px] rounded-lg ${showMoreInfo ? '' : 'hidden'}`}>
          <div className="top flex">

        <button onClick={handleCloseClick} className="inline">
                    <i class="fa-solid fa-x absolute text-base top-5  right-3 text-text-color  p-1 rounded-full hover:scale-110 duration-500"></i>
                     </button>
          <h1 className="text-xl font-semibold w-52 tracking-wide  pb-5">Web2 and Web3 Development</h1>
          </div>
          <div className="lists grid gap-3 font-lg text-gray-400">
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
  
     <div className="grid-1 relative flex flex-col  justify-center  items-start  bg-grid-color w-64 h-80">
        <div className="wrap pl-10 grid gap-5 ">
        <div className="icon text-text-color text-4xl">
        <iconify-icon icon="uil:web-grid"></iconify-icon>
        </div>
        <h4 className="text-xl w-10 font-semibold ">Website Development</h4>
        <div className="view flex gap-2 item-center text-text-color transition-all cursor-pointer" onClick={handleButtonClick}>
            <p>View More</p>
            <i class="fa-solid fa-arrow-right duration-500  pt-1"></i>
        </div>
        </div>
        <div ref={moreInfoRef}  className={`click z-10  absolute -left-96 top-0 pl-5 pt-5 border-gray-700 border-2 bg-grid-color h-64 w-[450px] rounded-lg ${showMoreInfo ? '' : 'hidden'}`}>
          <div className="top flex">

        <button onClick={handleCloseClick} className="inline">
                    <i class="fa-solid fa-x absolute text-base top-5  right-3 text-text-color  p-1 rounded-full hover:scale-110 duration-500"></i>
                     </button>
          <h1 className="text-xl font-semibold w-52 tracking-wide  pb-5">Web2 and Web3 Development</h1>
          </div>
          <div className="lists grid gap-3 font-lg text-gray-400">
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

export default function Services() {
  return (
    <div className="services h-screen pt-32" id="services">
        <div className="services text-center justify-center">
            <h2 className="text-4xl font-semibold">Services </h2>
            <p className="text-text-color text-sm pt-2">The value I offer You</p>
        </div>
        <div className="flex items-center justify-center pt-10 gap-10">
      <Grid1/>
      <Grid2/>
      <Grid3/>
</div>
    </div>
  )
}
