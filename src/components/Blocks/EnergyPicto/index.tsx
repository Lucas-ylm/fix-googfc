import ExportedPicture from "@/shared/ExportedPicture";
import { motion } from "framer-motion";
import styles from "./EnergyPicto.module.scss";

interface EnergyPictoComponentProps {
  showImage?: boolean;
  children?: React.ReactNode;
}

export const EnergyPictoComponent: React.FC<EnergyPictoComponentProps> = ({
  showImage = true,
  children,
}) => {
  return (
    <div className={styles.class_energy}>
      {showImage && (
        <ExportedPicture
          src="/assets/icons/picto-energy.png"
          width={150}
          height={151}
          alt="Pictogramme consommation d'énergie"
          className={styles.class_energy__img}
        />
      )}
      <motion.p className={styles.text}>{children}</motion.p>
    </div>
  );
};
