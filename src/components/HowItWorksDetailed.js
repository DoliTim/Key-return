// src/components/HowItWorksDetailed.js
import React from 'react';
import { FaKey, FaMobileAlt, FaSearchLocation, FaBox, FaTruck } from 'react-icons/fa';
import './HowItWorksDetailed.css';

const HowItWorksDetailed = () => {
  return (
    <div className="how-it-works-detailed">
      <header className="detailed-header">
        <h1>How It Works</h1>
        <p>KeyReturn provides a simple, effective, and secure process to ensure your lost keys always make their way back to you.</p>
      </header>

      <section className="steps-section">
        <div className="step">
          <FaKey className="step-icon" />
          <h2>Step 1: Purchase Your KeyReturn Tracker</h2>
          <p>Start by purchasing your KeyReturn tracker from our website. Each tracker has a unique ID that links it directly to you, ensuring peace of mind.</p>
        </div>

        <div className="step">
          <FaMobileAlt className="step-icon" />
          <h2>Step 2: Register Your Tracker</h2>
          <p>Once you've received your tracker, register it with the KeyReturn app or website. This links your personal information securely to the tracker ID.</p>
        </div>

        <div className="step">
          <FaSearchLocation className="step-icon" />
          <h2>Step 3: Losing Your Keys - No Worries</h2>
          <p>In case you lose your keys, anyone who finds them can drop them off at one of our partner locations or contact us directly. Our system ensures the key finder can return them to the closest collection point.</p>
        </div>

        <div className="step">
          <FaBox className="step-icon" />
          <h2>Step 4: We Collect Your Keys</h2>
          <p>Our logistics partner GLS will safely collect your keys from the drop-off point. We handle all the logistics to ensure your keys are transported securely.</p>
        </div>

        <div className="step">
          <FaTruck className="step-icon" />
          <h2>Step 5: Delivery Back to You</h2>
          <p>Finally, we deliver your keys back to your home address using our secure delivery service. It’s easy, safe, and gives you complete peace of mind.</p>
        </div>
      </section>

      <footer className="how-it-works-footer">
        <h3>Peace of Mind, Guaranteed</h3>
        <p>With KeyReturn, you can rest easy knowing that no matter where your keys end up, we’ll make sure they get back to you. Our partnership with GLS provides an efficient and reliable solution.</p>
        <button className="cta-button">Get Your Key Tracker Now</button>
      </footer>
    </div>
  );
};

export default HowItWorksDetailed;
