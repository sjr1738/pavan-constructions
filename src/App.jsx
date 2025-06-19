import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero';
import About from './components/About';
import Deal from './components/Deal';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Pricing from './components/Pricing';
import BookNowBanner from './components/BookNowBanner';
import WorkProcess from './components/WorkProcess';
import Record from './components/Records';  
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Popup from './components/Popup';
import Admin from './components/Admin';
import AdminDashboard from './components/AdminDashboard';

// Import new page components for navbar navigation
import ServicesPage from './components/ServicesPage';
import PricingPage from './components/PricingPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage'; // NEW: Import the ContactPage component
import AdminProjects from './components/AdminProjects';

import './App.css';
import DataList from './components/DataList.jsx';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      <div className="app">
        <Navbar scrolled={scrolled} />
        
        <Routes>
          {/* Home Page - Original Complete Website */}
          <Route path="/" element={
            <>
              <Hero openPopup={openPopup} />
              <About openPopup={openPopup} />
              <Services />
              <Pricing openPopup={openPopup} />
              <Deal openPopup={openPopup}/>
              <AboutUs openPopup={openPopup} />
              <BookNowBanner />
              <WorkProcess />
              <Record />
              <Testimonials />
              <Gallery />
              <Contact />
              <Footer />
            </>
          } />
          
          {/* About Page */}
          <Route path="/about" element={
            <>
              <div style={{ paddingTop: '70px' }}>
                <AboutUs openPopup={openPopup} />
                <About openPopup={openPopup} />
                <WorkProcess />
                <Record />
                <BookNowBanner />
              </div>
              <Footer />
            </>
          } />
          
          {/* Services Page - NEW DEDICATED PAGE */}
          <Route path="/services" element={
            <>
              <ServicesPage openPopup={openPopup} />
              <Footer />
            </>
          } />
          
          {/* Pricing Page - NEW DEDICATED PAGE */}
          <Route path="/pricing" element={
            <>
              <PricingPage openPopup={openPopup} />
              <Footer />
            </>
          } />
          
          {/* Gallery Page - NEW DEDICATED PAGE */}
          <Route path="/gallery" element={
            <>
              <GalleryPage />
              <Footer />
            </>
          } />
          
          {/* Contact Page - UPDATED: Now uses ContactPage component */}

          {/* Data List Page - Shows all saved data */}
          <Route path="/data-list" element={<DataList />} />
          <Route path="/contact" element={
            <>
              <ContactPage />
              <Footer />
            </>
          } />

          {/* Admin Page */}
          <Route path="/admin" element={<Admin />} />

          {/* Admin Project Management (full CRUD, image/data) */}
          <Route path="/admin/projects" element={<AdminProjects />} />

          {/* Admin Dashboard Page */}
          <Route path="/admin-dashboard" element={
            <>
              <div style={{ paddingTop: '70px' }}>
                <AdminDashboard />
              </div>
              <Footer />
            </>
          } />

          {/* Catch-all route - shows complete website for any unknown routes */}
          <Route path="*" element={
            <>
              <Hero openPopup={openPopup} />
              <About openPopup={openPopup} />
              <Services />
              <Pricing openPopup={openPopup} />
              <Deal openPopup={openPopup}/>
              <AboutUs openPopup={openPopup} />
              <BookNowBanner />
              <WorkProcess />
              <Record />
              <Testimonials />
              <Gallery />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
        
        {showPopup && <Popup closePopup={closePopup} />}
      </div>
    </Router>
  );
}

export default App;


