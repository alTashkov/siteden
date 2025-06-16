import React, { useEffect, useState } from "react";
import styles from "./FitnessCoach.module.css";

const AnimatedText = ({ text, start }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!start) return; // don't start until `start` is true
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 100); // speed of animation
      return () => clearTimeout(timeout);
    }
  }, [index, text, start]);

  return (
    <div className={styles.animatedLetterText}>
      {displayedText}
      {start && index < text.length && <span className={styles.cursor}>|</span>}
    </div>
  );
};

export default AnimatedText;
