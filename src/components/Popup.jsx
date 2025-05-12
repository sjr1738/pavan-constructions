import React, { useEffect } from 'react';
import './Popup.css';

const Popup = ({ closePopup }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully! We will contact you soon.');
    closePopup();
  };

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-popup" onClick={closePopup}>
          <i className="fas fa-times"></i>
        </button>
        <div className="popup-header">
          <h3>Enter Your Details</h3>
          <p>We'll get back to you as soon as possible</p>
        </div>
        <form className="popup-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="popup-name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="popup-email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="tel"
                name="number"
                id="popup-number"
                className="form-control"
                placeholder="Phone number"
                required
              />
            </div>
            <div className="form-group">
              <select name="service" id="popup-service" className="form-control" required>
                <option value="" disabled selected>Select a package</option>
                <option value="Basic pack">Basic</option>
                <option value="Classic">Classic</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="popup-message">Write your message...</label>
            <textarea
              name="message"
              id="popup-message"
              rows="5"
              className="form-control"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="form-group text-center">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;