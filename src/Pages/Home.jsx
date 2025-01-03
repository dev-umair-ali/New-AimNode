import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import ChooseUs from "../Components/ChooseUs";
import Hero from "../Components/Hero";
import PortfolioSection from "../Components/PortfolioSection";
import Services from "../Components/Services";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    // Hero Section Animation on Scroll
    gsap.fromTo(
      ".hero",
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".hero",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none reverse", // Reverse animation when scrolling back
        },
      }
    );

    // Services Section Animation on Scroll
    gsap.fromTo(
      ".services",
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".services",
          start: "top 75%",
          end: "top 25%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    // Choose Us Section Animation on Scroll
    gsap.fromTo(
      ".choose-us",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".choose-us",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    // Portfolio Section Animation on Scroll
    gsap.fromTo(
      ".portfolio-section",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".portfolio-section",
          start: "top 60%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="hero">
        <Hero />
      </div>

      <div className="services">
        <Services />
      </div>

      <div className="choose-us">
        <ChooseUs />
      </div>

      <div className="portfolio-section">
        <PortfolioSection />
      </div>
    </div>
  );
}

export default Home;
