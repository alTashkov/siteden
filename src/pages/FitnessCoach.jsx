// src/pages/FitnessCoachWebsitesPage.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./FitnessCoach.module.css"; // Import CSS module

// AnimatedText component to animate letter-by-letter when 'start' is true
// Supports two lines split by props: textLine1 and textLine2
const AnimatedText = ({ textLine1, textLine2, start }) => {
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [index, setIndex] = useState(0);

  // Combine both lines with a space for total length calculation
  const totalLength = textLine1.length + textLine2.length;

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!start) return;

    if (index < totalLength) {
      const timeout = setTimeout(() => {
        if (index < textLine1.length) {
          setDisplayedText1((prev) => prev + textLine1.charAt(index));
        } else {
          // Index relative to second line start
          const idx2 = index - textLine1.length;
          setDisplayedText2((prev) => prev + textLine2.charAt(idx2));
        }
        setIndex(index + 1);
      }, 100); // Adjust speed here (ms)
      return () => clearTimeout(timeout);
    }
  }, [index, start, textLine1, textLine2, totalLength]);

  return (
    <h2 className={styles.animatedLargeText}>
      <div>{displayedText1}</div>
      <div>{displayedText2}</div>
      {start && index < totalLength && <span className={styles.cursor}>|</span>}
    </h2>
  );
};

const FitnessCoach = () => {
  const [introVisible, setIntroVisible] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.animatedSection}`);
    const sections2 = document.querySelectorAll(`.${styles.animatedSection2}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);

            if (entry.target === introRef.current) {
              setIntroVisible(true); // Trigger animated text when intro section is visible
            }

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    sections2.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 1. AWARENESS/ATTENTION: Hero Section */}
      <section className={`${styles.heroSection} ${styles.animatedSection}`}>
        <div className={styles.heroOverlay}></div>
        <img
          src="../heroCoach.jpg"
          alt="Fitness Coach Website Background"
          className={styles.heroBackgroundImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/2560x1440/333333/FFFFFF?text=Fitness+Coach+Hero";
          }}
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>
            Attract More Clients. Grow Your Coaching Business.
          </h1>
          <p className={styles.heroSubheadline}>
            Get a high-converting, professional website tailored for fitness
            coaches – designed to showcase your unique expertise and fill your
            client roster.
          </p>
          <Link to="/contact" className={styles.heroCtaButton}>
            Launch My Coaching Website
          </Link>
        </div>
      </section>

      {/* 2. INTEREST: Problem/Solution Introduction */}
      <section
        ref={introRef}
        className={`${styles.introSection} ${styles.animatedSection2}`}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionHeadline}>
            Are You Missing Out on Clients?
          </h2>
          <p className={styles.sectionSubheadline}>
            Many talented fitness coaches struggle to stand out online. Without
            a powerful digital presence, you're leaving money on the table.
          </p>
          <div className={styles.introContent}>
            <div className={styles.introText}>
              {/* Animated letter-by-letter text with two lines */}
              <AnimatedText
                textLine1="Lets make you"
                textLine2="stand out!"
                start={introVisible}
              />
            </div>
            <div className={styles.introImage}>
              <img
                src="../intro4.jpg"
                alt="Fitness Coach Working on Laptop"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/500x350/5CE1E6/1A1A1A?text=Intro+Image";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONSIDERATION/DESIRE: Key Benefits & Features */}
      <section
        className={`${styles.featuresSection} ${styles.animatedSection2}`}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionHeadline}>
            What Makes Our Fitness Coach Websites Convert?
          </h2>
          <p className={styles.sectionSubheadline}>
            Our sites are engineered with specific features to help you attract,
            engage, and convert leads effectively.
          </p>
          <div className={styles.featuresGrid}>
            {[
              [
                "🎯",
                "Client-Attracting Design",
                "Visually stunning and user-friendly designs that immediately convey your professionalism and attract your ideal client.",
              ],
              [
                "📈",
                "Built-in Lead Generation",
                "Strategic calls-to-action, contact forms, and lead magnets integrated to capture interested visitors.",
              ],
              [
                "📅",
                "Seamless Booking Integration",
                "Allow clients to easily schedule and pay for sessions directly through your website, filling your calendar effortlessly.",
              ],
              [
                "✍️",
                "Easy Content Management (CMS)",
                "Update your programs, share success stories, and post new blog content with a simple, intuitive backend.",
              ],
              [
                "📱",
                "Mobile-First Responsiveness",
                "Your website will look flawless and function perfectly on any device, from desktop to smartphone, reaching clients everywhere.",
              ],
              [
                "🔑",
                "Secure & Optimized Performance",
                "Fast loading speeds and robust security to provide a smooth, trustworthy experience for your visitors and Google.",
              ],
            ].map(([icon, title, desc], idx) => (
              <div
                key={idx}
                className={`${styles.featureItem} ${styles.animatedSection}`}
              >
                <span className={styles.featureIcon}>{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTENT/PURCHASE: Our Process */}
      <section className={`${styles.processSection} ${styles.animatedSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeadline}>
            Your Path to a Powerful Online Presence
          </h2>
          <p className={styles.sectionSubheadline}>
            We've streamlined our process to deliver your high-converting
            fitness coach website efficiently and effectively.
          </p>
          <div className={styles.processSteps}>
            {[
              [
                "1",
                "Discovery & Strategy",
                "We start with a deep dive into your brand, goals, and target audience to outline your website's perfect strategy.",
              ],
              [
                "2",
                "Design & Development",
                "Our experts craft a visually compelling and technically sound website, focusing on user experience and conversions.",
              ],
              [
                "3",
                "Launch & Optimization",
                "Your site goes live, equipped with SEO best practices and integrated tools to start attracting and converting clients immediately.",
              ],
              [
                "4",
                "Ongoing Support",
                "We provide continuous maintenance and support to ensure your website remains a powerful asset for your growing business.",
              ],
            ].map(([step, title, desc], idx) => (
              <div
                key={idx}
                className={`${styles.processStep} ${styles.animatedSection}`}
              >
                <span className={styles.stepNumber}>{step}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ACTION: Final Call to Action */}
      <section className={`${styles.ctaSection} ${styles.animatedSection2}`}>
        <div className={styles.container}>
          <h2 className={styles.ctaHeadline}>
            Ready to Transform Your Coaching Business?
          </h2>
          <p className={styles.ctaSubheadline}>
            Stop waiting for clients to find you. Let's build a website that
            actively brings them to you.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default FitnessCoach;
