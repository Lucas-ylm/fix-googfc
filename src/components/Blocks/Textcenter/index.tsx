import React from "react";
import styles from "./Textcenter.module.scss";

export const Textcenter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.textcenter}>{children}</div>;
};
