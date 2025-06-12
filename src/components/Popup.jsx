import React, { useEffect, useState } from 'react';

const Popup = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    document.body.classList.add('no-scroll');
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    alert('Form submitted successfully! We will contact you soon.');
    closePopup();
  };

  return (
    <>
      <div className="popup-overlay" onClick={closePopup}>
        <div className="popup-container" onClick={(e) => e.stopPropagation()}>
          <button className="close-popup" onClick={closePopup}>
            ×
          </button>
          
          <div className="popup-header">
            <div className="header-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L12 13L21 8M3 8V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V8M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Get Your Quote</h3>
            <p>Fill out the form below and we'll get back to you within 24 hours</p>
          </div>
          
          <div className="popup-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="popup-name">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  id="popup-name"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="popup-email">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  id="popup-email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="popup-phone">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  id="popup-phone"
                  className="form-control"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="popup-service">Package *</label>
                <select 
                  name="service" 
                  id="popup-service" 
                  className="form-control"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>Select a package</option>
                  <option value="Basic Package">Basic Package - RS.1600/- + GST</option>
                  <option value="Premium Package">Premium Package - RS.1800/- + GST</option>
                  <option value="Luxury Package">Luxury Package - RS.2150/- + GST</option>
                </select>
              </div>
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="popup-message">Project Details *</label>
              <textarea
                name="message"
                id="popup-message"
                rows="4"
                className="form-control"
                placeholder="Tell us about your construction project..."
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={closePopup}>
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scroll {
          overflow: hidden !important;
        }
      `}</style>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .popup-container {
          background: #ffffff;
          border-radius: 16px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          animation: slideIn 0.4s ease;
        }

        .close-popup {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 50%;
          font-size: 24px;
          font-weight: 300;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 1;
        }

        .close-popup:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .popup-header {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          padding: 40px 30px 30px;
          text-align: center;
          border-radius: 16px 16px 0 0;
        }

        .header-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: white;
        }

        .popup-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 10px 0;
          color: white;
        }

        .popup-header p {
          margin: 0;
          opacity: 0.9;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .popup-form {
          padding: 30px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 8px;
          font-size: 0.9rem;
        }

        .form-control {
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          background: #ffffff;
          color: #2d3748;
          font-family: inherit;
        }

        .form-control:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
          transform: translateY(-1px);
        }

        .form-control::placeholder {
          color: #a0aec0;
        }

        select.form-control {
          cursor: pointer;
        }

        textarea.form-control {
          resize: vertical;
          min-height: 100px;
          font-family: inherit;
        }

        .form-actions {
          display: flex;
          gap: 15px;
          justify-content: flex-end;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          min-width: 120px;
          font-family: inherit;
        }

        .btn-primary {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        .btn-secondary:hover {
          background: #5a6268;
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .popup-overlay {
            padding: 10px;
          }

          .popup-container {
            max-height: 95vh;
            border-radius: 12px;
          }

          .popup-header {
            padding: 30px 20px 25px;
            border-radius: 12px 12px 0 0;
          }

          .popup-header h3 {
            font-size: 1.5rem;
          }

          .popup-form {
            padding: 20px;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .close-popup {
            top: 15px;
            right: 15px;
            width: 35px;
            height: 35px;
            font-size: 20px;
          }

          .form-actions {
            flex-direction: column-reverse;
          }

          .btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .popup-overlay {
            align-items: flex-start;
            padding: 5px;
          }

          .popup-container {
            margin-top: 10px;
            border-radius: 8px;
          }

          .popup-header {
            padding: 25px 15px 20px;
            border-radius: 8px 8px 0 0;
          }

          .popup-header h3 {
            font-size: 1.3rem;
          }

          .popup-header p {
            font-size: 0.85rem;
          }

          .popup-form {
            padding: 15px;
          }

          .form-control {
            padding: 10px 12px;
            font-size: 0.9rem;
          }

          .header-icon {
            width: 50px;
            height: 50px;
            margin-bottom: 15px;
          }
        }

        /* Scrollbar Styles */
        .popup-container::-webkit-scrollbar {
          width: 6px;
        }

        .popup-container::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .popup-container::-webkit-scrollbar-thumb {
          background: #007bff;
          border-radius: 3px;
        }

        .popup-container::-webkit-scrollbar-thumb:hover {
          background: #0056b3;
        }
      `}</style>
    </>
  );
};

export default Popup;