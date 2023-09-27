import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check if the button should be visible or not
    const handleScroll = () => {
      const shouldShowButton = window.scrollY > 200; // Change this value based on your preference
      setIsVisible(shouldShowButton);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can remove this if you don't want smooth scrolling
    });
  };

  return (
    <div className="backToTop relative">
      <button
        className={`back-to-top fixed -bottom-20 right-5  px-[11px] py-[6px] rounded-lg border-none bg-text-color hover:bg-button-color text-white cursor-pointer opacity-0     transition-all ${
          isVisible ? 'visible' : ''
        }`}
        onClick={scrollToTop}
      >
        <i class="fa-solid fa-arrow-up"></i>
      </button>
      
    </div>
  );
}