// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";
// Assuming CallToActionSection is imported and used in App.jsx routing if needed
// import CallToActionSection from '../components/CallToActionSection/CallToActionSection';

const About = () => {
  return (
    <>
      <section className={styles.aboutHero}>
        <img
          src="servicesHero2.png" // Placeholder for your image
          alt="Cosmic background for services"
          className={styles.heroBackgroundImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/2560x1440/1A1A1A/5CE1E6?text=Image+Not+Found";
          }} // Fallback
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>About Siteden</h1>
          <p className={styles.heroSubheadline}>
            We're more than just developers; we're your <span className="impactful">partners</span> in digital
            <span className="impactful"> growth</span>.
          </p>
        </div>
      </section>

      <section className={styles.ourStorySection}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <h2 className={styles.storyHeadline}>
              Our Journey: Building Digital Dreams
            </h2>
            <p className={styles.storyText}>
              Siteden was founded with a singular vision: to empower businesses
              and individuals with exceptional online presences. We believe that
              a strong digital footprint is the cornerstone of modern success.
              Our journey began with a passion for crafting beautiful,
              functional, and impactful websites that truly resonate with an
              audience.
            </p>
            <p className={styles.storyText}>
              Over the years, we've grown into a team of dedicated designers,
              developers, and strategists, united by our commitment to
              innovation and client satisfaction. We blend artistic creativity
              with technical precision to build solutions that not only look
              great but also perform flawlessly and scale with your ambition.
            </p>
            <Link to="/portfolio" className={styles.ctaButton}>
              See Our Work
            </Link>
          </div>
          <div className={styles.storyImageContainer}>
            <img
              src="about.png" // Placeholder image
              alt="Our Story - Digital Journey"
              className={styles.storyImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x800/2c769f/5ce1e6?text=Image+Error";
              }} // Fallback
            />
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.valuesHeadline}>Our Core Values</h2>
          <p className={styles.valuesSubheadline}>
            These principles guide every decision we make and every project we
            undertake.
          </p>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>💡</span>
              <h3 className={styles.valueTitle}>Innovation</h3>
              <p className={styles.valueDescription}>
                Constantly exploring new technologies and creative approaches to
                deliver cutting-edge solutions.
              </p>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>🤝</span>
              <h3 className={styles.valueTitle}>Partnership</h3>
              <p className={styles.valueDescription}>
                Working hand-in-hand with clients, transparently, to achieve
                shared goals and build lasting relationships.
              </p>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>✨</span>
              <h3 className={styles.valueTitle}>Excellence</h3>
              <p className={styles.valueDescription}>
                Committed to pixel-perfect design, robust development, and
                unparalleled quality in every detail.
              </p>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>🌱</span>
              <h3 className={styles.valueTitle}>Growth</h3>
              <p className={styles.valueDescription}>
                Dedicated to the continuous growth of our clients' businesses
                and our own capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reusing CallToActionSection for a consistent closing */}
      {/* <CallToActionSection /> */}
    </>
  );
};

export default About;
