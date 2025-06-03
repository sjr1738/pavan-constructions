import React, { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector('.footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const socialLinks = [
    { icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', href: '#', label: 'Twitter' },
    { icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z', href: '#', label: 'Twitter' },
    { icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.482-1.995.699 0 1.037.524 1.037 1.155 0 .703-.449 1.753-.68 2.729-.194.819.411 1.489 1.219 1.489 1.463 0 2.589-1.541 2.589-3.767 0-1.969-1.414-3.347-3.447-3.347-2.346 0-3.725 1.759-3.725 3.575 0 .709.275 1.469.617 1.883.068.081.077.152.057.235-.061.252-.196.796-.223.907-.035.146-.116.177-.268.107-1.001-.465-1.624-1.926-1.624-3.1 0-2.598 1.884-4.986 5.432-4.986 2.851 0 5.067 2.031 5.067 4.75 0 2.836-1.789 5.117-4.272 5.117-.834 0-1.619-.435-1.887-1.009l-.513 1.958c-.185.72-.685 1.621-1.019 2.171C9.516 23.85 10.739 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z', href: '#', label: 'Pinterest' },
    { icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', href: '#', label: 'LinkedIn' },
    { icon: 'M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91-.11-.971-.21-2.462.04-3.521.226-.952 1.463-6.196 1.463-6.196s-.372-.744-.372-1.846c0-1.727.998-3.015 2.24-3.015 1.056 0 1.566.79 1.566 1.735 0 1.058-.673 2.64-1.022 4.106-.29 1.228.616 2.228 1.83 2.228 2.196 0 3.884-2.312 3.884-5.649 0-2.95-2.124-5.019-5.16-5.019-3.514 0-5.579 2.634-5.579 5.35 0 1.06.408 2.196.917 2.81.1.12.115.227.085.35-.09.377-.293 1.196-.333 1.364-.053.225-.172.271-.397.164-1.509-.7-2.453-2.9-2.453-4.66 0-3.818 2.776-7.32 8.006-7.32 4.204 0 7.472 2.996 7.472 6.99 0 4.175-2.631 7.533-6.283 7.533-1.226 0-2.38-.638-2.773-1.39l-.753 2.87c-.272 1.04-1.005 2.34-1.492 3.13C9.34 23.94 10.882 24 12.5 24c6.354 0 11.5-5.146 11.5-11.5S18.854.75 12.5.75z', href: '#', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <footer className={`footer ${isVisible ? 'visible' : ''}`}>
        {/* Animated Background Elements */}
        <div className="footer-bg-elements">
          <div className="bg-circle-1"></div>
          <div className="bg-circle-2"></div>
          <div className="bg-square-1"></div>
          <div className="bg-triangle-1"></div>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="footer-grid">
              {/* Company Info Section */}
              <div className="footer-info">
                <div className="footer-logo">
                  <div className="logo-container">
                    <h2>Pavan Techno</h2>
                    <span>Constructions</span>
                  </div>
                </div>
                <p>
                  We at Pavan Techno Constructions prioritize a cost-effective construction process with high quality outcomes. 
                  With over 9 years of experience, we've built a foundation of trust, ethics, and shared success.
                </p>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className="social-link"
                      aria-label={social.label}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  {quickLinks.map((link, index) => (
                    <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info Section */}
              <div className="footer-contact">
                <h4>Contact Us</h4>
                <div className="contact-items">
                  <div className="contact-item" style={{ animationDelay: '0.2s' }}>
                    <div className="contact-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">Address</span>
                      <p>Metro pillar no 116, Building no 28, Near, Vanivilas Rd, next to Nakoda Residency, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004</p>
                    </div>
                  </div>
                  
                  <div className="contact-item" style={{ animationDelay: '0.4s' }}>
                    <div className="contact-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">Phone</span>
                      <p>+91 9738906052<br />+91 8722906052</p>
                    </div>
                  </div>
                  
                  <div className="contact-item" style={{ animationDelay: '0.6s' }}>
                    <div className="contact-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">Email</span>
                      <p>pavantechnoconstructions.info@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <p>
                © {currentYear} All Rights Reserved By{' '}
                <a href="https://gconnectsolutions.com/" target="_blank" rel="noopener noreferrer">
                  G Connect Solutions
                </a>
              </p>
              <div className="footer-policy">
                <a href="Privacy.html">Privacy Policy</a>
                <span className="separator">|</span>
                <a href="#terms">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        .footer {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .footer-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .bg-circle-1 {
          position: absolute;
          top: 10%;
          right: 10%;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(0, 123, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .bg-circle-2 {
          position: absolute;
          bottom: 20%;
          left: 5%;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(183, 156, 92, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite reverse;
        }

        .bg-square-1 {
          position: absolute;
          top: 60%;
          right: 20%;
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, rgba(0, 123, 255, 0.05), rgba(183, 156, 92, 0.05));
          transform: rotate(45deg);
          animation: rotate 15s linear infinite;
        }

        .bg-triangle-1 {
          position: absolute;
          top: 30%;
          left: 15%;
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 70px solid rgba(183, 156, 92, 0.08);
          animation: float 10s ease-in-out infinite;
        }

        .footer-top {
          padding: 5rem 0 3rem;
          position: relative;
          z-index: 2;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 2fr;
          gap: 4rem;
          align-items: start;
        }

        .footer-info,
        .footer-links,
        .footer-contact {
          opacity: 0;
        }

        .footer.visible .footer-info {
          animation: fadeInLeft 0.8s forwards 0.2s;
        }

        .footer.visible .footer-links {
          animation: fadeInUp 0.8s forwards 0.4s;
        }

        .footer.visible .footer-contact {
          animation: fadeInRight 0.8s forwards 0.6s;
        }

        .footer-logo {
          margin-bottom: 2rem;
        }

        .logo-container h2 {
          font-size: 2rem;
          font-weight: 900;
          margin: 0;
          background: linear-gradient(135deg, #007bff, #B79C5C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 1px;
        }

        .logo-container span {
          display: block;
          font-size: 0.9rem;
          color: #B79C5C;
          font-weight: 300;
          letter-spacing: 2px;
          margin-top: 0.2rem;
        }

        .footer-info p {
          margin-bottom: 2rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(183, 156, 92, 0.2));
          color: #ffffff;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(183, 156, 92, 0.3);
          position: relative;
          overflow: hidden;
          opacity: 0;
        }

        .footer.visible .social-link {
          animation: fadeInUp 0.6s forwards;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #007bff, #B79C5C);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .social-link:hover::before {
          left: 0;
        }

        .social-link:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 15px 30px rgba(0, 123, 255, 0.3);
          border-color: #B79C5C;
        }

        .footer-links h4,
        .footer-contact h4 {
          color: #ffffff;
          margin-bottom: 2rem;
          position: relative;
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .footer-links h4::after,
        .footer-contact h4::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #007bff, #B79C5C);
          border-radius: 2px;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 1rem;
          opacity: 0;
        }

        .footer.visible .footer-links li {
          animation: fadeInLeft 0.6s forwards;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          font-size: 1rem;
          position: relative;
          padding: 0.5rem 0;
        }

        .footer-links a::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #007bff, #B79C5C);
          transition: width 0.3s ease;
        }

        .footer-links a:hover::before {
          width: 100%;
        }

        .footer-links a:hover {
          color: #B79C5C;
          transform: translateX(8px);
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          opacity: 0;
        }

        .footer.visible .contact-item {
          animation: fadeInRight 0.6s forwards;
        }

        .contact-icon {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: #ffffff;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.3);
          transition: all 0.3s ease;
        }

        .contact-item:hover .contact-icon {
          background: linear-gradient(135deg, #B79C5C, #8b7355);
          transform: scale(1.1) rotate(5deg);
        }

        .contact-text {
          flex: 1;
        }

        .contact-label {
          display: block;
          color: #B79C5C;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact-text p {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .footer-bottom {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(183, 156, 92, 0.1));
          border-top: 1px solid rgba(183, 156, 92, 0.2);
          padding: 2rem 0;
          position: relative;
          z-index: 2;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
        }

        .footer-bottom a {
          color: #B79C5C;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .footer-bottom a:hover {
          color: #007bff;
          text-decoration: underline;
        }

        .footer-policy {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .footer-policy a {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          border-bottom: 1px solid transparent;
          padding-bottom: 2px;
        }

        .footer-policy a:hover {
          border-color: #B79C5C;
          color: #B79C5C;
        }

        .separator {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.8rem;
        }

        /* Mobile Responsiveness */
        @media (max-width: 1200px) {
          .footer-grid {
            gap: 3rem;
          }
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }

          .footer-info {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .footer-top {
            padding: 4rem 0 2rem;
          }

          .container {
            padding: 0 1rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .footer-info {
            grid-column: auto;
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .contact-item {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          .bg-circle-1,
          .bg-circle-2 {
            opacity: 0.5;
          }
        }

        @media (max-width: 576px) {
          .footer-top {
            padding: 3rem 0 1.5rem;
          }

          .logo-container h2 {
            font-size: 1.6rem;
          }

          .footer-links h4,
          .footer-contact h4 {
            font-size: 1.2rem;
          }

          .social-link {
            width: 45px;
            height: 45px;
          }

          .contact-icon {
            width: 45px;
            height: 45px;
          }

          .bg-square-1,
          .bg-triangle-1 {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 0.5rem;
          }

          .footer-policy {
            flex-direction: column;
            gap: 0.5rem;
          }

          .separator {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;