import "../Styles/Hero.css";
import React, { useEffect, useRef, useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

const Hero = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use relative paths for images
  const images = [
    "https://cdn.pixabay.com/photo/2022/12/09/03/54/big-data-7644534_1280.jpg",
    "https://media.istockphoto.com/id/1467923412/vector/connecting-blue-green-communication-fibers.jpg?s=612x612&w=0&k=20&c=Pm-FpBsOfBcmiZ7jwt9A-Rbmfo33P6qEoFcRNspzoQY=",
    "https://cdn.pixabay.com/photo/2023/02/27/14/34/ai-generated-7818579_640.jpg",
    "https://cdn.pixabay.com/photo/2019/12/12/11/40/engineer-4690505_1280.jpg",
    "https://media.istockphoto.com/id/2148178474/photo/two-hispanic-programmers-collaborating-in-modern-office.jpg?s=2048x2048&w=is&k=20&c=q7RMuFCF2pn5VaKYE2Pb_fZ36ufImVOtl5dpVYjcBwA=",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const FPS = 60;
    const starCount = 180;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initStars();
    };

    const initStars = () => {
      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      }));
    };

    const distance = (point1, point2) => {
      const xs = Math.pow(point2.x - point1.x, 2);
      const ys = Math.pow(point2.y - point1.y, 2);
      return Math.sqrt(xs + ys);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      starsRef.current.forEach((star) => {
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.stroke();
      });

      starsRef.current.forEach((starI) => {
        const mouseDistance = distance(mouseRef.current, starI);
        if (mouseDistance < 150) {
          ctx.beginPath();
          ctx.moveTo(starI.x, starI.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - mouseDistance / 150})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        starsRef.current.forEach((starII) => {
          const starDistance = distance(starI, starII);
          if (starDistance < 150 && starDistance > 0) {
            ctx.beginPath();
            ctx.moveTo(starI.x, starI.y);
            ctx.lineTo(starII.x, starII.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - starDistance / 150})`;
            ctx.lineWidth = 0.2;
            ctx.stroke();
          }
        });
      });
    };

    const update = () => {
      starsRef.current.forEach((star) => {
        star.x += star.vx / FPS;
        star.y += star.vy / FPS;

        if (star.x < 0 || star.x > window.innerWidth) star.vx = -star.vx;
        if (star.y < 0 || star.y > window.innerHeight) star.vy = -star.vy;
      });
    };

    const tick = () => {
      draw();
      update();
      animationFrameRef.current = requestAnimationFrame(tick);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = {
        x: -1000,
        y: -1000,
      };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    tick();

    const imageRotationInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearInterval(imageRotationInterval);
    };
  }, [images.length]);

  return (
    <div className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content">
        <div className="hero-image-container">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero ${index + 1}`}
              className={`hero-image ${
                index === currentImageIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
        <div className="hero-text">
          <h1>
            <span className="gradient-text">Innovate.</span>
            <span className="gradient-text">Create.</span>
            <span className="gradient-text">Transform.</span>
          </h1>
          <p>Pushing the boundaries of digital excellence</p>
          <div className="tech-icons">
            <FaReact />
            <FaNodeJs />
            <FaPython />
            <FaAws />
          </div>
          <div className="cta-container">
            <button className="cta-button primary">Start Your Journey</button>
            <button className="cta-button secondary">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
