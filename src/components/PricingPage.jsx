import React, { useState, useEffect, useRef } from 'react';

const PricingPage = ({ openPopup }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('residential');
  const [selectedEstimate, setSelectedEstimate] = useState(null);
  const [viewMode, setViewMode] = useState('estimates');
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

  const projectCategories = [
    { id: 'residential', label: 'RESIDENTIAL', icon: '🏠', color: '#B79C5C' },
    { id: 'commercial', label: 'COMMERCIAL', icon: '🏢', color: '#2D3748' },
    { id: 'interior', label: 'INTERIOR', icon: '🎨', color: '#B79C5C' },
    { id: 'renovation', label: 'RENOVATION', icon: '🔨', color: '#2D3748' }
  ];

  const estimationData = {
    residential: [
      {
        title: "STANDARD RESIDENTIAL",
        baseRate: "₹1,600",
        totalCost: "₹16,00,000",
        area: "1000 sq ft",
        timeline: "6-8 months",
        description: "Cost-effective residential construction with standard specifications",
        costBreakdown: {
          "Site Preparation": "8%",
          "Foundation Work": "15%",
          "Structural Framework": "25%",
          "Roofing & Waterproofing": "12%",
          "Electrical & Plumbing": "18%",
          "Finishing & Paint": "15%",
          "Fixtures & Fittings": "7%"
        },
        included: [
          "Architectural Planning",
          "Structural Design",
          "Site Supervision",
          "Quality Control",
          "Material Supply",
          "Labor Management"
        ],
        status: "STANDARD"
      },
      {
        title: "PREMIUM RESIDENTIAL",
        baseRate: "₹2,200",
        totalCost: "₹22,00,000",
        area: "1000 sq ft",
        timeline: "8-10 months",
        description: "Enhanced residential construction with premium specifications",
        costBreakdown: {
          "Site Preparation": "6%",
          "Foundation Work": "14%",
          "Structural Framework": "24%",
          "Roofing & Waterproofing": "12%",
          "Electrical & Plumbing": "20%",
          "Finishing & Paint": "18%",
          "Fixtures & Fittings": "6%"
        },
        included: [
          "3D Architectural Design",
          "Structural Engineering",
          "Project Management",
          "Quality Assurance",
          "Premium Material Supply",
          "Skilled Labor Team",
          "Interior Consultation"
        ],
        status: "RECOMMENDED"
      },
      {
        title: "LUXURY RESIDENTIAL",
        classification: "LUXURY CLASS",
        baseRate: "₹3,500",
        totalCost: "₹35,00,000",
        area: "1000 sq ft",
        timeline: "12-15 months",
        description: "High-end residential construction with luxury specifications",
        costBreakdown: {
          "Site Preparation": "5%",
          "Foundation Work": "12%",
          "Structural Framework": "22%",
          "Roofing & Waterproofing": "10%",
          "Electrical & Plumbing": "22%",
          "Finishing & Paint": "22%",
          "Fixtures & Fittings": "7%"
        },
        specifications: [
          "Steel Frame Structure",
          "Imported Premium Materials",
          "Smart Home Automation",
          "Luxury Plumbing Systems",
          "Marble & Hardwood Flooring",
          "Designer Paint & Textures",
          "24 Months Warranty"
        ],
        included: [
          "Custom Architectural Design",
          "Structural Engineering",
          "Project Management",
          "Quality Control",
          "Luxury Material Supply",
          "Expert Craftsmen",
          "Interior Design",
          "Landscape Planning"
        ],
        compliance: ["NBC 2016", "IS Codes", "Green Building", "LEED Standards"],
        status: "PREMIUM"
      }
    ],
    commercial: [
      {
        title: "STANDARD COMMERCIAL",
        code: "COM-STD-001",
        classification: "COMMERCIAL GRADE",
        baseRate: "₹1,800",
        totalCost: "₹18,00,000",
        area: "1000 sq ft",
        timeline: "8-10 months",
        description: "Standard commercial construction for offices and retail",
        costBreakdown: {
          "Site Preparation": "7%",
          "Foundation Work": "16%",
          "Structural Framework": "28%",
          "Roofing & Waterproofing": "10%",
          "Electrical & HVAC": "20%",
          "Finishing": "14%",
          "Commercial Fittings": "5%"
        },
        specifications: [
          "Commercial RCC Structure",
          "Fire-Resistant Materials",
          "Commercial Electrical Setup",
          "HVAC Ready Infrastructure",
          "Commercial Grade Flooring",
          "Weather Resistant Finishes",
          "12 Months Warranty"
        ],
        included: [
          "Commercial Planning",
          "Structural Design",
          "MEP Engineering",
          "Project Coordination",
          "Material Supply",
          "Commercial Installation"
        ],
        compliance: ["NBC 2016", "Fire Safety", "Commercial Codes"],
        status: "STANDARD"
      },
      {
        title: "PREMIUM COMMERCIAL",
        code: "COM-PREM-002",
        classification: "PREMIUM COMMERCIAL",
        baseRate: "₹2,800",
        totalCost: "₹28,00,000",
        area: "1000 sq ft",
        timeline: "10-12 months",
        description: "Modern commercial construction with advanced systems",
        costBreakdown: {
          "Site Preparation": "6%",
          "Foundation Work": "15%",
          "Structural Framework": "26%",
          "Roofing & Waterproofing": "9%",
          "Electrical & HVAC": "24%",
          "Finishing": "16%",
          "Premium Fittings": "4%"
        },
        specifications: [
          "Steel Frame Commercial",
          "Premium Fire Safety Systems",
          "Advanced Electrical & HVAC",
          "Smart Building Infrastructure",
          "Premium Commercial Flooring",
          "High-Performance Finishes",
          "18 Months Warranty"
        ],
        included: [
          "Modern Commercial Design",
          "MEP Engineering",
          "Building Automation",
          "Project Management",
          "Premium Materials",
          "Professional Installation",
          "System Integration"
        ],
        compliance: ["NBC 2016", "Fire Safety", "Green Building", "IGBC"],
        status: "RECOMMENDED"
      },
      {
        title: "LUXURY COMMERCIAL",
        code: "COM-LUX-003",
        classification: "LUXURY COMMERCIAL",
        baseRate: "₹4,200",
        totalCost: "₹42,00,000",
        area: "1000 sq ft",
        timeline: "12-18 months",
        description: "High-end commercial spaces with luxury finishes",
        costBreakdown: {
          "Site Preparation": "4%",
          "Foundation Work": "13%",
          "Structural Framework": "24%",
          "Roofing & Waterproofing": "8%",
          "Electrical & HVAC": "26%",
          "Finishing": "20%",
          "Luxury Fittings": "5%"
        },
        specifications: [
          "Premium Steel Structure",
          "Luxury Fire Safety Systems",
          "Smart Building Automation",
          "Advanced HVAC Systems",
          "Luxury Commercial Flooring",
          "Designer Finishes",
          "24 Months Warranty"
        ],
        included: [
          "Luxury Commercial Design",
          "Advanced MEP Systems",
          "Building Management Systems",
          "Project Management",
          "Luxury Materials",
          "Expert Installation",
          "Complete Integration",
          "Maintenance Package"
        ],
        compliance: ["NBC 2016", "LEED Platinum", "Green Building", "IGBC"],
        status: "PREMIUM"
      }
    ],
    interior: [
      {
        title: "BASIC INTERIOR",
        code: "INT-BAS-001",
        classification: "ESSENTIAL INTERIOR",
        baseRate: "₹800",
        totalCost: "₹8,00,000",
        area: "1000 sq ft",
        timeline: "2-3 months",
        description: "Essential interior design and execution",
        costBreakdown: {
          "Space Planning": "10%",
          "Electrical Work": "20%",
          "Furniture & Fixtures": "35%",
          "Flooring & Tiling": "15%",
          "Paint & Finishes": "12%",
          "Installation": "8%"
        },
        specifications: [
          "Basic Space Planning",
          "Standard Lighting",
          "Modular Furniture",
          "Laminate Flooring",
          "Standard Paint",
          "Basic Fixtures",
          "6 Months Warranty"
        ],
        included: [
          "Interior Planning",
          "Furniture Design",
          "Electrical Layout",
          "Material Supply",
          "Installation Service",
          "Basic Styling"
        ],
        compliance: ["Interior Standards", "Safety Codes"],
        status: "STANDARD"
      },
      {
        title: "PREMIUM INTERIOR",
        code: "INT-PREM-002",
        classification: "DESIGNER INTERIOR",
        baseRate: "₹1,500",
        totalCost: "₹15,00,000",
        area: "1000 sq ft",
        timeline: "3-4 months",
        description: "Complete interior design transformation",
        costBreakdown: {
          "Design & Planning": "12%",
          "Electrical & Lighting": "22%",
          "Custom Furniture": "30%",
          "Premium Flooring": "18%",
          "Designer Finishes": "15%",
          "Installation": "3%"
        },
        specifications: [
          "Professional Space Planning",
          "Designer Lighting Solutions",
          "Custom Furniture Design",
          "Premium Flooring Options",
          "Designer Paint & Textures",
          "Premium Fixtures",
          "12 Months Warranty"
        ],
        included: [
          "3D Interior Design",
          "Custom Furniture",
          "Lighting Design",
          "Premium Materials",
          "Professional Installation",
          "Interior Styling",
          "Project Management"
        ],
        compliance: ["Interior Standards", "Design Codes", "Safety Standards"],
        status: "RECOMMENDED"
      },
      {
        title: "LUXURY INTERIOR",
        code: "INT-LUX-003",
        classification: "LUXURY INTERIOR",
        baseRate: "₹2,500",
        totalCost: "₹25,00,000",
        area: "1000 sq ft",
        timeline: "4-6 months",
        description: "Bespoke luxury interior design",
        costBreakdown: {
          "Luxury Design": "15%",
          "Smart Lighting": "20%",
          "Bespoke Furniture": "25%",
          "Luxury Flooring": "20%",
          "Designer Finishes": "17%",
          "Installation": "3%"
        },
        specifications: [
          "Luxury Space Planning",
          "Smart Lighting Systems",
          "Bespoke Furniture",
          "Luxury Flooring Materials",
          "Designer Paint & Textures",
          "Luxury Fixtures & Art",
          "18 Months Warranty"
        ],
        included: [
          "Luxury Interior Design",
          "Bespoke Furniture",
          "Smart Home Integration",
          "Luxury Materials",
          "Expert Installation",
          "Interior Styling",
          "Project Management",
          "Maintenance Package"
        ],
        compliance: ["Luxury Standards", "Design Excellence", "Safety Codes"],
        status: "PREMIUM"
      }
    ],
    renovation: [
      {
        title: "BASIC RENOVATION",
        classification: "ESSENTIAL RENOVATION",
        baseRate: "₹600",
        totalCost: "₹6,00,000",
        area: "1000 sq ft",
        timeline: "2-3 months",
        description: "Essential renovation and repair work",
        costBreakdown: {
          "Assessment & Planning": "8%",
          "Demolition": "15%",
          "Structural Repairs": "25%",
          "Electrical Updates": "20%",
          "Plumbing Updates": "15%",
          "Finishing Work": "17%"
        },
        specifications: [
          "Structural Assessment",
          "Basic Electrical Updates",
          "Plumbing Repairs",
          "Standard Paint Refresh",
          "Basic Fixture Replacement",
          "Cleaning Service",
          "6 Months Warranty"
        ],
        included: [
          "Renovation Planning",
          "Demolition Work",
          "Basic Repairs",
          "Material Supply",
          "Installation Service",
          "Cleanup"
        ],
        compliance: ["Building Codes", "Safety Standards"],
        status: "STANDARD"
      },
      {
        title: "COMPLETE RENOVATION",
        classification: "COMPREHENSIVE RENOVATION",
        baseRate: "₹1,200",
        totalCost: "₹12,00,000",
        area: "1000 sq ft",
        timeline: "4-5 months",
        description: "Complete renovation with modern upgrades",
        costBreakdown: {
          "Planning & Design": "10%",
          "Demolition": "12%",
          "Structural Work": "22%",
          "Electrical Upgrade": "22%",
          "Plumbing Upgrade": "18%",
          "Premium Finishing": "16%"
        },
        specifications: [
          "Complete Renovation Design",
          "Modern Electrical Systems",
          "Advanced Plumbing",
          "Premium Paint & Finishes",
          "Modern Fixture Installation",
          "Structural Modifications",
          "12 Months Warranty"
        ],
        included: [
          "Renovation Design",
          "Comprehensive Demolition",
          "System Upgrades",
          "Premium Materials",
          "Professional Installation",
          "Project Management",
          "Deep Cleaning"
        ],
        compliance: ["NBC 2016", "Safety Standards", "Modern Codes"],
        status: "RECOMMENDED"
      },
      {
        title: "LUXURY RENOVATION",
        classification: "LUXURY RENOVATION",
        baseRate: "₹2,000",
        totalCost: "₹20,00,000",
        area: "1000 sq ft",
        timeline: "6-8 months",
        description: "Premium renovation with luxury upgrades",
        costBreakdown: {
          "Luxury Design": "12%",
          "Selective Demolition": "10%",
          "Premium Structural": "20%",
          "Smart Electrical": "24%",
          "Luxury Plumbing": "20%",
          "Designer Finishing": "14%"
        },
        specifications: [
          "Luxury Renovation Design",
          "Smart Home Integration",
          "Luxury Plumbing Systems",
          "Designer Finishes",
          "Luxury Fixture Installation",
          "Architectural Modifications",
          "18 Months Warranty"
        ],
        included: [
          "Luxury Design Planning",
          "Precision Demolition",
          "Premium Upgrades",
          "Luxury Materials",
          "Expert Installation",
          "Project Management",
          "Professional Staging",
          "Maintenance Package"
        ],
        compliance: ["NBC 2016", "Luxury Standards", "Green Building"],
        status: "PREMIUM"
      }
    ]
  };

  const currentEstimates = estimationData[selectedCategory];

  return (
    <div className="estimation-lab" ref={sectionRef}>
      {/* Lab Header */}
      <div className="lab-header">
        <div className="header-frame">
          <div className="blueprint-corners">
            <span className="corner tl"></span>
            <span className="corner tr"></span>
            <span className="corner bl"></span>
            <span className="corner br"></span>
          </div>
          
          <div className="header-content">
            <div className="lab-info">
              <div className="info-line">
                <span className="info-label">PROJECT TYPE:</span>
                <span className="info-value">CONSTRUCTION COST ESTIMATION</span>
              </div>
              <div className="info-line">
                <span className="info-label">PRICING STRUCTURE:</span>
                <span className="info-value">TRANSPARENT & COMPETITIVE</span>
              </div>
            </div>
            
            <h1 className={`lab-title ${isVisible ? 'visible' : ''}`}>
              CONSTRUCTION PRICING
            </h1>
            <p className={`lab-subtitle ${isVisible ? 'visible' : ''}`}>
              Professional cost estimation and project analysis for construction projects
            </p>
            
            <div className="view-controls">
              <button 
                className={`control-btn ${viewMode === 'estimates' ? 'active' : ''}`}
                onClick={() => setViewMode('estimates')}
              >
                <span className="btn-icon">📋</span>
                Cost Estimates
              </button>
              <button 
                className={`control-btn ${viewMode === 'breakdown' ? 'active' : ''}`}
                onClick={() => setViewMode('breakdown')}
              >
                <span className="btn-icon">📊</span>
                Cost Breakdown
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Categories */}
      <div className="category-lab">
        <div className="container">
          <div className="lab-section-header">
            <h2>PROJECT CLASSIFICATION</h2>
            <div className="classification-grid">
              {projectCategories.map((category) => (
                <div
                  key={category.id}
                  className={`classification-card ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="card-header">
                    <div className="card-code">{category.code}</div>
                    <div className="card-icon">{category.icon}</div>
                  </div>
                  <div className="card-title">{category.label}</div>
                  <div className="card-status">
                    <span className="status-indicator"></span>
                    AVAILABLE
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Estimates View */}
      {viewMode === 'estimates' && (
        <div className="estimates-section">
          <div className="container">
            <div className="estimates-header">
              <h2>PROJECT ESTIMATES - {selectedCategory.toUpperCase()}</h2>
              <div className="estimates-meta">
                {/* Removed CURRENCY, VALID UNTIL, and ESTIMATES information */}
              </div>
            </div>
            
            <div className="estimates-grid">
              {currentEstimates.map((estimate, index) => (
                <div 
                  key={index}
                  className={`estimate-sheet ${estimate.status.toLowerCase()}`}
                  onClick={() => setSelectedEstimate(selectedEstimate === index ? null : index)}
                >
                  <div className="sheet-header">
                    <div className="estimate-id">
                      <span className="id-code">{estimate.code}</span>
                      <span className="id-class">{estimate.classification}</span>
                    </div>
                    <div className="estimate-status">
                      <span className={`status-badge ${estimate.status.toLowerCase()}`}>
                        {estimate.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="sheet-content">
                    <h3>{estimate.title}</h3>
                    <p className="estimate-description">{estimate.description}</p>
                    
                    <div className="cost-display">
                      <div className="base-rate">
                        <span className="rate-label">BASE RATE:</span>
                        <span className="rate-value">{estimate.baseRate}/sq ft</span>
                      </div>
                      <div className="total-cost">
                        <span className="cost-label">ESTIMATED COST:</span>
                        <span className="cost-value">{estimate.totalCost}</span>
                      </div>
                    </div>
                    
                    <div className="project-specs">
                      <div className="spec-item">
                        <span className="spec-label">AREA:</span>
                        <span className="spec-value">{estimate.area}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">TIMELINE:</span>
                        <span className="spec-value">{estimate.timeline}</span>
                      </div>
                    </div>
                    
                    {selectedEstimate === index && (
                      <div className="detailed-estimate">
                        <div className="detail-section">
                          <h4>COST BREAKDOWN</h4>
                          <div className="breakdown-grid">
                            {Object.entries(estimate.costBreakdown).map(([item, percentage]) => (
                              <div key={item} className="breakdown-item">
                                <span className="item-name">{item}</span>
                                <span className="item-percentage">{percentage}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Removed specifications section */}
                        
                        <div className="detail-section">
                          <h4>INCLUDED SERVICES</h4>
                          <div className="included-grid">
                            {estimate.included.map((service, idx) => (
                              <div key={idx} className="included-item">
                                <span className="include-check">✓</span>
                                {service}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="estimate-footer">
                          {/* Removed compliance info */}
                          <button className="request-quote-btn" onClick={openPopup}>
                            REQUEST DETAILED QUOTE
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
      )}

      {/* Breakdown View */}
      {viewMode === 'breakdown' && (
        <div className="breakdown-section">
          <div className="container">
            <div className="breakdown-header">
              <h2>COST ANALYSIS - {selectedCategory.toUpperCase()}</h2>
            </div>
            
            <div className="analysis-grid">
              {currentEstimates.map((estimate, index) => (
                <div key={index} className="analysis-card">
                  <div className="analysis-header">
                    <h3>{estimate.title}</h3>
                    <div className="analysis-code">{estimate.code}</div>
                  </div>
                  
                  <div className="cost-chart">
                    <div className="chart-title">COST DISTRIBUTION</div>
                    <div className="chart-bars">
                      {Object.entries(estimate.costBreakdown).map(([item, percentage], idx) => (
                        <div key={idx} className="chart-bar">
                          <div className="bar-info">
                            <span className="bar-label">{item}</span>
                            <span className="bar-percentage">{percentage}</span>
                          </div>
                          <div className="bar-visual">
                            <div 
                              className="bar-fill" 
                              style={{ width: percentage }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="analysis-summary">
                    <div className="summary-row">
                      <span>Base Rate:</span>
                      <span>{estimate.baseRate}/sq ft</span>
                    </div>
                    <div className="summary-row">
                      <span>Total Cost:</span>
                      <span>{estimate.totalCost}</span>
                    </div>
                    <div className="summary-row">
                      <span>Timeline:</span>
                      <span>{estimate.timeline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lab Statistics */}
      <div className="lab-statistics">
        <div className="container">
          <div className="stats-frame">
            <div className="stats-header">
              <h2>ESTIMATION LAB METRICS</h2>
              {/* Removed the metrics-id div with LAB-STAT-2024 */}
            </div>
            
            <div className="metrics-grid">
              <div className="metric-panel">
                <div className="panel-icon">📋</div>
                <div className="panel-data">
                  <span className="metric-value">60+</span>
                  <span className="metric-label">Estimates Delivered</span>
                </div>
              </div>
              <div className="metric-panel">
                <div className="panel-icon">💰</div>
                <div className="panel-data">
                  <span className="metric-value">95%</span>
                  <span className="metric-label">Cost Accuracy</span>
                </div>
              </div>
              <div className="metric-panel">
                <div className="panel-icon">⏱️</div>
                <div className="panel-data">
                  <span className="metric-value">24hrs</span>
                  <span className="metric-label">Quote Turnaround</span>
                </div>
              </div>
              <div className="metric-panel">
                <div className="panel-icon">🛡️</div>
                <div className="panel-data">
                  <span className="metric-value">100%</span>
                  <span className="metric-label">Transparency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .estimation-lab {
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

        /* Lab Header */
        .lab-header {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 80px 20px;
          position: relative;
        }

        .lab-header::before {
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

        .header-frame {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          background: white;
          border: 3px solid #2D3748;
          padding: 60px;
        }

        .blueprint-corners {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .corner {
          position: absolute;
          width: 25px;
          height: 25px;
          border: 3px solid #B79C5C;
        }

        .corner.tl { top: -3px; left: -3px; border-right: none; border-bottom: none; }
        .corner.tr { top: -3px; right: -3px; border-left: none; border-bottom: none; }
        .corner.bl { bottom: -3px; left: -3px; border-right: none; border-top: none; }
        .corner.br { bottom: -3px; right: -3px; border-left: none; border-top: none; }

        .header-content {
          text-align: center;
        }

        .lab-info {
          margin-bottom: 40px;
        }

        .info-line {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 8px;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .info-label {
          font-weight: 700;
          color: #B79C5C;
        }

        .info-value {
          color: #2D3748;
        }

        .lab-title {
          font-size: 4rem;
          font-weight: 900;
          letter-spacing: 4px;
          color: #2D3748;
          margin: 40px 0 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
          word-wrap: break-word;
          hyphens: auto;
          line-height: 1.1;
        }

        .lab-title.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .lab-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 40px;
          letter-spacing: 1px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease 0.3s;
          line-height: 1.4;
        }

        .lab-subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .view-controls {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .control-btn {
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

        .control-btn.active {
          background: #2D3748;
          color: white;
        }

        .control-btn:hover:not(.active) {
          background: #B79C5C;
          color: white;
          border-color: #B79C5C;
        }

        .btn-icon {
          font-size: 14px;
        }

        /* Category Lab */
        .category-lab {
          padding: 80px 0;
          background: white;
        }

        .lab-section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .lab-section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
          margin-bottom: 40px;
        }

        .classification-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .classification-card {
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 30px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .classification-card.active {
          background: white;
          border-color: #B79C5C;
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(183, 156, 92, 0.2);
        }

        .classification-card:hover:not(.active) {
          border-color: #B79C5C;
          transform: translateY(-3px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-code {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
        }

        .card-icon {
          font-size: 2rem;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }

        .card-status {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 600;
          color: #666;
          letter-spacing: 1px;
        }

        .status-indicator {
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

        /* Estimates Section */
        .estimates-section {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .estimates-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
          padding-bottom: 20px;
          border-bottom: 2px solid #B79C5C;
        }

        .estimates-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .estimates-meta {
          display: flex;
          gap: 30px;
          font-size: 11px;
          font-weight: 600;
          color: #666;
          letter-spacing: 1px;
        }

        .estimates-grid {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .estimate-sheet {
          background: white;
          border: 2px solid #2D3748;
          padding: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .estimate-sheet:hover {
          border-color: #B79C5C;
          box-shadow: 0 10px 25px rgba(183, 156, 92, 0.15);
        }

        .estimate-sheet.recommended {
          border-color: #B79C5C;
          background: linear-gradient(135deg, #ffffff 0%, rgba(183, 156, 92, 0.02) 100%);
        }

        .sheet-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e9ecef;
        }

        .estimate-id {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .id-code {
          font-size: 14px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
        }

        .id-class {
          font-size: 11px;
          color: #666;
          letter-spacing: 1px;
        }

        .status-badge {
          padding: 6px 12px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          border-radius: 4px;
        }

        .status-badge.standard {
          background: #e9ecef;
          color: #2D3748;
        }

        .status-badge.recommended {
          background: #B79C5C;
          color: white;
        }

        .status-badge.premium {
          background: #2D3748;
          color: white;
        }

        .sheet-content h3 {
          font-size: 24px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 10px;
        }

        .estimate-description {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .cost-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 25px;
          padding: 20px;
          background: #f8f9fa;
          border: 1px solid #2D3748;
        }

        .base-rate, .total-cost {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .rate-label, .cost-label {
          font-size: 10px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .rate-value, .cost-value {
          font-size: 20px;
          font-weight: 700;
          color: #2D3748;
        }

        .project-specs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .spec-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
        }

        .spec-label {
          font-size: 11px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .spec-value {
          font-size: 12px;
          color: #2D3748;
          font-weight: 600;
        }

        .detailed-estimate {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 2px solid #B79C5C;
          animation: slideDown 0.5s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .detail-section {
          margin-bottom: 30px;
        }

        .detail-section h4 {
          font-size: 14px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .breakdown-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .breakdown-item {
          display: flex;
          justify-content: space-between;
          padding: 12px;
          background: #f8f9fa;
          border: 1px solid #2D3748;
        }

        .item-name {
          font-size: 11px;
          color: #2D3748;
          font-weight: 600;
        }

        .item-percentage {
          font-size: 11px;
          color: #B79C5C;
          font-weight: 700;
        }

        .specs-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 10px;
        }

        .spec-line {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: #666;
        }

        .spec-bullet {
          color: #B79C5C;
          font-size: 14px;
        }

        .included-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 10px;
        }

        .included-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: #666;
        }

        .include-check {
          color: #22c55e;
          font-weight: 700;
        }

        .estimate-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
        }

        .compliance-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .compliance-label {
          font-size: 10px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .compliance-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .compliance-tag {
          padding: 4px 8px;
          background: #f8f9fa;
          border: 1px solid #B79C5C;
          color: #B79C5C;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .request-quote-btn {
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

        .request-quote-btn:hover {
          background: #B79C5C;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .request-quote-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        /* Breakdown Section */
        .breakdown-section {
          padding: 80px 0;
          background: white;
        }

        .breakdown-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .breakdown-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .analysis-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .analysis-card {
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 30px;
        }

        .analysis-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 1px solid #B79C5C;
        }

        .analysis-header h3 {
          font-size: 18px;
          font-weight: 600;
          color: #2D3748;
        }

        .analysis-code {
          font-size: 11px;
          color: #B79C5C;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .cost-chart {
          margin-bottom: 30px;
        }

        .chart-title {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .chart-bars {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .chart-bar {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .bar-info {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
        }

        .bar-label {
          color: #2D3748;
          font-weight: 600;
        }

        .bar-percentage {
          color: #B79C5C;
          font-weight: 700;
        }

        .bar-visual {
          height: 8px;
          background: #e9ecef;
          border-radius: 4px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #B79C5C, #2D3748);
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .analysis-summary {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          background: white;
          border: 1px solid #2D3748;
          font-size: 12px;
        }

        .summary-row span:first-child {
          color: #666;
          font-weight: 600;
        }

        .summary-row span:last-child {
          color: #2D3748;
          font-weight: 700;
        }

        /* Lab Statistics */
        .lab-statistics {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .stats-frame {
          background: white;
          border: 2px solid #2D3748;
          padding: 40px;
        }

        .stats-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 2px solid #B79C5C;
        }

        .stats-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .metrics-id {
          font-size: 12px;
          color: #B79C5C;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .metric-panel {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px;
          background: #f8f9fa;
          border: 1px solid #2D3748;
          transition: all 0.3s ease;
        }

        .metric-panel:hover {
          border-color: #B79C5C;
          transform: translateY(-5px);
        }

        .panel-icon {
          font-size: 2.5rem;
        }

        .panel-data {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .metric-value {
          font-size: 2rem;
          font-weight: 800;
          color: #B79C5C;
        }

        .metric-label {
          font-size: 12px;
          color: #2D3748;
          font-weight: 600;
          letter-spacing: 1px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .lab-header {
            padding: 60px 15px;
          }
          
          .header-frame {
            padding: 40px 20px;
          }
          
          .lab-title {
            font-size: 2.8rem;
            letter-spacing: 2px;
            line-height: 1.2;
          }
          
          .lab-subtitle {
            font-size: 14px;
            line-height: 1.5;
          }
          
          .estimates-header {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          
          .estimates-meta {
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .cost-display {
            grid-template-columns: 1fr;
          }
          
          .project-specs {
            grid-template-columns: 1fr;
          }
          
          .estimate-footer {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          
          .classification-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .analysis-grid {
            grid-template-columns: 1fr;
          }
          
          .lab-section-header h2 {
            font-size: 2rem;
          }
          
          .breakdown-header h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .lab-header {
            padding: 40px 10px;
          }
          
          .header-frame {
            padding: 30px 15px;
          }
          
          .lab-title {
            font-size: 1.8rem;
            letter-spacing: 1px;
            line-height: 1.3;
            word-break: break-word;
          }
          
          .lab-subtitle {
            font-size: 12px;
            line-height: 1.6;
            padding: 0 10px;
          }
          
          .view-controls {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          .control-btn {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }
          
          .classification-grid {
            grid-template-columns: 1fr;
          }
          
          .breakdown-grid {
            grid-template-columns: 1fr;
          }
          
          .included-grid {
            grid-template-columns: 1fr;
          }
          
          .estimates-meta {
            flex-direction: column;
            gap: 10px;
          }
          
          .info-line {
            flex-direction: column;
            gap: 5px;
          }
          
          .analysis-grid {
            grid-template-columns: 1fr;
          }
          
          .analysis-card {
            padding: 20px;
          }
          
          .lab-section-header h2 {
            font-size: 1.5rem;
          }
          
          .breakdown-header h2 {
            font-size: 1.5rem;
          }
          
          .estimates-header h2 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 375px) {
          .lab-title {
            font-size: 1.5rem;
            letter-spacing: 0.5px;
            line-height: 1.4;
          }
          
          .header-frame {
            padding: 20px 10px;
          }
          
          .container {
            padding: 0 15px;
          }
          
          .estimate-sheet {
            padding: 20px;
          }
          
          .classification-card {
            padding: 20px;
          }
        }
          
      `}</style>
    </div>
  );
};

export default PricingPage;
