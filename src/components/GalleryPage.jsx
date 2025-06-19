import React, { useState, useEffect, useRef } from 'react';

// Import your actual images from src/assets
import a1 from '/src/assets/a1.gif';
import a2 from '/src/assets/a2.gif';
import a3 from '/src/assets/a3.gif';
import a4 from '/src/assets/a4.gif';
import before2 from '/src/assets/before2.jpeg';
import after2 from '/src/assets/after2.jpeg';
import g4 from '/src/assets/g4.jpeg';
import g5 from '/src/assets/g5.jpeg';
import g6 from '/src/assets/g6.jpeg';
import g8 from '/src/assets/g8.jpeg';
import g10 from '/src/assets/g10.jpeg';
import g11 from '/src/assets/g11.jpg';
import g12 from '/src/assets/g12.jpg';
// Import new commercial images
import commercial1 from '/src/assets/gettyimages-2196182262-612x612.jpg';
import commercial2 from '/src/assets/gettyimages-1466540596-612x612.jpg';
import commercial3 from '/src/assets/gettyimages-1194207037-612x612.jpg';
import commercial4 from '/src/assets/gettyimages-1175826983-612x612.jpg';
// Import new residential images
import residential1 from '/src/assets/AdobeStock_513154782_Preview.jpeg';
import residential2 from '/src/assets/house-for-sale-thrissur-kalathode.jpg';
import residential3 from '/src/assets/19958_file_5c7a5ba545f89.jpg';

const GalleryPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedSection, setExpandedSection] = useState('featured');
  const [viewMode, setViewMode] = useState('blueprint');
  const sliderRef = useRef(null);
  const beforeImgRef = useRef(null);
  const sliderBarRef = useRef(null);

  // Before/After slider functionality
  const adjustSlider = (e) => {
    const sliderWrapper = sliderRef.current;
    const beforeImage = beforeImgRef.current;
    const sliderBar = sliderBarRef.current;
    
    if (!sliderWrapper || !beforeImage || !sliderBar) return;
    
    const rect = sliderWrapper.getBoundingClientRect();
    let offsetX = e.pageX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    beforeImage.style.clipPath = `inset(0 ${rect.width - offsetX}px 0 0)`;
    sliderBar.style.left = `${offsetX}px`;
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (isDragging) adjustSlider(e);
  };

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      adjustSlider(touch);
    }
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging]);

  // Project data with detailed information
  const projectSections = {
    featured: [
      { 
        src: after2, 
        title: 'Residential Transformation', 
        type: 'Renovation',
        year: '2024',
        area: '2,500 sq ft',
        duration: '6 months'
      },
      { 
        src: g10, 
        title: 'Commercial Complex', 
        type: 'New Construction',
        year: '2024',
        area: '15,000 sq ft',
        duration: '18 months'
      }
    ],
    residential: [
      { src: g4, title: 'Modern Villa', type: 'Custom Home', year: '2024', area: '3,200 sq ft', duration: '8 months' },
      { src: g5, title: 'Urban Townhouse', type: 'Multi-Family', year: '2023', area: '1,800 sq ft', duration: '5 months' },
      { src: g6, title: 'Luxury Estate', type: 'High-End Residential', year: '2024', area: '6,500 sq ft', duration: '12 months' },
      // Added new residential images
      { src: residential1, title: 'Contemporary Home', type: 'Single Family', year: '2024', area: '2,800 sq ft', duration: '7 months' },
      { src: residential2, title: 'Traditional Villa', type: 'Custom Build', year: '2023', area: '3,500 sq ft', duration: '9 months' },
      { src: residential3, title: 'Modern Bungalow', type: 'Residential', year: '2024', area: '2,200 sq ft', duration: '6 months' },
      // Commercial projects in residential section
      { src: g8, title: 'Office Building', type: 'Corporate', year: '2023', area: '25,000 sq ft', duration: '24 months' },
      { src: g11, title: 'Retail Center', type: 'Commercial', year: '2024', area: '12,000 sq ft', duration: '10 months' },
      { src: g12, title: 'Industrial Facility', type: 'Manufacturing', year: '2023', area: '40,000 sq ft', duration: '15 months' }
    ],
    commercial: [
      // Commercial images
      { 
        src: commercial1, 
        title: 'Modern Office Tower', 
        type: 'Corporate Headquarters', 
        year: '2024', 
        area: '35,000 sq ft', 
        duration: '24 months' 
      },
      { 
        src: commercial2, 
        title: 'Shopping Mall Complex', 
        type: 'Retail Development', 
        year: '2023', 
        area: '50,000 sq ft', 
        duration: '30 months' 
      },
      { 
        src: commercial3, 
        title: 'Business Park', 
        type: 'Mixed-Use Commercial', 
        year: '2024', 
        area: '45,000 sq ft', 
        duration: '28 months' 
      },
      { 
        src: commercial4, 
        title: 'Urban Office Space', 
        type: 'Corporate Interior', 
        year: '2023', 
        area: '18,000 sq ft', 
        duration: '14 months' 
      }
    ],
    process: [
      { src: a1, title: 'Foundation Work', type: 'Process Documentation', year: '2024', area: 'Various', duration: 'Ongoing' },
      { src: a2, title: 'Structural Development', type: 'Process Documentation', year: '2024', area: 'Various', duration: 'Ongoing' },
      { src: a3, title: 'Interior Finishing', type: 'Process Documentation', year: '2024', area: 'Various', duration: 'Ongoing' },
      { src: a4, title: 'Final Installation', type: 'Process Documentation', year: '2024', area: 'Various', duration: 'Ongoing' }
    ]
  };

  const openModal = (imageSrc) => {
    setModalImageSrc(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImageSrc('');
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="portfolio-page">
      {/* Blueprint Header */}
      <div className="blueprint-header">
        <div className="container">
          <div className="header-grid">
            <div className="title-block">
              <div className="blueprint-corner tl"></div>
              <div className="blueprint-corner tr"></div>
              <div className="blueprint-corner bl"></div>
              <div className="blueprint-corner br"></div>
              
              <div className="project-info">
                <div className="info-line">
                  <span className="label">PROJECT:</span>
                  <span className="value">CONSTRUCTION PORTFOLIO</span>
                </div>
                {/* Removed SCALE: 1:1 DIGITAL */}
                {/* Removed DATE: 2024 */}
              </div>
              
              <h1 className="main-title">PROJECT GALLERY</h1>
              <div className="title-underline"></div>
            </div>
            
            <div className="view-controls">
              <div className="control-panel">
                <div className="panel-header">VIEW MODE</div>
                <div className="mode-buttons">
                  <button 
                    className={`mode-btn ${viewMode === 'blueprint' ? 'active' : ''}`}
                    onClick={() => setViewMode('blueprint')}
                  >
                    <span className="btn-symbol">▦</span>
                    Blueprint
                  </button>
                  <button 
                    className={`mode-btn ${viewMode === 'timeline' ? 'active' : ''}`}
                    onClick={() => setViewMode('timeline')}
                  >
                    <span className="btn-symbol">≡</span>
                    Timeline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Drawing Section */}
      <div className="technical-section">
        <div className="container">
          <div className="drawing-header">
            <h2>BEFORE & AFTER ANALYSIS</h2>
            {/* Removed the drawing-number div with DWG-001 */}
          </div>
          
          <div className="blueprint-frame">
            <div className="frame-markers">
              <div className="marker top-left">A</div>
              <div className="marker top-right">B</div>
              <div className="marker bottom-left">C</div>
              <div className="marker bottom-right">D</div>
            </div>
            
            <div 
              className="comparison-wrapper" 
              ref={sliderRef}
            >
              <img 
                src={before2} 
                alt="Before" 
                className="before-image" 
                ref={beforeImgRef}
              />
              <img 
                src={after2} 
                alt="After" 
                className="after-image"
              />
              <div 
                className="technical-slider" 
                ref={sliderBarRef}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                <div className="slider-guide">
                  <div className="guide-line"></div>
                  <div className="slider-handle">
                    <div className="handle-cross">
                      <div className="cross-h"></div>
                      <div className="cross-v"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="technical-label before">
                <div className="label-box">BEFORE</div>
                <div className="dimension-line"></div>
              </div>
              <div className="technical-label after">
                <div className="label-box">AFTER</div>
                <div className="dimension-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Gallery */}
      <div className="gallery-section">
        <div className="container">
          
          {/* Blueprint View */}
          {viewMode === 'blueprint' && (
            <div className="blueprint-layout">
              {Object.entries(projectSections).map(([sectionKey, projects]) => (
                <div key={sectionKey} className="project-section">
                  <div 
                    className="section-header"
                    onClick={() => toggleSection(sectionKey)}
                  >
                    <div className="section-title">
                      <span className="section-symbol">■</span>
                      {sectionKey.toUpperCase().replace('_', ' ')}
                      <span className="project-count">({projects.length})</span>
                    </div>
                    <div className="section-toggle">
                      <span className={`toggle-symbol ${expandedSection === sectionKey ? 'expanded' : ''}`}>+</span>
                    </div>
                  </div>
                  
                  <div className={`section-content ${expandedSection === sectionKey ? 'expanded' : ''}`}>
                    <div className="blueprint-grid">
                      {projects.map((project, index) => (
                        <div 
                          key={index}
                          className="blueprint-card"
                          onClick={() => openModal(project.src)}
                        >
                          <div className="card-frame">
                            <div className="frame-corner tl"></div>
                            <div className="frame-corner tr"></div>
                            <div className="frame-corner bl"></div>
                            <div className="frame-corner br"></div>
                            
                            <img src={project.src} alt={project.title} />
                            
                            <div className="card-overlay">
                              <div className="project-details">
                                <div className="detail-line">
                                  <span className="detail-label">TITLE:</span>
                                  <span className="detail-value">{project.title}</span>
                                </div>
                                <div className="detail-line">
                                  <span className="detail-label">TYPE:</span>
                                  <span className="detail-value">{project.type}</span>
                                </div>
                                <div className="detail-line">
                                  <span className="detail-label">YEAR:</span>
                                  <span className="detail-value">{project.year}</span>
                                </div>
                                <div className="detail-line">
                                  <span className="detail-label">AREA:</span>
                                  <span className="detail-value">{project.area}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Timeline View */}
          {viewMode === 'timeline' && (
            <div className="timeline-layout">
              <div className="timeline-axis">
                <div className="axis-line"></div>
                {Object.values(projectSections).flat().map((project, index) => (
                  <div 
                    key={index}
                    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    onClick={() => openModal(project.src)}
                  >
                    <div className="timeline-marker">
                      <div className="marker-dot"></div>
                      <div className="marker-line"></div>
                    </div>
                    <div className="timeline-card">
                      <div className="card-header">
                        <span className="card-year">{project.year}</span>
                        <span className="card-type">{project.type}</span>
                      </div>
                      <img src={project.src} alt={project.title} />
                      <div className="card-info">
                        <h3>{project.title}</h3>
                        <div className="card-specs">
                          <span>{project.area}</span>
                          <span>{project.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Technical Modal */}
      {modalOpen && (
        <div className="technical-modal" onClick={handleModalClick}>
          <div className="modal-frame">
            <div className="modal-header">
              <div className="modal-title">PROJECT DETAIL VIEW</div>
              <button className="modal-close" onClick={closeModal}>
                <span className="close-symbol">×</span>
              </button>
            </div>
            <div className="modal-content">
              <img src={modalImageSrc} alt="Project Detail" />
            </div>
            <div className="modal-footer">
              <div className="footer-line"></div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio-page {
          font-family: 'Roboto Mono', 'Courier New', monospace;
          background: #f8f9fa;
          min-height: 100vh;
          color: #2D3748;
          padding-top: 80px; /* Added padding to prevent navbar overlap */
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Blueprint Header */
        .blueprint-header {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 40px 0; /* Reduced from 60px to 40px */
          border-bottom: 2px solid #B79C5C;
          position: relative;
          margin-top: 20px; /* Added margin-top for additional spacing */
        }

        .blueprint-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20px 20px, #B79C5C 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.1;
        }

        .header-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .title-block {
          position: relative;
          background: white;
          padding: 40px;
          border: 2px solid #2D3748;
        }

        .blueprint-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #B79C5C;
        }

        .blueprint-corner.tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .blueprint-corner.tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .blueprint-corner.bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
        .blueprint-corner.br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

        .project-info {
          margin-bottom: 30px;
        }

        .info-line {
          display: flex;
          margin-bottom: 8px;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .label {
          width: 80px;
          font-weight: 700;
          color: #B79C5C;
        }

        .value {
          color: #2D3748;
        }

        .main-title {
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: 4px;
          color: #2D3748;
          margin-bottom: 15px;
        }

        .title-underline {
          width: 100px;
          height: 4px;
          background: #B79C5C;
        }

        .view-controls {
          display: flex;
          justify-content: center;
        }

        .control-panel {
          background: white;
          border: 2px solid #2D3748;
          padding: 25px;
          width: 100%;
        }

        .panel-header {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #B79C5C;
          margin-bottom: 20px;
          text-align: center;
        }

        .mode-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mode-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border: 1px solid #2D3748;
          background: transparent;
          color: #2D3748;
          cursor: pointer;
          font-family: inherit;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }

        .mode-btn.active {
          background: #2D3748;
          color: white;
        }

        .mode-btn:hover:not(.active) {
          background: #B79C5C;
          color: white;
          border-color: #B79C5C;
        }

        .btn-symbol {
          font-size: 14px;
        }

        /* Technical Section */
        .technical-section {
          padding: 80px 0;
          background: white;
        }

        .drawing-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #2D3748;
        }

        .drawing-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: #2D3748;
        }

        .drawing-number {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .blueprint-frame {
          position: relative;
          background: white;
          border: 2px solid #2D3748;
          padding: 30px;
        }

        .frame-markers {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .marker {
          position: absolute;
          width: 20px;
          height: 20px;
          background: #B79C5C;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
        }

        .marker.top-left { top: -10px; left: -10px; }
        .marker.top-right { top: -10px; right: -10px; }
        .marker.bottom-left { bottom: -10px; left: -10px; }
        .marker.bottom-right { bottom: -10px; right: -10px; }

        .comparison-wrapper {
          position: relative;
          height: 500px;
          overflow: hidden;
        }

        .comparison-wrapper img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .before-image {
          z-index: 2;
          clip-path: inset(0 50% 0 0);
        }

        .after-image {
          z-index: 1;
        }

        .technical-slider {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          cursor: ew-resize;
          z-index: 3;
          transform: translateX(-50%);
        }

        .slider-guide {
          position: relative;
          height: 100%;
        }

        .guide-line {
          width: 2px;
          height: 100%;
          background: #B79C5C;
        }

        .slider-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 30px;
          height: 30px;
          background: white;
          border: 2px solid #B79C5C;
          transform: translate(-50%, -50%);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .handle-cross {
          position: relative;
          width: 12px;
          height: 12px;
        }

        .cross-h, .cross-v {
          position: absolute;
          background: #B79C5C;
        }

        .cross-h {
          width: 12px;
          height: 2px;
          top: 5px;
        }

        .cross-v {
          width: 2px;
          height: 12px;
          left: 5px;
        }

        .technical-label {
          position: absolute;
          top: 20px;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .label-box {
          background: #2D3748;
          color: white;
          padding: 8px 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .dimension-line {
          width: 40px;
          height: 2px;
          background: #B79C5C;
        }

        .technical-label.before {
          left: 20px;
        }

        .technical-label.after {
          right: 20px;
          flex-direction: row-reverse;
        }

        /* Gallery Section */
        .gallery-section {
          padding: 80px 0;
          background: #f8f9fa;
        }

        /* Blueprint Layout */
        .blueprint-layout {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .project-section {
          background: white;
          border: 2px solid #2D3748;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          background: #2D3748;
          color: white;
          cursor: pointer;
          user-select: none;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .section-symbol {
          color: #B79C5C;
        }

        .project-count {
          color: #B79C5C;
          font-size: 12px;
        }

        .toggle-symbol {
          font-size: 20px;
          font-weight: 700;
          transition: transform 0.3s ease;
        }

        .toggle-symbol.expanded {
          transform: rotate(45deg);
        }

        .section-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .section-content.expanded {
          max-height: 2000px;
        }

        .blueprint-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          padding: 30px;
        }

        .blueprint-card {
          position: relative;
          cursor: pointer;
          background: white;
        }

        .card-frame {
          position: relative;
          border: 2px solid #2D3748;
          overflow: hidden;
        }

        .frame-corner {
          position: absolute;
          width: 15px;
          height: 15px;
          border: 2px solid #B79C5C;
          z-index: 2;
        }

        .frame-corner.tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .frame-corner.tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .frame-corner.bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
        .frame-corner.br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

        .blueprint-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blueprint-card:hover img {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(45, 55, 72, 0.95));
          color: white;
          padding: 30px 20px 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .blueprint-card:hover .card-overlay {
          opacity: 1;
        }

        .project-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .detail-line {
          display: flex;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .detail-label {
          width: 50px;
          font-weight: 700;
          color: #B79C5C;
        }

        .detail-value {
          flex: 1;
        }

        /* Hexagon Layout */
        .hexagon-layout,
        .hex-grid,
        .hex-item,
        .hexagon,
        .hex-inner,
        .hex-overlay,
        .hex-content,
        .hex-number,
        .hex-title {
          display: none;
        }

        /* Timeline Layout */
        .timeline-layout {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline-axis {
          position: relative;
          padding: 40px 0;
        }

        .axis-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: #B79C5C;
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 60px;
          display: flex;
          align-items: center;
        }

        .timeline-item.left {
          justify-content: flex-end;
          padding-right: 60px;
        }

        .timeline-item.right {
          justify-content: flex-start;
          padding-left: 60px;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .marker-dot {
          width: 16px;
          height: 16px;
          background: #2D3748;
          border: 4px solid #B79C5C;
          border-radius: 50%;
          z-index: 2;
        }

        .marker-line {
          width: 2px;
          height: 40px;
          background: #2D3748;
        }

        .timeline-card {
          background: white;
          border: 2px solid #2D3748;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          max-width: 300px;
        }

        .timeline-card:hover {
          border-color: #B79C5C;
          transform: scale(1.02);
        }

        .card-header {
          background: #2D3748;
          color: white;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-year {
          font-weight: 700;
          font-size: 14px;
        }

        .card-type {
          font-size: 10px;
          color: #B79C5C;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .timeline-card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .card-info {
          padding: 16px;
        }

        .card-info h3 {
          font-size: 14px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 8px;
        }

        .card-specs {
          display: flex;
          gap: 15px;
        }

        .card-specs span {
          font-size: 10px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Technical Modal */
        .technical-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(45, 55, 72, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-frame {
          background: white;
          border: 3px solid #2D3748;
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
        }

        .modal-header {
          background: #2D3748;
          color: white;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .modal-close {
          background: #B79C5C;
          color: white;
          border: none;
          width: 30px;
          height: 30px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 700;
        }

        .modal-close:hover {
          background: white;
          color: #B79C5C;
        }

        .modal-content img {
          max-width: 100%;
          max-height: 70vh;
          display: block;
        }

        .modal-footer {
          padding: 15px 20px;
        }

        .footer-line {
          height: 2px;
          background: #B79C5C;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .main-title {
            font-size: 2rem;
            letter-spacing: 2px;
          }
          
          .mode-buttons {
            flex-direction: row;
            justify-content: center;
          }
          
          .comparison-wrapper {
            height: 300px;
          }
          
          .blueprint-grid {
            grid-template-columns: 1fr;
          }
          
          .hex-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .timeline-item {
            flex-direction: column;
            padding: 0;
          }
          
          .timeline-item.left,
          .timeline-item.right {
            padding: 0;
          }
          
          .axis-line {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 1.5rem;
          }
          
          .hex-grid {
            grid-template-columns: 1fr;
          }
          
          .hexagon {
            width: 150px;
            height: 130px;
          }
          
          .timeline-card {
            max-width: 100%;
          }
        }
          /* Responsive Design */
        @media (max-width: 768px) {
          .header-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .main-title {
            font-size: 2rem;
            letter-spacing: 2px;
          }
          
          .control-panel {
            padding: 20px 15px;
          }
          
          .mode-buttons {
            flex-direction: row;
            justify-content: center;
            gap: 8px;
          }
          
          .mode-btn {
            padding: 10px 12px;
            font-size: 10px;
            gap: 8px;
            flex: 1;
            justify-content: center;
            min-width: 0;
          }
          
          .btn-symbol {
            font-size: 12px;
          }
      `}</style>
    </div>
  );
};

export default GalleryPage;
