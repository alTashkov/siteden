// src/components/ServicesOverview/ServicesOverview.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom is used for navigation
import styles from './ServicesOverview.module.css';

const ServicesOverview = () => {
  // Define your services with their details, including image placeholders
  const services = [
    {
      id: 'webdev',
      tabTitle: 'Web Development',
      mainTitle: 'Web Development',
      description: 'Building responsive, high-performance websites tailored to your unique business needs. From custom web apps to complex e-commerce platforms, we build it all.',
      imageUrl: 'webdev3.png', // Placeholder image
      iconDefault: 'webdev7.png',
      iconActive: 'webdev8.png'
    },
    {
      id: 'graphics',
      tabTitle: 'Graphics Design',
      mainTitle: 'Graphics Design',
      description: 'We roar with success, delivering the triumph through versatile design, branding and the latest tech. Our creative solutions bring your brand to life.',
      imageUrl: 'paint3.png', // Placeholder image
      iconDefault: 'pallete.png',
      iconActive: 'pallete2.png'
    },
    {
      id: 'uiux',
      tabTitle: 'UI/UX Design',
      mainTitle: 'UI/UX Design',
      description: 'Crafting intuitive and engaging user experiences. We focus on user research, wireframing, prototyping, and user testing to create seamless digital products.',
      imageUrl: 'uiux.png', // Placeholder image
      iconDefault: 'stars.png',
      iconActive: 'stars2.png'
    },
    
  ];

  const [activeService, setActiveService] = useState(services[0].id); // State to manage active tab

  const currentService = services.find(service => service.id === activeService);

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <h2 className={styles.sectionHeadline}>Our Services.</h2>
          <p className={styles.sectionSubheadline}>
            We want to transform what you imagine into reality. <br />Through versatile design, branding and the latest tech.
          </p>
          <Link to="/services" className={styles.exploreMoreButton}>
            Explore More &gt;
          </Link>
        </div>

        <div className={styles.mainContentArea}>
          <div className={styles.tabNavigation}>
            {services.map((service) => (
              <button
                key={service.id}
                className={`${styles.tabButton} ${activeService === service.id ? styles.activeTab : ''}`}
                onClick={() => setActiveService(service.id)}
              >
                <span className={styles.tabIcon}><img className="iconImage" src={activeService === service.id ? service.iconActive : service.iconDefault} alt="" /></span>
                {service.tabTitle}
              </button>
            ))}
          </div>

          <div className={styles.serviceDetailCard}>
            <div className={styles.serviceTextContent}>
              <h3 className={styles.serviceDetailTitle}>{currentService.mainTitle}</h3>
              <p className={styles.serviceDetailDescription}>
                {currentService.description}
              </p>
              <Link to="/contact" className={styles.letsChatButton}>
                Let's Chat
              </Link>
            </div>
            <div className={styles.serviceImageContainer}>
              <img
                src={currentService.imageUrl}
                alt={currentService.mainTitle}
                className={styles.serviceImage}
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x450/CCCCCC/333333?text=Image+Error"; }} // Fallback image
              />
               <div className={styles.imageOverlay}></div> {/* New overlay for aesthetic */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
