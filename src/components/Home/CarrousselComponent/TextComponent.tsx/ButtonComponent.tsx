import { motion } from "framer-motion";
import { carrousselDatas } from "../data";
import { animateButton } from "../anim";
import { AnimatedButton } from "@/components/AnimatedButton";


interface CarrousselButtonComponentProps {
    page: number;
    imageIndex: number;
    isExitTitle: boolean;
    isFirstRender: boolean;
    setIsCarroussel: (value: boolean) => void;
}

export const CarrousselButtonComponent: React.FC<CarrousselButtonComponentProps> = ({
    page,
    imageIndex,
    isExitTitle,
    isFirstRender,
    setIsCarroussel
}) => {
    return (
        <motion.div
        key={`buttonDiv-${page}`}
        style={{ marginTop: "1rem" }}
        initial="initial"
        animate={isExitTitle ? "exit" : "enter"}
        variants={animateButton(isFirstRender, isExitTitle && isFirstRender)}
        onClick={() =>
            setTimeout(() => {
                setIsCarroussel(false);
            }, 200)
        }
    >
        <AnimatedButton
            key={`button-${page}`}
            href={carrousselDatas[imageIndex].title}
            text="Découvrir"
            style="white"
        />
    </motion.div>
    )
}