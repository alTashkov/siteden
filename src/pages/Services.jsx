// src/pages/Services.jsx
import React, { useState, useEffect, useRef } from 'react'; // Added useState, useEffect, useRef for fox animation
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

const Services = () => {
  const serviceCategories = [
    {
      id: 'webdev',
      title: 'Web Development',
      description: 'Building robust, scalable, and responsive websites from scratch. Whether it’s a custom web application, an e-commerce platform, or a corporate site, we deliver cutting-edge solutions tailored to your needs.',
      icon: 'webdev8.png', // Placeholder for your icon PNG
      link: '/services/web-development',
      price: { heading: 'STARTING AT', value: '$89', unit: '' },
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'CMS Development',
        'API Integration'
      ]
    },
    {
      id: 'graphics',
      title: 'Graphics Design',
      description: 'From captivating logos to compelling marketing materials, we bring your brand’s visual story to life with precision and creativity. We focus on impactful design that resonates with your audience.',
      icon: 'pallete2.png', // Placeholder for your icon PNG
      link: '/services/graphics-design', // Link to a more detailed page if needed
      price: { heading: 'STARTING AT', value: '$148', unit: '' }, // Updated price object
      features: [
        'Logo & Branding',
        'Print & Digital Collaterals',
        'Social Media Graphics',
        'Illustration & Infographics'
      ]
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      description: 'Crafting intuitive and engaging user experiences (UX) and visually stunning user interfaces (UI). Our designs prioritize usability, accessibility, and aesthetic appeal to ensure seamless interaction.',
      icon: 'stars2.png', // Placeholder for your icon PNG
      link: '/services/uiux-design',
      price: { heading: 'STARTING AT', value: '$199', unit: '' },
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Interface Design',
        'Usability Testing'
      ]
    },
    
    {
      id: 'branding',
      title: 'Brand Strategy',
      description: 'Developing comprehensive brand strategies that define your identity, message, and market positioning. We ensure your brand communicates its unique value proposition effectively across all touchpoints.',
      icon: 'bulb3.png', // Placeholder for your icon PNG
      link: '/services/brand-strategy',
      price: { heading: 'STARTING AT', value: '$499', unit: '' },
      features: [
        'Brand Identity Development',
        'Market Positioning',
        'Brand Messaging',
        'Visual Brand Guidelines'
      ]
    },
    {
      id: 'seo',
      title: 'SEO & Digital Marketing',
      description: 'Boosting your online visibility and driving targeted traffic. Our SEO strategies, content marketing, and social media campaigns help your business rank higher and reach its ideal customers.',
      icon: 'expert2.png', // Placeholder for your icon PNG
      link: '/services/seo-marketing',
      price: { heading: 'PLAN', value: 'CUSTOM QUOTE', unit: '' }, // Modified for "Custom Quote"
      features: [
        'Keyword Research',
        'On-Page & Off-Page SEO',
        'Content Marketing',
        'Performance Tracking'
      ]
    },
    {
      id: 'consulting',
      title: 'Digital Consulting',
      description: 'Providing expert guidance on your digital transformation journey. From technology stack recommendations to process optimization, we help you navigate the complexities of the digital landscape.',
      icon: 'client2.png', // Placeholder for your icon PNG
      link: '/services/digital-consulting',
      price: { heading: 'PLAN', value: 'HOURLY RATE', unit: '' }, // Modified for "Hourly Rate"
      features: [
        'Digital Strategy',
        'Technology Stack Advisory',
        'Process Optimization',
        'Digital Transformation Roadmaps'
      ]
    }
  ];

  // State for fox astronaut position, rotation, and vertical offset
  const [foxPosition, setFoxPosition] = useState(0); // horizontal position
  const [foxDirection, setFoxDirection] = useState(1); // 1 = right, -1 = left
  const [foxRotation, setFoxRotation] = useState(0); // rotation in degrees
  const [foxVerticalOffset, setFoxVerticalOffset] = useState(0); // vertical offset for bobbing

  const foxRef = useRef(null);
  const heroRef = useRef(null);
  const animationFrameId = useRef(null);
  const startTime = useRef(performance.now());

  useEffect(() => {
    const foxSpeedX = 0.3; // Horizontal speed (pixels per frame)
    const foxRotationSpeed = 0.05; // Rotation speed (degrees per frame)
    const foxVerticalAmplitude = 15; // Vertical bobbing amplitude in pixels
    const foxVerticalFrequency = 0.002; // How fast it bobs (smaller = slower)

    const animateFox = (currentTime) => {
      if (!foxRef.current || !heroRef.current) {
        animationFrameId.current = requestAnimationFrame(animateFox);
        return;
      }

      const elapsed = currentTime - startTime.current;

      const heroWidth = heroRef.current.offsetWidth;
      const foxWidth = foxRef.current.offsetWidth;
      const horizontalBuffer = 50; // Padding from left/right edges
      const maxPosition = heroWidth - foxWidth - horizontalBuffer;

      setFoxPosition(prevPos => {
        let newPos = prevPos + foxDirection * foxSpeedX;

        if (newPos > maxPosition) {
          newPos = maxPosition;
          setFoxDirection(-1);
          // Optional: Add a slight rotation change when direction reverses for a "turn" effect
          setFoxRotation(prevRot => prevRot + 10);
        } else if (newPos < horizontalBuffer) { // Check against buffer from left
          newPos = horizontalBuffer;
          setFoxDirection(1);
          // Optional: Add a slight rotation change when direction reverses
          setFoxRotation(prevRot => prevRot - 10);
        }
        return newPos;
      });

      // Continuous rotation
      setFoxRotation(prevRot => (prevRot + foxRotationSpeed) % 360);

      // Vertical bobbing motion using sine wave
      setFoxVerticalOffset(foxVerticalAmplitude * Math.sin(elapsed * foxVerticalFrequency));

      animationFrameId.current = requestAnimationFrame(animateFox);
    };

    animationFrameId.current = requestAnimationFrame(animateFox);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [foxDirection]); // Re-run effect if direction changes


  return (
    <>
      <section ref={heroRef} className={styles.servicesHero}>
        {/* Added the image for the hero background */}
        <img
          src="servicesHero2.png" // Placeholder for your image
          alt="Cosmic background for services"
          className={styles.heroBackgroundImage}
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/2560x1440/1A1A1A/5CE1E6?text=Image+Not+Found"; }} // Fallback
        />
        <div className={styles.heroOverlay}></div>
        {/* Fox astronaut image, positioned and animated via state */}
        <img
          ref={foxRef}
          src="astroFox2.png" // Placeholder for your fox astronaut image
          alt="Fox Astronaut"
          className={styles.foxAstronaut}
          // Apply all transform properties via style for JavaScript control
          style={{
            transform: `translateX(${foxPosition}px) translateY(calc(-50% + ${foxVerticalOffset}px)) rotate(${foxRotation}deg)`
          }}
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/5ce1e6/1A1A1A?text=FOX"; }} // Fallback
        />

        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>Our Services</h1>
          <p className={styles.heroSubheadline}>
            From concept to launch, we provide end-to-end digital solutions designed to elevate your brand and drive your online success.
          </p>
        </div>
      </section>

      <section className={styles.servicesGridSection}>
        <div className={styles.container}>
          <h2 className={styles.gridHeadline}>What We Offer</h2>
          <p className={styles.gridSubheadline}>
            Explore our specialized areas of expertise, crafted to transform your vision into a powerful online presence.
          </p>

          <div className={styles.servicesGrid}>
            {serviceCategories.map((service) => (
              // Wrapper for the two "glued" cards
              <div key={service.id} className={styles.serviceCardWrapper}>
                {/* Main Service Card */}
                <div className={styles.serviceCardMain}>
                  <div className={styles.iconWrapper}>
                    <img src={service.icon} alt={`${service.title} icon`} className={styles.serviceIcon} />
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <Link to={service.link} className={styles.learnMoreButton}>
                    Learn More
                  </Link>
                </div>

                {/* Price and Features Card (glued to the main card) */}
                <div className={styles.serviceCardPriceSection}>
                  <div className={styles.priceDisplayWrapper}>
                    {service.price.heading && <span className={styles.priceHeading}>{service.price.heading}</span>}
                    <span className={styles.priceNumber}>{service.price.value}</span>
                    {service.price.unit && <span className={styles.priceDuration}>{service.price.unit}</span>}
                  </div>
                  <ul className={styles.serviceFeatures}>
                    {service.features.map((feature, index) => (
                      <li key={index}><span className={styles.featureBullet}>•</span> {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusing the CallToActionSection from components for consistency */}
      {/* Ensure CallToActionSection is imported and available in App.jsx routing */}
      {/* <CallToActionSection /> */}
    </>
  );
};

export default Services;
