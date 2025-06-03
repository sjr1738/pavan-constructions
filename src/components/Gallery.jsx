import React, { useState, useEffect, useRef } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [galleryItems, setGalleryItems] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);
  const [titleAnimated, setTitleAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  
  // Sample gallery items with working Unsplash images
  const allItems = [
    {
      id: 1,
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Modern Villa Estate',
      description: 'Luxurious modern villa with panoramic views and contemporary design elements featuring premium finishes',
      year: '2024',
      location: 'Bangalore'
    },
    {
      id: 2,
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Corporate Hub Complex',
      description: 'Contemporary office space designed for modern businesses with state-of-the-art facilities',
      year: '2024',
      location: 'Hyderabad'
    },
    {
      id: 3,
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Heritage Family Home',
      description: 'Spacious family home with elegant design and premium finishes blending tradition with modernity',
      year: '2023',
      location: 'Chennai'
    },
    {
      id: 4,
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Luxury Living Spaces',
      description: 'Elegant living room with modern aesthetics and luxury furniture showcasing sophisticated design',
      year: '2024',
      location: 'Mumbai'
    },
    {
      id: 5,
      category: 'renovation',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Gourmet Kitchen Transformation',
      description: 'Complete kitchen transformation with high-end finishes and premium appliances',
      year: '2023',
      location: 'Pune'
    },
    {
      id: 6,
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Premium Shopping Complex',
      description: 'Multi-level shopping complex with modern facilities and world-class amenities',
      year: '2024',
      location: 'Delhi'
    },
    {
      id: 7,
      category: 'layout',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Smart Community Layout',
      description: 'Well-planned residential layout with all essential amenities and green spaces',
      year: '2023',
      location: 'Kochi'
    },
    {
      id: 8,
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Serene Bedroom Sanctuary',
      description: 'Relaxing bedroom with contemporary design elements and luxury comfort features',
      year: '2024',
      location: 'Goa'
    }
  ];
  
  const filterCategories = [
    { id: 'all', label: 'All Projects', color: '#2c3e50', icon: '🏗️' },
    { id: 'residential', label: 'Residential', color: '#B79C5C', icon: '🏠' },
    { id: 'commercial', label: 'Commercial', color: '#3498db', icon: '🏢' },
    { id: 'interior', label: 'Interior', color: '#e74c3c', icon: '🎨' },
    { id: 'renovation', label: 'Renovation', color: '#9b59b6', icon: '🔨' },
    { id: 'layout', label: 'Layout', color: '#27ae60', icon: '📐' }
  ];

  const keyframes = `
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(120px) rotateX(90deg) scale(0.3);
        filter: blur(15px);
      }
      50% {
        opacity: 0.5;
        transform: translateY(60px) rotateX(45deg) scale(0.6);
        filter: blur(8px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      33% { background-position: 50% 100%; }
      66% { background-position: 100% 50%; }
    }

    @keyframes titleUnderline {
      0% {
        width: 0;
        opacity: 0;
        transform: scaleX(0);
      }
      100% {
        width: 120px;
        opacity: 1;
        transform: scaleX(1);
      }
    }

    @keyframes filterButtonFloat {
      0% {
        opacity: 0;
        transform: translateY(50px) rotateY(45deg) scale(0.8);
        filter: blur(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateY(0deg) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes galleryItemMagnetize {
      0% {
        opacity: 0;
        transform: translateY(80px) rotateX(25deg) scale(0.7);
        filter: blur(12px) brightness(0.4);
      }
      60% {
        opacity: 0.8;
        transform: translateY(20px) rotateX(10deg) scale(0.9);
        filter: blur(6px) brightness(0.7);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
        filter: blur(0px) brightness(1);
      }
    }

    @keyframes backgroundFloat {
      0%, 100% {
        transform: translateY(0) rotate(0deg) scale(1);
      }
      25% {
        transform: translateY(-20px) rotate(2deg) scale(1.02);
      }
      50% {
        transform: translateY(-30px) rotate(0deg) scale(1.05);
      }
      75% {
        transform: translateY(-15px) rotate(-2deg) scale(1.02);
      }
    }

    @keyframes morphShape {
      0%, 100% {
        border-radius: 50% 40% 30% 70%;
        transform: rotate(0deg) scale(1);
      }
      25% {
        border-radius: 30% 60% 70% 40%;
        transform: rotate(90deg) scale(1.1);
      }
      50% {
        border-radius: 70% 30% 50% 60%;
        transform: rotate(180deg) scale(0.9);
      }
      75% {
        border-radius: 40% 70% 30% 50%;
        transform: rotate(270deg) scale(1.05);
      }
    }

    @keyframes lightboxEntrance {
      0% {
        opacity: 0;
        transform: scale(0.2) rotateY(90deg);
        filter: blur(30px);
      }
      50% {
        opacity: 0.7;
        transform: scale(0.8) rotateY(45deg);
        filter: blur(15px);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotateY(0deg);
        filter: blur(0px);
      }
    }

    @keyframes parallaxFloat {
      0%, 100% {
        transform: translateY(0px) translateX(0px);
      }
      50% {
        transform: translateY(-15px) translateX(5px);
      }
    }

    @keyframes filterGlow {
      0%, 100% {
        box-shadow: 0 8px 25px rgba(183, 156, 92, 0.2);
      }
      50% {
        box-shadow: 0 8px 35px rgba(183, 156, 92, 0.4), 0 0 20px rgba(183, 156, 92, 0.3);
      }
    }

    @keyframes cardHoverLift {
      0% {
        transform: translateY(0) scale(1) rotateX(0deg);
        box-shadow: 0 15px 35px rgba(44, 62, 80, 0.08);
      }
      100% {
        transform: translateY(-25px) scale(1.05) rotateX(-8deg);
        box-shadow: 0 35px 70px rgba(44, 62, 80, 0.15), 0 15px 30px rgba(183, 156, 92, 0.2);
      }
    }

    @keyframes overlayReveal {
      0% {
        opacity: 0;
        transform: translateY(100%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes shimmerEffect {
      0% {
        transform: translateX(-200px) skewX(-15deg);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translateX(400px) skewX(-15deg);
        opacity: 0;
      }
    }

    @keyframes subtitleFadeUp {
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
        filter: blur(5px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }
  `;

  // Mouse movement tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => setTitleAnimated(true), 400);
            setTimeout(() => {
              const itemsToAnimate = activeFilter === 'all' ? allItems : allItems.filter(item => item.category === activeFilter);
              itemsToAnimate.forEach((_, index) => {
                setTimeout(() => {
                  setAnimatedItems(prev => [...prev, index]);
                }, index * 150);
              });
            }, 2200);
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
  }, [activeFilter]);
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setGalleryItems(allItems);
    } else {
      setGalleryItems(allItems.filter(item => item.category === activeFilter));
    }
    setAnimatedItems([]);
  }, [activeFilter]);
  
  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };
  
  const openLightbox = (item) => {
    setCurrentImage(item);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
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

  const sectionStyle = {
    padding: '8rem 0',
    background: `
      radial-gradient(ellipse at top left, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.95) 40%),
      radial-gradient(ellipse at bottom right, rgba(241, 245, 249, 0.9) 0%, rgba(226, 232, 240, 0.8) 60%),
      linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)
    `,
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh'
  };

  // Advanced floating elements with parallax
  const floatingElements = (
    <>
      {/* Morphing shapes */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '8%',
        width: '280px',
        height: '280px',
        background: 'linear-gradient(135deg, rgba(183, 156, 92, 0.08), rgba(52, 152, 219, 0.06))',
        animation: 'morphShape 20s ease-in-out infinite, backgroundFloat 8s ease-in-out infinite',
        zIndex: 1,
        transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 10}px)`
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(225deg, rgba(231, 76, 60, 0.06), rgba(155, 89, 182, 0.08))',
        animation: 'morphShape 25s ease-in-out infinite reverse, backgroundFloat 12s ease-in-out infinite',
        zIndex: 1,
        transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * 15}px)`
      }} />

      <div style={{
        position: 'absolute',
        top: '30%',
        left: '15%',
        width: '150px',
        height: '150px',
        background: 'linear-gradient(45deg, rgba(39, 174, 96, 0.05), rgba(241, 196, 15, 0.07))',
        animation: 'morphShape 30s ease-in-out infinite, backgroundFloat 10s ease-in-out infinite reverse',
        zIndex: 1,
        transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * -12}px)`
      }} />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${4 + Math.random() * 6}px`,
            height: `${4 + Math.random() * 6}px`,
            background: `linear-gradient(45deg, rgba(183, 156, 92, ${0.3 + Math.random() * 0.4}), rgba(52, 152, 219, ${0.2 + Math.random() * 0.3}))`,
            borderRadius: '50%',
            animation: `parallaxFloat ${8 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            zIndex: 1,
            transform: `translate(${mousePosition.x * (10 + Math.random() * 20)}px, ${mousePosition.y * (5 + Math.random() * 15)}px)`
          }}
        />
      ))}
    </>
  );

  const containerStyle = {
    maxWidth: '1600px',
    margin: '0 auto',
    padding: '0 3rem',
    position: 'relative',
    zIndex: 2
  };

  const titleSectionStyle = {
    textAlign: 'center',
    marginBottom: '5rem',
    position: 'relative',
    perspective: '1200px'
  };

  const titleStyle = {
    fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
    fontWeight: '900',
    lineHeight: '1.1',
    margin: '0 0 2rem 0',
    perspective: '1200px',
    position: 'relative',
    display: 'inline-block'
  };

  const titleWordStyle = (wordIndex) => ({
    display: 'inline-block',
    marginRight: '25px',
    opacity: titleAnimated ? 1 : 0,
    transform: titleAnimated ? 'translateY(0) rotateX(0deg) scale(1)' : 'translateY(120px) rotateX(90deg) scale(0.3)',
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #B79C5C 60%, #3498db 100%)',
    backgroundSize: '400% 400%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: titleAnimated ? `wordReveal 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${1.0 + (wordIndex * 0.25)}s, gradientShift 6s ease-in-out infinite` : 'none',
    textShadow: titleAnimated ? '0 10px 30px rgba(44, 62, 80, 0.1)' : 'none'
  });

  const titleUnderlineStyle = {
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '6px',
    background: 'linear-gradient(90deg, transparent, #B79C5C, #3498db, #B79C5C, transparent)',
    borderRadius: '3px',
    animation: titleAnimated ? 'titleUnderline 1.5s ease-out forwards 2.5s' : 'none',
    width: '0'
  };

  const subtitleStyle = {
    fontSize: '1.3rem',
    color: '#64748b',
    fontWeight: '300',
    letterSpacing: '2px',
    lineHeight: '1.8',
    maxWidth: '700px',
    margin: '0 auto',
    opacity: titleAnimated ? 1 : 0,
    animation: titleAnimated ? 'subtitleFadeUp 1s ease-out forwards 2.8s' : 'none'
  };

  const filtersContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
    marginBottom: '4rem',
    opacity: titleAnimated ? 1 : 0,
    animation: titleAnimated ? 'filterButtonFloat 1s ease-out forwards 3.2s' : 'none'
  };

  const filterButtonStyle = (category, isActive, index) => ({
    padding: '1rem 2rem',
    background: isActive 
      ? `linear-gradient(135deg, ${category.color}, rgba(44, 62, 80, 0.9))` 
      : 'rgba(255, 255, 255, 0.8)',
    border: `2px solid ${isActive ? 'transparent' : 'rgba(183, 156, 92, 0.2)'}`,
    borderRadius: '25px',
    color: isActive ? 'white' : '#64748b',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: isActive 
      ? '0 15px 35px rgba(44, 62, 80, 0.2), 0 5px 15px rgba(183, 156, 92, 0.3)' 
      : '0 8px 25px rgba(44, 62, 80, 0.08)',
    position: 'relative',
    overflow: 'hidden',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '0.9rem',
    backdropFilter: 'blur(20px)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    animation: isActive ? 'filterGlow 2s ease-in-out infinite' : 'none',
    transform: `translateY(${isActive ? -3 : 0}px)`,
    animationDelay: `${index * 0.1}s`
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gap: '3rem',
    marginTop: '3rem',
    perspective: '1200px'
  };

  const galleryItemStyle = (index, isAnimated) => ({
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)',
    cursor: 'pointer',
    height: '350px',
    background: 'rgba(255, 255, 255, 0.9)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(20px)',
    transform: isAnimated ? 'translateY(0) rotateX(0deg) scale(1)' : 'translateY(80px) rotateX(25deg) scale(0.7)',
    opacity: isAnimated ? 1 : 0,
    animation: isAnimated ? `galleryItemMagnetize 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards ${index * 0.15}s` : 'none',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    transformStyle: 'preserve-3d'
  });

  const imageStyle = {
    width: '100%',
    height: '70%',
    objectFit: 'cover',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    filter: 'brightness(0.95) contrast(1.05) saturate(1.1)'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '70%',
    background: `
      radial-gradient(circle at center, transparent 0%, rgba(44, 62, 80, 0.7) 100%),
      linear-gradient(to top, rgba(44, 62, 80, 0.9) 0%, transparent 60%)
    `,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    opacity: 0,
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    color: 'white',
    textAlign: 'center'
  };

  const cardInfoStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '1.5rem',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderTop: '1px solid rgba(183, 156, 92, 0.2)'
  };

  const overlayTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    transform: 'translateY(20px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '0.1s'
  };

  const overlayDescStyle = {
    fontSize: '1rem',
    opacity: 0.9,
    transform: 'translateY(20px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '0.2s',
    lineHeight: '1.5'
  };

  const shimmerStyle = {
    position: 'absolute',
    top: 0,
    left: '-200px',
    width: '100px',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
    animation: 'shimmerEffect 3s ease-in-out infinite',
    zIndex: 3
  };

  return (
    <section style={sectionStyle} ref={sectionRef}>
      {floatingElements}
      
      <div style={containerStyle}>
        <div style={titleSectionStyle}>
          <h2 style={titleStyle}>
            <span style={titleWordStyle(0)}>Our</span>
            <span style={titleWordStyle(1)}>Project</span>
            <span style={titleWordStyle(2)}>Portfolio</span>
            <div style={titleUnderlineStyle}></div>
          </h2>
          <p style={subtitleStyle}>
            Discover our curated collection of architectural masterpieces and design excellence that define contemporary living
          </p>
        </div>
        
        <div style={filtersContainerStyle}>
          {filterCategories.map((category, index) => (
            <button
              key={category.id}
              style={filterButtonStyle(category, activeFilter === category.id, index)}
              onClick={() => handleFilterClick(category.id)}
              onMouseEnter={(e) => {
                if (activeFilter !== category.id) {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05) rotateY(5deg)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(44, 62, 80, 0.15), 0 10px 25px rgba(183, 156, 92, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(183, 156, 92, 0.5)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  e.currentTarget.style.color = category.color;
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== category.id) {
                  e.currentTarget.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(44, 62, 80, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(183, 156, 92, 0.2)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.color = '#64748b';
                }
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
        
        <div style={gridStyle}>
          {galleryItems.map((item, index) => {
            const isAnimated = animatedItems.includes(index);
            
            return (
              <div 
                key={item.id} 
                style={galleryItemStyle(index, isAnimated)}
                onClick={() => openLightbox(item)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.animation = 'cardHoverLift 0.6s ease-out forwards';
                  
                  const img = e.currentTarget.querySelector('img');
                  const overlay = e.currentTarget.querySelector('.overlay');
                  const overlayElements = e.currentTarget.querySelectorAll('.overlay-element');
                  const shimmer = e.currentTarget.querySelector('.shimmer');
                  
                  if (img) img.style.transform = 'scale(1.15) rotate(3deg)';
                  if (overlay) overlay.style.opacity = '1';
                  if (shimmer) shimmer.style.animation = 'shimmerEffect 1s ease-out';
                  overlayElements.forEach(el => {
                    el.style.transform = 'translateY(0)';
                  });
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.animation = 'none';
                  e.currentTarget.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)';
                  
                  const img = e.currentTarget.querySelector('img');
                  const overlay = e.currentTarget.querySelector('.overlay');
                  const overlayElements = e.currentTarget.querySelectorAll('.overlay-element');
                  
                  if (img) img.style.transform = 'scale(1) rotate(0deg)';
                  if (overlay) overlay.style.opacity = '0';
                  overlayElements.forEach(el => {
                    el.style.transform = 'translateY(20px)';
                  });
                }}
              >
                <div style={shimmerStyle} className="shimmer"></div>
                <img src={item.image} alt={item.title} style={imageStyle} />
                <div className="overlay" style={overlayStyle}>
                  <h3 className="overlay-element" style={overlayTitleStyle}>View Project</h3>
                  <p className="overlay-element" style={overlayDescStyle}>Click to explore details</p>
                </div>
                
                <div style={cardInfoStyle}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#2c3e50',
                      margin: 0,
                      flex: 1
                    }}>
                      {item.title}
                    </h3>
                    <span style={{
                      fontSize: '0.8rem',
                      color: '#B79C5C',
                      fontWeight: '600',
                      background: 'rgba(183, 156, 92, 0.1)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      marginLeft: '1rem'
                    }}>
                      {item.year}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    lineHeight: '1.4',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {item.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontSize: '0.8rem',
                      color: '#94a3b8',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      📍 {item.location}
                    </span>
                    <span style={{
                      fontSize: '0.8rem',
                      color: filterCategories.find(cat => cat.id === item.category)?.color || '#64748b',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {lightboxOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'lightboxEntrance 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards',
            backdropFilter: 'blur(20px)'
          }}
          onClick={closeLightbox}
        >
          <div 
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '1200px',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 50px 100px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(0, 0, 0, 0.7)',
                border: 'none',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onClick={closeLightbox}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#B79C5C';
                e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              ×
            </button>
            
            <div style={{ width: '100%', height: '70vh' }}>
              <img 
                src={currentImage?.image} 
                alt={currentImage?.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            <div style={{ 
              padding: '3rem', 
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{
                  color: '#2c3e50',
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  margin: 0,
                  flex: 1
                }}>
                  {currentImage?.title}
                </h3>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '1rem',
                    color: '#B79C5C',
                    fontWeight: '600',
                    background: 'rgba(183, 156, 92, 0.1)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px'
                  }}>
                    {currentImage?.year}
                  </span>
                  <span style={{
                    fontSize: '1rem',
                    color: '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    📍 {currentImage?.location}
                  </span>
                </div>
              </div>
              <p style={{
                marginBottom: '1.5rem',
                color: '#64748b',
                fontSize: '1.2rem',
                lineHeight: '1.7'
              }}>
                {currentImage?.description}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '1rem',
                  color: filterCategories.find(cat => cat.id === currentImage?.category)?.color || '#64748b',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  background: `rgba(${filterCategories.find(cat => cat.id === currentImage?.category)?.color.slice(1).match(/.{2}/g).map(hex => parseInt(hex, 16)).join(', ')}, 0.1)` || 'rgba(100, 116, 139, 0.1)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px'
                }}>
                  {filterCategories.find(cat => cat.id === currentImage?.category)?.icon} {currentImage?.category}
                </span>
              </div>
            </div>
            
            <div style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 2rem',
              zIndex: 10,
              pointerEvents: 'none'
            }}>
              <button 
                style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: 'none',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '1.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  pointerEvents: 'auto',
                  backdropFilter: 'blur(10px)'
                }}
                onClick={() => navigateLightbox('prev')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2c3e50';
                  e.currentTarget.style.transform = 'scale(1.1) rotateZ(-10deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                  e.currentTarget.style.transform = 'scale(1) rotateZ(0deg)';
                }}
              >
                ‹
              </button>
              
              <button 
                style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: 'none',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '1.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  pointerEvents: 'auto',
                  backdropFilter: 'blur(10px)'
                }}
                onClick={() => navigateLightbox('next')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2c3e50';
                  e.currentTarget.style.transform = 'scale(1.1) rotateZ(10deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                  e.currentTarget.style.transform = 'scale(1) rotateZ(0deg)';
                }}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @media (max-width: 1200px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)) !important;
            gap: 2rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .gallery-item {
            height: 300px !important;
          }
          
          .lightbox-image {
            height: 50vh !important;
          }
          
          h2 {
            font-size: 2.5rem !important;
          }
          
          .filter-buttons {
            gap: 1rem !important;
          }
          
          .filter-btn {
            padding: 0.75rem 1.5rem !important;
            font-size: 0.8rem !important;
          }
        }
        
        @media (max-width: 480px) {
          h2 {
            font-size: 2rem !important;
          }
          
          .gallery-item {
            height: 280px !important;
          }
          
          .filter-btn {
            padding: 0.6rem 1rem !important;
            font-size: 0.75rem !important;
          }
          
          .lightbox-content {
            padding: 2rem !important;
          }
        }
      `}</style>  
    </section>
  );
};

export default Gallery;