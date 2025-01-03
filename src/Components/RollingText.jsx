import React, { useState, useEffect, useRef } from "react";
import "../Styles/BlogSlider.css";
const Slider = () => {
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);
  const itemsRef = useRef([]);
  const lastPosition = 3; // update to reflect 4 slides (0-3)
  const firstPosition = 0;

  useEffect(() => {
    setDiameter();
    window.addEventListener("resize", setDiameter);
    return () => window.removeEventListener("resize", setDiameter);
  }, []);

  const setDiameter = () => {
    if (sliderRef.current) {
      const widthSlider = sliderRef.current.offsetWidth;
      const heightSlider = sliderRef.current.offsetHeight;
      const diameter = Math.sqrt(
        Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2)
      );
      document.documentElement.style.setProperty("--diameter", `${diameter}px`);
    }
  };

  const handleNext = () => {
    if (active < lastPosition) {
      setActive(active + 1);
    }
  };

  const handlePrev = () => {
    if (active > firstPosition) {
      setActive(active - 1);
    }
  };

  return (
    <main>
      {/* <header>
        <nav>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="
          "
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h10"
            />
          </svg>
        </nav>
      </header> */}
      <section className="slider" ref={sliderRef}>
        <div className="list">
          <div
            className={`item ${active === 0 ? "active" : ""}`}
            ref={(el) => (itemsRef.current[0] = el)}
          >
            <div
              className="image"
              style={{
                "--url":
                  "url('https://cdn.pixabay.com/photo/2018/07/14/11/33/earth-3537401_960_720.jpg')",
              }}
            ></div>
            <div className="content">
              <h2>SLIDER IMAGE MAGIC</h2>
              <p>
                Nulla magna irure incididunt irure nisi laboris adipisicing
                adipisicing ad aliquip exercitation sit duis.
              </p>
              <p>Ex irure minim eiusmod tempor cillum consectetur ullamco.</p>
            </div>
          </div>
          <div
            className={`item ${active === 1 ? "active" : ""}`}
            ref={(el) => (itemsRef.current[1] = el)}
          >
            <div
              className="image"
              style={{
                "--url":
                  "url('https://images.pexels.com/photos/9143680/pexels-photo-9143680.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",
              }}
            ></div>
            <div className="content">
              <h2>SLIDER IMAGE MAGIC</h2>
              <p>
                Nulla magna irure incididunt irure nisi laboris adipisicing
                adipisicing ad aliquip exercitation sit duis.
              </p>
              <p>Ex irure minim eiusmod tempor cillum consectetur ullamco.</p>
            </div>
          </div>
          <div
            className={`item ${active === 2 ? "active" : ""}`}
            ref={(el) => (itemsRef.current[2] = el)}
          >
            <div
              className="image"
              style={{
                "--url":
                  "url('https://images.pexels.com/photos/18787549/pexels-photo-18787549/free-photo-of-view-of-supertree-grove-in-singapore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",
              }}
            ></div>
            <div className="content">
              <h2>SLIDER IMAGE MAGIC</h2>
              <p>
                Nulla magna irure incididunt irure nisi laboris adipisicing
                adipisicing ad aliquip exercitation sit duis.
              </p>
              <p>Ex irure minim eiusmod tempor cillum consectetur ullamco.</p>
            </div>
          </div>
          <div
            className={`item ${active === 3 ? "active" : ""}`}
            ref={(el) => (itemsRef.current[3] = el)}
          >
            <div
              className="image"
              style={{
                "--url":
                  "url('https://images.pexels.com/photos/26893204/pexels-photo-26893204/free-photo-of-a-moment-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              }}
            ></div>
            <div className="content">
              <h2>SLIDER IMAGE MAGIC</h2>
              <p>
                Nulla magna irure incididunt irure nisi laboris adipisicing
                adipisicing ad aliquip exercitation sit duis.
              </p>
              <p>Ex irure minim eiusmod tempor cillum consectetur ullamco.</p>
            </div>
          </div>
        </div>
        <div className="arrows">
          <button
            onClick={handlePrev}
            className={active === firstPosition ? "d-none" : ""}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className={active === lastPosition ? "d-none" : ""}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Slider;
