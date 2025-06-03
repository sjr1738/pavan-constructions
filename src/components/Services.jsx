import React, { useEffect, useRef, useState } from 'react';

const Services = () => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [titleAnimated, setTitleAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            // Trigger title animation
            setTimeout(() => setTitleAnimated(true), 300);
            // Trigger cards animation with staggered effect
            setTimeout(() => {
              setVisibleCards(prev => [...Array(6).keys()]);
            }, 1500);
          }
        });
      },
      { threshold: 0.2 }
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

  const services = [
    {
      title: "Building Construction",
      icon: "🏗️",
      description: "From start to end, whether its residential or commercial project, we deliver quality construction tailored to your needs, ensuring durability and elegance.",
      gradient: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)"
    },
    {
      title: "Architectural Services",
      icon: "📐",
      description: "We believe in constantly researching and developing ways to make the entire construction process more efficient and quality driven.",
      gradient: "linear-gradient(135deg, #B79C5C 0%, #8B7355 100%)"
    },
    {
      title: "Renovation",
      icon: "🔨",
      description: "We undertake renovation work for all commercial, residential and factory layout. From demolishing to rebuilding with custom redesigns.",
      gradient: "linear-gradient(135deg, #34495e 0%, #2c3e50 100%)"
    },
    {
      title: "Layout Development",
      icon: "📋",
      description: "Our layout development expertise is designed to transform your project goals into reality. A perfect balance of form and function.",
      gradient: "linear-gradient(135deg, #8B7355 0%, #B79C5C 100%)"
    },
    {
      title: "Interior Designing",
      icon: "🎨",
      description: "We create stunning interior designs for commercial, residential, and industrial spaces. From concept to completion with expert craftsmanship.",
      gradient: "linear-gradient(135deg, #2c3e50 0%, #B79C5C 100%)"
    },
    {
      title: "Customer Satisfaction",
      icon: "⭐",
      description: "Our expert architects help you with creating conceptual designs, developing floor plans and preparing site plans that reflect your expectations.",
      gradient: "linear-gradient(135deg, #B79C5C 0%, #34495e 100%)"
    }
  ];

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

    @keyframes float {
      0%, 100% { 
        transform: translateY(0) rotate(0deg) scale(1); 
        filter: blur(0px);
      }
      25% { 
        transform: translateY(-15px) rotate(2deg) scale(1.02); 
        filter: blur(0.5px);
      }
      50% { 
        transform: translateY(-25px) rotate(5deg) scale(1.05); 
        filter: blur(1px);
      }
      75% { 
        transform: translateY(-15px) rotate(3deg) scale(1.02); 
        filter: blur(0.5px);
      }
    }
    
    @keyframes subtitleReveal {
      0% {
        transform: translateY(40px) scale(0.8);
        opacity: 0;
        filter: blur(8px);
      }
      60% {
        transform: translateY(10px) scale(0.95);
        opacity: 0.7;
        filter: blur(2px);
      }
      100% {
        transform: translateY(0) scale(1);
        opacity: 1;
        filter: blur(0px);
      }
    }
  `;

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    padding: '6rem 0',
    position: 'relative',
    overflow: 'hidden'
  };

  const decorativeShapeStyle = {
    position: 'absolute',
    width: '300px',
    height: '300px',
    background: 'linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1))',
    borderRadius: '50%',
    top: '10%',
    right: '-5%',
    animation: 'float 6s ease-in-out infinite',
    zIndex: 1
  };

  const decorativeShape2Style = {
    position: 'absolute',
    width: '200px',
    height: '200px',
    background: 'linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(52, 73, 94, 0.1))',
    borderRadius: '30%',
    bottom: '20%',
    left: '-3%',
    animation: 'float 8s ease-in-out infinite reverse',
    zIndex: 1
  };

  const containerInnerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2
  };

  const titleContainerStyle = {
    textAlign: 'center',
    marginBottom: '4rem',
    position: 'relative',
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
    opacity: titleAnimated ? 1 : 0,
    transform: titleAnimated ? 'translateY(0) rotateX(0deg) scale(1)' : 'translateY(100px) rotateX(90deg) scale(0.5)',
    background: 'linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: titleAnimated ? `wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${0.8 + (wordIndex * 0.2)}s, gradientShift 4s ease-in-out infinite` : 'none'
  });

  const subtitleStyle = {
    fontSize: '1.2rem',
    color: '#6c757d',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.8',
    transform: titleAnimated ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.8)',
    opacity: titleAnimated ? 1 : 0,
    animation: titleAnimated ? 'subtitleReveal 1s ease-out 1.6s forwards' : 'none'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2.5rem',
    marginTop: '4rem'
  };

  const getCardStyle = (index, isVisible) => ({
    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(248, 249, 250, 0.95))',
    borderRadius: '24px',
    padding: '2.5rem',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04)',
    border: '1px solid rgba(183, 156, 92, 0.15)',
    backdropFilter: 'blur(10px)',
    transform: isVisible ? 'translateY(0) scale(1) rotateX(0)' : 'translateY(80px) scale(0.85) rotateX(15deg)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1)',
    transitionDelay: `${index * 0.12}s`,
    cursor: 'pointer',
    transformStyle: 'preserve-3d',
    perspective: '1000px'
  });

  const iconContainerStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    marginBottom: '1.5rem',
    position: 'relative',
    zIndex: 2
  };

  const cardTitleStyle = {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '1.2rem',
    position: 'relative',
    zIndex: 3,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    letterSpacing: '0.5px'
  };

  const cardDescriptionStyle = {
    color: '#495057',
    lineHeight: '1.8',
    fontSize: '1rem',
    position: 'relative',
    zIndex: 3,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: '24px',
    zIndex: 1,
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
    backdropFilter: 'blur(20px)'
  };

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

  return (
    <section ref={sectionRef} style={containerStyle}>
      <div style={decorativeShapeStyle}></div>
      <div style={decorativeShape2Style}></div>
      
      <div style={containerInnerStyle}>
        <div style={titleContainerStyle}>
          <h2 style={mainTitleStyle}>
            <span style={titleWordStyle(0)}>Our</span>
            <span style={titleWordStyle(1)}>Premium</span>
            <span style={titleWordStyle(2)}>Services</span>
          </h2>
          <p style={subtitleStyle}>
            We provide a comprehensive range of construction services, from inception to completion. 
            Every detail matters in transforming your vision into reality, creating spaces that inspire and endure.
          </p>
        </div>
        
        <div style={gridStyle}>
          {services.map((service, index) => (
            <div
              key={index}
              style={getCardStyle(index, visibleCards.includes(index))}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-20px) scale(1.05) rotateX(-5deg) rotateY(5deg)';
                e.currentTarget.style.boxShadow = '0 35px 60px rgba(44, 62, 80, 0.15), 0 15px 25px rgba(183, 156, 92, 0.1)';
                
                const overlay = e.currentTarget.querySelector('.card-overlay');
                const shimmer = e.currentTarget.querySelector('.shimmer-effect');
                const title = e.currentTarget.querySelector('.card-title');
                const description = e.currentTarget.querySelector('.card-description');
                const icon = e.currentTarget.querySelector('.icon-container');
                
                if (overlay) {
                  overlay.style.opacity = '0.4';
                  overlay.style.background = service.gradient;
                }
                if (shimmer) {
                  shimmer.style.opacity = '1';
                  shimmer.style.transform = 'translateX(350px)';
                }
                if (title) {
                  title.style.color = '#ffffff';
                  title.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.3)';
                  title.style.transform = 'translateY(-2px)';
                }
                if (description) {
                  description.style.color = 'rgba(255, 255, 255, 0.9)';
                  description.style.textShadow = '0 1px 2px rgba(0, 0, 0, 0.2)';
                }
                if (icon) {
                  icon.style.transform = 'scale(1.1) rotateY(180deg)';
                  icon.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04)';
                
                const overlay = e.currentTarget.querySelector('.card-overlay');
                const shimmer = e.currentTarget.querySelector('.shimmer-effect');
                const title = e.currentTarget.querySelector('.card-title');
                const description = e.currentTarget.querySelector('.card-description');
                const icon = e.currentTarget.querySelector('.icon-container');
                
                if (overlay) {
                  overlay.style.opacity = '0';
                }
                if (shimmer) {
                  shimmer.style.opacity = '0';
                  shimmer.style.transform = 'translateX(-350px)';
                }
                if (title) {
                  title.style.color = '#2c3e50';
                  title.style.textShadow = 'none';
                  title.style.transform = 'translateY(0)';
                }
                if (description) {
                  description.style.color = '#495057';
                  description.style.textShadow = 'none';
                }
                if (icon) {
                  icon.style.transform = 'scale(1) rotateY(0deg)';
                  icon.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                }
              }}
            >
              <div
                className="card-overlay"
                style={overlayStyle}
              ></div>

              <div
                className="shimmer-effect"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-350px',
                  width: '100px',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                  transform: 'skewX(-20deg)',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: 0,
                  zIndex: 2
                }}
              ></div>
              
              <div 
                className="icon-container"
                style={{
                  ...iconContainerStyle,
                  background: service.gradient,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}
              >
                <span style={{ 
                  filter: 'brightness(0) invert(1)',
                  transition: 'all 0.3s ease',
                  display: 'block'
                }}>
                  {service.icon}
                </span>
              </div>
              
              <h3 className="card-title" style={cardTitleStyle}>{service.title}</h3>
              <p className="card-description" style={cardDescriptionStyle}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;