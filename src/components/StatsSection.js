// src/components/StatsSection.js
import React from 'react';
import './StatsSection.css';
import { FaKey, FaUsers, FaTags } from 'react-icons/fa'; // Importing required icons
import glsLogo from '../assets/gls-logo.png'; // Importing GLS logo

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stat-bubble">
        <FaKey className="stat-icon" />
        <span className="stat-value">1125</span>
        <span className="stat-description">Successful Retrievals</span>
      </div>
      <div className="stat-bubble">
        <FaUsers className="stat-icon" />
        <span className="stat-value">2987</span>
        <span className="stat-description">Users</span>
      </div>
      <div className="stat-bubble">
        <FaTags className="stat-icon" />
        <span className="stat-value">3254</span>
        <span className="stat-description">Active KeyTrackers</span>
      </div>
      <div className="stat-bubble">
        <img src={glsLogo} alt="GLS Logo" className="stat-image-icon" />
        <span className="stat-value">2412</span>
        <span className="stat-description">Keys Returned via GLS</span>
      </div>
    </section>
  );
};

export default StatsSection;
