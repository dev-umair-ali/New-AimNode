import React from "react";
import ChooseUs from "../Components/ChooseUs";
import Hero from "../Components/Hero";
import PortfolioSection from "../Components/PortfolioSection";
// import ThreeScene from "./Components/ThreeScene";
import Services from "../Pages/Services";
import RollingText from "../Components/RollingText";
// import BlogSlider from "../Components/BlogSlider";
// import  Slider from  "../Components/Slider";
function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ChooseUs />
      <PortfolioSection />
      {/* <div className="" style={{width:"100%", height:"100vh"}}>
      <ThreeScene/>
      </div> */}
      {/* <Slider /> */}
      {/* <BlogSlider/> */}
      <RollingText/>
    </div>
  );
}

export default Home;
