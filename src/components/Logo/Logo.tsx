import LazySvg from "../Svg/LazySvg";
import styles from "./logo.module.scss";

export default function Logo() {
  return (
    <a
      href="https://www.peugeot.fr/lp/media/demande-d-offre-mondial_24_sea.html?utm_source=Le%20Monde&utm_medium=DIS-RES&utm_campaign=OPS-LeMonde-2024_FR_AP_VN_Brand-LEV_Roadshow_DIS-RES_PC_OPS-LeMonde-2024_VI_CLICKS_NA_PHEV&partner_uid=HashedMai"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.logo}
    >
      <LazySvg name="peugeot-black" className={styles.svg} width={36} height={36}/>
    </a>
  );
}
