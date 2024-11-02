import { motion } from "framer-motion";
import styles from "../CarrousselComponent.module.scss";
import textStyles from "@/components/Blocks/Text/Text.module.scss";
import { carrousselDatas } from "../data";
import {
    drawSecondLine,
    sentenceVariants,
} from "../anim";
import { CarrousselButtonComponent } from "./ButtonComponent";

interface CarrousselTextComponentProps {
    page: number;
    imageIndex: number;
    isExitTitle: boolean;
    isFirstRender: boolean;
    setIsCarroussel: (value: boolean) => void;
}

export const CarrousselTextComponent: React.FC<CarrousselTextComponentProps> = ({
    page,
    imageIndex,
    isExitTitle,
    isFirstRender,
    setIsCarroussel
}) => {
    return (
        <div className={styles.textCarroussel}>
        <motion.svg className={styles.textCarrousselSvg}>
            <motion.line
                stroke="#fff"
                strokeWidth={2}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={drawSecondLine}
            />
        </motion.svg>
        <div className={styles.textCarroussel_container}>
            <div className={styles.number}>
                <span className={styles.textContainterBlock}>
                    <motion.span
                        key={`number-${page}`}
                        className={textStyles.hero_ontitle}
                        initial="initial"
                        animate={isExitTitle ? "exit" : "enter"}
                        exit="exit"
                        variants={sentenceVariants(
                            isFirstRender,
                            isExitTitle && isFirstRender
                        )}
                        style={{
                            width: "100%",
                            display: "inline-block",
                        }}
                    >
                        {carrousselDatas[imageIndex].number}
                    </motion.span>
                </span>
            </div>
            <div>
                {carrousselDatas[imageIndex].description.map(
                    (descriptionLine) => (
                        <span
                            key={`span-${page}--${descriptionLine}`}
                            className={
                                styles.textContainterBlock
                            }
                        >
                            <motion.span
                                key={`title-${page}--${descriptionLine}`}
                                className={
                                    textStyles.carroussel_title
                                }
                                initial="initial"
                                animate={
                                    isExitTitle
                                        ? "exit"
                                        : "enter"
                                }
                                exit="exit"
                                variants={sentenceVariants(
                                    isFirstRender,
                                    isExitTitle && isFirstRender
                                )}
                                style={{
                                    width: "100%",
                                    display: "inline-block",
                                }}
                            >
                                {descriptionLine}
                            </motion.span>
                        </span>
                    )
                )}
            </div>
        </div>
        <CarrousselButtonComponent
            page={page}
            imageIndex={imageIndex}
            isExitTitle={isExitTitle}
            isFirstRender={isFirstRender}
            setIsCarroussel={setIsCarroussel}
        />
    </div>
    )
}