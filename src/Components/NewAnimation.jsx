import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../styles/ServicesSection.css";

const ServicesSection = () => {
  return (
    <section className="services-section-secw">
      <div className="services-container-secw">
        <div className="services-animation-wrapper-secw">
          <DotLottieReact
            src="https://lottie.host/83e9d362-9764-4066-8120-323b531d5df3/CcZS89G2nm.lottie"
            loop
            autoplay
            className="services-lottie-secw"
            renderSettings={{
              preserveAspectRatio: "xMidYMid meet",
              clearCanvas: true,
              progressiveLoad: true,
              hideOnTransparent: true,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
