import React, { useState, useRef, useEffect } from 'react';

const Pricing = ({ openPopup }) => {
  const [activeFeature, setActiveFeature] = useState({});
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

  const packages = [
    {
      id: "basic",
      name: "Basic Package",
      price: "RS.1600/- + GST",
      features: [
        "Design & Drawings",
        "Core Construction Materials",
        "Architecture Detailing",
        "Flooring & Wall Tiling",
        "Painting",
        "Electrical",
        "Plumbing",
        "Doors",
        "Windows",
        "Kitchen & Bathroom Fixtures",
        "Fabrications works",
        "Warranty period"
      ]
    },
    {
      id: "premium",
      name: "Premium Package",
      price: "RS.1800/- + GST",
      features: [
        "Design & Drawings",
        "Core Construction Materials",
        "Architecture Detailing",
        "Flooring & Wall Tiling",
        "Painting",
        "Electrical",
        "Plumbing",
        "Doors",
        "Windows",
        "Kitchen & Bathroom Fixtures",
        "Fabrications works",
        "Warranty period"
      ]
    },
    {
      id: "luxury",
      name: "Luxury Package",
      price: "RS.2150/- + GST",
      features: [
        "Design & Drawings",
        "Core Construction Materials",
        "Architecture Detailing",
        "Flooring & Wall Tiling",
        "Painting",
        "Electrical",
        "Plumbing",
        "Doors",
        "Windows",
        "Kitchen & Bathroom Fixtures",
        "Fabrications works",
        "Warranty period"
      ]
    }
  ];

  const toggleFeature = (pkgId, featureIndex) => {
    setActiveFeature((prev) => ({
      ...prev,
      [pkgId]: prev[pkgId] === featureIndex ? null : featureIndex,
    }));
  };

  return (
    <section id="pricing" className="pricing-section" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <div className="heading-container" ref={headingRef}>
            <h1 className="main-heading">OUR PRICING</h1>
            <div className="heading-underline"></div>
            <p className="heading-subtitle">Choose the perfect package that suits your needs and budget</p>
          </div>
        </div>
        <div className="pricing-container">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`pricing-card ${pkg.id}`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="pricing-header">
                <h3>{pkg.name}</h3>
                <div className="price">{pkg.price}</div>
              </div>
              <div className="pricing-features">
                {pkg.features.map((feature, fIndex) => (
                  <div 
                    key={fIndex} 
                    className="feature"
                  >
                    <div 
                      className="feature-name" 
                      onClick={() => toggleFeature(pkg.id, fIndex)}
                    >
                      {feature}
                      <span className="arrow">
                        <i className={
                          activeFeature[pkg.id] === fIndex 
                            ? "fas fa-chevron-up" 
                            : "fas fa-chevron-down"
                        }></i>
                      </span>
                    </div>
                    {activeFeature[pkg.id] === fIndex && (
                      <div className="feature-details">
                        <p>More details about {feature.toLowerCase()} for the {pkg.name}.</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button onClick={openPopup} className="btn btn-pricing">Select Package</button>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .pricing-section {
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
        }
        
        .heading-underline {
          height: 4px;
          width: 0;
          background: linear-gradient(90deg, transparent, #007bff, transparent);
          margin: 0 auto;
          transition: width 1.5s ease;
        }
        
        .heading-visible .heading-underline {
          width: 100px;
        }
        
        .heading-subtitle {
          margin-top: 1rem;
          font-size: 1.2rem;
          color: #007bff;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 0.5s;
        }
        
        .heading-visible .heading-subtitle {
          opacity: 0.9;
          transform: translateY(0);
        }
        
        .pricing-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .pricing-card {
          flex: 1;
          min-width: 280px;
          max-width: 350px;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          opacity: 0;
          transform: translateY(30px);
          animation: cardAppear 0.8s forwards;
        }
        
        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0, 123, 255, 0.2);
        }
        
        .pricing-card.basic {
          border-top: 4px solid #007bff;
        }
        
        .pricing-card.premium {
          border-top: 4px solid #00aaff;
        }
        
        .pricing-card.luxury {
          border-top: 4px solid #00d4ff;
        }
        
        @keyframes cardAppear {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .pricing-header {
          text-align: center;
          padding-bottom: 1.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .pricing-header h3 {
          font-size: 1.5rem;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .price {
          font-size: 1.8rem;
          font-weight: 700;
          color: #007bff;
        }
        
        .pricing-features {
          flex: 1;
          margin-bottom: 1.5rem;
        }
        
        .feature {
          margin-bottom: 0.75rem;
        }
        
        .feature-name {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          cursor: pointer;
          color: #ffffff;
          transition: color 0.3s ease;
        }
        
        .feature-name:hover {
          color: #007bff;
        }
        
        .arrow {
          font-size: 0.8rem;
          color: #007bff;
        }
        
        .feature-details {
          padding: 0.75rem;
          margin-top: 0.5rem;
          background-color: rgba(0, 123, 255, 0.1);
          border-radius: 5px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .btn-pricing {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background-color: #007bff;
          color: #ffffff;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1px;
          align-self: center;
        }
        
        .btn-pricing:hover {
          background-color: #0056b3;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
        }
        
        @media (max-width: 992px) {
          .pricing-container {
            gap: 1.5rem;
          }
          .main-heading {
            font-size: 2.2rem;
          }
        }
        
        @media (max-width: 768px) {
          .pricing-card {
            flex-basis: calc(50% - 1.5rem);
            min-width: 250px;
          }
          .main-heading {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 576px) {
          .pricing-card {
            flex-basis: 100%;
          }
          .main-heading {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;