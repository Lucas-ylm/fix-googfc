import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import de motion
import styles from "./Carousel.module.scss";
import { Splide, SplideSlide, Splide as SplideCore } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import type { Splide as SplideInstance } from "@splidejs/splide";

interface TextContent {
  style: "bold" | "normal" | "semiBold";
  text: string; // Ce texte peut maintenant contenir du HTML
}

export interface ContentProps {
  title: string;
  text: TextContent[];
}

interface CarouselProps {
  content: ContentProps[];
  position?: boolean;
  scroll?: Boolean;
}

export const Carousel: React.FC<CarouselProps> = ({ content = [], position = false, scroll = false }) => {
  const splideRef = useRef<SplideInstance | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNext = () => {
    if (splideRef.current && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        splideRef.current?.go(">");
        setTimeout(() => {
          setIsAnimating(false);
        }, 200);
      }, 200);
    }
  };

  const handlePrev = () => {
    if (splideRef.current && !isAnimating) {
      setIsAnimating(true); // Déclencher l'animation
      setTimeout(() => {
        splideRef.current?.go("<"); // Passe à la slide précédente après l'animation
        setTimeout(() => {
          setIsAnimating(false); // Réactiver après animation
        }, 200); // Durée de désactivation
      }, 200); // Délai synchronisé avec l'animation
    }
  };

  // Utiliser l'événement 'moved' pour mettre à jour l'index de la slide actuelle
  useEffect(() => {
    const splideInstance = splideRef.current;
    if (splideInstance) {
      splideInstance.on("moved", (newIndex) => {
        setCurrentSlide(newIndex + 1); // Splide utilise un index de base 0, donc on ajoute 1
      });
    }
  }, []);

  const sliderVariants = {
    hidden: { opacity: 0, transition: { duration: 0.2 } },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };

  const [hovered, setHovered] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);


  return (
    <>
      <motion.div
        initial="hidden"
        animate={isAnimating ? "hidden" : "visible"}
        variants={sliderVariants}
        transition={{ duration: 0.2 }}
      >
        <Splide
          options={{
            type: "loop",
            arrows: false,
            pagination: false,
            focus: "center",
            drag: false,
            lazyLoad: false,
            classes: {
              arrow: `splide__arrow ${styles.customArrow}`,
              pagination: `splide__pagination ${styles.customPagination} ${styles["is-active"]}`,
              page: `splide__pagination__page ${styles.customPaginationDot}`,
            },
            breakpoints: {
              1280: {
                drag: true,
                // height: 500,
              },
            }
          }}
          aria-label="Textual Content Slider"
          className={styles.sliderWrapper}
          onMounted={(splide: SplideInstance) => (splideRef.current = splide)} // Type explicite pour 'splide'
        >
          {content.length > 0 ? (
            content.map((slideContent, index) => (
              <SplideSlide key={index}>
                <div className={styles.contentWrapper}>
                  <h2 className={styles.title}>{slideContent.title}</h2>
                  <div className={`${styles.container_text} ${scroll ? styles.scroll : ''}`}>
                    {slideContent.text &&
                        slideContent.text.map((paragraph, idx) => (
                        <p
                            key={idx}
                            className={
                              paragraph.style === "bold" 
                                ? styles.boldText 
                                : paragraph.style === "semiBold" 
                                ? styles.semiBoldText 
                                : styles.normalText
                            }
                            dangerouslySetInnerHTML={{ __html: paragraph.text }} // Permet le rendu HTML
                        />
                        ))}
                    </div>
                </div>
              </SplideSlide>
            ))
          ) : (
            <div className={styles.noContent}>Aucun contenu disponible</div>
          )}
        </Splide>
      </motion.div>

      <button
        className={`${styles.button} ${styles.prevButton}`}
        onClick={handlePrev}
        disabled={isAnimating}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path d="M5.69762 10.5866L0.949191 5.85227C0.89283 5.79591 0.852814 5.73485 0.829142 5.6691C0.80547 5.60334 0.793823 5.53289 0.794198 5.45774C0.794198 5.38259 0.805846 5.31214 0.829142 5.24639C0.852438 5.18063 0.892454 5.11958 0.949191 5.06321L5.69762 0.314787C5.82913 0.183278 5.99351 0.117523 6.19078 0.117523C6.38804 0.117523 6.55713 0.187975 6.69803 0.328878C6.83893 0.46978 6.90938 0.634167 6.90938 0.822038C6.90938 1.00991 6.83893 1.17429 6.69803 1.3152L2.55548 5.45774L6.69803 9.60029C6.82954 9.7318 6.89529 9.89393 6.89529 10.0867C6.89529 10.2794 6.82484 10.4461 6.68394 10.5866C6.54304 10.7275 6.37865 10.798 6.19078 10.798C6.00291 10.798 5.83852 10.7275 5.69762 10.5866Z"
                animate={{ fill: hovered ? "#fff" : "#000" }}
                transition={{ duration: 0.2 }}/>
        </svg>
      </button>
      <button
        className={`${styles.button} ${styles.nextButton}`}
        onClick={handleNext}
        disabled={isAnimating}
        onMouseEnter={() => setHoveredRight(true)}
        onMouseLeave={() => setHoveredRight(false)}
      >
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path d="M5.69762 10.5866L0.949191 5.85227C0.89283 5.79591 0.852814 5.73485 0.829142 5.6691C0.80547 5.60334 0.793823 5.53289 0.794198 5.45774C0.794198 5.38259 0.805846 5.31214 0.829142 5.24639C0.852438 5.18063 0.892454 5.11958 0.949191 5.06321L5.69762 0.314787C5.82913 0.183278 5.99351 0.117523 6.19078 0.117523C6.38804 0.117523 6.55713 0.187975 6.69803 0.328878C6.83893 0.46978 6.90938 0.634167 6.90938 0.822038C6.90938 1.00991 6.83893 1.17429 6.69803 1.3152L2.55548 5.45774L6.69803 9.60029C6.82954 9.7318 6.89529 9.89393 6.89529 10.0867C6.89529 10.2794 6.82484 10.4461 6.68394 10.5866C6.54304 10.7275 6.37865 10.798 6.19078 10.798C6.00291 10.798 5.83852 10.7275 5.69762 10.5866Z"
                animate={{ fill: hoveredRight ? "#fff" : "#000" }}
                transition={{ duration: 0.2 }}/>
        </svg>
      </button>

      <div className={`${styles.position} ${position ? styles.positionCustom : ''}`}>
        <span className={styles.currentSpan}>{currentSlide.toString().padStart(2, "0")}</span><span className={styles.span}>/{content.length.toString().padStart(2, "0")}</span>
      </div>

      <style>{`
        .splide .splide__pagination__page.is-active,
        .splide .splide__pagination__page.hover {
          transform: scale(1);
          background: black;
          opacity: 1;
        }
          .splide__slide {
            @media (max-width: 1280px) {
              transition: max-height 0.3s;
              height: 100%;
            }
          }
          .splide__slide:not(.is-active) {
            @media (max-width: 1280px) {
              max-height: 300px;
              transition: max-height 0.3s;
            }
          }

        .splide__list {
            align-items: flex-start;
        }
      `}</style>
    </>
  );
};
