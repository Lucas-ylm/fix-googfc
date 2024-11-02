import {useState, useEffect} from "react";
import Head from "next/head";
import {LandingPageComponent} from "@/components/Home/LandingPageComponent";
import {CarrousseComponent} from "@/components/Home/CarrousselComponent";
import styles from "./Home.module.scss";
import {env} from "@/lib/env";

export default function Home() {
    const [isCarroussel, setIsCarroussel] = useState(false);
    const [isLandingPage, setIsLandingPage] = useState(true);
    const [isScrollUp, setIsScrollUp] = useState(false);
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [startY, setStartY] = useState(0);
    const [startX, setStartX] = useState(0);

    const handleScroll = (event: any) => {
        if (Math.abs(event.deltaY) < 50) {
            return;
        }
        
        if (event.deltaY < 0) {
            isCarroussel ? setIsScrollUp(true) : setIsScrollUp(false);
        } else if (event.deltaY > 0) {
            isLandingPage ? setIsScrollDown(true) : setIsScrollDown(false);
        }
    };
    

    const handleTouchStart = (event: any) => {
        setStartY(event.touches[0].clientY);
        setStartX(event.touches[0].clientX);
    };


    const handleTouchMove = (event: TouchEvent) => {
        const currentY = event.touches[0].clientY;
        const currentX = event.touches[0].clientX;
        const deltaY = startY - currentY;
        const deltaX = startX - currentX;
        if (Math.abs(deltaY) > Math.abs(deltaX)) {
            if (deltaY > 50) {
                isLandingPage && setIsScrollDown(true);
            } else if (deltaY < -50) {
                isCarroussel && setIsScrollUp(true);
            }
        }
    };
    useEffect(() => {
        if (isScrollDown) {
            setTimeout(() => {
                setIsCarroussel(true);
                setIsLandingPage(false);
                setIsScrollDown(false);
            }, 400);
        }
        if (isScrollUp) {
            setIsCarroussel(false);
            setIsLandingPage(true);
            setIsScrollUp(false);
        }
        const clearTimeLanding = setTimeout(() => {
            setIsCarroussel(true);
            setIsLandingPage(false);
        }, 4000);
        // Scroll handling for desktop
        window.addEventListener("wheel", handleScroll);
        // Touch handling for mobile
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            clearTimeout(clearTimeLanding);
        };
    }, [isLandingPage, isScrollUp, isScrollDown, startY]);
    return (
        <>
            <Head>
                <title>L'avenir commence maintenant</title>
                <meta name="description" content="Lorem ipsum dolor"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href={`${env.BASE_PATH}/favicon.png`}/>

                <meta property="og:type" content="website"/>
                <meta property="og:title" content="L'avenir commence maintenant"/>
                <meta
                    property="og:description"
                    content=" Inception Concept, le dernier concept-car de Peugeot imagine le futur de la mobilité électrique. Il inspirera tous les prochains modèles à partir de 2025."
                />
                <meta
                    property="og:image"
                    content={`${env.BASE_PATH}/HOMEPAGE-og.jpg"`}
                />

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="L'avenir commence maintenant"/>
                <meta
                    name="twitter:description"
                    content=" Inception Concept, le dernier concept-car de Peugeot imagine le futur de la mobilité électrique. Il inspirera tous les prochains modèles à partir de 2025."
                />
                <meta
                    name="twitter:image"
                    content={`${env.BASE_PATH}/HOMEPAGE-twitter.jpg`}
                />
            </Head>
            <div className={styles.homeContainer}>
                <LandingPageComponent
                    isCarroussel={isCarroussel}
                    isScrollUp={isScrollUp}
                    setIsScrollUp={setIsScrollUp}
                    isFirstRender={isFirstRender}
                    isScrollDown={isScrollDown}
                    setIsScrollDown={setIsScrollDown}
                />
                <CarrousseComponent
                    isCarroussel={isCarroussel}
                    setIsCarroussel={setIsCarroussel}
                    setIsLandingPage={setIsLandingPage}
                    isScrollUp={isScrollUp}
                    isFirstRender={isFirstRender}
                    setIsFirstRender={setIsFirstRender}
                    isScrollDown={isScrollDown}
                />
            </div>
        </>
    );
}
