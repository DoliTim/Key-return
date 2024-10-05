// src/components/HowItWorks.js
import React from 'react';
import { FaShoppingCart, FaKey, FaSearchLocation, FaPhoneAlt, FaHome } from 'react-icons/fa'; // Importing relevant icons
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How It Works in 5 Steps</h2>
      <div className="steps-container">
        <div className="step">
          <FaShoppingCart className="step-icon" />
          <h3>Step 1: Purchase Key Tracker</h3>
          <p>Get the KeyReturn key tracker from our store. Each tracker has a unique code ensuring your keys are always linked to you.</p>
        </div>

        <div className="step">
          <FaKey className="step-icon" />
          <h3>Step 2: Place It on Your Keys</h3>
          <p>Once you have the KeyReturn tracker, place it securely on your keys. It ensures that they are always ready to be found.</p>
        </div>

        <div className="step">
          <FaSearchLocation className="step-icon" />
          <h3>Step 3: Lost? We Find Them</h3>
          <p>If you lose your keys, our system ensures they can be found through our trusted key tracking and return process.</p>
        </div>

        <div className="step">
          <FaPhoneAlt className="step-icon" />
          <h3>Step 4: Contact from Support</h3>
          <p>Once your keys are found, our support team will contact you to arrange the safe return of your keys.</p>
        </div>

        <div className="step">
          <FaHome className="step-icon" />
          <h3>Step 5: Keys Delivered Home</h3>
          <p>Your keys will be safely delivered to your home. We ensure a secure and hassle-free delivery process.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
