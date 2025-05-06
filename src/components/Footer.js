import React from 'react';
import './Footer.css';
import logo from '../assets/logo.svg';

const Footer = () => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.click();
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about-section">
          <img src={logo} alt="Little Lemon logo" className="footer-logo" />
          <p>A Mediterranean restaurant focused on traditional recipes with a modern twist.</p>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>1 Regent Street St. James's, London SW1Y 4NR</p>
          <p>Phone: +44 20 7946 0000</p>
          <p>Email: info@littlelemon.com</p>
        </div>
        
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              tabIndex="0"
              onKeyDown={handleKeyDown}
            >
              Facebook
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              tabIndex="0"
              onKeyDown={handleKeyDown}
            >
              Instagram
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
              tabIndex="0"
              onKeyDown={handleKeyDown}
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 