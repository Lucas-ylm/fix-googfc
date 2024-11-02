import { motion } from "framer-motion";
import styles from "./LandingPage.module.scss";
import { Text } from "@/components/Blocks/Text";
import { maskImageOnTop, drawLine, drawLineDown } from "./anim";
import { useEffect, useState } from "react";
import { env } from "@/lib/env";

interface LandingPageProps {
  isCarroussel?: boolean;
  isScrollUp: boolean;
  setIsScrollUp: (value: boolean) => void;
  isFirstRender: boolean;
  isScrollDown: boolean;
  setIsScrollDown: (value: boolean) => void;
}

export const LandingPageComponent: React.FC<LandingPageProps> = ({
  isCarroussel,
  isFirstRender,
  isScrollUp,
  setIsScrollUp,
  isScrollDown,
  setIsScrollDown,
}) => {
    const [isForcedIndex, setIsForcedIndex] = useState(false);
    useEffect(() => {
        if (isFirstRender || isScrollDown || isScrollUp ) {
            setIsForcedIndex(true);
        }
        const clearScrollUp = setTimeout(() => {
            isScrollUp && setIsScrollUp(false);
        }, 1000);
        const clearScrollDown = setTimeout(() => {
            isScrollDown && setIsScrollDown(false);
        }, 1500);
        const clearForcedIndex = setTimeout(() => {
            isForcedIndex && setIsForcedIndex(false);
        }, 1750);
        return () => {
            clearTimeout(clearScrollUp);
            clearTimeout(clearScrollDown);
            clearTimeout(clearForcedIndex);
        };
    }, [isScrollUp, isScrollDown, isForcedIndex, isFirstRender, isCarroussel]);

  return (
    <>
      <motion.img
        src={`${env.BASE_PATH}/assets/home/desktop/visuel-home.webp`}
        alt="hero"
        animate={!isCarroussel ? "enter" : "exit"}
        variants={maskImageOnTop}
        className={styles.heroImage}
        style={isForcedIndex ? { zIndex: 3 } : {}}
      />
      <div
        className={styles.textLanding}
        style={isForcedIndex ? { zIndex: 3 } : {}}
      >
        <motion.svg className={styles.textLandingSvg}>
          <motion.line
            stroke="#fff"
            strokeWidth={2}
            variants={!isCarroussel ? drawLine(isScrollUp) : drawLineDown}
          />
        </motion.svg>
        <Text
          balise="h1"
          style="home_title"
          trigger={!isCarroussel ? "load" : "none"}
          delay={isCarroussel ? 0 : 0.5}
          splitBy="words"
        >
          L’avenir commence maintenant
        </Text>
      </div>
    </>
  );
};
