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
      { threshold: 0.3 }
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      message: '',
      isError: false,
      isSubmitting: true
    });
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      setFormStatus({
        message: 'Thank you! Your message has been sent successfully.',
        isError: false,
        isSubmitting: false
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        package: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          message: '',
          isError: false,
          isSubmitting: false
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
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
              <div className="contact-detail-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info">
                  <h4>Our Location</h4>
                  <p>Metro pillar no 116, Building no 28, Near, Vanivilas Rd, next to Nakoda Residency, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info">
                  <h4>Call Us</h4>
                  <p>91+9738906052</p>
                  <p>91+8722906052</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info">
                  <h4>Email Us</h4>
                  <p>pavantechnoconstructions.info@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group" data-label="Name">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  aria-label="Full Name"
                />
              </div>
              <div className="form-group" data-label="Email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  aria-label="Email Address"
                />
              </div>
              <div className="form-group" data-label="Phone">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  aria-label="Phone Number"
                />
              </div>
              <div className="form-group" data-label="Package">
                <select
                  name="package"
                  id="package"
                  required
                  value={formData.package}
                  onChange={handleChange}
                  aria-label="Select Package"
                >
                  <option value="" disabled>Choose a package</option>
                  <option value="basic">Basic Package</option>
                  <option value="standard">Standard Package</option>
                  <option value="premium">Premium Package</option>
                  <option value="custom">Custom Project</option>
                </select>
              </div>
              <div className="form-group" data-label="Message">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Tell us about your project requirements"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  aria-label="Your Message"
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
                type="submit" 
                className="btn btn-primary" 
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-section {
          padding: 5rem 0;
          background-color: #000000;
          color: #ffffff;
          overflow: hidden;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .heading-container {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }
        
        .heading-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .main-heading {
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          color: #ffffff;
          text-transform: uppercase;
          position: relative;
          font-family: 'Tuffy', serif !important;
        }
        
        .heading-underline {
          height: 4px;
          width: 0;
          background: linear-gradient(90deg, transparent, #d8512c, transparent);
          margin: 0 auto;
          transition: width 1.5s ease;
        }
        
        .heading-visible .heading-underline {
          width: 100px;
        }
        
        .heading-subtitle {
          margin-top: 1rem;
          font-size: 1.2rem;
          color: #d8512c;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 0.5s;
          font-family: 'Raleway', sans-serif !important;
        }
        
        .heading-visible .heading-subtitle {
          opacity: 0.9;
          transform: translateY(0);
        }
        
        .contact-container {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .contact-info {
          flex: 1 1 500px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          transform: translateX(-30px);
          opacity: 0;
          animation: slideInRight 1s forwards 0.3s;
        }
        
        .contact-form-container {
          flex: 1 1 400px;
          transform: translateX(30px);
          opacity: 0;
          animation: slideInLeft 1s forwards 0.3s;
        }
        
        @keyframes slideInRight {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInLeft {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .contact-map {
          width: 100%;
          height: 250px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(216, 81, 44, 0.2);
        }
        
        .contact-map iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .contact-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          border-radius: 8px;
          background-color: rgba(216, 81, 44, 0.1);
          transition: all 0.3s ease;
        }
        
        .contact-detail-item:hover {
          background-color: rgba(216, 81, 44, 0.2);
          transform: translateY(-5px);
        }
        
        .contact-detail-item .icon {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(216, 81, 44, 0.2);
          color: #ffffff;
          border-radius: 50%;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        
        .contact-detail-item .info h4 {
          margin: 0 0 0.5rem;
          color: #d8512c;
          font-size: 1.1rem;
          font-family: 'Tuffy', serif !important;
        }
        
        .contact-detail-item .info p {
          margin: 0;
          color: #ffffff;
          font-size: 0.9rem;
          font-family: 'Raleway', sans-serif !important;
        }
        
        .contact-form {
          background-color: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(216, 81, 44, 0.15);
        }
        
        .form-group {
          margin-bottom: 1.8rem;
          position: relative;
        }
        
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          font-size: 1rem;
          color: #d8512c;
          font-family: 'Raleway', sans-serif !important;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .form-group::after {
          content: attr(data-label);
          position: absolute;
          top: -12px;
          left: 10px;
          padding: 0 8px;
          background-color: #000000;
          color: #000000;
          font-size: 0.85rem;
          font-weight: 700;
          z-index: 1;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: 'Raleway', sans-serif !important;
          background-color: #ffffff;
          border-radius: 4px;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 0.8rem 1rem;
          font-size: 1rem;
          background-color: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          color: #000000;
          transition: all 0.3s ease;
          font-family: 'Raleway', sans-serif !important;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          background-color: #ffffff;
          border-color: #d8512c;
          box-shadow: 0 0 0 3px rgba(216, 81, 44, 0.2);
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder,
        .form-group select::placeholder {
          color: rgba(0, 0, 0, 0.5);
        }
        
        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23000000' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
        }
        
        .form-group select option {
          background-color: #ffffff;
          color: #000000;
        }
        
        .form-status {
          min-height: 30px;
          margin-bottom: 1rem;
        }
        
        .status-message {
          padding: 0.5rem 1rem;
          border-radius: 5px;
          font-size: 0.9rem;
        }
        
        .status-message.error {
          background-color: rgba(220, 53, 69, 0.1);
          color: #ff4d4d;
          border: 1px solid rgba(220, 53, 69, 0.3);
        }
        
        .status-message.success {
          background-color: rgba(40, 167, 69, 0.1);
          color: #28a745;
          border: 1px solid rgba(40, 167, 69, 0.3);
        }
        
        .btn-primary {
          display: inline-block;
          padding: 0.8rem 2rem;
          background-color: #d8512c;
          color: #ffffff;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          width: 100%;
          font-family: 'Raleway', sans-serif !important;
        }
        
        .btn-primary:hover {
          background-color: #b73f21;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(216, 81, 44, 0.4);
        }
        
        .btn-primary:disabled {
          background-color: #6c757d;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        
        @media (max-width: 992px) {
          .contact-container {
            flex-direction: column;
          }
          
          .contact-info, .contact-form-container {
            transform: translateX(0);
            animation: fadeIn 1s forwards 0.3s;
          }
          
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
          
          .main-heading {
            font-size: 2.2rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact-details {
            gap: 1rem;
          }
          
          .contact-form {
            padding: 1.5rem;
          }
          
          .main-heading {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 576px) {
          .contact-map {
            height: 200px;
          }
          
          .contact-detail-item {
            padding: 0.8rem;
          }
          
          .contact-form {
            padding: 1rem;
          }
          
          .main-heading {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;