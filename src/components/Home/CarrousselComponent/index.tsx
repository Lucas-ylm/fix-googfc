import { motion, wrap } from "framer-motion";
import { useEffect, useState } from "react";
import { carrousselDatas } from "./data";
import { CarrousselHeroComponent } from "./HeroComponent.tsx";
import { NagationCarrousselComponent } from "./NavigationComponent";
import { CarrousselTextComponent } from "./TextComponent.tsx";
import StylesButton from "./Buttons.module.scss";
import { env } from "@/lib/env";

interface CarrousselComponentProps {
    isCarroussel?: boolean;
    setIsCarroussel: (value: boolean) => void;
    setIsLandingPage: (value: boolean) => void;
    isScrollUp?: boolean;
    isScrollDown?: boolean;
    isFirstRender: boolean;
    setIsFirstRender: (value: boolean) => void;
}

export const CarrousseComponent: React.FC<CarrousselComponentProps> = ({
    isCarroussel,
    setIsCarroussel,
    setIsLandingPage,
    isScrollUp,
    isScrollDown,
    isFirstRender,
    setIsFirstRender,
}) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, carrousselDatas.length, page);
    const [isExitTitle, setIsExitTitle] = useState(false);

    // Function to paginate images
    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        if (isCarroussel) {
            if (isScrollUp) {
                setIsFirstRender(true);
                setIsLandingPage(true);
                setIsExitTitle(false);
                setIsCarroussel(false);
                setPage([0, 0]);
            } else if (isScrollDown) {
                setIsFirstRender(false);
                setIsLandingPage(false);
                setIsExitTitle(false);
                setIsCarroussel(true);
                setPage([0, 0]);
            }
            if (isFirstRender) {
                const firstRenderTimeout = setTimeout(() => {
                    setIsFirstRender(false);
                }, 200);
                return () => clearTimeout(firstRenderTimeout);
            }
            const exitTitleTimeout = setTimeout(() => {
                setIsExitTitle(true);
            }, 2800);
            const timeout = setTimeout(() => {
                paginate(1);
                setIsExitTitle(false);
            }, 3000);
            return () => {
                clearTimeout(timeout);
                clearTimeout(exitTitleTimeout);
            };
        }
    }, [page, isExitTitle, isCarroussel, isFirstRender, isScrollUp]);

    return (
        <>
            <CarrousselHeroComponent
                isCarroussel={isCarroussel}
                page={page}
                paginate={paginate}
                imageIndex={imageIndex}
                isExitTitle={isExitTitle}
                setIsExitTitle={setIsExitTitle}
                isFirstRender={isFirstRender}
            />
            {isCarroussel && (
                <NagationCarrousselComponent
                    imageIndex={imageIndex}
                    setIsExitTitle={setIsExitTitle}
                    setIsFirstRender={setIsFirstRender}
                    setPage={setPage}
                />
            )}

      {/* BACKGROUND IMAGE */}
      <motion.img
        src={`${env.BASE_PATH}/assets/home/desktop/fond.jpg`}
        alt="back screen gradient"
        style={{
          zIndex: "-10",
          position: "absolute",
          top: 0,
          left: `${-imageIndex * 33}vw`,
          height: "100%",
          width: "150%",
          transition: "left 1s ease-in-out",
        }}
      />

            {/* BLOCK TEXT CARROUSSEL */}
            {isCarroussel && (
                <CarrousselTextComponent
                    page={page}
                    imageIndex={imageIndex}
                    isExitTitle={isExitTitle}
                    isFirstRender={isFirstRender}
                    setIsCarroussel={setIsCarroussel}
                />
            )}

            {/* TODO!! ?? : Supprimer nav button (+/-) de la homepage ? */}
            {isCarroussel && (
                <>
                    <button
                        onClick={() => paginate(-1)}
                        className={StylesButton.button_left}
                    >
                        <svg
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.69762 10.5866L0.949191 5.85227C0.89283 5.79591 0.852814 5.73485 0.829142 5.6691C0.80547 5.60334 0.793823 5.53289 0.794198 5.45774C0.794198 5.38259 0.805846 5.31214 0.829142 5.24639C0.852438 5.18063 0.892454 5.11958 0.949191 5.06321L5.69762 0.314787C5.82913 0.183278 5.99351 0.117523 6.19078 0.117523C6.38804 0.117523 6.55713 0.187975 6.69803 0.328878C6.83893 0.46978 6.90938 0.634167 6.90938 0.822038C6.90938 1.00991 6.83893 1.17429 6.69803 1.3152L2.55548 5.45774L6.69803 9.60029C6.82954 9.7318 6.89529 9.89393 6.89529 10.0867C6.89529 10.2794 6.82484 10.4461 6.68394 10.5866C6.54304 10.7275 6.37865 10.798 6.19078 10.798C6.00291 10.798 5.83852 10.7275 5.69762 10.5866Z"
                                fill="rgba(0, 0, 0, 1)"
                            ></path>
                        </svg>
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className={StylesButton.button_right}
                    >
                        <svg
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.69762 10.5866L0.949191 5.85227C0.89283 5.79591 0.852814 5.73485 0.829142 5.6691C0.80547 5.60334 0.793823 5.53289 0.794198 5.45774C0.794198 5.38259 0.805846 5.31214 0.829142 5.24639C0.852438 5.18063 0.892454 5.11958 0.949191 5.06321L5.69762 0.314787C5.82913 0.183278 5.99351 0.117523 6.19078 0.117523C6.38804 0.117523 6.55713 0.187975 6.69803 0.328878C6.83893 0.46978 6.90938 0.634167 6.90938 0.822038C6.90938 1.00991 6.83893 1.17429 6.69803 1.3152L2.55548 5.45774L6.69803 9.60029C6.82954 9.7318 6.89529 9.89393 6.89529 10.0867C6.89529 10.2794 6.82484 10.4461 6.68394 10.5866C6.54304 10.7275 6.37865 10.798 6.19078 10.798C6.00291 10.798 5.83852 10.7275 5.69762 10.5866Z"
                                fill="rgba(0, 0, 0, 1)"
                            ></path>
                        </svg>
                    </button>
                </>
            )}
            {/* END DELETE */}
        </>
    );
};
