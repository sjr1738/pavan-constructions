import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Deal = ({ openPopup }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById("deal-section");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section id="deal-section" className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12">
          <motion.h2 
            className="animated-title text-4xl font-bold relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600">Very</span> Good Deal For <span className="text-blue-600">House</span>
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"
              initial={{ width: 0 }}
              animate={{ width: isVisible ? '100%' : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.span>
          </motion.h2>
          
          <motion.p 
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Are you looking for a high-quality, affordable home built with precision and excellence? Pavan Techno Constructions brings you the best deals on villas, apartments, and renovations with:
          </motion.p>
        </div>
        
        {/* Images side by side in same line */}
        <div className="flex flex-row gap-6 mt-12">
          <motion.div 
            className="w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/images/h8.jpg" 
              alt="House Exterior" 
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div 
            className="w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/images/d-2.jpg" 
              alt="House Interior" 
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
        
        <motion.ul 
          className="mt-12 space-y-4 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
              <span className="text-white text-sm">•</span>
            </div>
            <span className="ml-3 text-gray-700">
              <strong className="text-blue-600">Superior Quality Construction</strong> - Only the best raw materials used
            </span>
          </li>
          
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
              <span className="text-white text-sm">•</span>
            </div>
            <span className="ml-3 text-gray-700">
              <strong className="text-blue-600">Perfect Planning & Execution</strong> - Designed by a highly qualified team
            </span>
          </li>
          
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
              <span className="text-white text-sm">•</span>
            </div>
            <span className="ml-3 text-gray-700">
              <strong className="text-blue-600">On-Time Delivery</strong> - Because we value your time
            </span>
          </li>
          
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
              <span className="text-white text-sm">•</span>
            </div>
            <span className="ml-3 text-gray-700">
              <strong className="text-blue-600">Affordable Innovation</strong> - Stylish homes at unbeatable prices
            </span>
          </li>
          
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
              <span className="text-white text-sm">•</span>
            </div>
            <span className="ml-3 text-gray-700">
              <strong className="text-blue-600">Customer Satisfaction Guaranteed</strong> - We build homes that match your dreams
            </span>
          </li>
        </motion.ul>
        
        <div className="mt-12 text-center">
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-5 px-14 rounded-full shadow-xl transition-all duration-300 btn btn-primary"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
              backgroundColor: "#2563eb" 
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ 
              backgroundImage: "linear-gradient(to right, #d8512c, #d8512c)", 
              letterSpacing: "0.5px",
              transform: "translateZ(0)"
            }}
            onClick={openPopup}
          >
            Get Your Deal Today
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Deal;
