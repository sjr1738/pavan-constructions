import React, { useEffect, useRef } from 'react';
import './BookNowBanner.css';

const BookNowBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const bannerPosition = banner.getBoundingClientRect().top + window.scrollY;
      
      if (scrollPosition > bannerPosition - window.innerHeight && 
          scrollPosition < bannerPosition + banner.offsetHeight) {
        const offset = (scrollPosition - (bannerPosition - window.innerHeight)) * 0.5;
        banner.style.transform = `translateX(-${offset}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="book-now-banner">
      <div className="banner-content">
        <div className="banner-wrapper" ref={bannerRef}>
          {Array(12).fill().map((_, i) => (
            <span key={i} className="banner-text">
              BOOK NOW <span className="banner-highlight">BOOK NOW</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookNowBanner;
