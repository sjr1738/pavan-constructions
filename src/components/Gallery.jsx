import React, { useState, useEffect, useRef } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [galleryItems, setGalleryItems] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);
  const [titleAnimated, setTitleAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sample gallery items with working Unsplash images and specific image galleries
  const allItems = [
    {
      id: 1,
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Modern Villa Estate',
      description: 'Luxurious modern villa with panoramic views and contemporary design elements featuring premium finishes',
      year: '2023',
      location: 'Bengaluru',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 2,
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Corporate Office Tower',
      description: 'State-of-the-art corporate headquarters with sustainable design features and smart building technology',
      year: '2022',
      location: 'Hyderabad',
      gallery: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 3,
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Luxury Apartment Interior',
      description: 'High-end residential interior design with custom furniture and premium materials throughout the space',
      year: '2023',
      location: 'Chennai',
      gallery: [
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 4,
      category: 'renovation',
      image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Historic Building Renovation',
      description: 'Careful restoration of a heritage structure with modern amenities while preserving historical elements',
      year: '2021',
      location: 'Mangalore',
      gallery: [
        'https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581235707960-5a1d318a2a5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 5,
      category: 'layout',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Urban Planning Project',
      description: 'Comprehensive urban development plan with mixed-use spaces, green areas and sustainable infrastructure',
      year: '2022',
      location: 'Bengaluru',
      gallery: [
        'https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 6,
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Luxury Family Home',
      description: 'Custom-designed family residence with premium amenities, smart home features and sustainable elements',
      year: '2023',
      location: 'Hyderabad',
      gallery: [
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 7,
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Retail Complex Development',
      description: 'Modern shopping center with innovative design, optimized customer flow and integrated digital experiences',
      year: '2021',
      location: 'Chennai',
      gallery: [
        'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1604014056132-70b975a35d40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 8,
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Corporate Office Interior',
      description: 'Modern workspace design with ergonomic furniture, collaborative areas and productivity-focused layout',
      year: '2022',
      location: 'Mangalore',
      gallery: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 9,
      category: 'renovation',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Residential Remodeling',
      description: 'Complete home transformation with open concept design, updated systems and contemporary finishes',
      year: '2023',
      location: 'Bengaluru',
      gallery: [
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 10,
      category: 'layout',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Residential Community Planning',
      description: 'Master-planned residential community with integrated amenities, green spaces and pedestrian-friendly design',
      year: '2021',
      location: 'Hyderabad',
      gallery: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 11,
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Waterfront Residence',
      description: 'Exclusive waterfront property with panoramic views, custom architectural details and luxury amenities',
      year: '2022',
      location: 'Chennai',
      gallery: [
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 12,
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Mixed-Use Development',
      description: 'Integrated commercial and residential complex with shared amenities and efficient space utilization',
      year: '2023',
      location: 'Mangalore',
      gallery: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
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
        transform: translateY(50px) rotateX(45deg) scale(0.8);
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
        transform: translateY(30px) scale(0.9);
        filter: blur(5px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes galleryItemMagnetize {
      0% {
        opacity: 0;
        transform: translateY(40px) scale(0.9);
        filter: blur(8px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes backgroundFloat {
      0%, 100% {
        transform: translateY(0) rotate(0deg) scale(1);
      }
      25% {
        transform: translateY(-10px) rotate(1deg) scale(1.01);
      }
      50% {
        transform: translateY(-15px) rotate(0deg) scale(1.02);
      }
      75% {
        transform: translateY(-8px) rotate(-1deg) scale(1.01);
      }
    }

    @keyframes morphShape {
      0%, 100% {
        border-radius: 50% 40% 30% 70%;
        transform: rotate(0deg) scale(1);
      }
      25% {
        border-radius: 30% 60% 70% 40%;
        transform: rotate(90deg) scale(1.05);
      }
      50% {
        border-radius: 70% 30% 50% 60%;
        transform: rotate(180deg) scale(0.95);
      }
      75% {
        border-radius: 40% 70% 30% 50%;
        transform: rotate(270deg) scale(1.02);
      }
    }

    @keyframes lightboxEntrance {
      0% {
        opacity: 0;
        transform: scale(0.5);
        filter: blur(20px);
      }
      100% {
        opacity: 1;
        transform: scale(1);
        filter: blur(0px);
      }
    }

    @keyframes parallaxFloat {
      0%, 100% {
        transform: translateY(0px) translateX(0px);
      }
      50% {
        transform: translateY(-8px) translateX(2px);
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
        transform: translateY(-15px) scale(1.03) rotateX(-5deg);
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
        transform: translateY(20px) scale(0.95);
        filter: blur(3px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    /* Mobile-specific simpler animations */
    @media (max-width: 768px) {
      @keyframes wordReveal {
        0% {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes galleryItemMagnetize {
        0% {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    }
  `;

  // Mouse movement tracking for parallax effects (only on desktop)
  useEffect(() => {
    if (windowWidth < 768) return;
    
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
  }, [windowWidth]);

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
            setTimeout(() => setTitleAnimated(true), 300);
            setTimeout(() => {
              const itemsToAnimate = activeFilter === 'all' ? allItems : allItems.filter(item => item.category === activeFilter);
              itemsToAnimate.forEach((_, index) => {
                setTimeout(() => {
                  setAnimatedItems(prev => [...prev, index]);
                }, index * 100);
              });
            }, 1500);
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
    setCurrentProject(item);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };
  
  const navigateImage = (direction) => {
    if (!currentProject?.gallery) return;
    
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % currentProject.gallery.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + currentProject.gallery.length) % currentProject.gallery.length);
    }
  };

  const getCurrentImage = () => {
    if (currentProject?.gallery) {
      return currentProject.gallery[currentImageIndex];
    }
    return currentProject?.image;
  };

  const sectionStyle = {
    padding: windowWidth < 768 ? '4rem 0' : '8rem 0',
    background: `
      radial-gradient(ellipse at top left, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.95) 40%),
      radial-gradient(ellipse at bottom right, rgba(241, 245, 249, 0.9) 0%, rgba(226, 232, 240, 0.8) 60%),
      linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)
    `,
    position: 'relative',
    overflow: 'hidden',
    minHeight: windowWidth < 768 ? 'auto' : '100vh'
  };

  // Advanced floating elements with parallax (only on desktop)
  const floatingElements = windowWidth >= 768 ? (
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
      {[...Array(6)].map((_, i) => (
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
  ) : null;

  const containerStyle = {
    maxWidth: '1600px',
    margin: '0 auto',
    padding: windowWidth < 768 ? '0 1rem' : '0 3rem',
    position: 'relative',
    zIndex: 2
  };

  const titleSectionStyle = {
    textAlign: 'center',
    marginBottom: windowWidth < 768 ? '3rem' : '5rem',
    position: 'relative',
    perspective: '1200px'
  };

  const titleStyle = {
    fontSize: 
      windowWidth < 480 ? '2rem' : 
      windowWidth < 768 ? '2.5rem' : 
      'clamp(3.5rem, 6vw, 5.5rem)',
    fontWeight: '900',
    lineHeight: '1.1',
    margin: '0 0 2rem 0',
    perspective: '1200px',
    position: 'relative',
    display: 'inline-block'
  };

  const titleWordStyle = (wordIndex) => ({
    display: 'inline-block',
    marginRight: windowWidth < 768 ? '15px' : '25px',
    opacity: titleAnimated ? 1 : 0,
    transform: titleAnimated ? 'translateY(0) rotateX(0deg) scale(1)' : 'translateY(50px) rotateX(45deg) scale(0.8)',
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #B79C5C 60%, #3498db 100%)',
    backgroundSize: '400% 400%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: titleAnimated ? `wordReveal 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${0.8 + (wordIndex * 0.2)}s, gradientShift 6s ease-in-out infinite` : 'none',
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
    animation: titleAnimated ? 'titleUnderline 1.5s ease-out forwards 2s' : 'none',
    width: '0'
  };

  const subtitleStyle = {
    fontSize: windowWidth < 768 ? '1.1rem' : '1.3rem',
    color: '#64748b',
    fontWeight: '300',
    letterSpacing: windowWidth < 768 ? '1px' : '2px',
    lineHeight: '1.8',
    maxWidth: '700px',
    margin: '0 auto',
    padding: windowWidth < 768 ? '0 1rem' : '0',
    opacity: titleAnimated ? 1 : 0,
    animation: titleAnimated ? 'subtitleFadeUp 1s ease-out forwards 2.3s' : 'none'
  };

  const filtersContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: windowWidth < 768 ? '0.8rem' : '1.5rem',
    marginBottom: windowWidth < 768 ? '2rem' : '4rem',
    opacity: titleAnimated ? 1 : 0,
    animation: titleAnimated ? 'filterButtonFloat 1s ease-out forwards 2.6s' : 'none'
  };

  const filterButtonStyle = (category, isActive, index) => ({
    padding: windowWidth < 480 ? '0.6rem 1rem' : windowWidth < 768 ? '0.75rem 1.5rem' : '1rem 2rem',
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
    fontSize: windowWidth < 480 ? '0.75rem' : windowWidth < 768 ? '0.8rem' : '0.9rem',
    backdropFilter: 'blur(20px)',
    display: 'flex',
    alignItems: 'center',
    gap: windowWidth < 768 ? '4px' : '8px',
    animation: isActive ? 'filterGlow 2s ease-in-out infinite' : 'none',
    transform: `translateY(${isActive ? -3 : 0}px)`,
    animationDelay: `${index * 0.1}s`
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 
      windowWidth < 768 ? '1fr' :
      windowWidth < 1024 ? 'repeat(2, 1fr)' :
      windowWidth < 1400 ? 'repeat(3, 1fr)' :
      'repeat(auto-fill, minmax(380px, 1fr))',
    gap: windowWidth < 768 ? '2rem' : '3rem',
    marginTop: windowWidth < 768 ? '2rem' : '3rem',
    perspective: '1200px'
  };

  const galleryItemStyle = (index, isAnimated) => ({
    position: 'relative',
    borderRadius: windowWidth < 768 ? '20px' : '24px',
    overflow: 'hidden',
    boxShadow: '0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)',
    cursor: 'pointer',
    height: windowWidth < 480 ? '280px' : windowWidth < 768 ? '320px' : '350px',
    background: 'rgba(255, 255, 255, 0.9)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(20px)',
    transform: isAnimated ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
    opacity: isAnimated ? 1 : 0,
    animation: isAnimated ? `galleryItemMagnetize 1s cubic-bezier(0.23, 1, 0.32, 1) forwards ${index * 0.1}s` : 'none',
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
    padding: windowWidth < 768 ? '1rem' : '2rem',
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
    padding: windowWidth < 768 ? '1rem' : '1.5rem',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderTop: '1px solid rgba(183, 156, 92, 0.2)'
  };

  const overlayTitleStyle = {
    fontSize: windowWidth < 768 ? '1.2rem' : '1.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    transform: 'translateY(20px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '0.1s'
  };

  const overlayDescStyle = {
    fontSize: windowWidth < 768 ? '0.9rem' : '1rem',
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
    animation: windowWidth >= 768 ? 'shimmerEffect 3s ease-in-out infinite' : 'none',
    zIndex: 3
  };

  const handleCardInteraction = (e, index, isEntering) => {
    const card = e.currentTarget;
    const img = card.querySelector('img');
    const overlay = card.querySelector('.overlay');
    const overlayElements = card.querySelectorAll('.overlay-element');
    const shimmer = card.querySelector('.shimmer');
    
    if (isEntering) {
      if (windowWidth >= 768) {
        card.style.animation = 'cardHoverLift 0.6s ease-out forwards';
        if (img) img.style.transform = 'scale(1.15) rotate(3deg)';
        if (shimmer) shimmer.style.animation = 'shimmerEffect 1s ease-out';
      } else {
        // Simple mobile interaction
        card.style.transform = 'scale(0.98)';
      }
      
      if (overlay) overlay.style.opacity = '1';
      overlayElements.forEach(el => {
        el.style.transform = 'translateY(0)';
      });
    } else {
      if (windowWidth >= 768) {
        card.style.animation = 'none';
        card.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
        card.style.boxShadow = '0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)';
        if (img) img.style.transform = 'scale(1) rotate(0deg)';
      } else {
        card.style.transform = 'scale(1)';
      }
      
      if (overlay) overlay.style.opacity = '0';
      overlayElements.forEach(el => {
        el.style.transform = 'translateY(20px)';
      });
    }
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
                if (windowWidth >= 768 && activeFilter !== category.id) {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(44, 62, 80, 0.15), 0 10px 25px rgba(183, 156, 92, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(183, 156, 92, 0.5)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  e.currentTarget.style.color = category.color;
                }
              }}
              onMouseLeave={(e) => {
                if (windowWidth >= 768 && activeFilter !== category.id) {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(44, 62, 80, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(183, 156, 92, 0.2)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.color = '#64748b';
                }
              }}
            >
              <span style={{ fontSize: windowWidth < 768 ? '1rem' : '1.1rem' }}>{category.icon}</span>
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
                onMouseEnter={(e) => handleCardInteraction(e, index, true)}
                onMouseLeave={(e) => handleCardInteraction(e, index, false)}
                onTouchStart={(e) => handleCardInteraction(e, index, true)}
                onTouchEnd={(e) => handleCardInteraction(e, index, false)}
              >
                <div style={shimmerStyle} className="shimmer"></div>
                <img src={item.image} alt={item.title} style={imageStyle} />
                <div className="overlay" style={overlayStyle}>
                  <h3 className="overlay-element" style={overlayTitleStyle}>
                    {item.gallery ? `View Gallery (${item.gallery.length} images)` : 'View Project'}
                  </h3>
                  <p className="overlay-element" style={overlayDescStyle}>
                    {item.gallery ? 'Click to explore image gallery' : 'Click to explore details'}
                  </p>
                </div>
                
                <div style={cardInfoStyle}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem',
                    flexDirection: windowWidth < 480 ? 'column' : 'row',
                    gap: windowWidth < 480 ? '0.5rem' : '0'
                  }}>
                    <h3 style={{
                      fontSize: windowWidth < 768 ? '1.1rem' : '1.3rem',
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
                      marginLeft: windowWidth < 480 ? '0' : '1rem'
                    }}>
                      {item.year}
                    </span>
                  </div>
                  <p style={{
                    fontSize: windowWidth < 768 ? '0.8rem' : '0.9rem',
                    color: '#64748b',
                    lineHeight: '1.4',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {item.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: windowWidth < 480 ? 'column' : 'row',
                    gap: windowWidth < 480 ? '0.5rem' : '0'
                  }}>
                    <span style={{
                      fontSize: '0.8rem',
                      color: '#94a3b8',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                     {item.location}
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
            backdropFilter: 'blur(20px)',
            padding: windowWidth < 768 ? '1rem' : '2rem'
          }}
          onClick={closeLightbox}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: windowWidth < 768 ? '100%' : '1200px',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: windowWidth < 768 ? '16px' : '24px',
              overflow: 'hidden',
              boxShadow: '0 50px 100px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxHeight: '90vh'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              style={{
                position: 'absolute',
                top: windowWidth < 768 ? '1rem' : '1.5rem',
                right: windowWidth < 768 ? '1rem' : '1.5rem',
                background: 'rgba(0, 0, 0, 0.7)',
                border: 'none',
                width: windowWidth < 768 ? '50px' : '60px',
                height: windowWidth < 768 ? '50px' : '60px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: windowWidth < 768 ? '1.2rem' : '1.5rem',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onClick={closeLightbox}
              onMouseEnter={(e) => {
                if (windowWidth >= 768) {
                  e.currentTarget.style.background = '#B79C5C';
                  e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
                }
              }}
              onMouseLeave={(e) => {
                if (windowWidth >= 768) {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }
              }}
            >
              ×
            </button>
            
            <div style={{ 
              width: '100%', 
              height: windowWidth < 768 ? '50vh' : '70vh',
              maxHeight: '400px'
            }}>
              <img 
                src={getCurrentImage()} 
                alt={currentProject?.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            <div style={{ 
              padding: windowWidth < 768 ? '1.5rem' : '3rem', 
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              maxHeight: windowWidth < 768 ? '40vh' : 'auto',
              overflowY: 'auto'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start', 
                marginBottom: '1rem',
                flexDirection: windowWidth < 768 ? 'column' : 'row',
                gap: windowWidth < 768 ? '1rem' : '0'
              }}>
                <h3 style={{
                  color: '#2c3e50',
                  fontSize: windowWidth < 768 ? '1.5rem' : '2.2rem',
                  fontWeight: '700',
                  margin: 0,
                  flex: 1
                }}>
                  {currentProject?.title}
                </h3>
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                  {currentProject?.gallery && (
                    <span style={{
                      fontSize: windowWidth < 768 ? '0.9rem' : '1rem',
                      color: '#3498db',
                      fontWeight: '600',
                      background: 'rgba(52, 152, 219, 0.1)',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px'
                    }}>
                      {currentImageIndex + 1} / {currentProject.gallery.length}
                    </span>
                  )}
                  <span style={{
                    fontSize: windowWidth < 768 ? '0.9rem' : '1rem',
                    color: '#B79C5C',
                    fontWeight: '600',
                    background: 'rgba(183, 156, 92, 0.1)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px'
                  }}>
                    {currentProject?.year}
                  </span>
                  <span style={{
                    fontSize: windowWidth < 768 ? '0.9rem' : '1rem',
                    color: '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    📍 {currentProject?.location}
                  </span>
                </div>
              </div>
              <p style={{
                marginBottom: '1.5rem',
                color: '#64748b',
                fontSize: windowWidth < 768 ? '1rem' : '1.2rem',
                lineHeight: '1.7'
              }}>
                {currentProject?.description}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: windowWidth < 768 ? '0.9rem' : '1rem',
                  color: filterCategories.find(cat => cat.id === currentProject?.category)?.color || '#64748b',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  background: `rgba(${filterCategories.find(cat => cat.id === currentProject?.category)?.color.slice(1).match(/.{2}/g).map(hex => parseInt(hex, 16)).join(', ')}, 0.1)` || 'rgba(100, 116, 139, 0.1)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px'
                }}>
                  {filterCategories.find(cat => cat.id === currentProject?.category)?.icon} {currentProject?.category}
                </span>
              </div>
            </div>
            
            {/* Navigation arrows - only show for projects with galleries */}
            {currentProject?.gallery && (
              <div style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                padding: windowWidth < 768 ? '0 1rem' : '0 2rem',
                zIndex: 10,
                pointerEvents: 'none'
              }}>
                <button 
                  style={{
                    background: 'rgba(0, 0, 0, 0.7)',
                    border: 'none',
                    width: windowWidth < 768 ? '50px' : '70px',
                    height: windowWidth < 768 ? '50px' : '70px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: windowWidth < 768 ? '1.2rem' : '1.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    pointerEvents: 'auto',
                    backdropFilter: 'blur(10px)'
                  }}
                  onClick={() => navigateImage('prev')}
                  onMouseEnter={(e) => {
                    if (windowWidth >= 768) {
                      e.currentTarget.style.background = '#2c3e50';
                      e.currentTarget.style.transform = 'scale(1.1) rotateZ(-10deg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (windowWidth >= 768) {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                      e.currentTarget.style.transform = 'scale(1) rotateZ(0deg)';
                    }
                  }}
                >
                  ‹
                </button>
                
                <button 
                  style={{
                    background: 'rgba(0, 0, 0, 0.7)',
                    border: 'none',
                    width: windowWidth < 768 ? '50px' : '70px',
                    height: windowWidth < 768 ? '50px' : '70px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: windowWidth < 768 ? '1.2rem' : '1.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    pointerEvents: 'auto',
                    backdropFilter: 'blur(10px)'
                  }}
                  onClick={() => navigateImage('next')}
                  onMouseEnter={(e) => {
                    if (windowWidth >= 768) {
                      e.currentTarget.style.background = '#2c3e50';
                      e.currentTarget.style.transform = 'scale(1.1) rotateZ(10deg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (windowWidth >= 768) {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                      e.currentTarget.style.transform = 'scale(1) rotateZ(0deg)';
                    }
                  }}
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
