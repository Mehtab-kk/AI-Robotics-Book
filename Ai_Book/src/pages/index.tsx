import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      {/* Holographic UI elements */}
      <div className={styles.holographicElement}></div>
      <div className={styles.holographicElement}></div>
      <div className={styles.holographicElement}></div>
      <div className={styles.holographicElement}></div>

      {/* Robotic logo at the top center */}
      <div className={styles.roboticLogo}>
        <svg
          viewBox="0 0 100 100"
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.3)" />
            </filter>
          </defs>
          <g filter="url(#shadow)">
            <rect x="25" y="30" width="50" height="40" rx="8" fill="#4a90e2" />
            <rect x="30" y="35" width="40" height="30" rx="5" fill="#5fa8f0" />
            <circle cx="40" cy="45" r="3" fill="#2ecc71" />
            <circle cx="60" cy="45" r="3" fill="#2ecc71" />
            <rect x="45" y="55" width="10" height="15" rx="2" fill="#9b59b6" />
          </g>
        </svg>
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          {/* Top right button */}
          <div className={styles.topRightButton}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/module-1-ros2-nervous-system/chapter-1-introduction-to-ros2">
              Start Reading
            </Link>
          </div>

          <div className={styles.logoContainer}>
            <div className={styles.logoAnimation}>
              <svg
                className={styles.bookLogo}
                viewBox="0 0 200 200"
                width="200"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="4" dy="4" stdDeviation="6" floodColor="rgba(0,0,0,0.4)" />
                  </filter>
                </defs>
                <g filter="url(#shadow)">
                  {/* Robot Body */}
                  <rect x="60" y="80" width="80" height="80" rx="10" fill="#3498db" stroke="#2c3e50" stroke-width="2"/>

                  {/* Robot Head */}
                  <g transform="translate(0, -10)">
                    <rect x="70" y="50" width="60" height="50" rx="8" fill="#ecf0f1" stroke="#2c3e50" stroke-width="2"/>

                    {/* Eyes */}
                    <circle cx="85" cy="70" r="5" fill="#2ecc71"/>
                    <circle cx="115" cy="70" r="5" fill="#2ecc71"/>

                    {/* Antenna */}
                    <line x1="100" y1="45" x2="100" y2="30" stroke="#2c3e50" stroke-width="2"/>
                    <circle cx="100" cy="25" r="4" fill="#e74c3c"/>
                  </g>

                  {/* Arms */}
                  <line x1="60" y1="100" x2="40" y2="120" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/>
                  <line x1="140" y1="100" x2="160" y2="120" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/>

                  {/* Legs */}
                  <line x1="80" y1="160" x2="80" y2="180" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/>
                  <line x1="120" y1="160" x2="120" y2="180" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/>

                  {/* AI Chip Icon */}
                  <rect x="85" y="115" width="30" height="20" rx="2" fill="#9b59b6" opacity="0.8"/>
                  <circle cx="95" cy="125" r="2" fill="#ecf0f1"/>
                  <circle cx="105" cy="125" r="2" fill="#ecf0f1"/>

                  {/* Shadow */}
                  <ellipse cx="100" cy="185" rx="50" ry="5" fill="rgba(0,0,0,0.1)" opacity="0.3"/>
                </g>
              </svg>
            </div>
          </div>
          <Heading as="h1" className={clsx('hero__title', styles.animatedTitle)}>
            {siteConfig.title}
          </Heading>
          <p className={clsx('hero__subtitle', styles.animatedSubtitle)}>
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn ROS 2, Simulation, and AI Control for Humanoid Robots">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
