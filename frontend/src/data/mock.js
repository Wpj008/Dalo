// Mocked data for Dalo Ministries International — all content invented for design purposes.

export const IMAGES = {
  heroPastor:
    "https://static.prod-images.emergentagent.com/jobs/a2add377-a02d-450c-9340-5bdcff1b280d/images/3ad5c207f1622910c4d36e61ee4837d62ebe26801987ffb25a5d000965b609c6.png",
  prayerHands:
    "https://static.prod-images.emergentagent.com/jobs/a2add377-a02d-450c-9340-5bdcff1b280d/images/43dd518b315dd8c0985bff00348ab981611b8c6705b6a06f8137af1eebce80ec.png",
  worldMap:
    "https://static.prod-images.emergentagent.com/jobs/a2add377-a02d-450c-9340-5bdcff1b280d/images/84b384f459c4cb8a8c8ea262fdfccd5e1405810d6ba8af186076e3659b340dd3.png",
  modernChurch:
    "https://static.prod-images.emergentagent.com/jobs/a2add377-a02d-450c-9340-5bdcff1b280d/images/17f5218d15878b4300990a72620cd34ede7e68ee4f6cff855c8291908af1b278.png",
  abstractNavyGold:
    "https://static.prod-images.emergentagent.com/jobs/a2add377-a02d-450c-9340-5bdcff1b280d/images/062bf0788ef3ab3b5019ca4629915ddb207389b7556e794364039ddf4175a888.png",
  worship1:
    "https://images.unsplash.com/photo-1776091164403-ea8ffb00ed0f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  worship2:
    "https://images.unsplash.com/photo-1776091104217-02e3732a4a81?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  conf1:
    "https://images.unsplash.com/photo-1725555946744-37906174e061?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  conf2:
    "https://images.unsplash.com/photo-1722872112503-922d881bdddc?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  sunset:
    "https://images.unsplash.com/photo-1763321728101-196462859211?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
};

export const STATS = [
  { value: 27, suffix: "+", key: "years" },
  { value: 42, suffix: "", key: "countries" },
  { value: 180, suffix: "+", key: "conferences" },
  { value: 120, suffix: "K", key: "community" },
];

export const COUNTRIES = [
  { name: "France", code: "FR", x: 49, y: 32 },
  { name: "United Kingdom", code: "UK", x: 47, y: 28 },
  { name: "Belgium", code: "BE", x: 50, y: 30 },
  { name: "Switzerland", code: "CH", x: 51, y: 33 },
  { name: "Côte d'Ivoire", code: "CI", x: 47, y: 56 },
  { name: "Sénégal", code: "SN", x: 43, y: 53 },
  { name: "DR Congo", code: "CD", x: 54, y: 62 },
  { name: "Cameroon", code: "CM", x: 52, y: 58 },
  { name: "Nigeria", code: "NG", x: 51, y: 56 },
  { name: "South Africa", code: "ZA", x: 56, y: 75 },
  { name: "USA", code: "US", x: 22, y: 38 },
  { name: "Canada", code: "CA", x: 24, y: 28 },
  { name: "Brazil", code: "BR", x: 33, y: 65 },
  { name: "Haiti", code: "HT", x: 28, y: 48 },
];

export const MINISTRIES = [
  {
    id: "teaching",
    title: { fr: "École de la Parole", en: "School of the Word" },
    desc: {
      fr: "Formation biblique approfondie pour bâtir des disciples solides et équilibrés.",
      en: "In-depth biblical training to build solid, balanced disciples.",
    },
    icon: "BookOpen",
  },
  {
    id: "leaders",
    title: { fr: "Académie des Leaders", en: "Leaders Academy" },
    desc: {
      fr: "Mentorat de pasteurs, entrepreneurs et porteurs de vision.",
      en: "Mentorship for pastors, entrepreneurs, and vision carriers.",
    },
    icon: "Crown",
  },
  {
    id: "prayer",
    title: { fr: "Intercession Globale", en: "Global Intercession" },
    desc: {
      fr: "Une chaîne de prière qui couvre les nations 24/7.",
      en: "A 24/7 prayer chain covering the nations.",
    },
    icon: "Flame",
  },
  {
    id: "missions",
    title: { fr: "Missions Internationales", en: "International Missions" },
    desc: {
      fr: "Campagnes d'évangélisation et implantations d'œuvres dans les nations.",
      en: "Evangelism campaigns and church plants across nations.",
    },
    icon: "Globe2",
  },
  {
    id: "youth",
    title: { fr: "Génération Élu", en: "Chosen Generation" },
    desc: {
      fr: "Le ministère jeunesse pour la nouvelle génération de leaders.",
      en: "The youth ministry raising the next generation of leaders.",
    },
    icon: "Sparkles",
  },
  {
    id: "media",
    title: { fr: "Plateforme Médias", en: "Media Platform" },
    desc: {
      fr: "Diffusion mondiale des messages via TV, podcast et streaming.",
      en: "Worldwide message broadcasting via TV, podcast, and streaming.",
    },
    icon: "Radio",
  },
  {
    id: "social",
    title: { fr: "Action Sociale", en: "Social Action" },
    desc: {
      fr: "Soins, éducation et aide humanitaire dans les communautés.",
      en: "Care, education, and humanitarian aid in communities.",
    },
    icon: "Heart",
  },
];

export const EVENTS = [
  {
    id: "ev1",
    title: { fr: "Convention Glory 2026", en: "Glory Convention 2026" },
    date: "2026-04-18",
    city: "Paris",
    country: { fr: "France", en: "France" },
    image: IMAGES.conf1,
    speakers: ["Roland Dalo", "Sarah Mbeki", "John Adekunle"],
    type: "conference",
    upcoming: true,
  },
  {
    id: "ev2",
    title: { fr: "Campagne Afrique de l'Ouest", en: "West Africa Campaign" },
    date: "2026-06-02",
    city: "Abidjan",
    country: { fr: "Côte d'Ivoire", en: "Ivory Coast" },
    image: IMAGES.worship2,
    speakers: ["Roland Dalo", "Emmanuel Koffi"],
    type: "campaign",
    upcoming: true,
  },
  {
    id: "ev3",
    title: { fr: "Retraite des Leaders", en: "Leaders Retreat" },
    date: "2026-03-10",
    city: "Genève",
    country: { fr: "Suisse", en: "Switzerland" },
    image: IMAGES.modernChurch,
    speakers: ["Roland Dalo"],
    type: "retreat",
    upcoming: true,
  },
  {
    id: "ev4",
    title: { fr: "Nuit de Prière Mondiale", en: "Global Night of Prayer" },
    date: "2026-05-24",
    city: "Online",
    country: { fr: "Diffusion mondiale", en: "Worldwide stream" },
    image: IMAGES.prayerHands,
    speakers: ["Roland Dalo", "Maria Santos"],
    type: "conference",
    upcoming: true,
  },
  {
    id: "ev5",
    title: { fr: "School of the Spirit", en: "School of the Spirit" },
    date: "2026-09-12",
    city: "London",
    country: { fr: "Royaume-Uni", en: "United Kingdom" },
    image: IMAGES.conf2,
    speakers: ["Roland Dalo", "David Owusu"],
    type: "conference",
    upcoming: true,
  },
  {
    id: "ev6",
    title: { fr: "Retraite Femmes de Foi", en: "Women of Faith Retreat" },
    date: "2026-07-05",
    city: "Lisbon",
    country: { fr: "Portugal", en: "Portugal" },
    image: IMAGES.sunset,
    speakers: ["Esther Dalo", "Grace Okafor"],
    type: "retreat",
    upcoming: true,
  },
];

export const VIDEOS = [
  {
    id: "v1",
    title: {
      fr: "La grâce qui élève — Partie I",
      en: "The Grace That Lifts — Part I",
    },
    duration: "42:18",
    date: "2026-01-12",
    thumb: IMAGES.worship1,
    category: "sermon",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v2",
    title: {
      fr: "Identité du croyant",
      en: "The Believer's Identity",
    },
    duration: "38:02",
    date: "2025-12-20",
    thumb: IMAGES.modernChurch,
    category: "teaching",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v3",
    title: {
      fr: "Une nation en mouvement",
      en: "A Nation on the Move",
    },
    duration: "1:02:45",
    date: "2025-11-18",
    thumb: IMAGES.conf1,
    category: "sermon",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v4",
    title: {
      fr: "Interview — Vision 2030",
      en: "Interview — Vision 2030",
    },
    duration: "28:54",
    date: "2025-10-05",
    thumb: IMAGES.heroPastor,
    category: "interview",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v5",
    title: {
      fr: "Podcast — Le poids du mandat",
      en: "Podcast — The Weight of the Mandate",
    },
    duration: "55:11",
    date: "2025-09-15",
    thumb: IMAGES.abstractNavyGold,
    category: "podcast",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v6",
    title: {
      fr: "Restaurer ce qui a été brisé",
      en: "Restoring What Was Broken",
    },
    duration: "46:20",
    date: "2025-08-22",
    thumb: IMAGES.prayerHands,
    category: "teaching",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export const TESTIMONIES = [
  {
    id: "t1",
    name: "Marie L.",
    location: { fr: "Paris, France", en: "Paris, France" },
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop",
    quote: {
      fr: "DMI a transformé ma vision de la foi. J'ai trouvé une famille, une mission, et un appel.",
      en: "DMI transformed my view of faith. I found a family, a mission, and a calling.",
    },
  },
  {
    id: "t2",
    name: "Jean-Marc K.",
    location: { fr: "Abidjan, Côte d'Ivoire", en: "Abidjan, Ivory Coast" },
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80&auto=format&fit=crop",
    quote: {
      fr: "À travers les enseignements du pasteur Dalo, j'ai retrouvé mon identité et ma destinée.",
      en: "Through Pastor Dalo's teachings, I rediscovered my identity and my destiny.",
    },
  },
  {
    id: "t3",
    name: "Sarah O.",
    location: { fr: "Londres, Royaume-Uni", en: "London, United Kingdom" },
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop",
    quote: {
      fr: "Une église qui prend la Parole au sérieux. Une famille qui élève des leaders authentiques.",
      en: "A church that takes the Word seriously. A family that raises authentic leaders.",
    },
  },
  {
    id: "t4",
    name: "Daniel A.",
    location: { fr: "Bruxelles, Belgique", en: "Brussels, Belgium" },
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
    quote: {
      fr: "DMI m'a donné les outils spirituels et pratiques pour bâtir ma famille et mon entreprise.",
      en: "DMI gave me the spiritual and practical tools to build my family and my business.",
    },
  },
];

export const CHURCHES = [
  {
    id: "ch-paris",
    city: "Paris",
    country: { fr: "France", en: "France" },
    address: "12 Avenue de la Lumière, 75011 Paris",
    image: IMAGES.modernChurch,
    pastors: ["Pastor Roland Dalo", "Pastor Esther Dalo"],
    schedule: [
      { day: { fr: "Dimanche", en: "Sunday" }, time: "10:00 / 17:00" },
      { day: { fr: "Mercredi", en: "Wednesday" }, time: "19:30" },
    ],
    socials: { facebook: "#", instagram: "#", youtube: "#" },
  },
  {
    id: "ch-london",
    city: "London",
    country: { fr: "Royaume-Uni", en: "United Kingdom" },
    address: "88 Royal Crescent Hall, London E1 6AN",
    image: IMAGES.conf2,
    pastors: ["Pastor David Owusu", "Pastor Lydia Owusu"],
    schedule: [
      { day: { fr: "Dimanche", en: "Sunday" }, time: "11:00" },
      { day: { fr: "Vendredi", en: "Friday" }, time: "19:00" },
    ],
    socials: { facebook: "#", instagram: "#", youtube: "#" },
  },
  {
    id: "ch-abidjan",
    city: "Abidjan",
    country: { fr: "Côte d'Ivoire", en: "Ivory Coast" },
    address: "Boulevard de la Grâce, Cocody, Abidjan",
    image: IMAGES.worship2,
    pastors: ["Pastor Emmanuel Koffi"],
    schedule: [
      { day: { fr: "Dimanche", en: "Sunday" }, time: "08:00 / 10:30" },
      { day: { fr: "Jeudi", en: "Thursday" }, time: "18:30" },
    ],
    socials: { facebook: "#", instagram: "#", youtube: "#" },
  },
  {
    id: "ch-kinshasa",
    city: "Kinshasa",
    country: { fr: "RD Congo", en: "DR Congo" },
    address: "Avenue Lumumba, Gombe, Kinshasa",
    image: IMAGES.conf1,
    pastors: ["Pastor Jean Tshibola"],
    schedule: [
      { day: { fr: "Dimanche", en: "Sunday" }, time: "09:00" },
      { day: { fr: "Mardi", en: "Tuesday" }, time: "18:00" },
    ],
    socials: { facebook: "#", instagram: "#", youtube: "#" },
  },
  {
    id: "ch-brussels",
    city: "Brussels",
    country: { fr: "Belgique", en: "Belgium" },
    address: "Rue de la Foi 24, 1000 Brussels",
    image: IMAGES.heroPastor,
    pastors: ["Pastor Michel Vandeval"],
    schedule: [{ day: { fr: "Dimanche", en: "Sunday" }, time: "10:30" }],
    socials: { facebook: "#", instagram: "#", youtube: "#" },
  },
  {
    id: "ch-montreal",
    city: "Montréal",
    country: { fr: "Canada", en: "Canada" },
    address: "1450 Rue Saint-Denis, Montréal QC",
    image: IMAGES.sunset,
    pastors: ["Pastor Claire Beauchamp"],
    schedule: [{ day: { fr: "Dimanche", en: "Sunday" }, time: "11:00" }],
    socials: { facebook: "#", instagram: "#", youtube: "#" },
  },
];

export const TIMELINE = [
  {
    year: "1998",
    title: { fr: "L'appel reçu", en: "The calling received" },
    desc: {
      fr: "Roland Dalo reçoit l'appel pastoral lors d'une retraite à Lomé.",
      en: "Roland Dalo receives the pastoral calling during a retreat in Lomé.",
    },
  },
  {
    year: "2002",
    title: { fr: "Premier ministère", en: "First ministry" },
    desc: {
      fr: "Lancement du premier groupe d'enseignement en Île-de-France.",
      en: "Launch of the first teaching group in greater Paris.",
    },
  },
  {
    year: "2008",
    title: { fr: "Fondation de DMI", en: "DMI founded" },
    desc: {
      fr: "Dalo Ministries International est officiellement fondé.",
      en: "Dalo Ministries International is officially founded.",
    },
  },
  {
    year: "2014",
    title: { fr: "Expansion internationale", en: "International expansion" },
    desc: {
      fr: "Implantations d'œuvres à Londres, Abidjan et Kinshasa.",
      en: "Church plants in London, Abidjan, and Kinshasa.",
    },
  },
  {
    year: "2020",
    title: { fr: "Plateforme médias", en: "Media platform" },
    desc: {
      fr: "Lancement de DMI Media : TV, podcast, streaming live.",
      en: "Launch of DMI Media: TV, podcast, live streaming.",
    },
  },
  {
    year: "2026",
    title: { fr: "Vision Nations", en: "Nations Vision" },
    desc: {
      fr: "42 nations touchées. Une génération en marche.",
      en: "42 nations reached. A generation on the move.",
    },
  },
];

export const PARTNERSHIP_TIERS = [
  {
    id: "one",
    titleKey: "oneTime",
    price: { fr: "Don libre", en: "Any amount" },
    perks: {
      fr: [
        "Soutien direct au ministère",
        "Reçu fiscal envoyé",
        "Newsletter mensuelle",
      ],
      en: [
        "Direct support to the ministry",
        "Tax receipt provided",
        "Monthly newsletter",
      ],
    },
  },
  {
    id: "monthly",
    titleKey: "monthly",
    price: { fr: "À partir de 30€/mois", en: "From €30 / month" },
    featured: true,
    perks: {
      fr: [
        "Accès aux enseignements premium",
        "Carte de partenaire officielle",
        "Invitations privilégiées aux événements",
        "Lettre trimestrielle du pasteur",
      ],
      en: [
        "Access to premium teachings",
        "Official partnership card",
        "Priority invitations to events",
        "Quarterly letter from the pastor",
      ],
    },
  },
  {
    id: "legacy",
    titleKey: "legacy",
    price: { fr: "À partir de 250€/mois", en: "From €250 / month" },
    perks: {
      fr: [
        "Cercle privé des partenaires d'héritage",
        "Sessions trimestrielles avec Pasteur Roland",
        "Mention dans le rapport annuel",
        "Réservations VIP aux conventions",
      ],
      en: [
        "Private legacy partners circle",
        "Quarterly sessions with Pastor Roland",
        "Annual report acknowledgment",
        "VIP seating at conventions",
      ],
    },
  },
];
