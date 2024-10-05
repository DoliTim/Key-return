// src/components/Subscription.js
import React from 'react';
import { FaShieldAlt, FaEuroSign, FaGift } from 'react-icons/fa'; // Importing relevant icons
import './Subscription.css';

const Subscription = () => {
  return (
    <section className="subscription-section">
      <div className="subscription-content">
        <h2>Get Peace of Mind with Our Subscription Plan</h2>
        <p>
          Join our 5-year subscription plan for just <strong>90 euros</strong> and never worry about your keys again. Our service ensures that, if your keys are lost, they will always find their way back to you. This plan is designed for those who value security, reliability, and simplicity.
        </p>

        <div className="features">
          <div className="feature">
            <FaShieldAlt className="feature-icon" />
            <h3>Reliable Service</h3>
            <p>
              Our key retrieval system is powered by a secure, registered analog key fob that ensures your lost keys make their way back to you quickly and reliably.
            </p>
          </div>

          <div className="feature">
            <FaGift className="feature-icon" />
            <h3>Finder Rewards</h3>
            <p>
              We appreciate honesty! When someone finds your keys and helps return them, they will receive a special reward for their efforts.
            </p>
          </div>

          <div className="feature">
            <FaEuroSign className="feature-icon" />
            <h3>Affordable Peace of Mind</h3>
            <p>
              Just 90 euros for a 5-year plan means long-lasting peace of mind without breaking the bank. Stay protected for less than 2 euros per month.
            </p>
          </div>
        </div>

        <button className="subscribe-button">Subscribe Now for €90 / 5 Years</button>
      </div>
    </section>
  );
};

export default Subscription;
