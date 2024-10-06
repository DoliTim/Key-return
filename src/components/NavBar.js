// src/components/NavBar.js
import React, { useState } from 'react'; // Import useState for menu toggle
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaClock, FaExclamationTriangle, FaBars, FaTimes } from 'react-icons/fa'; // Add icons for mobile menu
import './NavBar.css';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the menu open/close state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="top-info">
        <p>
          <FaPhone /> CALL FREE: +386 1 787 70 23 | <FaEnvelope /> info@key-return.com | <FaClock /> Mon — Sat: 8AM — 4PM
        </p>
      </div>
      <div className="main-nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="KeyReturn Logo" />
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle icon */}
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
          <li>
            <Link to="/how-it-works" onClick={() => setIsMobileMenuOpen(false)}>
              How It Works
            </Link>
          </li>
          <li>
            <Link to="/subscription" onClick={() => setIsMobileMenuOpen(false)}>
              Join KeyReturn
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="found-keys">
            <Link to="/found-keys" onClick={() => setIsMobileMenuOpen(false)}>
              <FaExclamationTriangle /> I Found Keys
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
