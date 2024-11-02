import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstance } from "@splidejs/splide";
import LazySvg from "../Svg/LazySvg";
import ExportedPicture from "@/shared/ExportedPicture";
import styles from "./SliderImage.module.scss";
import "@splidejs/splide/dist/css/splide.min.css";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface SliderImageProps {
  images: ImageProps[];
}

export const SliderImage: React.FC<SliderImageProps> = ({ images }) => {
  const splideRef = useRef<SplideInstance | null>(null); // Référence à l'instance de Splide

  const handleNext = () => {
    if (splideRef.current) {
      splideRef.current.go(">"); // Passe à la slide suivante
    }
  };

  const handlePrev = () => {
    if (splideRef.current) {
      splideRef.current.go("<"); // Retourne à la slide précédente
    }
  };

  return (
    <>
      <Splide
        options={{
          type: "loop",
          gap: "1.56rem",
          autoWidth: true,
          arrows: false,
          pagination: true,
          drag: true,
          focus: "center",
          classes: {
            arrow: `splide__arrow ${styles.customArrow}`,
            pagination: `splide__pagination ${styles.customPagination} ${styles["is-active"]}`,
            page: `splide__pagination__page ${styles.customPaginationDot}`,
          },
          breakpoints: {
            1280: {
              autoWidth: false,
              gap: "0rem",
            },
          },
        }}
        aria-label="Image Slider"
        className={styles.sliderWrapper}
        onMounted={(splide: SplideInstance) => (splideRef.current = splide)} // Type explicite pour 'splide'
      >
        {images.map((image, index) => (
          <SplideSlide key={index} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <ExportedPicture
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={styles.image}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Custom Next and Previous buttons */}
      <button
        className={`${styles.button} ${styles.prevButton}`}
        onClick={handlePrev}
      >
        <LazySvg
          name="arrow-slider"
          width={6}
          height={11}
          className={styles.buttonImage}
        />
      </button>
      <button
        className={`${styles.button} ${styles.nextButton}`}
        onClick={handleNext}
      >
        <LazySvg
          name="arrow-slider"
          width={6}
          height={11}
          className={styles.buttonImage}
        />
      </button>

      <style>{`
        .splide .splide__pagination__page.is-active,
        .splide .splide__pagination__page.hover {
          transform: scale(1);
          background: black;
          opacity: 1;
        }
      `}</style>
    </>
  );
};
