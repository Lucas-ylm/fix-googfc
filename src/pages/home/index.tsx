import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { LandingPageComponent } from "@/components/Home/LandingPageComponent";
import { CarrousseComponent } from "@/components/Home/CarrousselComponent";

export default function HomePage() {
    const [isCarroussel, setIsCarroussel] = useState(false);
    const [isLandingPage, setIsLandingPage] = useState(true);
    const [isScrollUp, setIsScrollUp] = useState(false);
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const handleScroll = (event: any) => {
        if (event.deltaY < 0) {
            isCarroussel ? setIsScrollUp(true) : setIsScrollUp(false);
        } else if (event.deltaY > 0) {
            isLandingPage ? setIsScrollDown(true) : setIsScrollDown(false);
        }
    };

    useEffect(() => {
        if (isScrollDown) {
            setTimeout(() => {
                setIsCarroussel(true);
                setIsLandingPage(false);
            }, 400);
        }
        if (isScrollUp) {
            setIsCarroussel(false);
            setIsLandingPage(true);
        }
        const clearTimeLanding = setTimeout(() => {
            setIsCarroussel(true);
            setIsLandingPage(false);
        }, 4000);
        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
            clearTimeout(clearTimeLanding);
        };
    }, [isLandingPage, isScrollUp, isScrollDown]);

    return (
        <>
            <div className={styles.homeContainer}>
                <LandingPageComponent
                    isCarroussel={isCarroussel}
                    isScrollUp={isScrollUp}
                    setIsScrollUp={setIsScrollUp}
                    isScrollDown={isScrollDown}
                    setIsScrollDown={setIsScrollDown}
                    isFirstRender={isFirstRender}
                />
                <CarrousseComponent
                    isCarroussel={isCarroussel}
                    setIsCarroussel={setIsCarroussel}
                    setIsLandingPage={setIsLandingPage}
                    isScrollUp={isScrollUp}
                    isScrollDown={isScrollDown}
                    isFirstRender={isFirstRender}
                    setIsFirstRender={setIsFirstRender}
                />
            </div>
        </>
    );
}
