import React, { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  });

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            if (headingRef.current) {
              headingRef.current.classList.add('heading-visible');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.package || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields.',
        isError: true,
        isSubmitting: false
      });
      // Clear error message after 3 seconds
      setTimeout(() => {
        setFormStatus({ message: '', isError: false, isSubmitting: false });
      }, 3000);
      return;
    }
    setFormStatus({ message: '', isError: false, isSubmitting: true });
    try {
      const res = await fetch('http://localhost:3001/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Failed to send data');
      setFormStatus({
        message: 'Thank you! Your message has been sent successfully.',
        isError: false,
        isSubmitting: false
      });
      setFormData({ name: '', email: '', phone: '', package: '', message: '' });
      setTimeout(() => {
        setFormStatus({ message: '', isError: false, isSubmitting: false });
      }, 5000);
    } catch (err) {
      setFormStatus({
        message: 'Failed to send message. Please try again later.',
        isError: true,
        isSubmitting: false
      });
      setTimeout(() => {
        setFormStatus({ message: '', isError: false, isSubmitting: false });
      }, 5000);
    }
  };

  return (
    <>
      <section id="contact" className="contact-section" ref={sectionRef}>
        {/* Animated Background Elements */}
        <div className="animated-background">
          <div className="floating-shape circle-1"></div>
          <div className="floating-shape circle-2"></div>
          <div className="floating-shape circle-3"></div>
          <div className="floating-shape square-1"></div>
          <div className="floating-shape triangle-1"></div>
        </div>

        <div className="container">
          <div className="section-title">
            <div className="heading-container" ref={headingRef}>
              <h1 className="main-heading">GET IN TOUCH</h1>
              <div className="heading-underline"></div>
              <p className="heading-subtitle">We'd Love to Hear From You</p>
            </div>
          </div>
          
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6050645764435!2d77.5693744!3d12.9330859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15515dc1da7d%3A0xcd0ee36e6cf73082!2sPavan%20Techno%20Constructions!5e0!3m2!1sen!2sin!4v1738318615550!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pavan Techno Constructions Location"
                ></iframe>
              </div>
              
              <div className="contact-details">
                <div className="contact-detail-item" style={{ animationDelay: '0.8s' }}>
                  <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="info">
                    <h4>Our Location</h4>
                    <p>Metro pillar no 116, Building no 28, Near, Vanivilas Rd, next to Nakoda Residency, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004</p>
                  </div>
                </div>
                
                <div className="contact-detail-item" style={{ animationDelay: '1.0s' }}>
                  <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="info">
                    <h4>Call Us</h4>
                    <p>+91 9738906052</p>
                    <p>+91 8722906052</p>
                  </div>
                </div>
                
                <div className="contact-detail-item" style={{ animationDelay: '1.2s' }}>
                  <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="info">
                    <h4>Email Us</h4>
                    <p>pavantechnoconstructions.info@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Let's discuss your project requirements</p>
              </div>
              
              <div className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="package">Select Package</label>
                    <select
                      name="package"
                      id="package"
                      value={formData.package}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Choose a package</option>
                      <option value="basic">Basic Package</option>
                      <option value="premium">Premium Package</option>
                      <option value="luxury">Luxury Package</option>
                      <option value="custom">Custom Project</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Tell us about your project requirements"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <div className="form-status">
                  {formStatus.message && (
                    <div className={`status-message ${formStatus.isError ? 'error' : 'success'}`}>
                      {formStatus.message}
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={handleSubmit}
                  className="btn btn-primary" 
                  disabled={formStatus.isSubmitting}
                >
                  <span>{formStatus.isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes titleSlideUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .contact-section {
          padding: 6rem 0;
          background-color: #000000;
          color: #ffffff;
          overflow: hidden;
          position: relative;
          min-height: 100vh;
        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-shape {
          position: absolute;
          opacity: 0.1;
        }

        .circle-1 {
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, #007bff, #0056b3);
          border-radius: 50%;
          top: 10%;
          left: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #B79C5C, #8b7355);
          border-radius: 50%;
          top: 70%;
          right: 15%;
          animation: float 6s ease-in-out infinite reverse;
        }

        .circle-3 {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #007bff, #4dabf7);
          border-radius: 50%;
          bottom: 30%;
          left: 20%;
          animation: float 7s ease-in-out infinite;
        }

        .square-1 {
          width: 70px;
          height: 70px;
          background: linear-gradient(45deg, #B79C5C, #007bff);
          top: 40%;
          right: 10%;
          animation: rotate 10s linear infinite;
        }

        .triangle-1 {
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 70px solid rgba(183, 156, 92, 0.3);
          top: 20%;
          right: 30%;
          animation: float 5s ease-in-out infinite;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .heading-container {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }
        
        .section-visible .heading-container {
          animation: titleSlideUp 0.8s forwards 0.3s;
        }
        
        .main-heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          letter-spacing: 3px;
          margin-bottom: 1.5rem;
          color: #ffffff;
          text-transform: uppercase;
          position: relative;
          background: linear-gradient(135deg, #007bff, #B79C5C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .heading-underline {
          height: 4px;
          width: 0;
          background: linear-gradient(90deg, transparent, #007bff, #B79C5C, transparent);
          margin: 0 auto;
          transition: width 1.5s ease 1s;
          border-radius: 2px;
        }
        
        .heading-visible .heading-underline {
          width: 120px;
        }
        
        .heading-subtitle {
          margin-top: 1.5rem;
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: #B79C5C;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 1.5s;
          font-weight: 300;
          letter-spacing: 1px;
        }
        
        .heading-visible .heading-subtitle {
          opacity: 0.9;
          transform: translateY(0);
        }
        
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
          opacity: 0;
        }

        .section-visible .contact-container {
          animation: fadeIn 1s forwards 0.5s;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        
        .contact-map {
          height: 300px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 123, 255, 0.2);
          transform: translateY(30px);
          opacity: 0;
          border: 2px solid rgba(183, 156, 92, 0.2);
        }

        .section-visible .contact-map {
          animation: slideUp 0.8s forwards 0.6s;
        }
        
        .contact-map iframe {
          width: 100%;
          height: 100%;
          border: none;
          filter: grayscale(20%) brightness(0.9);
        }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .contact-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(183, 156, 92, 0.1));
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid rgba(183, 156, 92, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-30px);
          opacity: 0;
          backdrop-filter: blur(10px);
        }

        .section-visible .contact-detail-item {
          animation: slideRight 0.8s forwards;
        }
        
        .contact-detail-item:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 123, 255, 0.15);
          border-color: rgba(183, 156, 92, 0.4);
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.15), rgba(183, 156, 92, 0.15));
        }
        
        .contact-detail-item .icon {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.3);
          transition: all 0.3s ease;
        }

        .contact-detail-item:hover .icon {
          background: linear-gradient(135deg, #B79C5C, #8b7355);
          transform: scale(1.1) rotate(5deg);
        }
        
        .contact-detail-item .info h4 {
          color: #B79C5C;
          margin-bottom: 0.8rem;
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        
        .contact-detail-item .info p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          margin-bottom: 0.3rem;
          line-height: 1.6;
        }

        .contact-form-container {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(183, 156, 92, 0.05));
          padding: 3rem;
          border-radius: 20px;
          border: 1px solid rgba(183, 156, 92, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(20px);
          transform: translateX(30px);
          opacity: 0;
        }

        .section-visible .contact-form-container {
          animation: slideLeft 0.8s forwards 0.8s;
        }

        .form-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .form-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #007bff;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .form-header p {
          color: #B79C5C;
          font-size: 1rem;
          opacity: 0.9;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .form-group {
          position: relative;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.8rem;
          color: #B79C5C;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 1rem 1.2rem;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid rgba(183, 156, 92, 0.2);
          border-radius: 10px;
          color: #000;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          background: rgba(255, 255, 255, 1);
          border-color: #007bff;
          box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(0, 0, 0, 0.5);
        }
        
        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23007bff' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 3rem;
        }
        
        .form-status {
          min-height: 40px;
          display: flex;
          align-items: center;
        }
        
        .status-message {
          padding: 1rem 1.5rem;
          border-radius: 10px;
          font-size: 0.95rem;
          width: 100%;
          text-align: center;
          font-weight: 500;
        }
        
        .status-message.error {
          background: rgba(220, 53, 69, 0.1);
          color: #dc3545;
          border: 1px solid rgba(220, 53, 69, 0.3);
        }
        
        .status-message.success {
          background: rgba(40, 167, 69, 0.1);
          color: #28a745;
          border: 1px solid rgba(40, 167, 69, 0.3);
        }
        
        .btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1.2rem 2.5rem;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #B79C5C, #8b7355);
          transition: left 0.3s ease;
          z-index: -1;
        }
        
        .btn-primary:hover::before {
          left: 0;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 123, 255, 0.4);
        }
        
        .btn-primary:disabled {
          background: #6c757d;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .btn-primary:disabled::before {
          display: none;
        }

        /* Mobile Responsiveness */
        @media (max-width: 1200px) {
          .contact-container {
            gap: 3rem;
          }
        }
        
        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .contact-form-container {
            order: -1;
          }
          
          .contact-info,
          .contact-form-container {
            transform: translateX(0);
          }

          .section-visible .contact-info,
          .section-visible .contact-form-container {
            animation: fadeIn 1s forwards 0.3s;
          }
          
          .main-heading {
            font-size: 2.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact-section {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .contact-form-container {
            padding: 2rem;
          }
          
          .contact-detail-item {
            padding: 1.5rem;
            gap: 1rem;
          }

          .contact-detail-item .icon {
            width: 50px;
            height: 50px;
          }
          
          .main-heading {
            font-size: 2rem;
            letter-spacing: 2px;
          }

          .heading-subtitle {
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 576px) {
          .contact-section {
            padding: 3rem 0;
          }

          .contact-map {
            height: 250px;
          }
          
          .contact-detail-item {
            padding: 1.25rem;
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .contact-form-container {
            padding: 1.5rem;
          }
          
          .main-heading {
            font-size: 1.8rem;
          }

          .form-header h3 {
            font-size: 1.5rem;
          }

          .btn-primary {
            padding: 1rem 2rem;
            font-size: 1rem;
          }

          /* Disable complex animations on mobile */
          .floating-shape {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 0.5rem;
          }

          .contact-form-container {
            padding: 1rem;
          }

          .main-heading {
            font-size: 1.6rem;
            letter-spacing: 1px;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;