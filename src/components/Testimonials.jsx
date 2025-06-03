import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [titleAnimated, setTitleAnimated] = useState(false);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Sangeeta Reddy",
      role: "Homeowner",
      testimonial: "Pavan Techno Constructions provided us with a beautiful and modern home at an affordable price. Their innovative designs and attention to detail truly made a difference. Highly recommended!",
      rating: 5,
      project: "Villa Construction"
    },
    {
      id: 2,
      name: "Anusha Patel",
      role: "Property Owner",
      testimonial: "I got my apartment renovated by Pavan Techno Constructions, and I must say their work exceeded my expectations. They used high-quality materials and completed the work within the given timeline.",
      rating: 5,
      project: "Apartment Renovation"
    },
    {
      id: 3,
      name: "Manoj Sharma",
      role: "Client",
      testimonial: "What I loved the most was their commitment to customer satisfaction. They listened to all my requirements and customized the house exactly how I wanted it. Great work and amazing experience!",
      rating: 5,
      project: "Custom Home Design"
    }
  ];

  // CSS Variables for theme consistency
  const cssVariables = {
    '--primary-color': '#2c3e50',
    '--accent-color': '#B79C5C',
    '--light-color': '#ffffff',
    '--text-color': '#495057',
    '--secondary-color': '#f8f9fa',
    '--shadow-color': 'rgba(44, 62, 80, 0.1)',
    '--border-radius': '16px',
    '--transition': 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const keyframes = `
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(100px) rotateX(90deg) scale(0.5);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes cardSlideIn {
      0% {
        opacity: 0;
        transform: translateY(100px) scale(0.8);
        filter: blur(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes avatarPulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 20px rgba(183, 156, 92, 0.3);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 0 30px rgba(183, 156, 92, 0.5);
      }
    }

    @keyframes floatAnimation {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes starTwinkle {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.7;
        transform: scale(1.1);
      }
    }

    @keyframes underlineExpand {
      0% {
        width: 0;
        opacity: 0;
      }
      100% {
        width: 80px;
        opacity: 1;
      }
    }

    @keyframes backgroundShift {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    @keyframes cardHover {
      0% {
        transform: translateY(0) scale(1) rotateX(0deg);
      }
      100% {
        transform: translateY(-10px) scale(1.02) rotateX(-2deg);
      }
    }
  `;

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);
  
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
            setIsVisible(true);
            entry.target.classList.add('section-visible');
            // Trigger title animation
            setTimeout(() => setTitleAnimated(true), 300);
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
    }, 6000);
    
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
    }, 6000);
  };

  const sectionStyle = {
    ...cssVariables,
    padding: '6rem 0',
    background: `
      linear-gradient(135deg, var(--light-color) 0%, var(--secondary-color) 50%, var(--light-color) 100%),
      radial-gradient(circle at 20% 80%, rgba(183, 156, 92, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(44, 62, 80, 0.05) 0%, transparent 50%)
    `,
    backgroundSize: '400% 400%',
    animation: isVisible ? 'backgroundShift 15s ease-in-out infinite' : 'none',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2
  };

  const titleSectionStyle = {
    textAlign: 'center',
    marginBottom: '4rem',
    position: 'relative',
    perspective: '1000px'
  };

  const titleStyle = {
    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
    fontWeight: '900',
    lineHeight: '1.1',
    margin: '0 0 1rem 0',
    perspective: '1000px',
    position: 'relative',
    display: 'inline-block'
  };

  const titleWordStyle = (wordIndex) => ({
    display: 'inline-block',
    marginRight: '20px',
    opacity: titleAnimated ? 1 : 0,
    transform: titleAnimated ? 'translateY(0) rotateX(0deg) scale(1)' : 'translateY(100px) rotateX(90deg) scale(0.5)',
    background: 'linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: titleAnimated ? `wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${0.8 + (wordIndex * 0.2)}s, gradientShift 4s ease-in-out infinite` : 'none'
  });

  const underlineStyle = {
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '4px',
    background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color), var(--primary-color))',
    borderRadius: '2px',
    animation: titleAnimated ? 'underlineExpand 1s ease-out forwards 1.6s' : 'none',
    width: '0'
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    color: 'var(--text-color)',
    opacity: titleAnimated ? 1 : 0,
    animation: titleAnimated ? 'cardSlideIn 1s ease-out forwards 1.8s' : 'none'
  };

  const carouselStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 'var(--border-radius)',
    perspective: '1000px'
  };

  const containerSliderStyle = {
    display: 'flex',
    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
    transform: `translateX(-${currentIndex * 100}%)`
  };

  const cardStyle = {
    flex: '0 0 100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '3rem 2rem',
    background: `
      linear-gradient(135deg, var(--light-color) 0%, rgba(248, 249, 250, 0.8) 100%),
      linear-gradient(45deg, rgba(183, 156, 92, 0.03), rgba(44, 62, 80, 0.03))
    `,
    borderRadius: 'var(--border-radius)',
    boxShadow: '0 15px 35px var(--shadow-color), 0 5px 15px rgba(183, 156, 92, 0.1)',
    border: '1px solid rgba(183, 156, 92, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'var(--transition)',
    cursor: 'pointer'
  };

  const avatarStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: `
      linear-gradient(135deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1)),
      var(--light-color)
    `,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
    color: 'var(--primary-color)',
    border: '4px solid rgba(183, 156, 92, 0.2)',
    boxShadow: '0 10px 30px rgba(183, 156, 92, 0.2)',
    animation: isVisible ? 'avatarPulse 3s ease-in-out infinite, floatAnimation 4s ease-in-out infinite' : 'none',
    position: 'relative',
    overflow: 'hidden'
  };

  const iconStyle = {
    width: '50px',
    height: '50px',
    color: 'var(--accent-color)',
    zIndex: 2
  };

  const contentStyle = {
    textAlign: 'center',
    position: 'relative',
    zIndex: 2
  };

  const nameStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--primary-color)',
    marginBottom: '0.5rem'
  };

  const roleStyle = {
    fontSize: '0.9rem',
    color: 'var(--accent-color)',
    marginBottom: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600'
  };

  const ratingStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.3rem',
    marginBottom: '1.5rem'
  };

  const starStyle = {
    width: '20px',
    height: '20px',
    color: '#ffd700',
    animation: 'starTwinkle 2s ease-in-out infinite',
    animationDelay: (index) => `${index * 0.2}s`
  };

  const quoteStyle = {
    fontSize: '1.1rem',
    fontStyle: 'italic',
    color: 'var(--text-color)',
    lineHeight: '1.8',
    position: 'relative',
    padding: '0 2rem',
    marginBottom: '1rem'
  };

  const projectStyle = {
    fontSize: '0.9rem',
    color: 'var(--accent-color)',
    fontWeight: '600',
    padding: '0.5rem 1rem',
    background: 'rgba(183, 156, 92, 0.1)',
    borderRadius: '20px',
    border: '1px solid rgba(183, 156, 92, 0.2)'
  };

  const controlsStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3rem',
    gap: '2rem'
  };

  const controlBtnStyle = {
    background: 'linear-gradient(135deg, var(--accent-color), var(--primary-color))',
    border: 'none',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    cursor: 'pointer',
    transition: 'var(--transition)',
    boxShadow: '0 5px 15px rgba(183, 156, 92, 0.3)'
  };

  const dotsContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem'
  };

  const dotStyle = (index) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: index === currentIndex ? 'var(--accent-color)' : 'rgba(183, 156, 92, 0.3)',
    border: 'none',
    cursor: 'pointer',
    transition: 'var(--transition)',
    transform: index === currentIndex ? 'scale(1.3)' : 'scale(1)',
    boxShadow: index === currentIndex ? '0 0 10px rgba(183, 156, 92, 0.5)' : 'none'
  });

  // Background decorative elements
  const backgroundElements = (
    <>
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(45deg, rgba(183, 156, 92, 0.05), rgba(44, 62, 80, 0.05))',
        borderRadius: '50%',
        animation: 'floatAnimation 8s ease-in-out infinite',
        zIndex: 1
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '3%',
        width: '150px',
        height: '150px',
        background: 'linear-gradient(45deg, rgba(44, 62, 80, 0.05), rgba(183, 156, 92, 0.05))',
        borderRadius: '30%',
        animation: 'floatAnimation 10s ease-in-out infinite reverse',
        zIndex: 1
      }} />
    </>
  );

  return (
    <section style={sectionStyle} ref={sectionRef}>
      {backgroundElements}
      
      <div style={containerStyle}>
        <div style={titleSectionStyle}>
          <h2 style={titleStyle}>
            <span style={titleWordStyle(0)}>What</span>
            <span style={titleWordStyle(1)}>Our</span>
            <span style={titleWordStyle(2)}>Clients</span>
            <span style={titleWordStyle(3)}>Say</span>
            <div style={underlineStyle}></div>
          </h2>
          <p style={subtitleStyle}>
            Trusted by hundreds of satisfied customers across multiple cities
          </p>
        </div>
        
        <div style={carouselStyle}>
          <div style={containerSliderStyle}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02) rotateX(-2deg)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(183, 156, 92, 0.15), 0 10px 25px var(--shadow-color)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                  e.currentTarget.style.boxShadow = '0 15px 35px var(--shadow-color), 0 5px 15px rgba(183, 156, 92, 0.1)';
                }}
              >
                <div style={avatarStyle}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 512 512" 
                    fill="currentColor" 
                    style={iconStyle}
                  >
                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.23 72 72S295.8 272 256 272c-39.77 0-72-32.23-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/>
                  </svg>
                  
                  {/* Holographic overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                      linear-gradient(45deg, 
                        transparent 30%, 
                        rgba(183, 156, 92, 0.1) 50%, 
                        transparent 70%
                      )
                    `,
                    backgroundSize: '200% 200%',
                    animation: 'backgroundShift 3s linear infinite',
                    borderRadius: '50%',
                    zIndex: 1
                  }} />
                </div>

                <div style={contentStyle}>
                  <h4 style={nameStyle}>{testimonial.name}</h4>
                  <p style={roleStyle}>{testimonial.role}</p>
                  
                  <div style={ratingStyle}>
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <svg 
                        key={starIndex}
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 576 512" 
                        fill="currentColor"
                        style={{
                          ...starStyle,
                          animationDelay: `${starIndex * 0.2}s`
                        }}
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote style={quoteStyle}>
                    "{testimonial.testimonial}"
                  </blockquote>
                  
                  <div style={projectStyle}>
                    {testimonial.project}
                  </div>
                </div>
                
                {/* Background pattern */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(45deg, rgba(183, 156, 92, 0.03), transparent)',
                  pointerEvents: 'none'
                }} />
              </div>
            ))}
          </div>
          
          <div style={controlsStyle}>
            <button 
              style={controlBtnStyle}
              onClick={prevSlide}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) rotateZ(-5deg)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(183, 156, 92, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotateZ(0deg)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(183, 156, 92, 0.3)';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/>
              </svg>
            </button>
            
            <div style={dotsContainerStyle}>
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  style={dotStyle(index)}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
            
            <button 
              style={controlBtnStyle}
              onClick={nextSlide}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) rotateZ(5deg)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(183, 156, 92, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotateZ(0deg)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(183, 156, 92, 0.3)';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 2.2rem !important;
          }
          
          .testimonial-card {
            padding: 2rem 1.5rem !important;
          }
          
          .avatar {
            width: 80px !important;
            height: 80px !important;
          }
          
          .name {
            font-size: 1.3rem !important;
          }
          
          .quote {
            font-size: 1rem !important;
            padding: 0 1rem !important;
          }
          
          .controls {
            gap: 1rem !important;
          }
          
          .control-btn {
            width: 40px !important;
            height: 40px !important;
          }
        }
        
        @media (max-width: 480px) {
          h2 {
            font-size: 1.8rem !important;
          }
          
          .testimonial-card {
            padding: 1.5rem 1rem !important;
          }
          
          .quote {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;