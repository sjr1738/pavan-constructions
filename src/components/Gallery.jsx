import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [galleryItems, setGalleryItems] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  
  // Sample gallery items - in a real project, these could come from an API
  const allItems = [
    {
      id: 1,
      category: 'residential',
      image: '/images/h8.jpg',
      title: 'Modern Villa',
      description: 'Luxurious modern villa with panoramic views'
    },
    {
      id: 2,
      category: 'commercial',
      image: '/images/d-2.jpg',
      title: 'Office Complex',
      description: 'Contemporary office space for modern businesses'
    },
    {
      id: 3,
      category: 'residential',
      image: '/images/whyy.jpg',
      title: 'Family Home',
      description: 'Spacious family home with elegant design'
    },
    {
      id: 4,
      category: 'interior',
      image: '/images/interior.webp',
      title: 'Living Room Design',
      description: 'Elegant living room with modern aesthetics'
    },
    {
      id: 5,
      category: 'renovation',
      image: '/images/rs.jpg',
      title: 'Kitchen Renovation',
      description: 'Complete kitchen transformation with high-end finishes'
    },
    {
      id: 6,
      category: 'commercial',
      image: '/images/s-1.jpg',
      title: 'Shopping Complex',
      description: 'Multi-level shopping complex with modern facilities'
    },
    {
      id: 7,
      category: 'layout',
      image: '/images/ld.jpg',
      title: 'Residential Layout',
      description: 'Well-planned residential layout with all amenities'
    },
    {
      id: 8,
      category: 'interior',
      image: '/images/why.jpg',
      title: 'Bedroom Design',
      description: 'Relaxing bedroom with contemporary design elements'
    }
  ];
  
  const filterCategories = [
    { id: 'all', label: 'All' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'interior', label: 'Interior' },
    { id: 'renovation', label: 'Renovation' },
    { id: 'layout', label: 'Layout' }
  ];
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setGalleryItems(allItems);
    } else {
      setGalleryItems(allItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);
  
  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };
  
  const openLightbox = (item) => {
    setCurrentImage(item);
    setLightboxOpen(true);
    document.body.classList.add('no-scroll');
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.classList.remove('no-scroll');
  };
  
  const navigateLightbox = (direction) => {
    const currentIndex = galleryItems.findIndex(item => item.id === currentImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryItems.length;
    } else {
      newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    }
    
    setCurrentImage(galleryItems[newIndex]);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Gallery</h2>
          <p>Explore our portfolio of successful projects</p>
        </div>
        <div className="gallery-filters">
          {filterCategories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => openLightbox(item)}
            >
              <div className="gallery-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="view-project">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {lightboxOpen && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-lightbox" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            <div className="lightbox-image">
              <img src={currentImage.image} alt={currentImage.title} />
            </div>
            <div className="lightbox-details">
              <h3>{currentImage.title}</h3>
              <p>{currentImage.description}</p>
              <p className="lightbox-category">Category: {currentImage.category.charAt(0).toUpperCase() + currentImage.category.slice(1)}</p>
            </div>
            <div className="lightbox-navigation">
              <button className="nav-btn prev" onClick={() => navigateLightbox('prev')}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="nav-btn next" onClick={() => navigateLightbox('next')}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
