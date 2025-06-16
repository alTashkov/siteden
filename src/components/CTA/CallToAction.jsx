// src/components/CallToActionSection/CallToActionSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      {/* New: Fox image added to the CTA section */}
      <img
        src="thinking2.png" // Placeholder for your fox image
        alt="Siteden Fox Illustration"
        className={styles.ctaFoxImage}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/5ce1e6/2c769f?text=FOX"; }} // Fallback
      />
      <div className={styles.container}>
        <h2 className={styles.ctaHeadline}>Ready to transform <span className='impactful'>Your</span> online presence?</h2>
        <p className={styles.ctaSubheadline}>
          Let's discuss your project and discover how we can help you achieve your digital goals.
        </p>
        <Link to="/contact" className={styles.ctaButton}>
          Get Your Free Quote
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
