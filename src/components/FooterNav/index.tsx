import styles from "./FooterNav.module.scss";

interface FooterNavProps {
    children: React.ReactNode;
}

export const FooterNav: React.FC<FooterNavProps> = ({ children }) => {
  return (
    <div className={`${styles.nav}`}>
        {children}
    </div>
  );
};
