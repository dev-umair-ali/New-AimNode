import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../styles/ServicesSection.css"; // Add a CSS file for custom styling

const ServicesSection = () => {
  return (
    <section className="services-section-secw">
      <div className="services-animation-secw">
        <DotLottieReact
          src="https://lottie.host/83e9d362-9764-4066-8120-323b531d5df3/CcZS89G2nm.lottie"
          loop
          autoplay
        />
      </div>
    </section>
  );
};

export default ServicesSection;
