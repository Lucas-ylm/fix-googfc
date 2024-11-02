import Link from "next/link";
import styles from "./ButtonBack.module.scss";
import LazySvg from "../Svg/LazySvg";

export default function ButtonBack() {
  return (
    <>
      <Link href="/" className={styles.button_back}>
        <LazySvg
          name="back"
          className={styles.svgHome}
          width={46}
          height={46}
        />
      </Link>
    </>
  );
}
