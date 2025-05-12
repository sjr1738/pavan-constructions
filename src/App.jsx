import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
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
import './App.css';

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
    <div className="app">
      <Navbar scrolled={scrolled} />
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
      {showPopup && <Popup closePopup={closePopup} />}
    </div>
  );
}

export default App;