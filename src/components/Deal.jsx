import React, { useEffect, useState, useRef } from 'react';

const Deal = ({ openPopup }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState({
    title: false,
    subtitle: false,
    images: false,
    features: false,
    button: false
  });
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Staggered animation trigger
          setTimeout(() => setAnimatedElements(prev => ({ ...prev, title: true })), 200);
          setTimeout(() => setAnimatedElements(prev => ({ ...prev, subtitle: true })), 1400);
          setTimeout(() => setAnimatedElements(prev => ({ ...prev, images: true })), 1800);
          setTimeout(() => setAnimatedElements(prev => ({ ...prev, features: true })), 2100);
          setTimeout(() => setAnimatedElements(prev => ({ ...prev, button: true })), 2400);
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

  // CSS Variables for theme consistency
  const cssVariables = {
    '--primary-color': '#2c3e50',
    '--secondary-color': '#f8f9fa',
    '--accent-color': '#B79C5C',
    '--light-color': '#ffffff',
    '--text-color': '#495057',
    '--shadow-color': 'rgba(44, 62, 80, 0.1)',
    '--border-radius': '16px',
    '--transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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

    @keyframes fadeInDelay {
      0% {
        opacity: 0;
        transform: translateY(20px);
        filter: blur(3px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0px);
      }
    }

    @keyframes imageReveal {
      0% {
        transform: translateY(60px) scale(0.8) rotateY(15deg);
        opacity: 0;
        filter: blur(8px);
      }
      50% {
        transform: translateY(30px) scale(0.9) rotateY(8deg);
        opacity: 0.5;
        filter: blur(4px);
      }
      100% {
        transform: translateY(0) scale(1) rotateY(0deg);
        opacity: 1;
        filter: blur(0px);
      }
    }

    @keyframes featureSlideIn {
      0% {
        transform: translateX(-50px) rotateZ(-5deg);
        opacity: 0;
        filter: blur(3px);
      }
      100% {
        transform: translateX(0) rotateZ(0deg);
        opacity: 1;
        filter: blur(0px);
      }
    }

    @keyframes buttonPulse {
      0% {
        transform: scale(0.8) rotateZ(-5deg);
        opacity: 0;
        box-shadow: 0 0 0 0 rgba(183, 156, 92, 0.4);
      }
      50% {
        transform: scale(0.95) rotateZ(-2deg);
        opacity: 0.8;
      }
      100% {
        transform: scale(1) rotateZ(0deg);
        opacity: 1;
        box-shadow: 0 10px 25px rgba(183, 156, 92, 0.3);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      33% {
        transform: translateY(-10px) rotate(1deg);
      }
      66% {
        transform: translateY(-5px) rotate(-1deg);
      }
    }

    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    @keyframes morphBorder {
      0%, 100% {
        border-radius: 16px;
      }
      25% {
        border-radius: 16px 40px 16px 40px;
      }
      50% {
        border-radius: 40px 16px 40px 16px;
      }
      75% {
        border-radius: 16px 40px 16px 40px;
      }
    }
  `;

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = keyframes;
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const sectionStyle = {
    ...cssVariables,
    backgroundColor: 'var(--secondary-color)',
    padding: '5rem 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)',
    backgroundSize: '400% 400%'
  };

  const decorativeElements = (
    <>
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '300px',
        height: '300px',
        background: 'linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1))',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite',
        zIndex: 1
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '-3%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(52, 73, 94, 0.1))',
        borderRadius: '30%',
        animation: 'float 10s ease-in-out infinite reverse',
        zIndex: 1
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(183, 156, 92, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 12s ease-in-out infinite',
        zIndex: 1
      }} />
    </>
  );

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
    perspective: '1000px'
  };

  const mainTitleStyle = {
    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
    fontWeight: '900',
    lineHeight: '1.1',
    margin: '0 0 1rem 0',
    perspective: '1000px'
  };

  const titleWordStyle = (wordIndex) => ({
    display: 'inline-block',
    marginRight: '20px',
    opacity: animatedElements.title ? 1 : 0,
    transform: animatedElements.title ? 'translateY(0) rotateX(0deg) scale(1)' : 'translateY(100px) rotateX(90deg) scale(0.5)',
    background: 'linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: animatedElements.title ? `wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${0.8 + (wordIndex * 0.2)}s, gradientShift 4s ease-in-out infinite` : 'none'
  });

  const accentWordStyle = (wordIndex) => ({
    display: 'inline-block',
    marginRight: '20px',
    opacity: animatedElements.title ? 1 : 0,
    transform: animatedElements.title ? 'translateY(0) rotateX(0deg) scale(1)' : 'translateY(100px) rotateX(90deg) scale(0.5)',
    background: 'linear-gradient(135deg, #B79C5C, #34495e, #2c3e50)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: animatedElements.title ? `wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${0.8 + (wordIndex * 0.2)}s, gradientShift 4s ease-in-out infinite` : 'none'
  });

  const subtitleStyle = {
    fontSize: '1.2rem',
    color: 'var(--text-color)',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.8',
    opacity: animatedElements.subtitle ? 1 : 0,
    animation: animatedElements.subtitle ? 'fadeInDelay 1s forwards' : 'none'
  };

  const imagesContainerStyle = {
    display: 'flex',
    gap: '2rem',
    marginTop: '3rem',
    marginBottom: '3rem'
  };

  const imageWrapperStyle = (index) => ({
    flex: 1,
    position: 'relative',
    borderRadius: 'var(--border-radius)',
    overflow: 'hidden',
    boxShadow: '0 15px 35px var(--shadow-color)',
    transform: animatedElements.images ? 'translateY(0) scale(1) rotateY(0deg)' : 'translateY(60px) scale(0.8) rotateY(15deg)',
    opacity: animatedElements.images ? 1 : 0,
    animation: animatedElements.images ? `imageReveal 1s forwards ${index * 0.2}s` : 'none',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer'
  });

  const imageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    filter: 'brightness(0.9) contrast(1.1)'
  };

  const imageOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(183, 156, 92, 0.2), rgba(44, 62, 80, 0.2))',
    opacity: 0,
    transition: 'all 0.4s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '600',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
  };

  const featuresStyle = {
    marginTop: '3rem',
    display: 'grid',
    gap: '1.5rem'
  };

  const featureItemStyle = (index) => ({
    display: 'flex',
    alignItems: 'flex-start',
    background: 'var(--light-color)',
    padding: '1.5rem',
    borderRadius: 'var(--border-radius)',
    boxShadow: '0 8px 25px var(--shadow-color)',
    border: '1px solid rgba(183, 156, 92, 0.1)',
    transform: animatedElements.features ? 'translateX(0) rotateZ(0deg)' : 'translateX(-50px) rotateZ(-5deg)',
    opacity: animatedElements.features ? 1 : 0,
    animation: animatedElements.features ? `featureSlideIn 0.6s forwards ${index * 0.1}s` : 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
  });

  const iconStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1rem',
    flexShrink: 0,
    color: 'white',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
    position: 'relative',
    zIndex: 2
  };

  const buttonStyle = {
    display: 'inline-block',
    background: 'linear-gradient(135deg, var(--accent-color), var(--primary-color))',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '600',
    padding: '1rem 3rem',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transform: animatedElements.button ? 'scale(1) rotateZ(0deg)' : 'scale(0.8) rotateZ(-5deg)',
    opacity: animatedElements.button ? 1 : 0,
    animation: animatedElements.button ? 'buttonPulse 1s forwards' : 'none',
    boxShadow: '0 10px 25px rgba(183, 156, 92, 0.3)',
    zIndex: 2
  };

  const features = [
    { icon: '🏗️', title: 'Superior Quality Construction', desc: 'Only the best raw materials used for lasting durability' },
    { icon: '📐', title: 'Perfect Planning & Execution', desc: 'Designed by a highly qualified architectural team' },
    { icon: '⏰', title: 'On-Time Delivery', desc: 'Because we value your time and commitments' },
    { icon: '💰', title: 'Affordable Innovation', desc: 'Stylish homes at unbeatable market prices' },
    { icon: '⭐', title: 'Customer Satisfaction Guaranteed', desc: 'We build homes that match your dreams perfectly' }
  ];

  return (
    <section ref={sectionRef} style={sectionStyle}>
      {decorativeElements}
      
      <div style={containerStyle}>
        <div style={titleStyle}>
          <h2 style={mainTitleStyle}>
            <span style={accentWordStyle(0)}>Exceptional</span>
            <span style={titleWordStyle(1)}>Deal</span>
            <span style={titleWordStyle(2)}>For</span>
            <span style={titleWordStyle(3)}>Your</span>
            <span style={accentWordStyle(4)}>Dream</span>
            <span style={titleWordStyle(5)}>Home</span>
          </h2>
          
          <p style={subtitleStyle}>
            Discover unparalleled value with Pavan Techno Constructions. We deliver premium quality homes 
            that combine architectural excellence with modern innovation, all at prices that redefine market standards.
          </p>
        </div>
        
        <div style={imagesContainerStyle}>
          <div 
            style={imageWrapperStyle(0)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px) scale(1.05) rotateY(-5deg)';
              e.currentTarget.style.animation = 'morphBorder 2s ease-in-out infinite';
              const img = e.currentTarget.querySelector('img');
              const overlay = e.currentTarget.querySelector('.image-overlay');
              if (img) img.style.transform = 'scale(1.1) rotate(2deg)';
              if (overlay) overlay.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
              e.currentTarget.style.animation = 'none';
              const img = e.currentTarget.querySelector('img');
              const overlay = e.currentTarget.querySelector('.image-overlay');
              if (img) img.style.transform = 'scale(1) rotate(0deg)';
              if (overlay) overlay.style.opacity = '0';
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Modern House Exterior" 
              style={imageStyle}
            />
            <div className="image-overlay" style={imageOverlayStyle}>
              Stunning Exteriors
            </div>
          </div>
          
          <div 
            style={imageWrapperStyle(1)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px) scale(1.05) rotateY(5deg)';
              e.currentTarget.style.animation = 'morphBorder 2s ease-in-out infinite reverse';
              const img = e.currentTarget.querySelector('img');
              const overlay = e.currentTarget.querySelector('.image-overlay');
              if (img) img.style.transform = 'scale(1.1) rotate(-2deg)';
              if (overlay) overlay.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
              e.currentTarget.style.animation = 'none';
              const img = e.currentTarget.querySelector('img');
              const overlay = e.currentTarget.querySelector('.image-overlay');
              if (img) img.style.transform = 'scale(1) rotate(0deg)';
              if (overlay) overlay.style.opacity = '0';
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Luxurious Interior" 
              style={imageStyle}
            />
            <div className="image-overlay" style={imageOverlayStyle}>
              Elegant Interiors
            </div>
          </div>
        </div>
        
        <div style={featuresStyle}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={featureItemStyle(index)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(10px) scale(1.02) rotateZ(1deg)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(183, 156, 92, 0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff, #f8f9fa)';
                const icon = e.currentTarget.querySelector('.feature-icon');
                if (icon) {
                  icon.style.transform = 'scale(1.1) rotateY(180deg)';
                  icon.style.background = 'linear-gradient(135deg, var(--accent-color), var(--primary-color))';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0) scale(1) rotateZ(0deg)';
                e.currentTarget.style.boxShadow = '0 8px 25px var(--shadow-color)';
                e.currentTarget.style.background = 'var(--light-color)';
                const icon = e.currentTarget.querySelector('.feature-icon');
                if (icon) {
                  icon.style.transform = 'scale(1) rotateY(0deg)';
                  icon.style.background = 'linear-gradient(135deg, var(--primary-color), var(--accent-color))';
                }
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(183, 156, 92, 0.1), transparent)',
                transition: 'left 0.5s ease'
              }} />
              
              <div className="feature-icon" style={iconStyle}>
                {feature.icon}
              </div>
              
              <div style={{ flex: 1, zIndex: 2 }}>
                <h4 style={{
                  color: 'var(--primary-color)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  transition: 'all 0.3s ease'
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  color: 'var(--text-color)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  margin: 0,
                  transition: 'all 0.3s ease'
                }}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            style={buttonStyle}
            onClick={openPopup}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) rotateZ(2deg)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(183, 156, 92, 0.4)';
              e.currentTarget.style.background = 'linear-gradient(135deg, var(--primary-color), var(--accent-color))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotateZ(0deg)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(183, 156, 92, 0.3)';
              e.currentTarget.style.background = 'linear-gradient(135deg, var(--accent-color), var(--primary-color))';
            }}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>
              Claim Your Deal Today
            </span>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transition: 'left 0.5s ease'
            }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Deal;