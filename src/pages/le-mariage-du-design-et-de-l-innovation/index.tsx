import React, { useState } from 'react';
import Head from 'next/head'
import { Textcenter } from '@/components/Blocks/Textcenter'
import { Heropage } from '@/components/Blocks/Heropage'
import { Text } from '@/components/Blocks/Text'
import { AnimatedContainer } from '@/components/Blocks/AnimatedContainer'
import { Count } from '@/components/Blocks/Count'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { ToggleText } from '@/components/ToggleText'
import { Spacer } from '@/components/Blocks/Spacer'
import { FooterNav } from '@/components/FooterNav'
import { AnimatedButtonFooter } from '@/components/AnimatedButtonFooter'
import { Line } from '@/components/Blocks/Line'
import { Carousel, ContentProps } from '@/components/Carousel'
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/page.module.scss'
import ButtonBack from '@/components/ButtonBack'
import { EnergyPictoComponent } from '@/components/Blocks/EnergyPicto';
import { Cookies } from '@/components/Cookies';
import ExportedPicture from "@/shared/ExportedPicture";
import { env } from "@/lib/env";
import Script from 'next/script';

const carouselContent: ContentProps[] = [
  {
    title: "“Peugeot Inception Concept est le manifeste qui annonce les futurs véhicules 100% électriques de la marque.”",
    text: [
      {
        style: 'semiBold',
        text: "Depuis 2019, Matthias Hossann est directeur du design Peugeot. Il est notamment à l’origine du Peugeot Inception Concept, premier manifeste du Design de la marque et du E-3008, un modèle doté pour la première fois du nouveau i-Cockpit® panoramique.",
      },
      {
        style: 'bold',
        text: "Comment est né le Peugeot Inception Concept ?",
      },
      {
        style: 'normal',
        text: "Peugeot Inception Concept a été révélé en première mondiale lors du CES de Las Vegas en janvier 2023.",
      },
      {
        style: 'normal',
        text: "Il représente une vision optimiste de la mobilité de demain. Lorsque nous avons débuté notre réflexion sur ce concept, c’était début 2020, au cours d’une période de confinement.",
      },
      {
        style: 'normal',
        text: "Nous avions alors envie d’ajouter de la lumière avec de grandes surfaces vitrées panoramiques, ouvertes vers l’extérieur, des matériaux durables et innovants qui jouent avec des reflets colorés, le tout sur la base d’une plateforme 100% électrique.",
      },
    ],
  },
  {
    title: "“Peugeot Inception Concept est le manifeste qui annonce les futurs véhicules 100% électriques de la Marque.”",
    text: [
      
      {
        style: 'bold',
        text: "Quelles ont été vos grandes inspirations ?",
      },
      {
        style: 'normal',
        text: "Nous observons beaucoup l’évolution que connaît l’automobile ces dernières années. Nous puisons nos inspirations dans des horizons très vastes, en dehors de l’automobile, comme l’art, la mode, l’architecture ou les jeux vidéo. Cela permet d’établir de nouveaux repères sur la question de la mobilité individuelle.",
      },
      {
        style: 'normal',
        text: "En résumé, l’innovation est notre inspiration. Peugeot est une marque qui a 210 ans d’histoire, et qui a toujours su innover et s’adapter dans les moments clés. C’est une marque résolument tournée vers le futur et Peugeot Inception Concept est le manifeste qui annonce les futurs véhicules 100% électriques de la marque.",
      },
    ],
  },
  {
    title: "“Peugeot Inception Concept est le manifeste qui annonce les futurs véhicules 100% électriques de la Marque.”",
    text: [
      {
        style: 'bold',
        text: "Pour le Peugeot Inception Concept, on parle de « manifeste ». Qu’est-ce que vous revendiquez à travers ce projet ?",
      },
      {
        style: 'normal',
        text: "Peugeot Inception Concept est un manifeste qui réinterprète les gènes de la marque. La signature lumineuse à trois griffes, reconnaissable de loin, les proportions et les surfaces de la carrosserie revendiquent une félinité propre à Peugeot. C’est cette identité que nous continuons à cultiver dans un univers automobile qui est de plus en plus aseptisé.",
      },
      {
        style: 'normal',
        text: "Le design extérieur de Peugeot Inception Concept traduit un nouveau langage formel, avec un mélange de surfaces sensuelles et de courbes athlétiques, plus géométriques et acérées."
      },
      {
        style: 'normal',
        text: "L’intérieur est également révolutionnaire avec la future génération du Peugeot i-Cockpit® et le volant Hypersquare.",
      },
      {
        style: 'normal',
        text: "Les matériaux sont innovants et représentent une vitrine des technologies que Stellantis déploiera pour parvenir à l’objectif Carbon Net Zero 2038. Par exemple avec l’emploi de textile forgé ou de velours recyclé, imprimé avec des motifs 3D.",
      },
      {
        style: 'normal',
        text: "Le vitrage panoramique (7,25m<sup>2</sup> de surface) est spectaculaire, il reprend la technologie de la visière des casques des astronautes de la NASA et conserve des qualités thermiques exceptionnelles. Ses reflets à l’extérieur, dans les teintes jaunes, sont plutôt chauds et son filtrage donne des teintes bleutées à l’intérieur, qui modifient les reflets des matériaux.",
      },
    ],
  },
  {
    title: "“Peugeot Inception Concept est le manifeste qui annonce les futurs véhicules 100% électriques de la Marque.”",
    text: [
      {
        style: 'bold',
        text: "Quel est votre parcours et comment vous êtes-vous intéressé au milieu de l'automobile ?",
      },
      {
        style: 'normal',
        text: "J’ai d’abord étudié les arts plastiques, pour ensuite suivre une formation à Strate Ecole de Design. C’est là que j’ai appréhendé le design industriel propre à l’univers de l’automobile.",
      },
      {
        style: 'normal',
        text: "J’ai intégré le groupe (ex-PSA) dès 2002, auprès de Jean-Pierre Ploué, avant de prendre la direction de l’entité Concept-Cars et Design avancé en 2013, puis la direction du design de Peugeot mi-2020.",
      },

      {
        style: 'normal',
        text: "Je me suis d’abord intéressé à la création au sens large, en m’inspirant notamment de la sculpture ou de l’architecture.",
      },
      {
        style: 'normal',
        text: "Mon but est de créer pour le plus grand nombre et l’automobile est fascinante car c’est l’un des objets le plus complexe au monde à concevoir et fabriquer.",
      },

      {
        style: 'normal',
        text: "Je m’intéresse surtout à la relation entre la forme et ce qu’elle procure : en cela, l’automobile est magique, nous avons tous des souvenirs liés à une expérience automobile.",
      },

      {
        style: 'normal',
        text: "A l’instar de notre maison ou de notre appartement, c’est l’un des seuls objets avec lesquels nous entretenons un tel rapport affectif.",
      },
    ],
  },

  // {
  //   title: "“Peugeot Inception Concept est le manifeste qui annonce les futurs véhicules 100% électriques de la Marque.”",
  //   text: [
  //     {
  //       style: 'normal',
  //       text: "Mon but est de créer pour le plus grand nombre et l’automobile est fascinante car c’est l’un des objets les plus complexes au monde à concevoir et fabriquer.",
  //     },

  //     {
  //       style: 'normal',
  //       text: "Je m’intéresse surtout à la relation entre la forme et ce qu’elle procure : en cela, l’automobile est magique, nous avons tous des souvenirs liés à une expérience automobile.",
  //     },

  //     {
  //       style: 'normal',
  //       text: "À l’instar de notre maison ou de notre appartement, c’est l’un des seuls objets avec lequel nous entretenons un tel rapport affectif.",
  //     },
  //   ],
  // },

  {
    title: "“Peugeot Inception Concept est le manifeste qui annonce les futurs véhicules 100% électriques de la Marque.”",
    text: [
      {
        style: 'bold',
        text: "Quelles sont les grandes étapes lorsque vous dessinez un nouveau modèle ?",
      },
      {
        style: 'normal',
        text: "Lorsque je crée un nouveau modèle, je puise mon inspiration dans des univers en dehors de l’automobile, afin de décrypter les tendances sur l’évolution de la société et les futurs usages. Je garde toujours à l’esprit de générer des formes qui répondront à un usage précis.",
      },
      {
        style: 'normal',
        text: "Pour réaliser le design d’un nouveau modèle, nous ne devons pas considérer uniquement l’aspect esthétique, mais comprendre comment le monde va évoluer d’ici sa sortie, dans quelques années.",
      },
      {
        style: 'normal',
        text: "Le processus de création débute toujours par une compétition de style entre designers, avec des sketches – ou dessins crayonnés, qui sont retranscrits en dessin digital en 2D. Lors de cette étape, nous utilisons de plus en plus l’intelligence artificielle, comme un outil d’aide à la créativité pour les designers.",
      },
      {
        style: 'normal',
        text: "Les dessins en 2D donnent lieu à une représentation en 3D, afin de rendre réaliste l’intention de style avec l’architecture de la plateforme. Des maquettes en Clay (argile synthétique) à l’échelle 1 sont réalisées et évaluées par des clients lors de tests Clinic, pour juger l’attractivité du design, avant la réalisation des outillages industriels.",
      },
      {
        style: 'normal',
        text: "Ces étapes durent plusieurs années avant le démarrage de la production du modèle en série.",
      },
    ],
  },

  {
    title: "“Peugeot Inception Concept est le manifeste qui annonce les futurs véhicules 100% électriques de la Marque.”",
    text: [
      {
        style: 'bold',
        text: "Quels sont les projets dont vous êtes le plus fier ?",
      },
      {
        style: 'normal',
        text: "Je réponds : le prochain, parce qu’un designer doit constamment se réinventer avec chaque projet. Nous n’avons pas le temps de regarder dans le rétroviseur !",
      },
      {
        style: 'normal',
        text: "Nous devons nous adapter sans cesse à de nouvelles contraintes dans un milieu en mouvement – avec les défis environnementaux, technologiques, économiques ou réglementaires.",
      },
      {
        style: 'normal',
        text: "Chaque projet est une fierté, car c’est avant tout une aventure humaine.",
      },
    ],
  },
];

export default function LeMariageDuDesignEtDeLInnovation() {
  const [isHoverFooterOne, setIsHoverFooterOne] = useState(false);
  const [isHoverFooterTwo, setIsHoverFooterTwo] = useState(false);

  return (
    <>
      <Head>
        <title>Le mariage du design et de l'innovation</title>
        <meta
          name="description"
          content="Le Peugeot Inception Concept annonce d'ores et déjà les modèles à venir, prenant en compte l'innovation et l'écoresponsabilité."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${env.BASE_PATH}/favicon.png`} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Le mariage du design et de l'innovation"
        />
        <meta
          property="og:description"
          content="Le Peugeot Inception Concept annonce d'ores et déjà les modèles à venir, prenant en compte l'innovation et l'écoresponsabilité."
        />
        <meta property="og:image" content={`${env.BASE_PATH}/ARTICLE-3-og.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Le mariage du design et de l'innovation"
        />
        <meta
          name="twitter:description"
          content="Le Peugeot Inception Concept annonce d'ores et déjà les modèles à venir, prenant en compte l'innovation et l'écoresponsabilité."
        />
        <meta name="twitter:image" content={`${env.BASE_PATH}/ARTICLE-3-twitter.jpg`} />
      </Head>
      {/* <Animationpage> */}
        {/* HERO */}
        <Heropage imageUrl="/assets/post03/hero.jpg" imageUrlMobile="/assets/post03/hero-mobile.jpg">
            <Text balise="span" style="hero_ontitle" trigger="load" delay={0.2}>03</Text>
            <h2>
              <Text balise="span" style="hero_title" trigger="load" delay={0.2} >Le mariage</Text>
              <Text balise="span" style="hero_title" trigger="load" delay={0.2} >du design</Text>
              <Text balise="span" style="hero_title" trigger="load" delay={0.2} >et de l’innovation</Text>
            </h2>
            <Text balise="p" style="hero_text" trigger="load" delay={0.3} split={false}>De <i>Retour vers le futur à Batman, de Blade Runner à Minority Report</i>, la voiture du futur a été imaginée mille fois pour le grand écran. Souvent inspirée de modèles déjà existants, elle nourrit les rêves d’enfant et les fantasmes les plus fous. </Text>
        </Heropage>
        {/* END HERO */}

        <Spacer size="large"></Spacer>

        {/* CENTER BLOCK */}
        <Textcenter>
            <Text split={false} trigger="load" style="text_semi_bold"> Le Peugeot Inception Concept ressemble à ces stars de cinéma : un design à l’allure féline et des innovations technologiques, sortis tout droit d’un film de science-fiction. Pourtant, véritable manifeste, le Peugeot Inception Concept n’est pas seulement un rêve, mais annonce d’ores et déjà les modèles à venir, prenant en compte l’innovation et l'écoresponsabilité.</Text>
            <Spacer size="very small"></Spacer>
            <Text split={false} trigger="load" style="text_regular_bold">Les gènes de la marque sont bien présents, mais les codes sont totalement réinterprétés, symbole d’une aventure qui se poursuit autour de l’automobile électrique. « Nous devons nous adapter sans cesse à de nouvelles contraintes dans un milieu en mouvement - avec les défis environnementaux, technologiques, économiques ou réglementaires », témoigne Matthias Hossann, directeur du design.</Text>
        </Textcenter>
        {/* END CENTER BLOCK */}

        <Spacer size="large"></Spacer>

        {/* SECTION IMAGE FULL WITH */}
        <Section>

            <Spacer size="container large"></Spacer>
            <Container onRight={false}>
              <Text balise="h2" split={false} style="title_small" delay={0.2} trigger="load">L’architecture au service du conducteur</Text>
              <Spacer size="very small"></Spacer>
              <Text balise="p" split={false} style="text_regular_bold" delay={0.2} trigger="load">Toujours plus de sécurité, de bien-être et de confort. C’est ainsi que Peugeot a décidé de faire évoluer son tableau de bord, en donnant naissance au nouveau i-Cockpit ® panoramique.</Text>
              <Spacer size="very small"></Spacer> 
              <Text balise="p" split={false} style="text_regular" delay={0.2} trigger="load">Le Peugeot i-Cockpit® est né il y a tout juste dix ans avec la Peugeot 208. Cet habitacle innovant proposait trois éléments majeurs, pour maximiser le plaisir de conduire. Tout d’abord, le volant, plus compact, afin de faciliter la maniabilité et décupler les sensations de conduite. C’est ensuite un combiné tête haute, qui regroupe les informations dans l’axe du regard du conducteur, pour que celui-ci ne quitte plus la route des yeux. Enfin, troisième élément, un grand écran tactile regroupe toutes les informations de confort et permet le pilotage naturel de tous les équipements du véhicule.</Text>

              <ToggleText
                fullText={[
                  "A partir de là, les différentes générations de Peugeot i-Cockpit® ont intégré les toutes dernières technologies disponibles : combiné d'instruments numériques, connectivité sans fil, commandes vocales, effets 3D, i-Toggles (des touches numériques) personnalisables.",
                  "Des sensations inédites",
                  "Avec le nouveau i-Cockpit® panoramique, disponible sur les nouveaux E-3008 et E-5008, l’écran panoramique incurvé, constitué d’une dalle en haute définition de 21 pouces, semble être en lévitation au-dessus de la planche de bord. Son incurvation lui permet d’être à la fois dans le champ de vision du conducteur et du passager. Il rassemble, au-dessus du volant compact, toutes les informations liées à la route (vitesse, aides à la conduite, flux d’énergie...). A droite, au centre de la planche de bord, la partie tactile permet de gérer les systèmes de chauffage/climatisation, de navigation, de médias/connectivités. La visibilité est désormais totalement ouverte sur la route. Des nouvelles expériences qui décuplent l’émotion ressentie à bord et le confort de conduite."
                ]}
              />
            </Container>
            <Spacer size="container large"></Spacer>

            <AnimatedContainer
                balise="div"
                className="fullscreenImageAbsolute"
                trigger="load"
                direction="up"
                >
                  <ExportedPicture
                        src="/assets/post03/section01.jpg"
                        alt="Description of the image"
                        width={1900}
                        height={811}
                    />
            </AnimatedContainer>
        </Section>
        {/* END SECTION IMAGE FULL WITH */}

        <Spacer size="custom"></Spacer>

        <Section>
            <Spacer size="container mid"></Spacer>
            <Container onRight={true}>
              <Text balise="h2" style="title_small" delay={0.2} trigger="load">Le volant est métamorphosé</Text>
              <Spacer size="very small"></Spacer>
              <Text split={false} balise="p" style="text_regular_bold" delay={0.2} trigger="load">Un bijou de design et de technique pour une expérience de conduite inédite et onirique...Peugeot annonce la naissance de son nouveau volant, l’Hypersquare, commercialisé dès 2026.</Text>
              <Spacer size="very small"></Spacer> 
              <Text balise="p" style="text_regular" delay={0.2} trigger="load" split={false}>Conduire, c’est à première vue tenir un volant, le tourner à droite, à gauche, selon les aléas de la route. Et si, désormais, la voiture se pilotait du bout des doigts ? Et si le volant rond était remplacé par une commande Hypersquare, inspirée par le monde du digital ? Cette vision, <i>a priori</i> futuriste, est pourtant imminente. Cette innovation majeure équipera progressivement les voitures Peugeot à partir de 2026.</Text>
              <ToggleText
                fullText={[
                  "Souvenons-nous des premiers appareils mobiles, ou peut-être même des anciens combinés à domicile. Un retour dans les années 80 et imaginons qu’à cette époque, quelqu’un aurait placé dans nos mains un smartphone. Nous n'aurions certainement pas reconnu la silhouette d’un téléphone. C’est à peu près le passage opéré entre le volant classique et l’Hypersquare : un rectangle aux bords arrondis, évidés d’un cercle aux quatre coins. Difficile de croire d'abord que l'Hypersquare n’est pas relié à la direction. Effectivement, dans le système Steer-by-wire, choisi par Peugeot, le volant est relié à un capteur électronique qui détecte les mouvements du conducteur. Cela signifie, pour le dire simplement, qu’il n’y a plus de commande physique entre le volant et les roues, mais que tout est électronique. Le nombre de manœuvres diminue drastiquement. Sur une direction classique, pour braquer à fond, il faudra effectuer deux tours et demi de volant, avec ce nouveau centre de commande, il suffit de 150° d’un tour à l’autre.",
                ]}
              />
            </Container>
            <Spacer size="container mid"></Spacer>

            <AnimatedContainer
                balise="div"
                className="imageLeft"
                trigger="load"
                direction="up"
                >
              <ExportedPicture
                  src="/assets/post03/section02.jpg"
                        alt="Description of the image"
                        width={1042}
                        height={716}
                    />
            </AnimatedContainer>
        </Section>

        <Spacer size="smallest"></Spacer>

        <Section>
            <Spacer size="container mid"></Spacer>
            <Container onRight={false}>
                <p>
                  <Text split={false} balise="p" style="text_regular" delay={0.2} trigger="load">Il ne s'agit plus d'avoir les mains sur le volant mais de naviguer du bout des doigts. Ce qui pourrait à première vue déstabiliser, devient finalement plus naturel, la préhension est totalement spontanée et l'activation des commandes se fait par simple impulsion des pouces. Le centre est constitué d'un écran semblable à une tablette, dédié à la diffusion des informations de contrôle. Ainsi, les diverses fonctions comme la climatisation, le volume de la radio, les aides à la conduite sont affichées par des pictogrammes sur les deux parties latérales du rectangle de conduite. Tout a été conçu pour que le conducteur soit toujours en contact avec la commande de direction. L'automobiliste redécouvre finalement une gestuelle acquise au quotidien avec son smartphone et c'est cet aspect intuitif qui induit un très haut niveau de sécurité.</Text>
                </p>
            </Container>
            <Spacer size="container mid"></Spacer>

            <AnimatedContainer
                balise="div"
                className="imageRight"
                trigger="load"
                direction="up"
                >
              <ExportedPicture
                  src="/assets/post03/section03.jpg"
                        alt="Description of the image"
                        width={1042}
                        height={716}
                    />
            </AnimatedContainer>
        </Section>

        <Spacer size="smallest"></Spacer>

        {/* CAROUSEL */}
        <Section>
          <Text balise="h2" split={false} style="carousel_title_responsive" delay={0.2} trigger="load">“Peugeot Inception Concept est le manifeste qui annonce les futurs véhicules 100% électriques de la marque.”</Text>
          <div className={styles.container_carousel}>
            <div>
              <ExportedPicture
                  src="/assets/post03/carousel01.png"
                alt="Description of the image"
                width={527}
                height={830}
                className={styles.carousel_image}
              />
              <ExportedPicture
                  src="/assets/post03/carousel-mobile.png"
                alt="Description of the image"
                width={1129}
                height={501}
                className={styles.carousel_image_responsive}
              />
              
            </div>
            <div className={styles.carousel}>
              {/* CAROUSEL CHANGE SCROLL TO TRUE IF YOU WANT SCROLL BAR */}
              <Carousel content={carouselContent} position={true} scroll={true}></Carousel>
              {/* END CAROUSEL CHANGE SCROLL TO TRUE IF YOU WANT SCROLL BAR */}
            </div>
            <div>
              <ExportedPicture
                  src="/assets/post03/carousel02.png"
                alt="Description of the image"
                width={126}
                height={830}
              />
            </div>
          </div>
        </Section>
        {/* END CAROUSEL */}

        <Spacer size="medium"></Spacer>

        {/* ADD a remplacer */}
        <Section>
          <div className={styles.add_container}>

            <div className={styles.add_content}>

              <div className={styles.add_line}>
                <Line size={800}></Line>
              </div>
              <h2>
                <Text balise="span" style="ad_title" delay={0.2} trigger="load">“ PEUGEOT est une marque</Text>
                <Text balise="span" style="ad_title" delay={0.2} trigger="load">qui innove et nous avons</Text>
                <Text balise="span" style="ad_title" delay={0.2} trigger="load">voulu procurer une</Text>
                <Text balise="span" style="ad_title" delay={0.2} trigger="load">expérience unique à bord ”</Text>
              </h2>

              <Spacer size="very small"></Spacer>

              <div className={styles.align_text}>
                  <Text balise="span" style="ad_subtitle_bold" delay={0.2} trigger="load">Matthias Hossann  -</Text>
                  <Text balise="span" style="ad_subtitle" delay={0.2} trigger="load">directeur du design</Text>
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

          {/* Script pour afficher les annonces */}
          <Script id="gpt-desk-init" strategy="afterInteractive">
            {`
              window.onload = function() {
                const desktopAd = document.getElementById('div-gpt-ad-1729257135244-0');
                const mobileAd = document.getElementById('div-gpt-ad-1729257024685-0');

                // Vérifie la largeur de la fenêtre
                if (window.innerWidth < 767) {
                  mobileAd.style.display = 'block';
                  desktopAd.style.display = 'none';
                  console.log('Affichage de l\'annonce mobile (300x250)');
                } else {
                  desktopAd.style.display = 'block';
                  mobileAd.style.display = 'none';
                  console.log('Affichage de l\'annonce desktop (300x600)');
                }

                // Met à jour l'affichage lors du redimensionnement de la fenêtre
                window.onresize = function() {
                  if (window.innerWidth < 767) {
                    mobileAd.style.display = 'block';
                    desktopAd.style.display = 'none';
                    console.log('Redimensionnement : Affichage de l\'annonce mobile (300x250)');
                  } else {
                    desktopAd.style.display = 'block';
                    mobileAd.style.display = 'none';
                    console.log('Redimensionnement : Affichage de l\'annonce desktop (300x600)');
                  }
                };
              };
            `}
          </Script>
        </Section>
        {/* END ADS a remplacer */}
        
        <Spacer size="medium"></Spacer>

        {/* DATA */}
        <Section>
          <div className={` ${styles.section_numbers} ${styles.section_numbers_top} `}>

            <div className={styles.mt_166}>
              <div>
                <AnimatedContainer
                    balise="div"
                    trigger="load"
                    direction="up"
                    >
                        <Count style="small" showAns={true} addSpaceNumber={false} start={0} end={210} duration={1} delay={1}/>
                </AnimatedContainer>
                  <Text balise="span" style="count_small" delay={0.2} trigger="load">D'histoire</Text>
              </div>
            </div>

            <div className={styles.mt_288}>
              <div>
                <AnimatedContainer
                    balise="div"
                    trigger="load"
                    direction="up"
                    >
                        <Count style="small" addSpaceNumber={false} start={0} end={2026} duration={1} delay={1}/>
                </AnimatedContainer>
                <div className={styles.mr_20}>
                  <Text balise="span" style="count_small" delay={0.2} trigger="load">commande Hypersquare</Text>
                </div>
              </div>
            </div>

            <div className={`${styles.container_line} ${styles.number_part_three}`}>
              <Line size={270}></Line>
              <AnimatedContainer
                  balise="div"
                  trigger="load"
                  direction="up"
                  >
                      <Count style="big" addSpaceNumber={false} start={0} end={2038} duration={1} delay={1}/>
                      <span className={styles.count_big}>objectif Carbon Net Zero</span>
              </AnimatedContainer>
              
            </div>

          </div>
        </Section>
        {/* END DATA */}

        {/* CLASS ENERGY */}
        <Section>
            <EnergyPictoComponent showImage={false}>
              <span>« Au quotidien,</span>
              <span>prenez les transports en commun »</span>
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
                  window.scrollTo({ top: 0,});
                }}>
                <div className={styles.bottom_content}>
                  <Text balise="span" style="footer_ontitle" delay={0.2} trigger="load">01</Text>
                  <Spacer></Spacer>
                  <Text balise="h3" style="footer_title" delay={0.2} trigger="load">Et si le futur </Text>
                  <Text balise="h3" style="footer_title" delay={0.2} trigger="load">devenait source </Text>
                  <Text balise="h3" style="footer_title" delay={0.2} trigger="load">d’inspiration ?</Text>
                  <Spacer size="very small"></Spacer>
                  <AnimatedButtonFooter text="Découvrir" isHover={isHoverFooterOne} setIsHover={setIsHoverFooterOne}></AnimatedButtonFooter>
                </div>

                <AnimatedContainer
                    balise="div"
                    className="fullscreenImage"
                    trigger="load"
                    direction="up"
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
            <Link href="./anticiper-le-changement" passHref legacyBehavior scroll={false}>
              <a
                onMouseEnter={() => setIsHoverFooterTwo(true)}
                onMouseLeave={() => setIsHoverFooterTwo(false)}
                onClick={() => {
                  window.scrollTo({ top: 0,});
                }}>
                <div className={styles.bottom_content}>
                  <Text balise="span" style="footer_ontitle" delay={0.2} trigger="load">02</Text>
                  <Spacer></Spacer>
                  <Text balise="h3" style="footer_title" delay={0.2} trigger="load">Anticiper </Text>
                  <Text balise="h3" style="footer_title" delay={0.2} trigger="load">le changement</Text>
                  <Spacer size="very small"></Spacer>
                  <AnimatedButtonFooter text="Découvrir" isHover={isHoverFooterTwo} setIsHover={setIsHoverFooterTwo}></AnimatedButtonFooter>
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

        </Section> 

        <Cookies />

        <ButtonBack></ButtonBack>
    </>
  );
}