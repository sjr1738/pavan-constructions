import React, { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
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

  const services = [
    {
      title: "Building Construction",
      image: "/images/s-1.jpg",
      description: "From start to end, whether its residential or commercial project, we deliver quality construction tailored to your needs, ensuring durability and elegance."
    },
    {
      title: "Architectural Services",
      image: "/images/arti.jpg",
      description: "We believe in constantly researching and developing ways to make the entire construction process more efficient and quality driven."
    },
    {
      title: "Renovation",
      image: "/images/rs.jpg",
      description: "We undertake renovation work for all commercial, residential and factory layout. From demolishing to rebuilding with custom redesigns, it's time to breathe new life into your space."
    },
    {
      title: "Layout Development",
      image: "/images/ld.jpg",
      description: "Our layout development expertise is designed to transform your project goals into reality. Which is a perfect balance of form and function."
    },
    {
      title: "Interior Designing",
      image: "/images/interior.webp",
      description: "We create stunning interior designs for commercial, residential, and industrial spaces. From concept to completion, we bring your vision to life with expert craftsmanship."
    },
    {
      title: "Customer Satisfaction",
      image: "/images/cs1.png",
      description: "Our expert architects help you with creating conceptual designs, developing floor plans and preparing site plans, which reflect your dream home expectations."
    }
  ];

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2 className="animated-title">Our Services</h2>
          <p className="animated-subtitle">
            We provide a wide range of construction services, from the start to finish. We help 
            you with minor details a building needs to make it a home, may it be minor plumbing,
            electricity or interiors of your home. Everything you need to build your dream home we have it.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card fade-in" 
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;