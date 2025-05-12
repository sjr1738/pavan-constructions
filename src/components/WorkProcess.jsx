import React, { useRef, useEffect } from 'react';
import './WorkProcess.css';

const WorkProcess = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            const steps = entry.target.querySelectorAll('.work-step');
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('animated');
              }, 300 * index);
            });
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

  const workSteps = [
    {
      icon: "https://assurancedevelopers.com/wp-content/uploads/2024/07/5124556-1-1.png",
      title: "Consultation & Planning",
      description: "We start by understanding your vision, then craft a plan with blueprints and timelines."
    },
    {
      icon: "https://assurancedevelopers.com/wp-content/uploads/2024/07/19198827-1.png",
      title: "Design & Development",
      description: "Our designers and engineers turn your ideas into a functional, beautiful design, meeting every detail of your expectations."
    },
    {
      icon: "https://assurancedevelopers.com/wp-content/uploads/2024/07/20945160-1-2.png",
      title: "Construction & Handover",
      description: "Our team builds with precision and quality, then thoroughly inspects and hands over the finished project."
    }
  ];

  return (
    <section className="work-process-section" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2 className="animated-title">How We Work?</h2>
        </div>
        <div className="work-process-container">
          {workSteps.map((step, index) => (
            <div key={index} className="work-step">
              <div className="step-icon">
                <img src={step.icon} alt={step.title} />
                {index < workSteps.length - 1 && <div className="step-connector"></div>}
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
