
import { useState } from "react";
import "../styles/portfolio.css";
import ThreeScene from "./ThreeScene";

const portfolioItems = [
  {
    id: 1,
    title: "Crystal Structure",
    category: "App Design",
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/05/11/11/41/high-tech-5157719_1280.jpg",
    description:
      "An innovative app design showcasing crystalline structures in 3D space.",
  },
  {
    id: 2,
    title: "Cube Formation",
    category: "App Development",
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/05/11/11/41/high-tech-5157719_1280.jpg",
    description:
      "A cutting-edge app that generates and manipulates complex cube formations.",
  },
  {
    id: 3,
    title: "Abstract Shapes",
    category: "Branding",
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/05/11/11/41/high-tech-5157719_1280.jpg",
    description:
      "A branding project that utilizes abstract shapes to create a unique visual identity.",
  },
  {
    id: 4,
    title: "Geometric Pattern",
    category: "It Solutions",
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/05/11/11/41/high-tech-5157719_1280.jpg",
    description:
      "An IT solution that leverages geometric patterns for data visualization.",
  },
  {
    id: 5,
    title: "Color Splash",
    category: "App Design",
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/05/11/11/41/high-tech-5157719_1280.jpg",
    description:
      "A vibrant app design that brings colors to life through interactive splashes.",
  },
  {
    id: 6,
    title: "Minimal Scene",
    category: "Branding",
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/05/11/11/41/high-tech-5157719_1280.jpg",
    description:
      "A minimalist branding approach that creates impactful scenes with less.",
  },
];

const categories = [
  "All",
  "App Design",
  "App Development",
  "Branding",
  "It Solutions",
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
    <section className="portfolio-section">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Our Portfolio</h2>
        <p className="portfolio-description">
          Explore our diverse range of projects across various domains
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="filter-container">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`filter-button ${
              activeCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img
              src={item.imageUrl}
              alt={item.title}
              width={400}
              height={300}
              className="portfolio-image"
            />
            <div className="portfolio-overlay">
              <div className="portfolio-content">
                <h3 className="portfolio-item-title">{item.title}</h3>
                <p className="portfolio-item-category">{item.category}</p>
                <p className="portfolio-item-description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <div className="" style={{width:"100%", height:"100vh"}}>
      <ThreeScene/>
      </div>
    </>
  );
}
