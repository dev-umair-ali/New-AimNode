import React, { useEffect, useRef } from "react";
import NewAnimation from "../Components/NewAnimation";
import "../styles/OurServices.css";
import Services from "../Components/Services";
import ServicesHero from "../Components/ServicesHero";

function OurServices() {
  return (
    <>
      <div className="services-container-our">
        {/* <div className="gradient-bg-our">
        <div className="gradient-1-our"></div>
        <div className="gradient-2-our"></div>
        <div className="gradient-3-our"></div>
      </div> */}

        {/* <div className="glass-container-our">
          <div className="content-wrapper-our">
            <motion.div
              className="animation-wrapper-our"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="animation-background-our">
                <div className="animation-glow-our"></div>
              </div>
            </motion.div>
          </div>
        </div> */}
                    


        {/* <div className="decorative-elements-our">
        <div className="tech-circle-our"></div>
        <div className="tech-line-our"></div>
        <div className="tech-dot-our"></div>
      </div> */}

      <ServicesHero/>
      </div>
      <div className="">
        {" "}
        <Services />
      </div>
    </>
  );
}

export default OurServices;
