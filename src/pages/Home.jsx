// src/pages/Home.jsx
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}></div> {/* Optional overlay for text readability */}
      <img
        src="back4.png" // Placeholder image
        alt="Siteden Hero"
        className={styles.heroImage}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1920x1080/4A4A4A/FFFFFF?text=Image+Not+Found"; }} // Fallback
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeadline}><b className='impactful'>Your</b> Vision <br/>Built <b className='impactful'>Beautifully</b>.</h1>
        <p className={styles.heroSubheadline}>
          Crafting digital experiences that capture audiences and drive growth.
        </p>
        {/* You can add a CTA button here later if needed */}
        {/* <button className={styles.heroCtaButton}>Get a Free Quote</button> */}
      </div>
    </section>
  );
};

export default Home;