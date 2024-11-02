import React from "react";
import styles from "./Heropage.module.scss";
import { motion, Variants } from "framer-motion";
import { image, line } from "./anim";
import ExportedPicture from "@/shared/ExportedPicture";

interface HeroPageProps {
  children: React.ReactNode;
  imageUrl?: string;
  imageUrlMobile?: string;
}

const anim = (variants: Variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

export const Heropage: React.FC<HeroPageProps> = ({
  children,
  imageUrl,
  imageUrlMobile,
}) => {
  return (
    <div className={styles.heroImage}>
      <div className={styles.containercontent}>
        <div className={styles.center}>
          <motion.svg className={styles.line}>
            <motion.line
              x1="0"
              y1="0"
              x2="0"
              y2="800"
              stroke="#fff"
              strokeWidth={2}
              {...anim(line)}
            />
          </motion.svg>

          <div className={styles.content}>{children}</div>
        </div>
      </div>
      <motion.div className={styles.imgcontainer} {...anim(image)}>
        {imageUrl && (
          <ExportedPicture
            className={styles.imgDesktop}
            src={imageUrl}
            width={1900}
            height={820}
            alt="Picture of the author"
          />
        )}

        {imageUrlMobile && (
          <ExportedPicture
            className={styles.imgMobile}
            src={imageUrlMobile}
            width={414}
            height={698}
            alt="Picture of the author"
          />
        )}
      </motion.div>
    </div>
  );
};
