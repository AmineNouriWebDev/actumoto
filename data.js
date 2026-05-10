// data.js - Données centralisées pour le site

// Fonction utilitaire pour formater les prix avec séparateur de milliers
function formatPrice(price, currency = "DT") {
    if (price === null) {
        return "En arrivage";
    }
    // Formater le prix avec virgule comme séparateur de milliers
    // Remplacer l'espace par une virgule pour obtenir: 10,900 DT
    const formatted = price.toLocaleString('fr-FR').replace(/\s/g, ',');
    return `${formatted} ${currency}`;
}

// Version HTML pour un meilleur contrôle du style (ex: DT plus petit)
function formatPriceHtml(price, currency = "DT") {
    if (price === null) {
        return `<span class="text-red-600 font-bold text-xl">En arrivage</span>`;
    }
    const formatted = price.toLocaleString('fr-FR').replace(/\s/g, ',');
    return `
      <span class="text-red-600 font-bold text-2xl leading-none flex items-baseline">
        ${formatted}
        <span class="text-sm font-normal ml-1">${currency}</span>
      </span>
    `;
}


const brands = [
    { name: "Peugeot", logo: "./img/logos-actumoto/peugeot.png?v=2" },
    { name: "PIAGGIO", logo: "./img/logos-actumoto/piaggio.png?v=2" },
    { name: "KIM", logo: "./img/logos-actumoto/kim.png?v=3" },

    { name: "APRILIA", logo: "./img/logos-actumoto/aprilia.png?v=2" },


    { name: "SLC", logo: "./img/logos-actumoto/slc.png?v=2" },
    { name: "UNISCOOT", logo: "./img/logos-actumoto/uniscoot.png?v=2" },
    { name: "DAYUN", logo: "./img/logos-actumoto/dayun.png?v=2" },

    { name: "KYMCO", logo: "./img/logos-actumoto/kymco.png?v=2" },



    { name: "NOVAGO", logo: "./img/logos-actumoto/novago.png?v=2" },
    { name: "PHANTOM", logo: "./img/logos-actumoto/phantom.png?v=2" },
    { name: "FIRST", logo: "./img/logos-actumoto/first.png?v=2" },

    { name: "SUZUKI", logo: "./img/logos-actumoto/suzuki.png?v=2" },
    { name: "SENKE", logo: "./img/logos-actumoto/senke.png?v=2" },
    { name: "BBM", logo: "./img/logos-actumoto/bbm.png?v=3" },
    { name: "ZIMOTA", logo: "./img/logos-actumoto/zimota.png?v=2" },

    { name: "ZONTES", logo: "./img/logos-actumoto/zontes.png?v=2" },
    { name: "LETBE", logo: "./img/logos-actumoto/letbe.png?v=2" },

    { name: "LM", logo: "./img/logos-actumoto/lm.png?v=2" },
    { name: "SMT", logo: "./img/logos-actumoto/smt.png?v=2" },

    { name: "FTM", logo: "./img/logos-actumoto/ftm.png?v=2" },
    { name: "LIFAN", logo: "./img/logos-actumoto/logo-lifan-final.png?v=2" },
    { name: "SANYA", logo: "./img/logos-actumoto/sanya.png?v=2" },
    { name: "GSM", logo: "./img/logos-actumoto/gsm.png?v=3" },
    { name: "CFMOTO", logo: "./img/logos-actumoto/cfmoto.png?v=3" },
    { name: "VOGE", logo: "./img/logos-actumoto/voge.png?v=2" },
    { name: "SYM", logo: "./img/logos-actumoto/sym.png?v=2" },
    { name: "QJMOTOR", logo: "./img/logos-actumoto/qjmotors.png?v=2" },
    { name: "TAILG", logo: "./img/logos-actumoto/tailg.png?v=2" },
    { name: "HAOJIN", logo: "./img/logos-actumoto/haojin.png?v=2" },
    { name: "AIMA", logo: "./img/logos-actumoto/aima.png?v=2" },
    { name: "E RIDER", logo: "./img/logos-actumoto/erider.png?v=2" },
    { name: "YADEA", logo: "./img/logos-actumoto/yadea.png?v=2" },
    { name: "WATTGO", logo: "./img/logos-actumoto/logo-wattgo-final.png?v=2" },
    { name: "CFORCE", logo: "./img/logos-actumoto/cforce.png?v=2" },
    { name: "ECORIDE", logo: "./img/logos-actumoto/ecoride.png?v=2" },
    { name: "VIGO", logo: "./img/logos-actumoto/vigo.png?v=2" },
    { name: "GOLD", logo: "./img/logos-actumoto/goldstar.png?v=2" },
    { name: "XTF", logo: "./img/logos-actumoto/xtf.png?v=2" },
    { name: "LVNENG", logo: "./img/logos-actumoto/lvneng.png?v=2" },
    { name: "MOTOLUX", logo: "./img/logos-actumoto/motolux.png?v=2" },
    // { name: "TIGER", logo: "./img/logos-actumoto/tiger.png?v=3", comingSoon: true },
    // { name: "MISTRAL", logo: "./img/logos-actumoto/mistral.png?v=2" },
    { name: "WOLF", logo: "./img/logos-actumoto/wolf.png?v=2" },

    { name: "CITYBIKE", logo: "./img/logos-actumoto/citybike.png?v=2" },
    { name: "RAPSEV", logo: "./img/logos-actumoto/rapsev.png?v=2" },
    { name: "KEREN", logo: "./img/logos-actumoto/keren.png?v=2" },
    // { name: "KAYCO", logo: "./img/logos-actumoto/kayco.png?v=2" },



];

const categories = [
    { name: "Sportive", logo: "./img/category/sportive.webp" },
    { name: "Trail", logo: "./img/category/trail.webp" },
    { name: "Roadster", logo: "./img/category/roadster.webp" },
    { name: "Scooter", logo: "./img/category/scooter.webp" },
    { name: "Mobylette", logo: "./img/category/mobylette.webp" },
    { name: "Tricycle", logo: "./img/category/tricycle.webp" },
    { name: "Custom", logo: "./img/category/custom.webp" },
    { name: "Quad", logo: "./img/category/quad.webp" },
    { name: "Motocross", logo: "./img/category/motocross.webp" },

];

const modelsData = {
    Peugeot: [

        {
            name: "Django",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/peugeot/peugeot-django-125/peugeot-django-125-1.jpeg", "./img/models/peugeot/peugeot-django-125/peugeot-django-125-2.jpeg", "./img/models/peugeot/peugeot-django-125/peugeot-django-125-3.jpeg", "./img/models/peugeot/peugeot-django-125/peugeot-django-125-4.jpeg"],
            price: 10900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps,",
                cylindree: 125,
                puissance: 10.6,
                coupleMaximal: 9.3,
                refroidissement: "Air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Injection électronique,",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "Tweet EVO ",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/peugeot/peugeot-tweet-125/1.jpeg", "./img/models/peugeot/peugeot-tweet-125/2.jpeg", "./img/models/peugeot/peugeot-tweet-125/3.jpeg", "./img/models/peugeot/peugeot-tweet-125/4.jpeg"],
            price: 9500,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: 125,
                puissance: 11.5,
                coupleMaximal: 10.3,
                refroidissement: "Air",
                tankCapacity: null,
                vitesseMaximale: 105,
                autonomie: 200,
                alimentation: "Injection électronique",
                freinage: "Disque / Disque",
                systemeFreinage: "CBS",
            }
        },



        {
            name: "XP",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/peugeot/peugeot-xp-400/peugeot-xp-400-1.jpeg", "./img/models/peugeot/peugeot-xp-400/peugeot-xp-400-2.jpeg", "./img/models/peugeot/peugeot-xp-400/peugeot-xp-400-3.jpeg", "./img/models/peugeot/peugeot-xp-400/peugeot-xp-400-4.jpeg"],
            price: 42900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: 400,
                puissance: 36.7,
                coupleMaximal: 38.1,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 137,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Double disque / Disque AR ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "MÉTROPOLIS",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/peugeot/peugeot-metropolis-400/peugeot-metropolis-1.jpeg", "./img/models/peugeot/peugeot-metropolis-400/peugeot-metropolis-2.jpeg", "./img/models/peugeot/peugeot-metropolis-400/peugeot-metropolis-3.jpeg", "./img/models/peugeot/peugeot-metropolis-400/peugeot-metropolis-4.jpeg"],
            price: null,
            currency: "DT", // En arrivage,
            specs: {
                typeMoteur: "Monocylindre 4 temps,",
                cylindree: 400,
                puissance: 35.6,
                coupleMaximal: 38.1,
                refroidissement: "Liquide,",
                tankCapacity: null,
                vitesseMaximale: 135,
                autonomie: null,
                alimentation: "Injection électronique,",
                freinage: "Double disque/ Disque",
                systemeFreinage: "ABS-CBS",
            }
        },
        {
            name: "PM 01",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/peugeot/peugeot-pm-01-125/1.png", "./img/models/peugeot/peugeot-pm-01-125/peugeot-pm-01-125-2.jpeg", "./img/models/peugeot/peugeot-pm-01-125/peugeot-pm-01-125-3.jpeg", "./img/models/peugeot/peugeot-pm-01-125/peugeot-pm-01-125-4.jpeg"],
            price: 11500,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps,",
                cylindree: 125,
                puissance: 13.9,
                coupleMaximal: 11.2,
                refroidissement: "Liquide,",
                tankCapacity: null,
                vitesseMaximale: 105,
                autonomie: null,
                alimentation: "Injection électronique,",
                freinage: "Disque / Disque",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "Pulsion",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/peugeot/peugeot-pulsion-125/peugeot-pulsion-125-1.png", "./img/models/peugeot/peugeot-pulsion-125/peugeot-pulsion-125-2.jpeg", "./img/models/peugeot/peugeot-pulsion-125/peugeot-pulsion-125-3.jpeg", "./img/models/peugeot/peugeot-pulsion-125/peugeot-pulsion-125-4.jpeg"],
            price: 12900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: 125,
                puissance: 13.2,
                coupleMaximal: 12,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 115,
                autonomie: null,
                alimentation: "Injection Électronique",
                freinage: "Disque /Disque ",
                systemeFreinage: "ABS",
            }
        },
    ],
    SUZUKI: [
        {
            name: "DR 650",
            fuelType: "Thermique",
            category: "Motocross",
            images: ["./img/models/suzuki/dr650/1.jpg", "./img/models/suzuki/dr650/2.jpg", "./img/models/suzuki/dr650/3.jpg", "./img/models/suzuki/dr650/4.jpg"],
            price: 37500,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 644,
                puissance: 39,
                coupleMaximal: 62,
                refroidissement: "Air/Huile (SACS)",
                tankCapacity: null,
                vitesseMaximale: 150,
                autonomie: null,
                alimentation: "Carburateur Mikuni BST40",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "BURGMAN STREET",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/suzuki/suzuki-burgman-street-ub125-blanc/burgman.jpeg", "./img/models/suzuki/suzuki-burgman-street-ub125-blanc/1.jpg", "./img/models/suzuki/suzuki-burgman-street-ub125-blanc/2.jpg", "./img/models/suzuki/suzuki-burgman-street-ub125-blanc/3.jpg"],
            price: 9750,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 124,
                puissance: 6.3,
                coupleMaximal: 10,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 95,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque/Tambour ",
                systemeFreinage: "CBS",
            }
        },
    ],
    PIAGGIO: [

        {
            name: "VESPA GTS",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/piaggio/piaggio-vespa-gts/piaggio-vespa-gts-1.jpeg", "./img/models/piaggio/piaggio-vespa-gts/piaggio-vespa-gts-2.jpeg", "./img/models/piaggio/piaggio-vespa-gts/piaggio-vespa-gts-3.jpeg", "./img/models/piaggio/piaggio-vespa-gts/piaggio-vespa-gts-4.jpeg"],
            price: 29900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 125,
                puissance: 10.3,
                coupleMaximal: 12.5,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 110,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "Liberty S 2025",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/piaggio/liberty-s-125-2025/liberty-s-125-2025-1.jpeg", "./img/models/piaggio/liberty-s-125-2025/liberty-s-125-2025-2.jpeg", "./img/models/piaggio/liberty-s-125-2025/liberty-s-125-2025-3.jpeg"],
            price: 16500,
            currency: "DT",

            specs: {
                typeMoteur: "i-get 125 cc 4 temps injection",
                cylindree: 125,
                puissance: 11,
                coupleMaximal: 10.75,
                refroidissement: "Air",
                tankCapacity: null,
                vitesseMaximale: 95,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque AV  / Tambour AR",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "VESPA VXL ",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/piaggio/piaggio-vespa-125/piaggio-vespa-125-1.jpeg", "./img/models/piaggio/piaggio-vespa-125/piaggio-vespa-125-2.jpeg", "./img/models/piaggio/piaggio-vespa-125/piaggio-vespa-125-3.jpeg", "./img/models/piaggio/piaggio-vespa-125/piaggio-vespa-125-4.jpeg"],
            price: 9900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 125,
                puissance: 7.1,
                coupleMaximal: 10.6,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 90,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
    ],
    APRILIA: [
        {
            name: "SR GT ",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/aprilia/aprilia-gt/aprilia-1.jpeg", "./img/models/aprilia/aprilia-gt/aprilia-2.jpeg", "./img/models/aprilia/aprilia-gt/aprilia-3.jpeg"],
            price: 26000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: 125,
                puissance: 14,
                coupleMaximal: 12,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 99,
                autonomie: null,
                alimentation: "injection",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }

        },
        {
            name: "SR",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/aprilia/aprilia-sr-125/piaggio-aprilia-sr-125-1.jpeg", "./img/models/aprilia/aprilia-sr-125/piaggio-aprilia-sr-125-2.jpeg", "./img/models/aprilia/aprilia-sr-125/piaggio-aprilia-sr-125-3.jpeg", "./img/models/aprilia/aprilia-sr-125/scooter-aprilia-sr125-bleu-55.jpg"],
            price: 8500,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: 125,
                puissance: 9,
                coupleMaximal: 10,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 90,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },

        {
            name: "SR iget",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/aprilia/aprilia-sr-125-moteur-i-get/aprilia-1.png", "./img/models/aprilia/aprilia-sr-125-moteur-i-get/aprilia-2.png"],
            price: 10900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps i-get",
                cylindree: 125,
                puissance: 15,
                coupleMaximal: 12,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque AV / Disque AR ",
                systemeFreinage: "CBS",
            }

        },


    ],
    CFMOTO: [
        {
            name: "450MT",
            fuelType: "Thermique",
            category: "Trail",
            images: ["./img/models/cfmoto/CFMOTO-450MT/4.webp", "./img/models/cfmoto/CFMOTO-450MT/CFMOTO-450MT.jpg", "./img/models/cfmoto/CFMOTO-450MT/2.webp", "./img/models/cfmoto/CFMOTO-450MT/3.webp"],
            price: 49980,
            currency: "DT",

            specs: {
                typeMoteur: "Bicylindre, 4 temps",
                cylindree: 450,
                puissance: 43,
                coupleMaximal: 44,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 160,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "800MT-X",
            fuelType: "Thermique",
            category: "Trail",
            images: ["./img/models/cfmoto/CF-MOTO-800MT-X/CF-MOTO-800MT-X.jpg", "./img/models/cfmoto/CF-MOTO-800MT-X/2.webp", "./img/models/cfmoto/CF-MOTO-800MT-X/3.webp", "./img/models/cfmoto/CF-MOTO-800MT-X/4.webp"],
            price: 76160,
            currency: "DT",

            specs: {
                typeMoteur: "Bicylindre",
                cylindree: 800,
                puissance: 95,
                coupleMaximal: 87,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 200,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Double Disque/Disque",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "800MT Explore",
            fuelType: "Thermique",
            category: "Trail",
            images: ["./img/models/cfmoto/CF-MOTO-800MT-Explore/3.webp", "./img/models/cfmoto/CF-MOTO-800MT-Explore/CF-MOTO-800MT-Explore.jpg", "./img/models/cfmoto/CF-MOTO-800MT-Explore/2.webp", "./img/models/cfmoto/CF-MOTO-800MT-Explore/4.webp"],
            price: 80920,
            currency: "DT",

            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: 800,
                puissance: 91,
                coupleMaximal: 75,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 200,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Double Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "700MT",
            fuelType: "Thermique",
            category: "Trail",
            images: ["./img/models/cfmoto/CF-MOTO-700MT/3.webp", "./img/models/cfmoto/CF-MOTO-700MT/CF-MOTO-700MT.jpg", "./img/models/cfmoto/CF-MOTO-700MT/2.webp", "./img/models/cfmoto/CF-MOTO-700MT/4.webp"],
            price: 58650,
            currency: "DT",

            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: 700,
                puissance: 66,
                coupleMaximal: 60,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 190,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Double Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "X SPORT",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/cfmoto/CF-MOTO-700CL-X-SPORT/4.webp", "./img/models/cfmoto/CF-MOTO-700CL-X-SPORT/CF-MOTO-700CL-X-SPORT.jpg", "./img/models/cfmoto/CF-MOTO-700CL-X-SPORT/2.avif", "./img/models/cfmoto/CF-MOTO-700CL-X-SPORT/3.webp"],
            price: 61400,
            currency: "DT",

            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: 700,
                puissance: 70,
                coupleMaximal: 68,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 190,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Double Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "450CL-C",
            fuelType: "Thermique",
            category: "Custom",
            images: ["./img/models/cfmoto/CF-MOTO-450CL-C/2.jpg", "./img/models/cfmoto/CF-MOTO-450CL-C/CF-MOTO-450CL-C.jpg", "./img/models/cfmoto/CF-MOTO-450CL-C/3.jpeg", "./img/models/cfmoto/CF-MOTO-450CL-C//4.jpg"],
            price: 57800,
            currency: "DT",

            specs: {
                typeMoteur: "Bicylindre",
                cylindree: 450,
                puissance: 43,
                coupleMaximal: 42,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 160,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "C-BOBER",
            fuelType: "Thermique",
            category: "Custom",
            images: ["./img/models/cfmoto/CF-MOTO-450CL-C-BOBER/3.webp", "./img/models/cfmoto/CF-MOTO-450CL-C-BOBER/CF-MOTO-450CL-C-BOBER.jpg", "./img/models/cfmoto/CF-MOTO-450CL-C-BOBER/2.webp", "./img/models/cfmoto/CF-MOTO-450CL-C-BOBER/4.webp"],
            price: 49950,
            currency: "DT",

            specs: {
                typeMoteur: "Bicylindre",
                cylindree: 450,
                puissance: 40,
                coupleMaximal: 42,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 160,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "125NK",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/cfmoto/CF-MOTO-125NK/CF-MOTO-125NK.jpg", "./img/models/cfmoto/CF-MOTO-125NK/2.webp", "./img/models/cfmoto/CF-MOTO-125NK/3.webp", "./img/models/cfmoto/CF-MOTO-125Nk/4.jpg"],
            price: 14850,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: 125,
                puissance: 15,
                coupleMaximal: 11,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 110,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "800NK Advanced",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/cfmoto/CF-MOTO-800NK-Advanced/2.jpg", "./img/models/cfmoto/CF-MOTO-800NK-Advanced/CF-MOTO-800NK-Advanced.jpg", "./img/models/cfmoto/CF-MOTO-800NK-Advanced/3.webp", "./img/models/cfmoto/CF-MOTO-800NK-Advanced/4.webp"],
            price: 59500,
            currency: "DT",

            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: 800,
                puissance: 95,
                coupleMaximal: 81,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 220,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Double Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "300NK",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/cfmoto/CF-MOTO-300NK/CF-MOTO-300NK.jpg", "./img/models/cfmoto/CF-MOTO-300NK/2.webp", "./img/models/cfmoto/CF-MOTO-300NK/3.webp", "./img/models/cfmoto/CF-MOTO-300NK/4.webp"],
            price: 34100,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: 300,
                puissance: 27,
                coupleMaximal: 25,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 139,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "675SR-R",
            fuelType: "Thermique",
            category: "Sportive",
            images: ["./img/models/cfmoto/CF-MOTO-675SR-R/CF-MOTO-675SR-R.jpg", "./img/models/cfmoto/CF-MOTO-675SR-R/2.webp", "./img/models/cfmoto/CF-MOTO-675SR-R/3.webp"],
            price: 53450,
            currency: "DT",

            specs: {
                typeMoteur: "3 Cylindre, 4 temps",
                cylindree: 675,
                puissance: 70,
                coupleMaximal: 70,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 230,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Double Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "450SR-S",
            fuelType: "Thermique",
            category: "Sportive",
            images: ["./img/models/cfmoto/CF-MOTO-450SR-S/1.png", "./img/models/cfmoto/CF-MOTO-450SR-S/4.webp"],
            price: 39500,
            currency: "DT",

            specs: {
                typeMoteur: "Bicylindre, 4temps",
                cylindree: 450,
                puissance: 48,
                coupleMaximal: 39,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 180,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "150SC",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/cfmoto/CF-MOTO-150SC/1.jpg", "./img/models/cfmoto/CF-MOTO-150SC/2.jpg", "./img/models/cfmoto/CF-MOTO-150SC/3.jpeg", "./img/models/cfmoto/CF-MOTO-150SC/4.jpeg"],
            price: 16500,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 2 soupapes",
                cylindree: 150,
                puissance: 14,
                coupleMaximal: 14.2,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 110,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "CX-5E",
            fuelType: "Electrique",
            category: "Motocross",
            images: ["./img/models/cfmoto/CF-MOTO-CX-5E/2.webp", "./img/models/cfmoto/CF-MOTO-CX-5E/CF-MOTO-CX-5E.jpg", "./img/models/cfmoto/CF-MOTO-CX-5E/3.webp", "./img/models/cfmoto/CF-MOTO-CX-5E/4.webp"],
            price: 10600,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1.3,
                coupleMaximal: 7,
                refroidissement: "",
                tankCapacity: null,
                vitesseMaximale: 46,
                autonomie: 50,
                alimentation: "",
                freinage: "",
                systemeFreinage: "",
            }
        },
    ],
    ZIMOTA: [
        {
            name: "Vision 125",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/zimotamotor/vision/vision1.png", "./img/models/zimotamotor/vision/vision2.png", "./img/models/zimotamotor/vision/vision3.jpg", "./img/models/zimotamotor/vision/vision4.jpg"],
            price: null,
            currency: "DT", // En arrivage,
            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "",
                freinage: "Disque / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "Eway RIDE",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/zimotamotor/zimota-eway-ride-elec/zimota-eway-ride-elec.jpg", "./img/models/zimotamotor/zimota-eway-ride-elec/2.jpg", "./img/models/zimotamotor/zimota-eway-ride-elec/3.jpg"],
            price: 2000,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 400,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 30,
                autonomie: 40,
                alimentation: "Batterie 48V 12Ah",
                freinage: "Tambour / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "Swing",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/zimotamotor/swing/1.jpg", "./img/models/zimotamotor/swing/2.jpg", "./img/models/zimotamotor/swing/3.jpg", "./img/models/zimotamotor/swing/4.jpg"],
            price: 4900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: 125,
                puissance: 10,
                coupleMaximal: 9.8,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "Evo",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/zimotamotor/zimota-evo/zimota-evo.jpg", "./img/models/zimotamotor/zimota-evo/2.jpg", "./img/models/zimotamotor/zimota-evo/3.jpg"],
            price: 3900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 2T",
                cylindree: 50,
                puissance: 5,
                coupleMaximal: 4.2,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "KEE",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/zimotamotor/zimota-kee/1.jpg", "./img/models/zimotamotor/zimota-kee/2.jpg", "./img/models/zimotamotor/zimota-kee/3.jpg", "./img/models/zimotamotor/zimota-kee/4.jpg"],
            price: 3900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 110,
                puissance: 5,
                coupleMaximal: 8.3,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 85,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "TAPO",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/zimotamotor/zimota-tapo/zimota-tapo.jpg", "./img/models/zimotamotor/zimota-tapo/2.jpg", "./img/models/zimotamotor/zimota-tapo/3.jpg", "./img/models/zimotamotor/zimota-tapo/4.jpg"],
            price: 3950,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 2T",
                cylindree: 50,
                puissance: 4,
                coupleMaximal: 4.2,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "TARGET",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/zimotamotor/zimota-target/zimota-target.jpg", "./img/models/zimotamotor/zimota-target/2.jpg", "./img/models/zimotamotor/zimota-target/3.jpg", "./img/models/zimotamotor/zimota-target/4.jpg"],
            price: 4200,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "SINUS X",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/zimotamotor/zimota-sinus-x/zimota-sinus-x.jpg", "./img/models/zimotamotor/zimota-sinus-x/2.jpg", "./img/models/zimotamotor/zimota-sinus-x/3.jpg", "./img/models/zimotamotor/zimota-sinus-x/4.jpg"],
            price: 4500,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 8.5,
                coupleMaximal: 9.5,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 95,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque hydr/ Tambour",
                systemeFreinage: "",
            }
        },



        {
            name: "RKS",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/zimotamotor/qjmotor-zimota-rks-qjmotor-noir/1.jpg", "./img/models/zimotamotor/qjmotor-zimota-rks-qjmotor-noir/2.jpg", "./img/models/zimotamotor/qjmotor-zimota-rks-qjmotor-noir/3.jpg", "./img/models/zimotamotor/qjmotor-zimota-rks-qjmotor-noir/4.jpg"],
            price: 5600,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: 125,
                puissance: 8.4,
                coupleMaximal: 10,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "NX",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/zimotamotor/zimota-nx/1.jpg", "./img/models/zimotamotor/zimota-nx/2.jpg", "./img/models/zimotamotor/zimota-nx/3.jpg", "./img/models/zimotamotor/zimota-nx/4.jpg"],
            price: 6800,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: 125,
                puissance: 8.4,
                coupleMaximal: 10,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Disque ",
                systemeFreinage: "CBS",
            }
        },
        {
            name: "Fly",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/zimotamotor/fly/zimota-fly-1.jpeg", "./img/models/zimotamotor/fly/zimota-fly-2.jpeg", "./img/models/zimotamotor/fly/zimota-fly-3.jpeg", "./img/models/zimotamotor/fly/zimota-fly-4.jpeg"],
            price: 3250,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: 80,
                puissance: 5,
                coupleMaximal: 4.5,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 60,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "ATOM",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/zimotamotor/zimota-atom/atom1.png", "./img/models/zimotamotor/zimota-atom/atom2.png", "./img/models/zimotamotor/zimota-atom/atom3.png"],
            price: 3850,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: 124,
                puissance: null,
                coupleMaximal: 7.6,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "EAGLE",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/zimotamotor/zimota-eagle/eagle1.png", "./img/models/zimotamotor/zimota-eagle/eagle2.png", "./img/models/zimotamotor/zimota-eagle/eagle3.png", "./img/models/zimotamotor/zimota-eagle/eagle4.png"],
            price: 3900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 2T",
                cylindree: 49,
                puissance: null,
                coupleMaximal: 4.2,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
                systemeFreinage: "",
            }
        },
    ],
    SYM: [
        {
            name: "SYMPHONY SR",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/sym/sym-symphony-sr-125-cbs-125cc-blanc-noir/3.webp", "./img/models/sym/sym-symphony-sr-125-cbs-125cc-blanc-noir/2.webp", "./img/models/sym/sym-symphony-sr-125-cbs-125cc-blanc-noir/sym-symphony-sr-125-cbs-125cc-blanc-noir.jpg"],
            price: 6600,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 8.8,
                coupleMaximal: 10.3,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 99,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque/Disque ",
                systemeFreinage: "CBS",
            }
        },
        {
            name: "SYMPHONY S",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/sym/sym-symphony-s-125-blanc/sym-symphony-s-125-blanc.jpg", "./img/models/sym/sym-symphony-s-125-blanc/2.jpg"],
            price: 6600,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 95,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "SYMPHONY ST",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/sym/sym-symphony-st-125-cbs-e5-injection-noir/sym-symphony-st-125-cbs-e5-injection-noir.jpg", "./img/models/sym/sym-symphony-st-125-cbs-e5-injection-noir/2.png", "./img/models/sym/sym-symphony-st-125-cbs-e5-injection-noir/3.png"],
            price: 8000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 95,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque/Disque ",
                systemeFreinage: "CBS",
            }
        },
        {
            name: "JET 14",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/sym/sym-jet-14-125-ac-e5-noir/sym-jet-14-125-ac-e5-noir.jpg", "./img/models/sym/sym-jet-14-125-ac-e5-noir/2.png", "./img/models/sym/sym-jet-14-125-ac-e5-noir/3.jpg"],
            price: 8700,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 11.3,
                coupleMaximal: 10.7,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 95,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "SYMPHONY ST",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/sym/sym-symphony-st-200-abs-e5-200cc-injection-bleu/sym-symphony-st-200-abs-e5-200cc-injection-bleu.jpg", "./img/models/sym/sym-symphony-st-200-abs-e5-200cc-injection-bleu/2.jpg", "./img/models/sym/sym-symphony-st-200-abs-e5-200cc-injection-bleu/3.webp", "./img/models/sym/sym-symphony-st-200-abs-e5-200cc-injection-bleu/4.jpg"],
            price: 14000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 200,
                puissance: 12.2,
                coupleMaximal: 12.5,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 110,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "JET 4 RX",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/sym/sym-jet-4-rx-124-gris/sym-jet-4-rx-124-gris.jpg", "./img/models/sym/sym-jet-4-rx-124-gris/2.jpg", "./img/models/sym/sym-jet-4-rx-124-gris/3.png", "./img/models/sym/sym-jet-4-rx-124-gris/4.png"],
            price: 6200,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 10.2,
                coupleMaximal: 9.2,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 95,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour ",
                systemeFreinage: "CBS",
            }
        },
        {
            name: "FIDDLE II EFI",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/sym/sym-fiddle-ii-efi/sym-fiddle-ii-efi.jpg", "./img/models/sym/sym-fiddle-ii-efi/2.jpg", "./img/models/sym/sym-fiddle-ii-efi/3.jpeg"],
            price: 5850,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 8,
                coupleMaximal: 8.6,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 90,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },

        {
            name: "FIDDLE 4",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/sym/fiddle4/1.jpg", "./img/models/sym/fiddle4/2.jpg", "./img/models/sym/fiddle4/3.jpg", "./img/models/sym/fiddle4/4.jpg"],
            price: 7200,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: 125,
                puissance: 11.7,
                coupleMaximal: 11,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 105,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "Orbit II",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/sym/orbit2/1.jpg", "./img/models/sym/orbit2/2.webp", "./img/models/sym/orbit2/3.jpeg"],
            price: 4900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: 125,
                puissance: 8.8,
                coupleMaximal: 8.3,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 95,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Tambour ",
                systemeFreinage: "CBS",
            }
        },
        {
            name: "ADX",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/sym/ADX-300CC-injection-ABS/1.jpg", "./img/models/sym/ADX-300CC-injection-ABS/2.jpg", "./img/models/sym/ADX-300CC-injection-ABS/3.jpg", "./img/models/sym/ADX-300CC-injection-ABS/4.jpg"],
            price: 24000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre – 4 T - Injection",
                cylindree: 278,
                puissance: 19,
                coupleMaximal: 26,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 145,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "Husky",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/sym/sym-husky/1.webp", "./img/models/sym/sym-husky/2.png", "./img/models/sym/sym-husky/3.jpeg", "./img/models/sym/sym-husky/4.jpg"],
            price: 16000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps 4 soupapes",
                cylindree: 175,
                puissance: 14.7,
                coupleMaximal: 14.5,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 110,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "JET X",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/sym/jet-x-125/jet-x-125-1.jpeg", "./img/models/sym/jet-x-125/jet-x-125-2.jpg", "./img/models/sym/jet-x-125/jet-x-125-3.jpg", "./img/models/sym/jet-x-125/jet-x-125-4.jpg"],
            price: 9300,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre – 4T – Injection",
                cylindree: 124.6,
                puissance: 12,
                coupleMaximal: null,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "NHX",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/sym/nhx/2.jpg", "./img/models/sym/nhx/3.jpg", "./img/models/sym/nhx/4.jpg", "./img/models/sym/nhx/5.jpg"],
            price: 8200,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre – 4T",
                cylindree: 124,
                puissance: 10,
                coupleMaximal: 9.3,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/ Disque",
                systemeFreinage: "ABS",
            }
        },
    ],
    FORZA_MOTOR_SPORT: [


        {
            name: "Power",
            fuelType: "Thermique",
            category: "Mobylette",
            images: ["./img/models/forza/forza-bbm-forza-compteur-digital-107cc-new-noir/2.jpeg", "./img/models/forza/forza-bbm-forza-compteur-digital-107cc-new-noir/forza-bbm-forza-compteur-digital-107cc-new-noir.jpg"],
            price: 2840,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 107,
                puissance: 6.8,
                coupleMaximal: 7,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "D-MAX",
            fuelType: "Thermique",
            category: "Mobylette",
            images: ["./img/models/forza/forza-slc-d-max-124cc-bleu/2.jpeg", "./img/models/forza/forza-slc-d-max-124cc-bleu/forza-slc-d-max-124cc-bleu.jpg"],
            price: 3050,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 125,
                puissance: 6.8,
                coupleMaximal: 7,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "Power 125 ",
            fuelType: "Thermique",
            category: "Mobylette",
            images: ["./img/models/forza/forza-power-125cc-digital-gris-2/2.jpeg", "./img/models/forza/forza-power-125cc-digital-gris-2/forza-power-125cc-digital-gris-2.jpg"],
            price: 2900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 125,
                puissance: 6.8,
                coupleMaximal: 7,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Tambour",
                systemeFreinage: "",
            }
        },
    ],
    SLC: [
        {
            name: "D-MAX",
            fuelType: "Thermique",
            category: "Mobylette",
            images: ["./img/models/forza/forza-slc-d-max-124cc-bleu/2.jpeg", "./img/models/forza/forza-slc-d-max-124cc-bleu/forza-slc-d-max-124cc-bleu.jpg"],
            price: 3050,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 125,
                puissance: 6.8,
                coupleMaximal: 7,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Tambour/Tambour",
                systemeFreinage: "",
            }
        },


        {
            name: "TANK",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/slc/tank/tank1.png", "./img/models/slc/tank/3.webp", "./img/models/slc/tank/4.webp"],
            price: 5200,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps GY6",
                cylindree: 125,
                puissance: 8.15,
                coupleMaximal: 8,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 80,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disques / Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "AZUR",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/slc/slc-azur-124cc-noir/azur.png", "./img/models/slc/slc-azur-124cc-noir/slc-azur-124cc-noir.jpg", "./img/models/slc/slc-azur-124cc-noir/3.jpeg"],
            price: 5200,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 9,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "CAPPUCINO S",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/slc/Scooter-CAPPUCINO-S-SLC-125-CC-4TEMPS/Scooter-CAPPUCINO-S-SLC-125-CC-4TEMPS.jpg", "./img/models/slc/Scooter-CAPPUCINO-S-SLC-125-CC-4TEMPS/2.jpg", "./img/models/slc/Scooter-CAPPUCINO-S-SLC-125-CC-4TEMPS/3.jpg"],
            price: 5500,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 9.5,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 90,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
    ],
    SENKE: [
        {
            name: "Power 107",
            fuelType: "Thermique",
            category: "Mobylette",
            images: ["./img/models/forza/forza-bbm-forza-compteur-digital-107cc-new-noir/2.jpeg", "./img/models/forza/forza-bbm-forza-compteur-digital-107cc-new-noir/forza-bbm-forza-compteur-digital-107cc-new-noir.jpg"],
            price: 2840,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 107,
                puissance: 6.8,
                coupleMaximal: 7,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Tambour/Tambour",
                systemeFreinage: "",
            }
        },

        {
            name: "SK 110",
            fuelType: "Thermique",
            category: "Mobylette",
            images: ["./img/models/senke/senke-sk-110-107cc-rouge/1.webp", "./img/models/senke/senke-sk-110-107cc-rouge/2.webp", "./img/models/senke/senke-sk-110-107cc-rouge/3.webp", "./img/models/senke/senke-sk-110-107cc-rouge/4.webp"],
            price: 3200,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 107,
                puissance: 7,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 85,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "RAPTOR SK200",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/senke/senke-raptor-200cc/1.jpg", "./img/models/senke/senke-raptor-200cc/2.jpg", "./img/models/senke/senke-raptor-200cc/3.jpg", "./img/models/senke/senke-raptor-200cc/4.jpg"],
            price: 9800,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 200,
                puissance: 16.1,
                coupleMaximal: 11.5,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 125,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Disque ",
                systemeFreinage: "CBS",
            }
        },

        {
            name: "Raptor SK",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/senke/senke-125-cc/1.jpg", "./img/models/senke/senke-125-cc/2.jpg", "./img/models/senke/senke-125-cc/3.jpg", "./img/models/senke/senke-125-cc/4.jpg"],
            price: 6800,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 11,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 120,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "Hunter",
            fuelType: "Thermique",
            category: "Custom",
            images: ["./img/models/senke/hunter/1.jpeg", "./img/models/senke/hunter/2.jpeg", "./img/models/senke/hunter/3.jpeg", "./img/models/senke/hunter/4.jpeg"],
            price: 4800,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 124,
                puissance: 7.2,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 95,
                autonomie: null,
                alimentation: "",
                freinage: "Disque / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "Alien Monster",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/senke/alien-monster/1.jpg", "./img/models/senke/alien-monster/2.jpg", "./img/models/senke/alien-monster/3.jpg"],
            price: 24000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 292,
                puissance: 36,
                coupleMaximal: null,
                refroidissement: "air-liquide",
                tankCapacity: null,
                vitesseMaximale: 140,
                autonomie: null,
                alimentation: "",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },

        {
            name: "Monster ADV",
            fuelType: "Thermique",
            category: "Trail",
            images: ["./img/models/senke/monster-125/1.png", "./img/models/senke/monster-125/2.webp"],
            price: 12500,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 14,
                coupleMaximal: 10.8,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "",
                freinage: "Disque/Disque ",
                systemeFreinage: "",
            }
        },
    ],
    LM: [
        {
            name: "LM ADV",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/lm/lm-adv-125cc-beige/lm-adv-125cc-beige.jpg", "./img/models/lm/lm-adv-125cc-beige/2.jpg", "./img/models/lm/lm-adv-125cc-beige/3.jpg"],
            price: 10350,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 125,
                puissance: 8.3,
                coupleMaximal: 11.2,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 95,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "LA VITA",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/lm/la-vita-125cc-bleu-orange/2.jpg", "./img/models/lm/la-vita-125cc-bleu-orange/la-vita-125cc-bleu-orange.jpg"],
            price: 6000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 125,
                puissance: 6.8,
                coupleMaximal: 7,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 90,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Disque",
                systemeFreinage: "CBS",
            }
        },
        {
            name: "Shadow",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/lm/shadow/shadow1.webp", "./img/models/lm/shadow/shadow2.webp", "./img/models/lm/shadow/shadow3.webp"],
            price: 6900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 125,
                puissance: 15.5,
                coupleMaximal: 12,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 115,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
    ],
    BBM: [
        {
            name: "FZ MAX",
            fuelType: "Thermique",
            category: "Mobylette",
            images: ["./img/models/bbm/bbm-124cc-fz-max-compteur/bbm-124cc-fz-max-compteur-digitale.jpg", "./img/models/bbm/bbm-124cc-fz-max-compteur/2.jpg", "./img/models/bbm/bbm-124cc-fz-max-compteur/3.jpg", "./img/models/bbm/bbm-124cc-fz-max-compteur/4.jpg"],
            price: 2750,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: 125,
                puissance: 6.8,
                coupleMaximal: 6.5,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 110,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "FORMULA 125",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/bbm/formula/formula3.png", "./img/models/bbm/formula/formula4.png", "./img/models/bbm/formula/5.jpeg", "./img/models/bbm/formula/6.jpeg"],
            price: 5000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: 125,
                puissance: 10,
                coupleMaximal: 6.5,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "FORMULA 50",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/bbm/formula50/bbm-formula-1.webp", "./img/models/bbm/formula50/bbm-formula-2.webp", "./img/models/bbm/formula50/bbm-formula-3.webp", "./img/models/bbm/formula50/bbm-formula-4.webp"],
            price: 3780,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: 50,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "TREVIS",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/bbm/trevis/3.webp", "./img/models/bbm/trevis/1.jpg", "./img/models/bbm/trevis/2.webp", "./img/models/bbm/trevis/4.webp"],
            price: 4700,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: 125,
                puissance: 8.15,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 105,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "LONGJIA EASY MAX ",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/bbm/longjia/longjia-easy-max.png", "./img/models/bbm/longjia/3.jpeg", "./img/models/bbm/longjia/4.jpeg", "./img/models/bbm/longjia/2.jpeg"],
            price: 6000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: 125,
                puissance: 10,
                coupleMaximal: 7,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
    ],
    DAYUN: [
        {
            name: "Cruiser",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/dayun/cruiser/crueser1.png", "./img/models/dayun/cruiser/cruiser2.png", "./img/models/dayun/cruiser/crueser3.jpg", "./img/models/dayun/cruiser/crueser4.jpg"],
            price: null,
            currency: "DT", // En arrivage,
            specs: {
                typeMoteur: "Bicylindre 4 temps",
                cylindree: 250,
                puissance: 26,
                coupleMaximal: "21,5 Nm",
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 120,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Doube disque Av/AR disque ",
                systemeFreinage: "ABS",
            }
        },

        {
            name: "DREAM",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/dayun/dayun-sniper-slc-noir/dream1.png", "./img/models/dayun/dayun-sniper-slc-noir/dayun-dream-slc-noir.png"],
            price: 4500,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "SNIPER",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/dayun/dayun-sniper-slc-blanc/dayun-sniper-slc-blanc.jpg", "./img/models/dayun/dayun-sniper-slc-blanc/2.jpg", "./img/models/dayun/dayun-sniper-slc-blanc/3.jpg"],
            price: 5200,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: 125,
                puissance: 8.15,
                coupleMaximal: 9,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 90,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "DY125T",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/dayun/dayun-dy125t-bleu/dayun-dy125t-bleu.jpg", "./img/models/dayun/dayun-dy125t-bleu/2.jpg"],
            price: 4570,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "Kimbo",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/dayun/dayun-dy124-gris/dayun-dy124-gris.jpg", "./img/models/dayun/dayun-dy124-gris/2.jpg"],
            price: 4260,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },

        {
            name: "Sonic",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/dayun/sonic/1.png", "./img/models/dayun/sonic/2.png", "./img/models/dayun/sonic/3.png"],
            price: 3000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 2 temps",
                cylindree: 49,
                puissance: 4,
                coupleMaximal: 8.5,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 50,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Tambour / Tambour",
                systemeFreinage: "",
            }
        },

        {
            name: "Flora",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/dayun/flora/1.jpeg", "./img/models/dayun/flora/2.jpeg", "./img/models/dayun/flora/3.jpeg", "./img/models/dayun/flora/4.jpeg"],
            price: 4900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4 temps",
                cylindree: 125,
                puissance: 7.3,
                coupleMaximal: 8.5,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 105,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
    ],
    NOVAGO: [
        {
            name: "Tricycle SWING",
            fuelType: "Electrique",
            category: "Tricycle",
            images: ["./img/models/novago/NOVAGO-TRICITY/2.png", "./img/models/novago/novago-swing-bleu/novago-swing-bleu.jpg"],
            price: 6200,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 2400,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 60,
                autonomie: 100,
                alimentation: "",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "PIKA",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/novago/novago-pika-blanc-2/2.jpg", "./img/models/novago/novago-pika-blanc-2/scooter-Électrique-novago-pika-blanc-2.jpg"],
            price: 3300,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 800,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 40,
                autonomie: 50,
                alimentation: "",
                freinage: "Double Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "TIGER 140",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/novago/NOVAGO-TIGER-140/2.jpg", "./img/models/novago/NOVAGO-TIGER-140/1.jpg", "./img/models/novago/NOVAGO-TIGER-140/3.jpg"],
            price: 6600,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1500,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 60,
                autonomie: 140,
                alimentation: "2 X Lithium Fer 60 volt 30 AH",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "TIGER 70",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/novago/NOVAGO-TIGER-70/2.jpg", "./img/models/novago/NOVAGO-TIGER-70/3.jpg", "./img/models/novago/NOVAGO-TIGER-70/1.jpg"],
            price: 4900,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1500,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 60,
                autonomie: 70,
                alimentation: "Lithium Fer 60 volt 30 AH",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "TRICITY",
            fuelType: "Electrique",
            category: "Tricycle",
            images: ["./img/models/novago/NOVAGO-TRICITY/2.jpg", "./img/models/novago/NOVAGO-TRICITY/3.jpg", "./img/models/novago/NOVAGO-TRICITY/1.jpg", "./img/models/novago/NOVAGO-TRICITY/4.jpg"],
            price: 5300,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 800,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 30,
                autonomie: 60,
                alimentation: "Lithium Fer 60 volt 30 AH",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "LUNA 70",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/novago/NOVAGO-LUNA-70/2.jpg", "./img/models/novago/NOVAGO-LUNA-70/3.jpg", "./img/models/novago/NOVAGO-LUNA-70/1.jpg", "./img/models/novago/NOVAGO-LUNA-70/4.jpg"],
            price: 4200,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1500,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 55,
                autonomie: 70,
                alimentation: "Lithium Fer 60 volt 30 AH",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "LIBERTA",
            fuelType: "Electrique",
            category: "Tricycle",
            images: ["./img/models/novago/liberta/liberta1.webp"],
            price: 4900,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: null,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: 40,
                alimentation: "",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
    ],
    KYMCO: [
        {
            name: "People S",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/kymco/kymco-people-s-125i-abs/kymco-people-s-125i-abs.jpg", "./img/models/kymco/kymco-people-s-125i-abs/2.jfif", "./img/models/kymco/kymco-people-s-125i-abs/3.jpg", "./img/models/kymco/kymco-people-s-125i-abs/4.png"],
            price: 10600,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 125,
                puissance: "8,3 Kw",
                coupleMaximal: "10 Nm",
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: "",
                autonomie: null,
                alimentation: "injection",
                freinage: "Disque/Tambour ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "Dink R 125 Tunnel",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/kymco/kymco-drink-r-125-tunnel/kymco-drink-r-125-tunnel.jpg", "./img/models/kymco/kymco-drink-r-125-tunnel/2.jpg", "./img/models/kymco/kymco-drink-r-125-tunnel/3.png", "./img/models/kymco/kymco-drink-r-125-tunnel/4.jpeg"],
            price: 11700,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 125,
                puissance: 10.8,
                coupleMaximal: 10.6,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Injection",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
    ],
    UNISCOOT: [
        {
            name: "TIGER",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/uniscoot/uniscoot-tiger-125cc-gris/uniscoot-tiger-125cc-gris.jpg", "./img/models/uniscoot/uniscoot-tiger-125cc-gris/2.webp"],
            price: 4200,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 10,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 140,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "TMAX+",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/uniscoot/uniscoot-tmax-125cc-noir-brillant/uniscoot-tmax-125cc-noir-brillant.jpg", "./img/models/uniscoot/uniscoot-tmax-125cc-noir-brillant/2.jpg", "./img/models/uniscoot/uniscoot-tmax-125cc-noir-brillant/3.jpg"],
            price: 4700,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: null,
                coupleMaximal: 4,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 120,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "FX2+ PLUS",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/uniscoot/uniscoot-fx2-plus-125cc-noir-matt/uniscoot-fx2-plus-125cc-noir-matt.jpg", "./img/models/uniscoot/uniscoot-fx2-plus-125cc-noir-matt/2.jpeg", "./img/models/uniscoot/uniscoot-fx2-plus-125cc-noir-matt/3.jpg"],
            price: 4800,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "T6 ZONSEN ",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/uniscoot/uniscoot-zt6-zonsen-124cc-noir/uniscoot-zt6-zonsen-124cc-noir.jpg", "./img/models/uniscoot/uniscoot-zt6-zonsen-124cc-noir/2.jpg"],
            price: 5500,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre PT125, 4 T",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 85,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "Smax Plus",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/uniscoot/uniscoot-smax-plus-cc/1.jpg", "./img/models/uniscoot/uniscoot-smax-plus-cc/2.jpg", "./img/models/uniscoot/uniscoot-smax-plus-cc/3.jpeg"],
            price: 4700,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 T",
                cylindree: 125,
                puissance: 9,
                coupleMaximal: 4,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 110,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque AV / Ferrodo AR",
                systemeFreinage: "",
            }
        },
        {
            name: "V8 intro 125",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/uniscoot/v8-intro/v8-intro-uniscoot-1.jpg", "./img/models/uniscoot/v8-intro/v8-intro-uniscoot-2.jpg", "./img/models/uniscoot/v8-intro/v8-intro-uniscoot-3.jpg"],
            price: 6000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 T",
                cylindree: 125,
                puissance: 10,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 110,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "Wolf",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/uniscoot/wolf/1.jpeg", "./img/models/uniscoot/wolf/2.jpeg", "./img/models/uniscoot/wolf/3.jpeg"],
            price: 3600,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 T",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "",
                freinage: "",
                systemeFreinage: "",
            }
        },
        {
            name: "TIGER 2 ",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/uniscoot/tiger2/5.jpg", "./img/models/uniscoot/tiger2/1.jpg", "./img/models/uniscoot/tiger2/2.jpg", "./img/models/uniscoot/tiger2/3.jpg"],
            price: 4400,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 6.8,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "",
                systemeFreinage: "",
            }
        },
    ],
    ZONTES: [

        {
            name: "703 F",
            fuelType: "Thermique",
            category: "Trail",
            images: ["./img/models/zontes/zontes-703f-2025/2.webp", "./img/models/zontes/zontes-703f-2025/zontes-703f-2025.webp", "./img/models/zontes/zontes-703f-2025/3.jpeg", "./img/models/zontes/zontes-703f-2025/4.webp"],
            price: null,
            specs: {
                typeMoteur: "Trois Cylindres 4T",
                cylindree: 700,
                puissance: 95,
                coupleMaximal: 76,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 200,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "368G ADV",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/zontes/zontes-368g-adv-368cc/zontes-1.jpeg", "./img/models/zontes/zontes-368g-adv-368cc/zontes-2.jpeg", "./img/models/zontes/zontes-368g-adv-368cc/zontes-3.jpeg", "./img/models/zontes/zontes-368g-adv-368cc/zontes-4.jpeg"],
            price: null,
            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: 368,
                puissance: 38,
                coupleMaximal: 40,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 140,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
    ],
    YADEA: [
        {
            name: "E8S",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/yadea/scooter-electrique-yadea-e8s-3000w-bleu/scooter-electrique-yadea-e8s-3000w-bleu.jpg", "./img/models/yadea/scooter-electrique-yadea-e8s-3000w-bleu/scooter-electrique-yadea-e8s-3000w-blanc.jpg"],
            price: 6000,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 3000,
                coupleMaximal: 140,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 60,
                autonomie: 100,
                alimentation: "Batterie Graphène 72V 38Ah",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "EPOC",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/yadea/yadea-epoc-2000w/1.jpg", "./img/models/yadea/yadea-epoc-2000w/2.jpg", "./img/models/yadea/yadea-epoc-2000w/3.jpg", "./img/models/yadea/yadea-epoc-2000w/4.jpg"],
            price: 6500,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 2000,
                coupleMaximal: 150,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 70,
                autonomie: 100,
                alimentation: "Batterie Graphène TTFAR 72V 38Ah",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
    ],
    SANYA: [
        {
            name: "SY 125-9F",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/sanya/sanya-sy-125-9f/sanya-sy-125-9f.jpg", "./img/models/sanya/sanya-sy-125-9f/2.png", "./img/models/sanya/sanya-sy-125-9f/3.png", "./img/models/sanya/sanya-sy-125-9f/4.png"],
            price: 5850,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 10,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            },

        },
        {
            name: "X1000",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/sanya/sanya-x1000/1.jpeg", "./img/models/sanya/sanya-x1000/2.jpeg", "./img/models/sanya/sanya-x1000/3.png"],
            price: 4650,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 110,
                puissance: 2.7,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque AV et AR + frein à main",
                systemeFreinage: "",
            },

        },
        {
            name: "UF",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/sanya/uf-125/2.jpeg", "./img/models/sanya/uf-125/3.jpeg", "./img/models/sanya/uf-125/1.avif"],
            price: 4850,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 10,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 105,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            },

        },
    ],
    KIM: [
        {
            name: "PISTA HR",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/kim/hr/pista-hr.webp", "./img/models/kim/hr/kim-pista-hr-1.webp", "./img/models/kim/hr/kim-pista-hr-2.webp", "./img/models/kim/hr/kim-pista-hr-3.webp"],
            price: 4500,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 110,
                puissance: 6.7,
                coupleMaximal: 6.8,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 90,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },


        {
            name: "POWER SPRING ST",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/power/power-spring-st-125cc-gris-orange/power-spring-st-125cc-gris-orange.jpg", "./img/models/power/power-spring-st-125cc-gris-orange/2.webp"],
            price: 4200,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 105,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "PISTA HR+",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/powerkim/power-kim-scooter-pista-hr-noir-carbone/1.png", "./img/models/powerkim/power-kim-scooter-pista-hr-noir-carbone/2.jpeg", "./img/models/powerkim/power-kim-scooter-pista-hr-noir-carbone/5.jpeg", "./img/models/powerkim/power-kim-scooter-pista-hr-noir-carbone/power-kim-scooter-pista-hr-noir-carbone.jpg"],
            price: 4800,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 6.7,
                coupleMaximal: 6.8,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "GHOST V7",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/power/ghost/ghost1.jpeg", "./img/models/power/ghost/ghost2.jpeg", "./img/models/power/ghost/ghost3.jpeg"],
            price: 5900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 8.15,
                coupleMaximal: 9.5,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Disque",
                systemeFreinage: "CBS",
            }
        },
        {
            name: "Blaster",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/kim/blaster-125i/blaster-1.png", "./img/models/kim/blaster-125i/blaster-2.png", "./img/models/kim/blaster-125i/blaster-125i-1.jpg", "./img/models/kim/blaster-125i/blaster-125i-2.jpg"],
            price: 6900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 11,
                coupleMaximal: null,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 105,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque/Disque",
                systemeFreinage: "CBS",
            }
        },

    ],
    QJMOTOR: [
        {
            name: "CBS 125 ",
            fuelType: "Thermique",
            category: "Custom",
            images: ["./img/models/qjmotor/qjmotor-zimota-superlight-qjmotor-cbs-noir/qjmotor-zimota-superlight-qjmotor-cbs-noir.jpg", "./img/models/qjmotor/qjmotor-zimota-superlight-qjmotor-cbs-noir/2.jpg", "./img/models/qjmotor/qjmotor-zimota-superlight-qjmotor-cbs-noir/3.jpg", "./img/models/qjmotor/qjmotor-zimota-superlight-qjmotor-cbs-noir/4.jpg"],
            price: 7500,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 10.6,
                coupleMaximal: 8.9,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "SRK 125 S",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/qjmotor/qjmotor-zimota-srk-125-s-noir-injection/qjmotor-zimota-srk-125-s-noir-injection.jpg", "./img/models/qjmotor/qjmotor-zimota-srk-125-s-noir-injection/2.webp"],
            price: 11000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 125,
                puissance: 15,
                coupleMaximal: 12,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 110,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
    ],
    WOLF: [
        {
            name: "VERO",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/wolf/wolf-vero-vert-clair/1.png", "./img/models/wolf/wolf-vero-vert-clair/2.png", "./img/models/wolf/wolf-vero-vert-clair/3.png", "./img/models/wolf/wolf-vero-vert-clair/4.png"],
            price: 4200,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1000,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 40,
                autonomie: 50,
                alimentation: "Batterie plomb 60V 20Ah",
                freinage: "Tambour / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "WOLF 1000",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/wolf/wolf-vero-noir/wolf2.png", "./img/models/wolf/wolf-vero-noir/wolf1.png", "./img/models/wolf/wolf-vero-noir/3.png"],
            price: 3800,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1000,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 40,
                autonomie: 50,
                alimentation: "Batterie plomb 60V 20Ah",
                freinage: "Tambour / Tambour",
                systemeFreinage: "",
            }
        },

    ],
    FIRST: [
        {
            name: "Tricycle 150",
            fuelType: "Thermique",
            category: "Tricycle",
            images: ["./img/models/mistral/tricycle/tricycle.jpg"],
            price: 8000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: 150,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "",
                freinage: "Tambour/Tambour ",
                systemeFreinage: "",
            }
        },

        {
            name: "New MAX 124",
            fuelType: "Thermique",
            category: "Mobylette",
            images: ["./img/models/first/new-max/forza-newmax-2026-1.webp", "./img/models/first/new-max/forza-newmax-2026-2.webp", "./img/models/first/new-max/forza-newmax-2026-3.webp"],
            price: 2850,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 124,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "",
                systemeFreinage: "",
            }
        },
        {
            name: "New MAX 107",
            fuelType: "Thermique",
            category: "Mobylette",
            images: ["./img/models/first/new-max/forza-newmax-2026-3.webp", "./img/models/first/new-max/forza-newmax-2026-2.webp", "./img/models/first/new-max/forza-newmax-2026-1.webp"],
            price: 2850,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 107,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "",
                systemeFreinage: "",
            }
        },
        {
            name: "Jialing VIPER",
            fuelType: "Thermique",
            category: "Mobylette",
            images: ["./img/models/ms/viper/1.jpeg", "./img/models/ms/viper/2.jpeg"],
            price: 2900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 124,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "COSTA",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/ms/ms-first-costa-gris/ms-first-costa-gris.jpg", "./img/models/ms/ms-first-costa-gris/2.jpg"],
            price: 3700,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 2 temps",
                cylindree: 50,
                puissance: null,
                coupleMaximal: 4,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 75,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },

    ],

    KAYCO: [
        {
            name: "Young Graduates",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/kayco/kayco/kayco.jpg", "./img/models/kayco/kayco/2.webp", "./img/models/kayco/kayco/3.jpg", "./img/models/kayco/kayco/4webp.webp"],
            price: 4500,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 4000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: 70,
                alimentation: "",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "Freelancers",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/kayco/kayco-noir/kayco-noir.jpg", "./img/models/kayco/kayco-noir/2.webp", "./img/models/kayco/kayco-noir/3.webp", "./img/models/kayco/kayco-noir/4.webp"],
            price: 5900,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 4000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: 120,
                alimentation: "",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "Delivery Professionals",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/kayco/kayco-rouge/kayco-rouge.jpg", "./img/models/kayco/kayco-rouge/2.webp", "./img/models/kayco/kayco-rouge/3.webp", "./img/models/kayco/kayco-rouge/4.webp"],
            price: 7200,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 4000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: 240,
                alimentation: "",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
    ],
    GOLD: [
        {
            name: "R9",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/goldmotors/gold-motors-R9-bleu/1.png", "./img/models/goldmotors/gold-motors-R9-bleu/2.png", "./img/models/goldmotors/gold-motors-R9-bleu/3.png", "./img/models/goldmotors/gold-motors-R9-bleu/4.jpeg"],
            price: 5200,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 125,
                puissance: 8.15,
                coupleMaximal: 9.5,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 85,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "Moto Gold ",
            fuelType: "Thermique",
            category: "Mobylette",
            images: ["./img/models/goldmotors/gold-motors-124cc-compteur-digital/2.png", "./img/models/goldmotors/gold-motors-124cc-compteur-digital/3.webp", "./img/models/goldmotors/gold-motors-124cc-compteur-digital/4.webp", "./img/models/goldmotors/gold-motors-124cc-compteur-digital/5.webp"],
            price: 3270,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 125,
                puissance: 8.15,
                coupleMaximal: 6.5,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 110,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
    ],
    XTF: [
        {
            name: "DRAGON",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/xtf/xtf-dragon-110-noir/xtf-dragon-110-noir.jpg", "./img/models/xtf/xtf-dragon-110-noir/2.jpg", "./img/models/xtf/xtf-dragon-110-noir/3.jpg", "./img/models/xtf/xtf-dragon-110-noir/4.jpg"],
            price: 3500,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre, 4T",
                cylindree: 110,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 90,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "Coccinelle",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/xtf/XTF-Coccinelle-49cc/XTF-Coccinelle-49cc-1.jpg", "./img/models/xtf/XTF-Coccinelle-49cc/XTF-Coccinelle-49cc-2.jpg", "./img/models/xtf/XTF-Coccinelle-49cc/XTF-Coccinelle-49cc-3.jpg", "./img/models/xtf/XTF-Coccinelle-49cc/XTF-Coccinelle-49cc-4.jpg"],
            price: 4000,
            currency: "DT",

            specs: {
                typeMoteur: "monocylindre 2 temps",
                cylindree: 49,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "",
                freinage: "Disque / Tambour",
                systemeFreinage: "",
            }
        },
    ],
    FTM: [
        {
            name: "Jialing Future STAR",
            fuelType: "Thermique",
            category: "Mobylette",
            images: ["./img/models/ftm/ftm-jialing-future-star-110cc-rouge/ftm-jialing-future-star-110cc-rouge.jpg", "./img/models/ftm/ftm-jialing-future-star-110cc-rouge/2.jpg"],
            price: 3400,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 110,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "Korak",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/ftm/ftm-korak-noir/ftm-korak-noir.jpg", "./img/models/ftm/ftm-korak-noir/2.jpeg", "./img/models/ftm/ftm-korak-noir/3.jfif"],
            price: 3500,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 110,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
    ],
    LVNENG: [
        {
            name: "LX05",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/lvneng/lvneng-lx05-49cc-vert/lvneng-lx05-49cc-vert.jpg", "./img/models/lvneng/lvneng-lx05-49cc-vert/2.png", "./img/models/lvneng/lvneng-lx05-49cc-vert/3.png", "./img/models/lvneng/lvneng-lx05-49cc-vert/4.png"],
            price: 5700,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 2000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: 60,
                alimentation: "",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "NCS GENUIS",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/lvneng/lvneng-ncs-genius-beige-marron/lvneng-ncs-genius-beige-marron.jpg", "./img/models/lvneng/lvneng-ncs-genius-beige-marron/2.png", "./img/models/lvneng/lvneng-ncs-genius-beige-marron/3.png", "./img/models/lvneng/lvneng-ncs-genius-beige-marron/4.png"],
            price: 7300,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 2000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 60,
                autonomie: 80,
                alimentation: "",
                freinage: "Double Disque/Double Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "LX08",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/lvneng/lvneng-lx08/3.jpg", "./img/models/lvneng/lvneng-lx08/1.jpg", "./img/models/lvneng/lvneng-lx08/2.jpg"],
            price: 6290,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: 49,
                puissance: 2030,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 60,
                autonomie: 50,
                alimentation: "",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },
    ],
    "E RIDER": [
        {
            name: "E-FLASH",
            fuelType: "Electrique",
            category: "Roadster",
            images: ["./img/models/eflash/2000-watts-blanc/scooter-electrique-e-flash-2000-watts-blanc-rouge-n.jpg", "./img/models/eflash/2000-watts-blanc/2.jpeg"],
            price: 6600,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 2000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 90,
                autonomie: 90,
                alimentation: "",
                freinage: "",
                systemeFreinage: "",
            }
        },
        {
            name: "E-CLASSIC",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/erider/e-classic-1200-watts/ecoride-classic.png", "./img/models/erider/e-classic-1200-watts/scooter-_lectrique-e-rider-e-classic-1200-watts---rouge.jpg"],
            price: 5200,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1200,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 60,
                autonomie: 70,
                alimentation: "",
                freinage: "",
                systemeFreinage: "",
            }
        },
        {
            name: "E-TECH",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/erider/e-tech-1200-watts/etech.png", "./img/models/erider/e-tech-1200-watts/scooter-_lectrique-e-rider-e-tech-1200-watts---bleu.jpg"],
            price: 4180,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1200,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 59,
                autonomie: 70,
                alimentation: "",
                freinage: "",
                systemeFreinage: "",
            }
        },
        {
            name: "E-Power",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/erider/e-power-1200w/eride2.png", "./img/models/erider/e-power-1200w/scooter-Électrique-e-rider-e-power-1200w-rouge.jpg"],
            price: 4580,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1200,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 60,
                autonomie: 80,
                alimentation: "",
                freinage: "",
                systemeFreinage: "",
            }
        },
        {
            name: "E-eco",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/erider/e-eco-1000w-blanc/eride1.png", "./img/models/erider/e-eco-1000w-blanc/scooter-Électrique-e-rider-e-eco-1000w-blanc.jpg"],
            price: 3680,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 50,
                autonomie: 50,
                alimentation: "",
                freinage: "",
                systemeFreinage: "",
            }
        },
    ],
    LIFAN: [
        {
            name: "Glow",
            fuelType: "Thermique",
            category: "Roadster",
            images: ["./img/models/lifan/LIFAN-Motocycle-Glow-100S-LF110-3S/2.jpeg", "./img/models/lifan/LIFAN-Motocycle-Glow-100S-LF110-3S/LIFAN-Motocycle-Glow-100S-LF110-3S.jpg"],
            price: 3860,
            currency: "DT",

            specs: {
                typeMoteur: "Monocilyndre, 4 temps",
                cylindree: 100,
                puissance: 8.15,
                coupleMaximal: 7,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque/Tambour",
                systemeFreinage: "",
            }
        },
    ],
    WATTGO: [
        {
            name: "Wgoo2",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/wattgo/Wattgo-Wgoo/3.jpg", "./img/models/wattgo/Wattgo-Wgoo/2.jpg", "./img/models/wattgo/Wattgo-Wgoo/1.jpg"],
            price: 2100,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 350,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 35,
                autonomie: 60,
                alimentation: "Lithium 25 Ah",
                freinage: "Tambour / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "WG009",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/wattgo/scooter-electrique-wattgo-wg9900-500w-beige-hjnkjsd/scooter-electrique-wattgo-wg9900-500w-beige-hjnkjsd.jpg", "./img/models/wattgo/scooter-electrique-wattgo-wg9900-500w-beige-hjnkjsd/2.jpg", "./img/models/wattgo/scooter-electrique-wattgo-wg9900-500w-beige-hjnkjsd/3.jpg"],
            price: 2640,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 500,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 40,
                autonomie: 55,
                alimentation: "Batterie plomb 48V 20Ah",
                freinage: "Tambour / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "Wg017",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/wattgo/Wattgo-Wg017/1.jpg", "./img/models/wattgo/Wattgo-Wg017/2.jpg"],
            price: 3500,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 50,
                autonomie: 60,
                alimentation: "Lithium 20 Ah",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "Wg016",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/wattgo/Wattgo-Wg016/1.jpg", "./img/models/wattgo/Wattgo-Wg016/2.jpg", "./img/models/wattgo/Wattgo-Wg016/3.jpg"],
            price: 3300,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 50,
                autonomie: 60,
                alimentation: "Lithium 20 Ah",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "Wgoo2",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/wattgo/Wattgo-Wgoo/1.jpg", "./img/models/wattgo/Wattgo-Wgoo/2.jpg", "./img/models/wattgo/Wattgo-Wgoo/3.jpg"],
            price: 1800,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 350,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 35,
                autonomie: 35,
                alimentation: "Lithium 25 Ah",
                freinage: "Tambour / Tambour",
                systemeFreinage: "",
            }
        },

    ],

    VIGO: [

        {
            name: "SPECTRE",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/vigo/specter/spectre.png", "./img/models/vigo/specter/specter.png", "./img/models/vigo/loop/vigo3.png"],
            price: 7600,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 2000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 65,
                autonomie: 85,
                alimentation: "Batterie Life P04",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "LOOP 55",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/vigo/loop/loop55.png", "./img/models/vigo/loop/vigo1.png", "./img/models/vigo/loop/vigo2.png"],
            price: 4600,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: 55,
                alimentation: "Batterie Life P04",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "LOOP 75",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/vigo/loop/loop.png", "./img/models/vigo/loop/vigo1.png", "./img/models/vigo/loop/vigo2.png"],
            price: 5100,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1500,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 50,
                autonomie: 75,
                alimentation: "Batterie Life P04",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },

    ],
    KEREN: [
        {
            name: "Greek",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/keren/motor-group/keren-greek.jpeg", "./img/models/keren/motor-group/3.png"],
            price: 4900,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1800,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 70,
                autonomie: 90,
                alimentation: "",
                freinage: "",
                systemeFreinage: "",
            }
        },
        {
            name: "U-BE",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/keren/ube/keren-ube.jpeg", "./img/models/keren/ube/1.jpg"],
            price: 2990,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1200,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 55,
                autonomie: 70,
                alimentation: "Lithium-ion BMS",
                freinage: "",
                systemeFreinage: "",
            }
        },
        {
            name: "U-2",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/keren/u2/keren-u2-1.jpeg", "./img/models/keren/u2/keren-u2-2.jpeg", "./img/models/keren/u2/keren-u2-3.jpeg", "./img/models/keren/u2/2.png",],
            price: 3900,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1200,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 70,
                autonomie: 90,
                alimentation: "Lithium-ion 70v",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
    ],
    LETBE: [
        {
            name: "NEON",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/letbe/LETBE-NEON-125/moora1.jpg", "./img/models/letbe/LETBE-NEON-125/moora2.jpg", "./img/models/letbe/LETBE-NEON-125/moora3.jpg", "./img/models/letbe/LETBE-NEON-125/moora4.jpg"],
            price: 5900,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: 125,
                puissance: 8.5,
                coupleMaximal: 9.4,
                refroidissement: "Air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Injection électronique Bosch",
                freinage: "Disque/Disque ",
                systemeFreinage: "ABS",
            }
        },
    ],
    TAILG: [
        {
            name: "Bloom",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/slc/bloom/1.webp", "./img/models/slc/bloom/2.webp"],
            price: 5000,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 2000,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 60,
                autonomie: 90,
                alimentation: "Batterie Graphène Lead Acid 72V 38Ah",
                freinage: "Disques hydrauliques AV/AR",
                systemeFreinage: "",
            }
        },
        {
            name: "STAR",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/tailg/star/3.png", "./img/models/tailg/star/2.jpg"],
            price: 4500,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1200,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 60,
                autonomie: 60,
                alimentation: "Lithium 48v",
                freinage: "Disque/Disque",
                systemeFreinage: "",
            }
        },

        {
            name: "Evasion",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/slc/slc-evasion/1.webp", "./img/models/slc/slc-evasion/2.png"],
            price: 6600,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 2000,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 75,
                autonomie: 70,
                alimentation: "Batterie Graphène Acide 72V 35Ah",
                freinage: "Disques AV/AR hydrauliques",
                systemeFreinage: "",
            }
        },

        {
            name: "Pride",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/slc/pride/1.jpeg", "./img/models/slc/pride/2.jpeg"],
            price: 4500,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 2000,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 60,
                autonomie: 90,
                alimentation: "Batterie 72V 38Ah Graphene Lead Acid",
                freinage: "Disques hydrauliques AV/AR",
                systemeFreinage: "",
            }
        },
        {
            name: "Neo",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/slc/neo/1.jpeg", "./img/models/slc/neo/2.jpeg"],
            price: 4500,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 2000,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 60,
                autonomie: 80,
                alimentation: "Batterie 72V 38Ah Graphene Lead Acid",
                freinage: "Disques hydrauliques AV/AR",
                systemeFreinage: "",
            }
        },

    ],
    ECORIDE: [
        {
            name: "ZEN",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/ecoride/ZEN-600-Watts/1.jpg", "./img/models/ecoride/ZEN-600-Watts/2.jpg", "./img/models/ecoride/ZEN-600-Watts/3.jpg", "./img/models/ecoride/ZEN-600-Watts/4.jpg"],
            price: 2000,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 600,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 35,
                autonomie: 35,
                alimentation: "48V 20Ah",
                freinage: "",
                systemeFreinage: "",
            }
        },
        {
            name: "ALPHA",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/ecoride/ALPHA-ROUGE-1000/1.jpg", "./img/models/ecoride/ALPHA-ROUGE-1000/2.jpg"],
            price: 2900,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: 50,
                alimentation: "60V Batterie en Acid",
                freinage: "",
                systemeFreinage: "",
            }
        },
    ],
    GSM: [
        {
            name: "BWX 125",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/gsm/GSM-BWX-125-cc/gsm-bwx-125-cc-1.png", "./img/models/gsm/GSM-BWX-125-cc/gsm-bwx-125-cc-2.webp", "./img/models/gsm/GSM-BWX-125-cc/gsm-bwx-125-cc-3.webp", "./img/models/gsm/GSM-BWX-125-cc/gsm-bwx-125-cc-4.webp"],
            price: 5000,
            currency: "DT",

            specs: {
                typeMoteur: "monocylindre 4 temps",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 90,
                autonomie: null,
                alimentation: "Elèctrique CDI",
                freinage: "Disques / Disques",
                systemeFreinage: "",
            }
        },
        {
            name: "MBX 125",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/gsm/mbx/mbx1.webp", "./img/models/gsm/mbx/mbx2.webp", "./img/models/gsm/mbx/mbx3.webp", "./img/models/gsm/mbx/mbx4.webp"],
            price: 6000,
            currency: "DT",

            specs: {
                typeMoteur: "monocylindre 4 temps",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 90,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disques / Disques ",
                systemeFreinage: "CBS",
            }
        },
        {
            name: "MOBSTER",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/gsm/mobster/mobster1.webp", "./img/models/gsm/mobster/mobster2.webp", "./img/models/gsm/mobster/mobster3.webp", "./img/models/gsm/mobster/mobster4.webp"],
            price: 5300,
            currency: "DT",

            specs: {
                typeMoteur: "monocylindre 4 temps",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 90,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disques / Disques ",
                systemeFreinage: "CBS",
            }
        },
        {
            name: "Tennis",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/gsm/tennis/tennis3.webp", "./img/models/gsm/tennis/tennis2.webp", "./img/models/gsm/tennis/tennis1.webp", "./img/models/gsm/tennis/tennis4.webp"],
            price: 5300,
            currency: "DT",

            specs: {
                typeMoteur: "monocylindre 4 temps",
                cylindree: 125,
                puissance: 12.5,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 95,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disques / Disques ",
                systemeFreinage: "CBS",
            }
        },

    ],
    HAOJIN: [
        {
            name: "Lyra",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/haojin/lyra/lyra-1.jpeg", "./img/models/haojin/lyra/lyra-2.jpeg", "./img/models/haojin/lyra/lyra-3.jpeg", "./img/models/haojin/lyra/lyra-4.jpeg"],
            price: null,
            currency: "DT", // En arrivage,
            specs: {
                typeMoteur: "monocylindre 4 temps",
                cylindree: 110,
                puissance: 10,
                coupleMaximal: 14,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur CDI",
                freinage: "Disques / Tambour",
                systemeFreinage: "",
            }
        },

    ],
    SMT: [
        {
            name: "Thunder",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/smt/thunder/1.jpg", "./img/models/smt/thunder/2.jpg", "./img/models/smt/thunder/3.jpg", "./img/models/smt/thunder/4.jpg"],
            price: 5800,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4T",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Disque",
                systemeFreinage: "",
            }
        },
        {
            name: "Dolce",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/smt/dolce/dolce-1.jpeg"],
            price: 6000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: 125,
                puissance: null,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "Disques / Disques",
                systemeFreinage: "",
            }
        },

    ],
    CITYBIKE: [

        {
            name: "City Bike 4000",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/citybike/City-Bike-125CC-4000W/1.jpg", "./img/models/citybike/City-Bike-125CC-4000W/2.jpg"],
            price: 7500,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 4000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 75,
                autonomie: 60,
                alimentation: "Lithium-Ion 72V 40Ah",
                freinage: "Disques Hydraulique",
                systemeFreinage: "",
            }
        },
        {
            name: "City Bike 3000",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/citybike/City-Bike-50CC-3000W/1.jpg", "./img/models/citybike/City-Bike-50CC-3000W/2.jpg", "./img/models/citybike/City-Bike-50CC-3000W/3.jpg", "./img/models/citybike/City-Bike-50CC-3000W/4.jpg"],
            price: 6900,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 3000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: 45,
                alimentation: "Lithium-Ion 60V 23.4 Ah",
                freinage: "Disques Hydraulique",
                systemeFreinage: "",
            }
        },
        {
            name: "City Bike 2000",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/citybike/City-Bike-50CC-2000W/1.jpg", "./img/models/citybike/City-Bike-50CC-2000W/2.jpg"],
            price: 5300,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 2000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: 45,
                alimentation: "Lithium-Ion 60V 26Ah",
                freinage: "Disques Hydraulique",
                systemeFreinage: "",
            }
        },
    ],
    AIMA: [
        {
            name: "AIMA Q5",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/aima/aima-q5/aima-q5-1.jpg", "./img/models/aima/aima-q5/aima-q5-2.jpg", "./img/models/aima/aima-q5/aima-q5-3.jpg", "./img/models/aima/aima-q5/aima-q5-4.jpg"],
            price: 4000,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 800,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: 70,
                alimentation: "",
                freinage: "Disques / Disques",
                systemeFreinage: "",
            }
        },
        {
            name: "Liberty",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/aima/one/aima1.webp", "./img/models/aima/one/aima2.webp", "./img/models/aima/one/aima3.png", "./img/models/aima/one/aima4.png"],
            price: 4600,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1500,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 50,
                autonomie: 80,
                alimentation: "64V 30Ah",
                freinage: "Disques / Disques",
                systemeFreinage: "",
            }
        },

    ],
    MOTOLUX: [
        {
            name: "City Coco 3 roues",
            fuelType: "Electrique",
            category: "Tricycle",
            images: ["./img/models/motolux/city-coco/city-coco-3.webp", "./img/models/motolux/city-coco/city-coco-1.jpg", "./img/models/motolux/city-coco/city-coco-2.jpg", "./img/models/motolux/city-coco/city-coco-4.webp"],
            price: 5500,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 2000,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: 100,
                alimentation: "Batterie Lithium 60V 20Ah",
                freinage: "",
                systemeFreinage: "",
            }
        },
        {
            name: "ÉMOTOLUX ",
            fuelType: "Electrique",
            category: "Scooter",
            images: ["./img/models/motolux/vespa-15/motolux.png", "./img/models/motolux/vespa-15/2.png"],
            price: 3950,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: 1500,
                coupleMaximal: null,
                refroidissement: null,
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: 55,
                alimentation: " 60v - 24Ah",
                freinage: "Disques / Tambour",
                systemeFreinage: "",
            }
        },

    ],
    PHANTOM: [
        {
            name: "Cuxi II",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/phantom/cuxi/cuxi-1.jpeg", "./img/models/phantom/cuxi/cuxi-2.jpeg", "./img/models/phantom/cuxi/cuxi-3.jpeg"],
            price: 3450,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: 106,
                puissance: 7.2,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
                systemeFreinage: "",
            }
        },
        {
            name: "Phantom Z1",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/phantom/phantom-z1/phantom-z1-1.jpg", "./img/models/phantom/phantom-z1/phantom-z1-2.jpg", "./img/models/phantom/phantom-z1/phantom-z1-3.jpg", "./img/models/phantom/phantom-z1/phantom-z1-4.jpg"],
            price: 6000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: 125,
                puissance: 10,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Tambour",
                systemeFreinage: "CBS",
            }
        },
        {
            name: "CORAL",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/phantom/coral/coral1.png", "./img/models/phantom/coral/coral2.png", "./img/models/phantom/coral/phantom-coral-124-3.jpg", "./img/models/phantom/coral/phantom-coral-124-4.jpg"],
            price: 6000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: 125,
                puissance: 10,
                coupleMaximal: null,
                refroidissement: "A air",
                tankCapacity: null,
                vitesseMaximale: 100,
                autonomie: null,
                alimentation: "Carburateur",
                freinage: "Disque / Tambour ",
                systemeFreinage: "CBS",
            }
        },


    ],
    CFORCE: [
        {
            name: "QUAD CFORCE 450 L",
            fuelType: "Thermique",
            category: "Quad",
            images: ["./img/models/cforce/450l/1.png", "./img/models/cforce/450l/2.png", "./img/models/cforce/450l/3.png", "./img/models/cforce/450l/4.png"],
            price: 35000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps SOHC 4",
                cylindree: 400,
                puissance: 22.8,
                coupleMaximal: 33,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 90,
                autonomie: null,
                alimentation: "Injection électronique EFI Bosch",
                freinage: "4 disques hydrauliques AV/AR",
                systemeFreinage: "",
            }
        },
        {
            name: "QUAD CFORCE 450 S",
            fuelType: "Thermique",
            category: "Quad",
            images: ["./img/models/cforce/450s/1.jpg", "./img/models/cforce/450s/2.webp", "./img/models/cforce/450s/3.webp", "./img/models/cforce/450s/4.webp"],
            price: 28000,
            currency: "DT",

            specs: {
                typeMoteur: "Monocylindre 4 temps SOHC 4",
                cylindree: 400,
                puissance: 28,
                coupleMaximal: 31,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 90,
                autonomie: null,
                alimentation: "Injection électronique EFI Bosch",
                freinage: "Double disque AV / Disque AR",
                systemeFreinage: "",
            }
        },

    ],
    VOGE: [

        {
            name: "SR3",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/voge/sr3/1.png"],
            price: null,
            currency: "DT", // En arrivage,
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: 245,
                puissance: 25.5,
                coupleMaximal: 23,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: null,
                autonomie: null,
                alimentation: "Injection électronique EFI",
                freinage: "Disque /Disque ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "DS 525X",
            fuelType: "Thermique",
            category: "Trail",
            images: ["./img/models/voge/525x/1.jpeg", "./img/models/voge/525x/2.jpeg", "./img/models/voge/525x/3.jpeg", "./img/models/voge/525x/4.jpeg"],
            price: null,
            currency: "DT", // En arrivage,
            specs: {
                typeMoteur: "Bicylindre 4 temps",
                cylindree: 494,
                puissance: 48,
                coupleMaximal: 50.5,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 160,
                autonomie: null,
                alimentation: "",
                freinage: "2 disque AV/disque AR ",
                systemeFreinage: "ABS",
            }
        },

        {
            name: "DS800X Rally",
            fuelType: "Thermique",
            category: "Trail",
            images: ["./img/models/voge/ds800/1.webp", "./img/models/voge/ds800/2.webp", "./img/models/voge/ds800/3.webp", "./img/models/voge/ds800/4.webp"],
            price: null,
            currency: "DT", // En arrivage,
            specs: {
                typeMoteur: "Bicylindre en ligne",
                cylindree: 800,
                puissance: 94,
                coupleMaximal: 81,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 190,
                autonomie: null,
                alimentation: "Injection électronique",
                freinage: "2 disque AV/disque AR ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "SR4 Max",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/voge/sr4max/SR4-Max-black-L.webp", "./img/models/voge/sr4max/SR4-Max-black-F.webp", "./img/models/voge/sr4max/SR4-Max-black-R.webp", "./img/models/voge/sr4max/SR4-Max-black-Re.webp"],
            price: null,
            currency: "DT", // En arrivage,
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: 349.8,
                puissance: 25,
                coupleMaximal: 35,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 127,
                autonomie: null,
                alimentation: "",
                freinage: "Disques / Disques ",
                systemeFreinage: "ABS",
            }
        },
        {
            name: "SR16",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/voge/sr16/1.png", "./img/models/voge/sr16/2.png", "./img/models/voge/sr16/3.png", "./img/models/voge/sr16/4.jpg"],
            price: null,
            currency: "DT", // En arrivage,
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: 125,
                puissance: 10,
                coupleMaximal: 11,
                refroidissement: "",
                tankCapacity: null,
                vitesseMaximale: 97,
                autonomie: null,
                alimentation: "",
                freinage: "disque/disque",
                systemeFreinage: "",
            }
        },
        {
            name: "SR ADV",
            fuelType: "Thermique",
            category: "Scooter",
            images: ["./img/models/voge/sr-adv/1.png", "./img/models/voge/sr-adv/2.png", "./img/models/voge/sr-adv/3.png", "./img/models/voge/sr-adv/4.webp"],
            price: null,
            currency: "DT", // En arrivage,
            specs: {
                typeMoteur: "Monocylindre 4 temps",
                cylindree: 125,
                puissance: 10,
                coupleMaximal: 11,
                refroidissement: "Liquide",
                tankCapacity: null,
                vitesseMaximale: 115,
                autonomie: null,
                alimentation: "",
                freinage: "disque/disque ",
                systemeFreinage: "ABS",
            }
        },


    ],

    RAPSEV: [
        {
            name: "Bange Frigorifique",
            fuelType: "Electrique",
            category: "Tricycle",
            images: ["./img/models/rapsev/tri/rapsev1.webp", "./img/models/rapsev/tri/rapsev2.webp", "./img/models/rapsev/tri/rapsev3.webp", "./img/models/rapsev/tri/rapsev4.webp"],
            price: 25400,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "",
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: 120,
                alimentation: "",
                freinage: "",
                systemeFreinage: "",
            }
        },
        {
            name: "OAK",
            fuelType: "Electrique",
            category: "Tricycle",
            images: ["./img/models/rapsev/oak/1.webp", "./img/models/rapsev/oak/2.png"],
            price: 23800,
            currency: "DT",

            specs: {
                typeMoteur: "Électrique",
                cylindree: null,
                puissance: null,
                coupleMaximal: null,
                refroidissement: "",
                tankCapacity: null,
                vitesseMaximale: 45,
                autonomie: 110,
                alimentation: "",
                freinage: "",
                systemeFreinage: "",
            }
        },


    ],
};

// Données pour les motos d'occasion - Tableau simple sans division par marques
const occasionModelsData = [
    {
        marque: "Ducati",
        name: "Ducati 1100 Panigale V4 S 🇹🇳 modèle 2025 🇹🇳 00KM - chez JETMOTO 🇹🇳 Tunis 🇹🇳 tel-watsap 53685927-26711555",
        fuelType: "Électrique",
        category: "Scooter",
        images: ["./img/occasion/12/1.jpg", "./img/occasion/12/2.jpg", "./img/occasion/12/3.jpg", "./img/occasion/12/4.jpg"],
        price: "",
        currency: "DT",
        specs: {
            kilometrage: "0 km",
            typeMoteur: "V4 Desmosedici Stradale 4 temps,",
            cylindree: "1103 cm³",
            puissance: "220 ch (162 kW)",
            coupleMaximal: "123 Nm",
            refroidissement: "Liquide",
            tankCapacity: null,
            vitesseMaximale: "300 km/h",
            autonomie: null,
            alimentation: "Injection électronique",
            freinage: "Double disque AV / Disque AR Brembo Hypure",
            systemeFreinage: ""
        }
    },
    {
        marque: "KAWASAKI",
        name: "Kawasaki Z900-ABS-00km- modèle 10.2025🇹🇳 chez JETMOTO 🇹🇳 tel 53685927-267115557",
        fuelType: "Électrique",
        category: "Scooter",
        images: ["./img/occasion/11/1.jpg", "./img/occasion/11/2.jpg", "./img/occasion/11/3.jpg", "./img/occasion/11/4.jpg"],
        price: "",
        currency: "DT",
        specs: {
            kilometrage: "0 km",
            typeMoteur: "4 cylindres en ligne 4 temps",
            cylindree: "948 cm³",
            puissance: "125 ch (92 kW)",
            coupleMaximal: "99 Nm",
            refroidissement: "Liquide",
            tankCapacity: null,
            vitesseMaximale: "240 km/h",
            autonomie: null,
            alimentation: "Injection électronique",
            freinage: "Double disque AV / Disque AR ABS",
            systemeFreinage: ""
        }
    },
    {
        marque: "HONDA",
        name: "HONDA.XADV 750 🇹🇳 modèle 10.2025 -00km 🇹🇳 avec carte grise tunisienne 🇹🇳 chez JETMOTO 🇹🇳 tunis 🇹🇳 watsap-tel-53685927-26711555 🇹🇳",
        fuelType: "Électrique",
        category: "Scooter",
        images: ["./img/occasion/13/1.jpg", "./img/occasion/13/2.jpg", "./img/occasion/13/4.jpg"],
        price: "",
        currency: "DT",
        specs: {
            kilometrage: "0 km",
            typeMoteur: "Bicylindre parallèle 4 temps",
            cylindree: "745 cm³",
            puissance: "58,6 ch (43 kW)",
            coupleMaximal: "69 Nm",
            refroidissement: "Liquide",
            tankCapacity: null,
            vitesseMaximale: "160 km/h",
            autonomie: null,
            alimentation: "Injection PGM-FI électronique",
            freinage: "Double disqueAV / Disque AR ABS",
            systemeFreinage: ""
        }
    },
    {
        marque: "BMW",
        name: "BMW-S1000RR-M 🇹🇳 2026-00km - Jet Moto tel 26711555-53685927",
        fuelType: "Électrique",
        category: "Scooter",
        images: ["./img/occasion/9/BMW-S1000RR-M-1.png", "./img/occasion/9/BMW-S1000RR-M-2.jpg", "./img/occasion/9/BMW-S1000RR-M-3.jpg", "./img/occasion/9/BMW-S1000RR-M-4.jpg"],
        price: "",
        currency: "DT",
        specs: {
            kilometrage: "0 km",
            typeMoteur: "4 cylindres en ligne 4 temps",
            cylindree: "999 cm³",
            puissance: "218 ch (160 kW)",
            coupleMaximal: "113 Nm",
            refroidissement: "Liquide",
            tankCapacity: null,
            vitesseMaximale: "314 km/h",
            autonomie: null,
            alimentation: "Injection électronique",
            freinage: "Double disque M AV, disque AR",
            systemeFreinage: ""
        }
    },
    {
        marque: "BMW",
        name: "BMW-GS1300-Adventure-Triple Black 2026-00km - Jet Moto tel 26711555-53685927",
        fuelType: "Électrique",
        category: "Scooter",
        images: ["./img/occasion/10/BMW-GS1300-Adventure-Triple-Black-2.jpg", "./img/occasion/10/BMW-GS1300-Adventure-Triple-Black-1.jpg", "./img/occasion/10/BMW-GS1300-Adventure-Triple-Black-3.jpg", "./img/occasion/10/BMW-GS1300-Adventure-Triple-Black-4.jpg"],
        price: "",
        currency: "DT",
        specs: {
            kilometrage: "0 km",
            typeMoteur: "Boxer bicylindre 4 temps",
            cylindree: "1300 cm³",
            puissance: "145 ch (107 kW)",
            coupleMaximal: "149 Nm",
            refroidissement: "Air/liquide,",
            tankCapacity: null,
            vitesseMaximale: "",
            autonomie: null,
            alimentation: "Injection électronique",
            freinage: "Double disque AV, disque AR avec ABS",
            systemeFreinage: ""
        }
    },
    {
        marque: "YAMAHA",
        name: "YAMAHA  T-MAX 562 Tech-Max - Jet Moto tel 24350274",
        fuelType: "Électrique",
        category: "Scooter",
        images: ["./img/occasion/1/T-MAX-562-Tech-Max.png", "./img/occasion/1/T-MAX-562-Tech-Max-5.jpg", "./img/occasion/1/T-MAX-562-Tech-Max-6.jpg", "./img/occasion/1/T-MAX-562-Tech-Max-7.jpg"],
        price: "",
        currency: "DT",
        specs: {
            kilometrage: "0 km",
            typeMoteur: "Bicylindre en ligne 4 temps",
            cylindree: "562 cm³,",
            puissance: "47 ch (35 kW)",
            coupleMaximal: "55,7 Nm",
            refroidissement: "Liquide",
            tankCapacity: null,
            vitesseMaximale: "Environ 180 km/h",
            autonomie: null,
            alimentation: "Injection Électronique",
            freinage: "Disques hydrauliques (ABS)",
            systemeFreinage: ""
        }
    },

    {
        marque: "YAMAHA",
        name: "YAMAHA-V-max 1700 -modèle 2009 - Jet Moto tel 24350274",
        fuelType: "Électrique",
        category: "Scooter",
        images: ["./img/occasion/3/YAMAHA-V-max-1700-modele-2009-1.png", "./img/occasion/3/YAMAHA-V-max-1700-modele-2009-2.jpg", "./img/occasion/3/YAMAHA-V-max-1700-modele-2009-3.jpg", "./img/occasion/3/YAMAHA-V-max-1700-modele-2009-4.jpg"],
        price: "",
        currency: "DT",
        specs: {
            kilometrage: "54000 km",
            typeMoteur: "V4 4 temps",
            cylindree: "1679 cm³",
            puissance: "106 ch (78 kW)",
            coupleMaximal: "145 Nm,",
            refroidissement: "Liquide",
            tankCapacity: null,
            vitesseMaximale: "",
            autonomie: null,
            alimentation: "Injection électronique",
            freinage: "",
            systemeFreinage: ""
        }
    },


    {
        marque: "YAMAHA",
        name: "YAMAHA-TENERE 700 - Jet Moto tel 26711555-53685927",
        fuelType: "Électrique",
        category: "Scooter",
        images: ["./img/occasion/6/YAMAHA-TENERE-700-1.jpg", "./img/occasion/6/YAMAHA-TENERE-700-2.jpg", "./img/occasion/6/YAMAHA-TENERE-700-3.jpg", "./img/occasion/6/YAMAHA-TENERE-700-4.jpg"],
        price: "",
        currency: "DT",
        specs: {
            kilometrage: "4500 km",
            typeMoteur: "Bicylindre parallèle 4 temps,",
            cylindree: "689 cm³",
            puissance: "73,4 ch (54 kW)",
            coupleMaximal: "68 Nm,",
            refroidissement: "Liquide",
            tankCapacity: null,
            vitesseMaximale: "",
            autonomie: null,
            alimentation: "Injection électronique",
            freinage: "Double disque 282 mm AV, disque 245 mm AR",
            systemeFreinage: ""
        }
    },




];
const videosData = [

    {
        id: 1,
        marque: "Peugeot",
        modele: "Episode 1 : SIMCC - PEUGEOT",
        youtubeId: "lEMR1COHgKQ"
    },


];

// Données de contact des concessionnaires par marque
const dealersContacts = {
    // Guide d'utilisation :
    // - Chaque clé doit correspondre EXACTEMENT au nom de la marque dans la const 'brands'
    // - Propriétés optionnelles : addresses, phones, emails, website, facebook, instagram, youtube, x
    // - Si aucune données n'est remplie pour une marque, la section ne s'affichera pas
    // - Si une propriété est vide ou absent, cette section n'est pas affichée
    // - Ajouter autant d'adresses/phones/emails que nécessaire

    // EXEMPLE ACTIVÉ - Décommentez ou remplacez par vos vraies données :
    "Peugeot": {
        addresses: ["Centre Urbain Nord, Tunis", /*"Avenue secondaire, Sfax"*/],
        phones: ["+216 70 817 066"],
        emails: ["contact@simcc.tn"],
        website: "https://motorsports.simcc.tn/",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "CFMOTO": {
        addresses: ["Rue du Lac Huron, Lac 11053 Tunis, Tunisie", "Av de la république km 14 Ezzahra(GP1) après carrefour Boumhel"],
        phones: ["+216 20 259 491"],
        emails: ["contact@cfmoto.tn"],
        website: "https://cfmoto.tn/",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "PIAGGIO": {
        addresses: ["40 Rue des minéraux (collé à Cash & Carry) Zone industrielle Charguia 1, Tunis, Tunisia"],
        phones: ["+216 51 545 352"],
        emails: ["contact@sodiv.com.tn"],
        website: "https://sodiv.com.tn",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "APRILIA": {
        addresses: ["40 Rue des minéraux (collé à Cash & Carry) Zone industrielle Charguia 1, Tunis, Tunisia"],
        phones: ["+216 51 545 352"],
        emails: ["contact@sodiv.com.tn"],
        website: "https://sodiv.com.tn",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "SENKE": {
        addresses: ["83, Avenue de l'environnement - Borj Louzir 2073 Ariana, Tunisie"],
        phones: ["+216 24 035 035", "+216 95 370 342", "+216 70 688 000"],
        emails: ["contact@mbmotors.tn"],
        website: "https://mb-motors.tn",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "SUZUKI": {
        addresses: ["83, Avenue de l'environnement - Borj Louzir 2073 Ariana, Tunisie"],
        phones: ["+216 24 035 035", "+216 95 370 342", "+216 70 688 000"],
        emails: ["contact@mbmotors.tn"],
        website: "https://mb-motors.tn",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "ZIMOTA": {
        addresses: ["GAID SWASSI SIDIABDLAHMID PRES DE MONOPRIX, Sousse, Tunisia"],
        phones: ["+216 28 400 037"],
        emails: ["contact@ZIMOTA.tn"],
        website: "https://zimota-motor.tn",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "QJMOTOR": {
        addresses: ["GAID SWASSI SIDIABDLAHMID PRES DE MONOPRIX, Sousse, Tunisia"],
        phones: ["+216 28 400 037"],
        emails: ["contact@ZIMOTA.tn"],
        website: "https://zimota-motor.tn",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "VOGE": {
        addresses: ["Av Mohamed el karoui jawhara, Sousse, Tunisia"],
        phones: ["+216 26 898 989 ", "+216 26 860 086"],
        // emails: ["contact@ZIMOTA.tn"],
        // website: "https://zimota-motor.tn",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "SYM": {
        addresses: ["Av Mohamed el karoui jawhara, Sousse, Tunisia"],
        phones: ["+216 26 898 989 ", "+216 26 860 086"],
        // emails: ["contact@ZIMOTA.tn"],
        // website: "https://zimota-motor.tn",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "FIRST": {
        addresses: ["Ben arous, Tunis, Tunisia"],
        phones: ["+216 71 380 253"],
        emails: ["motosstars24@gmail.com"],
        // website: "https://zimota-motor.tn",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "MISTRAL": {
        addresses: ["Ben arous, Tunis, Tunisia"],
        phones: ["+216 71 380 253"],
        emails: ["motosstars24@gmail.com"],
        // website: "https://zimota-motor.tn",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "SLC": {
        // addresses: ["Ben arous, Tunis, Tunisia"],
        phones: ["+216 93 702 800"],
        // emails: ["motosstars24@gmail.com"],
        website: "https://slcmotos.com",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "DAYUN": {
        // addresses: ["Ben arous, Tunis, Tunisia"],
        phones: ["+216 93 702 800"],
        // emails: ["motosstars24@gmail.com"],
        website: "https://slcmotos.com",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "NOVAGO": {
        addresses: ["Boulevard de l'environnement, route de Gabès km 1, Sfax, Tunisia"],
        phones: ["+216 29 954 870"],
        emails: ["info@novago.com.tn"],
        website: "https://novago.com.tn",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "SANYA": {
        addresses: ["Ariana rond point mahmoud l matri"],
        phones: ["+216 23 500 999"],
        emails: ["contact@sanya.tn"],
        website: "https://evocmax.tn",
        // facebook: "https://www.facebook.com/peugeot",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },
    "VIGO": {
        // addresses: ["Ariana rond point mahmoud l matri"],
        phones: ["+216 29 750 876"],
        // emails: ["contact@sanya.tn"],
        // website: "https://evocmax.tn",
        facebook: "https://www.facebook.com/profile.php?id=61580346530716",
        // instagram: "https://www.instagram.com/peugeot",
        // youtube: "https://www.youtube.com/peugeot",
        // x: "https://x.com/peugeot"
    },


};


// =========================================== 
// CAROUSEL SLIDES - Images du slider
// =========================================== 
// Structure : image_desktop est obligatoire, image_mobile est optionnelle
// Si image_mobile n'est pas fournie, image_desktop sera utilisée sur mobile aussi
//
// RÉSOLUTIONS RECOMMANDÉES (objet-fit: contain)
// ============================================
// DESKTOP (>=768px):
//   - Résolution: 1920x700px à 2560x900px
//   - Ratio: 16:5 à 3:1 (landscape large)
//   - Formats: .webp (optimisé), .jpg, .png
//   - Taille fichier: 80-150KB (webp)
//
// MOBILE (<=767px):
//   - Résolution: 375x300px à 768x768px
//   - Ratio: à 1:1 (portrait ou carré adapté)
//   - Formats: .webp (optimisé), .jpg, .png
//   - Taille fichier: 30-60KB (webp)
//
// NOTES:
//   - object-fit: contain assure que l'image entière est visible
//   - Utiliser des images avec espaces négatifs pour laisser de la respirabilité
//   - Pour mobile: préférer ratio plus carré (16:9 ou 4:3)
//   - Pour desktop: ratio plus paysage (16:5 ou plus)
//   - Compresser avec TinyPNG ou ImageOptim avant upload
//   - Tester sur DevTools mobile emulation (375px, 768px, 1024px, 1920px)
//
const carouselSlides = [
    {
        id: 5,
        image_desktop: "./img/slider/simcc/desktop/banner-dektop1.webp",
        image_mobile: "./img/slider/simcc/mobile/banner-mobile1-2.jpeg",
        alt: "Banner slider pista hr 110 cc",
        link: "https://www.facebook.com/SIMCC.Motorsports" // on ajoute null sans virgule sans guillemets pour les images non cliquables
    },
    {
        id: 1,
        image_desktop: "./img/slider/simcc/desktop/banner-dektop2.webp",
        image_mobile: "./img/slider/simcc/mobile/banner-mobile2-2.jpeg", // Optionnel - fallback à image_desktop
        alt: "banner dolce desktop - scooter électrique urbain au design italien",
        link: "https://www.facebook.com/SIMCC.Motorsports"// Optionnel - si null, l'image n'est pas cliquable
    },
    {
        id: 2,
        image_desktop: "./img/slider/simcc/desktop/banner-dektop3.webp",
        image_mobile: "./img/slider/simcc/mobile/banner-mobile3-2.jpeg",
        alt: "Scooter urbain - Technologie moderne",
        link: "https://www.facebook.com/SIMCC.Motorsports"
    },
    {
        id: 3,
        image_desktop: "./img/slider/simcc/desktop/banner-dektop4.webp",
        image_mobile: "./img/slider/simcc/mobile/banner-desktop-4-3.webp",
        alt: "Moto Vespa banière- Confort et performance",
        link: "https://www.facebook.com/SIMCC.Motorsports"
    },
    {
        id: 4,
        image_desktop: "./img/slider/simcc/desktop/banner-dektop5.webp",
        image_mobile: "./img/slider/simcc/mobile/banner-mobile5-2.jpeg",
        alt: "Moto custom - Style rétro",
        link: "https://www.facebook.com/SIMCC.Motorsports"
    }

];
