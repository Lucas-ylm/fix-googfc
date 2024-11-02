import styles from "./Container.module.scss";

interface ContainerProps {
    children: React.ReactNode;
    onRight?: boolean;
    isMargeTop?: boolean;
    isAllureCare?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
    children,
    onRight = false,
    isMargeTop = true,
    isAllureCare = false,
}) => {
    return (
        <div className={`${styles.container} ${onRight ? styles.onRight : ""}`}>
            <div
                className={
                    isMargeTop
                        ? `${styles.containerText}`
                        : `${styles.containerOne}`
                }
                style={isAllureCare ? { paddingBottom: '50px' } : {}}
            >
                {children}
            </div>
        </div>
    );
};
