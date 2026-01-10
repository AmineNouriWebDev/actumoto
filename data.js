// data.js - Données centralisées pour le site
const brands = [
    { name: "Peugeot", logo: "./img/logos-actumoto/peugeot.png" },
    { name: "PIAGGIO", logo: "./img/logos-actumoto/piaggio.png" },
    { name: "APRILIA", logo: "./img/logos-actumoto/aprilia.png" },
    { name: "CFMOTO", logo: "./img/logos-actumoto/cfmoto.png" },
    { name: "ZIMOTA_MOTOR", logo: "./img/logos-actumoto/zimota.png" },
    { name: "QJMOTOR", logo: "./img/logos-actumoto/qjmotors.png" },
    { name: "SUZUKI", logo: "./img/logos-actumoto/suzuki.png" },
    { name: "SYM", logo: "./img/logos-actumoto/sym.png" },
    { name: "FORZA_MOTOR_SPORT", logo: "./img/logos-actumoto/forza.png" },
    { name: "SLC", logo: "./img/logos-actumoto/slc.png" },
    { name: "SENKE", logo: "./img/logos-actumoto/senke.png" },
    { name: "LM", logo: "./img/logos-actumoto/lm.png" },
    { name: "BBM", logo: "./img/logos-actumoto/bbm.png" },
    { name: "DAYUN", logo: "./img/logos-actumoto/dayun.png" },
    { name: "NOVAGO", logo: "./img/logos-actumoto/novago.png" },
    { name: "KAYCO", logo: "./img/logos-actumoto/kayco.png" },
    { name: "UNISCOOT", logo: "./img/logos-actumoto/uniscoot.png" },
    { name: "KYMCO", logo: "./img/logos-actumoto/kymco.png" },
    { name: "ZONTES", logo: "./img/logos-actumoto/zontes.png" },
    { name: "FTM", logo: "./img/logos-actumoto/ftm.png" },
    { name: "YADEA", logo: "./img/logos-actumoto/yadea.png" },
    
    
    { name: "SANYA", logo: "./img/logos-actumoto/sanya.png" },
    { name: "POWER", logo: "./img/logos-actumoto/power.png" },
    
    { name: "MS", logo: "./img/logos-actumoto/ms.png" },
    { name: "WOLF", logo: "./img/logos-actumoto/wolf.png" },
    { name: "E_RIDER", logo: "./img/logos-actumoto/erider.png" },
    
    
    
    { name: "POWER_KIM", logo: "./img/logos-actumoto/powerkim.png" },
    
    { name: "GOLD_MOTORS", logo: "./img/logos-actumoto/goldstar.png" },
    { name: "XTF", logo: "./img/logos-actumoto/xtf.png" },
    { name: "LVNENG", logo: "./img/logos-actumoto/lvneng.png" },
    { name: "E_FLASH", logo: "./img/logos-actumoto/logo-eflash-final.png" },
    { name: "LIFAN", logo: "./img/logos-actumoto/logo-lifan-final.png" },
    { name: "WATTGO", logo: "./img/logos-actumoto/logo-wattgo-final.png" },
];

const modelsData = {
    Peugeot: [
        {
            name: "Peugeot pulsion 125 i ABS",
            images: ["./img/models/peugeot-pulsion-125.jpg", "https://www.probike49.fr/wp-content/uploads/Pulsion_Active_Amazonite-Blue_3-4_Exhaust_BD-OK.jpg", "https://cdn.lesnumeriques.com/test/18/186689/b1634f5b-scooter-peugeot-pulsion-gt-125-renaissance-bien-venue.jpeg"],
            price: "12,900 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "Environ 13,2 ch",
                coupleMaximal: "Environ 12 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "Environ 110 km/h",
                alimentation: "Injection Électronique",
                freinage: "ABS de série",
            }
        },
        {
            name: "PEUGEOT MÉTROPOLIS 400",
            image: "./img/models/peugeot-metropolis-400.jpg",
            price: "59,000 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "PEUGEOT XP 400",
            image: "./img/models/peugeot-xp-400.jpg",
            price: "41,900 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "PEUGEOT Django 125",
            image: "./img/models/peugeot-django-125.jpg",
            price: "10,900 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "PEUGEOT Tweet 125 Avec top case+ casque LS2 Airflow2 + Pare Brise",
            image: "./img/models/peugeot-tweet-125.jpg",
            price: "9,900 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "PEUGEOT PM 01 125",
            image: "./img/models/peugeot-pm-01-125.jpg",
            price: "15,500 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    SUZUKI: [
        {
            name: "SUZUKI BURGMAN STREET UB125 BLANC 125CC",
            image: "./img/models/suzuki-burgman-street-ub125-blanc.jpg",
            price: "9,449 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    PIAGGIO: [
        {
            name: "Piaggio VESPA VXL 125 cc",
            image: "./img/models/piaggio-vespa-125.jpg",
            price: "10,900 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "PIAGGIO VESPA GTS 125 cc",
            image: "./img/models/piaggio-vespa-gts.jpg",
            price: "29,900 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    APRILIA: [
        {
            name: "Aprilia sr 125",
            image: "./img/models/piaggio-aprilia-sr-125.jpg",
            price: "8,699 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Aprilia SR GT 125",
            image: "./img/models/Aprilia_SR-GT_Wall-Img_1920x1280_1.jpg",
            price: "En Arrivage",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    CFMOTO: [
        {
            name: "Motocycle CFMOTO 450MT - 450CC",
            image: "./img/models/CFMOTO-450MT.jpg",
            price: "58,131 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "CF MOTO 800MT-X",
            image: "./img/models/CF-MOTO-800MT-X.jpg",
            price: "74,910 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "CF MOTO 800MT Explore",
            image: "./img/models/CF-MOTO-800MT-Explore.jpg",
            price: "78,480 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "CF MOTO 700MT",
            image: "./img/models/CF-MOTO-700MT.jpg",
            price: "69,793 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "CF MOTO 700CL-X SPORT",
            image: "./img/models/CF-MOTO-700CL-X-SPORT.jpg",
            price: "61,344 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "CF MOTO 450CL-C",
            image: "./img/models/CF-MOTO-450CL-C.jpg",
            price: "57,715 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "CF MOTO 450CL-C-BOBER",
            image: "./img/models/CF-MOTO-450CL-C-BOBER.jpg",
            price: "59,440 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "CF MOTO 125NK",
            image: "./img/models/CF-MOTO-125NK.jpg",
            price: "17,671 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "CF MOTO 800NK Advanced",
            image: "./img/models/CF-MOTO-800NK-Advanced.jpg",
            price: "64,081 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "CF MOTO 300NK",
            image: "./img/models/CF-MOTO-300NK.jpg",
            price: "34,093 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "CF MOTO 675SR-R",
            image: "./img/models/CF-MOTO-675SR-R.jpg",
            price: "64,855 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "CF MOTO 450SR-S",
            image: "./img/models/CF-MOTO-450SR-S.jpg",
            price: "54,680 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "CF MOTO 150SC",
            image: "./img/models/CF-MOTO-150SC.jpg",
            price: "18,445 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "CF MOTO CX-5E",
            image: "./img/models/CF-MOTO-CX-5E.jpg",
            price: "10,591 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    ZIMOTA_MOTOR: [
        {
            name: "ZIMOTA Evo Blanc / Bleu - Rouge - 49 CC",
            image: "./img/models/zimota-evo.jpg",
            price: "3,899 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Cyclomoteur ZIMOTA KEE 109CC - Rouge",
            image: "./img/models/zimota-kee.jpg",
            price: "3,899 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Scooteur ZIMOTA TAPO 49 CC - Bleu",
            image: "./img/models/zimota-tapo.jpg",
            price: "3,949 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Cyclomoteur ZIMOTA TARGET 125CC - Rouge - Bleu",
            image: "./img/models/zimota-target.jpg",
            price: "3,999 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Scooter ZIMOTA SINUS X 124cc - Gris",
            image: "./img/models/zimota-sinus-x.jpg",
            price: "4,499 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Motocycle ZIMOTA Keeway RKS 125 - ROUGE",
            image: "./img/models/zimota-keeway-rks-125-rouge.jpg",
            price: "5,599 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Cyclomoteur ZIMOTA TARGET 125CC - Bleu",
            image: "./img/models/zimota-target-125-bleu.jpg",
            price: "3,999 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Scooter Electrique Eway RIDE - 400 Watt - Blanc",
            image: "./img/models/zimota-eway-ride-elec.jpg",
            price: "1,999 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "ZIMOTA RKS 125cc - Noir",
            image: "./img/models/qjmotor-zimota-rks-qjmotor-noir.jpg",
            price: "5,599 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    SYM: [
        {
            name: "SYM SYMPHONY SR 125 CBS - 125 CC - BLANC - Noir",
            image: "./img/models/sym-symphony-sr-125-cbs-125cc-blanc-noir.jpg",
            price: "6,579 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "SYM SYMPHONY S 125 - 125 CC - BLANC",
            image: "./img/models/sym-symphony-s-125-blanc.jpg",
            price: "6,579 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "SYM SYMPHONY ST 125 CBS E5 - injection - Noir",
            image: "./img/models/sym-symphony-st-125-cbs-e5-injection-noir.jpg",
            price: "7,999 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "SYM JET 14 125 AC E5 - 125 CC - NOIR - GRIS",
            image: "./img/models/sym-jet-14-125-ac-e5-noir.jpg",
            price: "8,699 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "SYM SYMPHONY ST 200 ABS E5 200cc injection - BLEU - BLANC",
            image: "./img/models/sym-symphony-st-200-abs-e5-200cc-injection-bleu.jpg",
            price: "14,999 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "SYM JET 4 RX 125 - 124cc - Gris",
            image: "./img/models/sym-jet-4-rx-124-gris.jpg",
            price: "6,199 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "FIDDLE II EFI",
            image: "./img/models/sym-fiddle-ii-efi.jpg",
            price: "5,850 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    FORZA_MOTOR_SPORT: [
        {
            name: "FORZA BBM Forza Compteur Digital 125CC - NOIR",
            image: "./img/models/forza-bbm-forza-compteur-digital-125cc-noir.jpg",
            price: "2,849 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Forza MotoStars FIRST MAXIII 3- 125CC - DIGITAL Gris - Noir",
            image: "./img/models/forza-motostars-first-maxiii-3-125cc-digital-gris.jpg",
            price: "2,899 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "FORZA BBM Forza Compteur Digital 107CC NEW-NOIR-GRIS-ROUGE",
            image: "./img/models/forza-bbm-forza-compteur-digital-107cc-new-noir.jpg",
            price: "2,799 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "FORZA SLC D-MAX+ 124CC - BLEU - Gris Nardo - Gris - Turquoise",
            image: "./img/models/forza-slc-d-max-124cc-bleu.jpg",
            price: "3,049 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "FORZA POWER 125CC Digital -GRIS + Carte Grise",
            image: "./img/models/forza-power-125cc-digital-gris-2.jpg",
            price: "2,899 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    SLC: [
        {
            name: "SLC AZUR 124 CC - NOIR",
            image: "./img/models/slc-azur-124cc-noir.jpg",
            price: "5,199 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Scooter CAPPUCINO S SLC 125 CC-4TEMPS",
            image: "./img/models/Aprilia-bleu-sr-gt-125.png",
            price: "5,499 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    SENKE: [
        {
            name: "SENKE SK 110 107 cm³ - Rouge + Repose pied - Carte Grise Offerte",
            image: "./img/models/senke-sk-110-107cc-rouge.jpg",
            price: "2,949 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    LM: [
        {
            name: "LM ADV 125CC injection ABS + TCS - BIEGE",
            image: "./img/models/lm-adv-125cc-beige.jpg",
            price: "9,949 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "SCOOTER LA VITA 125CC injection - BLEU/ ORANGE",
            image: "./img/models/la-vita-125cc-bleu-orange.jpg",
            price: "5,999 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    BBM: [
        {
            name: "Motocycle BBM 124CC FZ MAX Compteur Digitale",
            image: "./img/models/bbm-124cc-fz-max-compteur-digitale.jpg",
            price: "3,269 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    DAYUN: [
        {
            name: "DAYUN DREAM 23 4T - SLC - 124CC - ROUGE",
            image: "./img/models/dayun-dream-23-4t-rouge.jpg",
            price: "4,499 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "DAYUN SNIPER SLC - 124CC - BLANC",
            image: "./img/models/dayun-sniper-slc-blanc.jpg",
            price: "5,399 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Scooter DAYUN 125 CC | 4 TEMPS - DY125T - Bleu",
            image: "./img/models/dayun-dy125t-bleu.jpg",
            price: "4,569 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Scooter Dayun Kimbo 124CC | DY124 - Gris",
            image: "./img/models/dayun-dy124-gris.jpg",
            price: "4,259 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    NOVAGO: [
        {
            name: "Tricycle électrique NOVAGO SWING - 2400 Watt - Bleu",
            image: "./img/models/novago-swing-bleu.jpg",
            price: "6,199 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "SCOOTER ELECTRIQUE NOVAGO PIKA - BLANC",
            image: "./img/models/scooter-electrique-novago-pika-blanc-2.jpg",
            price: "3,299 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    KYMCO: [
        {
            name: "KYMCO People S 125i ABS",
            image: "./img/models/kymco-people-s-125i-abs.jpg",
            price: "10,600 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "KYMCO Drink R 125 Tunnel",
            image: "./img/models/kymco-drink-r-125-tunnel.jpg",
            price: "11,600 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    UNISCOOT: [
        {
            name: "UNISCOOT TIGER 125CC - Gris - Noir - Bleu",
            image: "./img/models/uniscoot-tiger-125cc-gris.jpg",
            price: "4,199 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "UNISCOOT TMAX+ 125CC - Noir brillant - Bleu",
            image: "./img/models/uniscoot-tmax-125cc-noir-brillant.jpg",
            price: "4,699 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "UNISCOOT FX2+ PLUS 125CC - NOIR MATT - BLEU",
            image: "./img/models/uniscoot-fx2-plus-125cc-noir-matt.jpg",
            price: "4,799 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "UNISCOOT ZT6 ZONSEN 124CC - Noir",
            image: "./img/models/uniscoot-zt6-zonsen-124cc-noir.jpg",
            price: "5,499 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    ZONTES: [
        {
            name: "zontes 368G ADV 368cc",
            image: "./img/models/zontes-368g-adv-368cc.jpg",
            price: "En Arrivage",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Zontes 703 F 2025",
            image: "./img/models/zontes-703f-2025.webp",
            price: "En Arrivage",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    YADEA: [
        {
            name: "SCOOTER ELECTRIQUE YADEA - E8S - 3000W - BLEU",
            image: "./img/models/scooter-electrique-yadea-e8s-3000w-bleu.jpg",
            price: "5,999 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    SANYA: [
        {
            name: "Sanya SY 125-9F",
            image: "./img/models/sanya-sy-125-9f.jpg",
            price: "5,849 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            },
            status: "En Arrivage"
        },
    ],
    POWER: [
        {
            name: "POWER SPRING ST - 125cc - GRIS /ORANGE ( CARTE GRISE )",
            image: "./img/models/power-spring-st-125cc-gris-orange.jpg",
            price: "4,199 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    QJMOTOR: [
        {
            name: "SUPERLIGHT QJMOTOR CBS 125cc - NOIR",
            image: "./img/models/qjmotor-zimota-superlight-qjmotor-cbs-noir.jpg",
            price: "7,499 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Motocycle QJ MOTOR SRK 125 S 125CC Injection NOIR",
            image: "./img/models/qjmotor-zimota-srk-125-s-noir-injection.jpg",
            price: "10,999 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    WOLF: [
        {
            name: "Électrique WOLF VERO 1000 Watts - Vert Clair",
            image: "./img/models/wolf-vero-vert-clair.jpg",
            price: "4,199 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Scooter Électrique WOLF 1000 Watts Sans Coffre - Noir",
            image: "./img/models/wolf-vero-noir.jpg",
            price: "3,799 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Scooter Électrique WOLF 1000 Watts Avec Coffre - Gris",
            image: "./img/models/wolf-vero-gris-coffre.jpg",
            price: "3,999 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    MS: [
        {
            name: "SCOOTER FIRST COSTA 49CC - GRIS",
            image: "./img/models/ms-first-costa-gris.jpg",
            price: "3,799 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    POWER_KIM: [
        {
            name: "SCOOTER PISTA HR+ 110CC - NOIR/CARBON ( CARTE GRISE)",
            image: "./img/models/power-kim-scooter-pista-hr-noir-carbone.jpg",
            price: "4,799 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    KAYCO: [
        {
            name: "Young Graduates (B2A) One Charge = 70 km",
            image: "./img/models/kayco.jpg",
            price: "4,500 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Freelancers (B2B) One Charge = 120 km",
            image: "./img/models/kayco-noir.jpg",
            price: "5,900 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Delivery Professionals (B2C) One Charge = 240 km",
            image: "./img/models/kayco-rouge.jpg",
            price: "7,200 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    GOLD_MOTORS: [
        {
            name: "Gold Motors R9",
            image: "./img/models/gold-motors-R9-bleu.jpg",
            price: "5,499 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Moto Gold Motocycle | Cylindré 124 CC – Compteur Digital",
            image: "./img/models/gold-motors-124cc-compteur-digital.jpg",
            price: "3,269 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    XTF: [
        {
            name: "Moto à Essence XTF DRAGON 110 CM³ Monocylindre - Noir",
            image: "./img/models/xtf-dragon-110-noir.jpg",
            price: "3,499 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    FTM: [
        {
            name: "Cyclomoteur Jialing Future STAR 110CC - Rouge",
            image: "./img/models/ftm-jialing-future-star-110cc-rouge.jpg",
            price: "3,399 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Moto Cross Korak Noir",
            image: "./img/models/ftm-korak-noir.jpg",
            price: "3,499 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    LVNENG: [
        {
            name: "Scooter Électrique LVNENG LX05 49 CC - Vert",
            image: "./img/models/lvneng-lx05-49cc-vert.jpg",
            price: "5,690 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "SCOOTER ELECTRIQUE LVNENG NCS GENUIS - BEIGE ET MARRON",
            image: "./img/models/lvneng-ncs-genius-beige-marron.jpg",
            price: "7,300 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    E_RIDER: [
        {
            name: "Scooter Électrique E-RIDER E-CLASSIC 1200 Watts - Rouge",
            image: "./img/models/scooter-_lectrique-e-rider-e-classic-1200-watts---rouge.jpg",
            price: "5,199 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Scooter Électrique E-RIDER E-TECH 1200 Watts - Bleu",
            image: "./img/models/scooter-_lectrique-e-rider-e-tech-1200-watts---bleu.jpg",
            price: "4,179 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Scooter Electrique E-Rider E-Power 1200W Rouge",
            image: "./img/models/scooter-electrique-e-rider-e-power-1200w-rouge.jpg",
            price: "3,999 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
        {
            name: "Scooter Electrique E-Rider E-eco 1000W Blanc",
            image: "./img/models/scooter-electrique-e-rider-e-eco-1000w-blanc.jpg",
            price: "3,679 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    LIFAN: [
        {
            name: "Motocycle LIFAN Glow 100 CC | LF110.3S - Noir",
            image: "./img/models/LIFAN-Motocycle-Glow-100S-LF110-3S.jpg",
            price: "3,859 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    WATTGO: [
        {
            name: "Scooter Électrique WATTGO WG9900 500W - Beige",
            image: "./img/models/scooter-electrique-wattgo-wg9900-500w-beige-hjnkjsd.jpg",
            price: "2,199 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
    E_FLASH: [
        {
            name: "Scooter Électrique E-FLASH 2000 Watts - Blanc&Rouge",
            image: "./img/models/scooter-electrique-e-flash-2000-watts-blanc-rouge-n.jpg",
            price: "8,299 TND",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                alimentation: ""
            }
        },
    ],
};

// Données pour les motos d'occasion - Tableau simple sans division par marques
const occasionModelsData = [
    {
        marque: "YAMAHA",
        name: "YAMAHA  T-MAX 562 Tech-Max - Jet Moto tel 24350274",
        images: ["./img/occasion/1/T-MAX-562-Tech-Max.jpg", "./img/occasion/1/T-MAX-562-Tech-Max-5.jpg", "./img/occasion/1/T-MAX-562-Tech-Max-6.jpg", "./img/occasion/1/T-MAX-562-Tech-Max-7.jpg"],
        price: "",
        specs: {
            kilometrage: "0 km",
            typeMoteur: "Bicylindre en ligne 4 temps",
            cylindree: "562 cm³,",
            puissance: "47 ch (35 kW)",
            coupleMaximal: "55,7 Nm",
            refroidissement: "Liquide",
            vitesseMaximale: "Environ 180 km/h",
            alimentation: "Injection Électronique",
            freinage: "Disques hydrauliques (ABS)"
        }
    },
    {
        marque: "SUZUKI",
        name: "SUZUKI-VAN.VAN.90 Cc -modèle 1982 - Jet Moto tel 24350274",
        images: ["./img/occasion/2/SUZUKI-VAN-VAN-90-Cc-modèle-1982-2.jpg","./img/occasion/2/SUZUKI-VAN-VAN-90-Cc-modèle-1982.jpg",  "./img/occasion/2/SUZUKI-VAN-VAN-90-Cc-modèle-1982-3.jpg", "./img/occasion/2/SUZUKI-VAN-VAN-90-Cc-modèle-1982-4.jpg"],
        price: "",
        specs: {
            kilometrage: "0 km",
            typeMoteur: "Monocylindre 2 temps,",
            cylindree: "90 cm³",
            puissance: "8 ch",
            coupleMaximal: "",
            refroidissement: "Air",
            vitesseMaximale: "Environ 75 km/h",
            alimentation: "",
            freinage: ""
        }
    },
    {
        marque: "YAMAHA",
        name: "YAMAHA-V-max 1700 -modèle 2009 - Jet Moto tel 24350274",
        images: ["./img/occasion/3/YAMAHA-V-max-1700-modele-2009-1.jpg", "./img/occasion/3/YAMAHA-V-max-1700-modele-2009-2.jpg", "./img/occasion/3/YAMAHA-V-max-1700-modele-2009-3.jpg", "./img/occasion/3/YAMAHA-V-max-1700-modele-2009-4.jpg"],
        price: "",
        specs: {
             kilometrage: "54000 km",
            typeMoteur: "V4 4 temps",
            cylindree: "1679 cm³",
            puissance: "106 ch (78 kW)",
            coupleMaximal: "145 Nm,",
            refroidissement: "Liquide",
            vitesseMaximale: "",
            alimentation: "Injection électronique",
            freinage: ""
        }
    },
    {
        marque: "HONDA",
        name: "HONDA-CBX1000-modèle 1982 - Jet Moto tel 24350274",
        images: ["./img/occasion/4/HONDA-CBX1000-mod-le-1982-4.jpg", "./img/occasion/4/HONDA-CBX1000-mod-le-1982-2.jpg", "./img/occasion/4/HONDA-CBX1000-mod-le-1982-3.jpg", "./img/occasion/4/HONDA-CBX1000-mod-le-1982-1.jpg"],
        price: "",
        specs: {
            kilometrage: "",
            typeMoteur: "6 cylindres en ligne 4 temps",
            cylindree: "1047 cm³",
            puissance: "105 ch",
            coupleMaximal: "84,3 Nm",
            refroidissement: "Air",
            vitesseMaximale: "220 km/h,",
            alimentation: "6 carburateurs Keihin 28 mm",
            freinage: ""
        }
    },
    {
        marque: "Kawasaki",
        name: "Kawasaki -KLR 650 -modèle 1992  - Jet Moto tel 24350274",
        images: ["./img/occasion/5/Kawasaki-KLR-650-modèle-1992-1.jpg", "./img/occasion/5/Kawasaki-KLR-650-modèle-1992-2.jpg", "./img/occasion/5/Kawasaki-KLR-650-modèle-1992-3.jpg", "./img/occasion/5/Kawasaki-KLR-650-modèle-1992-4.jpg"],
        price: "",
        specs: {
            kilometrage: "",
            typeMoteur: "Monocylindre 4 temps",
            cylindree: "651 cm³",
            puissance: "42 ch",
            coupleMaximal: "46 Nm",
            refroidissement: "Liquide",
            vitesseMaximale: "154 km/h",
            alimentation: "Carburateur Ø 40 mm,",
            freinage: "Disque avant/arrière"
        }
    },
    {
        marque: "YAMAHA",
        name: "YAMAHA-TENERE 700 - Jet Moto tel 26711555-53685927",
        images: ["./img/occasion/6/YAMAHA-TENERE-700-1.jpg", "./img/occasion/6/YAMAHA-TENERE-700-2.jpg", "./img/occasion/6/YAMAHA-TENERE-700-3.jpg", "./img/occasion/6/YAMAHA-TENERE-700-4.jpg"],
        price: "",
        specs: {
            kilometrage: "4500 km",
            typeMoteur: "Bicylindre parallèle 4 temps,",
            cylindree: "689 cm³",
            puissance: "73,4 ch (54 kW)",
            coupleMaximal: "68 Nm,",
            refroidissement: "Liquide",
            vitesseMaximale: "",
            alimentation: "Injection électronique",
            freinage: "Double disque 282 mm AV, disque 245 mm AR"
        }
    },
    {
        marque: "MAVERICK",
        name: "CAN-AM - MAVERICK-XRS-1000.R-🔥TURBO - Jet Moto tel 26711555-53685927",
        images: ["./img/occasion/7/MAVERICK-XRS-1000-1.jpg", "./img/occasion/7/MAVERICK-XRS-1000-2.jpg", "./img/occasion/7/MAVERICK-XRS-1000-3.jpg", "./img/occasion/7/MAVERICK-XRS-1000-4.jpg"],
        price: "",
        specs: {
            kilometrage: "6500 km",
            typeMoteur: "Bicylindre 4 temps turbo,",
            cylindree: "976 cm³",
            puissance: "121 ch,",
            coupleMaximal: "",
            refroidissement: "Liquide",
            vitesseMaximale: "",
            alimentation: "Injection électronique",
            freinage: "Double piston hydraulique AV/AR"
        }
    },
    {
        marque: "YAMAHA",
        name: "YAMAHA Pw 50 🇹🇳 modèle 2022 - Jet Moto tel 26711555",
        images: ["./img/occasion/8/YAMAHA-Pw-50-1.jpg", "./img/occasion/8/YAMAHA-Pw-50-2.jpg", "./img/occasion/8/YAMAHA-Pw-50-3.jpg", "./img/occasion/8/YAMAHA-Pw-50-4.jpg"],
        price: "",
        specs: {
            kilometrage: "",
            typeMoteur: "Monocylindre 2 temps,",
            cylindree: "49 cm³",
            puissance: "3 ch",
            coupleMaximal: "0,40 mkg",
            refroidissement: "Air",
            vitesseMaximale: "",
            alimentation: "Carburateur Ø 12 mm,",
            freinage: "Tambour Ø 80 mm AV/AR"
        }
    },
    {
        marque: "BMW",
        name: "BMW-S1000RR-M 🇹🇳 2026-00km - Jet Moto tel 26711555-53685927",
        images: ["./img/occasion/9/BMW-S1000RR-M-1.jpg", "./img/occasion/9/BMW-S1000RR-M-2.jpg", "./img/occasion/9/BMW-S1000RR-M-3.jpg", "./img/occasion/9/BMW-S1000RR-M-4.jpg"],
        price: "",
        specs: {
            kilometrage: "0 km",
            typeMoteur: "4 cylindres en ligne 4 temps",
            cylindree: "999 cm³",
            puissance: "218 ch (160 kW)",
            coupleMaximal: "113 Nm",
            refroidissement: "Liquide",
            vitesseMaximale: "314 km/h",
            alimentation: "Injection électronique",
            freinage: "Double disque M AV, disque AR"
        }
    },
    {
        marque: "BMW",
        name: "BMW-GS1300-Adventure-Triple Black 2026-00km - Jet Moto tel 26711555-53685927",
        images: ["./img/occasion/10/BMW-GS1300-Adventure-Triple-Black-1.jpg", "./img/occasion/10/BMW-GS1300-Adventure-Triple-Black-2.jpg", "./img/occasion/10/BMW-GS1300-Adventure-Triple-Black-3.jpg", "./img/occasion/10/BMW-GS1300-Adventure-Triple-Black-4.jpg"],
        price: "",
        specs: {
            kilometrage: "0 km",
            typeMoteur: "Boxer bicylindre 4 temps",
            cylindree: "1300 cm³",
            puissance: "145 ch (107 kW)",
            coupleMaximal: "149 Nm",
            refroidissement: "Air/liquide,",
            vitesseMaximale: "",
            alimentation: "Injection électronique",
            freinage: "Double disque AV, disque AR avec ABS"
        }
    },
   
];const videosData = [
    {
        id: 1,
        marque: "Honda",
        modele: "X-ADV",
        youtubeId: "Tr1G8g7oiL4"
    },
    {
        id: 2,
        marque: "Peugeot",
        modele: "Peugeot 103 Electric Moped",
        youtubeId: "L2mGXWcT6nM"
    },
    {
        id: 3,
        marque: "Peugeot",
        modele: "Peugeot Pulsion",
        youtubeId: "v3uBFipSzeA"
    },
    {
        id: 4,
        marque: "CFMOTO",
        modele: "MTX - 1000",
        youtubeId: "8RjmP_nSyLo"
    },
    {
        id: 5,
        marque: "SUZUKI",
        modele: "Burgman 400 Touring",
        youtubeId: "7KZIg43uO4g"
    },
    {
        id: 6,
        marque: "Piaggio",
        modele: "Beverly 310 scooter",
        youtubeId: "KnSe46bvEM8"
    },
    {
        id: 7,
        marque: "HONDA",
        modele: "CB1000 F",
        youtubeId: "gh6kBl9Qs24"
    },
    {
        id: 8,
        marque: "HONDA",
        modele: "WN7 Model Features",
        youtubeId: "dkQHfp9qRo0"
    },
    {
        id: 9,
        marque: "Apprilia",
        modele: "Apprilia Tuono V4 Factory ",
        youtubeId: "zJ6GS-VnLLQ"
    },
    {
        id: 10,
        marque: "HONDA",
        modele: "CB1000 GT",
        youtubeId: "Ia1foCEjtCY"
    },
    {
        id: 11,
        marque: "Zontes",
        modele: "Zontes 703 F - Le Trail 3 cylindres",
        youtubeId: "ffmC-iQbHR8"
    },
     {
        id: 12,
        marque: "Honda",
        modele: "New EV Concepts 2026",
        youtubeId: "v8hzcn4so7s"
    },
      {
        id: 13,
        marque: "Honda",
        modele: "2026 Honda WN7 | Electric Motorcycle  ",
        youtubeId: "dkQHfp9qRo0"
    },
      {
        id: 14,
        marque: "Peugeot",
        modele: "Metropolis 5W (2026)",
        youtubeId: "cbqtAtTlKDc"
    },
      {
        id: 15,
        marque: "Peugeot",
        modele: "XP 400 adventure scooter 2026",
        youtubeId: "D99ppR_CneE"
    },
      {
        id: 16,
        marque: "Verge Motorcycles",
        modele: "Verge TS Pro",
        youtubeId: "cy_mXYItqXU"
    },

];