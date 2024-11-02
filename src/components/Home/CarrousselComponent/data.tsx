import { env } from "@/lib/env"

export const carrousselDatas = [
    {
        title: "le-futur-sources-d-inspiration",
        number: "01",
        description: [
            "Et si le futur",
            "devenait source",
            "d'inspiration ?"
        ],
        image:`${env.BASE_PATH}/assets/home/desktop/rubrique1.jpg`
    },
    {
        title: "anticiper-le-changement",
        number: "02",
        description: [
            "Anticiper",
            "le changement"
        ],
        image:`${env.BASE_PATH}/assets/home/desktop/rubrique2.jpg`
    },
    {
        title: "le-mariage-du-design-et-de-l-innovation",
        number: "03",
        description: [
            "Le mariage",
            "du design",
            "et de l'innovation"
        ],
        image:`${env.BASE_PATH}/assets/home/desktop/rubrique3.jpg`
    },
];
