import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Preloader from "./Components/Preloader";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Team from "./Pages/Team";
import Footer from "./Pages/Footer";

function App() {

  return (
    <>
    
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <Footer />
        </Router>
     
    </>
  );
}

export default App;
