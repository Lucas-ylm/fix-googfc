import styles from "./Spacer.module.scss";

interface SpacerProps {
  size?:  "custom" | "very small" | "smallest" | "smaller" | "small" | "medium" | "large" | "very large" | "container large2" | "container large" | "container mid" | "container small";
}

export const Spacer: React.FC<SpacerProps> = ({ size = "" }) => {
  return (
    <div className={`${styles.spacer} ${styles[size.replace(" ", "-")]}`}></div>
  );
};
