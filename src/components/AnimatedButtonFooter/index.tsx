import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedButtonFooter.module.scss';
import { buttonAnimation, backgroundAnimation, buttonAnimationBlack } from './anim';

interface ButtonProps {
  href?: string;
  text?: string;
  trigger?: 'load' | 'scroll';
  startAnimation?: boolean;
  style?: 'white' | 'black';
  isHover?: boolean; // isHover prop to allow external control
  setIsHover?: (hover: boolean) => void; // Callback to change isHover state
}

export const AnimatedButtonFooter: React.FC<ButtonProps> = ({
  text,
  trigger = 'load',
  startAnimation = false,
  style = 'white',
  isHover = false,
  setIsHover
}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // Track if the component is mounted

  // Ensure that the component is only interactive after mounting (client-side)
  useEffect(() => {
    setHasMounted(true); // Set hasMounted to true after the component mounts
  }, []);

  useEffect(() => {
    if (trigger === 'load' || startAnimation) {
      setIsInView(true);
    }
  }, [trigger, startAnimation]);

  // Return null if the component has not mounted to avoid hydration issues
  if (!hasMounted) {
    return null; // Avoid rendering on the server-side
  }

  return (
    <motion.span
        className={`${styles.button} ${styles[style]}`}
        key="button"
        variants={style === 'white' ? buttonAnimation(isHover) : buttonAnimationBlack(isHover)}
        initial="initial"
        animate={isHover ? 'hover' : (isInView ? 'enter' : 'initial')} // Utilisation de isHover pour déclencher l'animation
        exit="exit"
        >
        <span className={styles.buttonContent}>{text}</span>

        <motion.span
            className={styles.backgroundButton}
            key="background"
            variants={backgroundAnimation(isHover)}
            animate={isHover ? 'hover' : 'initial'} // Utilisation de isHover pour le background
        >
        </motion.span>
    </motion.span>
  );
};
