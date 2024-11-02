import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedButton.module.scss';
import Link from 'next/link';
import { buttonAnimation, backgroundAnimation, buttonAnimationBlack, backgroundAnimationBlack } from './anim';

interface ButtonProps {
  href: string;
  text?: string;
  trigger?: 'load' | 'scroll';
  startAnimation?: boolean;
  style?: 'white' | 'black';
}

export const AnimatedButton: React.FC<ButtonProps> = ({
  href,
  text,
  trigger = 'load',
  startAnimation = false,
  style = 'white'
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isInView, setIsInView] = useState(trigger === 'load' || startAnimation);

  useEffect(() => {
    if (trigger === 'load') {
      setIsInView(true);
    }

    if (startAnimation) {
      setIsInView(true);
    }
  }, [trigger, startAnimation]);

  return (
    <Link href={href} passHref legacyBehavior scroll={false}>
      <motion.a
        className={`${styles.button} ${styles[style]}`}
        key="button"
        variants={style === 'white' ? buttonAnimation(isHover) : buttonAnimationBlack(isHover)}
        initial="initial"
        animate={isInView ? 'enter' : 'initial'}
        exit="exit"
        whileHover="hover"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <span className={styles.buttonContent}>{text}</span>

        <motion.span
          className={styles.backgroundButton}
            key="background"
            variants={backgroundAnimation(isHover)}
            >
        </motion.span>
      </motion.a>
    </Link>
  );
};
