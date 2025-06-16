// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) { // Add background when scrolled more than 50px
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolledHeader : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img src="logo5.png" alt="Siteden Logo" />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button className={`${styles.menuToggle} ${isOpen ? styles.menuToggleOpen : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Navigation */}
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          <ul>
            {/* Added data-text attribute to each NavLink */}
            <li><NavLink to="/" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.activeLink : undefined} data-text="Home">Home</NavLink></li>
            <li><NavLink to="/services" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.activeLink : undefined} data-text="Services">Services</NavLink></li>
            <li><NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.activeLink : undefined} data-text="About">About</NavLink></li>
            <li><NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.activeLink : undefined} data-text="Contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;