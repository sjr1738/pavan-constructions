import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Sangeeta Reddy",
      testimonial: "Pavan Techno Constructions provided us with a beautiful and modern home at an affordable price. Their innovative designs and attention to detail truly made a difference. Highly recommended!"
    },
    {
      id: 2,
      name: "Anusha Patel",
      testimonial: "I got my apartment renovated by Pavan Techno Constructions, and I must say their work exceeded my expectations. They used high-quality materials and completed the work within the given timeline. The team is skilled and very cooperative."
    },
    {
      id: 3,
      name: "Manoj Sharma",
      testimonial: "What I loved the most was their commitment to customer satisfaction. They listened to all my requirements and customized the house exactly how I wanted it. Great work and amazing experience!"
    }
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const handleDotClick = (index) => {
    setCurrentIndex(index);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2 className="animated-title">What Our Customers Say</h2>
        </div>
        <div className="testimonials-carousel">
          <div className="testimonials-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-avatar">
                  {/* Solution 1: Use SVG directly instead of Font Awesome */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 512 512" 
                    fill="currentColor" 
                    className="user-avatar-icon"
                  >
                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.23 72 72S295.8 272 256 272c-39.77 0-72-32.23-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/>
                  </svg>
                </div>

                <div className="testimonial-content">
                  <h4>{testimonial.name}</h4>
                  <blockquote>{testimonial.testimonial}</blockquote>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <button className="control-btn prev" onClick={prevSlide}>
              {/* Solution 2: Using SVG for arrow icons too */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" className="control-icon">
                <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/>
              </svg>
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
            <button className="control-btn next" onClick={nextSlide}>
              {/* Solution 2: Using SVG for arrow icons too */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" className="control-icon">
                <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;