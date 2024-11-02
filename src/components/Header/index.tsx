import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.sub_header}>
                    <Link href="https://lemonde.fr/" className="header-logo-lemonde" target="_blank" rel="noopener noreferrer">
                            <Image 
                                width={96} 
                                height={21} 
                                src="/header/lemonde.svg"
                                alt="Le Monde"
                            />
                    </Link>
                    <button className="infobox">
                        <Image width="20" height="20" src="/header/info.svg"  alt="Infos"/>
                        <span className="credit-text">Contenus réalisés par les équipes de M&nbsp;Publicité, la régie publicitaire du Monde. La rédaction n'a pas participé à leur réalisation.</span>
                    </button>
                </div>
                <div className={styles.sub_header}>
                    <div className={styles.text}>
                        Proposé par <Image width="25" height="25" src="/header/logo.svg"  alt="Peugeot"/>
                    </div>
                </div>
            </header>
        </>
    );
}
