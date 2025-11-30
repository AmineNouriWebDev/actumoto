// data.js - Données centralisées pour le site
const brands = [
    { name: "Peugeot", logo: "./img/logos/peugeot-motors.jpg" },
    { name: "PIAGGIO", logo: "./img/logos/piaggio.jpg" },
    { name: "APRILIA", logo: "./img/logos/aprilia.jpg" },
    { name: "CFMOTO", logo: "./img/logos/cfmoto.jpg" },
    { name: "ZIMOTA_MOTOR", logo: "./img/logos/zimota.jpg" },
    { name: "QJMOTOR", logo: "./img/logos2/qjmotor.png" },
    { name: "SUZUKI", logo: "./img/logos/suzuki.jpg" },
    { name: "SYM", logo: "./img/logos/sym.jpg" },
    { name: "FORZA_MOTOR_SPORT", logo: "./img/logos2/forza.png" },
    { name: "UNISCOOT", logo: "./img/logos/uniscoot.jpg" },
    { name: "KYMCO", logo: "./img/logos/kymco.jpg" },
    { name: "ZONTES", logo: "./img/logos/zontes.jpg" },
    { name: "FTM", logo: "./img/logos/ftm.jpg" },
    { name: "YADEA", logo: "./img/logos/yadea.jpg" },
    { name: "SLC", logo: "./img/logos/slc.jpg" },
    { name: "SENKE", logo: "./img/logos/senke.jpg" },
    { name: "SANYA", logo: "./img/logos/sanya.jpg" },
    { name: "POWER", logo: "./img/logos/power.jpg" },
    { name: "LM", logo: "./img/logos/lm.jpg" },
    { name: "MS", logo: "./img/logos/ms-moto.png" },
    { name: "WOLF", logo: "./img/logos/wolf.jpg" },
    { name: "E-RIDER", logo: "./img/logos/e-rider.jpg" },
    { name: "NOVAGO", logo: "./img/logos/novago.jpg" },
    { name: "DAYUN", logo: "./img/logos/dayun.jpg" },
    { name: "POWER_KIM", logo: "./img/logos/power-kim.jpg" },
    { name: "KAYCO", logo: "./img/logos/kayco.png" },
    { name: "GOLD_MOTORS", logo: "./img/logos/gold-motors.jpg" },
];

const modelsData = {
    Peugeot: [
        {
            name: "Peugeot pulsion 125 i ABS",
            image: "./img/models/peugeot-pulsion-125.jpg",
            price: "12,850 TND",
            type: "Essence",
            
        },
        {
            name: "PEUGEOT MÉTROPOLIS 400",
            image: "./img/models/peugeot-metropolis-400.jpg",
            price: "52,000 TND",
            type: "Essence",
            
        },
        {
            name: "PEUGEOT XP 400",
            image: "./img/models/peugeot-xp-400.jpg",
            price: "40,000 TND",
            type: "Essence",
            
        },
        {
            name: "PEUGEOT Django 125",
            image: "./img/models/peugeot-django-125.jpg",
            price: "10,900 TND",
            type: "Essence",
            
        },
        {
            name: "PEUGEOT Tweet 125",
            image: "./img/models/peugeot-tweet-125.jpg",
            price: "9,900 TND",
            type: "Essence",
            
        },
        {
            name: "PEUGEOT PM 01 125",
            image: "./img/models/peugeot-pm-01-125.jpg",
            price: "15,500 TND",
            type: "Essence",
            
        },
    ],
    SUZUKI: [
     
        {
            name: "SUZUKI BURGMAN STREET UB125 BLANC 125CC",
            image: "./img/models/suzuki-burgman-street-ub125-blanc.jpg",
            price: "9,449 TND",
            type: "Essence",
            
        },
    ],
    PIAGGIO: [
        {
            name: "Piaggio VESPA VXL 125 cc",
            image: "./img/models/piaggio-vespa-125.jpg",
            price: "10,900 TND",
            type: "Essence",
            
        },
        {
            name: "PIAGGIO VESPA GTS 125 cc",
            image: "./img/models/piaggio-vespa-gts.jpg",
            price: "29,900 TND",
            type: "Essence",
            
        },
       
    ],
       APRILIA: [
        {
            name: "Aprilia sr 125",
            image: "./img/models/piaggio-aprilia-sr-125.jpg",
            price: "8,699 TND",
            type: "Essence",
            
        },
    ],
    CFMOTO: [
        {
            name: "Motocycle CFMOTO 450MT - 450CC",
            image: "./img/models/CFMOTO-450MT.jpg",
            price: "-,-- TND",
            type: "Essence",
            status: "En Arrivage",
        },
    ],
    ZIMOTA_MOTOR: [
        {
            name: "ZIMOTA Evo Blanc / Bleu - Rouge - 49 CC",
            image: "./img/models/zimota-evo.jpg",
            price: "3,899 TND",
            type: "Essence",
            
        },
        {
            name: "Cyclomoteur ZIMOTA KEE 109CC - Rouge",
            image: "./img/models/zimota-kee.jpg",
            price: "3,899 TND",
            type: "Essence",
            
        },
        {
            name: "Scooteur ZIMOTA TAPO 49 CC - Bleu",
            image: "./img/models/zimota-tapo.jpg",
            price: "3,949 TND",
            type: "Essence",
            
        },
        {
            name: "Cyclomoteur ZIMOTA TARGET 125CC - Rouge - Bleu",
            image: "./img/models/zimota-target.jpg",
            price: "3,999 TND",
            type: "Essence",
            
        },
        {
            name: "Scooter ZIMOTA SINUS X 124cc - Gris",
            image: "./img/models/zimota-sinus-x.jpg",
            price: "4,499 TND",
            type: "Essence",
            
        },
      
        {
            name: "Motocycle ZIMOTA Keeway RKS 125 - ROUGE",
            image: "./img/models/zimota-keeway-rks-125-rouge.jpg",
            price: "5,599 TND",
            type: "Essence",
            
        },
   
  
        {
            name: "Cyclomoteur ZIMOTA TARGET 125CC - Bleu",
            image: "./img/models/zimota-target-125-bleu.jpg",
            price: "3,999 TND",
            type: "Essence",
            
        },
          {
            name: "Scooter Electrique Eway RIDE - 400 Watt - Blanc",
            image: "./img/models/zimota-eway-ride-elec.jpg",
            price: "1,999 TND",
            type: "Electrique",
            
        },
    ],
    SYM: [
        {
            name: "SYM SYMPHONY SR 125 CBS - 125 CC - BLANC - Noir",
            image: "./img/models/sym-symphony-sr-125-cbs-125cc-blanc-noir.jpg",
            price: "6,579 TND",
            type: "Essence",
            
        },
        {
            name: "SYM SYMPHONY S 125 - 125 CC - BLANC",
            image: "./img/models/sym-symphony-s-125-blanc.jpg",
            price: "6,579 TND",
            type: "Essence",
            
        },
        {
            name: "SYM SYMPHONY ST 125 CBS E5 - injection - Noir",
            image: "./img/models/sym-symphony-st-125-cbs-e5-injection-noir.jpg",
            price: "7,999 TND",
            type: "Essence",
            
        },
        {
            name: "SYM JET 14 125 AC E5 - 125 CC - NOIR - GRIS",
            image: "./img/models/sym-jet-14-125-ac-e5-noir.jpg",
            price: "8,699 TND",
            type: "Essence",
            
        },
        {
            name: "SYM SYMPHONY ST 200 ABS E5 200cc injection - BLEU - BLANC",
            image: "./img/models/sym-symphony-st-200-abs-e5-200cc-injection-bleu.jpg",
            price: "14,999 TND",
            type: "Essence",
            
        },
        {
            name: "SYM JET 4 RX 125 - 124cc - Gris",
            image: "./img/models/sym-jet-4-rx-124-gris.jpg",
            price: "6,199 TND",
            type: "Essence",
            
        },
        {
            name: "FIDDLE II EFI",
            image: "./img/models/sym-fiddle-ii-efi.jpg",
            price: "5,850 TND",
            type: "Essence",
            
        },
    ],
    FORZA_MOTOR_SPORT: [
        {
            name: "FORZA BBM Forza Compteur Digital 125CC - NOIR",
            image: "./img/models/forza-bbm-forza-compteur-digital-125cc-noir.jpg",
            price: "2,849 TND",
            type: "Essence",
            
        },
        {
            name: "Forza MotoStars FIRST MAXIII 3- 125CC - DIGITAL Gris - Noir",
            image: "./img/models/forza-motostars-first-maxiii-3-125cc-digital-gris.jpg",
            price: "2,899 TND",
            type: "Essence",
            
        },
        {
            name: "FORZA BBM Forza Compteur Digital 107CC NEW-NOIR-GRIS-ROUGE",
            image: "./img/models/forza-bbm-forza-compteur-digital-107cc-new-noir.jpg",
            price: "2,799 TND",
            type: "Essence",
            
        },
        {
            name: "FORZA SLC D-MAX+ 124CC - BLEU - Gris Nardo - Gris - Turquoise",
            image: "./img/models/forza-slc-d-max-124cc-bleu.jpg",
            price: "3,049 TND",
            type: "Essence",
            
        },
        {
            name: "FORZA POWER 125CC Digital -GRIS + Carte Grise",
            image: "./img/models/forza-power-125cc-digital-gris-2.jpg",
            price: "2,899 TND",
            type: "Essence",
            
        },
    ],
    UNISCOOT: [
        {
            name: "UNISCOOT TIGER 125CC - Gris - Noir - Bleu",
            image: "./img/models/uniscoot-tiger-125cc-gris.jpg",
            price: "4,199 TND",
            type: "Essence",
            
        },
        {
            name: "UNISCOOT TMAX+ 125CC - Noir brillant - Bleu",
            image: "./img/models/uniscoot-tmax-125cc-noir-brillant.jpg",
            price: "4,699 TND",
            type: "Essence",
            
        },
        {
            name: "UNISCOOT FX2+ PLUS 125CC - NOIR MATT - BLEU",
            image: "./img/models/uniscoot-fx2-plus-125cc-noir-matt.jpg",
            price: "4,799 TND",
            type: "Essence",
            
        },
        {
            name: "UNISCOOT ZT6 ZONSEN 124CC - Noir",
            image: "./img/models/uniscoot-zt6-zonsen-124cc-noir.jpg",
            price: "5,499 TND",
            type: "Essence",
            
        },
    ],
    ZONTES: [
        {
            name: "zontes 368G ADV 368cc",
            image: "./img/models/zontes-368g-adv-368cc.jpg",
            price: "-,-- TND",
            type: "Essence",
            status: "En Arrivage",
        },
    ],
    YADEA: [
        {
            name: "SCOOTER ELECTRIQUE YADEA - E8S - 3000W - BLANC",
            image: "./img/models/scooter-electrique-yadea-e8s-3000w-blanc.jpg",
            price: "5,999 TND",
            type: "Electrique",
            
        },
        {
            name: "SCOOTER ELECTRIQUE YADEA - E8S - 3000W - BLEU",
            image: "./img/models/scooter-electrique-yadea-e8s-3000w-bleu.jpg",
            price: "5,999 TND",
            type: "Electrique",
            
        },
    ],
    SLC: [
        {
            name: "SLC AZUR 124 CC - NOIR",
            image: "./img/models/slc-azur-124cc-noir.jpg",
            price: "5,199 TND",
            type: "Essence",
            
        },
        {
            name: "SLC AZUR 124 CC - BLEU",
            image: "./img/models/slc-azur-124cc-bleu.jpg",
            price: "5,199 TND",
            type: "Essence",
            
        },
    ],
    SENKE: [
        {
            name: "SENKE SK 110 107 cm³ - Rouge + Repose pied - Carte Grise Offerte",
            image: "./img/models/senke-sk-110-107cc-rouge.jpg",
            price: "2,949 TND",
            type: "Essence",
            
        },
        {
            name: "SENKE SK 110 107 cm³ - NOIR + Repose pied - Carte Grise Offerte",
            image: "./img/models/senke-sk-110-107cc-noir.jpg",
            price: "2,949 TND",
            type: "Essence",
            
        },
    ],
    SANYA: [
        {
            name: "Sanya SY 125-9F",
            image: "./img/models/sanya-sy-125-9f.jpg",
            price: "5,849 TND",
            type: "Essence",
            status: "En Arrivage",
        },
    ],
    POWER: [
        {
            name: "POWER SPRING ST - 125cc - GRIS /ORANGE ( CARTE GRISE )",
            image: "./img/models/power-spring-st-125cc-gris-orange.jpg",
            price: "4,199 TND",
            type: "Essence",
            
        },
    ],
    LM: [
        {
            name: "LM ADV 125CC injection ABS + TCS - BIEGE",
            image: "./img/models/lm-adv-125cc-beige.jpg",
            price: "9,949 TND",
            type: "Essence",
            
        },
        {
            name: "LM ADV 125CC injection ABS + TCS- Chameleon",
            image: "./img/models/lm-adv-125cc-chameleon.jpg",
            price: "9,949 TND",
            type: "Essence",
            
        },
        {
            name: "LM ADV 125CC injection ABS + TCS - VERT MILITAIRE",
            image: "./img/models/lm-adv-125cc-vert-militaire.jpg",
            price: "9,949 TND",
            type: "Essence",
            
        },
    ],
    NOVAGO: [
        {
            name: "Tricycle électrique NOVAGO SWING - 2400 Watt - Noir",
            image: "./img/models/novago-swing-noir.jpg",
            price: "6,199 TND",
            type: "Electrique",
            
        },
        {
            name: "Tricycle électrique NOVAGO SWING - 2400 Watt - Bleu",
            image: "./img/models/novago-swing-bleu.jpg",
            price: "6,199 TND",
            type: "Electrique",
            
        },
        {
            name: "Tricycle électrique NOVAGO SWING - 2400 Watt - Gris",
            image: "./img/models/novago-swing-gris.jpg",
            price: "6,199 TND",
            type: "Electrique",
            
        },
    ],
    DAYUN: [
        {
            name: "DAYUN DREAM 23 4T - SLC - 124CC - ROUGE",
            image: "./img/models/dayun-dream-23-4t-rouge.jpg",
            price: "4,499 TND",
            type: "Essence",
            
        },
        {
            name: "DAYUN SNIPER SLC - 124CC - BLANC",
            image: "./img/models/dayun-sniper-slc-blanc.jpg",
            price: "5,399 TND",
            type: "Essence",
            
        },
        {
            name: "DAYUN SNIPER SLC - 124CC - NOIR",
            image: "./img/models/dayun-sniper-slc-noir.jpg",
            price: "5,399 TND",
            type: "Essence",
            
        },
    ],
    QJMOTOR: [
        {
            name: "ZIMOTA RKS QJMOTOR 125cc - Noir",
            image: "./img/models/qjmotor-zimota-rks-qjmotor-noir.jpg",
            price: "5,599 TND",
            type: "Essence",
            
        },
        {
            name: "ZIMOTA SUPERLIGHT QJMOTOR CBS 125cc - NOIR",
            image: "./img/models/qjmotor-zimota-superlight-qjmotor-cbs-noir.jpg",
            price: "7,499 TND",
            type: "Essence",
            
        },
        {
            name: "ZIMOTA SUPERLIGHT QJMOTOR CBS 125cc - BRONZE",
            image: "./img/models/qjmotor-zimota-superlight-qjmotor-cbs-bronze.jpg",
            price: "7,499 TND",
            type: "Essence",
            
        },
    ],
    WOLF: [
        {
            name: "Électrique WOLF VERO 1000 Watts - Vert Clair",
            image: "./img/models/wolf-vero-vert-clair.jpg",
            price: "4,199 TND",
            type: "Électrique",
            
        },
        {
            name: "Scooter Électrique WOLF VERO 1000 Watts - Blanc",
            image: "./img/models/wolf-vero-blanc.jpg",
            price: "4,199 TND",
            type: "Électrique",
            
        },
        {
            name: "Scooter Électrique WOLF 1000 Watts Sans Coffre - Gris",
            image: "./img/models/wolf-vero-gris.jpg",
            price: "3,799 TND",
            type: "Électrique",
            
        },
        {
            name: "Scooter Électrique WOLF 1000 Watts Sans Coffre - Noir",
            image: "./img/models/wolf-vero-noir.jpg",
            price: "3,799 TND",
            type: "Électrique",
            
        },
        {
            name: "Scooter Électrique WOLF 1000 Watts Avec Coffre - Gris",
            image: "./img/models/wolf-vero-gris-coffre.jpg",
            price: "3,999 TND",
            type: "Électrique",
            
        },
        {
            name: "Scooter Électrique WOLF 1000 Watts Avec Coffre - Noir",
            image: "./img/models/wolf-vero-noir-coffre.jpg",
            price: "3,999 TND",
            type: "Électrique",
            
        },
    ],
       MS: [
        {
            name: "SCOOTER FIRST COSTA 49CC - GRIS",
            image: "./img/models/ms-first-costa-gris.jpg",
            price: "3,799 TND",
            type: "Essence",
            
        },
    
    ],
        POWER_KIM: [
        {
            name: "SCOOTER PISTA HR+ 110CC - NOIR/CARBON ( CARTE GRISE)",
            image: "./img/models/power-kim-scooter-pista-hr-noir-carbone.jpg",
            price: "4,799 TND",
            type: "Essence",
            
        },
    
    ],
    KYMCO: [
        {
            name: "KYMCO People S 125i ABS",
            image: "./img/models/kymco-people-s-125i-abs.jpg",
            price: "10,600 TND",
            type: "Electrique",
            
        },
            {
            name: "KYMCO Drink R 125 Tunnel",
            image: "./img/models/kymco-drink-r-125-tunnel.jpg",
            price: "11,600 TND",
            type: "Electrique",
            
        },
    
    ],
        KAYCO: [
        {
            name: "Young Graduates (B2A) One Charge = 70 km",
            image: "./img/models/kayco.jpg",
            price: "4,500 TND",
            type: "Electrique",
            
        },
            {
            name: "Freelancers (B2B) One Charge = 120 km",
            image: "./img/models/kayco-noir.jpg",
            price: "5,900 TND",
            type: "Electrique",
            
        },
         {
            name: "Delivery Professionals (B2C) One Charge = 240 km",
            image: "./img/models/kayco-rouge.jpg",
            price: "7,200 TND",
            type: "Electrique",
            
        },
    
    ],
       GOLD_MOTORS: [
        {
            name: "Gold Motors R9",
            image: "./img/models/gold-motors-R9-bleu.jpg",
            price: "-,--- TND",
            type: "Essence",
            
        },
       
    
    ],
};