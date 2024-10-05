// src/components/AboutUs.js
import React from 'react';
import { FaKey, FaHandshake, FaShieldAlt, FaGlobe, FaUsers } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About KeyReturn</h1>
        <p>KeyReturn is dedicated to providing a secure, reliable solution for reuniting lost keys with their rightful owners. With our innovative analog tracking technology, we ensure that no key is ever truly lost.</p>
      </header>

      <section className="mission-section">
        <div className="mission-content">
          <FaShieldAlt className="mission-icon" />
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to provide peace of mind. Losing your keys can be stressful, and we believe in making it easy for keys to find their way home. With a combination of innovative technology and strategic partnerships, we aim to create a secure, stress-free experience for our customers.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-container">
          <div className="value">
            <FaHandshake className="value-icon" />
            <h3>Trust</h3>
            <p>We prioritize our customers' trust by providing a secure, privacy-focused service. Your personal information is protected, and our trackers contain no identifiable data, ensuring privacy at every step.</p>
          </div>
          <div className="value">
            <FaGlobe className="value-icon" />
            <h3>Global Reach</h3>
            <p>KeyReturn has partnered with renowned logistics companies like GLS, giving us a global reach that ensures your keys can be returned no matter where you lose them.</p>
          </div>
          <div className="value">
            <FaUsers className="value-icon" />
            <h3>Customer-Centric Approach</h3>
            <p>We are here for you every step of the way. Our customer support is available to assist in any situation, making sure your experience with KeyReturn is effortless and seamless.</p>
          </div>
        </div>
      </section>

      <section className="logo-section">
        <h2>Our Logo and What It Represents</h2>
        <p>The KeyReturn logo symbolizes security and reliability. The key icon represents our focus—helping lost keys find their way home. The blue in our logo conveys trust, while the yellow symbolizes optimism, reflecting our goal of turning a potentially stressful situation into a positive experience.</p>
      </section>

      <footer className="about-us-footer">
        <h3>Our Promise</h3>
        <p>At KeyReturn, we promise to make losing your keys a worry of the past. With our trusted logistics partners, innovative analog key tracker, and dedicated customer service, we ensure your keys always return home, giving you the peace of mind you deserve.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
