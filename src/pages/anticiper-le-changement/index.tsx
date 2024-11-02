import React, { useState } from "react";
import Head from "next/head";
import { Textcenter } from "@/components/Blocks/Textcenter";
import { Heropage } from "@/components/Blocks/Heropage";
import { Text } from "@/components/Blocks/Text";
import { AnimatedContainer } from "@/components/Blocks/AnimatedContainer";
import { Count } from "@/components/Blocks/Count";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ToggleText } from "@/components/ToggleText";
import { Spacer } from "@/components/Blocks/Spacer";
import { FooterNav } from "@/components/FooterNav";
import { AnimatedButtonFooter } from "@/components/AnimatedButtonFooter";
import { Line } from "@/components/Blocks/Line";
import { Carousel, ContentProps } from "@/components/Carousel";
import Link from "next/link";
import styles from "@/styles/page.module.scss";
import ButtonBack from "@/components/ButtonBack";
import { EnergyPictoComponent } from "@/components/Blocks/EnergyPicto";
import ExportedPicture from "@/shared/ExportedPicture";
import { Cookies } from "@/components/Cookies";
import { env } from "@/lib/env";
import Script from "next/script";

const carouselContent: ContentProps[] = [
  {
    title: "Un coup d’accélérateur vers le « tout électrique »",
    text: [
      {
        style: "bold",
        text: "La barre du million de voitures 100&nbsp;% électriques présentes en France vient d’être franchie, plaçant l'Hexagone au deuxième rang européen derrière l’Allemagne. Leader de l’électrique en France, Peugeot s’impose non seulement comme un précurseur, mais aussi comme un acteur majeur de l’accélération de l’électrification.",
      },
      {
        style: "normal",
        text: "Pour Peugeot, le passage à l’électrique doit se réaliser sans compromis de confort de conduite. Le design distinctif Peugeot et le plaisir d’être au volant constituent l’ADN de chaque véhicule : de la citadine E-208 au nouveau grand SUV E-5008.",
      },
    ],
  },
  {
    title: "Un coup d’accélérateur vers le « tout électrique »",
    text: [
      {
        style: "normal",
        text: "Les nouvelles versions grande autonomie des derniers E-3008 et E-5008 font passer l’électrique au niveau supérieur, grâce à la plateforme STLA Medium de Stellantis. Innovante, elle est conçue pour offrir les meilleures prestations de sa catégorie sur les critères les plus importants pour les clients : une meilleure autonomie — jusqu’à 700 km sur le E-3008, la meilleure sur son segment — un temps de recharge optimisé (jusqu’à 80 % de la batterie en 30 min), des performances et de l’efficacité́. Par ailleurs, et c’est une fierté, la marque produit ces deux modèles exclusivement dans son usine de Sochaux.",
      },
      {
        style: "normal",
        text: "Le dernier Peugeot E-3008 propose une silhouette profilée et un habitacle raffiné. À l’intérieur, l’innovation saute aux yeux grâce au i-Cockpit® panoramique, gage d’un plaisir de conduire inégalé. Le volant a été retravaillé pour offrir toujours plus de sensations et des commandes inédites, qui détectent automatiquement les doigts du conducteur. Le E-3008 est également doté du meilleur rayon de braquage des SUV électriques de sa catégorie. Il ne reste qu’à s’asseoir, dans ses sièges confortables et son espace optimisé, pour s’en convaincre.",
      },
    ],
  },
  {
    title: "Un coup d’accélérateur vers le « tout électrique »",
    text: [
      {
        style: "bold",
        text: "E-5008, le grand SUV 7 places",
      },
      {
        style: "normal",
        text: " Autre nouvelle référence majeure de la gamme électrique Peugeot : le nouveau E-5008, pouvant accueillir jusqu’à 7 personnes et possédant une autonomie allant jusqu’à 668 km. Il est commercialisé depuis l'automne 2024. Son design suggère le mouvement, la robustesse et la sécurité. À l’intérieur, l’ambiance est autant high-tech que conviviale. Équipée du i-Cockpit® panoramique, la conduite laisse place à de nouvelles émotions. Ce véhicule aux dimensions généreuses est néanmoins très facile à manœuvrer, notamment grâce aux réglages de châssis dynamiques. Plus de 40 systèmes d'aide à la conduite et équipements de sécurité complètent le tableau. Pour sept passagers, le confort est exceptionnel et l’accès au rang 3 facile. Même si tous les sièges sont occupés, le coffre est très vaste (348 l) et l’habitabilité est optimale. Une véritable bulle de confort pour tous, du premier au troisième rang (dossiers indépendants, appuie-têtes réglables, garde au toit optimisée pour convenir à des adultes).",
      },
    ],
  },
  {
    title: "Un coup d’accélérateur vers le « tout électrique »",
    text: [
      {
        style: "normal",
        text: "Ces nouveaux modèles E-3008 et E-5008 utilisent un maximum de matériaux recyclés qui représentent, par exemple, 23 % de la masse totale du nouveau E-5008. Le défi électrique doit être relevé avec l’exigence de qualité et de performance qui constitue l’ADN de Peugeot depuis deux cents ans. L’avenir de l’automobile a déjà débuté.",
      },
    ],
  },
];

export default function anticiperLeChangement() {
  const [isHoverFooterOne, setIsHoverFooterOne] = useState(false);
  const [isHoverFooterTwo, setIsHoverFooterTwo] = useState(false);


  return (
    <>
      <Head>
        <title>Anticiper le changement</title>
        <meta
          name="description"
          content="Peugeot propose la gamme électrique la plus complète et la plus large de tous les constructeurs généralistes européens."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${env.BASE_PATH}/favicon.png`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anticiper le changement" />
        <meta
          property="og:description"
          content="Peugeot propose la gamme électrique la plus complète et la plus large de tous les constructeurs généralistes européens."
        />
        <meta
          property="og:image"
          content={`${env.BASE_PATH}/ARTICLE-2-og.jpg`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anticiper le changement" />
        <meta
          name="twitter:description"
          content="Peugeot propose la gamme électrique la plus complète et la plus large de tous les constructeurs généralistes européens."
        />
        <meta
          name="twitter:image"
          content={`${env.BASE_PATH}/ARTICLE-2-twitter.jpg`}
        />
      </Head>
      {/* <Animationpage> */}
      {/* HERO */}
      <Heropage
        imageUrl="/assets/post02/hero.jpg"
        imageUrlMobile="/assets/post02/hero-mobile.jpg"
      >
        <Text balise="span" style="hero_ontitle" trigger="load" delay={0.1}>
          02
        </Text>
        <h1>
          <Text balise="span" style="hero_title" trigger="load" delay={0.1}>
            Anticiper
          </Text>
          <Text balise="span" style="hero_title" trigger="load" delay={0.1}>
            le changement
          </Text>
        </h1>
        <Text
          balise="p"
          style="hero_text"
          trigger="load"
          delay={0.3}
          split={false}
        >
          En mai dernier, le gouvernement français a renouvelé son soutien à
          l’électrification en signant un nouveau contrat avec la filière
          automobile, pour définir la stratégie du secteur de 2024 à 2027. Le
          gouvernement s’est fixé le cap de 2 millions de véhicules électrifiés
          produits en France par an en 2030.
        </Text>
      </Heropage>
      {/* END HERO */}

      <Spacer size="large"></Spacer>

    {/* CENTER BLOCK */}
    <Textcenter>

    {/* Desktop */}
    <Text className="desktop-only" split={false} trigger="load" style="text_semi_bold">
      Mais l’enjeu consiste surtout à préparer le virage de 2035, cadré par le
    </Text>
    <Text className="desktop-only" split={false} trigger="load" style="text_semi_bold">
      « green deal » européen, et la fin de la production de voitures thermiques.
    </Text>

    {/* Mobile */}
    <Text className="mobile-only" split={false} trigger="load" style="text_semi_bold">
      Mais l’enjeu consiste surtout à préparer le virage de 2035, cadré par le « green deal » européen, et la fin de la production de voitures thermiques.
    </Text>


    <Spacer size="very small"></Spacer>
    <Text trigger="load" split={false} style="text_regular_bold">À l’initiative, Peugeot propose d’ores et déjà la gamme électrique la plus complète et la plus large de tous les constructeurs généralistes européens, avec 12 modèles particuliers et utilitaires, que la toute nouvelle Peugeot E-408 exposée en avant-première au Mondial de l’auto 2024 vient compléter.</Text>
    </Textcenter>
    {/* END CENTER BLOCK */}


    <Spacer size="large"></Spacer>

        {/* CAROUSEL */}
    <Section>
      <div className={styles.container_carousel_one}>
        <div>
          <ExportedPicture
              src="/assets/post02/carousel-bg01.jpg"
            alt="Description of the image"
            width={527}
            height={830}
            className={styles.carousel_image}
          />
          <ExportedPicture
              src="/assets/post02/carousel-background.jpg"
            alt="Description of the image"
            width={1129}
            height={501}
            className={styles.carousel_image_responsive}
          />
        </div>

        <Container isMargeTop={false} onRight={true}>
          <Text split={false} balise='h2' trigger='load' style='title_small' delay={0.2}>Un coup d’accélérateur vers le «&nbsp;tout électrique&nbsp;»</Text>
          <Spacer size="very small"></Spacer>
          <Text split={false} trigger="load" balise="p" style="text_regular_bold" delay={0.2}>La barre du million de voitures 100&nbsp;% électriques présentes en France vient d’être franchie, plaçant l'Hexagone au deuxième rang européen derrière l’Allemagne. Leader de l’électrique en France, Peugeot s’impose non seulement comme un précurseur, mais aussi comme un acteur majeur de l’accélération de l’électrification.</Text>
          <Spacer size="very small"></Spacer>
          <Text split={false} trigger="load" balise="p" style="text_regular" delay={0.2}>Pour Peugeot, le passage à l’électrique doit se réaliser sans compromis de confort de conduite. Le design distinctif Peugeot et le plaisir d’être au volant constituent l’ADN de chaque véhicule : de la citadine E-208 au nouveau grand SUV E-5008.</Text>
          <Spacer size="very small"></Spacer>
          <Text split={false} trigger="load" balise="p" style="text_regular" delay={0.2}>Les nouvelles versions grande autonomie des derniers E-3008 et E-5008 font passer l’électrique au niveau supérieur, grâce à la plateforme STLA Medium de Stellantis. Innovante, elle est conçue pour offrir les meilleures prestations de sa catégorie sur les critères les plus importants pour les clients : une meilleure autonomie — jusqu’à 700 km sur le E-3008, la meilleure sur son segment — un temps de recharge optimisé (jusqu’à 80 % de la batterie en 30 min), des performances et de l’efficacité́. Par ailleurs, et c’est une fierté, la marque produit ces deux modèles exclusivement dans son usine de Sochaux.</Text>
          <ToggleText
            fullText={[
              "Le dernier Peugeot E-3008 propose une silhouette profilée et un habitacle raffiné. À l’intérieur, l’innovation saute aux yeux grâce au i-Cockpit® panoramique, gage d’un plaisir de conduire inégalé. Le volant a été retravaillé pour offrir toujours plus de sensations et des commandes inédites, qui détectent automatiquement les doigts du conducteur. Le E-3008 est également doté du meilleur rayon de braquage des SUV électriques de sa catégorie. Il ne reste qu’à s’asseoir, dans ses sièges confortables et son espace optimisé, pour s’en convaincre.",
              "E-5008, le grand SUV 7 places",
              "Autre nouvelle référence majeure de la gamme électrique Peugeot : le nouveau E-5008, pouvant accueillir jusqu’à 7 personnes et possédant une autonomie allant jusqu’à 668 km. Il est commercialisé depuis l'automne 2024. Son design suggère le mouvement, la robustesse et la sécurité. À l’intérieur, l’ambiance est autant high-tech que conviviale. Équipée du i-Cockpit® panoramique, la conduite laisse place à de nouvelles émotions. Ce véhicule aux dimensions généreuses, est néanmoins très facile à manœuvrer, notamment grâce aux réglages de châssis dynamiques. Plus de 40 systèmes d’aide à la conduite et équipements de sécurité complètent le tableau. Pour sept passagers, le confort est exceptionnel et l’accès au rang 3 facile. Même si tous les sièges sont occupés, le coffre est très vaste (348 l) et l'habitabilité est optimale. Une véritable bulle de confort pour tous, du premier au troisième rang (dossiers indépendants, appuie-têtes réglables, garde au toit optimisée pour convenir à des adultes).",
              "Ces nouveaux modèles E-3008 et E-5008 utilisent un maximum de matériaux recyclés qui représentent, par exemple, 23 % de la masse totale du nouveau E-5008. Le défi électrique doit être relevé avec l’exigence de qualité et de performance qui constituent l’ADN de Peugeot depuis deux cents ans. L’avenir de l’automobile a déjà débuté."
            ]}
          />
        </Container>
        {/* <div className={styles.carousel}>
        <Carousel content={carouselContent}></Carousel>
        </div> */}
        <div>
          <ExportedPicture
              src="/assets/post02/carousel-bg02.jpg"
            alt="Description of the image"
            width={126}
            height={830}
          />
        </div>
      </div>
    </Section>
    {/* END CAROUSEL */}

        <Spacer size="large"></Spacer>

        {/* SECTION IMAGE FULL WITH */}
        <Section>
            <Spacer size="small"></Spacer>
            <Container isAllureCare={false} onRight={true}>

              <Text trigger="load" split={false} balise="h2" style="title_small" delay={0.2}>La tranquillité électrique avec la garantie Peugeot Allure Care</Text>
              <Spacer size="very small"></Spacer>
              <Text trigger="load" split={false} balise="p" style="text_regular_bold" delay={0.2}>Sérénité, longévité, facilité… Avec la garantie Allure Care. Afin d'accélérer l'adoption des véhicules électriques, Peugeot propose à ses clients une couverture allant jusqu'à 8 ans ou 160&nbsp;000 kilomètres.</Text>
              <Spacer size="very small"></Spacer>
              <Text trigger="load" split={false} balise="p" style="text_regular" delay={0.2}>Depuis le mois de février 2024, les clients qui achètent un véhicule électrique Peugeot neuf peuvent profiter d’une garantie étendue nommée Allure Care. Convaincue que le passage à l’électrique demande un accompagnement, Peugeot a imaginé un système capable de rassurer et d'offrir une tranquillité d’esprit totale à ses clients. Peugeot Allure Care couvre le moteur électrique, le chargeur, la transmission et les principaux composants électriques et mécaniques jusqu’à 8 ans, ou 160&nbsp;000 kilomètres. Elle vient compléter la garantie Peugeot spécifique, qui s’applique déjà à la batterie haute tension.</Text>
              {/* <Spacer size="very small"></Spacer>
              <Text trigger="load" balise="p" style="text_regular" delay={0.2}>Premier constructeur européen à proposer une couverture de cette amplitude, la garantie Peugeot Allure Care s’active automatiquement et gratuitement à la réalisation des entretiens, tous les 2 ans (ou tous les 25 000 kilomètres), dans le réseau Peugeot.</Text> */}
              <Text trigger='load' split={false} balise='p' style='text_regular' delay={0.2}>Premier constructeur européen à proposer une couverture de cette amplitude, la garantie Peugeot Allure Care s’active automatiquement et gratuitement à la réalisation des entretiens, tous les 2 ans (ou tous les 25 000 kilomètres), dans le réseau Peugeot.</Text>
              {/* <ToggleText
                fullText={[
                  "Premier constructeur européen à proposer une couverture de cette amplitude, la garantie Peugeot Allure Care s’active automatiquement et gratuitement à la réalisation des entretiens, tous les 2 ans (ou tous les 25 000 kilomètres), dans le réseau Peugeot.",
                ]}
              /> */}
            </Container>
            <Spacer size="container large2"></Spacer>

            <AnimatedContainer
                balise="div"
                className="fullscreenImageAbsolute"
                direction="up"
                trigger="load"
                >
                    <ExportedPicture
                        src="/assets/post02/section-image01.jpg"
                        alt="Description of the image"
                        width={2850}
                        height={1217}
                    />
            </AnimatedContainer>
        </Section>
        {/* END SECTION IMAGE FULL WITH */}
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

        <Section>
            <Spacer size="container mid"></Spacer>
            <Container onRight={false}>
              <Text trigger="load" split={false} balise="h2" style="title_small" delay={0.2}>L’intelligence artificielle embarquée</Text>
              <Spacer size="very small"></Spacer>
              <Text trigger="load" split={false} balise="p" style="text_regular_bold" delay={0.2}>En intégrant le système d’intelligence artificielle (IA), ChatGPT, Peugeot poursuit son ambition : rendre la voiture plus intelligente et, surtout, offrir une nouvelle expérience de conduite. ChatGPT est entièrement intégré dans les derniers i-Cockpit® et invite à reconsidérer le voyage en voiture.</Text>
              <Spacer size="very small"></Spacer>
              <Text trigger="load" split={false} balise="p" style="text_regular" delay={0.2}>Les IA conversationnelles, c’est-à-dire capables de répondre à toutes les questions sans le moindre doute, sont intégrées à de nombreux domaines du quotidien : logiciels de travail et de création, téléphones, ordinateurs et aujourd'hui, dans les automobiles. Quels avantages cette technologie peut-elle apporter à la conduite ? Revenons à l’époque qui a précédé les systèmes de navigation. Pour la plupart d’entre nous, il est malheureusement assez simple de se remémorer les heures où l’on tournait dans une ville à la recherche d’une adresse. Depuis, le conducteur a appris à se laisser guider, pour savourer son voyage.</Text>
              <ToggleText
                fullText={[
                  "Avec ChatGPT, l’intelligence artificielle va plus loin. Cette fois, il sera possible de demander à sa voiture des conseils pour visiter des lieux touristiques dans une ville, trouver des espaces verts tranquilles, ou encore distraire ses jeunes passagers, en inventant des quiz. Précurseur dans l’écran dernière génération et dans l’interactivité au service du conducteur, Peugeot a été l’un des premiers constructeurs automobiles à intégrer ChatGPT dans ses modèles, lors d’une phase pilote de grande ampleur. Pour en profiter, il faudra choisir l’un des nombreux modèles de dernière génération, équipés de commande vocale. Une simple mise à jour « over the air », c’est-à-dire sans intervention chez un concessionnaire, suffit à l’intégrer. En introduisant l'intelligence artificielle ChatGPT dans ses voitures, Peugeot transforme la commande vocale, pour améliorer la conduite et le voyage.",
                ]}
              />
            </Container>
            <Spacer size="container mid"></Spacer>

            <AnimatedContainer
                balise="div"
                className="imageRight_force"
                trigger="load"
                >
                    <ExportedPicture
                        src="/assets/post02/section03.jpg"
                        alt="Description of the image"
                        width={1042}
                        height={716}
                    />
            </AnimatedContainer>
        </Section>

        <Spacer size="very small"></Spacer>

        {/* DATA */}
        <Section>
          <div className={styles.section_numbers}>
            <div>
              <div className={` ${styles.mb_20_mobile}`}>
                <AnimatedContainer
                    balise="div"
                    direction="up"
                    trigger="load"
                    >
                  <div className={styles.mr_20}>
                    <Text balise="span" style="count_small" delay={0.2}>Jusqu'à 80% de recharge en</Text>
                  </div>
                        <Count style="mid" showMin={true} addSpaceNumber={false} start={0} end={30} duration={1} delay={1}/>
                </AnimatedContainer>
                <div className={styles.mr_20}>
                  <Text balise="span" style="count_small" delay={0.2} trigger="load">sur le E-3008 et E-5008</Text>
                </div>
              </div>
            </div>

            <div className={`${styles.container_line} ${styles.number_part_three}`}>
              <Line size={270}></Line>
              <AnimatedContainer
                  balise="div"
                  direction="up"
                  trigger="load"
                  >
              <div className={styles.mr_20}>
                <Text balise="span" style="count_small" delay={0.2}>Jusqu'à</Text>
              </div>
                <Count style="big" showKm={true} addSpaceNumber={false} start={0} end={700} duration={1} delay={1}/>
              </AnimatedContainer>
              <Text trigger="load" balise="span" style="count_big" delay={0.2}>d'autonomie électrique</Text>
              <Text trigger="load" balise="span" style="count_big" delay={0.2}>sur le E-3008</Text>
            </div>

          </div>
        </Section>
        {/* END DATA */}

        {/* CLASS ENERGY */}
        <Section>
            <EnergyPictoComponent showImage={true}>
              <span>« Pensez à covoiturer »</span>
              <span>#SeDéplacerMoinsPolluer</span>
            </EnergyPictoComponent>
        </Section>
        {/* END CLASS ENERGY */}

        <Section flex={true}>
          <FooterNav>
            <Link href="./le-futur-sources-d-inspiration/" passHref legacyBehavior scroll={false}>
              <a
                onMouseEnter={() => setIsHoverFooterOne(true)}
                onMouseLeave={() => setIsHoverFooterOne(false)}
                onClick={() => {
                  window.scrollTo({ top: 0, });
                }}>
                <div className={styles.bottom_content}>
                  <Text trigger="load" balise="span" style="footer_ontitle" delay={0.2}>01</Text>
                  <Spacer></Spacer>
                  <Text trigger="load" balise="h3" style="footer_title" delay={0.2}>Et si le futur </Text>
                  <Text trigger="load" balise="h3" style="footer_title" delay={0.2}>devenait source </Text>
                  <Text trigger="load" balise="h3" style="footer_title" delay={0.2}>d’inspiration ?</Text>
                  <Spacer size="very small"></Spacer>
                  <AnimatedButtonFooter text="Découvrir" isHover={isHoverFooterOne} setIsHover={setIsHoverFooterOne}></AnimatedButtonFooter>
                </div>

                <AnimatedContainer
                    balise="div"
                    className="fullscreenImage"
                    direction="up"
                    trigger="load"
                    >
                        <ExportedPicture
                            src="/assets/footer-post/post01.jpg"
                            alt="Description of the image"
                            width={949}
                            height={749}
                        />
                </AnimatedContainer>
              </a>
            </Link>
          </FooterNav>


          <FooterNav>
            <Link href="./le-mariage-du-design-et-de-l-innovation" passHref legacyBehavior scroll={false}>
              <a
                onMouseEnter={() => setIsHoverFooterTwo(true)}
                onMouseLeave={() => setIsHoverFooterTwo(false)}
                onClick={() => {
                  window.scrollTo({ top: 0,});
                }}>
                <div className={styles.bottom_content}>
                  <Text trigger="load" balise="span" style="footer_ontitle" delay={0.2}>03</Text>
                  <Spacer></Spacer>
                  <Text trigger="load" balise="h3" style="footer_title" delay={0.2}>Le mariage</Text>
                  <Text trigger="load" balise="h3" style="footer_title" delay={0.2}>du design</Text>
                  <Text trigger="load" balise="h3" style="footer_title" delay={0.2}>et de l’innovation</Text>
                  <Spacer size="very small"></Spacer>
                  <AnimatedButtonFooter text="Découvrir" isHover={isHoverFooterTwo} setIsHover={setIsHoverFooterTwo}></AnimatedButtonFooter>
                </div>

              <AnimatedContainer
                balise="div"
                className="fullscreenImage"
                direction="up"
                trigger="load"
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
      <Cookies />
    </>
  );
}