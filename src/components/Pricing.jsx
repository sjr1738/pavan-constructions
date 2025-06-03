import React, { useState, useRef, useEffect } from 'react';

const Pricing = ({ openPopup }) => {
  const [activeFeature, setActiveFeature] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('section-visible');
            if (headingRef.current) {
              headingRef.current.classList.add('heading-visible');
            }
          }
        });
      },
      { threshold: 0.1 } // Reduced threshold for better mobile visibility
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

  // Mock openPopup function if not provided
  const handleOpenPopup = openPopup || (() => alert('Package selected!'));

  return (
    <section id="pricing" className="pricing-section" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="animated-bg">
        <div className="floating-shape circle-1"></div>
        <div className="floating-shape circle-2"></div>
        <div className="floating-shape circle-3"></div>
        <div className="floating-shape square-1"></div>
        <div className="floating-shape square-2"></div>
        <div className="floating-shape triangle-1"></div>
      </div>

      <div className="container">
        <div className="section-title">
          <div className={`heading-container ${isVisible ? 'heading-visible' : ''}`} ref={headingRef}>
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
                      <span className={`arrow ${activeFeature[pkg.id] === fIndex ? 'rotated' : ''}`}>
                        &#8250;
                      </span>
                    </div>
                    <div className={`feature-details ${activeFeature[pkg.id] === fIndex ? 'show' : ''}`}>
                      <p>More details about {feature.toLowerCase()} for the {pkg.name}. This includes premium quality materials and professional installation.</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={handleOpenPopup} className="btn btn-pricing">Select Package</button>
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
          position: relative;
        }

        /* Animated Background */
        .animated-bg {
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
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #007bff, #00aaff);
          border-radius: 50%;
          top: 10%;
          left: 10%;
          animation: float 6s ease-in-out infinite;
        }

        .circle-2 {
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, #00aaff, #00d4ff);
          border-radius: 50%;
          top: 60%;
          right: 15%;
          animation: float 8s ease-in-out infinite reverse;
        }

        .circle-3 {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #007bff, #0056b3);
          border-radius: 50%;
          bottom: 20%;
          left: 20%;
          animation: float 7s ease-in-out infinite;
        }

        .square-1 {
          width: 70px;
          height: 70px;
          background: linear-gradient(45deg, #007bff, #00aaff);
          top: 30%;
          right: 10%;
          animation: rotate 10s linear infinite;
        }

        .square-2 {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #00d4ff, #007bff);
          bottom: 40%;
          right: 30%;
          animation: float 9s ease-in-out infinite, rotate 15s linear infinite reverse;
        }

        .triangle-1 {
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 70px solid rgba(0, 123, 255, 0.3);
          top: 80%;
          left: 70%;
          animation: float 5s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
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
          opacity: 1 !important;
          transform: translateY(0) !important;
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
          position: relative;
          z-index: 3;
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
          position: relative;
        }
        
        .feature-name {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          cursor: pointer;
          color: #ffffff;
          transition: color 0.3s ease;
          user-select: none;
        }
        
        .feature-name:hover {
          color: #007bff;
        }
        
        .arrow {
          color: #ffffff;
          font-size: 1rem;
          font-weight: bold;
          transition: transform 0.3s ease;
          transform: rotate(90deg);
          display: inline-block;
          width: 16px;
          height: 16px;
          text-align: center;
          line-height: 16px;
        }
        
        .arrow.rotated {
          transform: rotate(270deg);
        }
        
        .feature-details {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          padding: 0 0.75rem;
          background-color: rgba(0, 123, 255, 0.1);
          border-radius: 5px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }
        
        .feature-details.show {
          max-height: 200px;
          opacity: 1;
          padding: 0.75rem;
        }
        
        .feature-details p {
          margin: 0;
          line-height: 1.5;
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
          font-size: 0.9rem;
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
          .floating-shape {
            opacity: 0.05;
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
          .heading-container {
            opacity: 1;
            transform: translateY(0);
          }
          .pricing-section {
            padding: 3rem 0;
          }
        }
        
        @media (max-width: 576px) {
          .pricing-card {
            flex-basis: 100%;
            min-width: unset;
            margin: 0 10px;
          }
          .main-heading {
            font-size: 1.8rem;
          }
          .heading-subtitle {
            font-size: 1rem;
          }
          .container {
            padding: 0 15px;
          }
        }

        @media (max-width: 480px) {
          .main-heading {
            font-size: 1.6rem;
            letter-spacing: 1px;
          }
          .pricing-card {
            padding: 1.5rem;
          }
          .floating-shape {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;