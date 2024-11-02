"use client";
import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  ForwardedRef,
} from "react";
import { motion } from "framer-motion";
import SplitType from "split-type";
import styles from "./Text.module.scss";
import { lineAnimation, opacityAnimation } from "./anim";

type AvailableStyles =
  | "hero_title"
  | "hero_ontitle"
  | "hero_text"
  | "text_regular"
  | "text_regular_bold"
  | "text_bold"
  | "title_small"
  | "uppercase"
  | "ad_title"
  | "ad_title_small"
  | "count_title_one"
  | "count_desc_one"
  | "footer_title"
  | "footer_ontitle"
  | "ad_subtitle_bold"
  | "ad_subtitle"
  | "count_small"
  | "count_mid"
  | "count_big"
  | "home_title"
  | "text_semi_bold"
  | "carroussel_title"
  | "carousel_title_responsive";

type ValidTags = "div" | "p" | "span" | "h1" | "h2" | "h3";

interface TitleProps {
  children: React.ReactNode;
  balise?: ValidTags;
  style?: AvailableStyles;
  className?: string;
  trigger?: "load" | "scroll" | "none";
  delay?: number;
  externalTrigger?: boolean;
  startAnimation?: boolean;
  direction?: "up" | "down" | "left" | "right";
  splitBy?: "lines" | "words";
  split?: boolean;
}

const Component = forwardRef<
  HTMLElement,
  | React.HTMLProps<HTMLDivElement>
  | React.HTMLProps<HTMLParagraphElement>
  | React.HTMLProps<HTMLSpanElement>
>((props, ref: ForwardedRef<HTMLElement>) => (
  <span ref={ref as ForwardedRef<HTMLDivElement>} {...props} />
));

Component.displayName = "DynamicComponent";

const MotionComponent = motion.create(Component);

export const Text: React.FC<TitleProps> = ({
  children,
  balise = "p",
  style = "text_regular",
  className = "",
  trigger = "scroll",
  delay = 0,
  externalTrigger = false,
  startAnimation = false,
  direction = "up",
  splitBy = "lines",
  split = true,
}) => {
  const target = useRef<HTMLElement | null>(null);
  const [elements, setElements] = useState<string[]>([]);
  const [isInView, setIsInView] = useState(
    trigger === "load" || startAnimation
  );

  useEffect(() => {
    if (target.current && split) {
      const text = new SplitType(target.current, { types: splitBy });
      const splitElements = splitBy === "lines" ? text.lines : text.words;
      if (splitElements) {
        const newElements = splitElements.map(
          (element: HTMLElement) => element.textContent || ""
        );
        setElements(newElements);
      }
    }
  }, [target, splitBy]);

  useEffect(() => {
    if (trigger === "load") {
      setIsInView(true);
    }

    if (trigger === "none") {
      setIsInView(false);
    }

    if (externalTrigger && startAnimation) {
      setIsInView(true);
    }
  }, [trigger, startAnimation, externalTrigger]);

  if (split) {
    return (
      <>
        <MotionComponent
          as={balise}
          ref={target}
          className={`${styles[style]} ${className}`}
          initial="initial"
          animate={isInView ? "enter" : "initial"}
          exit="exit"
          onViewportEnter={() =>
            !externalTrigger && trigger === "scroll" && setIsInView(true)
          }
          viewport={{ once: true, amount: 0.5 }}
        >
          {elements.length > 0 ? (
            <>
              <span className={`d_block`}>
                {elements.map((element, i) => (
                  <span
                    key={`element-${i}`}
                    className={`${styles["line-wrapper"]} d_block`}
                  >
                    <motion.span
                      key={i}
                      className={`${styles.element} d_block`}
                      variants={lineAnimation(delay, direction)}
                      initial="initial"
                      animate={isInView ? "enter" : "exit"}
                      exit="exit"
                    >
                      {element}
                    </motion.span>
                  </span>
                ))}
              </span>
            </>
          ) : (
            children
          )}
        </MotionComponent>
      </>
    );
  } else {
    return (
      <>
        <motion.span
          className={`${styles[style]} ${className}`}
          variants={opacityAnimation(delay)} // Animation basée sur l'opacité si pas de SplitType
          initial="initial"
          animate={isInView ? "enter" : "exit"}
          exit="exit"
        >
          {children}
        </motion.span>
      </>
    );
  }
};
