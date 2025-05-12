import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <div className="footer-logo">
                <img src="/images/logo.png" alt="Pavan Techno Constructions" />
              </div>
              <p>
                We at Pavan Techno Constructions prioritize a cost-effective construction process with high quality outcomes. With over 9 years of experience, we've built a foundation of trust, ethics, and shared success.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Metro pillar no 116, Building no 28, Near, Vanivilas Rd, next to Nakoda Residency, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <p>91+9738906052<br />91+8722906052</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>pavantechnoconstructions.info@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {currentYear} All Rights Reserved By <a href="https://gconnectsolutions.com/" target="_blank" rel="noopener noreferrer">G Connect Solutions</a></p>
          <div className="footer-policy">
            <a href="Privacy.html">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;