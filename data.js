// data.js - Données centralisées pour le site
const brands = [
   { name: "Peugeot", logo: "./img/logos-actumoto/peugeot.png?v=2" },
    { name: "PIAGGIO", logo: "./img/logos-actumoto/piaggio.png?v=2" },
    { name: "CFMOTO", logo: "./img/logos-actumoto/cfmoto.png?v=2" },
    { name: "APRILIA", logo: "./img/logos-actumoto/aprilia.png?v=2" },   
    { name: "ZIMOTA_MOTOR", logo: "./img/logos-actumoto/zimota.png?v=2" },
    { name: "QJMOTOR", logo: "./img/logos-actumoto/qjmotors.png?v=2" },
     { name: "SLC", logo: "./img/logos-actumoto/slc.png?v=2" },   
    { name: "SYM", logo: "./img/logos-actumoto/sym.png?v=2" },
    { name: "VOGE", logo: "./img/logos-actumoto/voge.png?v=2" },
    { name: "FORZA_MOTOR_SPORT", logo: "./img/logos-actumoto/forza.png?v=2" },
   { name: "SUZUKI", logo: "./img/logos-actumoto/suzuki.png?v=2" },
    { name: "SENKE", logo: "./img/logos-actumoto/senke.png?v=2" },
     { name: "BBM", logo: "./img/logos-actumoto/bbm.png?v=2" },
    { name: "KIM", logo: "./img/logos-actumoto/kim.png?v=2" },    
    { name: "DAYUN", logo: "./img/logos-actumoto/dayun.png?v=2" },   
    { name: "ZONTES", logo: "./img/logos-actumoto/zontes.png?v=2" },
    { name: "LM", logo: "./img/logos-actumoto/lm.png?v=2" },
     
    { name: "KAYCO", logo: "./img/logos-actumoto/kayco.png?v=2" },
    { name: "UNISCOOT", logo: "./img/logos-actumoto/uniscoot.png?v=2" },
    { name: "KYMCO", logo: "./img/logos-actumoto/kymco.png?v=2" },
     { name: "NOVAGO", logo: "./img/logos-actumoto/novago.png?v=2" },
    { name: "FTM", logo: "./img/logos-actumoto/ftm.png?v=2" },
    { name: "LIFAN", logo: "./img/logos-actumoto/logo-lifan-final.png?v=2" },
    { name: "SANYA", logo: "./img/logos-actumoto/sanya.png?v=2" },
     { name: "HAOJIN", logo: "./img/logos-actumoto/haojin.png?v=2" },
    
    { name: "AIMA", logo: "./img/logos-actumoto/aima.png?v=2" },
    { name: "TAILG", logo: "./img/logos-actumoto/tailg.png?v=2" },
    { name: "GSM", logo: "./img/logos-actumoto/gsm.png?v=2" },
      { name: "SMT", logo: "./img/logos-actumoto/smt.png?v=2" },
     
    { name: "PHANTOM", logo: "./img/logos-actumoto/phantom.png?v=2" },
    { name: "E_RIDER", logo: "./img/logos-actumoto/erider.png?v=2" },
    
     { name: "YADEA", logo: "./img/logos-actumoto/yadea.png?v=2" },
    { name: "WATTGO", logo: "./img/logos-actumoto/logo-wattgo-final.png?v=2" },
    { name: "LETBE", logo: "./img/logos-actumoto/letbe.png?v=2" },
    { name: "ECORIDE", logo: "./img/logos-actumoto/ecoride.png?v=2" },
    { name: "VIGO", logo: "./img/logos-actumoto/vigo.png?v=2" },    
    { name: "GOLD_MOTORS", logo: "./img/logos-actumoto/goldstar.png?v=2" },
    { name: "XTF", logo: "./img/logos-actumoto/xtf.png?v=2" },
    { name: "LVNENG", logo: "./img/logos-actumoto/lvneng.png?v=2" },
    
    
    { name: "MOTOLUX", logo: "./img/logos-actumoto/motolux.png?v=2" },
    { name: "FIRST", logo: "./img/logos-actumoto/first.png?v=2" }, 
     { name: "MISTRAL", logo: "./img/logos-actumoto/mistral.png?v=2" },
    { name: "WOLF", logo: "./img/logos-actumoto/wolf.png?v=2" },
    { name: "E_FLASH", logo: "./img/logos-actumoto/logo-eflash-final.png?v=2" },
    { name: "CITYBIKE", logo: "./img/logos-actumoto/citybike.png?v=2" },
   
    { name: "RAPSEV", logo: "./img/logos-actumoto/rapsev.png?v=2" },
    { name: "KEREN", logo: "./img/logos-actumoto/keren.png?v=2" },
    { name: "CFORCE", logo: "./img/logos-actumoto/cforce.png?v=2" },   
    
    
];

const modelsData = {
    Peugeot: [
        
        {
            name: "Django 125",
            images: ["./img/models/peugeot/peugeot-django-125/peugeot-django-125-1.jpeg", "./img/models/peugeot/peugeot-django-125/peugeot-django-125-2.jpeg", "./img/models/peugeot/peugeot-django-125/peugeot-django-125-3.jpeg","./img/models/peugeot/peugeot-django-125/peugeot-django-125-4.jpeg"],
            price: "10,900 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps,",
                cylindree: "125 cm³,",
                puissance: "10,6 ch",
                coupleMaximal: "9,3 Nm",
                refroidissement: "Air",
                vitesseMaximale: "100 km/h",
                autonomie: "",
                alimentation: "Injection électronique,",
                freinage: "Disque / Disque",
            }
        },
        {
            name: "Tweet 125 + pare-brise + casque + top case ",
            images: ["./img/models/peugeot/peugeot-tweet-125/peugeot-tweet-125-1.jpeg","./img/models/peugeot/peugeot-tweet-125/peugeot-tweet-125.png", "./img/models/peugeot/peugeot-tweet-125/peugeot-tweet-125-2.jpeg", "./img/models/peugeot/peugeot-tweet-125/peugeot-tweet-125-3.jpeg"],
            price: "9,900 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: "125 cc",
                puissance: "11,4 ch",
                coupleMaximal: "10,3 Nm",
                refroidissement: "Air",
                vitesseMaximale: "105 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque / Disque",
            }
        },
        {
            name: "PM 01 125",
            images: ["./img/models/peugeot/peugeot-pm-01-125/1.png", "./img/models/peugeot/peugeot-pm-01-125/peugeot-pm-01-125-2.jpeg", "./img/models/peugeot/peugeot-pm-01-125/peugeot-pm-01-125-3.jpeg","./img/models/peugeot/peugeot-pm-01-125/peugeot-pm-01-125-4.jpeg"],
            price: "11,500 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps,",
                cylindree: "125 cc",
                puissance: "13,9 ch",
                coupleMaximal: "11 Nm",
                refroidissement: "Liquide,",
                vitesseMaximale: "105 km/h",
                autonomie: "",
                alimentation: "Injection électronique,",
                freinage: "Disque / Disque ABS",
            }
        },
        {
            name: "Pulsion 125 i ABS",
            images: ["./img/models/peugeot/peugeot-pulsion-125/peugeot-pulsion-125-1.png", "./img/models/peugeot/peugeot-pulsion-125/peugeot-pulsion-125-2.jpeg", "./img/models/peugeot/peugeot-pulsion-125/peugeot-pulsion-125-3.jpeg","./img/models/peugeot/peugeot-pulsion-125/peugeot-pulsion-125-4.jpeg"],
            price: "12,900 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "13,2 ch",
                coupleMaximal: "12 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "115 km/h",
                autonomie: "",
                alimentation: "Injection Électronique",
                freinage: "Disque /Disque ABS",
            }
        },
      
        {
            name: "XP 400",
            images: ["./img/models/peugeot/peugeot-xp-400/peugeot-xp-400-1.jpeg", "./img/models/peugeot/peugeot-xp-400/peugeot-xp-400-2.jpeg", "./img/models/peugeot/peugeot-xp-400/peugeot-xp-400-3.jpeg","./img/models/peugeot/peugeot-xp-400/peugeot-xp-400-4.jpeg"],
            price: "42,900 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: "400 cc",
                puissance: "36,7 ch ",
                coupleMaximal: "38,1 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "137 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Double disque / Disque AR ABS",
            }
        },
          {
            name: "MÉTROPOLIS 400",
            images: ["./img/models/peugeot/peugeot-metropolis-400/peugeot-metropolis-1.jpeg", "./img/models/peugeot/peugeot-metropolis-400/peugeot-metropolis-2.jpeg", "./img/models/peugeot/peugeot-metropolis-400/peugeot-metropolis-3.jpeg","./img/models/peugeot/peugeot-metropolis-400/peugeot-metropolis-4.jpeg"],
            price: "59,000 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps,",
                cylindree: "400 cc",
                puissance: "35,6 ch",
                coupleMaximal: "38,1 Nm",
                refroidissement: "Liquide,",
                vitesseMaximale: "135 km/h",
                autonomie: "",
                alimentation: "Injection électronique,",
                freinage: "Double disque/ Disque ABS-CBS",
            }
        },
    ],
    SUZUKI: [
          {
            name: "DR 650",
            images: ["./img/models/suzuki/dr650/dr650-1.jpeg", "./img/models/suzuki/dr650/dr650-2.jpeg", "./img/models/suzuki/dr650/dr650-3.jpeg"],
            price: "En arrivage",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "644 cm³",
                puissance: "39 cv",
                coupleMaximal: "62 Nm",
                refroidissement: "Air/Huile (SACS)",
                vitesseMaximale: "150 km/h",
                autonomie: "",
                alimentation: "Carburateur Mikuni BST40",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "BURGMAN STREET UB125",
            images: ["./img/models/suzuki/suzuki-burgman-street-ub125-blanc/suzuki-burgman-street-ub125-blanc.jpg","./img/models/suzuki/suzuki-burgman-street-ub125-blanc/suzuki-burgman-street-ub125-gris.jpg","./img/models/suzuki/suzuki-burgman-street-ub125-blanc/suzuki-burgman-street-ub125-noir.jpg"],
            price: "9,450 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "8,6",
                coupleMaximal: "10 Nm",
                refroidissement: "A air",
                vitesseMaximale: "95 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque/Tambour CBS",
            }
        },
    ],
    PIAGGIO: [
        {
            name: "VESPA VXL ",
            images: ["./img/models/piaggio/piaggio-vespa-125/piaggio-vespa-125-1.jpeg", "./img/models/piaggio/piaggio-vespa-125/piaggio-vespa-125-2.jpeg", "./img/models/piaggio/piaggio-vespa-125/piaggio-vespa-125-3.jpeg", "./img/models/piaggio/piaggio-vespa-125/piaggio-vespa-125-4.jpeg"],
            price: "10,900 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "7,1 Kw",
                coupleMaximal: "10,6 Nm",
                refroidissement: "A air",
                vitesseMaximale: "90 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "VESPA GTS",
            images: ["./img/models/piaggio/piaggio-vespa-gts/piaggio-vespa-gts-1.jpeg", "./img/models/piaggio/piaggio-vespa-gts/piaggio-vespa-gts-2.jpeg", "./img/models/piaggio/piaggio-vespa-gts/piaggio-vespa-gts-3.jpeg", "./img/models/piaggio/piaggio-vespa-gts/piaggio-vespa-gts-4.jpeg"],
            price: "29,900 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "10,3 Kw",
                coupleMaximal: "12 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "110 Kmh",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "Liberty S 2025",
            images: ["./img/models/piaggio/liberty-s-125-2025/liberty-s-125-2025-1.jpeg", "./img/models/piaggio/liberty-s-125-2025/liberty-s-125-2025-2.jpeg", "./img/models/piaggio/liberty-s-125-2025/liberty-s-125-2025-3.jpeg"],
            price: "16,500 TND",
            specs: {
                typeMoteur: "i-get 125 cc 4 temps injection",
                cylindree: "125 cc",
                puissance: "8,1 kW (11 ch)",
                coupleMaximal: "10,75 Nm",
                refroidissement: "Air",
                vitesseMaximale: "95 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque AV ABS / Tambour AR",
            }
        },
    ],
    APRILIA: [
         {
            name: "SR GT 125 ",
            images: ["./img/models/aprilia/aprilia-gt/aprilia-1.jpeg", "./img/models/aprilia/aprilia-gt/aprilia-2.jpeg", "./img/models/aprilia/aprilia-gt/aprilia-3.jpeg"],
            price: "En arrivage",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "11 Kw",
                coupleMaximal: "12 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "99 Km/h",
                autonomie: "",
                alimentation: "injection",
                freinage: "Disque/Disque ABS",
            }
            
        },
        {
            name: "SR 125",
            images: ["./img/models/aprilia/aprilia-sr-125/piaggio-aprilia-sr-125-1.jpeg", "./img/models/aprilia/aprilia-sr-125/piaggio-aprilia-sr-125-2.jpeg", "./img/models/aprilia/aprilia-sr-125/piaggio-aprilia-sr-125-3.jpeg", "./img/models/aprilia/aprilia-sr-125/scooter-aprilia-sr125-bleu-55.jpg"],
            price: "8,700 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "7.1 Kw",
                coupleMaximal: "10 Nm",
                refroidissement: "A air",
                vitesseMaximale: "90 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
       
        {
            name: "SR 125 iget",
            images: ["./img/models/aprilia/aprilia-sr-125-moteur-i-get/aprilia-1.png", "./img/models/aprilia/aprilia-sr-125-moteur-i-get/aprilia-2.png"],
            price: "11,900 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps i-get",
                cylindree: "125 cc",
                puissance: "11 Kw",
                coupleMaximal: "12 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "100 Km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque AV / Disque AR CBS",
            }
            
        },
       
        
    ],
    CFMOTO: [
        {
            name: "450MT",
            images: ["./img/models/cfmoto/CFMOTO-450MT/4.webp","./img/models/cfmoto/CFMOTO-450MT/CFMOTO-450MT.jpg","./img/models/cfmoto/CFMOTO-450MT/2.webp","./img/models/cfmoto/CFMOTO-450MT/3.webp"],
            price: "58,200 TND",
            specs: {
                typeMoteur: "Bicylindre, 4 temps",
                cylindree: "450 cc",
                puissance: "32,5 Kw",
                coupleMaximal: "44 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "160 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "800MT-X",
            images: ["./img/models/cfmoto/CF-MOTO-800MT-X/CF-MOTO-800MT-X.jpg","./img/models/cfmoto/CF-MOTO-800MT-X/2.webp","./img/models/cfmoto/CF-MOTO-800MT-X/3.webp","./img/models/cfmoto/CF-MOTO-800MT-X/4.webp"],
            price: "75,000 TND",
            specs: {
                typeMoteur: "Bicylindre",
                cylindree: "800 cc",
                puissance: "70 Kw",
                coupleMaximal: "87 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "200 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Double Disque/Disque ABS",
            }
        },
        {
            name: "800MT Explore",
            images: ["./img/models/cfmoto/CF-MOTO-800MT-Explore/3.webp","./img/models/cfmoto/CF-MOTO-800MT-Explore/CF-MOTO-800MT-Explore.jpg","./img/models/cfmoto/CF-MOTO-800MT-Explore/2.webp","./img/models/cfmoto/CF-MOTO-800MT-Explore/4.webp"],
            price: "78,500 TND",
            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: "800 cc",
                puissance: "67 Kw",
                coupleMaximal: "75 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "200 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Double Disque/Disque ABS",
            }
        },
        {
            name: "700MT",
            images: ["./img/models/cfmoto/CF-MOTO-700MT/3.webp","./img/models/cfmoto/CF-MOTO-700MT/CF-MOTO-700MT.jpg","./img/models/cfmoto/CF-MOTO-700MT/2.webp","./img/models/cfmoto/CF-MOTO-700MT/4.webp"],
            price: "69,800 TND",
            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: "700 cc",
                puissance: "49 Kw",
                coupleMaximal: "60 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "190 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Double Disque/Disque ABS",
            }
        },
        {
            name: "700CL-X SPORT",
            images: ["./img/models/cfmoto/CF-MOTO-700CL-X-SPORT/4.webp","./img/models/cfmoto/CF-MOTO-700CL-X-SPORT/CF-MOTO-700CL-X-SPORT.jpg","./img/models/cfmoto/CF-MOTO-700CL-X-SPORT/2.avif","./img/models/cfmoto/CF-MOTO-700CL-X-SPORT/3.webp"],
            price: "61,400 TND",
            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: "700 cc",
                puissance: "52 Kw",
                coupleMaximal: "68 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "190 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Double Disque/Disque ABS",
            }
        },
        {
            name: "450CL-C",
            images: ["./img/models/cfmoto/CF-MOTO-450CL-C/2.jpg","./img/models/cfmoto/CF-MOTO-450CL-C/CF-MOTO-450CL-C.jpg","./img/models/cfmoto/CF-MOTO-450CL-C/3.jpeg","./img/models/cfmoto/CF-MOTO-450CL-C//4.jpg"],
            price: "57,800 TND",
            specs: {
                typeMoteur: "Bicylindre",
                cylindree: "450 cc",
                puissance: "32,5 Kw",
                coupleMaximal: "42 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "160 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "450CL-C-BOBER",
            images: ["./img/models/cfmoto/CF-MOTO-450CL-C-BOBER/3.webp","./img/models/cfmoto/CF-MOTO-450CL-C-BOBER/CF-MOTO-450CL-C-BOBER.jpg","./img/models/cfmoto/CF-MOTO-450CL-C-BOBER/2.webp","./img/models/cfmoto/CF-MOTO-450CL-C-BOBER/4.webp"],
            price: "59,500 TND",
            specs: {
                typeMoteur: "Bicylindre",
                cylindree: "450 cc",
                puissance: "30 Kw",
                coupleMaximal: "42 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "160 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "125NK",
            images: ["./img/models/cfmoto/CF-MOTO-125NK/CF-MOTO-125NK.jpg","./img/models/cfmoto/CF-MOTO-125NK/2.webp","./img/models/cfmoto/CF-MOTO-125NK/3.webp","./img/models/cfmoto/CF-MOTO-125Nk/4.jpg"],
            price: "17,700 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "11 Kw",
                coupleMaximal: "11 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "110 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "800NK Advanced",
            images: ["./img/models/cfmoto/CF-MOTO-800NK-Advanced/2.jpg","./img/models/cfmoto/CF-MOTO-800NK-Advanced/CF-MOTO-800NK-Advanced.jpg","./img/models/cfmoto/CF-MOTO-800NK-Advanced/3.webp","./img/models/cfmoto/CF-MOTO-800NK-Advanced/4.webp"],
            price: "64,100 TND",
            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: "800 cc",
                puissance: "70 Kw",
                coupleMaximal: "81 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "220 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Double Disque/Disque ABS",
            }
        },
        {
            name: "300NK",
            images: ["./img/models/cfmoto/CF-MOTO-300NK/CF-MOTO-300NK.jpg","./img/models/cfmoto/CF-MOTO-300NK/2.webp","./img/models/cfmoto/CF-MOTO-300NK/3.webp","./img/models/cfmoto/CF-MOTO-300NK/4.webp"],
            price: "34,100 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "300 cc",
                puissance: "20,5 Kw",
                coupleMaximal: "25 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "139 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "675SR-R",
            images: ["./img/models/cfmoto/CF-MOTO-675SR-R/CF-MOTO-675SR-R.jpg","./img/models/cfmoto/CF-MOTO-675SR-R/2.webp","./img/models/cfmoto/CF-MOTO-675SR-R/3.webp"],
            price: "64,900 TND",
            specs: {
                typeMoteur: "3 Cylindre, 4 temps",
                cylindree: "675 cc",
                puissance: "70 Kw",
                coupleMaximal: "70 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "230 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Double Disque/Disque ABS",
            }
        },
        {
            name: "450SR-S",
            images: ["./img/models/cfmoto/CF-MOTO-450SR-S/1.png","./img/models/cfmoto/CF-MOTO-450SR-S/4.webp"],
            price: "54,700 TND",
            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: "450 cc",
                puissance: "35 Kw",
                coupleMaximal: "39 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "180 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "150SC",
            images: ["./img/models/cfmoto/CF-MOTO-150SC/1.jpg", "./img/models/cfmoto/CF-MOTO-150SC/2.jpg", "./img/models/cfmoto/CF-MOTO-150SC/3.jpeg","./img/models/cfmoto/CF-MOTO-150SC/4.jpeg"],
            price: "18,500 TND",
            specs: {
                typeMoteur: "Monocylindre, 2 soupapes",
                cylindree: "150 cc",
                puissance: "10,5 Kw",
                coupleMaximal: "14,2 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "110 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "CX-5E",
            images: ["./img/models/cfmoto/CF-MOTO-CX-5E/2.webp","./img/models/cfmoto/CF-MOTO-CX-5E/CF-MOTO-CX-5E.jpg","./img/models/cfmoto/CF-MOTO-CX-5E/3.webp","./img/models/cfmoto/CF-MOTO-CX-5E/4.webp"],
            price: "10,600 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1,5 Kw",
                coupleMaximal: "7 Nm",
                refroidissement: "",
                vitesseMaximale: "46 Km/h",
                autonomie: "50 Km",
                alimentation: "",
                freinage: "",
            }
        },
    ],
    ZIMOTA_MOTOR: [
         {
            name: "Eway RIDE",
            images: ["./img/models/zimotamotor/zimota-eway-ride-elec/zimota-eway-ride-elec.jpg","./img/models/zimotamotor/zimota-eway-ride-elec/2.jpg","./img/models/zimotamotor/zimota-eway-ride-elec/3.jpg"],
            price: "2,000 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "400 W",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "30 km/h",
                autonomie: "40 Km",
                alimentation: "Batterie 48V 12Ah",
                freinage: "Tambour / Tambour",
            }
        },
        {
            name: "Evo",
            images: ["./img/models/zimotamotor/zimota-evo/zimota-evo.jpg","./img/models/zimotamotor/zimota-evo/2.jpg","./img/models/zimotamotor/zimota-evo/3.jpg"],
            price: "3,900 TND",
            specs: {
                typeMoteur: "Monocylindre 2T",
                cylindree: "50 cc",
                puissance: "5 cv",
                coupleMaximal: "4,2 Nm",
                refroidissement: "A air",
                vitesseMaximale: "45 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
        {
            name: "KEE",
            images: ["./img/models/zimotamotor/zimota-kee/1.jpg", "./img/models/zimotamotor/zimota-kee/2.jpg", "./img/models/zimotamotor/zimota-kee/3.jpg","./img/models/zimotamotor/zimota-kee/4.jpg"],
            price: "3,900 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "110 cc",
                puissance: "5 cv",
                coupleMaximal: "8,3 Nm",
                refroidissement: "A air",
                vitesseMaximale: "85 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
        {
            name: "TAPO",
            images: ["./img/models/zimotamotor/zimota-tapo/zimota-tapo.jpg","./img/models/zimotamotor/zimota-tapo/2.jpg","./img/models/zimotamotor/zimota-tapo/3.jpg","./img/models/zimotamotor/zimota-tapo/4.jpg"],
            price: "3,950 TND",
            specs: {
                typeMoteur: "Monocylindre 2T",
                cylindree: "50 cc",
                puissance: "4 cv",
                coupleMaximal: "4 Nm",
                refroidissement: "A air",
                vitesseMaximale: "45 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
        {
            name: "TARGET",
            images: ["./img/models/zimotamotor/zimota-target/zimota-target.jpg","./img/models/zimotamotor/zimota-target/2.jpg","./img/models/zimotamotor/zimota-target/3.jpg","./img/models/zimotamotor/zimota-target/4.jpg"],
            price: "4,000 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "100 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
        {
            name: "SINUS X",
            images: ["./img/models/zimotamotor/zimota-sinus-x/zimota-sinus-x.jpg","./img/models/zimotamotor/zimota-sinus-x/2.jpg","./img/models/zimotamotor/zimota-sinus-x/3.jpg","./img/models/zimotamotor/zimota-sinus-x/4.jpg"],
            price: "4,500 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "8,5 cv",
                coupleMaximal: "9,5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "95 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque hydr/ Tambour",
            }
        },
     
        {
            name: "TARGET",
            images: ["./img/models/zimotamotor/zimota-target-125-bleu/1.jpg", "./img/models/zimotamotor/zimota-target-125-bleu/2.jpg", "./img/models/zimotamotor/zimota-target-125-bleu/3.jpg","./img/models/zimotamotor/zimota-target-125-bleu/4.jpg"],
            price: "4,000 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
       
        {
            name: "RKS",
            images: ["./img/models/zimotamotor/qjmotor-zimota-rks-qjmotor-noir/1.jpg", "./img/models/zimotamotor/qjmotor-zimota-rks-qjmotor-noir/2.jpg", "./img/models/zimotamotor/qjmotor-zimota-rks-qjmotor-noir/3.jpg","./img/models/zimotamotor/qjmotor-zimota-rks-qjmotor-noir/4.jpg"],
            price: "5,600 TND",
            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: "125 cc",
                puissance: "8,4 cv",
                coupleMaximal: "10 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
        {
            name: "NX",
            images: ["./img/models/zimotamotor/zimota-nx/1.jpg", "./img/models/zimotamotor/zimota-nx/2.jpg", "./img/models/zimotamotor/zimota-nx/3.jpg","./img/models/zimotamotor/zimota-nx/4.jpg"],
            price: "6,800 TND",
            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: "125 cc",
                puissance: "8,4 cv",
                coupleMaximal: "10 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Disque CBS",
            }
        },
        {
            name: "Fly",
            images: ["./img/models/zimotamotor/fly/zimota-fly-1.jpeg", "./img/models/zimotamotor/fly/zimota-fly-2.jpeg", "./img/models/zimotamotor/fly/zimota-fly-3.jpeg","./img/models/zimotamotor/fly/zimota-fly-4.jpeg"],
            price: "3,250 TND",
            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: "80 cc",
                puissance: "5 ch",
                coupleMaximal: "4,5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "60 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
    ],
    SYM: [
        {
            name: "SYMPHONY SR 125",
            images: ["./img/models/sym/sym-symphony-sr-125-cbs-125cc-blanc-noir/3.webp","./img/models/sym/sym-symphony-sr-125-cbs-125cc-blanc-noir/2.webp","./img/models/sym/sym-symphony-sr-125-cbs-125cc-blanc-noir/sym-symphony-sr-125-cbs-125cc-blanc-noir.jpg"],
            price: "6,600 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "8,8 cv",
                coupleMaximal: "10,3 Nm",
                refroidissement: "A air",
                vitesseMaximale: "99 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque CBS",
            }
        },
        {
            name: "SYMPHONY S 125",
            images: ["./img/models/sym/sym-symphony-s-125-blanc/sym-symphony-s-125-blanc.jpg","./img/models/sym/sym-symphony-s-125-blanc/2.jpg"],
            price: "6,600 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance:"",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "95 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "SYMPHONY ST 125 ",
            images: ["./img/models/sym/sym-symphony-st-125-cbs-e5-injection-noir/sym-symphony-st-125-cbs-e5-injection-noir.jpg","./img/models/sym/sym-symphony-st-125-cbs-e5-injection-noir/2.png","./img/models/sym/sym-symphony-st-125-cbs-e5-injection-noir/3.png"],
            price: "8,000 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "95 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque CBS",
            }
        },
        {
            name: "JET 14 125",
            images: ["./img/models/sym/sym-jet-14-125-ac-e5-noir/sym-jet-14-125-ac-e5-noir.jpg","./img/models/sym/sym-jet-14-125-ac-e5-noir/2.png","./img/models/sym/sym-jet-14-125-ac-e5-noir/3.jpg"],
            price: "8,700 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "11,3 cv",
                coupleMaximal: "10,7 Nm",
                refroidissement: "A air",
                vitesseMaximale: "95 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "SYMPHONY ST 200",
            images: ["./img/models/sym/sym-symphony-st-200-abs-e5-200cc-injection-bleu/sym-symphony-st-200-abs-e5-200cc-injection-bleu.jpg","./img/models/sym/sym-symphony-st-200-abs-e5-200cc-injection-bleu/2.jpg","./img/models/sym/sym-symphony-st-200-abs-e5-200cc-injection-bleu/3.webp","./img/models/sym/sym-symphony-st-200-abs-e5-200cc-injection-bleu/4.jpg"],
            price: "15,000 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "200 cc",
                puissance: "12,2 cv",
                coupleMaximal: "12,5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "110 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque ABS",
            }
        },
        {
            name: "JET 4 RX 125",
            images: ["./img/models/sym/sym-jet-4-rx-124-gris/sym-jet-4-rx-124-gris.jpg", "./img/models/sym/sym-jet-4-rx-124-gris/2.jpg", "./img/models/sym/sym-jet-4-rx-124-gris/3.png","./img/models/sym/sym-jet-4-rx-124-gris/4.png"],
            price: "6,200 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "10,2 cv",
                coupleMaximal: "9,2 Nm",
                refroidissement: "A air",
                vitesseMaximale: "95 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque/Tambour CBS",
            }
        },
        {
            name: "FIDDLE II EFI",
            images: ["./img/models/sym/sym-fiddle-ii-efi/sym-fiddle-ii-efi.jpg", "./img/models/sym/sym-fiddle-ii-efi/2.jpg", "./img/models/sym/sym-fiddle-ii-efi/3.jpeg"],
            price: "5,850 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "8 cv",
                coupleMaximal: "8,6 Nm",
                refroidissement: "A air",
                vitesseMaximale: "90 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque/Tambour",
            }
        },
      
        {
            name: "FIDDLE 4",
            images: ["./img/models/sym/fiddle4/1.jpg", "./img/models/sym/fiddle4/2.jpg", "./img/models/sym/fiddle4/3.jpg","./img/models/sym/fiddle4/4.jpg"],
            price: "7,200 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: "125 cm³",
                puissance: "11,7 ch",
                coupleMaximal: "11 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "105 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque ABS",
            }
        },
         {
            name: "Orbit II",
            images: ["./img/models/sym/orbit2/1.jpg", "./img/models/sym/orbit2/2.webp", "./img/models/sym/orbit2/3.jpeg"],
            price: "4,900 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: "125 cm³",
                puissance: "6,5 kW (8,8 ch),",
                coupleMaximal: "8,3 Nm",
                refroidissement: "A air",
                vitesseMaximale: "95 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour CBS",
            }
        },
          {
            name: "ADX 300CC",
            images: ["./img/models/sym/ADX-300CC-injection-ABS/1.jpg", "./img/models/sym/ADX-300CC-injection-ABS/2.jpg", "./img/models/sym/ADX-300CC-injection-ABS/3.jpg","./img/models/sym/ADX-300CC-injection-ABS/4.jpg"],
            price: "25,000 TND",
            specs: {
                typeMoteur: "Monocylindre – 4 T - Injection",
                cylindree: "278 cm3",
                puissance: "19 kW",
                coupleMaximal: "",
                refroidissement: "Liquide",
                vitesseMaximale: "",
                autonomie: "",
                alimentation: "",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "Husky",
            images: ["./img/models/sym/sym-husky/1.webp", "./img/models/sym/sym-husky/2.png", "./img/models/sym/sym-husky/3.jpeg","./img/models/sym/sym-husky/4.jpg"],
            price: "16,000 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps 4 soupapes",
                cylindree: "175 cm³",
                puissance: "14,7 ch (10,8 kW)",
                coupleMaximal: "14,5 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "110 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque ABS",
            }
        },
    ],
    FORZA_MOTOR_SPORT: [
       
        
        {
            name: "Power 107",
            images: ["./img/models/forza/forza-bbm-forza-compteur-digital-107cc-new-noir/2.jpeg","./img/models/forza/forza-bbm-forza-compteur-digital-107cc-new-noir/forza-bbm-forza-compteur-digital-107cc-new-noir.jpg"],
            price: "2,840 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "107 cc",
                puissance: "5,5 Kw",
                coupleMaximal: "7 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Tambour",
            }
        },
        {
            name: "D-MAX",
            images: ["./img/models/forza/forza-slc-d-max-124cc-bleu/2.jpeg","./img/models/forza/forza-slc-d-max-124cc-bleu/forza-slc-d-max-124cc-bleu.jpg"],
            price: "3,050 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "5,5 Kw",
                coupleMaximal: "7 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Tambour",
            }
        },
        {
            name: "Power 125 ",
            images: ["./img/models/forza/forza-power-125cc-digital-gris-2/2.jpeg","./img/models/forza/forza-power-125cc-digital-gris-2/forza-power-125cc-digital-gris-2.jpg"],
            price: "2,900 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "5,5 Kw",
                coupleMaximal: "7 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Tambour",
            }
        },
    ],
    SLC: [
        
       
         {
            name: "TANK 125CC",
            images: ["./img/models/slc/tank/tank1.png","./img/models/slc/tank/3.webp", "./img/models/slc/tank/4.webp"],
            price: "5,200 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps GY6",
                cylindree: "125 cm³",
                puissance: "6 kW",
                coupleMaximal: "8 Nm",
                refroidissement: "A air",
                vitesseMaximale: "80 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disques / Disque",
            }
        },
        {
            name: "AZUR",
            images: ["./img/models/slc/slc-azur-124cc-noir/azur.png","./img/models/slc/slc-azur-124cc-noir/slc-azur-124cc-noir.jpg", "./img/models/slc/slc-azur-124cc-noir/3.jpeg"],
            price: "5,200 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "9 CV",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "CAPPUCINO S",
            images: ["./img/models/slc/Scooter-CAPPUCINO-S-SLC-125-CC-4TEMPS/Scooter-CAPPUCINO-S-SLC-125-CC-4TEMPS.jpg", "./img/models/slc/Scooter-CAPPUCINO-S-SLC-125-CC-4TEMPS/2.jpg", "./img/models/slc/Scooter-CAPPUCINO-S-SLC-125-CC-4TEMPS/3.jpg"],
            price: "5,500 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "9,5 cv",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "90 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
    ],
    SENKE: [
        {
            name: "SK 110",
            images: ["./img/models/senke/senke-sk-110-107cc-rouge/senke-sk-110-107cc-rouge.jpg","./img/models/senke/senke-sk-110-107cc-rouge/2.jpeg","./img/models/senke/senke-sk-110-107cc-rouge/3.jpeg"],
            price: "2,950 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "110 cc",
                puissance: "7 cv",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "85 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "RAPTOR",
            images: ["./img/models/senke/senke-raptor-200cc/senke-raptor-200c-2.jpg", "./img/models/senke/senke-raptor-200cc/senke-raptor-200c-1.png" ],
            price: "9,800 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "199,8 cm³",
                puissance: "16,1 ch",
                coupleMaximal: "11,5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "125 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque AV/AR CBS",
            }
        },
        {
            name: "SENKE 300",
            images: ["./img/models/senke/senke-300-cc/1.jpg", "./img/models/senke/senke-300-cc/2.jpg", "./img/models/senke/senke-300-cc/3.jpg","./img/models/senke/senke-300-cc/4.jpg" ],
            price: "24,000 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "292 cm³",
                puissance: "27,5 ch (20,5 kW)",
                coupleMaximal: "22 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "129 km/h",
                autonomie: "",
                alimentation: "Injection Bosch EFI",
                freinage: "Disque AV/AR ABS",
            }
        },
        {
            name: "SENKE 125",
            images: ["./img/models/senke/senke-125-cc/1.jpg", "./img/models/senke/senke-125-cc/2.jpg", "./img/models/senke/senke-125-cc/3.jpg","./img/models/senke/senke-125-cc/4.jpg" ],
            price: "6,800 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cm³",
                puissance: "11 ch",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "120 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Disque",
            }
        },
    ],
    LM: [
        {
            name: "LM ADV",
            images: ["./img/models/lm/lm-adv-125cc-beige/lm-adv-125cc-beige.jpg","./img/models/lm/lm-adv-125cc-beige/2.jpg","./img/models/lm/lm-adv-125cc-beige/3.jpg"],
            price: "9,950 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "8,3 Kw",
                coupleMaximal: "11,2 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "95 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "LA VITA",
            images: ["./img/models/lm/la-vita-125cc-bleu-orange/2.jpg","./img/models/lm/la-vita-125cc-bleu-orange/la-vita-125cc-bleu-orange.jpg"],
            price: "6,000 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "5 Kw",
                coupleMaximal: "7 Nm",
                refroidissement: "A air",
                vitesseMaximale: "90 Km/h",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Disque/Disque",
            }
        },
    ],
    BBM: [
        {
            name: "FZ MAX 124",
            images: ["./img/models/bbm/bbm-124cc-fz-max-compteur/bbm-124cc-fz-max-compteur-digitale.jpg","./img/models/bbm/bbm-124cc-fz-max-compteur/2.jpg","./img/models/bbm/bbm-124cc-fz-max-compteur/3.jpg","./img/models/bbm/bbm-124cc-fz-max-compteur/4.jpg"],
            price: "2,750 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "5.5 Kw",
                coupleMaximal: "6.5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "110 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "FORMULA",
            images: ["./img/models/bbm/formula/formula3.png","./img/models/bbm/formula/formula4.png","./img/models/bbm/formula/5.jpeg","./img/models/bbm/formula/6.jpeg"],
            price: "5,000 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "10 ch",
                coupleMaximal: "6.5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Double disque AV/AR",
            }
        },
         {
            name: "TREVIS",
            images: ["./img/models/bbm/trevis/3.webp","./img/models/bbm/trevis/1.jpg","./img/models/bbm/trevis/2.webp","./img/models/bbm/trevis/4.webp"],
            price: "4,700 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: " 6,6 kW",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "105 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Disque",
            }
        },
         {
            name: "LONGJIA EASY MAX ",
            images: ["./img/models/bbm/longjia/longjia-easy-max.png","./img/models/bbm/longjia/3.jpeg","./img/models/bbm/longjia/4.jpeg","./img/models/bbm/longjia/2.jpeg"],
            price: "6,000 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: " 7.7 kW (10 cv)",
                coupleMaximal: "8000 tr/min",
                refroidissement: "A air",
                vitesseMaximale: "",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque / Disque",
            }
        },
    ],
    DAYUN: [
        {
            name: "Flora",
            images: ["./img/models/dayun/flora/flora.png", "./img/models/dayun/flora/flora-2.jpeg", "./img/models/dayun/flora/flora-3.jpeg", "./img/models/dayun/flora/flora-4.jpeg"],
            price: "En arrivage",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "7,3 kw",
                coupleMaximal: "8,5 Nm",
                refroidissement: "",
                vitesseMaximale: "105 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "DREAM",
            images: ["./img/models/dayun/dayun-sniper-slc-noir/dream1.png","./img/models/dayun/dayun-sniper-slc-noir/dayun-dream-slc-noir.png"],
            price: "4,500 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "SNIPER",
            images: ["./img/models/dayun/dayun-sniper-slc-blanc/dayun-sniper-slc-blanc.jpg", "./img/models/dayun/dayun-sniper-slc-blanc/2.jpg","./img/models/dayun/dayun-sniper-slc-blanc/3.jpg"],
            price: "5,200 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "6,2 Kw",
                coupleMaximal: "9 Nm",
                refroidissement: "A air",
                vitesseMaximale: "90 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "DY125T",
            images: ["./img/models/dayun/dayun-dy125t-bleu/dayun-dy125t-bleu.jpg", "./img/models/dayun/dayun-dy125t-bleu/2.jpg"],
            price: "4,570 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Kimbo",
            images: ["./img/models/dayun/dayun-dy124-gris/dayun-dy124-gris.jpg", "./img/models/dayun/dayun-dy124-gris/2.jpg"],
            price: "4,260 TND",
            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        
        {
            name: "Sonic",
            images: [ "./img/models/dayun/sonic/1.png","./img/models/dayun/sonic/2.png","./img/models/dayun/sonic/3.png"],
            price: "3,000 TND",
            specs: {
                typeMoteur: "Monocylindre 2 temps",
                cylindree: "49 cm³",
                puissance: "4 ch",
                coupleMaximal: "8,5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "50 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Tambour / Tambour",
            }
        },
    ],
    NOVAGO: [
        {
            name: "Tricycle SWING",
            images: ["./img/models/novago/NOVAGO-TRICITY/2.png","./img/models/novago/novago-swing-bleu/novago-swing-bleu.jpg"],
            price: "6,200 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "2400w",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 Km/h",
                autonomie: "100 Km",
                alimentation: "",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "PIKA",
            images: ["./img/models/novago/novago-pika-blanc-2/2.jpg","./img/models/novago/novago-pika-blanc-2/scooter-Électrique-novago-pika-blanc-2.jpg"],
            price: "3,300 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "800w",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "40 Km/h",
                autonomie: "50 Km",
                alimentation: "",
                freinage: "Double Disque/Disque",
            }
        },
        {
            name: "TIGER 140",
            images: ["./img/models/novago/NOVAGO-TIGER-140/2.jpg", "./img/models/novago/NOVAGO-TIGER-140/1.jpg", "./img/models/novago/NOVAGO-TIGER-140/3.jpg"],
            price: "6,600 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1500W",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 km",
                autonomie: "140 Km",
                alimentation: "2 X Lithium Fer 60 volt 30 AH",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "TIGER 70",
            images: ["./img/models/novago/NOVAGO-TIGER-70/2.jpg", "./img/models/novago/NOVAGO-TIGER-70/3.jpg", "./img/models/novago/NOVAGO-TIGER-70/1.jpg"],
            price: "4,900 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1500W",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 km",
                autonomie: "70 Km",
                alimentation: "Lithium Fer 60 volt 30 AH",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "TRICITY",
            images: ["./img/models/novago/NOVAGO-TRICITY/2.jpg", "./img/models/novago/NOVAGO-TRICITY/3.jpg", "./img/models/novago/NOVAGO-TRICITY/1.jpg","./img/models/novago/NOVAGO-TRICITY/4.jpg"],
            price: "5,300 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "800 W",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "30 km",
                autonomie: "60 Km",
                alimentation: "Lithium Fer 60 volt 30 AH",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "LUNA 70",
            images: ["./img/models/novago/NOVAGO-LUNA-70/2.jpg", "./img/models/novago/NOVAGO-LUNA-70/3.jpg", "./img/models/novago/NOVAGO-LUNA-70/1.jpg","./img/models/novago/NOVAGO-LUNA-70/4.jpg"],
            price: "4,200 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1500W",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "55 km",
                autonomie: "70 Km",
                alimentation: "Lithium Fer 60 volt 30 AH",
                freinage: "Disque/Disque",
            }
        },
    ],
    KYMCO: [
        {
            name: "People S",
            images: ["./img/models/kymco/kymco-people-s-125i-abs/kymco-people-s-125i-abs.jpg","./img/models/kymco/kymco-people-s-125i-abs/2.jfif","./img/models/kymco/kymco-people-s-125i-abs/3.jpg","./img/models/kymco/kymco-people-s-125i-abs/4.png"],
            price: "10,600 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "8,3 Kw",
                coupleMaximal: "10 Nm",
                refroidissement: "A air",
                vitesseMaximale: "",
                autonomie: "",
                alimentation: "injection",
                freinage: "Disque/Tambour ABS",
            }
        },
        {
            name: "Dink R 125 Tunnel",
            images: ["./img/models/kymco/kymco-drink-r-125-tunnel/kymco-drink-r-125-tunnel.jpg","./img/models/kymco/kymco-drink-r-125-tunnel/2.jpg","./img/models/kymco/kymco-drink-r-125-tunnel/3.png","./img/models/kymco/kymco-drink-r-125-tunnel/4.jpeg"],
            price: "11,700 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "8,2 Kw",
                coupleMaximal: "10,6 Nm",
                refroidissement: "A air",
                vitesseMaximale: "",
                autonomie: "",
                alimentation: "Injection",
                freinage: "Disque/Disque",
            }
        },
    ],
    UNISCOOT: [
        {
            name: "TIGER ",
            images: ["./img/models/uniscoot/uniscoot-tiger-125cc-gris/uniscoot-tiger-125cc-gris.jpg", "./img/models/uniscoot/uniscoot-tiger-125cc-gris/2.webp"],
            price: "4,200 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "10 cv",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "140 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "TMAX+",
            images: ["./img/models/uniscoot/uniscoot-tmax-125cc-noir-brillant/uniscoot-tmax-125cc-noir-brillant.jpg","./img/models/uniscoot/uniscoot-tmax-125cc-noir-brillant/2.jpg","./img/models/uniscoot/uniscoot-tmax-125cc-noir-brillant/3.jpg"],
            price: "4,700 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "4,0 Nm",
                refroidissement: "A air",
                vitesseMaximale: "120 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "FX2+ PLUS",
            images: ["./img/models/uniscoot/uniscoot-fx2-plus-125cc-noir-matt/uniscoot-fx2-plus-125cc-noir-matt.jpg","./img/models/uniscoot/uniscoot-fx2-plus-125cc-noir-matt/2.jpeg","./img/models/uniscoot/uniscoot-fx2-plus-125cc-noir-matt/3.jpg"],
            price: "4,800 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "T6 ZONSEN ",
            images: ["./img/models/uniscoot/uniscoot-zt6-zonsen-124cc-noir/uniscoot-zt6-zonsen-124cc-noir.jpg","./img/models/uniscoot/uniscoot-zt6-zonsen-124cc-noir/2.jpg"],
            price: "5,500 TND",
            specs: {
                typeMoteur: "Monocylindre PT125, 4 T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "85 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "Smax Plus",
            images: ["./img/models/uniscoot/uniscoot-smax-plus-cc/1.jpg","./img/models/uniscoot/uniscoot-smax-plus-cc/2.jpg","./img/models/uniscoot/uniscoot-smax-plus-cc/3.jpeg"],
            price: "4,700 TND",
            specs: {
                typeMoteur: "Monocylindre 4 T",
                cylindree: "125 cc",
                puissance: "8-9 ch",
                coupleMaximal: "4 Nm",
                refroidissement: "A air",
                vitesseMaximale: "110 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque AV / Ferrodo AR",
            }
        },
        {
            name: "V8 intro 125",
            images: ["./img/models/uniscoot/v8-intro/v8-intro-uniscoot-1.jpg","./img/models/uniscoot/v8-intro/v8-intro-uniscoot-2.jpg","./img/models/uniscoot/v8-intro/v8-intro-uniscoot-3.jpg"],
            price: "6,000 TND",
            specs: {
                typeMoteur: "Monocylindre 4 T",
                cylindree: "125 cc",
                puissance: "10 ch",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "110 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Disque",
            }
        },
        {
            name: "Wolf",
            images: ["./img/models/uniscoot/wolf/1.jpeg","./img/models/uniscoot/wolf/2.jpeg","./img/models/uniscoot/wolf/3.jpeg"],
            price: "3,600 TND",
            specs: {
                typeMoteur: "Monocylindre 4 T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                autonomie: "",
                alimentation: "",
                freinage: "",
            }
        },
    ],
    ZONTES: [
     
        {
            name: "703 F",
            images: ["./img/models/zontes/zontes-703f-2025/2.webp","./img/models/zontes/zontes-703f-2025/zontes-703f-2025.webp","./img/models/zontes/zontes-703f-2025/3.jpeg","./img/models/zontes/zontes-703f-2025/4.webp"],
            price: "En Arrivage",
            specs: {
                typeMoteur: "Trois Cylindres 4T",
                cylindree: "700 cc",
                puissance: "95 cv",
                coupleMaximal: "76 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "200 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Double disque J.Juan",
            }
        },
           {
            name: "368G ADV",
            images: ["./img/models/zontes/zontes-368g-adv-368cc/zontes-1.jpeg","./img/models/zontes/zontes-368g-adv-368cc/zontes-2.jpeg","./img/models/zontes/zontes-368g-adv-368cc/zontes-3.jpeg","./img/models/zontes/zontes-368g-adv-368cc/zontes-4.jpeg"],
            price: "29,000 TND",
            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: "368 cc",
                puissance: "38 cv",
                coupleMaximal: "40 Nm ",
                refroidissement: "Liquide",
                vitesseMaximale: "140 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disques J.Juan",
            }
        },
    ],
    YADEA: [
        {
            name: "E8S",
            images: ["./img/models/yadea/scooter-electrique-yadea-e8s-3000w-bleu/scooter-electrique-yadea-e8s-3000w-bleu.jpg","./img/models/yadea/scooter-electrique-yadea-e8s-3000w-bleu/scooter-electrique-yadea-e8s-3000w-blanc.jpg"],
            price: "6,000 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "3000 W",
                coupleMaximal: "140 Nm",
                refroidissement: "A air",
                vitesseMaximale: "60 km/h",
                autonomie: "100 Km",
                alimentation: "Batterie Graphène 72V 38Ah",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "EPOC",
            images: ["./img/models/yadea/yadea-epoc-2000w/1.jpg","./img/models/yadea/yadea-epoc-2000w/2.jpg","./img/models/yadea/yadea-epoc-2000w/3.jpg","./img/models/yadea/yadea-epoc-2000w/4.jpg"],
            price: "6,500 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "2000 W",
                coupleMaximal: "150 Nm",
                refroidissement: "A air",
                vitesseMaximale: "70 km/h",
                autonomie: "100 Km",
                alimentation: "Batterie Graphène TTFAR 72V 38Ah",
                freinage: "Disque/Disque",
            }
        },
    ],
    SANYA: [
        {
            name: "SY 125-9F",
            images: ["./img/models/sanya/sanya-sy-125-9f/sanya-sy-125-9f.jpg","./img/models/sanya/sanya-sy-125-9f/2.png","./img/models/sanya/sanya-sy-125-9f/3.png","./img/models/sanya/sanya-sy-125-9f/4.png"],
            price: "5,850 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "10 cv",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
            },
            
        },
        {
            name: "X1000",
            images: ["./img/models/sanya/sanya-x1000/1.jpeg","./img/models/sanya/sanya-x1000/2.jpeg","./img/models/sanya/sanya-x1000/3.png"],
            price: "4,650 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "5,2 kW (7,1 ch)",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque AV et AR + frein à main",
            },
            
        },
        {
            name: "UF",
            images: ["./img/models/sanya/uf-125/2.jpeg","./img/models/sanya/uf-125/3.jpeg","./img/models/sanya/uf-125/1.avif"],
            price: "4,850 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "10 ch",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "105 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Disque",
            },
            
        },
    ],
    KIM: [
        {
            name: "POWER SPRING ST",
            images: ["./img/models/power/power-spring-st-125cc-gris-orange/power-spring-st-125cc-gris-orange.jpg","./img/models/power/power-spring-st-125cc-gris-orange/2.webp"],
            price: "4,200 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "105 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
            }
        },
          {
            name: "PISTA HR+",
            images: ["./img/models/powerkim/power-kim-scooter-pista-hr-noir-carbone/2.webp","./img/models/powerkim/power-kim-scooter-pista-hr-noir-carbone/power-kim-scooter-pista-hr-noir-carbone.jpg"],
            price: "4,800 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "110 cc",
                puissance: "5,3 kW",
                coupleMaximal: "6,8 Nm",
                refroidissement: "A air",
                vitesseMaximale: "90 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
          {
            name: "Blaster",
            images: ["./img/models/kim/blaster-125i/blaster-1.png","./img/models/kim/blaster-125i/blaster-2.png","./img/models/kim/blaster-125i/blaster-125i-1.jpg","./img/models/kim/blaster-125i/blaster-125i-2.jpg"],
            price: "6,900 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "124,8 cm³",
                puissance: "11 ch",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "105 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque/Tambour CBS",
            }
        },
    ],
    QJMOTOR: [
        {
            name: "CBS 125 ",
            images: ["./img/models/qjmotor/qjmotor-zimota-superlight-qjmotor-cbs-noir/qjmotor-zimota-superlight-qjmotor-cbs-noir.jpg","./img/models/qjmotor/qjmotor-zimota-superlight-qjmotor-cbs-noir/2.jpg","./img/models/qjmotor/qjmotor-zimota-superlight-qjmotor-cbs-noir/3.jpg","./img/models/qjmotor/qjmotor-zimota-superlight-qjmotor-cbs-noir/4.jpg"],
            price: "7,500 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "10,6 cv",
                coupleMaximal: "8,9 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                autonomie: "",
                alimentation: "",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "SRK 125 S",
            images: ["./img/models/qjmotor/qjmotor-zimota-srk-125-s-noir-injection/qjmotor-zimota-srk-125-s-noir-injection.jpg","./img/models/qjmotor/qjmotor-zimota-srk-125-s-noir-injection/2.webp"],
            price: "11,000 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "125 cc",
                puissance: "15 ch",
                coupleMaximal: "12 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "110 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disque/Disque ABS",
            }
        },
    ],
    WOLF: [
        {
            name: "VERO",
            images: ["./img/models/wolf/wolf-vero-vert-clair/1.png","./img/models/wolf/wolf-vero-vert-clair/2.png","./img/models/wolf/wolf-vero-vert-clair/3.png","./img/models/wolf/wolf-vero-vert-clair/4.png"],
            price: "4,200 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1000 W",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "40 km/h",
                autonomie: "50 Km",
                alimentation: "Batterie plomb 60V 20Ah",
                freinage: "Tambour / Tambour",
            }
        },
        {
            name: "WOLF 1000",
            images: ["./img/models/wolf/wolf-vero-noir/wolf2.png","./img/models/wolf/wolf-vero-noir/wolf1.png","./img/models/wolf/wolf-vero-noir/3.png"],
            price: "3,800 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1000 W",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "40 km/h",
                autonomie: "50 Km",
                alimentation: "Batterie plomb 60V 20Ah",
                freinage: "Tambour / Tambour",
            }
        },
    
    ],
    FIRST: [
        {
            name: "COSTA",
            images: ["./img/models/ms/ms-first-costa-gris/ms-first-costa-gris.jpg","./img/models/ms/ms-first-costa-gris/2.jpg"],
            price: "3,700 TND",
            specs: {
                typeMoteur: "Monocilyndre, 2 temps",
                cylindree: "50 cc",
                puissance: "",
                coupleMaximal: "4 Nm",
                refroidissement: "A air",
                vitesseMaximale: "75 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Forza MotoStars FIRST MAXIII 3",
            images: ["./img/models/forza/forza-motostars-first-maxiii-3-125cc-digital-gris/2.jpeg","./img/models/forza/forza-motostars-first-maxiii-3-125cc-digital-gris/forza-motostars-first-maxiii-3-125cc-digital-gris.jpg"],
            price: "2,900 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "5,5 Kw",
                coupleMaximal: "7 Nm",
                refroidissement: "A air",
                vitesseMaximale: "90 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Jialing VIPER",
            images: ["./img/models/ms/viper/1.jpeg","./img/models/ms/viper/2.jpeg"],
            price: "3,100 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "120 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
    ],
  
    KAYCO: [
        {
            name: "Young Graduates",
            images: ["./img/models/kayco/kayco/kayco.jpg","./img/models/kayco/kayco/2.webp","./img/models/kayco/kayco/3.jpg","./img/models/kayco/kayco/4webp.webp"],
            price: "4,500 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "4 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 Km/h",
                autonomie: "70 km",
                alimentation: "",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Freelancers",
            images: ["./img/models/kayco/kayco-noir/kayco-noir.jpg","./img/models/kayco/kayco-noir/2.webp","./img/models/kayco/kayco-noir/3.webp","./img/models/kayco/kayco-noir/4.webp"],
            price: "5,900 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "4 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 Km/h",
                autonomie: "120 km",
                alimentation: "",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Delivery Professionals",
            images: ["./img/models/kayco/kayco-rouge/kayco-rouge.jpg","./img/models/kayco/kayco-rouge/2.webp","./img/models/kayco/kayco-rouge/3.webp","./img/models/kayco/kayco-rouge/4.webp"],
            price: "7,200 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "4 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 Km/h",
                autonomie: "240 km",
                alimentation: "",
                freinage: "Disque/Tambour",
            }
        },
    ],
    GOLD_MOTORS: [
        {
            name: "R9",
            images: ["./img/models/goldmotors/gold-motors-R9-bleu/1.png","./img/models/goldmotors/gold-motors-R9-bleu/2.png","./img/models/goldmotors/gold-motors-R9-bleu/3.png","./img/models/goldmotors/gold-motors-R9-bleu/4.jpeg"],
            price: "5,200 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "6,5 Kw",
                coupleMaximal: "9,5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "85 Kmh",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Moto Gold ",
            images: ["./img/models/goldmotors/gold-motors-124cc-compteur-digital/2.png","./img/models/goldmotors/gold-motors-124cc-compteur-digital/3.webp","./img/models/goldmotors/gold-motors-124cc-compteur-digital/4.webp","./img/models/goldmotors/gold-motors-124cc-compteur-digital/5.webp"],
            price: "3,270 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "125 cc",
                puissance: "6,5 Kw",
                coupleMaximal: "6,5 Nm",
                refroidissement: "A air",
                vitesseMaximale: "110 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
    ],
    XTF: [
        {
            name: "DRAGON",
            images: ["./img/models/xtf/xtf-dragon-110-noir/xtf-dragon-110-noir.jpg","./img/models/xtf/xtf-dragon-110-noir/2.jpg","./img/models/xtf/xtf-dragon-110-noir/3.jpg","./img/models/xtf/xtf-dragon-110-noir/4.jpg"],
            price: "3,500 TND",
            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: "110 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "90 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
        {
            name: "Coccinelle",
            images: ["./img/models/xtf/XTF-Coccinelle-49cc/XTF-Coccinelle-49cc-1.jpg","./img/models/xtf/XTF-Coccinelle-49cc/XTF-Coccinelle-49cc-2.jpg","./img/models/xtf/XTF-Coccinelle-49cc/XTF-Coccinelle-49cc-3.jpg","./img/models/xtf/XTF-Coccinelle-49cc/XTF-Coccinelle-49cc-4.jpg"],
            price: "4,000 TND",
            specs: {
                typeMoteur: "monocylindre 2 temps",
                cylindree: "49 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "",
                autonomie: "",
                alimentation: "",
                freinage: "Disque / Tambour",
            }
        },
    ],
    FTM: [
        {
            name: "Jialing Future STAR",
            images: ["./img/models/ftm/ftm-jialing-future-star-110cc-rouge/ftm-jialing-future-star-110cc-rouge.jpg","./img/models/ftm/ftm-jialing-future-star-110cc-rouge/2.jpg"],
            price: "3,400 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "110 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
        {
            name: "Korak",
            images: ["./img/models/ftm/ftm-korak-noir/ftm-korak-noir.jpg","./img/models/ftm/ftm-korak-noir/2.jpeg","./img/models/ftm/ftm-korak-noir/3.jfif"],
            price: "3,500 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "110 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
    ],
    LVNENG: [
        {
            name: "LX05",
            images: ["./img/models/lvneng/lvneng-lx05-49cc-vert/lvneng-lx05-49cc-vert.jpg","./img/models/lvneng/lvneng-lx05-49cc-vert/2.png","./img/models/lvneng/lvneng-lx05-49cc-vert/3.png","./img/models/lvneng/lvneng-lx05-49cc-vert/4.png"],
            price: "5,700 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "2 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 Km/h",
                autonomie: "60 km",
                alimentation: "",
                freinage: "Disque/Disque",
            }
        },
        {
            name: "NCS GENUIS",
            images: ["./img/models/lvneng/lvneng-ncs-genius-beige-marron/lvneng-ncs-genius-beige-marron.jpg","./img/models/lvneng/lvneng-ncs-genius-beige-marron/2.png","./img/models/lvneng/lvneng-ncs-genius-beige-marron/3.png","./img/models/lvneng/lvneng-ncs-genius-beige-marron/4.png"],
            price: "7,300 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "2 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 Km/h",
                autonomie: "80 km",
                alimentation: "",
                freinage: "Double Disque/Double Disque",
            }
        },
        {
            name: "LX08",
            images: [ "./img/models/lvneng/lvneng-lx08/3.jpg","./img/models/lvneng/lvneng-lx08/1.jpg", "./img/models/lvneng/lvneng-lx08/2.jpg"],
            price: "6,290 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "49cc ",
                puissance: "2030 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 Km/h",
                autonomie: "50 km",
                alimentation: "",
                freinage: "Disque/Disque",
            }
        },
    ],
    E_RIDER: [
        {
            name: "E-CLASSIC",
            images: ["./img/models/erider/e-classic-1200-watts/ecoride-classic.png","./img/models/erider/e-classic-1200-watts/scooter-_lectrique-e-rider-e-classic-1200-watts---rouge.jpg"],
            price: "5,200 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "1,2 Kw",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 Km/h",
                autonomie: "70 Km",
                alimentation: "",
                freinage: "",
            }
        },
        {
            name: "E-TECH",
            images: ["./img/models/erider/e-tech-1200-watts/etech.png","./img/models/erider/e-tech-1200-watts/scooter-_lectrique-e-rider-e-tech-1200-watts---bleu.jpg"],
            price: "4,180 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1,2 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "59 Km/h",
                autonomie: "70 Km",
                alimentation: "",
                freinage: "",
            }
        },
        {
            name: "E-Power",
            images: ["./img/models/erider/e-power-1200w/eride2.png","./img/models/erider/e-power-1200w/scooter-Électrique-e-rider-e-power-1200w-rouge.jpg"],
            price: "4,850 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1,2 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 Km/h",
                autonomie: "80 Km",
                alimentation: "",
                freinage: "",
            }
        },
        {
            name: "E-eco",
            images: ["./img/models/erider/e-eco-1000w-blanc/eride1.png","./img/models/erider/e-eco-1000w-blanc/scooter-Électrique-e-rider-e-eco-1000w-blanc.jpg"],
            price: "3,680 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1 Kw",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "50 Km/h",
                autonomie: "50 Km",
                alimentation: "",
                freinage: "",
            }
        },
    ],
    LIFAN: [
        {
            name: "Glow",
            images: ["./img/models/lifan/LIFAN-Motocycle-Glow-100S-LF110-3S/2.jpeg","./img/models/lifan/LIFAN-Motocycle-Glow-100S-LF110-3S/LIFAN-Motocycle-Glow-100S-LF110-3S.jpg"],
            price: "3,860 TND",
            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: "100 cc",
                puissance: "6 Kw",
                coupleMaximal: "7 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 Km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
            }
        },
    ],
    WATTGO: [
        {
            name: "WG009",
            images: ["./img/models/wattgo/scooter-electrique-wattgo-wg9900-500w-beige-hjnkjsd/scooter-electrique-wattgo-wg9900-500w-beige-hjnkjsd.jpg","./img/models/wattgo/scooter-electrique-wattgo-wg9900-500w-beige-hjnkjsd/2.jpg","./img/models/wattgo/scooter-electrique-wattgo-wg9900-500w-beige-hjnkjsd/3.jpg"],
            price: "2,640 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "500 W",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "40 km/h",
                autonomie: "55 Km",
                alimentation: "Batterie plomb 48V 20Ah",
                freinage: "Tambour / Tambour",
            }
        },
        {
            name: "Wg017",
            images: ["./img/models/wattgo/Wattgo-Wg017/1.jpg","./img/models/wattgo/Wattgo-Wg017/2.jpg"],
            price: "3,580 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1000 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "50 km/h",
                autonomie: "60 Km",
                alimentation: "Lithium 20 Ah",
                freinage: "Disque / Disque",
            }
        },
        {
            name: "Wg016",
            images: ["./img/models/wattgo/Wattgo-Wg016/1.jpg","./img/models/wattgo/Wattgo-Wg016/2.jpg","./img/models/wattgo/Wattgo-Wg016/3.jpg"],
            price: "3,300 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1000 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "50 km/h",
                autonomie: "60 Km",
                alimentation: "Lithium 20 Ah",
                freinage: "Disque / Disque",
            }
        },
        {
            name: "Wgoo2",
            images: ["./img/models/wattgo/Wattgo-Wgoo/1.jpg","./img/models/wattgo/Wattgo-Wgoo/2.jpg","./img/models/wattgo/Wattgo-Wgoo/3.jpg"],
            price: "2,100 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "350 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "35 km/h",
                autonomie: "35 Km",
                alimentation: "Lithium 25 Ah",
                freinage: "Tambour / Tambour",
            }
        },
    ],
    E_FLASH: [
        {
            name: "E-FLASH",
            images: ["./img/models/eflash/2000-watts-blanc/scooter-electrique-e-flash-2000-watts-blanc-rouge-n.jpg","./img/models/eflash/2000-watts-blanc/2.jpeg"],
            price: "8,300 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "2000 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "70 Km/h",
                autonomie: "65 Km",
                alimentation: "",
                freinage: "",
            }
        },
    ],
    VIGO: [
        {
            name: "VIGO",
            images: ["./img/models/vigo/vigo/vigo1.png","./img/models/vigo/vigo/vigo2.png","./img/models/vigo/vigo/vigo3.png","./img/models/vigo/vigo/vigo4.jpg"],
            price: "En arrivage",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                autonomie: "",
                alimentation: "",
                freinage: "",
            }
        },
    ],
    KEREN: [
        {
            name: "Greek",
            images: ["./img/models/keren/motor-group/keren-greek.jpeg","./img/models/keren/motor-group/3.png"],
            price: "4,900 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1800 w",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "70 k/h",
                autonomie: "90 km",
                alimentation: "",
                freinage: "",
            }
        },
        {
            name: "U-BE",
            images: ["./img/models/keren/ube/keren-ube.jpeg","./img/models/keren/ube/1.jpg"],
            price: "4,900 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1200 w",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                autonomie: "70 km",
                alimentation: "Lithium-ion BMS",
                freinage: "",
            }
        },
        {
            name: "U-2",
            images: ["./img/models/keren/u2/keren-u2-1.jpeg","./img/models/keren/u2/keren-u2-2.jpeg","./img/models/keren/u2/keren-u2-3.jpeg","./img/models/keren/u2/2.png",],
            price: "4,800 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1200 w",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "70 k/h",
                autonomie: "90 km",
                alimentation: "Lithium-ion 70v",
                freinage: "Disque / Disque",
            }
        },
    ],
    LETBE: [
        {
            name: "NEON",
            images: ["./img/models/letbe/LETBE-NEON-125/moora1.jpg","./img/models/letbe/LETBE-NEON-125/moora2.jpg","./img/models/letbe/LETBE-NEON-125/moora3.jpg","./img/models/letbe/LETBE-NEON-125/moora4.jpg"],
            price: "5,900 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: "125 cc",
                puissance: "8,5 ch",
                coupleMaximal: "9,4 Nm",
                refroidissement: "Air",
                vitesseMaximale: "",
                autonomie: "",
                alimentation: "Injection électronique Bosch",
                freinage: "Disque/Disque ABS",
            }
        },
    ],
    TAILG: [
          {
            name: "Bloom",
            images: ["./img/models/slc/bloom/1.webp", "./img/models/slc/bloom/2.webp"],
            price: "5,000 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "2000 W",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "60 km/h",
                autonomie: "90 km",
                alimentation: "Batterie Graphène Lead Acid 72V 38Ah",
                freinage: "Disques hydrauliques AV/AR",
            }
        },
         {
            name: "STAR",
            images: ["./img/models/tailg/star/3.png","./img/models/tailg/star/2.jpg"],
            price: "4,500 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "1200 w",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "60 km/h",
                autonomie: "60 km",
                alimentation: "Lithium 48v",
                freinage: "Disque/Disque",
            }
        },
    
         {
            name: "Evasion",
            images: ["./img/models/slc/slc-evasion/1.webp","./img/models/slc/slc-evasion/2.png"],
            price: "6,600 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "2000 W",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "75 km/h",
                autonomie: "70 km",
                alimentation: "Batterie Graphène Acide 72V 35Ah",
                freinage: "Disques AV/AR hydrauliques",
            }
        },
      
        {
            name: "Pride",
            images: ["./img/models/slc/pride/1.jpeg", "./img/models/slc/pride/2.jpeg"],
            price: "4,500 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "2000 W",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "60 km/h",
                autonomie: "90 km",
                alimentation: "Batterie 72V 38Ah Graphene Lead Acid",
                freinage: "Disques hydrauliques AV/AR",
            }
        },
        {
            name: "Neo",
            images: ["./img/models/slc/neo/1.jpeg", "./img/models/slc/neo/2.jpeg"],
            price: "4,500 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "2000 W",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "60 km/h",
                autonomie: "80 km",
                alimentation: "Batterie 72V 38Ah Graphene Lead Acid",
                freinage: "Disques hydrauliques AV/AR",
            }
        },
           
    ],
    ECORIDE: [
        {
            name: "ZEN",
            images: ["./img/models/ecoride/ZEN-600-Watts/1.jpg","./img/models/ecoride/ZEN-600-Watts/2.jpg","./img/models/ecoride/ZEN-600-Watts/3.jpg","./img/models/ecoride/ZEN-600-Watts/4.jpg"],
            price: "2,000 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "600 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "35 km/h",
                autonomie: "35 Km",
                alimentation: "48V 20Ah",
                freinage: "",
            }
        },
        {
            name: "ALPHA",
            images: ["./img/models/ecoride/ALPHA-ROUGE-1000/1.jpg","./img/models/ecoride/ALPHA-ROUGE-1000/2.jpg"],
            price: "2,900 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1000 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 km/h",
                autonomie: "50 Km",
                alimentation: "60V Batterie en Acid",
                freinage: "",
            }
        },
    ],
    GSM: [
        {
            name: "BWX 125",
            images: ["./img/models/gsm/GSM-BWX-125-cc/gsm-bwx-125-cc-1.png","./img/models/gsm/GSM-BWX-125-cc/gsm-bwx-125-cc-2.webp","./img/models/gsm/GSM-BWX-125-cc/gsm-bwx-125-cc-3.webp","./img/models/gsm/GSM-BWX-125-cc/gsm-bwx-125-cc-4.webp"],
            price: "5,000 TND",
            specs: {
                typeMoteur: "monocylindre 4 temps",
                cylindree: "124.6 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "90 km",
                autonomie: "",
                alimentation: "Elèctrique CDI",
                freinage: "Disques / Disques",
            }
        },

    ],
    HAOJIN: [
        {
            name: "Lyra",
            images: ["./img/models/haojin/lyra/lyra-1.jpeg","./img/models/haojin/lyra/lyra-2.jpeg","./img/models/haojin/lyra/lyra-3.jpeg","./img/models/haojin/lyra/lyra-4.jpeg"],
            price: "En arrivage",
            specs: {
                typeMoteur: "monocylindre 4 temps",
                cylindree: "110 cm³",
                puissance: "10 kW",
                coupleMaximal: "14 Nm",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                autonomie: "",
                alimentation: "Carburateur CDI",
                freinage: "Disques / Tambour",
            }
        },

    ],
    SMT: [
        {
            name: "Thunder",
            images: ["./img/models/smt/thunder/thunder-1.png"],
            price: "En arrivage",
            specs: {
                typeMoteur: "",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                autonomie: "",
                alimentation: "",
                freinage: "",
            }
        },
        {
            name: "Dolce",
            images: ["./img/models/smt/dolce/dolce-1.jpeg"],
            price: "6,000 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: "125 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "100 km/h",
                autonomie: "",
                alimentation: "Injection électronique",
                freinage: "Disques / Disques",
            }
        },

    ],
    CITYBIKE: [
      
        {
            name: "City Bike 4000",
            images: ["./img/models/citybike/City-Bike-125CC-4000W/1.jpg","./img/models/citybike/City-Bike-125CC-4000W/2.jpg"],
            price: "7,500 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "4000 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "75 km/h",
                autonomie: "60 Km",
                alimentation: "Lithium-Ion 72V 40Ah",
                freinage: "Disques Hydraulique",
            }
        },
        {
            name: "City Bike 3000",
            images: ["./img/models/citybike/City-Bike-50CC-3000W/1.jpg","./img/models/citybike/City-Bike-50CC-3000W/2.jpg","./img/models/citybike/City-Bike-50CC-3000W/3.jpg","./img/models/citybike/City-Bike-50CC-3000W/4.jpg"],
            price: "6,900 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "3000 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 km/h",
                autonomie: "45 Km",
                alimentation: "Lithium-Ion 60V 23.4 Ah",
                freinage: "Disques Hydraulique",
            }
        },
          {
            name: "City Bike 2000",
            images: ["./img/models/citybike/City-Bike-50CC-2000W/1.jpg","./img/models/citybike/City-Bike-50CC-2000W/2.jpg"],
            price: "5,300 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "2000 Watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 km",
                autonomie: "45 Km",
                alimentation: "Lithium-Ion 60V 26Ah",
                freinage: "Disques Hydraulique",
            }
        },
    ],
    AIMA: [
        {
            name: "AIMA Q5",
            images: ["./img/models/aima/aima-q5/aima-q5-1.jpg","./img/models/aima/aima-q5/aima-q5-2.jpg","./img/models/aima/aima-q5/aima-q5-3.jpg","./img/models/aima/aima-q5/aima-q5-4.jpg"],
            price: "4,200 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "800 watts",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 km/h",
                autonomie: "70 Km",
                alimentation: "",
                freinage: "Disques / Disques",
            }
        },

    ],
    MOTOLUX: [
        {
            name: "City Coco 3 roues",
            images: ["./img/models/motolux/city-coco/city-coco-3.webp","./img/models/motolux/city-coco/city-coco-1.jpg","./img/models/motolux/city-coco/city-coco-2.jpg","./img/models/motolux/city-coco/city-coco-4.webp"],
            price: "5,500 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "2000W",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 km/h",
                autonomie: "100 Km",
                alimentation: "Batterie Lithium 60V 20Ah",
                freinage: "",
            }
        },
        {
            name: "ÉMOTOLUX ",
            images: ["./img/models/motolux/vespa-15/motolux.png","./img/models/motolux/vespa-15/2.png"],
            price: "3,950 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "1500W",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 km/h",
                autonomie: "55 Km",
                alimentation: " 60v - 24Ah",
                freinage: "Disques / Tambour",
            }
        },

    ],
    PHANTOM: [
          {
            name: "Cuxi II",
            images: ["./img/models/phantom/cuxi/cuxi-1.jpeg","./img/models/phantom/cuxi/cuxi-2.jpeg","./img/models/phantom/cuxi/cuxi-3.jpeg"],
            price: "3,450 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: "106 cm³,",
                puissance: "5.3 kW (7.2 ch)",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
            }
        },
        {
            name: "Phantom Z1",
            images: ["./img/models/phantom/phantom-z1/phantom-z1-1.jpg","./img/models/phantom/phantom-z1/phantom-z1-2.jpg","./img/models/phantom/phantom-z1/phantom-z1-3.jpg","./img/models/phantom/phantom-z1/phantom-z1-4.jpg"],
            price: "6,100 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: "125 cm³,",
                puissance: "10 ch",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour CBS",
            }
        },
        {
            name: "CORAL",
            images: ["./img/models/phantom/coral/coral1.png","./img/models/phantom/coral/coral2.png","./img/models/phantom/coral/phantom-coral-124-3.jpg","./img/models/phantom/coral/phantom-coral-124-4.jpg"],
            price: "6,000 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: "125 cm³,",
                puissance: "10 ch",
                coupleMaximal: "",
                refroidissement: "A air",
                vitesseMaximale: "100 km/h",
                autonomie: "",
                alimentation: "Carburateur",
                freinage: "Disque / Tambour CBS",
            }
        },
      

    ],
    CFORCE: [
        {
            name: "QUAD CFORCE 450 L",
            images: ["./img/models/cforce/450l/1.png","./img/models/cforce/450l/2.png","./img/models/cforce/450l/3.png","./img/models/cforce/450l/4.png"],
            price: "35,000 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps SOHC 4",
                cylindree: "400 cm³,",
                puissance: "22,8 kW",
                coupleMaximal: "33 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "90 km/h",
                autonomie: "",
                alimentation: "Injection électronique EFI Bosch",
                freinage: "4 disques hydrauliques AV/AR",
            }
        },
        {
            name: "QUAD CFORCE 450 S",
            images: ["./img/models/cforce/450s/1.jpg","./img/models/cforce/450s/2.webp","./img/models/cforce/450s/3.webp","./img/models/cforce/450s/4.webp"],
            price: "28,000 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps SOHC 4",
                cylindree: "400 cm³,",
                puissance: "20 kW",
                coupleMaximal: "31 Nm",
                refroidissement: "Liquide",
                vitesseMaximale: "90 km/h",
                autonomie: "",
                alimentation: "Injection électronique EFI Bosch",
                freinage: "Double disque AV / Disque AR",
            }
        },

    ],
    VOGE: [
        {
            name: "SR4 Max",
            images: ["./img/models/voge/sr4max/SR4-Max-black-L.webp","./img/models/voge/sr4max/SR4-Max-black-F.webp","./img/models/voge/sr4max/SR4-Max-black-R.webp","./img/models/voge/sr4max/SR4-Max-black-Re.webp"],
            price: "En arrivage",
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: "349.8 cc",
                puissance: "25 kW",
                coupleMaximal: "35 N/m",
                refroidissement: "Liquide",
                vitesseMaximale: "127 km/h",
                autonomie: "",
                alimentation: "",
                freinage: "Disques / Disques ABS",
            }
        },
        

    ],
    MISTRAL: [
        {
            name: "Tricycle 150",
            images: ["./img/models/mistral/tricycle/tricycle.jpg"],
            price: "8,000 TND",
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: "150 cc",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "",
                autonomie: "",
                alimentation: "",
                freinage: "Tambour/Tambour ",
            }
        },
        

    ],
    RAPSEV: [
        {
            name: "Bange Frigorifique",
            images: ["./img/models/rapsev/tri/rapsev1.webp","./img/models/rapsev/tri/rapsev2.webp","./img/models/rapsev/tri/rapsev3.webp","./img/models/rapsev/tri/rapsev4.webp"],
            price: "25,400 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 km/h",
                autonomie: "120 Km",
                alimentation: "",
                freinage: "",
            }
        },
        {
            name: "OAK",
            images: ["./img/models/rapsev/oak/1.webp","./img/models/rapsev/oak/2.png"],
            price: "23,800 TND",
            specs: {
                typeMoteur: "Électrique",
                cylindree: "",
                puissance: "",
                coupleMaximal: "",
                refroidissement: "",
                vitesseMaximale: "45 km/h",
                autonomie: "110 Km",
                alimentation: "",
                freinage: "",
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
                autonomie: "",
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
                autonomie: "",
            alimentation: "Injection électronique",
            freinage: "Double disque AV / Disque AR ABS"
        }
    },
       {
        marque: "HONDA",
        name: "HONDA.XADV 750 🇹🇳 modèle 10.2025 -00km 🇹🇳 avec carte grise tunisienne 🇹🇳 chez JETMOTO 🇹🇳 tunis 🇹🇳 watsap-tel-53685927-26711555 🇹🇳",
        images: ["./img/occasion/13/1.jpg", "./img/occasion/13/2.jpg", "./img/occasion/13/4.jpg"],
        price: "",
        specs: {
            kilometrage: "0 km",
            typeMoteur: "Bicylindre parallèle 4 temps",
            cylindree: "745 cm³",
            puissance: "58,6 ch (43 kW)",
            coupleMaximal: "69 Nm",
            refroidissement: "Liquide",
            vitesseMaximale: "160 km/h",
                autonomie: "",
            alimentation: "Injection PGM-FI électronique",
            freinage: "Double disqueAV / Disque AR ABS"
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
                autonomie: "",
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
                autonomie: "",
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
                autonomie: "",
            alimentation: "Injection Électronique",
            freinage: "Disques hydrauliques (ABS)"
        }
    },
    {
        marque: "SUZUKI",
        name: "SUZUKI-VAN.VAN.90 Cc -modèle 1982 - Jet Moto tel 24350274",
        images: ["./img/occasion/2/1.jpg","./img/occasion/2/2.jpg",  "./img/occasion/2/3.jpg", "./img/occasion/2/4.jpg"],
        price: "",
        specs: {
            kilometrage: "0 km",
            typeMoteur: "Monocylindre 2 temps,",
            cylindree: "90 cm³",
            puissance: "8 ch",
            coupleMaximal: "",
            refroidissement: "Air",
            vitesseMaximale: "Environ 75 km/h",
                autonomie: "",
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
                autonomie: "",
            alimentation: "Injection électronique",
            freinage: ""
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
                autonomie: "",
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
                autonomie: "",
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
        id: 3,
        marque: "Peugeot",
        modele: "Peugeot Pulsion",
        youtubeId: "v3uBFipSzeA"
    },
   
  
  
    {
        id: 8,
        marque: "HONDA",
        modele: "WN7 Model Features",
        youtubeId: "dkQHfp9qRo0"
    },
  
    {
        id: 10,
        marque: "HONDA",
        modele: "CB1000 GT",
        youtubeId: "Ia1foCEjtCY"
    },
 
    
     
    
      {
        id: 16,
        marque: "Verge Motorcycles",
        modele: "Verge TS Pro",
        youtubeId: "cy_mXYItqXU"
    },
      {
        id: 17,
        marque: "MV Agusta",
        modele: "mv agusta brutale 2026",
        youtubeId: "YSePawzL5Rg"
    },
     
    

];