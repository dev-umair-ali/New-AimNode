import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext"; // Import the useTheme hook
import "../styles/header.css";
import { CiBrightnessUp, CiDark } from "react-icons/ci";
import logo from "../assets/Images/aimNode-logo.png";

const Header = () => {
  const { isDark, toggleTheme } = useTheme(); // Use the theme state and toggle function from context
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Testimonials", href: "/testimonials" },
    { title: "Team", href: "/team" },
  ];

  return (
    <header className={`header ${isDark ? "dark" : "light"}`}>
      <div className="header-content">
        <img className="logo" src={logo} alt="" />

        <nav className="nav">
          <ul className="nav-items">
            {navItems.map((item) => (
              <li key={item.title}>
                <a href={item.href} className="nav-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="action-buttons">
            <button className="get-quotes">Get Quotes</button>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? <CiBrightnessUp size={24} /> : <CiDark size={24} />}
            </button>
          </div>
        </nav>

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-items">
            {navItems.map((item) => (
              <li key={item.title}>
                <a href={item.href} className="nav-link" onClick={closeMenu}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="action-buttons">
            <button className="get-quotes" onClick={closeMenu}>
              Get Quotes
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
