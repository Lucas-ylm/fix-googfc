import Burger from "../Burger/Burger";
import Info from "../Info/Info";
import LazySvg from "../Svg/LazySvg";
import styles from "./Header.module.scss";

type Props = { logoBrand: React.ReactNode; isMenu: boolean };

export default function Header({ logoBrand, isMenu }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.first}>
        <a
          href="https://www.lemonde.fr"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.home}
        >
          <LazySvg name="home" width={16} height={16} />
          <LazySvg name="le-monde" width={80} height={20} />
        </a>
        <Info />
      </div>
      <div className={styles.second}>
        <div className={styles.logoBrand}>
          <p className={styles.title}>Proposé par</p>
          {logoBrand}
        </div>
        {isMenu && <Burger />}
      </div>
    </header>
  );
}
