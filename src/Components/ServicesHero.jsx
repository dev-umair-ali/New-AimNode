import Lottie from "lottie-react";
import NewAnimation from "../Components/NewAnimation";
import "../styles/OurServices.css";

export default function ServicesHero() {
  return (
    <section className="serv-hero-section">
      <div className="serv-hero-content">
        <div className="serv-text-content">
          <h1 className="serv-hero-title">
            Transforming Ideas into
            <span className="serv-gradient-text"> Digital Reality</span>
          </h1>
          <p className="serv-hero-description">
            Elevate your business with cutting-edge technology solutions. We
            deliver innovative software development, cloud architecture, and
            digital transformation services that drive growth and efficiency.
          </p>
          {/* <div className="serv-hero-services">
            <div className="serv-service-card">
              <h3>Custom Development</h3>
              <p>Tailored solutions that perfectly match your business needs</p>
            </div>
            <div className="serv-service-card">
              <h3>Cloud Solutions</h3>
              <p>
                Scalable and secure cloud infrastructure for your applications
              </p>
            </div>
            <div className="serv-service-card">
              <h3>Digital Innovation</h3>
              <p>Cutting-edge technologies to keep you ahead of the curve</p>
            </div>
          </div> */}
        </div>
        <div className="serv-animation-container">
          <div className="serv-glow-effect"></div>
         <NewAnimation/>
        </div>
      </div>
    </section>
  );
}
