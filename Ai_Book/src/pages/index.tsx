import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import './index.css';

export default function Home() {
  return (
    <Layout>
      <main className="heroContainer">
        {/* Holographic particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>

        {/* Holographic grid lines */}
        <div className="holographic-grid"></div>

        <div className="content-layout">
          <div className="robot-section">
            {/* Main robot */}
            <div className="main-robot">
              <svg width="180" height="220" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Gradient for robot body */}
                  <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3498db" />
                    <stop offset="50%" stopColor="#1abc9c" />
                    <stop offset="100%" stopColor="#2ecc71" />
                  </linearGradient>

                  {/* Gradient for glow effect */}
                  <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1abc9c" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3498db" stopOpacity="0" />
                  </radialGradient>

                  {/* Animated gradient for text */}
                  <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3498db">
                      <animate attributeName="offset" values="0;1;0" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#9b59b6">
                      <animate attributeName="offset" values="0.25;0.75;0.25" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#1abc9c">
                      <animate attributeName="offset" values="0.5;1.5;0.5" dur="4s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                </defs>

                {/* Glow effect behind robot */}
                <circle cx="100" cy="120" r="120" fill="url(#glowGradient)" className="robot-glow" />

                {/* Robot Head */}
                <rect x="70" y="60" width="60" height="40" rx="10" fill="url(#robotGradient)" stroke="#2c3e50" strokeWidth="2" className="robot-head"/>
                {/* Head details */}
                <rect x="75" y="65" width="50" height="30" rx="8" fill="rgba(255,255,255,0.2)" stroke="#2c3e50" strokeWidth="1"/>

                {/* Eyes */}
                <circle cx="85" cy="80" r="6" fill="#2ecc71" className="robot-eye">
                  <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite" begin="0s" />
                </circle>
                <circle cx="115" cy="80" r="6" fill="#2ecc71" className="robot-eye">
                  <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite" begin="0.5s" />
                </circle>

                {/* AI Node Symbol on forehead */}
                <circle cx="100" cy="70" r="8" fill="#9b59b6" opacity="0.8" className="ai-node"/>
                <circle cx="96" cy="67" r="1.5" fill="#ecf0f1"/>
                <circle cx="100" cy="67" r="1.5" fill="#ecf0f1"/>
                <circle cx="104" cy="67" r="1.5" fill="#ecf0f1"/>

                {/* Robot Body */}
                <rect x="65" y="100" width="70" height="80" rx="12" fill="url(#robotGradient)" stroke="#2c3e50" strokeWidth="2" className="robot-body"/>
                {/* Body details */}
                <rect x="70" y="105" width="60" height="70" rx="8" fill="rgba(0,0,0,0.1)" stroke="#2c3e50" strokeWidth="1"/>

                {/* Chest Circuit Pattern */}
                <rect x="85" y="120" width="30" height="20" rx="4" fill="#9b59b6" opacity="0.6"/>
                <circle cx="90" cy="125" r="1.5" fill="#ecf0f1"/>
                <circle cx="95" cy="125" r="1.5" fill="#ecf0f1"/>
                <circle cx="100" cy="125" r="1.5" fill="#ecf0f1"/>
                <circle cx="105" cy="125" r="1.5" fill="#ecf0f1"/>

                {/* Arms */}
                <line x1="65" y1="120" x2="35" y2="140" stroke="url(#robotGradient)" strokeWidth="8" strokeLinecap="round" className="robot-arm"/>
                <line x1="135" y1="120" x2="165" y2="140" stroke="url(#robotGradient)" strokeWidth="8" strokeLinecap="round" className="robot-arm"/>

                {/* Legs */}
                <line x1="85" y1="180" x2="85" y2="210" stroke="url(#robotGradient)" strokeWidth="8" strokeLinecap="round" className="robot-leg leg-left"/>
                <line x1="115" y1="180" x2="115" y2="210" stroke="url(#robotGradient)" strokeWidth="8" strokeLinecap="round" className="robot-leg leg-right"/>
              </svg>
            </div>
          </div>

          <div className="text-button-section">
            <h1 className="heroTitle">
              <span className="gradient-text">Physical AI and Humanoid Robotics</span>
            </h1>

            <Link className="startButton" to="/docs/module-1-ros2-nervous-system/chapter-1-introduction-to-ros2">
              Start Reading
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}