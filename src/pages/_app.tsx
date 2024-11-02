import "@/styles/globals.scss";
import "@/styles/styles.scss";
import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  Barlow_Condensed,
  Inter,
  Playfair_Display,
  Frank_Ruhl_Libre,
  Roboto,
} from "next/font/google";
import Header from "@/components/Header/Header";
import Logo from "@/components/Logo/Logo";
import { Cookies } from "@/components/Cookies";
import Script from "next/script";
import ATInternet from "@/components/ATInternet/ATInternet";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const frankRuhlLibre = Frank_Ruhl_Libre({
  style: ["normal"],
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-frank",
});

const barlow = Barlow_Condensed({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--barlow-bold",
});

const interLight = Inter({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--inter-light",
});

const interRegular = Inter({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--inter-regular",
});

const interSemiBold = Inter({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--inter-semi-bold",
});

const interBold = Inter({
  weight: ["800"],
  subsets: ["latin"],
  variable: "--inter-bold",
});

const playfairBold = Playfair_Display({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--playfair-bold",
});

const playfairExtraBold = Playfair_Display({
  weight: ["800"],
  subsets: ["latin"],
  variable: "--playfair-extra-bold",
});

const pageVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export default function App({ Component, pageProps, router }: AppProps) {
  const nextRouter = useRouter();
  let scrollPosition = 0;
  
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      scrollPosition = window.scrollY;
      window.scrollTo({ top: 0, behavior: "smooth" });
  
      setTimeout(() => {
        window.location.replace(window.location.href);
      }, 20);
    };
  
    nextRouter.events.on("routeChangeComplete", handleRouteChangeComplete);
  
    return () => {
      nextRouter.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [nextRouter.events]);
  
  return (
    <>
      <Header logoBrand={<Logo />} isMenu={false} />
      <Script
        async
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
      />
      <Script id="gpt-desk-init" strategy="afterInteractive">
        {`
          window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {
            googletag.defineSlot('/128139881/LM_lemonde/ope_spe/ope_spe/rg/pave_haut', [[160, 600], [300, 250], [300, 600], [3, 1]], 'div-gpt-ad-1729257135244-0')
              .addService(googletag.pubads())
              .setTargeting("rubriques", "l-avenir-commence-maintenant")
              .setTargeting("rub", "l-avenir-commence-maintenant");
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
          });
        `}
      </Script>
      <Script id="gpt-mobile-init" strategy="afterInteractive">
        {`
          window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {
            googletag.defineSlot('/128139881/LM_lemonde/ope_spe/ope_spe/rg/inread_top', [[2, 2], 'fluid', [300, 250]], 'div-gpt-ad-1729257024685-0')
              .addService(googletag.pubads())
              .setTargeting("rubriques", "l-avenir-commence-maintenant")
              .setTargeting("rub", "l-avenir-commence-maintenant");
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
          });
        `}
      </Script>
      
      <main
        className={`${frankRuhlLibre.variable} ${roboto.variable} ${barlow.variable} ${interLight.variable} ${interRegular.variable} ${interSemiBold.variable} ${interBold.variable} ${playfairBold.variable} ${playfairExtraBold.variable}`}
        style={{ marginTop: "84px" }}
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={router.route}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            style={{ position: "relative" }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </main>
      <ATInternet
        chapter1="l-avenir-commence-maintenant"
        chapter2="l-avenir-commence-maintenant.lemonde.fr"
      />
    </>
  );
}