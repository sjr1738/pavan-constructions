import React, { useRef, useEffect } from 'react';

const Record = () => {
  const sectionRef = useRef(null);
  const counterRef = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            if (headingRef.current) {
              headingRef.current.classList.add('heading-visible');
            }
            startCounting();
          }
        });
      },
      { threshold: 0.3 }
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

  const startCounting = () => {
    const counters = counterRef.current;
    counters.forEach((counter) => {
      if (!counter) return;
      const targetValue = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const step = targetValue / (duration / 30); // Update every 30ms
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < targetValue) {
          counter.textContent = Math.ceil(current);
          setTimeout(updateCounter, 30);
        } else {
          counter.textContent = targetValue;
        }
      };

      updateCounter();
    });
  };

  const records = [
    {
      icon: "fa-solid fa-calendar-day",
      value: 9,
      label: "YEARS LEGACY",
      suffix: "+"
    },
    {
      icon: "fa-solid fa-ruler-combined",
      value: 6,
      label: "LAKHS SQ.FT DELIVERED",
      suffix: "+"
    },
    {
      icon: "fa-solid fa-briefcase",
      value: 30,
      label: "Projects Delivered",
      suffix: "+"
    },
    {
      icon: "fa-solid fa-city",
      value: 5,
      label: "Cities",
      suffix: "+"
    }
  ];

  return (
    <section className="record-section" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <div className="heading-container" ref={headingRef}>
            <h1 className="main-heading">OUR TRACK RECORD</h1>
            <div className="heading-underline"></div>
            <p className="heading-subtitle">Excellence in Numbers</p>
          </div>
        </div>
        <div className="record-container">
          {records.map((record, index) => (
            <div key={index} className="record-item">
              <div className="record-icon">
                <i className={record.icon}></i>
              </div>
              <div className="record-detail">
                <h3 className="record-value">
                  <span
                    ref={el => {
                      if (el) counterRef.current[index] = el;
                    }}
                    data-target={record.value}
                  >
                    0
                  </span>
                  {record.suffix}
                </h3>
                <h5 className="record-label">{record.label}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .record-section {
          padding: 5rem 0;
          background-color: #000000;
          color: #ffffff;
          overflow: hidden;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .heading-container {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }
        
        .heading-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .main-heading {
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          color: #ffffff;
          text-transform: uppercase;
          position: relative;
        }
        
        .heading-underline {
          height: 4px;
          width: 0;
          background: linear-gradient(90deg, transparent, #007bff, transparent);
          margin: 0 auto;
          transition: width 1.5s ease;
        }
        
        .heading-visible .heading-underline {
          width: 100px;
        }
        
        .heading-subtitle {
          margin-top: 1rem;
          font-size: 1.2rem;
          color: #007bff;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 0.5s;
        }
        
        .heading-visible .heading-subtitle {
          opacity: 0.9;
          transform: translateY(0);
        }
        
        .record-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .record-item {
          flex: 1;
          min-width: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          animation: recordItemAppear 0.8s forwards;
        }
        
        .record-item:nth-child(1) { animation-delay: 0.5s; }
        .record-item:nth-child(2) { animation-delay: 0.7s; }
        .record-item:nth-child(3) { animation-delay: 0.9s; }
        .record-item:nth-child(4) { animation-delay: 1.1s; }
        
        @keyframes recordItemAppear {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .record-icon {
          width: 80px;
          height: 80px;
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 123, 255, 0.2);
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
          transition: all 0.3s ease;
          transform: scale(0.8);
          opacity: 0;
          animation: iconPop 0.5s forwards;
        }
        
        .record-icon:hover {
          transform: translateY(-5px);
          background-color: rgba(0, 123, 255, 0.3);
        }
        
        .record-item:nth-child(1) .record-icon { animation-delay: 0.6s; }
        .record-item:nth-child(2) .record-icon { animation-delay: 0.8s; }
        .record-item:nth-child(3) .record-icon { animation-delay: 1.0s; }
        .record-item:nth-child(4) .record-icon { animation-delay: 1.2s; }
        
        @keyframes iconPop {
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .record-icon i {
          font-size: 2rem;
          color: #ffffff;
        }
        
        .record-value {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }
        
        .record-label {
          font-size: 1rem;
          text-transform: uppercase;
          color: #007bff;
          opacity: 0.9;
          letter-spacing: 1px;
        }
        
        @media (max-width: 992px) {
          .record-container {
            gap: 1.5rem;
          }
          .main-heading {
            font-size: 2.2rem;
          }
        }
        
        @media (max-width: 768px) {
          .record-item {
            flex-basis: calc(50% - 1.5rem);
          }
          .main-heading {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 576px) {
          .record-item {
            flex-basis: 100%;
          }
          .main-heading {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Record;