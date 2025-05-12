import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faInfoCircle,
  faTools,
  faTags,
  faImages,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav-container">
          <a href="#home" className="logo">
            <img src="/images/logo.png" alt="Pavan Techno Constructions" />
          </a>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMenu}>
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
            <a href="#about" onClick={closeMenu}>
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </a>
            <a href="#services" onClick={closeMenu}>
              <FontAwesomeIcon icon={faTools} /> Services
            </a>
            <a href="#pricing" onClick={closeMenu}>
              <FontAwesomeIcon icon={faTags} /> Pricing
            </a>
            <a href="#gallery" onClick={closeMenu}>
              <FontAwesomeIcon icon={faImages} /> Gallery
            </a>
            <a href="#contact" onClick={closeMenu}>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <span className={menuOpen ? 'active' : ''}></span>
            <span className={menuOpen ? 'active' : ''}></span>
            <span className={menuOpen ? 'active' : ''}></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
