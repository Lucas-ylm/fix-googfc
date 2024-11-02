import {
    motion,
    AnimatePresence,
    useDragControls,
    PanInfo,
} from "framer-motion";
import styles from "../CarrousselComponent.module.scss";
import { carrousselDatas } from "../data";
import { imageFromRight } from "../anim";

interface CarrousselHeroComponentProps {
    isCarroussel?: boolean;
    page: number;
    paginate: (newDirection: number) => void;
    imageIndex: number;
    isExitTitle: boolean;
    setIsExitTitle: (valuer: boolean) => void;
    isFirstRender: boolean;
}

export const CarrousselHeroComponent: React.FC<
    CarrousselHeroComponentProps
> = ({
    isCarroussel,
    page,
    paginate,
    imageIndex,
    isExitTitle,
    setIsExitTitle,
    isFirstRender,
}) => {
    const controls = useDragControls();
    const dragThreshold = 100;
    function handleDrag(
        event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) {
        const deltaX = info.offset.x;
        if (deltaX > dragThreshold) {
            setIsExitTitle(true);
            setTimeout(() => {
                paginate(-1);
                setIsExitTitle(false);
            }, 400);
        } else if (deltaX < -dragThreshold) {
            setIsExitTitle(true);
            setTimeout(() => {
                paginate(1);
                setIsExitTitle(false);
            }, 400);
        }
    }

    return (
        <AnimatePresence initial={true}>
                <motion.img
                    key={`image-${page}`}
                    src={carrousselDatas[imageIndex].image}
                    alt={`slide ${imageIndex}`}
                    className={styles.carrousselImages}
                    initial="initial"
                    animate={!isCarroussel ? "initial" : "enter"}
                    exit="exit"
                    variants={imageFromRight(
                        isFirstRender,
                        isExitTitle && isFirstRender
                        )}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragControls={controls}
                    onDragEnd={handleDrag}
                />
        </AnimatePresence>
    );
};
