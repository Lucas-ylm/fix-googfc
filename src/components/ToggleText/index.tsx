import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./ToggleText.module.scss";
import styleText from "../Blocks/Text/Text.module.scss";
import LazySvg from "../Svg/LazySvg";

interface ToggleTextProps {
  fullText: string[];
}

export const ToggleText: React.FC<ToggleTextProps> = ({ fullText }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.height = "0px";
      }
    }
  }, [isExpanded]);

  return (
    <motion.div ref={containerRef} className={styles.toggleTextWrapper}>
      {/* Contenu animé */}
      <motion.div
        id="toggle-text-content"
        className={styles.toggleTextContent}
        ref={contentRef}
        initial={{ height: 0 }}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        aria-labelledby="show-more-toggle"
        role="region"
      >
        {fullText.map((text, index) => {
          return (
          <p key={index} className={text === 'Des sensations inédites' || text === 'E-5008, le grand SUV 7 places' ? styleText["text_bold"] : styleText["text_regular"]}>
            {text}
          </p>
        )})}
      </motion.div>

      {/* Ligne noire animée entre le contenu et le bouton */}
      <motion.div
        className={styles.line}
        initial={{ width: "0%" }}
        animate={isInView ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      />

      <div className={styles.center_button}>
        <button
          aria-expanded={isExpanded}
          aria-controls="toggle-text-content"
          onClick={handleToggleExpand}
          className={styles.toggleTextButton}
          id="show-more-toggle"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <LazySvg
              name="arrow"
              width={19}
              height={11}
              className={styles.arrow}
            />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
};
