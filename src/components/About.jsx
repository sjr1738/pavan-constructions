import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = ({ openPopup }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            entry.target.classList.add('section-visible');
            
            // Trigger sequential animations
            setTimeout(() => titleRef.current?.classList.add('animate'), 200);
            setTimeout(() => imageRef.current?.classList.add('animate'), 600);
            setTimeout(() => contentRef.current?.classList.add('animate'), 1000);
            setTimeout(() => {
              cardsRef.current.forEach((card, index) => {
                setTimeout(() => card?.classList.add('animate'), index * 100);
              });
            }, 1400);
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
                  src="/images/whyy.jpg" 
                  alt="Construction Excellence"
                  onError={(e) => {
                    const fallbackPaths = [
                      "/assets/whyy.jpg",
                      "./images/whyy.jpg",
                      "./assets/whyy.jpg",
                      "/public/images/whyy.jpg"
                    ];
                    
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
                        <div class="image-placeholder">
                          <div class="placeholder-icon">🏗️</div>
                          <div class="placeholder-text">Construction Excellence</div>
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