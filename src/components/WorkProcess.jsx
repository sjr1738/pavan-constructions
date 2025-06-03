import React, { useRef, useEffect, useState } from 'react';

const WorkProcess = () => {
  const sectionRef = useRef(null);
  const [animatedSteps, setAnimatedSteps] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [titleAnimated, setTitleAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Trigger title animation
            setTimeout(() => setTitleAnimated(true), 300);
            // Trigger step animations with proper delays
            setTimeout(() => setAnimatedSteps([0]), 1600);
            setTimeout(() => setAnimatedSteps([0, 1]), 1800);
            setTimeout(() => setAnimatedSteps([0, 1, 2]), 2000);
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

    @keyframes cardFadeUp {
      0% {
        opacity: 0;
        transform: translateY(60px) scale(0.9);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes subtitleFadeUp {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes backgroundFloat {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
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

  const workSteps = [
    {
      icon: "https://assurancedevelopers.com/wp-content/uploads/2024/07/5124556-1-1.png",
      title: "Consultation & Planning",
      description: "Strategic consultation meets architectural innovation. We decode your vision into precision blueprints with cutting-edge planning methodologies.",
      number: "01",
      color: "#e74c3c"
    },
    {
      icon: "https://assurancedevelopers.com/wp-content/uploads/2024/07/19198827-1.png",
      title: "Design & Development",
      description: "Where creativity meets engineering excellence. Our design studio transforms concepts into revolutionary architectural solutions.",
      number: "02",
      color: "#3498db"
    },
    {
      icon: "https://assurancedevelopers.com/wp-content/uploads/2024/07/20945160-1-2.png",
      title: "Construction & Handover",
      description: "Precision construction powered by advanced technology. From foundation to final handover, excellence in every detail.",
      number: "03",
      color: "#2ecc71"
    }
  ];

  const sectionStyle = {
    padding: '8rem 0',
    background: `
      linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%),
      radial-gradient(circle at 20% 50%, rgba(183, 156, 92, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(44, 62, 80, 0.08) 0%, transparent 50%)
    `,
    position: 'relative',
    overflow: 'hidden',
    color: '#2c3e50'
  };

  const containerStyle = {
    maxWidth: '1600px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2
  };

  const titleSectionStyle = {
    textAlign: 'center',
    marginBottom: '6rem',
    position: 'relative',
    perspective: '1000px'
  };

  const titleStyle = {
    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
    fontWeight: '900',
    lineHeight: '1.1',
    margin: '0 0 2rem 0',
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
    fontSize: '1.4rem',
    color: '#64748b',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.8',
    opacity: titleAnimated ? 1 : 0,
    animation: titleAnimated ? 'subtitleFadeUp 1s ease-out forwards 1.6s' : 'none'
  };

  const processGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '3rem',
    marginTop: '4rem',
    position: 'relative'
  };

  const stepCardStyle = (index, isAnimated) => ({
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '24px',
    padding: '3rem 2rem',
    border: '1px solid rgba(183, 156, 92, 0.2)',
    boxShadow: '0 10px 30px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)',
    backdropFilter: 'blur(10px)',
    transform: isAnimated ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.9)',
    opacity: isAnimated ? 1 : 0,
    animation: isAnimated ? `cardFadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards ${index * 0.2}s` : 'none',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: 'hidden'
  });

  const numberContainerStyle = {
    position: 'absolute',
    top: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #B79C5C, #2c3e50)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.4rem',
    fontWeight: '800',
    color: '#ffffff',
    border: '3px solid rgba(255, 255, 255, 0.9)',
    zIndex: 3,
    boxShadow: '0 8px 25px rgba(44, 62, 80, 0.3)',
    transition: 'all 0.3s ease'
  };

  const iconContainerStyle = {
    width: '100px',
    height: '100px',
    margin: '2rem auto',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid rgba(183, 156, 92, 0.3)',
    boxShadow: '0 8px 25px rgba(44, 62, 80, 0.1)',
    position: 'relative',
    transition: 'all 0.3s ease'
  };

  const iconStyle = {
    width: '50%',
    height: '50%',
    objectFit: 'contain',
    filter: 'brightness(1.1) contrast(1.1)',
    transition: 'all 0.3s ease'
  };

  const contentStyle = {
    textAlign: 'center',
    position: 'relative',
    zIndex: 2
  };

  const titleContentStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '1rem',
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease'
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: '1.6',
    transition: 'all 0.3s ease'
  };

  // Simple floating background elements
  const backgroundElements = (
    <>
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '10%',
        width: '150px',
        height: '150px',
        background: 'rgba(183, 156, 92, 0.05)',
        borderRadius: '50%',
        animation: 'backgroundFloat 6s ease-in-out infinite',
        zIndex: 1
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '8%',
        width: '120px',
        height: '120px',
        background: 'rgba(44, 62, 80, 0.05)',
        borderRadius: '30%',
        animation: 'backgroundFloat 8s ease-in-out infinite reverse',
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
            <span style={titleWordStyle(0)}>How</span>
            <span style={titleWordStyle(1)}>We</span>
            <span style={titleWordStyle(2)}>Work?</span>
          </h2>
          
          <p style={subtitleStyle}>
            Revolutionary construction methodology powered by cutting-edge technology and architectural innovation
          </p>
        </div>
        
        <div style={processGridStyle}>
          {workSteps.map((step, index) => {
            const isAnimated = animatedSteps.includes(index);
            
            return (
              <div
                key={index}
                style={stepCardStyle(index, isAnimated)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(44, 62, 80, 0.15), 0 15px 30px rgba(183, 156, 92, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(183, 156, 92, 0.4)';
                  
                  const numberContainer = e.currentTarget.querySelector('.number-container');
                  const iconContainer = e.currentTarget.querySelector('.icon-container');
                  const icon = e.currentTarget.querySelector('.step-icon');
                  const title = e.currentTarget.querySelector('.step-title');
                  const description = e.currentTarget.querySelector('.step-description');
                  
                  if (numberContainer) {
                    numberContainer.style.transform = 'translateX(-50%) scale(1.1)';
                    numberContainer.style.background = 'linear-gradient(135deg, #2c3e50, #B79C5C)';
                  }
                  if (iconContainer) {
                    iconContainer.style.transform = 'scale(1.1)';
                    iconContainer.style.borderColor = 'rgba(183, 156, 92, 0.5)';
                    iconContainer.style.background = 'rgba(255, 255, 255, 0.95)';
                  }
                  if (icon) {
                    icon.style.transform = 'scale(1.2)';
                    icon.style.filter = 'brightness(1.3) contrast(1.2)';
                  }
                  if (title) {
                    title.style.color = '#B79C5C';
                  }
                  if (description) {
                    description.style.color = '#2c3e50';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(183, 156, 92, 0.2)';
                  
                  const numberContainer = e.currentTarget.querySelector('.number-container');
                  const iconContainer = e.currentTarget.querySelector('.icon-container');
                  const icon = e.currentTarget.querySelector('.step-icon');
                  const title = e.currentTarget.querySelector('.step-title');
                  const description = e.currentTarget.querySelector('.step-description');
                  
                  if (numberContainer) {
                    numberContainer.style.transform = 'translateX(-50%) scale(1)';
                    numberContainer.style.background = 'linear-gradient(135deg, #B79C5C, #2c3e50)';
                  }
                  if (iconContainer) {
                    iconContainer.style.transform = 'scale(1)';
                    iconContainer.style.borderColor = 'rgba(183, 156, 92, 0.3)';
                    iconContainer.style.background = 'rgba(255, 255, 255, 0.8)';
                  }
                  if (icon) {
                    icon.style.transform = 'scale(1)';
                    icon.style.filter = 'brightness(1.1) contrast(1.1)';
                  }
                  if (title) {
                    title.style.color = '#2c3e50';
                  }
                  if (description) {
                    description.style.color = '#64748b';
                  }
                }}
              >
                {/* Number Badge */}
                <div style={numberContainerStyle} className="number-container">
                  {step.number}
                </div>
                
                {/* Icon Section */}
                <div className="icon-container" style={iconContainerStyle}>
                  <img src={step.icon} alt={step.title} style={iconStyle} className="step-icon" />
                </div>
                
                {/* Content */}
                <div style={contentStyle}>
                  <h3 style={titleContentStyle} className="step-title">
                    {step.title}
                  </h3>
                  <p style={descriptionStyle} className="step-description">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 1200px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.5rem !important;
          }
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          
          h2 {
            font-size: 3.5rem !important;
          }
        }
        
        @media (max-width: 768px) {
          h2 {
            font-size: 2.8rem !important;
            line-height: 1.2 !important;
          }
          
          .step-card {
            padding: 2rem 1.5rem !important;
            margin: 0 1rem !important;
          }
          
          .subtitle {
            font-size: 1.2rem !important;
            padding: 0 1rem !important;
          }
          
          .icon-container {
            width: 80px !important;
            height: 80px !important;
          }
          
          .step-title {
            font-size: 1.3rem !important;
          }
          
          .step-description {
            font-size: 0.9rem !important;
          }
          
          .number-container {
            width: 50px !important;
            height: 50px !important;
            font-size: 1.2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          h2 {
            font-size: 2.2rem !important;
            letter-spacing: 1px !important;
          }
          
          .step-card {
            padding: 1.5rem 1rem !important;
          }
          
          .subtitle {
            font-size: 1rem !important;
          }
          
          .icon-container {
            width: 70px !important;
            height: 70px !important;
          }
          
          .number-container {
            width: 45px !important;
            height: 45px !important;
            font-size: 1rem !important;
          }
          
          .step-title {
            font-size: 1.2rem !important;
          }
        }

        @media (max-width: 360px) {
          h2 {
            font-size: 1.8rem !important;
          }
          
          .step-card {
            padding: 1rem 0.8rem !important;
            margin: 0 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkProcess;