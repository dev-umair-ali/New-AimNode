import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { LuMonitorCheck } from "react-icons/lu";
import { GiOnTarget } from "react-icons/gi";
import { IoMdTrendingUp } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

import "../styles/Services.css";

const Services = () => {
  const services = [
    {
      icon: <FaLightbulb className="service-icon" />,
      title: "Application Design",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: < LuMonitorCheck className="service-icon" />,
      title: "Web Hosting",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <GiOnTarget className="service-icon" />,
      title: "Social Media",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <IoMdTrendingUp  className="service-icon" />,
      title: "SEO Optimization",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <FaCloud className="service-icon" />,
      title: "Cloud Server",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <FaShieldAlt className="service-icon" />,
      title: "Data Security",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Discover our comprehensive range of tech solutions</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
