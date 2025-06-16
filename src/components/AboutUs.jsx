import React, { useEffect, useState, useRef } from 'react';

const AboutUs = ({ openPopup }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState({
    title: false,
    text: false,
    image: false,
    button: false,
    stats: false
  });
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Orchestrated animation sequence
          setTimeout(() => setAnimatedElements(prev => ({ ...prev, title: true })), 300);
          setTimeout(() => setAnimatedElements(prev => ({ ...prev, text: true })), 700);
          setTimeout(() => setAnimatedElements(prev => ({ ...prev, image: true })), 1000);
          setTimeout(() => setAnimatedElements(prev => ({ ...prev, stats: true })), 1300);
          setTimeout(() => setAnimatedElements(prev => ({ ...prev, button: true })), 1600);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const keyframes = `
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(50px) rotateX(90deg) scale(0.8);
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

    @keyframes textSlideIn {
      0% {
        opacity: 0;
        transform: translateX(-30px);
        filter: blur(3px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
        filter: blur(0px);
      }
    }

    @keyframes imageReveal {
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
        filter: blur(5px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes statsCounter {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.8);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes buttonPulse {
      0% {
        opacity: 0;
        transform: scale(0.8);
        box-shadow: 0 0 0 0 rgba(183, 156, 92, 0.7);
      }
      50% {
        opacity: 0.8;
        transform: scale(0.95);
        box-shadow: 0 0 0 10px rgba(183, 156, 92, 0.3);
      }
      100% {
        opacity: 1;
        transform: scale(1);
        box-shadow: 0 0 0 20px rgba(183, 156, 92, 0);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-15px) rotate(2deg);
      }
    }

    @keyframes borderGlow {
      0%, 100% {
        box-shadow: 0 0 15px rgba(183, 156, 92, 0.3);
      }
      50% {
        box-shadow: 0 0 25px rgba(183, 156, 92, 0.6), 0 0 35px rgba(59, 130, 246, 0.3);
      }
    }

    @keyframes particleFloat {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
      }
    }

    @keyframes geometricRotate {
      0% {
        transform: rotate(0deg) scale(1);
      }
      50% {
        transform: rotate(180deg) scale(1.05);
      }
      100% {
        transform: rotate(360deg) scale(1);
      }
    }

    /* Responsive Keyframes */
    @media (max-width: 768px) {
      @keyframes wordReveal {
        0% {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes imageReveal {
        0% {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
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

  const sectionStyle = {
    background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
    padding: 'clamp(2rem, 5vw, 5rem) 0',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  };

  // Responsive floating geometric elements
  const geometricElements = (
    <>
      {/* Golden circles - responsive positioning */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: 'clamp(100px, 15vw, 200px)',
        height: 'clamp(100px, 15vw, 200px)',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(183, 156, 92, 0.05))',
        animation: 'float 8s ease-in-out infinite',
        zIndex: 1,
        display: window.innerWidth < 480 ? 'none' : 'block'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '3%',
        width: 'clamp(80px, 12vw, 150px)',
        height: 'clamp(80px, 12vw, 150px)',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))',
        animation: 'float 10s ease-in-out infinite reverse',
        zIndex: 1,
        display: window.innerWidth < 480 ? 'none' : 'block'
      }} />

      {/* Geometric shapes - responsive */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '10%',
        width: 'clamp(30px, 6vw, 60px)',
        height: 'clamp(30px, 6vw, 60px)',
        background: 'linear-gradient(45deg, #B79C5C, #8B7355)',
        transform: 'rotate(45deg)',
        opacity: 0.3,
        animation: 'geometricRotate 20s linear infinite',
        zIndex: 1,
        display: window.innerWidth < 768 ? 'none' : 'block'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '25%',
        right: '15%',
        width: 'clamp(40px, 8vw, 80px)',
        height: 'clamp(40px, 8vw, 80px)',
        background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        opacity: 0.3,
        animation: 'float 12s ease-in-out infinite',
        zIndex: 1,
        display: window.innerWidth < 768 ? 'none' : 'block'
      }} />

      {/* Floating particles - fewer on mobile */}
      {[...Array(window.innerWidth < 768 ? 3 : 6)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            width: '3px',
            height: '3px',
            background: '#B79C5C',
            borderRadius: '50%',
            animation: `particleFloat ${15 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            zIndex: 1
          }}
        />
      ))}
    </>
  );

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 clamp(1rem, 4vw, 2rem)',
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    minHeight: 'clamp(60vh, 80vh, 90vh)',
    width: '100%'
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: window.innerWidth < 1024 ? 'column' : 'row',
    alignItems: 'center',
    gap: 'clamp(2rem, 4vw, 4rem)',
    width: '100%'
  };

  const textSectionStyle = {
    flex: window.innerWidth < 1024 ? '1' : '1 1 55%',
    position: 'relative',
    width: '100%',
    order: window.innerWidth < 1024 ? 1 : 1
  };

  const imageSectionStyle = {
    flex: window.innerWidth < 1024 ? '1' : '1 1 45%',
    position: 'relative',
    width: '100%',
    maxWidth: window.innerWidth < 1024 ? '400px' : 'none',
    order: window.innerWidth < 1024 ? 2 : 2,
    margin: window.innerWidth < 1024 ? '2rem auto' : '0'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: '900',
    lineHeight: '1.1',
    margin: '0 0 clamp(1rem, 3vw, 2rem) 0',
    perspective: '1000px',
    position: 'relative',
    textAlign: window.innerWidth < 768 ? 'center' : 'left'
  };

  const titleWordStyle = (wordIndex) => ({
    display: 'inline-block',
    marginRight: window.innerWidth < 768 ? '10px' : '20px',
    opacity: animatedElements.title ? 1 : 0,
    transform: animatedElements.title ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
    background: 'linear-gradient(135deg, #B79C5C 0%, #3b82f6 50%, #B79C5C 100%)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: animatedElements.title ? `wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${0.5 + (wordIndex * 0.2)}s, gradientShift 4s ease-in-out infinite` : 'none'
  });

  const titleAccentStyle = {
    position: 'absolute',
    left: window.innerWidth < 768 ? '50%' : '-20px',
    top: '50%',
    transform: window.innerWidth < 768 ? 'translate(-50%, -50%)' : 'translateY(-50%)',
    width: window.innerWidth < 768 ? '80%' : '6px',
    height: window.innerWidth < 768 ? '4px' : '80%',
    background: 'linear-gradient(135deg, #B79C5C, #3b82f6)',
    borderRadius: '3px',
    animation: animatedElements.title ? 'borderGlow 2s ease-in-out infinite' : 'none',
    display: window.innerWidth < 480 ? 'none' : 'block'
  };

  const paragraphStyle = {
    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
    lineHeight: '1.8',
    color: '#e5e7eb',
    marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
    transform: animatedElements.text ? 'translateX(0)' : 'translateX(-30px)',
    opacity: animatedElements.text ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
    position: 'relative',
    paddingLeft: window.innerWidth < 768 ? '0.5rem' : '1rem',
    borderLeft: window.innerWidth < 768 ? '2px solid #B79C5C' : '2px solid transparent',
    borderImage: window.innerWidth >= 768 ? 'linear-gradient(135deg, #B79C5C, #3b82f6) 1' : 'none',
    textAlign: window.innerWidth < 768 ? 'left' : 'left'
  };

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth < 768 ? 'repeat(auto-fit, minmax(120px, 1fr))' : 'repeat(3, 1fr)',
    gap: 'clamp(1rem, 3vw, 2rem)',
    margin: 'clamp(1.5rem, 3vw, 2rem) 0',
    transform: animatedElements.stats ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
    opacity: animatedElements.stats ? 1 : 0,
    animation: animatedElements.stats ? 'statsCounter 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards' : 'none'
  };

  const statItemStyle = {
    textAlign: 'center',
    padding: 'clamp(0.8rem, 2vw, 1rem)',
    background: 'linear-gradient(135deg, rgba(183, 156, 92, 0.1), rgba(59, 130, 246, 0.1))',
    borderRadius: 'clamp(8px, 2vw, 12px)',
    border: '1px solid rgba(183, 156, 92, 0.3)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease'
  };

  const imageContainerStyle = {
    position: 'relative',
    transform: animatedElements.image ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
    opacity: animatedElements.image ? 1 : 0,
    animation: animatedElements.image ? 'imageReveal 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards' : 'none',
    borderRadius: 'clamp(12px, 3vw, 20px)',
    overflow: 'hidden',
    width: '100%'
  };

  const imageStyle = {
    width: '100%',
    height: 'clamp(300px, 40vw, 500px)',
    objectFit: 'cover',
    borderRadius: 'clamp(12px, 3vw, 20px)',
    transition: 'all 0.5s ease',
    filter: 'brightness(0.9) contrast(1.1) saturate(1.1)'
  };

  const imageOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(183, 156, 92, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
    borderRadius: 'clamp(12px, 3vw, 20px)',
    opacity: 0,
    transition: 'all 0.4s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
    fontWeight: '600',
    textShadow: '0 2px 10px rgba(0,0,0,0.7)',
    textAlign: 'center',
    padding: '1rem'
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)',
    color: 'white',
    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
    fontWeight: '600',
    padding: 'clamp(0.8rem 2rem, 2vw, 1rem 2.5rem)',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: 'clamp(1.5rem, 3vw, 2rem)',
    transform: animatedElements.button ? 'scale(1)' : 'scale(0.8)',
    opacity: animatedElements.button ? 1 : 0,
    animation: animatedElements.button ? 'buttonPulse 1s cubic-bezier(0.23, 1, 0.32, 1) forwards' : 'none',
    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
    boxShadow: '0 10px 30px rgba(183, 156, 92, 0.3)',
    width: window.innerWidth < 768 ? '100%' : 'auto',
    maxWidth: window.innerWidth < 768 ? '300px' : 'none',
    margin: window.innerWidth < 768 ? 'clamp(1.5rem, 3vw, 2rem) auto 0 auto' : 'clamp(1.5rem, 3vw, 2rem) 0 0 0'
  };

  return (
    <section ref={sectionRef} style={sectionStyle}>
      {geometricElements}
      
      <div style={containerStyle}>
        <div style={contentStyle}>
          {window.innerWidth < 1024 ? (
            // Mobile/Tablet Layout - Image between paragraphs
            <div style={textSectionStyle}>
              <div style={{ position: 'relative' }}>
                <div style={titleAccentStyle}></div>
                <h2 style={titleStyle}>
                  <span style={titleWordStyle(0)}>About</span>
                  <span style={titleWordStyle(1)}>Us</span>
                </h2>
              </div>
              
              {/* First two paragraphs */}
              <div style={{ position: 'relative' }}>
                {[
                  "At Pavan Techno Construction, we deliver cost-effective, high-quality construction for residential, commercial, healthcare, and educational projects.",
                  
                  "With 8+ years of experience, we've built our reputation on trust, ethics, and exceeding client expectations through passion and commitment.",
                  
                  "We specialize in diverse construction projects with meticulous attention to detail. Our work with M.E.S has earned us a strong reputation in the industry.",
                  
                  "Every project receives our full dedication, as we understand buildings aren't just structures—they're the foundation for our clients' lives and businesses."
                ].map((text, index) => (
                  <p 
                    key={index} 
                    style={{
                      ...paragraphStyle,
                      transitionDelay: `${index * 0.15}s`
                    }}
                    onMouseEnter={(e) => {
                      if (window.innerWidth >= 768) {
                        e.currentTarget.style.borderLeft = '2px solid #B79C5C';
                        e.currentTarget.style.paddingLeft = '1.5rem';
                        e.currentTarget.style.color = '#f3f4f6';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (window.innerWidth >= 768) {
                        e.currentTarget.style.borderLeft = '2px solid transparent';
                        e.currentTarget.style.paddingLeft = '1rem';
                        e.currentTarget.style.color = '#e5e7eb';
                      }
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>

              {/* Image in the middle */}
              <div style={{...imageSectionStyle, margin: 'clamp(2rem, 4vw, 3rem) auto'}}>
                <div 
                  style={imageContainerStyle}
                  onMouseEnter={(e) => {
                    if (window.innerWidth >= 768) {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                      const overlay = e.currentTarget.querySelector('.image-overlay');
                      const img = e.currentTarget.querySelector('img');
                      if (overlay) overlay.style.opacity = '1';
                      if (img) img.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (window.innerWidth >= 768) {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      const overlay = e.currentTarget.querySelector('.image-overlay');
                      const img = e.currentTarget.querySelector('img');
                      if (overlay) overlay.style.opacity = '0';
                      if (img) img.style.transform = 'scale(1)';
                    }
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Professional Construction Team" 
                    style={imageStyle}
                  />
                  <div className="image-overlay" style={imageOverlayStyle}>
                    Excellence in Construction
                  </div>
                </div>
              </div>

              {/* Last two paragraphs */}
              <div style={{ position: 'relative' }}>
                {[
                  "We specialize in a wide range of construction projects, bringing your vision to life through craftsmanship and attention to details. We are also working with the most valuable department in India (M.E.S) with good reputations.",
                  
                  "At Pavan Techno Construction, we promise to approach every project with passion and dedication, recognizing that the buildings we create are not just structures, but the backdrops for our client's lives."
                ].map((text, index) => (
                  <p 
                    key={index + 2} 
                    style={{
                      ...paragraphStyle,
                      transitionDelay: `${(index + 2) * 0.15}s`
                    }}
                    onMouseEnter={(e) => {
                      if (window.innerWidth >= 768) {
                        e.currentTarget.style.borderLeft = '2px solid #B79C5C';
                        e.currentTarget.style.paddingLeft = '1.5rem';
                        e.currentTarget.style.color = '#f3f4f6';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (window.innerWidth >= 768) {
                        e.currentTarget.style.borderLeft = '2px solid transparent';
                        e.currentTarget.style.paddingLeft = '1rem';
                        e.currentTarget.style.color = '#e5e7eb';
                      }
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>
              
              <div style={statsContainerStyle}>
                <div 
                  style={statItemStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(183, 156, 92, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', color: '#B79C5C', marginBottom: '0.5rem' }}>8+</div>
                  <div style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: '#d1d5db' }}>Years Experience</div>
                </div>
                
                <div 
                  style={statItemStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(59, 130, 246, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', color: '#3b82f6', marginBottom: '0.5rem' }}>100+</div>
                  <div style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: '#d1d5db' }}>Projects Completed</div>
                </div>
                
                <div 
                  style={statItemStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(183, 156, 92, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', color: '#B79C5C', marginBottom: '0.5rem' }}>24/7</div>
                  <div style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: '#d1d5db' }}>Support</div>
                </div>
              </div>
              
              <button
                style={buttonStyle}
                onClick={openPopup || (() => console.log('Get Started clicked'))}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = window.innerWidth >= 768 ? 'scale(1.05)' : 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(183, 156, 92, 0.5)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #B79C5C 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(183, 156, 92, 0.3)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)';
                }}
              >
                <span style={{ position: 'relative', zIndex: 2 }}>
                  Get Started Today
                </span>
              </button>
            </div>
          ) : (
            // Desktop Layout - Side by side
            <>
              <div style={textSectionStyle}>
                <div style={{ position: 'relative' }}>
                  <div style={titleAccentStyle}></div>
                  <h2 style={titleStyle}>
                    <span style={titleWordStyle(0)}>About</span>
                    <span style={titleWordStyle(1)}>Us</span>
                  </h2>
                </div>
                
                <div style={{ position: 'relative' }}>
                  {[
                    "At Pavan Techno Construction, we deliver cost-effective, high-quality construction for residential, commercial, healthcare, and educational projects.",
                    
                    "With 8+ years of experience, we've built our reputation on trust, ethics, and exceeding client expectations through passion and commitment.",
                    
                    "We specialize in diverse construction projects with meticulous attention to detail. Our work with M.E.S has earned us a strong reputation in the industry.",
                    
                    "Every project receives our full dedication, as we understand buildings aren't just structures—they're the foundation for our clients' lives and businesses."
                  ].map((text, index) => (
                    <p 
                      key={index} 
                      style={{
                        ...paragraphStyle,
                        transitionDelay: `${index * 0.15}s`
                      }}
                      onMouseEnter={(e) => {
                        if (window.innerWidth >= 768) {
                          e.currentTarget.style.borderLeft = '2px solid #B79C5C';
                          e.currentTarget.style.paddingLeft = '1.5rem';
                          e.currentTarget.style.color = '#f3f4f6';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (window.innerWidth >= 768) {
                          e.currentTarget.style.borderLeft = '2px solid transparent';
                          e.currentTarget.style.paddingLeft = '1rem';
                          e.currentTarget.style.color = '#e5e7eb';
                        }
                      }}
                    >
                      {text}
                    </p>
                  ))}
                </div>
                
                <div style={statsContainerStyle}>
                  <div 
                    style={statItemStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 15px 30px rgba(183, 156, 92, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', color: '#B79C5C', marginBottom: '0.5rem' }}>8+</div>
                    <div style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: '#d1d5db' }}>Years Experience</div>
                  </div>
                  
                  <div 
                    style={statItemStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 15px 30px rgba(59, 130, 246, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', color: '#3b82f6', marginBottom: '0.5rem' }}>100+</div>
                    <div style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: '#d1d5db' }}>Projects Completed</div>
                  </div>
                  
                  <div 
                    style={statItemStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 15px 30px rgba(183, 156, 92, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', color: '#B79C5C', marginBottom: '0.5rem' }}>24/7</div>
                    <div style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: '#d1d5db' }}>Support</div>
                  </div>
                </div>
                
                <button
                  style={buttonStyle}
                  onClick={openPopup || (() => console.log('Get Started clicked'))}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = window.innerWidth >= 768 ? 'scale(1.05)' : 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(183, 156, 92, 0.5)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #B79C5C 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(183, 156, 92, 0.3)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)';
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 2 }}>
                    Get Started Today
                  </span>
                </button>
              </div>
              
              <div style={imageSectionStyle}>
                <div 
                  style={imageContainerStyle}
                  onMouseEnter={(e) => {
                    if (window.innerWidth >= 768) {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                      const overlay = e.currentTarget.querySelector('.image-overlay');
                      const img = e.currentTarget.querySelector('img');
                      if (overlay) overlay.style.opacity = '1';
                      if (img) img.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (window.innerWidth >= 768) {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      const overlay = e.currentTarget.querySelector('.image-overlay');
                      const img = e.currentTarget.querySelector('img');
                      if (overlay) overlay.style.opacity = '0';
                      if (img) img.style.transform = 'scale(1)';
                    }
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Professional Construction Team" 
                    style={imageStyle}
                  />
                  <div className="image-overlay" style={imageOverlayStyle}>
                    Excellence in Construction
                  </div>
                  
                  {/* Decorative border - hidden on small screens */}
                  {window.innerWidth >= 768 && (
                    <div style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '-10px',
                      right: '-10px',
                      bottom: '-10px',
                      border: '2px solid transparent',
                      borderImage: 'linear-gradient(135deg, #B79C5C, #3b82f6) 1',
                      borderRadius: '25px',
                      opacity: 0.5,
                      animation: 'borderGlow 3s ease-in-out infinite'
                    }} />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
