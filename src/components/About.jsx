import React, { useEffect, useRef } from 'react';
import './About.css';

const About = ({ openPopup }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null); // Add ref to the image element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            if (imageRef.current) {
              imageRef.current.classList.add('image-visible'); // Add this for image animation
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

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="square-box">
        <img src="/images/square.png" alt="" />
      </div>
      <div className="container">
        <div className="section-title">
          <h2 className="animated-title">Why Choose Us</h2>
        </div>
        <div className="about-container">
          <div className="about-image fade-in" style={{ animationDelay: '0.2s' }} ref={imageRef}>
            <img src="/images/whyy.jpg" alt="Construction site" />
          </div>
          <div className="about-content slide-in-right" style={{ animationDelay: '0.4s' }}>
            <p>
              We specialize in a wide range of construction projects, bringing vision to 
              life through craftsmanship and attention to every detail, from the start to finish, 
              we deliver quality construction tailored to your needs.
            </p>
            <ul className="about-list">
              <li>Modern design</li>
              <li>On time construction</li>
              <li>Affordable pricing</li>
              <li>Ingenious Architectural designs</li>
              <li>Experienced engineers</li>
              <li>Expert labour force</li>
              <li>Best quality Assurance</li>
              <li>End to end services</li>
            </ul>
            <button onClick={openPopup} className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
