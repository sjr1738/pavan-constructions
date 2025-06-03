import React, { useEffect, useRef, useState } from 'react';

const BookNowBanner = () => {
  const bannerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
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

  const keyframes = `
    @keyframes subtleGradient {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    @keyframes elegantFade {
      0%, 100% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.6;
      }
    }

    @keyframes professionalFloat {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }

    @keyframes textElegance {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }

    @keyframes subtleOverlay {
      0%, 100% {
        opacity: 0.1;
      }
      50% {
        opacity: 0.3;
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

  const bannerStyle = {
    background: `
      linear-gradient(135deg, 
        #1e3a8a 0%, 
        #2563eb 30%, 
        rgba(183, 156, 92, 0.8) 60%, 
        #1d4ed8 100%
      )
    `,
    backgroundSize: '300% 300%',
    animation: 'subtleGradient 12s ease-in-out infinite',
    padding: '1.5rem 0',
    overflow: 'hidden',
    position: 'relative',
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
  };

  // Minimal professional background elements
  const backgroundElements = (
    <>
      {/* Subtle geometric accent */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(255, 255, 255, 0.05))',
          borderRadius: '50%',
          animation: 'professionalFloat 8s ease-in-out infinite',
          zIndex: 1
        }}
      />
      
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.05))',
          borderRadius: '50%',
          animation: 'professionalFloat 10s ease-in-out infinite reverse',
          zIndex: 1
        }}
      />

      {/* Professional pattern overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 30%, rgba(183, 156, 92, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)
          `,
          animation: 'subtleOverlay 15s ease-in-out infinite',
          zIndex: 1
        }}
      />

      {/* Clean linear accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(183, 156, 92, 0.6), transparent)',
          zIndex: 2
        }}
      />
      
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent)',
          zIndex: 2
        }}
      />
    </>
  );

  const bannerContentStyle = {
    width: '100%',
    height: '80px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center'
  };

  const bannerWrapperStyle = {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    willChange: 'transform'
  };

  const bannerTextStyle = {
    display: 'inline-block',
    marginRight: '60px',
    fontSize: '2.2rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#ffffff',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    position: 'relative'
  };

  const bannerHighlightStyle = {
    color: 'rgba(183, 156, 92, 1)',
    fontWeight: '800',
    textShadow: '0 2px 8px rgba(183, 156, 92, 0.4)',
    position: 'relative'
  };

  return (
    <section style={bannerStyle}>
      {backgroundElements}
      
      <div style={bannerContentStyle}>
        <div style={bannerWrapperStyle} ref={bannerRef}>
          {Array(12).fill().map((_, i) => (
            <span key={i} style={bannerTextStyle}>
              BOOK NOW{' '}
              <span style={bannerHighlightStyle}>
                BOOK NOW
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Professional depth overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(90deg, 
              rgba(0, 0, 0, 0.05) 0%, 
              transparent 50%, 
              rgba(0, 0, 0, 0.05) 100%
            )
          `,
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      <style jsx>{`
        @media (max-width: 768px) {
          .banner-text {
            font-size: 1.8rem !important;
            margin-right: 40px !important;
            letter-spacing: 1.5px !important;
          }
          
          .banner-content {
            height: 60px !important;
          }
        }

        @media (max-width: 480px) {
          .banner-text {
            font-size: 1.4rem !important;
            margin-right: 30px !important;
            letter-spacing: 1px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BookNowBanner;