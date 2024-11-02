import styles from "./Section.module.scss";

interface SectionProps {
  children: React.ReactNode;
  flex?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, flex }) => {
  return (
    <section className={`${styles.section} ${flex ? styles.flex : ""}`}>
      {children}
    </section>
  );
};
