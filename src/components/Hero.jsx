// src/components/Hero.jsx - Two Section Layout (Left: Enhanced Professional Background, Right: Video with Interactive Elements)
import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';

const Hero = ({ openPopup }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [statsVisible, setStatsVisible] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoLoading, setVideoLoading] = useState(false);
  const [hasScrollTriggered, setHasScrollTriggered] = useState(false);
  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);
  const heroRef = useRef(null);
  const particlesRef = useRef([]);
  const statsRef = useRef(null);
  const videoRef = useRef(null);
  const seeUsRef = useRef(null);
  const backgroundVideoRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [logoSrc, setLogoSrc] = useState("./images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg");

  // Set initial animation as complete after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialAnimationComplete(true);
    }, 3000); // 3 seconds should be enough for initial animations
    
    return () => clearTimeout(timer);
  }, []);

  // Enhanced mouse tracking for parallax - only active after initial animation
  // COMPLETELY EXCLUDE TITLE ELEMENTS FROM CURSOR EFFECTS
  const handleMouseMove = (e) => {
    if (heroRef.current && initialAnimationComplete) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
      
      // COMPLETELY DISABLE cursor effects for ALL title-related elements
      const titleElements = document.querySelectorAll(
        '.company-title, .company-title *, .animated-word, .animated-word *, ' +
        '.title-line, .title-line *, .word-char, .word-blue-1, .word-golden-1, ' +
        '.word-golden-2, .golden-blue-title, .golden-blue-title *'
      );
      
      titleElements.forEach(element => {
        if (element) {
          element.style.transform = 'none';
          element.style.transition = 'none';
          element.style.perspective = 'none';
          element.style.transformStyle = 'flat';
        }
      });
    }
  };

  // Try multiple path variations for video loading
  const videos = [
    {
      src: "52886-471089084_tiny.mp4",
      title: "Our Construction Process",
      paths: [
        `${import.meta.env.BASE_URL}images/52886-471089084_tiny.mp4`,
        `${import.meta.env.BASE_URL}assets/52886-471089084_tiny.mp4`,
        `${import.meta.env.BASE_URL}videos/52886-471089084_tiny.mp4`
      ]
    },
    {
      src: "42926-434300944_tiny.mp4", 
      title: "Project Showcase",
      paths: [
        `${import.meta.env.BASE_URL}images/42926-434300944_tiny.mp4`,
        `${import.meta.env.BASE_URL}assets/42926-434300944_tiny.mp4`,
        `${import.meta.env.BASE_URL}videos/42926-434300944_tiny.mp4`
      ]
    }
  ];

  // Background video paths for fallback
  const backgroundVideoPaths = [
    `${import.meta.env.BASE_URL}images/2835998-uhd_3840_2160_24fps.mp4`,
    `${import.meta.env.BASE_URL}assets/2835998-uhd_3840_2160_24fps.mp4`,
    `${import.meta.env.BASE_URL}videos/2835998-uhd_3840_2160_24fps.mp4`
  ];

  // Logo loading effect
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      console.log("Logo preloaded successfully:", img.src);
    };
    img.onerror = () => {
      console.log("Logo preload failed, trying alternative path");
    };
    img.src = logoSrc;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [logoSrc]);

  // PDF download with proper validation and fallback
  const handleDownloadClick = async (e) => {
    e.preventDefault();
    
    const pdfPaths = [
      `${import.meta.env.BASE_URL}assets/pavan.pdf`,
      `${import.meta.env.BASE_URL}images/pavan.pdf`,
      `${import.meta.env.BASE_URL}pavan.pdf`
    ];
    
    let currentPathIndex = 0;
    
    const tryDownload = async () => {
      if (currentPathIndex >= pdfPaths.length) {
        alert('PDF file not found on server. Please contact support or try again later.');
        createFallbackPDF();
        return;
      }
      
      const path = pdfPaths[currentPathIndex];
      console.log(`Trying PDF path ${currentPathIndex + 1}/${pdfPaths.length}:`, path);
      
      try {
        const response = await fetch(path, { 
          method: 'HEAD',
          headers: {
            'Accept': 'application/pdf'
          }
        });
        
        if (response.ok) {
          const fullResponse = await fetch(path);
          
          if (fullResponse.ok) {
            const blob = await fullResponse.blob();
            
            if (blob.type === 'application/pdf' || blob.type === '' || path.endsWith('.pdf')) {
              const url = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
              const link = document.createElement('a');
              link.href = url;
              link.download = 'PAVAN_TECHNO_CONSTRUCTIONS_BROCHURE.pdf';
              link.style.display = 'none';
              
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              
              setTimeout(() => window.URL.revokeObjectURL(url), 100);
              
              console.log('PDF downloaded successfully from:', path);
              return;
            }
          }
        }
      } catch (error) {
        console.log('Error accessing PDF at:', path, error);
      }
      
      currentPathIndex++;
      setTimeout(tryDownload, 100);
    };
    
    await tryDownload();
  };

  // Fallback function to create a sample PDF if original not found
  const createFallbackPDF = () => {
    const fallbackContent = `
PAVAN TECHNO CONSTRUCTIONS
Engineering Excellence

Consult, Design & Execute

Contact Information:
- Website: Visit our website for more details
- Services: Construction, Design, Engineering
- Experience: 15+ Years in the industry
- Projects: 500+ Completed successfully

Note: This is a temporary file. Please contact us directly for the complete brochure.
    `;
    
    const blob = new Blob([fallbackContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'PAVAN_TECHNO_CONSTRUCTIONS_INFO.txt';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => window.URL.revokeObjectURL(url), 100);
    
    console.log('Fallback file created and downloaded');
  };

  // Handle background video loading with fallback
  const loadBackgroundVideo = () => {
    if (!backgroundVideoRef.current) return;
    
    let currentPathIndex = 0;
    
    const tryNextPath = () => {
      if (currentPathIndex >= backgroundVideoPaths.length) {
        console.error('All background video paths failed');
        return;
      }
      
      const path = backgroundVideoPaths[currentPathIndex];
      console.log(`Trying background video path ${currentPathIndex + 1}/${backgroundVideoPaths.length}:`, path);
      
      backgroundVideoRef.current.src = path;
      backgroundVideoRef.current.load();
      
      const handleSuccess = () => {
        console.log('Background video loaded successfully:', path);
        backgroundVideoRef.current.play().catch(e => {
          console.warn('Background video autoplay blocked:', e);
        });
        cleanup();
      };
      
      const handleError = () => {
        console.log('Background video path failed:', path);
        currentPathIndex++;
        cleanup();
        setTimeout(tryNextPath, 100);
      };
      
      const cleanup = () => {
        if (backgroundVideoRef.current) {
          backgroundVideoRef.current.removeEventListener('loadeddata', handleSuccess);
          backgroundVideoRef.current.removeEventListener('canplay', handleSuccess);
          backgroundVideoRef.current.removeEventListener('error', handleError);
        }
      };
      
      backgroundVideoRef.current.addEventListener('loadeddata', handleSuccess, { once: true });
      backgroundVideoRef.current.addEventListener('canplay', handleSuccess, { once: true });
      backgroundVideoRef.current.addEventListener('error', handleError, { once: true });
    };
    
    tryNextPath();
  };

  // Main initialization useEffect
  useEffect(() => {
    // Initialize animations
    const initializeAnimations = () => {
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

    // Enhanced scroll handling
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroHeight = window.innerHeight;
      
      if (scrolled > heroHeight * 0.7 && 
          scrolled < heroHeight * 1.5 && 
          !videoModalOpen && 
          !hasScrollTriggered) {
        openVideoModal(false);
        return;
      }

      if (videoModalOpen && scrolled > heroHeight * 1.8) {
        closeVideoModal();
        setTimeout(() => {
          scrollToNext();
        }, 300);
        return;
      }

      if (!videoModalOpen) {
        const rate = scrolled * -0.3;
        const parallaxElements = document.querySelectorAll('.geometric-shape');
        parallaxElements.forEach((element, index) => {
          const speed = (index + 1) * 0.2;
          element.style.transform += ` translateY(${rate * speed}px)`;
        });
      }
    };

    // Video modal scroll/wheel handler
    const handleVideoModalScroll = (e) => {
      if (videoModalOpen) {
        e.preventDefault();
        
        if (e.deltaY > 0) {
          closeVideoModal();
          setTimeout(() => {
            scrollToNext();
          }, 300);
        }
        else if (e.deltaY < 0) {
          closeVideoModal();
        }
      }
    };

    // Touch handlers for mobile
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      if (videoModalOpen) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (videoModalOpen) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (videoModalOpen) {
        const touchEndY = e.changedTouches[0].clientY;
        const touchDiff = touchStartY - touchEndY;
        
        if (touchDiff > 50) {
          closeVideoModal();
          setTimeout(() => {
            scrollToNext();
          }, 300);
        }
        else if (touchDiff < -50) {
          closeVideoModal();
        }
      }
    };

    // Particle animation
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
      animationFrameRef.current = requestAnimationFrame(animateParticles);
    };

    // Number counting animation
    const animateNumbers = () => {
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
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

    // FORCE DISABLE title cursor effects every time mouse moves
    const forceDisableTitleEffects = () => {
      const titleElements = document.querySelectorAll(
        '.company-title, .company-title *, .animated-word, .animated-word *, ' +
        '.title-line, .title-line *, .word-char, .word-blue-1, .word-golden-1, ' +
        '.word-golden-2, .golden-blue-title, .golden-blue-title *'
      );
      
      titleElements.forEach(element => {
        if (element) {
          element.style.setProperty('transform', 'none', 'important');
          element.style.setProperty('transition', 'none', 'important');
          element.style.setProperty('perspective', 'none', 'important');
          element.style.setProperty('transform-style', 'flat', 'important');
        }
      });
    };

    // Initialize everything
    const observer = initializeAnimations();
    
    // Add event listeners with proper options
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('wheel', handleVideoModalScroll, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    // Start particle animation
    animateParticles();

    // Load background video after delay
    const videoTimeout = setTimeout(() => {
      loadBackgroundVideo();
    }, 500);

    // Force disable title effects periodically
    const titleProtectionInterval = setInterval(forceDisableTitleEffects, 100);

    // Cleanup function
    return () => {
      if (observer) observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('wheel', handleVideoModalScroll);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(videoTimeout);
      clearInterval(titleProtectionInterval);
    };
  }, [videoModalOpen, hasScrollTriggered, initialAnimationComplete]);

  // Keyboard event handler
  useEffect(() => {
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

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [videoModalOpen, currentVideoIndex]);

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

  // Video modal functions
  const openVideoModal = (isManualTrigger = true) => {
    console.log('Opening video modal for video:', videos[currentVideoIndex].title);
    setVideoModalOpen(true);
    setVideoLoading(true);
    document.body.style.overflow = 'hidden';
    
    if (!isManualTrigger) {
      setHasScrollTriggered(true);
    }
    
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
      
      const handleSuccess = () => {
        console.log('Video loaded successfully:', path);
        setVideoLoading(false);
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play().catch(e => {
              console.warn('Video autoplay blocked:', e);
            });
          }
        }, 100);
        cleanup();
      };
      
      const handleError = (e) => {
        console.log('Video path failed:', path, e);
        currentPathIndex++;
        cleanup();
        setTimeout(tryNextPath, 100);
      };
      
      const cleanup = () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleSuccess);
          videoRef.current.removeEventListener('canplay', handleSuccess);
          videoRef.current.removeEventListener('error', handleError);
        }
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

  const handleVideoError = (e) => {
    console.error('Video error event:', e.target?.error);
  };

  // Character-by-character animation component - COMPLETELY STATIC with no animations
  const AnimatedWord = ({ children, className }) => {
    return (
      <span className={`animated-word ${className} static-word`}>
        {children}
      </span>
    );
  };

  // Particle component
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

  // Button hover effects
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

  // Stat hover effects
  const handleStatHover = (e, isEntering) => {
    const stat = e.currentTarget;
    if (isEntering) {
      stat.style.transform = 'translateY(-15px) scale(1.08) rotateY(8deg)';
      stat.style.boxShadow = '0 25px 50px rgba(255, 215, 0, 0.3)';
    } else {
      stat.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
      stat.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.1)';
    }
  };

  // Add this useEffect to handle the sticky Get Quote button visibility
  useEffect(() => {
    const handleScroll = () => {
      const stickyBtn = document.querySelector('.sticky-quote-btn');
      if (!stickyBtn) return;
      
      // Show the button when scrolling down, hide when at the very top
      if (window.scrollY > 100) {
        stickyBtn.style.opacity = '1';
        stickyBtn.style.transform = 'translateY(0)';
      } else {
        // Only hide when at the very top of the page
        stickyBtn.style.opacity = '0.8';
        stickyBtn.style.transform = 'translateY(20px)';
      }
      
      // Hide button when near the footer
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        if (footerTop < window.innerHeight - 100) {
          stickyBtn.style.opacity = '0';
          stickyBtn.style.transform = 'translateY(50px)';
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* LEFT SECTION - Pure White Professional Background with Content */}
      <div className="hero-left-section" style={{ 
        background: '#ffffff !important',
        paddingTop: '1.5rem'
      }}>
        {/* Company Title - COMPLETELY STATIC with no animations */}
        <div className="company-title golden-blue-title static-title" style={{ marginTop: '-15px' }}>
          <h1>
            <span className="title-line">
              <span className="word-golden-1">PAVAN</span>{' '}
              <span className="word-blue-1">TECHNO</span>
            </span>
            <span className="title-line">
              <span className="word-golden-2">CONSTRUCTIONS</span>
            </span>
          </h1>
        </div>

        {/* Company Logo - Moved upward */}
        <div className="hero-company-logo" style={{ marginTop: '-10px' }}>
          <img
            src={logoSrc}
            alt="Pavan Techno Constructions Logo"
            className="hero-logo-image"
            onError={(e) => {
              // Fallback logic for logo
            }}
          />
        </div>

        {/* Professional Tagline - Moved upward */}
        <div className="tagline enhanced-tagline" style={{ marginTop: '-5px' }}>
          <p className="typewriter golden-blue-tagline">
            Consult, Design & Execute
          </p>
        </div>

        {/* Enhanced Professional Description */}
        <div className="description">
          <p>
            Transforming <strong>architectural dreams</strong> into concrete reality with <strong>cutting-edge technology</strong>, 
            innovative engineering solutions, and unwavering commitment to <strong>excellence</strong>. We deliver 
            sophisticated construction projects that stand the test of time.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION - Video Background with Interactive Elements */}
      <div className="hero-right-section">
        {/* Video Background */}
        <div className="hero-video-container">
          <video
            ref={backgroundVideoRef}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            className="hero-video"
            style={{
              transform: `scale(1.1) translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
            }}
          />
          <div 
            className="hero-overlay"
            style={{
              background: `radial-gradient(circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, 
                          rgba(255, 215, 0, 0.15) 0%, 
                          rgba(0, 0, 0, 0.6) 40%, 
                          rgba(0, 0, 0, 0.85) 100%)`
            }}
          />
        </div>

        {/* Particles System */}
        <div className="particles-container">
          {Array.from({ length: 20 }, (_, i) => (
            <Particle key={i} index={i} />
          ))}
        </div>

        {/* Geometric Shapes */}
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

        {/* Right Section Content */}
        <div className="hero-right-content">
          {/* Enhanced Buttons */}
          <div className="hero-buttons">
            <button
              onClick={handleDownloadClick}
              className="hero-btn primary"
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
            >
              <span>📄</span> Download Portfolio
            </button>
            <button
              onClick={openPopup}
              className="hero-btn secondary"
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
            >
              <span>⚡</span> Start Your Project
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="hero-stats" ref={statsRef}>
            <div 
              className="stat"
              onMouseEnter={(e) => handleStatHover(e, true)}
              onMouseLeave={(e) => handleStatHover(e, false)}
            >
              <div className="stat-number" data-target="60">0+</div>
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

        {/* Enhanced Get Quote Button */}
        <button 
          className="floating-contact sticky-quote-btn" 
          onClick={openPopup}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-10px) scale(1.15) rotate(3deg)';
            e.target.style.boxShadow = '0 20px 50px rgba(255, 215, 0, 0.7)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            e.target.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.4)';
          }}
          style={{
            position: 'fixed',
            bottom: '7rem',
            right: '2rem',
            zIndex: 1002,
            background: 'linear-gradient(135deg, #FFD700, #3b82f6)',
            padding: '0.9rem 1.6rem',
            borderRadius: '50px',
            boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)',
            border: 'none',
            color: 'white',
            fontWeight: '600',
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease'
          }}
        >
          <span>💬</span> Get Quote
        </button>

        {/* Enhanced See Us Button */}
        <button 
          ref={seeUsRef}
          className="see-us-circle" 
          onClick={() => openVideoModal(true)} 
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.2) rotate(10deg)';
            e.target.style.boxShadow = '0 20px 50px rgba(236, 72, 153, 0.8)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1) rotate(0deg)';
            e.target.style.boxShadow = '0 10px 30px rgba(236, 72, 153, 0.4)';
          }}
          style={{
            bottom: '6rem'
          }}
        >
          <span>See Us</span>
          <span className="play-icon">▶</span>
        </button>
      </div>

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

      {/* Enhanced Video Modal */}
      <div className={`video-modal-overlay${videoModalOpen ? ' active' : ''}`}>
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
            onError={handleVideoError}
            onCanPlay={() => setVideoLoading(false)}
            muted={true}
            loop={true}
            playsInline={true}
            preload="metadata"
            style={{ opacity: videoLoading ? 0 : 1 }}
          >
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
