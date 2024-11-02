import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Textcenter } from "@/components/Blocks/Textcenter";
import { Heropage } from "@/components/Blocks/Heropage";
import { Text } from "@/components/Blocks/Text";
import { AnimatedContainer } from "@/components/Blocks/AnimatedContainer";
import { Count } from "@/components/Blocks/Count";
import { Section } from "@/components/Section";
import { Spacer } from "@/components/Blocks/Spacer";
import { FooterNav } from "@/components/FooterNav";
import { AnimatedButtonFooter } from "@/components/AnimatedButtonFooter";
import { Line } from "@/components/Blocks/Line";
import { SliderImage } from "@/components/SliderImage";
import { EnergyPictoComponent } from "@/components/Blocks/EnergyPicto";
import ButtonBack from "@/components/ButtonBack";
import ExportedPicture from "@/shared/ExportedPicture";
import styles from "@/styles/page.module.scss";
import { Cookies } from "@/components/Cookies";
import { env } from "@/lib/env";
import Script from "next/script";

const imageList = [
  { src: "/assets/post01/slider01.jpg", alt: "Image 1", width: 1320, height: 741 },
  { src: "/assets/post01/slider02.jpg", alt: "Image 2", width: 1320, height: 741 },
  { src: "/assets/post01/slider03.jpg", alt: "Image 3", width: 1320, height: 741 },
];

export default function etSiLeFuturDevenaitSourceDInspiration() {
  const [isHoverFooterOne, setIsHoverFooterOne] = useState(false);
  const [isHoverFooterTwo, setIsHoverFooterTwo] = useState(false);

  return (
    <>
      <Head>
        <title>Et si le futur devenait source d'inspiration ?</title>
        <meta
          name="description"
          content="Inception Concept, le dernier concept-car de Peugeot imagine le futur de la mobilité électrique. Il inspirera tous les prochains modèles à partir de 2025."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${env.BASE_PATH}/favicon.png`} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Et si le futur devenait source d'inspiration ?"
        />
        <meta
          property="og:description"
          content="Inception Concept, le dernier concept-car de Peugeot imagine le futur de la mobilité électrique. Il inspirera tous les prochains modèles à partir de 2025."
        />
           <meta name="twitter:image" content={`${env.BASE_PATH}/ARTICLE-1-og.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Et si le futur devenait source d'inspiration ?"
        />
        <meta
          name="twitter:description"
          content="Inception Concept, le dernier concept-car de Peugeot imagine le futur de la mobilité électrique. Il inspirera tous les prochains modèles à partir de 2025."
        />
           <meta name="twitter:image" content={`${env.BASE_PATH}/ARTICLE-1-twitter.jpg`} />

        
      </Head>

      {/* HERO */}
      <Heropage
        imageUrl="/assets/post01/hero.jpg"
        imageUrlMobile="/assets/post01/hero-mobile.jpg"
      >
        <Text balise="span" style="hero_ontitle" trigger="load" delay={0.1}>01</Text>
        <h1>
          <Text balise="span" style="hero_title" trigger="load" delay={0.1}>Et si le futur</Text>
          <Text balise="span" style="hero_title" trigger="load" delay={0.1}>devenait source</Text>
          <Text balise="span" style="hero_title" trigger="load" delay={0.1}>d'inspiration ?</Text>
        </h1>
        <Text
          balise="p"
          style="hero_text"
          trigger="load"
          delay={0.3}
          split={false}
        >Comment imaginer la voiture de demain ? Le Mondial de l’automobile est une occasion pour les grandes marques de présenter les futures innovations du secteur, autour de « concept-cars », synonymes de prototypes inédits.</Text>
      </Heropage>
      {/* HERO END */}

      <Spacer size="large"></Spacer>

      <Textcenter>
        <Text split={false} trigger="load" style="text_semi_bold">Une manière de créer l’événement et de présager l’avenir, laissant s’ouvrir un champ infini de possibilités.</Text>
        <Spacer size="very small"></Spacer>

        <AnimatedContainer balise="div" trigger="load" direction="up">
        <p className={styles.text_regular_bold}>Le Peugeot Inception Concept, s'il incarne cette vision, est bien plus qu’un nouveau concept-car parmi d’autres, il imagine ce que sera véritablement la mobilité et, surtout, inspirera tous les prochains modèles de la marque, à partir de 2025. Révolutionnant le plaisir de conduire, il dessine également les contours d'une nouvelle gestuelle intuitive. « Notre ambition est simple, explique Linda Jackson, CEO de Peugeot,<i> faire de notre marque la première sur le marché de l'électrique en Europe d'ici 2030. Cette vision s'incarne aujourd'hui dans le Peugeot Inception Concept, qui symbolise le début d'une nouvelle ère ! »</i></p>
        </AnimatedContainer>
      </Textcenter>

      <Spacer size="large"></Spacer>

      <Section>
        <AnimatedContainer balise="div" trigger="load" direction="up">
          <SliderImage images={imageList} />
        </AnimatedContainer>
      </Section>

      <Spacer size="large"></Spacer>

      {/* ADS a remplacer */}
      <Section>
        <div className={styles.add_container}>
          <div className={styles.add_content}>
            <div className={styles.add_line}>
              <Line size={800}></Line>
            </div>

            <h2>
              <Text trigger="load" balise="span" style="ad_title_small" delay={0.2}>
                “ L'innovation est notre
              </Text>
              <Text trigger="load" balise="span" style="ad_title_small" delay={0.2}>
                inspiration. Peugeot est une
              </Text>
              <Text trigger="load" balise="span" style="ad_title_small" delay={0.2}>
                marque qui a toujours su
              </Text>
              <Text trigger="load" balise="span" style="ad_title_small" delay={0.2}>
                innover et s'adapter dans les
              </Text>
              <Text trigger="load" balise="span" style="ad_title_small" delay={0.2}>
                moments clés ”
              </Text>
            </h2>

            <Spacer size="very small"></Spacer>

            <div className={styles.align_text}>
              <Text balise="span" style="ad_subtitle_bold" delay={0.2}>
                Linda Jackson -
              </Text>
              <Text balise="span" style="ad_subtitle" delay={0.2}>
                ceo
              </Text>
            </div>
          </div>

             {/* ADS */}
             <AnimatedContainer balise="div" className="" trigger="load" direction="up">
              {/* Div pour la publicité desktop */}
              <div className={styles.ads_desktop} id="div-gpt-ad-1729257135244-0" style={{minWidth: '300px', minHeight: '600px'}}>
                <Script>
                  {`
                    googletag.cmd.push(function() {googletag.display('div-gpt-ad-1729257135244-0');});
                  `}
                </Script>
              </div>

              {/* Div pour la publicité mobile */}
              <div className={styles.ads_mobile} id="div-gpt-ad-1729257024685-0" style={{minWidth: '300px', minHeight: '250px'}}>
                <Script>
                  {`
                    googletag.cmd.push(function() {googletag.display('div-gpt-ad-1729257024685-0');});
                  `}
                </Script>
              </div>
            </AnimatedContainer>
            {/* ADS */}
        </div>
        </Section>
        {/* END ADS a remplacer */}


      <Spacer size="large"></Spacer>

      {/* DATA */}
      <Section>
        <div className={styles.section_numbers}>
          <div>
            <div
              className={`${styles.align_text_center} ${styles.data_block_one}`}
            >
              <div className={styles.mr_20}>
                <Text balise="span" style="count_title_one" delay={0.2}>Le Peugeot Inception Concept</Text>
                <Text balise="span" style="count_small" delay={0.2}>inspirera les prochains modèles à partir de</Text>
              </div>
              <AnimatedContainer balise="div" trigger="load" direction="up">
                <Count
                  style="mid"
                  addSpaceNumber={false}
                  start={0}
                  end={2025}
                  duration={1}
                  delay={1}
                />
              </AnimatedContainer>
            </div>
          </div>

          <div
            className={`${styles.container_line} ${styles.number_part_three}`}
          >
            <Line size={270}></Line>
            <AnimatedContainer balise="div" trigger="load" direction="up">
              <Count
                style="big"
                addSpaceNumber={false}
                start={0}
                end={2030}
                duration={1}
                delay={1}
              />
            </AnimatedContainer>
            <Text balise="span" style="count_big" delay={0.2}>peugeot : première marque</Text>
            <Text balise="span" style="count_big" delay={0.2}>électrique en Europe</Text>
          </div>
        </div>
      </Section>
      {/* END DATA */}

      {/* CLASS ENERGY */}
      <Section>
        <EnergyPictoComponent showImage={false}>
          <span>« Pour les trajets courts,</span>
          <span> privilégiez la marche ou le vélo »</span>
          <span>#SeDéplacerMoinsPolluer</span>
        </EnergyPictoComponent>
      </Section>
      {/* END CLASS ENERGY */}

      <Section flex={true}>
        <FooterNav>
          <Link
            href="./anticiper-le-changement"
            passHref
            legacyBehavior
            scroll={false}
          >
            <a
              onMouseEnter={() => setIsHoverFooterOne(true)}
              onMouseLeave={() => setIsHoverFooterOne(false)}
              onClick={() => {
                window.scrollTo({ top: 0,});
              }}
            >
              <div className={styles.bottom_content}>
                <Text balise="span" style="footer_ontitle" delay={0.2}>02</Text>
                <Spacer></Spacer>
                <Text balise="h3" style="footer_title" delay={0.2}>Anticiper</Text>
                <Text balise="h3" style="footer_title" delay={0.2}>le changement</Text>
                <Spacer size="very small"></Spacer>
                <AnimatedButtonFooter
                  text="Découvrir"
                  isHover={isHoverFooterOne}
                  setIsHover={setIsHoverFooterOne}
                ></AnimatedButtonFooter>
              </div>

              <AnimatedContainer
                balise="div"
                className="fullscreenImage"
                trigger="load"
                direction="up"
              >
                <ExportedPicture
                  src="/assets/footer-post/post02.jpg"
                  alt="Description of the image"
                  width={949}
                  height={749}
                />
              </AnimatedContainer>
            </a>
          </Link>
        </FooterNav>

        <FooterNav>
          <Link
            href="./le-mariage-du-design-et-de-l-innovation"
            passHref
            legacyBehavior
            scroll={false}
          >
            <a
              onMouseEnter={() => setIsHoverFooterTwo(true)}
              onMouseLeave={() => setIsHoverFooterTwo(false)}
              onClick={() => {
                window.scrollTo({ top: 0,});
              }}
            >
              <div className={styles.bottom_content}>
                <Text balise="span" style="footer_ontitle" delay={0.2}>03</Text>
                <Spacer></Spacer>
                <Text balise="h3" style="footer_title" delay={0.2}>Le mariage</Text>
                <Text balise="h3" style="footer_title" delay={0.2}>du design</Text>
                <Text balise="h3" style="footer_title" delay={0.2}>et de l’innovation</Text>
                <Spacer size="very small"></Spacer>
                <AnimatedButtonFooter
                  text="Découvrir"
                  isHover={isHoverFooterTwo}
                  setIsHover={setIsHoverFooterTwo}
                ></AnimatedButtonFooter>
              </div>

              <AnimatedContainer
                balise="div"
                className="fullscreenImage"
                trigger="load"
                direction="up"
              >
                <ExportedPicture
                  src="/assets/footer-post/post03.jpg"
                  alt="Description of the image"
                  width={949}
                  height={749}
                />
              </AnimatedContainer>
            </a>
          </Link>
        </FooterNav>
      </Section>

      <ButtonBack></ButtonBack>
      <Cookies/>
    </>
  );
}
