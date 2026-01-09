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
    { name: "UNISCOOT", logo: "./img/logos-actumoto/uniscoot.png" },
    { name: "KYMCO", logo: "./img/logos-actumoto/kymco.png" },
    { name: "ZONTES", logo: "./img/logos-actumoto/zontes.png" },
    { name: "FTM", logo: "./img/logos-actumoto/ftm.png" },
    { name: "YADEA", logo: "./img/logos-actumoto/yadea.png" },
    { name: "SLC", logo: "./img/logos-actumoto/slc.png" },
    { name: "SENKE", logo: "./img/logos-actumoto/senke.png" },
    { name: "SANYA", logo: "./img/logos-actumoto/sanya.png" },
    { name: "POWER", logo: "./img/logos-actumoto/power.png" },
    { name: "LM", logo: "./img/logos-actumoto/lm.png" },
    { name: "MS", logo: "./img/logos-actumoto/ms.png" },
    { name: "WOLF", logo: "./img/logos-actumoto/wolf.png" },
    { name: "E_RIDER", logo: "./img/logos-actumoto/erider.png" },
    { name: "NOVAGO", logo: "./img/logos-actumoto/novago.png" },
    { name: "DAYUN", logo: "./img/logos-actumoto/dayun.png" },
    { name: "BBM", logo: "./img/logos-actumoto/bbm.png" },
    { name: "POWER_KIM", logo: "./img/logos-actumoto/powerkim.png" },
    { name: "KAYCO", logo: "./img/logos-actumoto/kayco.png" },
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
            image: "./img/models/peugeot-pulsion-125.jpg",
            price: "12,900 TND",
            type: "Essence",
            
        },
        {
            name: "PEUGEOT MÉTROPOLIS 400",
            image: "./img/models/peugeot-metropolis-400.jpg",
            price: "59,000 TND",
            type: "Essence",
            
        },
        {
            name: "PEUGEOT XP 400",
            image: "./img/models/peugeot-xp-400.jpg",
            price: "41,900 TND",
            type: "Essence",
            
        },
        {
            name: "PEUGEOT Django 125",
            image: "./img/models/peugeot-django-125.jpg",
            price: "10,900 TND",
            type: "Essence",
            
        },
        {
            name: "PEUGEOT Tweet 125 Avec top case+ casque LS2 Airflow2 + Pare Brise",
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
         
        {
            name: "Aprilia SR GT 125",
            image: "./img/models/Aprilia_SR-GT_Wall-Img_1920x1280_1.jpg",
            price: "En Arrivage",
            type: "Essence",
            
        },
        
    ],
    CFMOTO: [
        {
            name: "Motocycle CFMOTO 450MT - 450CC",
            image: "./img/models/CFMOTO-450MT.jpg",
            price: "58,131 TND",
            type: "Essence",
            
        },
         {
            name: "CF MOTO 800MT-X",
            image: "./img/models/CF-MOTO-800MT-X.jpg",
            price: "74,910 TND",
            type: "Essence",
            
        },
             {
            name: "CF MOTO 800MT Explore",
            image: "./img/models/CF-MOTO-800MT-Explore.jpg",
            price: "78,480 TND",
            type: "Essence",
            
        },
          {
            name: "CF MOTO 700MT",
            image: "./img/models/CF-MOTO-700MT.jpg",
            price: "69,793 TND",
            type: "Essence",
            
        },
       
        {
            name: "CF MOTO 700CL-X SPORT",
            image: "./img/models/CF-MOTO-700CL-X-SPORT.jpg",
            price: "61,344 TND",
            type: "Essence",
            
        },
         {
            name: "CF MOTO 450CL-C",
            image: "./img/models/CF-MOTO-450CL-C.jpg",
            price: "57,715 TND",
            type: "Essence",
            
        },
         {
            name: "CF MOTO 450CL-C-BOBER",
            image: "./img/models/CF-MOTO-450CL-C-BOBER.jpg",
            price: "59,440 TND",
            type: "Essence",
            
        },
          {
            name: "CF MOTO 125NK",
            image: "./img/models/CF-MOTO-125NK.jpg",
            price: "17,671 TND",
            type: "Essence",
            
        },
         {
            name: "CF MOTO 800NK Advanced",
            image: "./img/models/CF-MOTO-800NK-Advanced.jpg",
            price: "64,081 TND",
            type: "Essence",
            
        },
         {
            name: "CF MOTO 300NK",
            image: "./img/models/CF-MOTO-300NK.jpg",
            price: "34,093 TND",
            type: "Essence",
            
        },
         {
            name: "CF MOTO 675SR-R",
            image: "./img/models/CF-MOTO-675SR-R.jpg",
            price: "64,855 TND",
            type: "Essence",
            
        },
           {
            name: "CF MOTO 450SR-S",
            image: "./img/models/CF-MOTO-450SR-S.jpg",
            price: "54,680 TND",
            type: "Essence",
            
        },
         {
            name: "CF MOTO 150SC",
            image: "./img/models/CF-MOTO-150SC.jpg",
            price: "18,445 TND",
            type: "Essence",
            
        },
            {
            name: "CF MOTO CX-5E",
            image: "./img/models/CF-MOTO-CX-5E.jpg",
            price: "10,591 TND",
            type: "Essence",
            
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
            {
            name: "ZIMOTA RKS 125cc - Noir",
            image: "./img/models/qjmotor-zimota-rks-qjmotor-noir.jpg",
            price: "5,599 TND",
            type: "Essence",
            
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
            price: "En Arrivage",
            type: "Essence",
           
        },
         {
            name: "Zontes 703 F 2025",
            image: "./img/models/zontes-703f-2025.webp",
            price: "En Arrivage",
            type: "Essence",
           
        },
    ],
    YADEA: [
     
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
            name: "Scooter CAPPUCINO S SLC 125 CC-4TEMPS",
            image: "./img/models/Aprilia-bleu-sr-gt-125.png",
            price: "5,499 TND",
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
            name: "SCOOTER LA VITA 125CC injection - BLEU/ ORANGE",
            image: "./img/models/la-vita-125cc-bleu-orange.jpg",
            price: "5,999 TND",
            type: "Essence",
            
        },
     
    ],
    NOVAGO: [
 
        {
            name: "Tricycle électrique NOVAGO SWING - 2400 Watt - Bleu",
            image: "./img/models/novago-swing-bleu.jpg",
            price: "6,199 TND",
            type: "Electrique",
            
        },

          {
            name: "SCOOTER ELECTRIQUE NOVAGO PIKA - BLANC",
            image: "./img/models/scooter-electrique-novago-pika-blanc-2.jpg",
            price: "3,299 TND",
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
            name: "Scooter DAYUN 125 CC | 4 TEMPS - DY125T - Bleu",
            image: "./img/models/dayun-dy125t-bleu.jpg",
            price: "4,569 TND",
            type: "Essence",
            
        },
         {
            name: "Scooter Dayun Kimbo 124CC | DY124 - Gris",
            image: "./img/models/dayun-dy124-gris.jpg",
            price: "4,259 TND",
            type: "Essence",
            
        },
    ],
    QJMOTOR: [
    
        {
            name: "SUPERLIGHT QJMOTOR CBS 125cc - NOIR",
            image: "./img/models/qjmotor-zimota-superlight-qjmotor-cbs-noir.jpg",
            price: "7,499 TND",
            type: "Essence",
            
        },
     
         {
            name: "Motocycle QJ MOTOR SRK 125 S 125CC Injection NOIR",
            image: "./img/models/qjmotor-zimota-srk-125-s-noir-injection.jpg",
            price: "10,999 TND",
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
            price: "5,499 TND",
            type: "Essence",
            
        },
        {
            name: "Moto Gold Motocycle | Cylindré 124 CC – Compteur Digital",
            image: "./img/models/gold-motors-124cc-compteur-digital.jpg",
            price: "3,269 TND",
            type: "Essence",
            
        },
    
    ],
     XTF: [
        {
            name: "Moto à Essence XTF DRAGON 110 CM³ Monocylindre - Noir",
            image: "./img/models/xtf-dragon-110-noir.jpg",
            price: "3,499 TND",
            type: "Essence",
            
        },
      
    
    ],
      FTM: [
        {
            name: "Cyclomoteur Jialing Future STAR 110CC - Rouge",
            image: "./img/models/ftm-jialing-future-star-110cc-rouge.jpg",
            price: "3,399 TND",
            type: "Essence",
            
        },
         {
            name: "Moto Cross Korak Noir",
            image: "./img/models/ftm-korak-noir.jpg",
            price: "3,499 TND",
            type: "Essence",
            
        },
    ],
       BBM: [
        {
            name: "Motocycle BBM 124CC FZ MAX Compteur Digitale",
            image: "./img/models/bbm-124cc-fz-max-compteur-digitale.jpg",
            price: "3,269 TND",
            type: "Essence",
            
        },
        
    ],
    
      LVNENG: [
        {
            name: "Scooter Électrique LVNENG LX05 49 CC - Vert",
            image: "./img/models/lvneng-lx05-49cc-vert.jpg",
            price: "5,690 TND",
            type: "Electrique",
            
        },
        
        {
            name: "SCOOTER ELECTRIQUE LVNENG NCS GENUIS - BEIGE ET MARRON",
            image: "./img/models/lvneng-ncs-genius-beige-marron.jpg",
            price: "7,300 TND",
            type: "Electrique",
            
        },
        
    ],
    
      E_RIDER: [
        {
            name: "Scooter Électrique E-RIDER E-CLASSIC 1200 Watts - Rouge",
            image: "./img/models/scooter-_lectrique-e-rider-e-classic-1200-watts---rouge.jpg",
            price: "5,199 TND",
            type: "Electrique",
            
        },
        
        {
            name: "Scooter Électrique E-RIDER E-TECH 1200 Watts - Bleu",
            image: "./img/models/scooter-_lectrique-e-rider-e-tech-1200-watts---bleu.jpg",
            price: "4,179 TND",
            type: "Electrique",
            
        },
          {
            name: "Scooter Electrique E-Rider E-Power 1200W Rouge",
            image: "./img/models/scooter-electrique-e-rider-e-power-1200w-rouge.jpg",
            price: "3,999 TND",
            type: "Electrique",
            
        },
          {
            name: "Scooter Electrique E-Rider E-eco 1000W Blanc",
            image: "./img/models/scooter-electrique-e-rider-e-eco-1000w-blanc.jpg",
            price: "3,679 TND",
            type: "Electrique",
            
        },
        
    ],
          LIFAN: [
        {
            name: "Motocycle LIFAN Glow 100 CC | LF110.3S - Noir",
            image: "./img/models/LIFAN-Motocycle-Glow-100S-LF110-3S.jpg",
            price: "3,859 TND",
            type: "Essence",
            
        },
            
    ],

          WATTGO: [
        {
            name: "Scooter Électrique WATTGO WG9900 500W - Beige",
            image: "./img/models/scooter-electrique-wattgo-wg9900-500w-beige-hjnkjsd.jpg",
            price: "2,199 TND",
            type: "Electrique",
            
        },
            
    ],
    
    E_FLASH: [
        {
            name: "Scooter Électrique E-FLASH 2000 Watts - Blanc&Rouge",
            image: "./img/models/scooter-electrique-e-flash-2000-watts-blanc-rouge-n.jpg",
            price: "8,299 TND",
            type: "Electrique",
            
        },
            
    ],


};
const videosData = [
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