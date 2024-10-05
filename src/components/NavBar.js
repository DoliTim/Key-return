// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from React Router
import { FaPhone, FaEnvelope, FaClock, FaExclamationTriangle } from 'react-icons/fa'; // Importing necessary icons
import './NavBar.css';
import logo from '../assets/logo.png'; // Importing the logo image

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="top-info">
        <p><FaPhone /> CALL FREE: +386 1 787 70 23 | <FaEnvelope /> info@key-return.com | <FaClock /> Mon — Sat: 8AM — 4PM</p>
      </div>
      <div className="main-nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="KeyReturn Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/how-it-works">
              How It Works
            </Link>
          </li>
          <li>
            <Link to="/subscription">
              Join KeyReturn
            </Link>
          </li>
          <li>
            <Link to="/about-us">
              About Us
            </Link>
          </li>
          <li className="found-keys">
            <Link to="/found-keys">
              <FaExclamationTriangle /> I Found Keys
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
