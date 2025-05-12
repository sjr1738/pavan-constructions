import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AboutUs = ({ openPopup }) => {
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
    
    const section = document.getElementById("aboutus-section");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section id="aboutus-section" className="w-full bg-black py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #111827 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-start justify-between">
          {/* Text Content - Left Side */}
          <div className="w-3/5 pr-4">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-6xl font-bold mb-8 text-blue-500 border-l-4 border-blue-600 pl-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{ color: "#3b82f6" }}
              >
                About us
              </motion.h2>
              
              <div className="text-white">
                <p className="mb-4 text-lg">
                  We at Pavan techno construction, understand that building your dream home is a major investment. Hence we prioritize a cost effective construction process with high quality outcomes, whether it's a residential project, commercial project, villa, Hospital, school project.
                </p>
                
                <p className="mb-4 text-lg">
                  We are building a foundation of trust, ethics and shared success. For over 8 years we have been dedicated to exceeding client expectations. We're driven by passion for our work and a commitment to delivering outstanding customer experiences, every time.
                </p>
                
                <p className="mb-4 text-lg">
                  We specialize in a wide range of construction projects, bringing your vision to life through craftsmanship and attention to details. We are also working with the most valuable department in India (M.E.S) with good reputations.
                </p>
                
                <p className="text-lg">
                  At pavan techno construction, we promise to approach every project with passion and dedication, recognizing that the buildings we create are not just structures, but the backdrops for our client's lives.
                </p>
              </div>
              
              <motion.button
                className="mt-8 px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg font-bold transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openPopup}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
          
          {/* Image - Right Side - Height matches text */}
          <div className="w-2/5 flex justify-end h-full">
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 300 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-2xl h-full"
              style={{ width: "370px" }}
            >
              <img 
                src="/images/why.jpg" 
                alt="Construction Building" 
                className="w-full h-full object-cover"
                style={{ minHeight: "500px" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;