import React, { useRef, useEffect, useState } from 'react';

const Record = () => {
  const sectionRef = useRef(null);
  const counterRef = useRef([]);
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);
  const [titleAnimated, setTitleAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('section-visible');
            // Trigger title animation
            setTimeout(() => setTitleAnimated(true), 300);
            // Start counting animation
            setTimeout(() => startCounting(), 1000);
            // Trigger item animations with staggered delays
            setTimeout(() => setAnimatedItems([0]), 1600);
            setTimeout(() => setAnimatedItems([0, 1]), 1800);
            setTimeout(() => setAnimatedItems([0, 1, 2]), 2000);
            setTimeout(() => setAnimatedItems([0, 1, 2, 3]), 2200);
          }
        });
      },
      { threshold: 0.3 }
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

  const startCounting = () => {
    const counters = counterRef.current;
    counters.forEach((counter, index) => {
      if (!counter) return;
      const targetValue = parseInt(counter.getAttribute('data-target'));
      const duration = 2500; // 2.5 seconds
      const step = targetValue / (duration / 50); // Update every 50ms
      let current = 0;

      setTimeout(() => {
        const updateCounter = () => {
          current += step;
          if (current < targetValue) {
            counter.textContent = Math.ceil(current);
            setTimeout(updateCounter, 50);
          } else {
            counter.textContent = targetValue;
          }
        };
        updateCounter();
      }, index * 200);
    });
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

    @keyframes underlineExpand {
      0% {
        width: 0;
        opacity: 0;
      }
      100% {
        width: 150px;
        opacity: 1;
      }
    }

    @keyframes backgroundFloat {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-15px);
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

  const records = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '2.5rem', height: '2.5rem' }}>
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      ),
      value: 9,
      label: "YEARS LEGACY",
      suffix: "+",
      color: "#3498db"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '2.5rem', height: '2.5rem' }}>
          <path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-1H3v1zm0-2.5h18v-1H3v1zm0-2.5h18v-1H3v1zM3 5v1h18V5H3z"/>
        </svg>
      ),
      value: 6,
      label: "LAKHS SQ.FT DELIVERED",
      suffix: "+",
      color: "#B79C5C"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '2.5rem', height: '2.5rem' }}>
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
        </svg>
      ),
      value: 30,
      label: "Projects Delivered",
      suffix: "+",
      color: "#2c3e50"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '2.5rem', height: '2.5rem' }}>
          <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 8H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
        </svg>
      ),
      value: 5,
      label: "Cities",
      suffix: "+",
      color: "#3498db"
    }
  ];

  const sectionStyle = {
    padding: '6rem 0',
    background: `
      linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%),
      radial-gradient(circle at 20% 50%, rgba(183, 156, 92, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(52, 152, 219, 0.1) 0%, transparent 50%)
    `,
    color: '#ffffff',
    overflow: 'hidden',
    position: 'relative'
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2
  };

  const titleSectionStyle = {
    textAlign: 'center',
    marginBottom: '5rem',
    position: 'relative',
    perspective: '1000px'
  };

  const headingStyle = {
    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
    fontWeight: '900',
    lineHeight: '1.1',
    margin: '0 0 2rem 0',
    perspective: '1000px',
    textTransform: 'uppercase',
    letterSpacing: '3px'
  };

  const titleWordStyle = (wordIndex) => ({
    display: 'inline-block',
    marginRight: '20px',
    opacity: titleAnimated ? 1 : 0,
    transform: titleAnimated ? 'translateY(0) rotateX(0deg) scale(1)' : 'translateY(100px) rotateX(90deg) scale(0.5)',
    background: 'linear-gradient(135deg, #ffffff 0%, #B79C5C 50%, #ffffff 100%)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: titleAnimated ? `wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${0.8 + (wordIndex * 0.2)}s, gradientShift 4s ease-in-out infinite` : 'none'
  });

  const subtitleStyle = {
    fontSize: '1.3rem',
    color: '#B79C5C',
    opacity: titleAnimated ? 0.9 : 0,
    animation: titleAnimated ? 'subtitleFadeUp 1s ease-out forwards 1.6s' : 'none',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  };

  const underlineStyle = {
    height: '4px',
    background: 'linear-gradient(90deg, transparent, #B79C5C, transparent)',
    margin: '1rem auto',
    borderRadius: '2px',
    boxShadow: titleAnimated ? '0 0 20px rgba(183, 156, 92, 0.5)' : 'none',
    animation: titleAnimated ? 'underlineExpand 1.5s ease-out forwards 1.8s' : 'none',
    width: '0'
  };

  const recordContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
    marginTop: '4rem',
    maxWidth: '1200px',
    margin: '4rem auto 0'
  };

  const recordItemStyle = (index, isAnimated) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    background: 'rgba(30, 30, 30, 0.8)',
    borderRadius: '20px',
    padding: '2rem 1.5rem',
    border: `1px solid ${index % 2 === 0 ? 'rgba(183, 156, 92, 0.3)' : 'rgba(52, 152, 219, 0.3)'}`,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    transform: isAnimated ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.9)',
    opacity: isAnimated ? 1 : 0,
    animation: isAnimated ? `cardFadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards ${index * 0.2}s` : 'none',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    minHeight: '280px',
    backdropFilter: 'blur(10px)',
    boxShadow: `0 15px 35px ${index % 2 === 0 ? 'rgba(183, 156, 92, 0.1)' : 'rgba(52, 152, 219, 0.1)'}, 0 5px 15px rgba(0, 0, 0, 0.3)`
  });

  const iconContainerStyle = (index) => ({
    width: '90px',
    height: '90px',
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(40, 40, 40, 0.8)',
    borderRadius: '50%',
    border: `2px solid ${index % 2 === 0 ? 'rgba(183, 156, 92, 0.5)' : 'rgba(52, 152, 219, 0.5)'}`,
    position: 'relative',
    boxShadow: `0 10px 25px ${index % 2 === 0 ? 'rgba(183, 156, 92, 0.2)' : 'rgba(52, 152, 219, 0.2)'}, 0 5px 15px rgba(0, 0, 0, 0.4)`,
    transition: 'all 0.3s ease'
  });

  const iconStyle = (index) => ({
    color: index % 2 === 0 ? '#B79C5C' : '#3498db',
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });

  const valueStyle = (index) => ({
    fontSize: '2.8rem',
    fontWeight: '900',
    marginBottom: '0.5rem',
    background: `linear-gradient(135deg, #ffffff, ${index % 2 === 0 ? '#B79C5C' : '#3498db'})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '1px',
    transition: 'all 0.3s ease'
  });

  const labelStyle = {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.9)',
    letterSpacing: '0.5px',
    lineHeight: '1.3',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  };

  // Simple background decorative elements
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
        animation: 'backgroundFloat 8s ease-in-out infinite',
        zIndex: 1
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '8%',
        width: '120px',
        height: '120px',
        background: 'rgba(52, 152, 219, 0.05)',
        borderRadius: '30%',
        animation: 'backgroundFloat 10s ease-in-out infinite reverse',
        zIndex: 1
      }} />
    </>
  );

  return (
    <section style={sectionStyle} ref={sectionRef}>
      {backgroundElements}
      
      <div style={containerStyle}>
        <div style={titleSectionStyle}>
          <div ref={headingRef}>
            <h1 style={headingStyle}>
              <span style={titleWordStyle(0)}>Our</span>
              <span style={titleWordStyle(1)}>Track</span>
              <span style={titleWordStyle(2)}>Record</span>
            </h1>
            <div style={underlineStyle}></div>
            <p style={subtitleStyle}>
              Excellence in Numbers
            </p>
          </div>
        </div>
        
        <div style={recordContainerStyle}>
          {records.map((record, index) => {
            const isAnimated = animatedItems.includes(index);
            
            return (
              <div
                key={index}
                style={recordItemStyle(index, isAnimated)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.05)';
                  e.currentTarget.style.boxShadow = `0 25px 50px ${index % 2 === 0 ? 'rgba(183, 156, 92, 0.2)' : 'rgba(52, 152, 219, 0.2)'}, 0 15px 30px rgba(0, 0, 0, 0.4)`;
                  e.currentTarget.style.borderColor = index % 2 === 0 ? 'rgba(183, 156, 92, 0.6)' : 'rgba(52, 152, 219, 0.6)';
                  
                  const icon = e.currentTarget.querySelector('.record-icon');
                  const iconElement = e.currentTarget.querySelector('.icon-svg');
                  const value = e.currentTarget.querySelector('.record-value');
                  const label = e.currentTarget.querySelector('.record-label');
                  
                  if (icon) {
                    icon.style.transform = 'scale(1.15)';
                    icon.style.borderColor = index % 2 === 0 ? 'rgba(183, 156, 92, 0.8)' : 'rgba(52, 152, 219, 0.8)';
                    icon.style.background = 'rgba(50, 50, 50, 0.9)';
                  }
                  if (iconElement) {
                    iconElement.style.transform = 'scale(1.2)';
                    iconElement.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))';
                  }
                  if (value) {
                    value.style.transform = 'scale(1.1)';
                  }
                  if (label) {
                    label.style.color = index % 2 === 0 ? '#B79C5C' : '#3498db';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = `0 15px 35px ${index % 2 === 0 ? 'rgba(183, 156, 92, 0.1)' : 'rgba(52, 152, 219, 0.1)'}, 0 5px 15px rgba(0, 0, 0, 0.3)`;
                  e.currentTarget.style.borderColor = index % 2 === 0 ? 'rgba(183, 156, 92, 0.3)' : 'rgba(52, 152, 219, 0.3)';
                  
                  const icon = e.currentTarget.querySelector('.record-icon');
                  const iconElement = e.currentTarget.querySelector('.icon-svg');
                  const value = e.currentTarget.querySelector('.record-value');
                  const label = e.currentTarget.querySelector('.record-label');
                  
                  if (icon) {
                    icon.style.transform = 'scale(1)';
                    icon.style.borderColor = index % 2 === 0 ? 'rgba(183, 156, 92, 0.5)' : 'rgba(52, 152, 219, 0.5)';
                    icon.style.background = 'rgba(40, 40, 40, 0.8)';
                  }
                  if (iconElement) {
                    iconElement.style.transform = 'scale(1)';
                    iconElement.style.filter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))';
                  }
                  if (value) {
                    value.style.transform = 'scale(1)';
                  }
                  if (label) {
                    label.style.color = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                <div className="record-icon" style={iconContainerStyle(index)}>
                  <div className="icon-svg" style={iconStyle(index)}>
                    {record.icon}
                  </div>
                </div>
                
                <div className="record-detail">
                  <h3 className="record-value" style={valueStyle(index)}>
                    <span
                      ref={el => {
                        if (el) counterRef.current[index] = el;
                      }}
                      data-target={record.value}
                    >
                      0
                    </span>
                    {record.suffix}
                  </h3>
                  <h5 className="record-label" style={labelStyle}>{record.label}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 1200px) {
          .record-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          .record-container {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: 1fr 1fr !important;
            grid-gap: 0.8rem !important;
            max-width: 250px !important;
            width: 250px !important;
            height: auto !important;
            margin: 4rem auto 0 !important;
            padding: 0 !important;
            overflow: visible !important;
          }
          
          .record-item:nth-child(1) {
            grid-area: 1 / 1 / 2 / 2 !important;
          }
          
          .record-item:nth-child(2) {
            grid-area: 1 / 2 / 2 / 3 !important;
          }
          
          .record-item:nth-child(3) {
            grid-area: 2 / 1 / 3 / 2 !important;
          }
          
          .record-item:nth-child(4) {
            grid-area: 2 / 2 / 3 / 3 !important;
          }
          
          h1 {
            font-size: 2.3rem !important;
            line-height: 1.2 !important;
          }
          
          .record-item {
            width: 115px !important;
            min-width: 115px !important;
            max-width: 115px !important;
            padding: 1rem 0.5rem !important;
            min-height: 140px !important;
            max-height: 140px !important;
            box-sizing: border-box !important;
            margin: 0 !important;
            flex: none !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: space-between !important;
          }
          
          .icon-container {
            width: 45px !important;
            height: 45px !important;
            margin-bottom: 0.6rem !important;
          }
          
          .icon-svg {
            width: 1.2rem !important;
            height: 1.2rem !important;
          }
          
          .record-value {
            font-size: 1.3rem !important;
            margin-bottom: 0.3rem !important;
          }
          
          .record-label {
            font-size: 0.6rem !important;
            line-height: 1.1 !important;
            text-align: center !important;
          }
        }
        
        @media (max-width: 480px) {
          .record-container {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: 1fr 1fr !important;
            grid-gap: 0.6rem !important;
            max-width: 220px !important;
            width: 220px !important;
            height: auto !important;
            margin: 4rem auto 0 !important;
            padding: 0 !important;
            overflow: visible !important;
          }
          
          h1 {
            font-size: 1.9rem !important;
            letter-spacing: 1px !important;
          }
          
          .record-item {
            width: 105px !important;
            min-width: 105px !important;
            max-width: 105px !important;
            padding: 0.8rem 0.4rem !important;
            min-height: 130px !important;
            max-height: 130px !important;
            border-radius: 12px !important;
          }
          
          .icon-container {
            width: 40px !important;
            height: 40px !important;
            margin-bottom: 0.5rem !important;
          }
          
          .icon-svg {
            width: 1rem !important;
            height: 1rem !important;
          }
          
          .record-value {
            font-size: 1.2rem !important;
            margin-bottom: 0.2rem !important;
          }
          
          .record-label {
            font-size: 0.55rem !important;
            line-height: 1.0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Record;