// src/pages/WebDevelopment.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./WebDevelopment.module.css";

const WebDevelopment = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <img
          src="/servicesHero2.png" // Placeholder for your image
          alt="Contact Page Hero Background"
          className={styles.heroBackgroundImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/2560x1440/1A1A1A/5CE1E6?text=Image+Not+Found";
          }} // Fallback
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>
            Web Development: Building Your Digital Future
          </h1>
          <p className={styles.heroSubheadline}>
            From dynamic web applications to robust e-commerce platforms, we
            engineer high-performance, scalable, and secure websites that drive
            your business forward.
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className={styles.servicesOverviewSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeadline}>
            Our Web Development Expertise
          </h2>
          <p className={styles.sectionSubheadline}>
            We combine cutting-edge technology with strong attention to
            detail to deliver our web solutions.
          </p>

          <div className={styles.serviceGrid}>
            <div className={styles.serviceItem}>
              <img
                src="custom-web-apps.png"
                alt="Custom Web Applications Icon"
                className={styles.serviceIcon}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "../app.png";
                }}
              />
              <h3 className={styles.serviceTitle}>Custom Web Applications</h3>
              <p className={styles.serviceDescription}>
                Tailored web solutions built from the ground up to meet your
                unique business processes and user needs. Scalable, secure, and
                highly functional.
              </p>
              <Link to="/contact" className={styles.serviceCtaButton}> {/* Changed class here */}
                Check it out
              </Link>
            </div>
            <div className={styles.serviceItem}>
              <img
                src="ecommerce.png"
                alt="E-commerce Solutions Icon"
                className={styles.serviceIcon}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "../shop.png";
                }}
              />
              <h3 className={styles.serviceTitle}>E-commerce Solutions</h3>
              <p className={styles.serviceDescription}>
                Powerful online stores designed to maximize sales, streamline
                operations, and provide an intuitive shopping experience for
                your customers.
              </p>
              <Link to="/contact" className={styles.serviceCtaButton}> {/* Changed class here */}
                Check it out
              </Link>
            </div>
            <div className={styles.serviceItem}>
              <img
                src="cms.png"
                alt="Fitness Coach landing pages"
                className={styles.serviceIcon}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "../coach.png";
                }}
              />
              <h3 className={styles.serviceTitle}>
                Fitness Coach Websites
              </h3>
              <p className={styles.serviceDescription}>
                Unlock your online potential with custom-designed fitness coach
                landing pages. Fully automated and delivered to you in 72 hours.
              </p>
              <Link to="/fitness-coach-websites" className={styles.serviceCtaButton}> {/* Changed link here */}
                Check it out
              </Link>
            </div>
            <div className={styles.serviceItem}>
              <img
                src="api-integration.png"
                alt="API Integration Icon"
                className={styles.serviceIcon}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "../api.png";
                }}
              />
              <h3 className={styles.serviceTitle}>
                API Integrations & Third-Party Services
              </h3>
              <p className={styles.serviceDescription}>
                Seamlessly connect your website with other crucial platforms
                like CRM, payment gateways, marketing automation, and more for
                enhanced functionality.
              </p>
              <Link to="/contact" className={styles.serviceCtaButton}> {/* Changed class here */}
                Check it out
              </Link>
            </div>
            <div className={styles.serviceItem}>
              <img
                src="maintenance.png"
                alt="Maintenance & Support Icon"
                className={styles.serviceIcon}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "../mnt.png";
                }}
              />
              <h3 className={styles.serviceTitle}>
                Website Maintenance & Support
              </h3>
              <p className={styles.serviceDescription}>
                Ensuring your website remains secure, updated, and performs
                optimally with ongoing support, bug fixes, and performance
                monitoring.
              </p>
              <Link to="/contact" className={styles.serviceCtaButton}> {/* Changed class here */}
                Check it out
              </Link>
            </div>
            <div className={styles.serviceItem}>
              <img
                src="optimization.png"
                alt="Performance Optimization Icon"
                className={styles.serviceIcon}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "../seo.png";
                }}
              />
              <h3 className={styles.serviceTitle}>
                Performance & Security Optimization
              </h3>
              <p className={styles.serviceDescription}>
                Boosting your website's speed and fortifying its security
                against threats, ensuring a reliable and fast experience for
                your users.
              </p>
              <Link to="/contact" className={styles.serviceCtaButton}> {/* Changed class here */}
                Check it out
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeadline}>Our Development Process</h2>
          <p className={styles.sectionSubheadline}>
            A transparent and collaborative approach to bring your project from
            concept to launch.
          </p>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>1</span>
              <h3 className={styles.stepTitle}>Discovery & Planning</h3>
              <p className={styles.stepDescription}>
                We start by understanding your vision, goals, and target
                audience to define project scope and strategy.
              </p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>2</span>
              <h3 className={styles.stepTitle}>Design & Prototyping</h3>
              <p className={styles.stepDescription}>
                Crafting intuitive UI/UX, wireframes, and mockups to visualize
                the website's structure and aesthetics.
              </p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>3</span>
              <h3 className={styles.stepTitle}>Development & Testing</h3>
              <p className={styles.stepDescription}>
                Bringing the design to life with clean code, rigorous testing,
                and continuous integration.
              </p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>4</span>
              <h3 className={styles.stepTitle}>Deployment & Launch</h3>
              <p className={styles.stepDescription}>
                Seamless deployment, ensuring your website goes live efficiently
                and without issues.
              </p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>5</span>
              <h3 className={styles.stepTitle}>Support & Evolution</h3>
              <p className={styles.stepDescription}>
                Ongoing maintenance, performance monitoring, and scalable
                solutions for future growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaHeadline}>
            Ready to Build Your Next Digital Masterpiece?
          </h2>
          <p className={styles.ctaSubheadline}>
            Contact us today to discuss your project and receive a personalized
            consultation.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default WebDevelopment;
