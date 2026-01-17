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
    { name: "LETBE", logo: "./img/logos-actumoto/letbe.png" },
    { name: "ECORIDE", logo: "./img/logos-actumoto/ecoride.png" },
    { name: "CITYBIKE", logo: "./img/logos-actumoto/citybike.png" },
    { name: "GSM", logo: "./img/logos-actumoto/gsm.png" },
    { name: "AIMA", logo: "./img/logos-actumoto/aima.png" },
    { name: "PHANTOM", logo: "./img/logos-actumoto/phantom.png" },
];

const modelsData = {
    Peugeot: [
        
        {
            name: "PEUGEOT Django 125",
            images: ["./img/models/peugeot/peugeot-django-125/peugeot-django-125-1.jpeg", "./img/models/peugeot/peugeot-django-125/peugeot-django-125-2.jpeg", "./img/models/peugeot/peugeot-django-125/peugeot-django-125-3.jpeg","./img/models/peugeot/peugeot-django-125/peugeot-django-125-4.jpeg"],
            price: "10,900 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps,",
                cylindree: "125 cm³,",
                puissance: "10,6 ch",
                coupleMaximal: "9,3 Nm",
                refroidissement: "Air",
                vitesseMaximale: "100 km/h",
                alimentation: "Injection électronique,",
                freinage: "Disque / Disque",
            }
        },
        {
            name: "PEUGEOT Tweet 125 + pare-brise + casque + top case ",
            images: ["./img/models/peugeot/peugeot-tweet-125/peugeot-tweet-125.png", "./img/models/peugeot/peugeot-tweet-125/peugeot-tweet-125-2.jpeg", "./img/models/peugeot/peugeot-tweet-125/peugeot-tweet-125-3.jpeg","./img/models/peugeot/peugeot-tweet-125/peugeot-tweet-125-1.jpeg"],
            price: "9,900 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: "125 cc",
                puissance: "11,4 ch",
                coupleMaximal: "10,3 Nm",
                refroidissement: "Air",
                vitesseMaximale: "105 km/h",
                alimentation: "Injection électronique",
                freinage: "Disque / Disque",
            }
        },
        {
            name: "PEUGEOT PM 01 125",
            images: ["./img/models/peugeot/peugeot-pm-01-125/1.png", "./img/models/peugeot/peugeot-pm-01-125/peugeot-pm-01-125-2.jpeg", "./img/models/peugeot/peugeot-pm-01-125/peugeot-pm-01-125-3.jpeg","./img/models/peugeot/peugeot-pm-01-125/peugeot-pm-01-125-4.jpeg"],
            price: "15,500 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps,",
                cylindree: "125 cc",
                puissance: "13,9 ch",
                coupleMaximal: "11 Nm",
                refroidissement: "Liquide,",
                vitesseMaximale: "105 km/h",
                alimentation: "Injection électronique,",
                freinage: "Disque / Disque ABS",
            }
        },
        {
            name: "Peugeot pulsion 125 i ABS",
            images: ["./img/models/peugeot/peugeot-pulsion-125/peugeot-pulsion-125-1.png", "./img/models/peugeot/peugeot-pulsion-125/peugeot-pulsion-125-2.jpeg", "./img/models/peugeot/peugeot-pulsion-125/peugeot-pulsion-125-3.jpeg","./img/models/peugeot/peugeot-pulsion-125/peugeot-pulsion-125-4.jpeg"],
            price: "12,900 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "13,2 ch",
                coupleMaximal: "12 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "110 km/h",
                alimentation: "Injection Électronique",
                freinage: "Disque /Disque ABS",
            }
        },
      
        {
            name: "PEUGEOT XP 400",
            images: ["./img/models/peugeot/peugeot-xp-400/peugeot-xp-400-1.jpeg", "./img/models/peugeot/peugeot-xp-400/peugeot-xp-400-2.jpeg", "./img/models/peugeot/peugeot-xp-400/peugeot-xp-400-3.jpeg","./img/models/peugeot/peugeot-xp-400/peugeot-xp-400-4.jpeg"],
            price: "42,900 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: "400 cc",
                puissance: "36,7 ch ",
                coupleMaximal: "38,1 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "137 km/h",
                alimentation: "Injection électronique",
                freinage: "Double disque / Disque AR ABS",
            }
        },
          {
            name: "PEUGEOT MÉTROPOLIS 400",
            images: ["./img/models/peugeot/peugeot-metropolis-400/peugeot-metropolis-1.jpeg", "./img/models/peugeot/peugeot-metropolis-400/peugeot-metropolis-2.jpeg", "./img/models/peugeot/peugeot-metropolis-400/peugeot-metropolis-3.jpeg","./img/models/peugeot/peugeot-metropolis-400/peugeot-metropolis-4.jpeg"],
            price: "59,000 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps,",
                cylindree: "400 cc",
                puissance: "35,6 ch",
                coupleMaximal: "38,1 Nm",
                refroidissement: "Liquide,",
                vitesseMaximale: "135 km/h",
                alimentation: "Injection électronique,",
                freinage: "Double disque/ Disque ABS-CBS",
            }
        },
    ],
    SUZUKI: [
        {
            name: "SUZUKI BURGMAN STREET UB125 BLANC 125CC",
            images: ["./img/models/suzuki/suzuki-burgman-street-ub125-blanc/suzuki-burgman-street-ub125-blanc.jpg","./img/models/suzuki/suzuki-burgman-street-ub125-blanc/suzuki-burgman-street-ub125-gris.jpg","./img/models/suzuki/suzuki-burgman-street-ub125-blanc/suzuki-burgman-street-ub125-noir.jpg"],
            price: "9,449 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "8,6",
                coupleMaximal: "10 Nm",
                refroidissement: "A air",
                vitesseMaximale: "95 km/h",
                alimentation: "Injection électronique",
                freinage: "Disque/Tambour CBS",
            }
        },
    ],
    PIAGGIO: [
        {
            name: "Piaggio VESPA VXL 125 cc",
            images: ["./img/models/piaggio/piaggio-vespa-125/piaggio-vespa-125-1.jpeg", "./img/models/piaggio/piaggio-vespa-125/piaggio-vespa-125-2.jpeg", "./img/models/piaggio/piaggio-vespa-125/piaggio-vespa-125-3.jpeg", "./img/models/piaggio/piaggio-vespa-125/piaggio-vespa-125-4.jpeg"],
            price: "10,900 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "7,1 Kw",
                coupleMaximal: "10,6 Nm",
                refroidissement: "A air",
                vitesseMaximale: "90 Km/h",
                alimentation: "Injection",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "PIAGGIO VESPA GTS 125 cc",
            images: ["./img/models/piaggio/piaggio-vespa-gts/piaggio-vespa-gts-1.jpeg", "./img/models/piaggio/piaggio-vespa-gts/piaggio-vespa-gts-2.jpeg", "./img/models/piaggio/piaggio-vespa-gts/piaggio-vespa-gts-3.jpeg", "./img/models/piaggio/piaggio-vespa-gts/piaggio-vespa-gts-4.jpeg"],
            price: "29,900 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "10,3 Kw",
                coupleMaximal: "12 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "110 Kmh",
                alimentation: "Injection",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "Piaggio Liberty S 125 2025",
            images: ["./img/models/piaggio/liberty-s-125-2025/liberty-s-125-2025-1.jpeg", "./img/models/piaggio/liberty-s-125-2025/liberty-s-125-2025-2.jpeg", "./img/models/piaggio/liberty-s-125-2025/liberty-s-125-2025-3.jpeg"],
            price: "16,500 TND",
            specs: {
                typeMoteur: "i-get 125 cc 4 temps injection",
                cylindree: "125 cc",
                puissance: "8,1 kW (11 ch)",
                coupleMaximal: "10,75 Nm",
                refroidissement: "Air",
                vitesseMaximale: "95 km/h",
                alimentation: "Injection électronique",
                freinage: "Disque AV ABS / Tambour AR",
            }
        },
    ],
    APRILIA: [
        {
            name: "Aprilia sr 125",
            images: ["./img/models/aprilia/aprilia-sr-125/piaggio-aprilia-sr-125-1.jpeg", "./img/models/aprilia/aprilia-sr-125/piaggio-aprilia-sr-125-2.jpeg", "./img/models/aprilia/aprilia-sr-125/piaggio-aprilia-sr-125-3.jpeg", "./img/models/aprilia/aprilia-sr-125/scooter-aprilia-sr125-bleu-55.jpg"],
            price: "8,699 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "7.1 Kw",
                coupleMaximal: "10 Nm",
                refroidissement: "A air",
                vitesseMaximale: "90 Km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Aprilia SR GT 125 ",
            images: ["./img/models/aprilia/aprilia-gt/aprilia-1.jpeg", "./img/models/aprilia/aprilia-gt/aprilia-2.jpeg", "./img/models/aprilia/aprilia-gt/aprilia-3.jpeg"],
            price: "EN Arrivage",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "11 Kw",
                coupleMaximal: "12 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "99 Km/h",
                alimentation: "injection",
                freinage: "Disque/Disque ABS",
            }
            
        },
        {
            name: "Aprilia SR 125 Moteur i-get 124 cc ",
            images: ["./img/models/aprilia/aprilia-sr-125-moteur-i-get/aprilia-1.png", "./img/models/aprilia/aprilia-sr-125-moteur-i-get/aprilia-2.png"],
            price: "11,900 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps i-get",
                cylindree: "125 cc",
                puissance: "11 Kw",
                coupleMaximal: "12 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "100 Km/h",
                alimentation: "Injection électronique",
                freinage: "Disque AV / Disque AR CBS",
            }
            
        },
       
        
    ],
    CFMOTO: [
        {
            name: "Motocycle CFMOTO 450MT - 450CC",
            image: "./img/models/cfmoto/CFMOTO-450MT/CFMOTO-450MT.jpg",
            price: "58,131 TND",
            specs: {
                typeMoteur: "Bicylindre, 4 temps",
                cylindree: "450 cc",
                puissance: "32,5 Kw",
                coupleMaximal: "44 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "160 Km/h",
                alimentation: "Injection",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "CF MOTO 800MT-X",
            image: "./img/models/cfmoto/CF-MOTO-800MT-X/CF-MOTO-800MT-X.jpg",
            price: "74,910 TND",
            specs: {
                typeMoteur: "Bicylindre",
                cylindree: "800 cc",
                puissance: "70 Kw",
                coupleMaximal: "87 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "200 Km/h",
                alimentation: "Injection",
                freinage: "Double Disque/Disque ABS",
            }
        },
        {
            name: "CF MOTO 800MT Explore",
            image: "./img/models/cfmoto/CF-MOTO-800MT-Explore/CF-MOTO-800MT-Explore.jpg",
            price: "78,480 TND",
            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: "800 cc",
                puissance: "67 Kw",
                coupleMaximal: "75 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "200 Km/h",
                alimentation: "Injection",
                freinage: "Double Disque/Disque ABS",
            }
        },
        {
            name: "CF MOTO 700MT",
            image: "./img/models/cfmoto/CF-MOTO-700MT/CF-MOTO-700MT.jpg",
            price: "69,793 TND",
            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: "700 cc",
                puissance: "49 Kw",
                coupleMaximal: "60 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "190 Km/h",
                alimentation: "Injection",
                freinage: "Double Disque/Disque ABS",
            }
        },
        {
            name: "CF MOTO 700CL-X SPORT",
            image: "./img/models/cfmoto/CF-MOTO-700CL-X-SPORT/CF-MOTO-700CL-X-SPORT.jpg",
            price: "61,344 TND",
            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: "700 cc",
                puissance: "52 Kw",
                coupleMaximal: "68 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "190 Km/h",
                alimentation: "Injection",
                freinage: "Double Disque/Disque ABS",
            }
        },
        {
            name: "CF MOTO 450CL-C",
            image: "./img/models/cfmoto/CF-MOTO-450CL-C/CF-MOTO-450CL-C.jpg",
            price: "57,715 TND",
            specs: {
                typeMoteur: "Bicylindre",
                cylindree: "450 cc",
                puissance: "32,5 Kw",
                coupleMaximal: "42 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "160 Km/h",
                alimentation: "Injection",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "CF MOTO 450CL-C-BOBER",
            image: "./img/models/cfmoto/CF-MOTO-450CL-C-BOBER/CF-MOTO-450CL-C-BOBER.jpg",
            price: "59,440 TND",
            specs: {
                typeMoteur: "Bicylindre",
                cylindree: "450 cc",
                puissance: "30 Kw",
                coupleMaximal: "42 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "160 Km/h",
                alimentation: "Injection",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "CF MOTO 125NK",
            image: "./img/models/cfmoto/CF-MOTO-125NK/CF-MOTO-125NK.jpg",
            price: "17,671 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "11 Kw",
                coupleMaximal: "11 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "110 Km/h",
                alimentation: "Injection",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "CF MOTO 800NK Advanced",
            image: "./img/models/cfmoto/CF-MOTO-800NK-Advanced/CF-MOTO-800NK-Advanced.jpg",
            price: "64,081 TND",
            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: "800 cc",
                puissance: "70 Kw",
                coupleMaximal: "81 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "220 Km/h",
                alimentation: "Injection",
                freinage: "Double Disque/Disque ABS",
            }
        },
        {
            name: "CF MOTO 300NK",
            image: "./img/models/cfmoto/CF-MOTO-300NK/CF-MOTO-300NK.jpg",
            price: "34,093 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "300 cc",
                puissance: "20,5 Kw",
                coupleMaximal: "25 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "139 Km/h",
                alimentation: "Injection",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "CF MOTO 675SR-R",
            image: "./img/models/cfmoto/CF-MOTO-675SR-R/CF-MOTO-675SR-R.jpg",
            price: "64,855 TND",
            specs: {
                typeMoteur: "3 Cylindre, 4 temps",
                cylindree: "675 cc",
                puissance: "70 Kw",
                coupleMaximal: "70 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "230 Km/h",
                alimentation: "Injection",
                freinage: "Double Disque/Disque ABS",
            }
        },
        {
            name: "CF MOTO 450SR-S",
            image: "./img/models/cfmoto/CF-MOTO-450SR-S/CF-MOTO-450SR-S.jpg",
            price: "54,680 TND",
            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: "450 cc",
                puissance: "35 Kw",
                coupleMaximal: "39 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "180 Km/h",
                alimentation: "Injection",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "CF MOTO 150SC",
            image: "./img/models/cfmoto/CF-MOTO-150SC/CF-MOTO-150SC.jpg",
            price: "18,445 TND",
            specs: {
                typeMoteur: "Monocylindre, 2 soupapes",
                cylindree: "150 cc",
                puissance: "10,5 Kw",
                coupleMaximal: "14,2 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "110 Km/h",
                alimentation: "Injection",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "CF MOTO CX-5E",
            image: "./img/models/cfmoto/CF-MOTO-CX-5E/CF-MOTO-CX-5E.jpg",
            price: "10,591 TND",
            specs: {
                typeMoteur: "Electrique, 48 V",
                cylindree: "",
                puissance: "1,5 Kw",
                coupleMaximal: "7 Nm",
                refroidissement: "",
                vitesseMaximale: "46 Km/h",
                alimentation: "",
                freinage: "",
            }
        },
    ],
    ZIMOTA_MOTOR: [
         {
            name: "Scooter Electrique Eway RIDE - 400 Watt - Blanc",
            image: "./img/models/zimotamotor/zimota-eway-ride-elec/zimota-eway-ride-elec.jpg",
            price: "1,999 TND",
            specs: {
                typeMoteur: "Électrique 400 W",
                cylindree: "",
                puissance: "400 W",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "30 km/h",
                alimentation: "Batterie 48V 12Ah",
                freinage: "Tambour / Tambour",
            }
        },
        {
            name: "ZIMOTA Evo Blanc / Bleu - Rouge - 49 CC",
            image: "./img/models/zimotamotor/zimota-evo/zimota-evo.jpg",
            price: "3,899 TND",
            specs: {
                typeMoteur: "Monocylindre 2T",
                cylindree: "50 cc",
                puissance: "5 cv",
                coupleMaximal: "4,2 Nm",
                refroidissement: "A air",
                vitesseMaximale: "45 km/h",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
        {
            name: "Cyclomoteur ZIMOTA KEE 109CC - Rouge",
            image: "./img/models/zimotamotor/zimota-kee/zimota-kee.jpg",
            price: "3,899 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "110 cc",
                puissance: "5 cv",
                coupleMaximal: "8,3 Nm",
                refroidissement: "A air",
                vitesseMaximale: "85 km/h",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
        {
            name: "Scooteur ZIMOTA TAPO 49 CC - Bleu",
            image: "./img/models/zimotamotor/zimota-tapo/zimota-tapo.jpg",
            price: "3,949 TND",
            specs: {
                typeMoteur: "Monocylindre 2T",
                cylindree: "50 cc",
                puissance: "4 cv",
                coupleMaximal: "4 Nm",
                refroidissement: "A air",
                vitesseMaximale: "45 km/h",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
        {
            name: "Cyclomoteur ZIMOTA TARGET 125CC - Rouge - Bleu",
            image: "./img/models/zimotamotor/zimota-target/zimota-target.jpg",
            price: "3,999 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "100 km/h",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
        {
            name: "Scooter ZIMOTA SINUS X 124cc - Gris",
            image: "./img/models/zimotamotor/zimota-sinus-x/zimota-sinus-x.jpg",
            price: "4,499 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "8,5 cv",
                coupleMaximal: "9,5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "95 km/h",
                alimentation: "Carburateur",
                freinage: "Disque hydr/ Tambour",
            }
        },
        {
            name: "Motocycle ZIMOTA Keeway RKS 125 - ROUGE",
            image: "./img/models/zimotamotor/zimota-keeway-rks-125-rouge/zimota-keeway-rks-125-rouge.jpg",
            price: "5,599 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "8,4 cv",
                coupleMaximal: "10 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
        {
            name: "Cyclomoteur ZIMOTA TARGET 125CC - Bleu",
            image: "./img/models/zimotamotor/zimota-target-125-bleu/zimota-target-125-bleu.jpg",
            price: "3,999 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
       
        {
            name: "ZIMOTA RKS 125cc - Noir",
            image: "./img/models/zimotamotor/qjmotor-zimota-rks-qjmotor-noir/qjmotor-zimota-rks-qjmotor-noir.jpg",
            price: "5,599 TND",
            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: "125 cc",
                puissance: "8,4 cv",
                coupleMaximal: "10 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
        {
            name: "ZIMOTA NX",
            images: ["./img/models/zimotamotor/zimota-nx/1.jpg", "./img/models/zimotamotor/zimota-nx/2.jpg", "./img/models/zimotamotor/zimota-nx/3.jpg","./img/models/zimotamotor/zimota-nx/4.jpg"],
            price: "6,799 TND",
            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: "125 cc",
                puissance: "8,4 cv",
                coupleMaximal: "10 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                alimentation: "Carburateur",
                freinage: "Disque / Disque CBS",
            }
        },
    ],
    SYM: [
        {
            name: "SYM SYMPHONY SR 125 CBS - 125 CC - BLANC - Noir",
            image: "./img/models/sym/sym-symphony-sr-125-cbs-125cc-blanc-noir/sym-symphony-sr-125-cbs-125cc-blanc-noir.jpg",
            price: "6,579 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "8,8 cv",
                coupleMaximal: "10,3 Nm",
                refroidissement: "A air",
                vitesseMaximale: "99 km/h",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque CBS",
            }
        },
        {
            name: "SYM SYMPHONY S 125 - 125 CC - BLANC",
            image: "./img/models/sym/sym-symphony-s-125-blanc/sym-symphony-s-125-blanc.jpg",
            price: "6,579 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance:"",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "95 km/h",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "SYM SYMPHONY ST 125 CBS E5 - injection - Noir",
            image: "./img/models/sym/sym-symphony-st-125-cbs-e5-injection-noir/sym-symphony-st-125-cbs-e5-injection-noir.jpg",
            price: "7,999 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "95 km/h",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque CBS",
            }
        },
        {
            name: "SYM JET 14 125 AC E5 - 125 CC - NOIR - GRIS",
            image: "./img/models/sym/sym-jet-14-125-ac-e5-noir/sym-jet-14-125-ac-e5-noir.jpg",
            price: "8,699 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "11,3 cv",
                coupleMaximal: "10,7 Nm",
                refroidissement: "A air",
                vitesseMaximale: "95 km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "SYM SYMPHONY ST 200 ABS E5 200cc injection - BLEU - BLANC",
            image: "./img/models/sym/sym-symphony-st-200-abs-e5-200cc-injection-bleu/sym-symphony-st-200-abs-e5-200cc-injection-bleu.jpg",
            price: "14,999 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "200 cc",
                puissance: "12,2 cv",
                coupleMaximal: "12,5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "110 km/h",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "SYM JET 4 RX 125 - 124cc - Gris",
            image: "./img/models/sym/sym-jet-4-rx-124-gris/sym-jet-4-rx-124-gris.jpg",
            price: "6,199 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "10,2 cv",
                coupleMaximal: "9,2 Nm",
                refroidissement: "A air",
                vitesseMaximale: "95 km/h",
                alimentation: "Injection électronique",
                freinage: "Disque/Tambour CBS",
            }
        },
        {
            name: "FIDDLE II EFI",
            image: "./img/models/sym/sym-fiddle-ii-efi/sym-fiddle-ii-efi.jpg",
            price: "5,850 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "8 cv",
                coupleMaximal: "8,6 Nm",
                refroidissement: "A air",
                vitesseMaximale: "90 km/h",
                alimentation: "Injection électronique",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "ADX 300CC injection ABS + TCS E5+",
            images: ["./img/models/sym/ADX-300CC-injection-ABS/1.jpg", "./img/models/sym/ADX-300CC-injection-ABS/2.jpg", "./img/models/sym/ADX-300CC-injection-ABS/3.jpg","./img/models/sym/ADX-300CC-injection-ABS/4.jpg"],
            price: "24,999 TND",
            specs: {
                typeMoteur: "Monocylindre – 4 T - Injection",
                cylindree: "278 cm3",
                puissance: "19 kW",
                coupleMaximal: "",
                refroidissement: "Liquide",
                vitesseMaximale: "",
                alimentation: "",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "Sym husky 200cc +",
            images: ["./img/models/sym/sym-husky/1.webp", "./img/models/sym/sym-husky/2.png", "./img/models/sym/sym-husky/3.jpeg","./img/models/sym/sym-husky/4.jpg"],
            price: "16,000 TNDs",
            specs: {
                typeMoteur: "Monocylindre 4 temps 4 soupapes",
                cylindree: "175 cm³",
                puissance: "14,7 ch (10,8 kW)",
                coupleMaximal: "14,5 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "110 km/h",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque ABS",
            }
        },
    ],
    FORZA_MOTOR_SPORT: [
       
        {
            name: "Forza MotoStars FIRST MAXIII 3- 125CC - DIGITAL Gris - Noir",
            image: "./img/models/forza/forza-motostars-first-maxiii-3-125cc-digital-gris/forza-motostars-first-maxiii-3-125cc-digital-gris.jpg",
            price: "2,899 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "5,5 Kw",
                coupleMaximal: "7 Nm",
                refroidissement: "A air",
                vitesseMaximale: "90 Km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "FORZA Power Compteur Digital 107CC",
            image: "./img/models/forza/forza-bbm-forza-compteur-digital-107cc-new-noir/forza-bbm-forza-compteur-digital-107cc-new-noir.jpg",
            price: "2,839 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "107 cc",
                puissance: "5,5 Kw",
                coupleMaximal: "7 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                alimentation: "Carburateur",
                freinage: "Tambour",
            }
        },
        {
            name: "FORZA D-MAX 124CC",
            image: "./img/models/forza/forza-slc-d-max-124cc-bleu/forza-slc-d-max-124cc-bleu.jpg",
            price: "3,049 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "5,5 Kw",
                coupleMaximal: "7 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                alimentation: "Carburateur",
                freinage: "Tambour",
            }
        },
        {
            name: "FORZA Power Compteur Digital 125CC ",
            image: "./img/models/forza/forza-power-125cc-digital-gris-2/forza-power-125cc-digital-gris-2.jpg",
            price: "2,899 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "5,5 Kw",
                coupleMaximal: "7 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                alimentation: "Carburateur",
                freinage: "Tambour",
            }
        },
    ],
    SLC: [
        {
            name: "SLC AZUR 124 CC - NOIR",
            image: "./img/models/slc/slc-azur-124cc-noir/slc-azur-124cc-noir.jpg",
            price: "5,199 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "9 CV",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Scooter CAPPUCINO S SLC 125 CC-4TEMPS",
            image: "./img/models/slc/Scooter-CAPPUCINO-S-SLC-125-CC-4TEMPS/Scooter-CAPPUCINO-S-SLC-125-CC-4TEMPS.jpg",
            price: "5,499 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "9,5 cv",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "90 km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
    ],
    SENKE: [
        {
            name: "SENKE SK 110 107 cm³ - Rouge + Repose pied",
            image: "./img/models/senke/senke-sk-110-107cc-rouge/senke-sk-110-107cc-rouge.jpg",
            price: "2,949 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "110 cc",
                puissance: "7 cv",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "85 km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "SENKE RAPTOR 200 CC",
            images: ["./img/models/senke/senke-raptor-200cc/senke-raptor-200c-2.jpg", "./img/models/senke/senke-raptor-200cc/senke-raptor-200c-1.png" ],
            price: "6,600 TND",
            price: "9,800 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "199,8 cm³",
                puissance: "16,1 ch",
                coupleMaximal: "11,5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "125 km/h",
                alimentation: "Carburateur",
                freinage: "Disque AV/AR CBS",
            }
        },
    ],
    LM: [
        {
            name: "LM ADV 125CC injection ABS + TCS - BIEGE",
            image: "./img/models/lm/lm-adv-125cc-beige/lm-adv-125cc-beige.jpg",
            price: "9,949 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "8,3 Kw",
                coupleMaximal: "11,2 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "95 Km/h",
                alimentation: "Injection",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "SCOOTER LA VITA 125CC injection - BLEU/ ORANGE",
            image: "./img/models/lm/la-vita-125cc-bleu-orange/la-vita-125cc-bleu-orange.jpg",
            price: "5,999 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "5 Kw",
                coupleMaximal: "7 Nm",
                refroidissement: "A air",
                vitesseMaximale: "90 Km/h",
                alimentation: "Injection",
                freinage: "Disque/Disque",
            }
        },
    ],
    BBM: [
        {
            name: "Motocycle BBM 124CC FZ MAX Compteur Digitale",
            image: "./img/models/bbm/bbm-124cc-fz-max-compteur/bbm-124cc-fz-max-compteur-digitale.jpg",
            price: "2,849 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "5.5 Kw",
                coupleMaximal: "6.5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "110 Km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
    ],
    DAYUN: [
        {
            name: "DAYUN DREAM 23 4T - SLC - 124CC - NOIR",
            image: "./img/models/dayun/dayun-sniper-slc-noir/dayun-dream-slc-noir.png",
            price: "4,499 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "DAYUN SNIPER SLC - 124CC - BLANC",
            image: "./img/models/dayun/dayun-sniper-slc-blanc/dayun-sniper-slc-blanc.jpg",
            price: "5,199 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "6,2 Kw",
                coupleMaximal: "9 Nm",
                refroidissement: "A air",
                vitesseMaximale: "90 Km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "Scooter DAYUN 125 CC | 4 TEMPS - DY125T - Bleu",
            image: "./img/models/dayun/dayun-dy125t-bleu/dayun-dy125t-bleu.jpg",
            price: "4,569 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Scooter Dayun Kimbo 124CC | DY124 - Gris",
            image: "./img/models/dayun/dayun-dy124-gris/dayun-dy124-gris.jpg",
            price: "4,259 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
    ],
    NOVAGO: [
        {
            name: "Tricycle électrique NOVAGO SWING - 2400 Watt - Bleu",
            image: "./img/models/novago/novago-swing-bleu/novago-swing-bleu.jpg",
            price: "6,199 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "",
                puissance: "2400w",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 Km/h",
                alimentation: "",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "SCOOTER ELECTRIQUE NOVAGO PIKA - BLANC",
            image: "./img/models/novago/novago-pika-blanc-2/scooter-electrique-novago-pika-blanc-2.jpg",
            price: "3,299 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "",
                puissance: "1000w",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "40 Km/h",
                alimentation: "",
                freinage: "Double Disque/Disque",
            }
        },
        {
            name: "SCOOTER ELECTRIQUE NOVAGO TIGER 140",
            images: ["./img/models/novago/NOVAGO-TIGER-140/2.jpg", "./img/models/novago/NOVAGO-TIGER-140/1.jpg", "./img/models/novago/NOVAGO-TIGER-140/3.jpg"],
            price: "6,600 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "",
                puissance: "1500W",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 km",
                alimentation: "2 X Lithium Fer 60 volt 30 AH",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "SCOOTER ELECTRIQUE NOVAGO TIGER 70",
            images: ["./img/models/novago/NOVAGO-TIGER-70/2.jpg", "./img/models/novago/NOVAGO-TIGER-70/3.jpg", "./img/models/novago/NOVAGO-TIGER-70/1.jpg"],
            price: "4,900 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "",
                puissance: "1500W",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 km",
                alimentation: "Lithium Fer 60 volt 30 AH",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "SCOOTER ELECTRIQUE NOVAGO TRICITY",
            images: ["./img/models/novago/NOVAGO-TRICITY/2.jpg", "./img/models/novago/NOVAGO-TRICITY/3.jpg", "./img/models/novago/NOVAGO-TRICITY/1.jpg","./img/models/novago/NOVAGO-TRICITY/4.jpg"],
            price: "5,300 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "",
                puissance: "800 W",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "30 km",
                alimentation: "Lithium Fer 60 volt 30 AH",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "SCOOTER ELECTRIQUE NOVAGO LUNA 70",
            images: ["./img/models/novago/NOVAGO-LUNA-70/2.jpg", "./img/models/novago/NOVAGO-LUNA-70/3.jpg", "./img/models/novago/NOVAGO-LUNA-70/1.jpg","./img/models/novago/NOVAGO-LUNA-70/4.jpg"],
            price: "4,200 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "",
                puissance: "1500W",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "55 km",
                alimentation: "Lithium Fer 60 volt 30 AH",
                freinage: "Disque/Disque",
            }
        },
    ],
    KYMCO: [
        {
            name: "KYMCO People S 125i ABS",
            image: "./img/models/kymco/kymco-people-s-125i-abs/kymco-people-s-125i-abs.jpg",
            price: "10,600 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "8,3 Kw",
                coupleMaximal: "10 Nm",
                refroidissement: "A air",
                vitesseMaximale: "",
                alimentation: "injection",
                freinage: "Disque/Tambour ABS",
            }
        },
        {
            name: "KYMCO Dink R 125 Tunnel",
            image: "./img/models/kymco/kymco-drink-r-125-tunnel/kymco-drink-r-125-tunnel.jpg",
            price: "11,699 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "8,2 Kw",
                coupleMaximal: "10,6 Nm",
                refroidissement: "A air",
                vitesseMaximale: "",
                alimentation: "Injection",
                freinage: "Disque/Disque",
            }
        },
    ],
    UNISCOOT: [
        {
            name: "UNISCOOT TIGER 125CC - Gris - Noir - Bleu",
            image: "./img/models/uniscoot/uniscoot-tiger-125cc-gris/uniscoot-tiger-125cc-gris.jpg",
            price: "4,199 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "10 cv",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "140 km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "UNISCOOT TMAX+ 125CC - Noir brillant - Bleu",
            image: "./img/models/uniscoot/uniscoot-tmax-125cc-noir-brillant/uniscoot-tmax-125cc-noir-brillant.jpg",
            price: "4,699 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "4,0 Nm",
                refroidissement: "A air",
                vitesseMaximale: "120 km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "UNISCOOT FX2+ PLUS 125CC - NOIR MATT - BLEU",
            image: "./img/models/uniscoot/uniscoot-fx2-plus-125cc-noir-matt/uniscoot-fx2-plus-125cc-noir-matt.jpg",
            price: "4,799 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "UNISCOOT ZT6 ZONSEN 124CC - Noir",
            image: "./img/models/uniscoot/uniscoot-zt6-zonsen-124cc-noir/uniscoot-zt6-zonsen-124cc-noir.jpg",
            price: "5,499 TND",
            specs: {
                typeMoteur: "Monocylindre PT125, 4 T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "85 km/h",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "Scooter Uniscoot Smax Plus 125Cc",
            images: ["./img/models/uniscoot/uniscoot-smax-plus-cc/1.jpg","./img/models/uniscoot/uniscoot-smax-plus-cc/2.jpg","./img/models/uniscoot/uniscoot-smax-plus-cc/3.jpeg"],
            price: "4,699 TND",
            specs: {
                typeMoteur: "Monocylindre 4 T",
                cylindree: "125 cc",
                puissance: "8-9 ch",
                coupleMaximal: "4 Nm",
                refroidissement: "A air",
                vitesseMaximale: "110 km/h",
                alimentation: "Injection électronique",
                freinage: "Disque AV / Ferrodo AR",
            }
        },
    ],
    ZONTES: [
        {
            name: "zontes 368G ADV 368cc",
            image: "./img/models/zontes/zontes-368g-adv-368cc/zontes-368g-adv-368cc.jpg",
            price: "En Arrivage",
            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: "368 cc",
                puissance: "38 cv",
                coupleMaximal: "40 Nm ",
                refroidissement: "Liquide",
                vitesseMaximale: "140 km/h",
                alimentation: "Injection électronique",
                freinage: "Disques J.Juan",
            }
        },
        {
            name: "Zontes 703 F 2025",
            image: "./img/models/zontes/zontes-703f-2025/zontes-703f-2025.webp",
            price: "En Arrivage",
            specs: {
                typeMoteur: "Trois Cylindres 4T",
                cylindree: "700 cc",
                puissance: "95 cv",
                coupleMaximal: "76 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "200 km/h",
                alimentation: "Injection électronique",
                freinage: "Double disque J.Juan",
            }
        },
    ],
    YADEA: [
        {
            name: "SCOOTER ELECTRIQUE YADEA - E8S - 3000W ",
            images: ["./img/models/yadea/scooter-electrique-yadea-e8s-3000w-bleu/scooter-electrique-yadea-e8s-3000w-bleu.jpg","./img/models/yadea/scooter-electrique-yadea-e8s-3000w-bleu/scooter-electrique-yadea-e8s-3000w-blanc.jpg"],
            price: "5,999 TND",
            specs: {
                typeMoteur: "Moteur électrique brushless TTFAR",
                cylindree: "",
                puissance: "3000 W",
                coupleMaximal: "140 Nm",
                refroidissement: "A air",
                vitesseMaximale: "60 km/h",
                alimentation: "Batterie Graphène 72V 38Ah",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "YADEA EPOC 2000w ",
            images: ["./img/models/yadea/yadea-epoc-2000w/1.jpg","./img/models/yadea/yadea-epoc-2000w/2.jpg","./img/models/yadea/yadea-epoc-2000w/3.jpg","./img/models/yadea/yadea-epoc-2000w/4.jpg"],
            price: "6,499 TND",
            specs: {
                typeMoteur: "Moteur électrique in-wheel hub,",
                cylindree: "",
                puissance: "2000 W",
                coupleMaximal: "150 Nm",
                refroidissement: "A air",
                vitesseMaximale: "70 km/h",
                alimentation: "Batterie Graphène TTFAR 72V 38Ah",
                freinage: "Disque/Disque",
            }
        },
    ],
    SANYA: [
        {
            name: "Sanya SY 125-9F",
            image: "./img/models/sanya/sanya-sy-125-9f/sanya-sy-125-9f.jpg",
            price: "5,849 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "10 cv",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
            },
            
        },
    ],
    POWER: [
        {
            name: "POWER SPRING ST - 125cc - GRIS /ORANGE ( CARTE GRISE )",
            image: "./img/models/power/power-spring-st-125cc-gris-orange/power-spring-st-125cc-gris-orange.jpg",
            price: "4,199 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "105 km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
            }
        },
    ],
    QJMOTOR: [
        {
            name: "SUPERLIGHT QJMOTOR CBS 125cc - NOIR",
            image: "./img/models/qjmotor/qjmotor-zimota-superlight-qjmotor-cbs-noir/qjmotor-zimota-superlight-qjmotor-cbs-noir.jpg",
            price: "7,499 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "10,6 cv",
                coupleMaximal: "8,9 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                alimentation: "",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Motocycle QJ MOTOR SRK 125 S 125CC Injection NOIR",
            image: "./img/models/qjmotor/qjmotor-zimota-srk-125-s-noir-injection/qjmotor-zimota-srk-125-s-noir-injection.jpg",
            price: "10,999 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "15 ch",
                coupleMaximal: "12 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "110 km/h",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque ABS",
            }
        },
    ],
    WOLF: [
        {
            name: "Électrique WOLF VERO 1000 Watts - Vert Clair",
            image: "./img/models/wolf/wolf-vero-vert-clair/wolf-vero-vert-clair.jpg",
            price: "4,199 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1000 W",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "40 km/h",
                alimentation: "Batterie plomb 60V 20Ah",
                freinage: "Tambour / Tambour",
            }
        },
        {
            name: "Scooter Électrique WOLF 1000 Watts Sans Coffre - Noir",
            image: "./img/models/wolf/wolf-vero-noir/wolf-vero-noir.jpg",
            price: "3,799 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1000 W",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "40 km/h",
                alimentation: "Batterie plomb 60V 20Ah",
                freinage: "Tambour / Tambour",
            }
        },
        {
            name: "Scooter Électrique WOLF 1000 Watts Avec Coffre - Gris",
            image: "./img/models/wolf/wolf-vero-gris-coffre/wolf-vero-gris-coffre.jpg",
            price: "3,999 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1000 W",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "40 km/h",
                alimentation: "Batterie plomb 60V 20Ah",
                freinage: "Tambour / Tambour",
            }
        },
    ],
    MS: [
        {
            name: "SCOOTER FIRST COSTA 49CC - GRIS",
            image: "./img/models/ms/ms-first-costa-gris/ms-first-costa-gris.jpg",
            price: "3,699 TND",
            specs: {
                typeMoteur: "Monocilyndre, 2 temps",
                cylindree: "50 cc",
                puissance: "",
                coupleMaximal: "4 Nm",
                refroidissement: "A air",
                vitesseMaximale: "75 Km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
    ],
    POWER_KIM: [
        {
            name: "SCOOTER PISTA HR+ 110CC - NOIR/CARBON ( CARTE GRISE)",
            image: "./img/models/powerkim/power-kim-scooter-pista-hr-noir-carbone/power-kim-scooter-pista-hr-noir-carbone.jpg",
            price: "4,799 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "110 cc",
                puissance: "5,3 kW",
                coupleMaximal: "6,8 Nm",
                refroidissement: "A air",
                vitesseMaximale: "90 km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
    ],
    KAYCO: [
        {
            name: "Young Graduates (B2A) One Charge = 70 km",
            image: "./img/models/kayco/kayco/kayco.jpg",
            price: "4,500 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "",
                puissance: "4 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 Km/h",
                alimentation: "",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Freelancers (B2B) One Charge = 120 km",
            image: "./img/models/kayco/kayco-noir/kayco-noir.jpg",
            price: "5,900 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "",
                puissance: "4 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 Km/h",
                alimentation: "",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Delivery Professionals (B2C) One Charge = 240 km",
            image: "./img/models/kayco/kayco-rouge/kayco-rouge.jpg",
            price: "7,200 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "",
                puissance: "4 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 Km/h",
                alimentation: "",
                freinage: "Disque/Tambour",
            }
        },
    ],
    GOLD_MOTORS: [
        {
            name: "Gold Motors R9",
            image: "./img/models/goldmotors/gold-motors-R9-bleu/gold-motors-R9-bleu.jpg",
            price: "5,199 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "6,5 Kw",
                coupleMaximal: "9,5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "85 Kmh",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Moto Gold Motocycle | Cylindré 124 CC – Compteur Digital",
            image: "./img/models/goldmotors/gold-motors-124cc-compteur-digital/gold-motors-124cc-compteur-digital.jpg",
            price: "3,269 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "6,5 Kw",
                coupleMaximal: "6,5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "110 Km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
    ],
    XTF: [
        {
            name: "Moto à Essence XTF DRAGON 110 CM³ Monocylindre - Noir",
            image: "./img/models/xtf/xtf-dragon-110-noir/xtf-dragon-110-noir.jpg",
            price: "3,499 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "110 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "90 km/h",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
        {
            name: "Scooter à Essence XTF Coccinelle 49cc",
            images: ["./img/models/xtf/XTF-Coccinelle-49cc/XTF-Coccinelle-49cc-1.jpg","./img/models/xtf/XTF-Coccinelle-49cc/XTF-Coccinelle-49cc-2.jpg","./img/models/xtf/XTF-Coccinelle-49cc/XTF-Coccinelle-49cc-3.jpg","./img/models/xtf/XTF-Coccinelle-49cc/XTF-Coccinelle-49cc-4.jpg"],
            price: "3,999 TND",
            specs: {
                typeMoteur: "monocylindre 2 temps",
                cylindree: "49 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "",
                alimentation: "",
                freinage: "Disque / Tambour",
            }
        },
    ],
    FTM: [
        {
            name: "Cyclomoteur Jialing Future STAR 110CC - Rouge",
            image: "./img/models/ftm/ftm-jialing-future-star-110cc-rouge/ftm-jialing-future-star-110cc-rouge.jpg",
            price: "3,399 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "110 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Moto Cross Korak Noir",
            image: "./img/models/ftm/ftm-korak-noir/ftm-korak-noir.jpg",
            price: "3,499 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "110 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
    ],
    LVNENG: [
        {
            name: "Scooter Électrique LVNENG LX05 - Vert",
            image: "./img/models/lvneng/lvneng-lx05-49cc-vert/lvneng-lx05-49cc-vert.jpg",
            price: "5,690 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "",
                puissance: "2 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 Km/h",
                alimentation: "",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "SCOOTER ELECTRIQUE LVNENG NCS GENUIS - BEIGE ET MARRON",
            image: "./img/models/lvneng/lvneng-ncs-genius-beige-marron/lvneng-ncs-genius-beige-marron.jpg",
            price: "7,300 TND",
            specs: {
                typeMoteur: "Electrique 60V",
                cylindree: "",
                puissance: "2 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 Km/h",
                alimentation: "",
                freinage: "Double Disque/Double Disque",
            }
        },
        {
            name: "Scooter Électrique LVNENG LX08",
            images: ["./img/models/lvneng/lvneng-lx08/1.jpg", "./img/models/lvneng/lvneng-lx08/2.jpg", "./img/models/lvneng/lvneng-lx08/3.jpg"],
            price: "6,290 TND",
            specs: {
                typeMoteur: "Electrique 60V",
                cylindree: "49cc ",
                puissance: "2030 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 Km/h",
                alimentation: "",
                freinage: "Disque/Disque",
            }
        },
    ],
    E_RIDER: [
        {
            name: "Scooter Électrique E-RIDER E-CLASSIC 1200 Watts - Rouge",
            image: "./img/models/erider/e-classic-1200-watts/scooter-_lectrique-e-rider-e-classic-1200-watts---rouge.jpg",
            price: "5,199 TND",
            specs: {
                typeMoteur: "Electrique, 72 V",
                cylindree: "1,2 Kw",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 Km/h",
                alimentation: "",
                freinage: "",
            }
        },
        {
            name: "Scooter Électrique E-RIDER E-TECH 1200 Watts - Bleu",
            image: "./img/models/erider/e-tech-1200-watts/scooter-_lectrique-e-rider-e-tech-1200-watts---bleu.jpg",
            price: "4,179 TND",
            specs: {
                typeMoteur: "Electrique, 72 V",
                cylindree: "",
                puissance: "1,2 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "59 Km/h",
                alimentation: "",
                freinage: "",
            }
        },
        {
            name: "Scooter Electrique E-Rider E-Power 1200W Rouge",
            image: "./img/models/erider/e-power-1200w/scooter-electrique-e-rider-e-power-1200w-rouge.jpg",
            price: "4,849 TND",
            specs: {
                typeMoteur: "Electrique, 72 V",
                cylindree: "",
                puissance: "1,2 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 Km/h",
                alimentation: "",
                freinage: "",
            }
        },
        {
            name: "Scooter Electrique E-Rider E-eco 1000W Blanc",
            image: "./img/models/erider/e-eco-1000w-blanc/scooter-electrique-e-rider-e-eco-1000w-blanc.jpg",
            price: "3,679 TND",
            specs: {
                typeMoteur: "Electrique, 60 V",
                cylindree: "",
                puissance: "1 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "50 Km/h",
                alimentation: "",
                freinage: "",
            }
        },
    ],
    LIFAN: [
        {
            name: "Motocycle LIFAN Glow 100 CC | LF110.3S - Noir",
            image: "./img/models/lifan/LIFAN-Motocycle-Glow-100S-LF110-3S/LIFAN-Motocycle-Glow-100S-LF110-3S.jpg",
            price: "3,859 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "100 cc",
                puissance: "6 Kw",
                coupleMaximal: "7 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
    ],
    WATTGO: [
        {
            name: "Scooter Électrique WATTGO WG9900 500W - Beige",
            image: "./img/models/wattgo/scooter-electrique-wattgo-wg9900-500w-beige-hjnkjsd/scooter-electrique-wattgo-wg9900-500w-beige-hjnkjsd.jpg",
            price: "2,199 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "500 W",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "40 km/h",
                alimentation: "Batterie plomb 48V 20Ah",
                freinage: "Tambour / Tambour",
            }
        },
        {
            name: "Scooter Électrique Wattgo Wg017 1000W",
            images: ["./img/models/wattgo/Wattgo-Wg017/1.jpg","./img/models/wattgo/Wattgo-Wg017/2.jpg"],
            price: "3,575 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1000 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "50 km/h",
                alimentation: "Lithium 20 Ah",
                freinage: "Disque / Disque",
            }
        },
        {
            name: "Scooter Électrique Wattgo Wg016 1000W",
            images: ["./img/models/wattgo/Wattgo-Wg016/1.jpg","./img/models/wattgo/Wattgo-Wg016/2.jpg","./img/models/wattgo/Wattgo-Wg016/3.jpg"],
            price: "3,299 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1000 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "50 km/h",
                alimentation: "Lithium 20 Ah",
                freinage: "Disque / Disque",
            }
        },
        {
            name: "Scooter Électrique Wattgo Wgoo2 350W",
            images: ["./img/models/wattgo/Wattgo-Wgoo/1.jpg","./img/models/wattgo/Wattgo-Wgoo/2.jpg","./img/models/wattgo/Wattgo-Wgoo/3.jpg"],
            price: "2,098 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "350 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "35 km/h",
                alimentation: "Lithium 25 Ah",
                freinage: "Tambour / Tambour",
            }
        },
    ],
    E_FLASH: [
        {
            name: "Scooter Électrique E-FLASH 2000 Watts - Blanc&Rouge",
            image: "./img/models/eflash/2000-watts-blanc/scooter-electrique-e-flash-2000-watts-blanc-rouge-n.jpg",
            price: "8,299 TND",
            specs: {
                typeMoteur: "Electrique, 72 V",
                cylindree: "2 Kw",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "70 Km/h",
                alimentation: "",
                freinage: "",
            }
        },
    ],
    LETBE: [
        {
            name: "LETBE NEON 125",
            images: ["./img/models/letbe/LETBE-NEON-125/moora1.jpg","./img/models/letbe/LETBE-NEON-125/moora2.jpg","./img/models/letbe/LETBE-NEON-125/moora3.jpg","./img/models/letbe/LETBE-NEON-125/moora4.jpg"],
            price: "5,900 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps,",
                cylindree: "125 cc",
                puissance: "8,5 ch",
                coupleMaximal: "9,4 Nm",
                refroidissement: "Air",
                vitesseMaximale: "",
                alimentation: "Injection électronique Bosch",
                freinage: "Disque/Disque ABS",
            }
        },
    ],
    ECORIDE: [
        {
            name: "Scooter Électrique ECORIDE ZEN 600 Watts ",
            images: ["./img/models/ecoride/ZEN-600-Watts/1.jpg","./img/models/ecoride/ZEN-600-Watts/2.jpg","./img/models/ecoride/ZEN-600-Watts/3.jpg","./img/models/ecoride/ZEN-600-Watts/4.jpg"],
            price: "1,999 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "",
                puissance: "600 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "35 km",
                alimentation: "48V 20Ah",
                freinage: "",
            }
        },
        {
            name: "Scooter Électrique ECORIDE ALPHA-ROUGE 1000 Watts ",
            images: ["./img/models/ecoride/ALPHA-ROUGE-1000/1.jpg","./img/models/ecoride/ALPHA-ROUGE-1000/2.jpg"],
            price: "2,899 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "",
                puissance: "1000 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 km",
                alimentation: "60V Batterie en Acid",
                freinage: "",
            }
        },
    ],
    GSM: [
        {
            name: "Scooter GSM BWX 125 cc – Noir Brillant – BWX-125-BK ",
            images: ["./img/models/gsm/GSM-BWX-125-cc/gsm-bwx-125-cc-1.png","./img/models/gsm/GSM-BWX-125-cc/gsm-bwx-125-cc-2.webp","./img/models/gsm/GSM-BWX-125-cc/gsm-bwx-125-cc-3.webp","./img/models/gsm/GSM-BWX-125-cc/gsm-bwx-125-cc-4.webp"],
            price: "4,999 TND",
            specs: {
                typeMoteur: "monocylindre 4 temps",
                cylindree: "124.6 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "90 km",
                alimentation: "Elèctrique CDI",
                freinage: "Disques / Disques",
            }
        },

    ],
    CITYBIKE: [
        {
            name: "Scooter Électrique City Bike 2000W - Gris Nardo ",
            images: ["./img/models/citybike/City-Bike-50CC-2000W/1.jpg","./img/models/citybike/City-Bike-50CC-2000W/2.jpg"],
            price: "5,299 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "50 cc",
                puissance: "2000 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 km",
                alimentation: "Lithium-Ion 60V 26Ah",
                freinage: "Disques Hydraulique",
            }
        },
        {
            name: "Scooter Électrique City Bike 4000W - Gris Nardo ",
            images: ["./img/models/citybike/City-Bike-125CC-4000W/1.jpg","./img/models/citybike/City-Bike-125CC-4000W/2.jpg"],
            price: "7,499 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "125 cc",
                puissance: "4000 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "75 km/h",
                alimentation: "Lithium-Ion 72V 40Ah",
                freinage: "Disques Hydraulique",
            }
        },
        {
            name: "Scooter Électrique City Bike 3000W ",
            images: ["./img/models/citybike/City-Bike-50CC-3000W/1.jpg","./img/models/citybike/City-Bike-50CC-3000W/2.jpg","./img/models/citybike/City-Bike-50CC-3000W/3.jpg","./img/models/citybike/City-Bike-50CC-3000W/4.jpg"],
            price: "6,899 TND",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "50 cc",
                puissance: "3000 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 km/h",
                alimentation: "Lithium-Ion 60V 23.4 Ah",
                freinage: "Disques Hydraulique",
            }
        },
    ],
    AIMA: [
        {
            name: "Scooter scooter AIMA Q5  ",
            images: ["./img/models/aima/aima-q5/aima-q5-1.jpg","./img/models/aima/aima-q5/aima-q5-2.jpg","./img/models/aima/aima-q5/aima-q5-3.jpg","./img/models/aima/aima-q5/aima-q5-4.jpg"],
            price: "",
            specs: {
                typeMoteur: "Electrique",
                cylindree: "",
                puissance: "800 watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 km/h",
                alimentation: "",
                freinage: "Disques / Disques",
            }
        },

    ],
    PHANTOM: [
        {
            name: "Scooter Phantom Z1 125",
            images: ["./img/models/phantom/phantom-z1/phantom-z1-1.jpg","./img/models/phantom/phantom-z1/phantom-z1-2.jpg","./img/models/phantom/phantom-z1/phantom-z1-3.jpg","./img/models/phantom/phantom-z1/phantom-z1-4.jpg"],
            price: "",
            specs: {
                typeMoteur: "Monocylindre 4 temps,",
                cylindree: "125 cm³,",
                puissance: "8-10 ch",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour CBS",
            }
        },

    ],
};

// Données pour les motos d'occasion - Tableau simple sans division par marques
const occasionModelsData = [
       {
        marque: "Ducati",
        name: "Ducati 1100 Panigale V4 S 🇹🇳 modèle 2025 🇹🇳 00KM - chez JETMOTO 🇹🇳 Tunis 🇹🇳 tel-watsap 53685927-26711555",
        images: ["./img/occasion/12/1.jpg", "./img/occasion/12/2.jpg", "./img/occasion/12/3.jpg", "./img/occasion/12/4.jpg"],
        price: "",
        specs: {
            kilometrage: "0 km",
            typeMoteur: "V4 Desmosedici Stradale 4 temps,",
            cylindree: "1103 cm³",
            puissance: "220 ch (162 kW)",
            coupleMaximal: "123 Nm",
            refroidissement: "Liquide",
            vitesseMaximale: "300 km/h",
            alimentation: "Injection électronique",
            freinage: "Double disque AV / Disque AR Brembo Hypure"
        }
    },
       {
        marque: "KAWASAKI",
        name: "Kawasaki Z900-ABS-00km- modèle 10.2025🇹🇳 chez JETMOTO 🇹🇳 tel 53685927-267115557",
        images: ["./img/occasion/11/1.jpg", "./img/occasion/11/2.jpg", "./img/occasion/11/3.jpg", "./img/occasion/11/4.jpg"],
        price: "",
        specs: {
            kilometrage: "0 km",
            typeMoteur: "4 cylindres en ligne 4 temps",
            cylindree: "948 cm³",
            puissance: "125 ch (92 kW)",
            coupleMaximal: "99 Nm",
            refroidissement: "Liquide",
            vitesseMaximale: "240 km/h",
            alimentation: "Injection électronique",
            freinage: "Double disque AV / Disque AR ABS"
        }
    },
       {
        marque: "BMW",
        name: "BMW-S1000RR-M 🇹🇳 2026-00km - Jet Moto tel 26711555-53685927",
        images: ["./img/occasion/9/BMW-S1000RR-M-1.png", "./img/occasion/9/BMW-S1000RR-M-2.jpg", "./img/occasion/9/BMW-S1000RR-M-3.jpg", "./img/occasion/9/BMW-S1000RR-M-4.jpg"],
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
        images: ["./img/occasion/10/BMW-GS1300-Adventure-Triple-Black-2.jpg", "./img/occasion/10/BMW-GS1300-Adventure-Triple-Black-1.jpg", "./img/occasion/10/BMW-GS1300-Adventure-Triple-Black-3.jpg", "./img/occasion/10/BMW-GS1300-Adventure-Triple-Black-4.jpg"],
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
    {
        marque: "YAMAHA",
        name: "YAMAHA  T-MAX 562 Tech-Max - Jet Moto tel 24350274",
        images: ["./img/occasion/1/T-MAX-562-Tech-Max.png", "./img/occasion/1/T-MAX-562-Tech-Max-5.jpg", "./img/occasion/1/T-MAX-562-Tech-Max-6.jpg", "./img/occasion/1/T-MAX-562-Tech-Max-7.jpg"],
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
        images: ["./img/occasion/3/YAMAHA-V-max-1700-modele-2009-1.png", "./img/occasion/3/YAMAHA-V-max-1700-modele-2009-2.jpg", "./img/occasion/3/YAMAHA-V-max-1700-modele-2009-3.jpg", "./img/occasion/3/YAMAHA-V-max-1700-modele-2009-4.jpg"],
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
        images: ["./img/occasion/4/HONDA-CBX1000-mod-le-1982-2.jpg", "./img/occasion/4/HONDA-CBX1000-mod-le-1982-4.jpg", "./img/occasion/4/HONDA-CBX1000-mod-le-1982-3.jpg", "./img/occasion/4/HONDA-CBX1000-mod-le-1982-1.jpg"],
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
        images: ["./img/occasion/5/Kawasaki-KLR-650-modèle-1992-4.jpg", "./img/occasion/5/Kawasaki-KLR-650-modèle-1992-2.jpg", "./img/occasion/5/Kawasaki-KLR-650-modèle-1992-3.jpg", "./img/occasion/5/Kawasaki-KLR-650-modèle-1992-1.jpg"],
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