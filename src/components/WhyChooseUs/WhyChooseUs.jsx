// src/components/WhyChooseUs/WhyChooseUs.jsx
import React from 'react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  const advantages = [
    {
      id: 1,
      title: 'Client-Centric Approach',
      description: 'Your goals are our blueprint. We listen, adapt, and build solutions around your unique vision and objectives, ensuring every step aligns with your needs.',
      icon: 'client2.png'
    },
    {
      id: 2,
      title: 'Expert Craftsmanship',
      description: 'Our team comprises seasoned developers and designers passionate about creating pixel-perfect and scalable solutions that stand the test of time.',
      icon: 'expert2.png'
    },
    {
      id: 3,
      title: 'Transparent Communication',
      description: 'We believe in clear, honest, and frequent updates, ensuring you are always in the loop, from initial concepts to final deployment and beyond.',
      icon: 'comm2.png'
    },
    {
      id: 4,
      title: 'Future-Proofing',
      description: 'Staying ahead of evolving digital trends, we build with future scalability in mind, integrating the latest technologies.',
      icon: 'bulb3.png'
    }
  ];

  const advantagesLeft = advantages.slice(0, 2); // First two cards for the left column
  const advantagesRight = advantages.slice(2);   // Last two cards for the right column

  return (
    <section className={styles.whyChooseUsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeadline}>Why Choose Us?</h2>
        <p className={styles.sectionSubheadline}>
          We offer a partnership built on <span className='impactful'>trust</span>, expertise, and a shared vision for <span className='impactful'>success</span>.
        </p>

        {/* New structure: Left Cards | Image | Right Cards */}
        <div className={styles.contentAndImageWrapper}>
          {/* Left Column of Cards */}
          <div className={styles.advantagesColumn}>
            {advantagesLeft.map((advantage) => (
              <div key={advantage.id} className={styles.advantageItem}>
                <div className={styles.iconCircle}>
                  <span className={styles.advantageIcon}><img className='imageIcon' src={advantage.icon} alt="" /></span>
                </div>
                <div className={styles.advantageText}>
                  <h3 className={styles.advantageTitle}>{advantage.title}</h3>
                  <p className={styles.advantageDescription}>{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Central Image */}
          <div className={styles.whyChooseUsImageWrapper}>
            <img
              src="cosmosFox2.png"
              alt="Why Choose Us? - Abstract Digital Concept"
              className={styles.whyChooseUsImage}
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x1600/2c769f/5ce1e6?text=Image+Not+Found"; }} // Fallback
            />
             {/* Image overlay removed */}
          </div>

          {/* Right Column of Cards */}
          <div className={styles.advantagesColumn}>
            {advantagesRight.map((advantage) => (
              <div key={advantage.id} className={styles.advantageItem}>
                <div className={styles.iconCircle}>
                  <span className={styles.advantageIcon}><img className='imageIcon' src={advantage.icon} alt="" /></span>
                </div>
                <div className={styles.advantageText}>
                  <h3 className={styles.advantageTitle}>{advantage.title}</h3>
                  <p className={styles.advantageDescription}>{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
