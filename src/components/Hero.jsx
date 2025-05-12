// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = ({ openPopup }) => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="slide-in-left" style={{ animationDelay: '0.2s' }}>
              <span className="primary">PAVAN</span><br />
              <span className="secondary">TECHNO</span><br />
              <span className="accent">CONSTRUCTIONS</span>
            </h1>
            <p className="slide-in-left" style={{ animationDelay: '0.4s' }}>
              Consult, Design & Execute......
            </p>
            <div className="hero-buttons slide-in-left" style={{ animationDelay: '0.6s' }}>
              <a 
                href="/assets/pavan.pdf" 
                download="BROCHURE.pdf" 
                className="btn btn-primary"
              >
                Download Brochure
              </a>
              <button 
                onClick={openPopup} 
                className="btn btn-secondary"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="call-to-action fixed-cta">
        <div className="cta-content fade-in" style={{ animationDelay: '0.8s' }}>
          <h3>Need to Reach Us?</h3>
          <button 
            onClick={openPopup} 
            className="btn btn-accent"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;