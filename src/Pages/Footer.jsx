import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from "../assets/Images/aimNode-logo.png";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <img src={logo} alt="AimNode Logo" />
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.
          </p>
          <div className={styles.socialLinks}>
            <h3>Follow us</h3>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div className={styles.services}>
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">App Development</a></li>
            <li><a href="#">Cloud Services</a></li>
            <li><a href="#">Domain and Hosting</a></li>
            <li><a href="#">SEO Optimization</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Search Engine</a></li>
            <li><a href="#">Domain & Hosting</a></li>
            <li><a href="#">Email Marketing</a></li>
            <li><a href="#">Digital Marketing</a></li>
          </ul>
        </div>

        <div className={styles.information}>
          <h3>Information</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Coming Soon</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className={styles.contacts}>
          <h3>Contacts</h3>
          <div className={styles.contactInfo}>
            <p><FaMapMarkerAlt /> 101 West Town , PBO 12345, United States</p>
            <p><FaPhone /> +1 1234 56 789</p>
            <p><FaEnvelope /> contact@example.com</p>
          </div>

          <div className={styles.newsletter}>
            <h3>Newsletter</h3>
            <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
            <form onSubmit={handleSubmit} className={styles.subscribeForm}>
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">
                <FiSend className={styles.sendIcon} />
              </button>
            </form>
            {isSubmitted && <p className={styles.successMessage}>Thank you for subscribing!</p>}
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>AimNode © 2024 - Designed by <a href="#">Umair</a></p>
      </div>
    </footer>
  );
}

