import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faInfoCircle,
  faTools,
  faTags,
  faImages,
  faEnvelope,
  faBars,
  faTimes,
  faLock
} from '@fortawesome/free-solid-svg-icons';

// Make sure the component is defined as a const
const Navbar = ({ scrolled = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [logoSrc, setLogoSrc] = useState(`${import.meta.env.BASE_URL}images/logo.png`);
  const location = useLocation();

  const logoPaths = [
    `${import.meta.env.BASE_URL}images/logo.png`,
    `${import.meta.env.BASE_URL}logo.png`,
    `${import.meta.env.BASE_URL}assets/logo.png`
  ];

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Manual logo path override for testing - uncomment and modify as needed
  // useEffect(() => {
  //   setLogoSrc('YOUR_LOGO_PATH_HERE.png');
  //   setLogoError(false);
  // }, []);

  const handleLogoError = () => {
    const currentIndex = logoPaths.indexOf(logoSrc);
    const nextIndex = currentIndex + 1;
    
    console.log(`Logo failed to load from: ${logoSrc}`);
    
    if (nextIndex < logoPaths.length) {
      console.log(`Trying next path: ${logoPaths[nextIndex]}`);
      setLogoSrc(logoPaths[nextIndex]);
    } else {
      console.log('All logo paths failed, showing fallback');
      setLogoError(true);
    }
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(248, 250, 252, 0.95) 50%, 
            rgba(241, 245, 249, 0.95) 100%);
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-bottom: 1px solid rgba(59, 130, 246, 0.15);
          background-clip: padding-box;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .navbar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, 
            rgba(59, 130, 246, 0.05) 0%, 
            rgba(37, 99, 235, 0.05) 50%, 
            rgba(29, 78, 216, 0.05) 100%);
          z-index: -1;
        }

        .navbar.scrolled {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.98) 0%, 
            rgba(248, 250, 252, 0.98) 50%, 
            rgba(241, 245, 249, 0.98) 100%);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
          position: relative;
        }

        .logo-section {
          position: relative;
          z-index: 10;
        }

        .logo-container {
          display: flex;
          align-items: center;
          text-decoration: none;
          position: relative;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.9) 0%, 
            rgba(248, 250, 252, 0.9) 100%);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 18px;
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
        }

        .logo-container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            rgba(59, 130, 246, 0.6) 0deg,
            rgba(37, 99, 235, 0.6) 120deg,
            rgba(29, 78, 216, 0.6) 240deg,
            rgba(59, 130, 246, 0.6) 360deg
          );
          animation: rotate 6s linear infinite;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .logo-container:hover::before {
          opacity: 0.2;
        }

        .logo-container::after {
          content: '';
          position: absolute;
          inset: 1px;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(248, 250, 252, 0.95) 100%);
          border-radius: 17px;
          z-index: -1;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .logo-container:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 28px rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .logo-hex {
          width: 40px;
          height: 40px;
          position: relative;
          margin-right: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-hex::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          transition: all 0.3s ease;
          border: 2px solid #3b82f6;
        }

        .logo-container:hover .logo-hex::before {
          transform: rotate(180deg);
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          border-color: #2563eb;
        }

        .logo-image {
          width: 28px;
          height: 28px;
          border-radius: 4px;
          position: relative;
          z-index: 2;
          object-fit: cover;
        }

        .logo-fallback {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 900;
          color: white;
          position: relative;
          z-index: 2;
        }

        .company-info {
          display: flex;
          flex-direction: column;
          font-family: 'Poppins', sans-serif;
        }

        .company-name {
          font-size: 1rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          letter-spacing: 0.3px;
        }

        .company-tagline {
          font-size: 0.6rem;
          color: rgba(59, 130, 246, 0.7);
          font-weight: 500;
          margin-top: 2px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(255, 255, 255, 0.6);
          padding: 0.4rem;
          border-radius: 20px;
          border: 1px solid rgba(59, 130, 246, 0.15);
          backdrop-filter: blur(15px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .nav-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }

        .nav-item a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #334155;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 0.85rem;
          padding: 0.6rem 1rem;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          z-index: 2;
          letter-spacing: 0.3px;
        }

        .nav-item.active a {
          color: white;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .nav-item.active::before {
          transform: scale(1) !important;
          opacity: 1 !important;
        }

        /* Unique hover effects for each nav item */
        .nav-item:nth-child(1)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border-radius: 12px;
          transform: scale(0) rotate(180deg);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(2)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-radius: 12px;
          transform: translateY(100%);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(3)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          border-radius: 12px;
          transform: translateX(-100%);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(4)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          border-radius: 12px;
          transform: scale(0);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(5)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          border-radius: 12px;
          transform: rotateY(90deg);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(6)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          border-radius: 12px;
          transform: translateX(100%);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        /* Hover states */
        .nav-item:nth-child(1):hover::before {
          transform: scale(1) rotate(0deg);
        }

        .nav-item:nth-child(2):hover::before {
          transform: translateY(0%);
        }

        .nav-item:nth-child(3):hover::before {
          transform: translateX(0%);
        }

        .nav-item:nth-child(4):hover::before {
          transform: scale(1);
        }

        .nav-item:nth-child(5):hover::before {
          transform: rotateY(0deg);
        }

        .nav-item:nth-child(6):hover::before {
          transform: translateX(0%);
        }

        .nav-item:hover a {
          color: white;
          transform: translateY(-2px) scale(1.02);
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .nav-item svg {
          font-size: 0.9rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .nav-item:hover svg {
          transform: scale(1.15) rotate(5deg);
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        /* Specific icon animations */
        .nav-item:nth-child(1):hover svg {
          transform: scale(1.2) rotate(-10deg);
        }

        .nav-item:nth-child(2):hover svg {
          transform: scale(1.2) rotate(360deg);
        }

        .nav-item:nth-child(3):hover svg {
          transform: scale(1.2) rotate(15deg);
        }

        .nav-item:nth-child(4):hover svg {
          transform: scale(1.2) rotate(-15deg);
        }

        .nav-item:nth-child(5):hover svg {
          transform: scale(1.2) rotate(10deg);
        }

        .nav-item:nth-child(6):hover svg {
          transform: scale(1.2) rotate(-5deg);
        }

        .hamburger {
          display: none;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          padding: 0.6rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .hamburger:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.15) 100%);
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
        }

        .hamburger svg {
          font-size: 1.3rem;
          color: #334155;
          transition: all 0.3s ease;
        }

        @media (min-width: 820px) and (max-width: 912px) {
          .container {
            padding: 0 1.5rem;
            max-width: 100%;
          }
          
          .nav-container {
            height: 85px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
          
          .logo-container {
            padding: 0.6rem 1rem;
            border-radius: 16px;
            flex-shrink: 0;
          }
          
          .logo-hex {
            width: 40px;
            height: 40px;
            margin-right: 0.8rem;
          }
          
          .logo-image,
          .logo-fallback {
            width: 28px;
            height: 28px;
          }
          
          .company-name {
            font-size: 1rem;
            font-weight: 800;
            line-height: 1.1;
          }
          
          .company-tagline {
            font-size: 0.65rem;
            margin-top: 2px;
          }
          
          .nav-links {
            padding: 0.4rem;
            gap: 0.2rem;
            border-radius: 16px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
          }
          
          .nav-item a {
            padding: 0.5rem 0.8rem;
            font-size: 0.8rem;
            font-weight: 500;
            white-space: nowrap;
          }
          
          .nav-item svg {
            font-size: 0.8rem;
          }
          
          .hamburger {
            padding: 0.6rem;
            border-radius: 12px;
            flex-shrink: 0;
          }
          
          .hamburger svg {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }

          .nav-container {
            height: 60px;
          }

          .hamburger {
            display: block;
          }

          .logo-container {
            padding: 0.4rem 0.8rem;
          }

          .company-name {
            font-size: 0.9rem;
          }

          .company-tagline {
            font-size: 0.55rem;
          }

          .logo-hex {
            width: 35px;
            height: 35px;
            margin-right: 0.6rem;
          }

          .logo-image,
          .logo-fallback {
            width: 25px;
            height: 25px;
          }

          .nav-links {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            flex-direction: column;
            padding: 2rem;
            gap: 1rem;
            background: linear-gradient(135deg, 
              rgba(255, 255, 255, 0.98) 0%, 
              rgba(248, 250, 252, 0.98) 100%);
            backdrop-filter: blur(20px);
            border: none;
            border-radius: 0;
            transform: translateY(-100vh);
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            min-height: 100vh;
            justify-content: center;
            align-items: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }

          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-item a {
            width: 250px;
            justify-content: center;
            padding: 1.1rem;
            font-size: 1rem;
            border: 1px solid rgba(59, 130, 246, 0.2);
            background: rgba(255, 255, 255, 0.8);
            margin-bottom: 0.5rem;
          }

          .nav-item:hover a {
            transform: translateY(-3px) scale(1.05);
          }
        }

        .no-scroll {
          overflow: hidden;
        }

        /* Additional professional touches */
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: currentColor;
          transition: all 0.3s ease;
          transform: translateX(-50%);
          z-index: 3;
        }

        .nav-item:hover::after {
          width: 80%;
        }

        /* Glassmorphism enhancement */
        .navbar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.03) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
        }
      `}</style>

      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="nav-container">
            <div className="logo-section">
              <Link to="/" className="logo-container">
                <div className="logo-hex">
                  {!logoError ? (
                    <img 
                      src={logoSrc}
                      alt="Pavan Techno Constructions"
                      className="logo-image"
                      onError={handleLogoError}
                      onLoad={() => console.log(`Logo loaded successfully from: ${logoSrc}`)}
                    />
                  ) : (
                    <div className="logo-fallback">PTC</div>
                  )}
                </div>
                
                <div className="company-info">
                  <div className="company-name">PAVAN TECHNO CONSTRUCTIONS</div>
                  <div className="company-tagline">Engineering Excellence</div>
                </div>
              </Link>
            </div>

            <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <div className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/" onClick={closeMenu}>
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </div>
             
              <div className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}>
                <Link to="/services" onClick={closeMenu}>
                  <FontAwesomeIcon icon={faTools} /> Services
                </Link>
              </div>
              <div className={`nav-item ${location.pathname === '/pricing' ? 'active' : ''}`}>
                <Link to="/pricing" onClick={closeMenu}>
                  <FontAwesomeIcon icon={faTags} /> Pricing
                </Link>
              </div>
              <div className={`nav-item ${location.pathname === '/gallery' ? 'active' : ''}`}>
                <Link to="/gallery" onClick={closeMenu}>
                  <FontAwesomeIcon icon={faImages} /> Gallery
                </Link>
              </div>
              <div className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link to="/contact" onClick={closeMenu}>
                  <FontAwesomeIcon icon={faEnvelope} /> Contact
                </Link>
              </div>
              <div className={`nav-item ${location.pathname === '/admin' ? 'active' : ''}`}>
                <Link to="/admin" onClick={closeMenu}>
                  <FontAwesomeIcon icon={faLock} /> Admin
                </Link>
              </div>
            </div>

            <button className="hamburger" onClick={toggleMenu}>
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

// Make sure to use default export
export default Navbar;
