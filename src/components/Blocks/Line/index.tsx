import styles from "./Line.module.scss";
import { motion, Variants } from "framer-motion";
import { line } from "./anim";

interface LineProps {
  test?: string,
  size?: number
}

const anim = (variants: Variants) => {
  return {
    initial: "initial",
    whileInView: "enter",
    exit: "exit",
    variants,
  };
};

export const Line: React.FC<LineProps> = ({
  test,
  size = 100
}) => {
  return (
    <motion.svg className={styles.line}>
            <motion.line
              x1="0"
              y1="0"
              x2="0"
              y2={size}
              stroke="#000"
              strokeWidth={1}
              {...anim(line)}
            />
      </motion.svg>
  );
};
