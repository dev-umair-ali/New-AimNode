// src/components/Portfolio.jsx
'use client'

import React, { useEffect } from 'react';
import { FiMonitor, FiPhone, FiDatabase } from "react-icons/fi"; // Correct Feather icons
import { FaCode, FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa"; // Correct FontAwesome icons

import '../styles/portfolio-main.css';

const Portfolio = () => {
  useEffect(() => {
    // Import GSAP dynamically to avoid SSR issues
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      try {
        gsap.registerPlugin(ScrollTrigger);

        // Hero animations
        gsap.set(['.main-hero-title', '.main-hero-subtitle'], { 
          opacity: 1,
          y: 0 
        });

        // Animate services
        const services = document.querySelectorAll('.main-service-card');
        services.forEach((card) => {
          gsap.set(card, { opacity: 1 });
        });

        // Animate projects
        const projects = document.querySelectorAll('.main-project-card');
        projects.forEach((card) => {
          gsap.set(card, { opacity: 1 });
        });

        // Animate stats
        const stats = document.querySelectorAll('.main-stat-card');
        stats.forEach((stat) => {
          gsap.set(stat, { opacity: 1 });
        });

        // Stats counter animation
        const statNumbers = document.querySelectorAll('.main-stat-number');
        statNumbers.forEach((stat) => {
          gsap.fromTo(stat, { innerText: 0 }, {
            innerText: stat.dataset.target, // Data target holds the final value
            duration: 2,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: stat,
              start: "top 80%", // Trigger when the stat is 80% in view
              toggleActions: "play none none none",
            },
            snap: { innerText: 1 },
            onUpdate: () => {
              stat.innerText = Math.floor(stat.innerText);
            }
          });
        });

        // Animate contact form
        gsap.set('.main-contact-container', { opacity: 1 });

      } catch (error) {
        console.error('GSAP animation error:', error);
      }
    };

    loadGSAP();
  }, []);

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced data analytics platform with machine learning capabilities',
      image: 'https://cdn.pixabay.com/photo/2017/08/11/10/54/industry-2630319_640.jpg',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Smart Home Automation System',
      description: 'IoT-based home automation solution with real-time Monitoring',
      image: 'https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_1280.jpg',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Blockchain Supply Chain',
      description: 'Decentralized supply chain management system using blockchain',
      image: 'https://cdn.pixabay.com/photo/2013/01/26/04/50/man-76202_640.jpg',
      github: 'https://github.com',
      demo: 'https://demo.com'
    }, {
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced data analytics platform with machine learning capabilities',
      image: 'https://cdn.pixabay.com/photo/2017/08/11/10/54/industry-2630319_640.jpg',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Smart Home Automation System',
      description: 'IoT-based home automation solution with real-time Monitoring',
      image: 'https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_1280.jpg',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Blockchain Supply Chain',
      description: 'Decentralized supply chain management system using blockchain',
      image: 'https://cdn.pixabay.com/photo/2013/01/26/04/50/man-76202_640.jpg',
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
    
  ];

  return (
    <div className="main-portfolio-wrapper">
      <div className="main-bg-animation"></div>
      
      <section className="main-hero-section">
        <div className="main-hero-content">
          <h1 className="main-hero-title">Innovating the Future of Technology</h1>
          <p className="main-hero-subtitle">
            We transform complex challenges into elegant digital solutions, pushing the boundaries
            of what's possible in software development.
          </p>
        </div>
      </section>

      <section className="main-services-section">
        <h2 className="main-section-title">Our Expertise</h2>
        <div className="main-services-grid">
          <div className="main-service-card">
            <FiMonitor className="main-service-icon" />
            <h3 className="main-service-title">Web Development</h3>
            <p>Building scalable, high-performance web applications with cutting-edge technologies.</p>
          </div>
          <div className="main-service-card">
            <FaCode className="main-service-icon" />
            <h3 className="main-service-title">Software Architecture</h3>
            <p>Designing robust and scalable software architectures for complex systems.</p>
          </div>
          <div className="main-service-card">
            <FiDatabase className="main-service-icon" />
            <h3 className="main-service-title">Cloud Solutions</h3>
            <p>Implementing secure and efficient cloud infrastructure for modern applications.</p>
          </div>
          <div className="main-service-card">
            <FiPhone className="main-service-icon" />
            <h3 className="main-service-title">Mobile Development</h3>
            <p>Creating intuitive and powerful mobile applications for iOS and Android.</p>
          </div>
        </div>
      </section>

      <section className="main-projects-section">
        <h2 className="main-section-title">Featured Projects</h2>
        <div className="main-projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="main-project-card">
              <img src={project.image} alt={project.title} className="main-project-image" />
              <div className="main-project-overlay">
                <h3 className="main-project-title">{project.title}</h3>
                <p>{project.description}</p>
                <div className="main-project-links">
                  <a href={project.github} className="main-project-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="main-project-link" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkSquareAlt size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="main-stats-section">
        <div className="main-stats-grid">
          <div className="main-stat-card">
            <div className="main-stat-number" data-target="100">0</div>
            <p>Projects Completed</p>
          </div>
          <div className="main-stat-card">
            <div className="main-stat-number" data-target="50">0</div>
            <p>Happy Clients</p>
          </div>
          <div className="main-stat-card">
            <div className="main-stat-number" data-target="5">0</div>
            <p>Years Experience</p>
          </div>
          <div className="main-stat-card">
            <div className="main-stat-number" data-target="24">0</div>
            <p>Support</p>
          </div>
        </div>
      </section>

      <section className="main-contact-section">
        <h2 className="main-section-title">Get In Touch</h2>
        <div className="main-contact-container">
          <form className="main-contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="main-form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="main-input-field"
                required
              />
            </div>
            <div className="main-form-group">
              <input
                type="email"
                placeholder="Your Email"
                className="main-input-field"
                required
              />
            </div>
            <div className="main-form-group">
              <textarea
                placeholder="Your Message"
                className="main-input-field"
                rows={6}
                required
              ></textarea>
            </div>
            <button type="submit" className="main-submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
