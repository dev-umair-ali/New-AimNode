import "./App.css";
import ChooseUs from "./Components/ChooseUs";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import PortfolioSection from "./Components/PortfolioSection";
// import ThreeScene from "./Components/ThreeScene";
import Footer from "./Pages/Footer";
import Services from "./Pages/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ChooseUs />
      <PortfolioSection />
      {/* <div className="" style={{width:"100%", height:"100vh"}}>
      <ThreeScene/>
      </div> */}
     
      <Footer/>
    </>
  );
}

export default App;
