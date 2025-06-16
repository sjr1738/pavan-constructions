import React, { useState, useEffect, useRef } from 'react';

// Import images
import s1Image from '/src/assets/s-1.jpg';
import artiImage from '/src/assets/arti.jpg';
import rsImage from '/src/assets/rs.jpg';
import ldImage from '/src/assets/ld.jpg';
import interiorImage from '/src/assets/interior.webp';
import cs1Image from '/src/assets/cs1.png';

const ServicesPage = ({ openPopup }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedStation, setSelectedStation] = useState(null);
  const [viewMode, setViewMode] = useState('workshop');
  const [activeSection, setActiveSection] = useState('overview');
  const sectionRef = useRef(null);

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
      id: 1,
      title: "Building Construction",
      icon: "🏗️",
      image: s1Image,
      description: "From start to end, whether it's residential or commercial project, we deliver quality construction tailored to your needs, ensuring durability and elegance.",
      features: ["Residential Projects", "Commercial Buildings", "Quality Materials", "Durable Construction"],
      // Removed specifications object
      price: "Starting from ₹1,600/sq ft",
      category: "structural"
    },
    {
      id: 2,
      title: "Architectural Services",
      icon: "📐",
      image: artiImage,
      description: "We believe in constantly researching and developing ways to make the entire construction process more efficient and quality driven.",
      features: ["Conceptual Designs", "Floor Planning", "Site Plans", "Dream Home Consultation"],
      // Removed specifications object
      price: "Starting from ₹25/sq ft",
      category: "design"
    },
    {
      id: 3,
      title: "Renovation",
      icon: "🔨",
      image: rsImage,
      description: "We undertake renovation work for all commercial, residential and factory layout. From demolishing to rebuilding with custom redesigns.",
      features: ["Commercial Renovation", "Residential Makeover", "Factory Layout", "Custom Redesigns"],
      // Removed specifications object
      price: "Starting from ₹600/sq ft",
      category: "renovation"
    },
    {
      id: 4,
      title: "Layout Development",
      icon: "📋",
      image: ldImage,
      description: "Our layout development expertise is designed to transform your project goals into reality, which is a perfect balance of form and function.",
      features: ["Project Planning", "Space Optimization", "Functional Design", "Goal-oriented Solutions"],
      // Removed specifications object
      price: "Starting from ₹35/sq ft",
      category: "planning"
    },
    {
      id: 5,
      title: "Interior Designing",
      icon: "🎨",
      image: interiorImage,
      description: "We create stunning interior designs for commercial, residential, and industrial spaces. From concept to completion, we bring your vision to life.",
      features: ["Commercial Interiors", "Residential Design", "Industrial Spaces", "Concept to Completion"],
      // Removed specifications object
      price: "Starting from ₹800/sq ft",
      category: "interiors"
    },
    {
      id: 6,
      title: "Customer Satisfaction",
      icon: "⭐",
      image: cs1Image,
      description: "Our expert architects help you with creating conceptual designs, developing floor plans and preparing site plans, which reflect your dream home expectations.",
      features: ["Expert Consultation", "Dream Home Planning", "Quality Assurance", "Client-focused Approach"],
      // Removed specifications object
      price: "Included in all services",
      category: "support"
    }
  ];

  const workshopStats = [
    { icon: "🏆", value: "60+", label: "Projects Completed", detail: "Across all service categories" },
    { icon: "📅", value: "15+", label: "Years Experience", detail: "Professional expertise" },
    { icon: "😊", value: "100%", label: "Client Satisfaction", detail: "Quality guaranteed" },
    { icon: "🔧", value: "24/7", label: "Support Available", detail: "Round-the-clock assistance" }
  ];

  return (
    <div className="workshop-page" ref={sectionRef}>
      {/* Workshop Header */}
      <div className="workshop-header">
        <div className="header-grid">
          <div className="blueprint-corner tl"></div>
          <div className="blueprint-corner tr"></div>
          <div className="blueprint-corner bl"></div>
          <div className="blueprint-corner br"></div>
          
          <div className="header-content">
            <div className="project-label">
              <span className="label-text">PROJECT:</span>
              <span className="label-value">CONSTRUCTION SERVICES</span>
            </div>
            <div className="project-label">
              <span className="label-text">COMPANY:</span>
              <span className="label-value">PAVAN TECHNO CONSTRUCTIONS</span>
            </div>
            <div className="project-label">
              <span className="label-text">STATUS:</span>
              <span className="label-value">ACTIVE OPERATIONS</span>
            </div>
            
            <h1 className={`workshop-title ${isVisible ? 'visible' : ''}`}>
              CONSTRUCTION SERVICES
            </h1>
            <p className={`workshop-subtitle ${isVisible ? 'visible' : ''}`}>
              Professional construction services delivered through specialized workstations
            </p>
            
            <div className="view-selector">
              <button 
                className={`selector-btn ${viewMode === 'workshop' ? 'active' : ''}`}
                onClick={() => setViewMode('workshop')}
              >
                <span className="btn-symbol">▦</span>
                Workshop View
              </button>
              <button 
                className={`selector-btn ${viewMode === 'catalog' ? 'active' : ''}`}
                onClick={() => setViewMode('catalog')}
              >
                <span className="btn-symbol">≡</span>
                Service Catalog
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Workshop Layout */}
      {viewMode === 'workshop' && (
        <div className="workshop-floor">
          <div className="container">
            <div className="floor-plan">
              <div className="plan-header">
                <h2>WORKSHOP FLOOR PLAN</h2>
                <div className="plan-details">
                  {/* Removed SCALE, LEVEL, and AREA details */}
                </div>
              </div>
              
              <div className="workstations-grid">
                {services.map((service, index) => (
                  <div 
                    key={service.id}
                    className={`workstation ${selectedStation === service.id ? 'active' : ''}`}
                    onClick={() => setSelectedStation(selectedStation === service.id ? null : service.id)}
                  >
                    <div className="station-frame">
                      <div className="frame-corners">
                        <span className="corner tl"></span>
                        <span className="corner tr"></span>
                        <span className="corner bl"></span>
                        <span className="corner br"></span>
                      </div>
                      
                      <div className="station-header">
                        <div className="station-id"> {service.station}</div>
                        <div className="station-code">{service.code}</div>
                      </div>
                      
                      <div className="station-image">
                        <img src={service.image} alt={service.title} />
                        <div className="image-overlay">
                          <div className="overlay-icon">{service.icon}</div>
                        </div>
                      </div>
                      
                      <div className="station-info">
                        <h3>{service.title}</h3>
                        <div className="station-status">
                          <span className="status-dot"></span>
                          {/* Removed "OPERATIONAL" text */}
                        </div>
                      </div>
                      
                      {selectedStation === service.id && (
                        <div className="station-details">
                          <div className="details-section">
                            <h4>SERVICE OVERVIEW</h4>
                            <p>{service.description}</p>
                          </div>
                          
                          {/* Removed specifications section */}
                          
                          <div className="details-section">
                            <h4>KEY FEATURES</h4>
                            <div className="features-grid">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="feature-item">
                                  <span className="feature-bullet">●</span>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="pricing-section">
                            <div className="price-info">
                              <span className="price-label">PRICING:</span>
                              <span className="price-value">{service.price}</span>
                            </div>
                            <button className="quote-btn" onClick={openPopup}>
                              REQUEST QUOTE
                              <span className="btn-arrow">→</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Catalog View */}
      {viewMode === 'catalog' && (
        <div className="service-catalog">
          <div className="container">
            <div className="catalog-header">
              <h2>SERVICE CATALOG</h2>
              <div className="catalog-tabs">
                <button 
                  className={`tab-btn ${activeSection === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveSection('overview')}
                >
                  OVERVIEW
                </button>
                <button 
                  className={`tab-btn ${activeSection === 'technical' ? 'active' : ''}`}
                  onClick={() => setActiveSection('technical')}
                >
                  TECHNICAL SPECS
                </button>
                <button 
                  className={`tab-btn ${activeSection === 'pricing' ? 'active' : ''}`}
                  onClick={() => setActiveSection('pricing')}
                >
                  PRICING
                </button>
              </div>
            </div>
            
            <div className="catalog-content">
              {services.map((service) => (
                <div key={service.id} className="catalog-item">
                  <div className="item-header">
                    <div className="item-id">
                      <span className="item-code">{service.code}</span>
                      <span className="item-category">{service.category.toUpperCase()}</span>
                    </div>
                    <h3>{service.title}</h3>
                  </div>
                  
                  <div className="item-body">
                    <div className="item-image">
                      <img src={service.image} alt={service.title} />
                      <div className="item-badge">{service.icon}</div>
                    </div>
                    
                    <div className="item-content">
                      {activeSection === 'overview' && (
                        <div className="overview-content">
                          <p>{service.description}</p>
                          <div className="features-list">
                            {service.features.map((feature, idx) => (
                              <span key={idx} className="feature-tag">{feature}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {activeSection === 'technical' && (
                        <div className="technical-content">
                          <div className="tech-specs">
                            {Object.entries(service.specifications).map(([key, value]) => (
                              <div key={key} className="tech-row">
                                <span className="tech-label">{key}</span>
                                <span className="tech-value">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {activeSection === 'pricing' && (
                        <div className="pricing-content">
                          <div className="price-display">
                            <span className="price-amount">{service.price}</span>
                          </div>
                          <button className="catalog-quote-btn" onClick={openPopup}>
                            GET DETAILED QUOTE
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Workshop Statistics */}
      <div className="workshop-stats">
        <div className="container">
          <div className="stats-header">
            <h2>WORKSHOP PERFORMANCE METRICS</h2>
            <div className="metrics-line"></div>
          </div>
          
          <div className="stats-grid">
            {workshopStats.map((stat, index) => (
              <div key={index} className="stat-panel">
                <div className="panel-frame">
                  <div className="panel-header">
                    <div className="panel-icon">{stat.icon}</div>
                    <div className="panel-id">METRIC-{String(index + 1).padStart(2, '0')}</div>
                  </div>
                  <div className="panel-value">{stat.value}</div>
                  <div className="panel-label">{stat.label}</div>
                  <div className="panel-detail">{stat.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="quality-section">
        <div className="container">
          <div className="quality-grid">
            <div className="quality-content">
              <div className="content-header">
                <h2>QUALITY ASSURANCE PROTOCOL</h2>
                {/* Removed the protocol-id div with QAP-2024 */}
              </div>
              
              <div className="assurance-items">
                <div className="assurance-item">
                  <div className="item-marker">01</div>
                  <div className="item-data">
                    <h4>15+ Years Experience</h4>
                    <p>Proven track record in delivering quality construction projects across various sectors</p>
                  </div>
                </div>
                <div className="assurance-item">
                  <div className="item-marker">02</div>
                  <div className="item-data">
                    {/* Changed from 500+ to 60+ Projects Completed */}
                    <h4>60+ Projects Completed</h4>
                    <p>Successfully delivered projects across residential, commercial, and industrial sectors</p>
                  </div>
                </div>
                <div className="assurance-item">
                  <div className="item-marker">03</div>
                  <div className="item-data">
                    <h4>Quality Materials</h4>
                    <p>We use only premium quality materials from trusted suppliers ensuring longevity</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Removed the entire certification-panel div */}
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .workshop-page {
          font-family: 'Roboto Mono', 'Courier New', monospace;
          background: #f8f9fa;
          min-height: 100vh;
          color: #2D3748;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Workshop Header */
        .workshop-header {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 80px 20px;
          position: relative;
        }

        .workshop-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(183, 156, 92, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(183, 156, 92, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .header-grid {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          background: white;
          border: 3px solid #2D3748;
          padding: 60px;
        }

        .blueprint-corner {
          position: absolute;
          width: 25px;
          height: 25px;
          border: 3px solid #B79C5C;
        }

        .blueprint-corner.tl { top: -3px; left: -3px; border-right: none; border-bottom: none; }
        .blueprint-corner.tr { top: -3px; right: -3px; border-left: none; border-bottom: none; }
        .blueprint-corner.bl { bottom: -3px; left: -3px; border-right: none; border-top: none; }
        .blueprint-corner.br { bottom: -3px; right: -3px; border-left: none; border-top: none; }

        .header-content {
          text-align: center;
        }

        .project-label {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 10px;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .label-text {
          font-weight: 700;
          color: #B79C5C;
        }

        .label-value {
          color: #2D3748;
        }

        .workshop-title {
          font-size: 4rem;
          font-weight: 900;
          letter-spacing: 4px;
          color: #2D3748;
          margin: 40px 0 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }

        .workshop-title.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .workshop-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 40px;
          letter-spacing: 1px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease 0.3s;
        }

        .workshop-subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .view-selector {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .selector-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 25px;
          border: 2px solid #2D3748;
          background: transparent;
          color: #2D3748;
          font-family: inherit;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .selector-btn.active {
          background: #2D3748;
          color: white;
        }

        .selector-btn:hover:not(.active) {
          background: #B79C5C;
          color: white;
          border-color: #B79C5C;
        }

        .btn-symbol {
          font-size: 14px;
        }

        /* Workshop Floor */
        .workshop-floor {
          padding: 80px 0;
          background: white;
        }

        .floor-plan {
          background: white;
          border: 2px solid #2D3748;
          padding: 40px;
        }

        .plan-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 2px solid #B79C5C;
        }

        .plan-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .plan-details {
          display: flex;
          gap: 30px;
          font-size: 11px;
          font-weight: 600;
          color: #666;
          letter-spacing: 1px;
        }

        .workstations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .workstation {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .workstation:hover {
          transform: scale(1.02);
        }

        .station-frame {
          position: relative;
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 25px;
          transition: all 0.3s ease;
        }

        .workstation.active .station-frame {
          background: white;
          border-color: #B79C5C;
          box-shadow: 0 15px 35px rgba(183, 156, 92, 0.2);
        }

        .frame-corners {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .corner {
          position: absolute;
          width: 15px;
          height: 15px;
          border: 2px solid #B79C5C;
        }

        .corner.tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .corner.tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .corner.bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
        .corner.br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

        .station-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .station-id {
          font-size: 14px;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .station-code {
          font-size: 11px;
          color: #B79C5C;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .station-image {
          position: relative;
          height: 180px;
          overflow: hidden;
          margin-bottom: 20px;
          border: 1px solid #2D3748;
        }

        .station-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .workstation:hover .station-image img {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(45, 55, 72, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .workstation:hover .image-overlay {
          opacity: 1;
        }

        .overlay-icon {
          font-size: 3rem;
          color: white;
        }

        .station-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .station-info h3 {
          font-size: 18px;
          font-weight: 600;
          color: #2D3748;
        }

        .station-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 600;
          color: #666;
          letter-spacing: 1px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .station-details {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 2px solid #B79C5C;
          animation: slideDown 0.5s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .details-section {
          margin-bottom: 25px;
        }

        .details-section h4 {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .details-section p {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
        }

        .spec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .spec-label {
          font-size: 10px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .spec-value {
          font-size: 12px;
          color: #2D3748;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #666;
        }

        .feature-bullet {
          color: #B79C5C;
          font-size: 14px;
        }

        .pricing-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f8f9fa;
          padding: 20px;
          border: 1px solid #2D3748;
        }

        .price-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .price-label {
          font-size: 10px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .price-value {
          font-size: 16px;
          font-weight: 700;
          color: #2D3748;
        }

        .quote-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: #2D3748;
          color: white;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .quote-btn:hover {
          background: #B79C5C;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .quote-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        /* Service Catalog */
        .service-catalog {
          padding: 80px 0;
          background: white;
        }

        .catalog-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .catalog-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .catalog-tabs {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .tab-btn {
          padding: 12px 25px;
          border: 2px solid #2D3748;
          background: transparent;
          color: #2D3748;
          font-family: inherit;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn.active {
          background: #2D3748;
          color: white;
        }

        .tab-btn:hover:not(.active) {
          background: #B79C5C;
          color: white;
          border-color: #B79C5C;
        }

        .catalog-content {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .catalog-item {
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 30px;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #B79C5C;
        }

        .item-id {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .item-code {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
        }

        .item-category {
          font-size: 10px;
          color: #666;
          letter-spacing: 1px;
        }

        .item-header h3 {
          font-size: 24px;
          font-weight: 600;
          color: #2D3748;
        }

        .item-body {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 30px;
        }

        .item-image {
          position: relative;
          height: 150px;
          border: 2px solid #2D3748;
          overflow: hidden;
        }

        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .item-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(45, 55, 72, 0.9);
          color: white;
          padding: 8px;
          border-radius: 4px;
          font-size: 20px;
        }

        .overview-content p {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
          margin-bottom: 20px;
        }

        .features-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .feature-tag {
          padding: 6px 12px;
          background: white;
          border: 1px solid #B79C5C;
          color: #B79C5C;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .tech-specs {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .tech-row {
          display: flex;
          justify-content: space-between;
          padding: 15px;
          background: white;
          border: 1px solid #2D3748;
        }

        .tech-label {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .tech-value {
          font-size: 12px;
          color: #2D3748;
        }

        .pricing-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .price-display {
          text-align: center;
          padding: 30px;
          background: white;
          border: 2px solid #B79C5C;
        }

        .price-amount {
          font-size: 24px;
          font-weight: 700;
          color: #B79C5C;
        }

        .catalog-quote-btn {
          padding: 15px 30px;
          background: #2D3748;
          color: white;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .catalog-quote-btn:hover {
          background: #B79C5C;
        }

        /* Workshop Statistics */
        .workshop-stats {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .stats-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .stats-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .metrics-line {
          width: 100px;
          height: 3px;
          background: #B79C5C;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .stat-panel {
          background: white;
          border: 2px solid #2D3748;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-panel:hover {
          border-color: #B79C5C;
          transform: translateY(-5px);
        }

        .panel-frame {
          position: relative;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .panel-icon {
          font-size: 2rem;
        }

        .panel-id {
          font-size: 10px;
          color: #B79C5C;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .panel-value {
          font-size: 3rem;
          font-weight: 800;
          color: #B79C5C;
          margin-bottom: 10px;
        }

        .panel-label {
          font-size: 14px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 5px;
        }

        .panel-detail {
          font-size: 11px;
          color: #666;
          letter-spacing: 1px;
        }

        /* Quality Assurance */
        .quality-section {
          padding: 80px 0;
          background: white;
        }

        .quality-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 2px solid #B79C5C;
        }

        .content-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .protocol-id {
          font-size: 12px;
          color: #B79C5C;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .assurance-items {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .assurance-item {
          display: flex;
          gap: 20px;
          padding: 25px;
          background: #f8f9fa;
          border: 1px solid #2D3748;
        }

        .item-marker {
          width: 40px;
          height: 40px;
          background: #2D3748;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
        }

        .item-data h4 {
          font-size: 16px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 10px;
        }

        .item-data p {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
        }

        .certification-panel {
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 30px;
          height: fit-content;
        }

        .cert-header {
          margin-bottom: 30px;
          text-align: center;
        }

        .cert-header h3 {
          font-size: 16px;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 1px;
        }

        .cert-items {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .cert-badge {
          width: 40px;
          height: 40px;
          background: #B79C5C;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .cert-item span {
          font-size: 12px;
          color: #2D3748;
          font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .workshop-title {
            font-size: 2.5rem;
            letter-spacing: 2px;
          }
          
          .workstations-grid {
            grid-template-columns: 1fr;
          }
          
          .item-body {
            grid-template-columns: 1fr;
          }
          
          .quality-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .spec-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .workshop-title {
            font-size: 2rem;
          }
          
          .view-selector {
            flex-direction: column;
            align-items: center;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .plan-details {
            flex-direction: column;
            gap: 10px;
          }
          
          .header-grid {
            padding: 40px 20px;
          }
        }
          /* Responsive Design */
        @media (max-width: 768px) {
          .workshop-title {
            font-size: 2.5rem;
            letter-spacing: 2px;
          }
          
          .workstations-grid {
            grid-template-columns: 1fr;
          }
          
          .item-body {
            grid-template-columns: 1fr;
          }
          
          .quality-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .spec-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .workshop-title {
            font-size: 1.6rem;
            letter-spacing: 0.5px;
          }
          
          .view-selector {
            flex-direction: column;
            align-items: center;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .plan-details {
            flex-direction: column;
            gap: 10px;
          }
          
          .header-grid {
            padding: 40px 20px;
          }
        }

        @media (max-width: 390px) {
          .workshop-title {
            font-size: 1.4rem;
            letter-spacing: 0px;
            line-height: 1.2;
          }
          
          .header-grid {
            padding: 35px 15px;
          }
        }

        @media (max-width: 375px) {
          .workshop-title {
            font-size: 1.25rem;
            letter-spacing: 0px;
            line-height: 1.1;
            word-break: break-word;
            hyphens: auto;
          }
          
          .header-grid {
            padding: 30px 10px;
          }
          
          .project-label {
            flex-direction: column;
            gap: 5px;
            font-size: 10px;
          }
          
          .selector-btn {
            padding: 12px 15px;
            font-size: 10px;
          }
        }

        @media (max-width: 360px) {
          .workshop-title {
            font-size: 1.1rem;
            letter-spacing: 0px;
            line-height: 1.1;
          }
          
          .header-grid {
            padding: 25px 10px;
          }
        }

        @media (max-width: 320px) {
          .workshop-title {
            font-size: 1.3rem;
            letter-spacing: 0px;
            word-break: break-word;
          }
          
          .header-grid {
            padding: 25px 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
