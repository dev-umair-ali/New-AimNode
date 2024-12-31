import React from "react";
import {
  FaFileAlt,
  FaLightbulb,
  FaDesktop,
  FaDollarSign,
  FaCog,
  FaHeadphones,
} from "react-icons/fa";
// import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import "../styles/ChooseUs.css";

const ChooseUs = () => {
  const features = [
    {
      icon: <FaFileAlt className="feature-icon" />,
      title: "Experience",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <FaLightbulb className="feature-icon" />,
      title: "Products",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <FaDesktop className="feature-icon" />,
      title: "Approach",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <FaDollarSign className="feature-icon" />,
      title: "Pricing",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <FaCog className="feature-icon" />,
      title: "Delivery",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <FaHeadphones className="feature-icon" />,
      title: "Support",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="choose-us">
      <div className="choose-us-container">
        <div className="choose-us-header">
          <h2>Why Choose Us</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

        <div className="features-container">
          <div className="features-left">
            {features.slice(0, 3).map((feature, index) => (
              <div className="feature-item" key={index}>
                <div className="feature-icon-wrapper">{feature.icon}</div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="central-image">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/20/03/06/ai-generated-8644502_1280.jpg"
              alt="Digital transformation illustration"
              className="choose-us-illustration"
            />
          </div>

          <div className="features-right">
            {features.slice(3).map((feature, index) => (
              <div className="feature-item" key={index + 3}>
                <div className="feature-icon-wrapper">{feature.icon}</div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
