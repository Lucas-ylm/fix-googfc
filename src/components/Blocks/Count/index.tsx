import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import styles from "./Count.module.scss";

interface CountProps {
  start: number;
  end: number;
  duration: number;
  delay?: number;
  style?: "small" | "mid" | "big";
  showKm?: boolean;
  showMin?: boolean;
  showAns?: boolean;
  addSpaceNumber?: boolean; // Nouveau paramètre pour activer ou désactiver l'espace des milliers
}

export const Count: React.FC<CountProps> = ({
  start,
  end,
  duration,
  delay = 0,
  style = "small",
  showKm = false,
  showMin = false,
  showAns = false,
  addSpaceNumber = true, // Valeur par défaut pour ajouter des espaces
}) => {
  const count = useMotionValue(start);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      setTimeout(() => {
        const controls = animate(count, end, {
          duration: duration,
          ease: [0.42, 0, 0.58, 1],
        });

        return controls.stop;
      }, delay * 1000);
    }
  }, [isInView, hasAnimated, count, end, duration, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latestValue) => {
      setDisplayValue(latestValue);
    });

    return () => unsubscribe();
  }, [rounded]);

  return (
    <div ref={ref} className={styles.digitWrapper}>
      <motion.span className={`${styles.count} ${styles[style]}`}>
        {/* Appliquer toLocaleString si addSpaceNumber est vrai */}
        {addSpaceNumber
          ? displayValue.toLocaleString("fr-FR")
          : displayValue}{" "}
        {showKm && " km"}
        {showMin && " min"}
        {showAns && " ans"}
      </motion.span>
    </div>
  );
};
