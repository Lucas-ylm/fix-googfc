import { motion } from "framer-motion";
import styles from "../CarrousselComponent.module.scss";
import { carrousselDatas } from "../data";
import { animPagination } from "../anim";

interface NavigationCarrousselComponentProps {
    imageIndex: number;
    setIsExitTitle: (value: boolean) => void;
    setIsFirstRender: (value: boolean) => void;
    setPage: (value: [number, number]) => void;
}

export const NagationCarrousselComponent: React.FC<
    NavigationCarrousselComponentProps
> = ({ imageIndex, setIsExitTitle, setIsFirstRender, setPage }) => {
    const handleDotClick = (index: number) => {
        setIsExitTitle(true);
        setIsFirstRender(true);
        setTimeout(() => {
            setPage([index, 0]);
            setIsExitTitle(false);
        }, 400);
    };
    return (
        <motion.div
            initial="initial"
            animate="enter"
            variants={animPagination}
            className={styles.dots}
        >
            {carrousselDatas.map((_, index) => (
                <div
                    key={`dot-container-${index}`}
                    className={styles["dot-container"]}
                    onClick={() => {
                        if (index !== imageIndex) {
                            handleDotClick(index);
                        }
                    }}
                >
                    <span
                        key={`dot-${index}`}
                        className={styles.dot}
                        style={{
                            opacity: index === imageIndex ? 1 : 0.5,
                            transition: "opacity 0.5s",
                        }}
                    />
                </div>
            ))}
        </motion.div>
    );
};
