import React from "react";
import styles from "./info.module.scss";
import LazySvg from "../Svg/LazySvg";

export default function Info() {
  return (
    <button className={styles.info}>
      <LazySvg name="info" width={16} height={16} />
      <span className={styles.description}>
        Contenus réalisés par les équipes de M Publicité, la régie publicitaire
        du Monde. La rédaction n’a pas participé à leur réalisation.
      </span>
    </button>
  );
}
