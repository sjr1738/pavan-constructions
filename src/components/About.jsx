import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import { Link } from 'react-router-dom';

// Import client logo images
import shahiLogo from '../assets/Blog-Covers-Press-Release.png';
import gokaldasLogo from '../assets/1630570806167.jpeg';
import mesLogo from '../assets/9nz0z6Ct4l23c27NzViK.png';
import arkLogo from '../assets/24745175.jpg';
import taapasiLogo from '../assets/download.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  const clientLogosRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);

  const openPopup = () => {
    // Popup functionality to be implemented
    console.log('Opening popup...');
  };

  // Client logos data
  const clientLogos = [
    { 
      name: "SHAHI EXPORTS PVT LTD", 
      image: shahiLogo,
      fallbackPaths: [
        "/assets/Blog-Covers-Press-Release.png",
        "../assets/Blog-Covers-Press-Release.png",
        "./assets/Blog-Covers-Press-Release.png",
        "/src/assets/Blog-Covers-Press-Release.png"
      ]
    },
    { 
      name: "GOKALDAS EXPORTS LTD", 
      image: gokaldasLogo,
      fallbackPaths: [
        "/assets/1630570806167.jpeg",
        "../assets/1630570806167.jpeg",
        "./assets/1630570806167.jpeg",
        "/src/assets/1630570806167.jpeg"
      ]
    },
    { 
      name: "MES", 
      image: mesLogo,
      fallbackPaths: [
        "/assets/9nz0z6Ct4l23c27NzViK.png",
        "../assets/9nz0z6Ct4l23c27NzViK.png",
        "./assets/9nz0z6Ct4l23c27NzViK.png",
        "/src/assets/9nz0z6Ct4l23c27NzViK.png"
      ]
    },
    { 
      name: "ARK BUILDERS", 
      image: arkLogo,
      fallbackPaths: [
        "/assets/24745175.jpg",
        "../assets/24745175.jpg",
        "./assets/24745175.jpg",
        "/src/assets/24745175.jpg"
      ]
    },
    { 
      name: "TAAPASI PROJECTS", 
      image: taapasiLogo,
      fallbackPaths: [
        "/assets/download.png",
        "../assets/download.png",
        "./assets/download.png",
        "/src/assets/download.png"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            entry.target.classList.add('section-visible');
            
            // Trigger sequential animations
            setTimeout(() => clientLogosRef.current?.classList.add('animate'), 100);
            setTimeout(() => titleRef.current?.classList.add('animate'), 400);
            setTimeout(() => imageRef.current?.classList.add('animate'), 800);
            setTimeout(() => contentRef.current?.classList.add('animate'), 1200);
            setTimeout(() => {
              cardsRef.current.forEach((card, index) => {
                setTimeout(() => card?.classList.add('animate'), index * 100);
              });
            }, 1600);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Advanced mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Advanced card interactions
  const handleCardHover = (index, isEntering) => {
    setActiveCard(isEntering ? index : null);
    const card = cardsRef.current[index];
    if (card) {
      if (isEntering) {
        card.style.transform = 'translateY(-20px) scale(1.05) rotateX(5deg) rotateY(5deg)';
        card.style.zIndex = '100';
      } else {
        card.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
        card.style.zIndex = '10';
      }
    }
  };

  const features = [
    { icon: "🎯", title: "Modern Design", desc: "Contemporary architectural solutions", color: "#FF6B6B" },
    { icon: "⚡", title: "Fast Construction", desc: "On-time project delivery", color: "#4ECDC4" },
    { icon: "💎", title: "Premium Quality", desc: "Best materials & craftsmanship", color: "#45B7D1" },
    { icon: "🏛️", title: "Innovative Designs", desc: "Creative & functional spaces", color: "#96CEB4" },
    { icon: "👷", title: "Expert Team", desc: "15+ years of experience", color: "#FFEAA7" },
    { icon: "🔧", title: "Skilled Workers", desc: "Certified professionals", color: "#DDA0DD" },
    { icon: "✅", title: "Quality Assurance", desc: "Premium standards", color: "#98D8C8" },
    { icon: "🔄", title: "Complete Service", desc: "End-to-end solutions", color: "#F7DC6F" }
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      {/* Dynamic Background with Morphing Shapes */}
      <div className="dynamic-background">
        <div 
          className="morph-shape shape-1"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 20}px) rotate(${mousePosition.x * 360}deg)`
          }}
        ></div>
        <div 
          className="morph-shape shape-2"
          style={{
            transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * 30}px) rotate(${mousePosition.y * -360}deg)`
          }}
        ></div>
        <div 
          className="morph-shape shape-3"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * -25}px) rotate(${(mousePosition.x + mousePosition.y) * 180}deg)`
          }}
        ></div>
      </div>

      {/* Floating Particles System */}
      <div className="particles-system">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* PTC CLIENT LOGOS Section */}
      <div className="client-logos-section" ref={clientLogosRef}>
        <div className="container">
          <div className="client-logos-header">
            <h2 className="client-logos-title">PTC CLIENT LOGOS</h2>
            <div className="client-logos-subtitle">Trusted by Industry Leaders</div>
          </div>
          
          <div className="client-logos-grid">
            {clientLogos.map((client, index) => (
              <div key={index} className="client-logo-item">
                <div className="client-logo-container">
                  <img 
                    src={client.image} 
                    alt={client.name}
                    className="client-logo-image"
                    onError={(e) => {
                      const fallbackPaths = client.fallbackPaths;
                      
                      let attempted = false;
                      for (const path of fallbackPaths) {
                        if (!e.target.src.includes(path.replace('./', '').replace('/public', ''))) {
                          e.target.src = path;
                          attempted = true;
                          break;
                        }
                      }
                      
                      if (!attempted) {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="logo-placeholder">
                            <div class="placeholder-text">${client.name}</div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="client-name">{client.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {/* Innovative Split Layout */}
        <div className="split-layout">
          
          {/* Left Side - Creative Title & Image */}
          <div className="left-panel">
            <div className="title-section" ref={titleRef}>
              <div className="title-decoration">
                <span className="deco-line"></span>
                <span className="deco-circle"></span>
                <span className="deco-line"></span>
              </div>
              <h2 className="section-title">
                <span className="title-word word-1">Why</span>
                <span className="title-word word-2">Choose</span>
                <span className="title-word word-3">Us</span>
              </h2>
              <div className="title-subtitle">Excellence Redefined</div>
            </div>

            <div className="image-container" ref={imageRef}>
              <div className="image-frame">
                <div className="image-overlay">
                  <div className="overlay-content">
                    <div className="overlay-icon">🏗️</div>
                    <div className="overlay-text">
                      <span className="overlay-number">500+</span>
                      <span className="overlay-label">Projects</span>
                    </div>
                  </div>
                </div>
                <img 
                  src={`${import.meta.env.BASE_URL}images/logo.png`} 
                  alt="Construction Excellence"
                  onError={(e) => {
                    const fallbackPaths = [
                      `${import.meta.env.BASE_URL}assets/whyy.jpg`,
                      `${import.meta.env.BASE_URL}images/logo.png`, // Fallback to a known working image
                      `${import.meta.env.BASE_URL}images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg` // Another working image
                    ];
                    
                    let attempted = false;
                    for (const path of fallbackPaths) {
                      if (!e.target.src.includes(path.replace(`${import.meta.env.BASE_URL}`, ''))) {
                        console.log(`Image failed to load, trying: ${path}`);
                        e.target.src = path;
                        attempted = true;
                        break;
                      }
                    }
                    
                    if (!attempted) {
                      console.log("All image paths failed, using text placeholder");
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML += `
                        <div class="image-placeholder" style="
                          background: linear-gradient(135deg, #3b82f6, #1e40af);
                          color: white;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          height: 100%;
                          font-size: 1.5rem;
                          text-align: center;
                          padding: 2rem;
                        ">
                          <div>
                            <div style="font-size: 3rem; margin-bottom: 1rem;">🏗️</div>
                            <div>Building Excellence</div>
                            <div style="margin-top: 1rem; font-size: 2rem;">500+ Projects</div>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content & Interactive Cards */}
          <div className="right-panel" ref={contentRef}>
            <div className="content-intro">
              <p className="intro-text">
                We specialize in transforming architectural dreams into stunning reality through 
                innovative design, precision engineering, and uncompromising quality standards.
              </p>
            </div>

            {/* Interactive Feature Cards */}
            <div className="feature-cards-container">
              <h3 className="cards-title">Our Excellence Pillars</h3>
              <div className="feature-cards-grid">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-card"
                    ref={el => cardsRef.current[index] = el}
                    onMouseEnter={() => handleCardHover(index, true)}
                    onMouseLeave={() => handleCardHover(index, false)}
                    style={{
                      '--card-color': feature.color,
                      '--hover-intensity': activeCard === index ? 1 : 0
                    }}
                  >
                    <div className="card-glow"></div>
                    <div className="card-content">
                      <div className="card-icon">{feature.icon}</div>
                      <div className="card-text">
                        <div className="card-title">{feature.title}</div>
                        <div className="card-desc">{feature.desc}</div>
                      </div>
                    </div>
                    <div className="card-shine"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced CTA Section */}
            <div className="cta-section">
              <button 
                className="cta-button"
                onClick={openPopup}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-8px) scale(1.05) rotateX(15deg)';
                  e.target.style.boxShadow = '0 30px 60px rgba(183, 156, 92, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                  e.target.style.boxShadow = '0 15px 35px rgba(183, 156, 92, 0.2)';
                }}
              >
                <span className="btn-background"></span>
                <span className="btn-text">
                  <span className="btn-icon">🚀</span>
                  Start Your Project
                </span>
                <span className="btn-particles">
                  {Array.from({ length: 6 }, (_, i) => (
                    <span key={i} className="btn-particle"></span>
                  ))}
                </span>
              </button>
              <div className="cta-subtitle">Free consultation & personalized quote</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
