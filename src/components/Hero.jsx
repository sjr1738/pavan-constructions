// src/components/Hero.jsx - Enhanced with Advanced Animations and Logo
import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';

const Hero = ({ openPopup }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [statsVisible, setStatsVisible] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoLoading, setVideoLoading] = useState(false);
  const [scrollTriggerActive, setScrollTriggerActive] = useState(false);
  const [hasScrollTriggered, setHasScrollTriggered] = useState(false); // New state to prevent re-triggering
  const heroRef = useRef(null);
  const particlesRef = useRef([]);
  const statsRef = useRef(null);
  const videoRef = useRef(null);
  const seeUsRef = useRef(null);
  
  // Try multiple path variations for video loading
  const videos = [
    {
      src: "52886-471089084_tiny.mp4",
      title: "Our Construction Process",
      paths: [
        "/images/52886-471089084_tiny.mp4",
        "./images/52886-471089084_tiny.mp4",
        "/assets/52886-471089084_tiny.mp4",
        "./assets/52886-471089084_tiny.mp4",
        "/videos/52886-471089084_tiny.mp4",
        "/public/images/52886-471089084_tiny.mp4"
      ]
    },
    {
      src: "42926-434300944_tiny.mp4", 
      title: "Project Showcase",
      paths: [
        "/images/42926-434300944_tiny.mp4",
        "./images/42926-434300944_tiny.mp4",
        "/assets/42926-434300944_tiny.mp4",
        "./assets/42926-434300944_tiny.mp4",
        "/videos/42926-434300944_tiny.mp4",
        "/public/images/42926-434300944_tiny.mp4"
      ]
    }
  ];

  useEffect(() => {
    // Quick initialization - no loading delays
    const initializeAnimations = () => {
      // Trigger stats animation when they come into view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setStatsVisible(true);
              animateNumbers();
            }
          });
        },
        { threshold: 0.5 }
      );

      if (statsRef.current) {
        observer.observe(statsRef.current);
      }

      return observer;
    };

    // Enhanced mouse tracking for parallax
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    // Enhanced scroll handling for hero section and video modal
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroHeight = window.innerHeight;
      
      // Check if we're scrolling past the hero section to trigger video modal
      // Only trigger if it hasn't been triggered by scroll before
      if (scrolled > heroHeight * 0.7 && 
          scrolled < heroHeight * 1.5 && 
          !videoModalOpen && 
          !hasScrollTriggered) {
        openVideoModal(false); // Trigger via scroll (not manual)
        return;
      }

      // If video modal is open and user scrolls down significantly, go to next section
      if (videoModalOpen && scrolled > heroHeight * 1.8) {
        closeVideoModal();
        setTimeout(() => {
          scrollToNext();
        }, 300);
        return;
      }

      // Parallax for background elements (only when not in video modal)
      if (!videoModalOpen) {
        const rate = scrolled * -0.3;
        const parallaxElements = document.querySelectorAll('.geometric-shape');
        parallaxElements.forEach((element, index) => {
          const speed = (index + 1) * 0.2;
          element.style.transform += ` translateY(${rate * speed}px)`;
        });
      }
    };

    // Video modal specific scroll/wheel handler
    const handleVideoModalScroll = (e) => {
      if (videoModalOpen) {
        // Prevent default scrolling behavior when video modal is open
        e.preventDefault();
        
        // If scrolling down (positive deltaY), close modal and go to next page
        if (e.deltaY > 0) {
          closeVideoModal();
          setTimeout(() => {
            scrollToNext();
          }, 300);
        }
        // If scrolling up (negative deltaY), just close modal
        else if (e.deltaY < 0) {
          closeVideoModal();
        }
      }
    };

    // Touch/swipe handler for mobile
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      if (videoModalOpen) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (videoModalOpen) {
        e.preventDefault(); // Prevent scrolling when modal is open
      }
    };

    const handleTouchEnd = (e) => {
      if (videoModalOpen) {
        const touchEndY = e.changedTouches[0].clientY;
        const touchDiff = touchStartY - touchEndY;
        
        // If swiped up (touchDiff > 0), close modal and go to next page
        if (touchDiff > 50) {
          closeVideoModal();
          setTimeout(() => {
            scrollToNext();
          }, 300);
        }
        // If swiped down (touchDiff < 0), just close modal
        else if (touchDiff < -50) {
          closeVideoModal();
        }
      }
    };

    // Advanced particle animation with performance optimization
    const animateParticles = () => {
      const time = Date.now() * 0.001;
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          const x = Math.sin(time + index * 0.7) * 30;
          const y = Math.cos(time + index * 0.5) * 20;
          const scale = 1 + Math.sin(time + index) * 0.3;
          particle.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        }
      });
      requestAnimationFrame(animateParticles);
    };

    // Number counting animation
    const animateNumbers = () => {
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach((counter, index) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target + (counter.textContent.includes('+') ? '+' : '') + 
                                 (counter.textContent.includes('%') ? '%' : '');
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '') + 
                                 (counter.textContent.includes('%') ? '%' : '');
          }
        }, 16);
      });
    };

    const observer = initializeAnimations();
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Add video modal specific event listeners
    document.addEventListener('wheel', handleVideoModalScroll, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    // Start particle animation immediately
    animateParticles();

    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('wheel', handleVideoModalScroll);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [videoModalOpen, hasScrollTriggered]); // Added hasScrollTriggered to dependencies

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about') ||
                       document.querySelector('.about-section') ||
                       document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' });
    }
  };

  // Video modal functions with enhanced loading
  const openVideoModal = (isManualTrigger = true) => {
    console.log('Opening video modal for video:', videos[currentVideoIndex].title);
    setVideoModalOpen(true);
    setVideoLoading(true);
    document.body.style.overflow = 'hidden';
    
    // If manually triggered (clicked), don't prevent future scroll triggers
    if (!isManualTrigger) {
      setHasScrollTriggered(true);
    }
    
    // Try to load video with multiple path attempts
    setTimeout(() => {
      loadVideoWithFallback(currentVideoIndex);
    }, 100);
  };

  const loadVideoWithFallback = (videoIndex) => {
    if (!videoRef.current) return;
    
    const video = videos[videoIndex];
    let currentPathIndex = 0;
    
    const tryNextPath = () => {
      if (currentPathIndex >= video.paths.length) {
        console.error('All video paths failed for:', video.title);
        setVideoLoading(false);
        return;
      }
      
      const path = video.paths[currentPathIndex];
      console.log(`Trying video path ${currentPathIndex + 1}/${video.paths.length}:`, path);
      
      videoRef.current.src = path;
      videoRef.current.load();
      
      // Set up one-time event listeners for this attempt
      const handleSuccess = () => {
        console.log('Video loaded successfully:', path);
        setVideoLoading(false);
        videoRef.current.play().catch(console.error);
        cleanup();
      };
      
      const handleError = (e) => {
        console.log('Video path failed:', path, e);
        currentPathIndex++;
        cleanup();
        setTimeout(tryNextPath, 100);
      };
      
      const cleanup = () => {
        videoRef.current?.removeEventListener('loadeddata', handleSuccess);
        videoRef.current?.removeEventListener('canplay', handleSuccess);
        videoRef.current?.removeEventListener('error', handleError);
      };
      
      videoRef.current.addEventListener('loadeddata', handleSuccess, { once: true });
      videoRef.current.addEventListener('canplay', handleSuccess, { once: true });
      videoRef.current.addEventListener('error', handleError, { once: true });
    };
    
    tryNextPath();
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setVideoLoading(false);
    setScrollTriggerActive(false);
    document.body.style.overflow = 'auto';
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const nextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      const newIndex = currentVideoIndex + 1;
      setCurrentVideoIndex(newIndex);
      setVideoLoading(true);
      setTimeout(() => {
        loadVideoWithFallback(newIndex);
      }, 100);
    }
  };

  const prevVideo = () => {
    if (currentVideoIndex > 0) {
      const newIndex = currentVideoIndex - 1;
      setCurrentVideoIndex(newIndex);
      setVideoLoading(true);
      setTimeout(() => {
        loadVideoWithFallback(newIndex);
      }, 100);
    }
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setVideoLoading(false);
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  // Simple error handler for debugging
  const handleVideoError = (e) => {
    console.error('Video error event:', e.target.error);
    // Error handling is now done in loadVideoWithFallback
  };

  const handleKeyPress = (e) => {
    if (videoModalOpen) {
      if (e.key === 'Escape') {
        closeVideoModal();
      } else if (e.key === 'ArrowLeft') {
        prevVideo();
      } else if (e.key === 'ArrowRight') {
        nextVideo();
      }
    }
  };

  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [videoModalOpen, currentVideoIndex]);

  // Character-by-character animation component
  const AnimatedWord = ({ children, className, delay = 0 }) => {
    const chars = children.split('');
    
    return (
      <span className={`animated-word ${className}`}>
        {chars.map((char, index) => (
          <span
            key={index}
            className="word-char"
            style={{
              animationDelay: `${delay + index * 0.05}s`
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  };

  // Glitch text component for special effects
  const GlitchText = ({ children, className }) => {
    return (
      <span className={`glitch-effect ${className}`} data-text={children}>
        {children}
      </span>
    );
  };

  // Particle component with enhanced animation
  const Particle = ({ index }) => (
    <div
      ref={el => particlesRef.current[index] = el}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${index * 0.2}s`,
        animationDuration: `${8 + Math.random() * 4}s`
      }}
    />
  );

  // Advanced button hover effect
  const handleButtonHover = (e, isEntering) => {
    const btn = e.currentTarget;
    if (isEntering) {
      btn.style.transform = 'translateY(-8px) scale(1.05) rotateX(10deg)';
      btn.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    } else {
      btn.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
      btn.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    }
  };

  // Enhanced stat hover effect
  const handleStatHover = (e, isEntering) => {
    const stat = e.currentTarget;
    if (isEntering) {
      stat.style.transform = 'translateY(-15px) scale(1.08) rotateY(8deg)';
      stat.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.3)';
    } else {
      stat.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
      stat.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.1)';
    }
  };

  return (
    <section className="hero" ref={heroRef}>
      {/* Enhanced Video Background with Parallax */}
      <div className="hero-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          style={{
            transform: `scale(1.1) translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
          }}
        >
          <source src="/images/2835998-uhd_3840_2160_24fps.mp4" type="video/mp4" />
          <source src="./images/2835998-uhd_3840_2160_24fps.mp4" type="video/mp4" />
        </video>
        <div 
          className="hero-overlay"
          style={{
            background: `radial-gradient(circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, 
                        rgba(59, 130, 246, 0.15) 0%, 
                        rgba(0, 0, 0, 0.6) 40%, 
                        rgba(0, 0, 0, 0.85) 100%)`
          }}
        />
      </div>

      {/* Enhanced Particles System */}
      <div className="particles-container">
        {Array.from({ length: 20 }, (_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Dynamic Geometric Shapes */}
      <div className="hero-geometry">
        <div 
          className="geometric-shape shape-1"
          style={{
            transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -30}px) rotate(${Date.now() * 0.01}deg)`
          }}
        />
        <div 
          className="geometric-shape shape-2"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * -20}px) rotate(${Date.now() * -0.008}deg)`
          }}
        />
        <div 
          className="geometric-shape shape-3"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * 30}px) rotate(${Date.now() * 0.012}deg)`
          }}
        />
      </div>

      {/* Main Content with Immediate Loading */}
      <div className="hero-content">
        {/* Logo and Title Container */}
        <div className="hero-logo-title-container">
          {/* Company Logo */}
          <div className="hero-company-logo">
            <img 
              src="/public/images/logo.png" 
              alt="Pavan Techno Constructions Logo" 
              className="hero-logo-image"
              onError={(e) => {
                // Fallback paths if main path fails
                const fallbackPaths = [
                  "/images/logo.png",
                  "./images/logo.png",
                  "/assets/logo.png",
                  "./assets/logo.png"
                ];
                
                const currentSrc = e.target.src;
                const currentIndex = fallbackPaths.findIndex(path => currentSrc.includes(path.replace('./', '')));
                
                if (currentIndex < fallbackPaths.length - 1) {
                  e.target.src = fallbackPaths[currentIndex + 1];
                } else {
                  // If all paths fail, hide the logo
                  e.target.style.display = 'none';
                }
              }}
            />
          </div>

          {/* Title and Tagline Container */}
          <div className="title-tagline-container">
            {/* Company Title with Character Animation */}
            <div className="company-title">
              <h1>
                <span className="title-line">
                  <AnimatedWord className="word-1" delay={0.1}>PAVAN</AnimatedWord>{' '}
                  <AnimatedWord className="word-2" delay={0.3}>TECHNO</AnimatedWord>{' '}
                  <AnimatedWord className="word-3" delay={0.5}>CONSTRUCTIONS</AnimatedWord>
                </span>
              </h1>
            </div>

            {/* Tagline with Typewriter Effect */}
            <div className="tagline">
              <p className="typewriter">Consult, Design & Execute</p>
            </div>
          </div>
        </div>

        {/* Enhanced Description */}
        <div className="description">
          <p>
            Transforming architectural dreams into concrete reality with cutting-edge 
            technology, innovative engineering solutions, and unwavering commitment to excellence.
          </p>
        </div>

        {/* Advanced Animated Buttons */}
        <div className="hero-buttons">
          <a
            href="/assets/pavan.pdf"
            download="BROCHURE.pdf"
            className="hero-btn primary"
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
          >
            <span>📄</span> Download Portfolio
          </a>
          <button
            onClick={openPopup}
            className="hero-btn secondary"
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
          >
            <span>⚡</span> Start Your Project
          </button>
        </div>

        {/* Enhanced Stats with Counting Animation */}
        <div className="hero-stats" ref={statsRef}>
          <div 
            className="stat"
            onMouseEnter={(e) => handleStatHover(e, true)}
            onMouseLeave={(e) => handleStatHover(e, false)}
          >
            <div className="stat-number" data-target="500">0+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div 
            className="stat"
            onMouseEnter={(e) => handleStatHover(e, true)}
            onMouseLeave={(e) => handleStatHover(e, false)}
          >
            <div className="stat-number" data-target="15">0+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div 
            className="stat"
            onMouseEnter={(e) => handleStatHover(e, true)}
            onMouseLeave={(e) => handleStatHover(e, false)}
          >
            <div className="stat-number" data-target="100">0%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* See Us Circle Button - Now inside Hero Section */}
      <button 
        ref={seeUsRef}
        className="see-us-circle" 
        onClick={() => openVideoModal(true)} // Manual trigger
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.2) rotate(10deg)';
          e.target.style.boxShadow = '0 20px 50px rgba(236, 72, 153, 0.8)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1) rotate(0deg)';
          e.target.style.boxShadow = '0 10px 30px rgba(236, 72, 153, 0.4)';
        }}
      >
        <span>See Us</span>
        <span className="play-icon">▶</span>
      </button>

      {/* Enhanced Scroll Button */}
      <button 
        className="scroll-btn" 
        onClick={scrollToNext}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateX(-50%) translateY(-15px) scale(1.15)';
          e.target.style.background = 'rgba(255, 255, 255, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateX(-50%) translateY(0) scale(1)';
          e.target.style.background = 'none';
        }}
      >
        <span>Explore More</span>
        <div className="arrow">↓</div>
      </button>

      {/* Enhanced Floating Contact */}
      <button 
        className="floating-contact" 
        onClick={openPopup}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-10px) scale(1.15) rotate(3deg)';
          e.target.style.boxShadow = '0 20px 50px rgba(59, 130, 246, 0.7)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0) scale(1) rotate(0deg)';
          e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
        }}
      >
        <span>💬</span> Get Quote
      </button>

      {/* Video Modal - Fixed video loading */}
      <div className={`video-modal-overlay ${videoModalOpen ? 'active' : ''}`}>
        <div className="video-modal-container">
          {videoLoading && (
            <div className="video-loading">
              <div className="loading-spinner"></div>
              Loading Video...
            </div>
          )}
          
          <video
            ref={videoRef}
            className="video-modal-video"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            onCanPlay={() => setVideoLoading(false)}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{ opacity: videoLoading ? 0 : 1 }}
          >
            {/* Video source will be set programmatically */}
            <p>Your browser does not support the video tag.</p>
          </video>

          <div className="video-controls">
            <button 
              className="video-nav-btn"
              onClick={prevVideo}
              disabled={currentVideoIndex === 0}
              onMouseEnter={(e) => {
                if (!e.target.disabled) {
                  e.target.style.transform = 'scale(1.2) translateX(-5px)';
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) translateX(0)';
              }}
            >
              ‹
            </button>

            <button 
              className="video-nav-btn"
              onClick={nextVideo}
              disabled={currentVideoIndex === videos.length - 1}
              onMouseEnter={(e) => {
                if (!e.target.disabled) {
                  e.target.style.transform = 'scale(1.2) translateX(5px)';
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) translateX(0)';
              }}
            >
              ›
            </button>
          </div>

          <button 
            className="video-close-btn"
            onClick={closeVideoModal}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2) rotate(90deg)';
              e.target.style.background = 'rgba(255, 100, 100, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) rotate(0deg)';
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            ×
          </button>

          <div className="video-info">
            <h3 className="video-title">{videos[currentVideoIndex].title}</h3>
            <div className="video-counter">
              {currentVideoIndex + 1} / {videos.length}
            </div>
          </div>

          <div className="scroll-progress" onClick={() => {
            closeVideoModal();
            setTimeout(() => scrollToNext(), 300);
          }}>
            <span>Scroll down or click to continue</span>
            <span className="scroll-arrow-down">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;