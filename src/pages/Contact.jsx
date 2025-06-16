// src/pages/Contact.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showMessageBox, setShowMessageBox] = useState(false);
  const [messageContent, setMessageContent] = useState('');

  const heroRef = useRef(null);
  const animationFrameId = useRef(null);

  // Initialize letters with random properties
  const [animatedLetters, setAnimatedLetters] = useState([]);

  useEffect(() => {
    // Initialize letters only once, after heroRef is available for width
    const initializeLetters = () => {
      if (!heroRef.current) return;

      const newLetters = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        // Changed the image source to an envelope placeholder
        src: `letter.png`, // Placeholder for envelope image
        x: Math.random() * heroRef.current.offsetWidth, // Random X pixel position within hero width
        y: Math.random() * -heroRef.current.offsetHeight, // Start above the hero section
        velocityY: 0, // Initial vertical velocity
        rotation: Math.random() * 360, // Initial random rotation
        rotationSpeed: (Math.random() - 0.5) * 2 // Random rotation speed and direction
      }));
      setAnimatedLetters(newLetters);
    };

    // Delay initialization until heroRef is available
    const timeoutId = setTimeout(initializeLetters, 100); // Give ref a moment to attach

    const animateLetters = (currentTime) => {
      if (!heroRef.current || animatedLetters.length === 0) {
        animationFrameId.current = requestAnimationFrame(animateLetters);
        return;
      }

      const heroRect = heroRef.current.getBoundingClientRect();
      const heroHeight = heroRect.height;
      const heroWidth = heroRect.width;
      const letterSize = 30; // Assuming 30x30 from placeholder

      const gravity = 0.04; // Gentle gravity
      const bounceDamping = 0.7; // How much speed is retained after bounce (0-1)
      const minBounceVelocity = 0.5; // Minimum velocity to consider a bounce
      const rotationFriction = 0.98; // Reduce rotation speed slightly after bounce

      setAnimatedLetters(prevLetters => prevLetters.map(letter => {
        let { x, y, velocityY, rotation, rotationSpeed } = letter;

        // Apply gravity
        velocityY += gravity;
        y += velocityY;

        // Apply rotation
        rotation = (rotation + rotationSpeed) % 360;

        // Bounce from bottom
        if (y + letterSize > heroHeight) {
          y = heroHeight - letterSize; // Snap to bottom
          velocityY *= -bounceDamping; // Reverse and dampen velocity
          rotationSpeed *= rotationFriction; // Dampen rotation

          // If bounce is too weak, or it's gone off the side, reset it to the top
          if (Math.abs(velocityY) < minBounceVelocity || x < -letterSize || x > heroWidth + letterSize) {
            y = Math.random() * -heroHeight; // Reset far above the hero
            x = Math.random() * (heroWidth - letterSize); // New random horizontal position
            velocityY = 0; // Start with 0 velocity
            rotation = Math.random() * 360;
            rotationSpeed = (Math.random() - 0.5) * 2;
          }
        }
        
        // Ensure x stays within reasonable bounds when resetting or animating
        if (x < -letterSize * 2) x = heroWidth + letterSize; // If off left, warp to right
        if (x > heroWidth + letterSize * 2) x = -letterSize; // If off right, warp to left


        return { ...letter, x, y, velocityY, rotation, rotationSpeed };
      }));

      animationFrameId.current = requestAnimationFrame(animateLetters);
    };

    animationFrameId.current = requestAnimationFrame(animateLetters);

    return () => {
      clearTimeout(timeoutId); // Clean up timeout
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animatedLetters.length]); // Re-run effect if animatedLetters state changes (only on initial letters array generation)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    setMessageContent('Thank you for your message! We will get back to you soon.');
    setShowMessageBox(true);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const closeMessageBox = () => {
    setShowMessageBox(false);
    setMessageContent('');
  };

  return (
    <>
      <section ref={heroRef} className={styles.contactHero}>
        {/* Added the hero background image */}
        <img
          src="servicesHero2.png" // Placeholder for your image
          alt="Contact Page Hero Background"
          className={styles.heroBackgroundImage}
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/2560x1440/1A1A1A/5CE1E6?text=Image+Not+Found"; }} // Fallback
        />
        <div className={styles.heroOverlay}></div>
        {/* Animated falling letters */}
        {animatedLetters.map(letter => (
          <img
            key={letter.id}
            src={letter.src}
            alt="Animated Envelope"
            className={styles.fallingLetter}
            style={{
              left: `${letter.x}px`,
              top: `${letter.y}px`,
              transform: `rotate(${letter.rotation}deg)`
            }}
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/30x30/FFFFFF/2c769f?text=✉️"; }} // Fallback
          />
        ))}
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>Get In Touch</h1>
          <p className={styles.heroSubheadline}>
            Have a <span className='impactful'>project</span> in mind or just want to chat?<br/> We'd <span className='impactful'>love</span> to hear from <span className='impactful'>you</span>.
          </p>
        </div>
      </section>

      <section className={styles.contactFormSection}>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <h2 className={styles.formHeadline}>Send Us a Message</h2>
            <p className={styles.formSubheadline}>
              Fill out the form below and we'll get back to you within 24-48 hours.
            </p>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formInput}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.formInput}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.formTextarea}
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>

          <div className={styles.contactDetails}>
            <h2 className={styles.detailsHeadline}>Our Details</h2>
            
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}><img className={styles.sideImage} src="email.png" alt="" /></span>
              <p>Email: <a href="mailto:info@siteden.com">info@siteden.com</a></p>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}><img className={styles.sideImage} src="phone.png" alt="" /></span>
              <p>Phone: +359 88X XXX XXX</p>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}><img className={styles.sideImage} src="location.png" alt="" /></span>
              <p>Address: Sofia, Bulgaria</p>
            </div>
            {/* Social media links could go here if not in footer */}
            <div className={styles.socialLinks}>
                <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <img src="https://placehold.co/30x30/FFFFFF/2c769f?text=LI" alt="LinkedIn" />
                </a>
                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                    <img src="https://placehold.co/30x30/FFFFFF/2c769f?text=FB" alt="Facebook" />
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Message Box/Modal */}
      {showMessageBox && (
        <div className={styles.messageBoxOverlay}>
          <div className={styles.messageBox}>
            <p className={styles.messageBoxContent}>{messageContent}</p>
            <button onClick={closeMessageBox} className={styles.messageBoxButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
