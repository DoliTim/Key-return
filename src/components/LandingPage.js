// src/components/LandingPage.js
import React, { useEffect, useRef } from 'react';
import './LandingPage.css';
import NavBar from './NavBar';
import StatsSection from './StatsSection'; // Importing Stats Section
import HowItWorks from './HowItWorks'; // Importing How It Works Section
import Subscription from './Subscription'; // Importing Subscription Component
import { Link } from 'react-scroll'; // Importing smooth scroll Link from react-scroll
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const KeyFobModel = () => {
  const { scene } = useGLTF('/models/keyfob.glb'); // Importing GLTF model
  const modelRef = useRef();
 // Rotate the model upright like a trophy
  // Rotate the model upright like a trophy
  useFrame(() => {
    if (modelRef.current) {
    // Slow rotation around the y-axis like a trophy
      modelRef.current.rotation.y += 0.002;
    // Slow rotation around the y-axis like a trophy
    modelRef.current.rotation.x -= 0.00008;
      // Set a slight upward angle to make it look cool, similar to being displayed upright
      modelRef.current.rotation.z = Math.PI / 3; 
    }
  });



  return <primitive object={scene} ref={modelRef} scale={[0.95, 0.95, 0.95]} />; // Increase size of the model
};

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <header className="landing-header">
        <div className="hero-content-container">
          <div className="hero-content">
            <h1>Securely Return Your Lost Keys</h1>
            <p>
            The KeyReturn system provides a safe and secure way to return lost keys to their rightful owner. Each key chain has a unique code that ensures your keys are returned directly to you. With the support of trusted logistics partners like GLS, you can have peace of mind knowing your lost keys will always find their way back.
            </p>
            <Link to="how-it-works" smooth={true} duration={1000}>
              <button className="cta-button">How It Works</button>
            </Link>
          </div>
        </div>
      </header>
      
      {/* 3D Model Section */}
      <div className="hero-3d-model" style={{ position: 'absolute', right: '30%', top: '20%', width: '45%', height: '73%', transform: 'translateX(50%)', zIndex: 1 }}> {/* Center container on the right side of the screen */}
        <Canvas>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} />
          <KeyFobModel />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      
      {/* Stats Section */}
      <StatsSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Subscription Section */}
      <section id="subscription">
        <Subscription />
      </section>

      <section id="partnerships" className="info-section">
        <h2>Our Partnership with GLS</h2>
        <p>
          We've teamed up with GLS to ensure that your keys are returned in the safest way possible.
          As one of the largest logistics companies in Europe, GLS guarantees a smooth and secure
          return process for your keys, no matter where they are found.
        </p>
        <Link to="subscription" smooth={true} duration={1000}>
          <button className="cta-button">Subscribe Now</button>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;