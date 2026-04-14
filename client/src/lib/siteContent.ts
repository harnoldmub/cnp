import heroPoster from "@assets/IMG_2265_1765309764526.jpg";
import conferenceImage from "@assets/stock_images/african_conference_e_984f8971.jpg";
import networkingImage from "@assets/Photo-02_1765309862074.png";
import audienceImage from "@assets/Photo-01_1765309862074.png";
import speakerImage from "@assets/stock_images/professional_african_d9482444.jpg";
import cultureImage from "@assets/stock_images/african_cultural_exh_f2178a31.jpg";
import youthImage from "@assets/stock_images/professional_african_f5dd8be8.jpg";
import cultureEditorialImage from "@assets/Slider-CNP-1-scaled_1765307996148.png";
import danieleSassou from "@assets/Daniele_Sassou_Nguesso_1765309986120.jpg";
import malumaMunongo from "@assets/Maluma_Munongo_Claude_1765309986121.jpg";
import yvesKabongo from "@assets/Yves_kabongo_1765309986121.jpg";
import divineConceptionLogo from "@assets/Divine_conception_1765310035303.jpg";
import leopardsfootLogo from "@assets/leopardsfoot_1765310035305.png";
import makutanoLogo from "@assets/makutano_1765310035306.png";
import ministereLogo from "@assets/ministere_europe_affaires_etrangeres.png";
import soEdLogo from "@assets/SO_ED_1765310035307.jpg";
import topCongoFmLogo from "@assets/Top_Congo_FM_1765310035307.png";
import bOneLogo from "@assets/B_ONE_LOGO_1765310043574.jpg";
import afriqueDigitalLogo from "@assets/Afrique_digital_1765310055773.jpg";

export const siteContent = {
  theme: "Construire la paix et la prosperite partagee",
  edition: "8e edition",
  dates: "23 & 24 mai 2026",
  hours: "10h00 - 20h00",
  venue: "Espace Saint Martin",
  address: ["199 bis rue Saint-Martin", "75003 Paris", "France"],
  venueSummary: "Paris",
  venueDetails: [
    "Samedi 23 mai: Espace Saint Martin, 199 bis rue Saint-Martin, 75003 Paris",
    "Dimanche 24 mai: lieu prive communique aux participants",
  ],
  email: "contact@congonaparis.fr",
  partnershipEmail: "partenariat@congonaparis.fr",
  projectsEmail: "projets@congonaparis.fr",
  instagram: "congonaparis",
  poster: heroPoster,
  heroTitle: "Salon socio-economique et culturel Tonga Mboka",
  heroSubtitle:
    "Le grand rendez-vous annuel de la diaspora congolaise a Paris. Deux jours pour relier institutions, entrepreneurs, artistes, jeunesse et talents autour d'une ambition commune.",
  movementTitle: "Congo Na Paris, une diplomatie culturelle et sociale en mouvement",
  movementIntro:
    "Depuis 2015, Congo Na Paris agit comme un trait d'union entre les territoires d'origine et les terres d'accueil. Le mouvement relie les diasporas, les institutions, les entrepreneurs, les artistes et les citoyens engages autour d'une meme responsabilite partagee.",
  movementClaim: "Construire, relier, investir",
  mainCta: "Reserver ma place",
  secondaryCta: "Devenir partenaire",
  contactLead: "Charlotte Kalala",
};

export const headlinePoints = [
  "Forum socio-economique, culturel et business",
  "Hall d'exposition et rencontres professionnelles",
  "Tables rondes, master classes et temps forts culturels",
  "Networking, diplomatie culturelle et opportunites concretes",
];

export const homeStats = [
  { value: "+20 500", label: "visiteurs" },
  { value: "237", label: "stands" },
  { value: "+130", label: "intervenants" },
  { value: "7", label: "editions precedentes" },
];

export const whyAttend = [
  "Rencontrer les acteurs economiques, institutionnels et culturels des deux Congo",
  "Trouver des opportunites de business, de cooperation et de visibilite",
  "Valoriser les talents, les entreprises et les initiatives de la diaspora",
  "Participer a une dynamique qui lie paix, prosperite et action concrete",
];

export const audiences = [
  "Entrepreneurs et porteurs de projets",
  "Decideurs publics et institutionnels",
  "Investisseurs, sponsors et marques",
  "Jeunesse, etudiants et jeunes actifs",
  "Artistes, creatifs et acteurs culturels",
  "Membres de la diaspora engages",
];

export const movementParagraphs = [
  "Cree en 2015, Congo Na Paris s'est impose comme un espace de diplomatie culturelle et sociale. Plus qu'un salon, c'est un mouvement qui relie les deux Congo, la France et les diasporas autour d'une vision commune.",
  "Congo Na Paris agit aujourd'hui comme un trait d'union entre les acteurs economiques et les institutions, entre la jeunesse et l'experience, entre les territoires d'origine et les terres d'accueil.",
  "En 2026, le salon Tonga Mboka devient le point de convergence le plus visible de cet ecosysteme: un rendez-vous concret pour construire, relier et investir.",
];

export const ecosystemInitiatives = [
  {
    title: "Salon Tonga Mboka",
    label: "Initiative principale",
    dates: "23-24 mai 2026 - Paris",
    summary:
      "Le salon socio-economique et culturel de reference. Deux jours de conferences, exposition, business, culture, networking et rencontres a fort impact pour la diaspora congolaise.",
    bullets: [
      "Forum socio-economique et culturel",
      "Hall d'exposition et activations de marques",
      "Networking, business lunch et temps forts culturels",
    ],
    href: "/programme",
    tone: "blue",
    primary: true,
  },
  {
    title: "Programme DARAJA",
    label: "Initiative associee",
    dates: "Juin - octobre 2026",
    summary:
      "Un programme d'investissement de la diaspora pour financer et accompagner les projets a impact, en particulier dans les secteurs strategiques lies a la transformation locale.",
    bullets: [
      "Appel a projets et selection",
      "Accompagnement, pitch et mise en relation",
      "Finale et valorisation au sein de CNP 2026",
    ],
    href: "/ecosysteme-2026",
    tone: "brown",
  },
  {
    title: "Voyage Congo",
    label: "Initiative associee",
    dates: "6-16 novembre 2026",
    summary:
      "Une mission d'immersion economique et culturelle au Congo, ouverte a la diaspora, aux investisseurs et aux creatifs pour reconnecter les projets au terrain.",
    bullets: [
      "Brazzaville, Kinshasa, Kolwezi",
      "Rencontres terrain, ateliers et visites",
      "Connexion directe avec les acteurs locaux",
    ],
    href: "/ecosysteme-2026",
    tone: "green",
  },
];

export const audienceInsights = [
  {
    value: "97%",
    label: "de participants satisfaits",
    description: "lors de la derniere edition",
    tone: "blue",
  },
  {
    value: "90%",
    label: "souhaitent creer ou renforcer",
    description: "leur lien avec les Congo",
    tone: "blue",
  },
  {
    value: "65%",
    label: "preparent leur visite",
    description: "via les reseaux sociaux",
    tone: "green",
  },
  {
    value: "69,80 EUR",
    label: "panier moyen",
    description: "produits, services, billetterie et restauration",
    tone: "bronze",
  },
];

export const audienceProfiles = [
  "Visiteurs 18-55 ans, majoritairement actifs, entrepreneurs, familles et reseaux diasporiques",
  "Exposants venus du Congo, de France et d'Europe pour presenter leurs offres, projets et innovations",
  "Un public attire par la rencontre directe, l'experience culturelle et les opportunites business reelles",
];

export const programHighlights = [
  {
    title: "Business",
    description:
      "Tables rondes, rencontres B2B, business lunch et opportunites de cooperation pour les acteurs economiques du Congo et de la diaspora.",
    image: conferenceImage,
  },
  {
    title: "Tourisme",
    description:
      "Des recits, destinations et passerelles pour reconnecter la diaspora aux territoires, aux circuits et aux initiatives locales.",
    image: heroPoster,
  },
  {
    title: "Culture",
    description:
      "Projection, litterature, mode, spectacle, musique et expressions congolaises au coeur de l'experience du salon.",
    image: cultureEditorialImage,
  },
  {
    title: "Dynamique sociale",
    description:
      "Diplomatie culturelle, engagement, jeunesse, cohesion sociale et responsabilite partagee comme leviers de transformation.",
    image: audienceImage,
  },
  {
    title: "Gastronomie",
    description:
      "Un hall vivant qui fait dialoguer saveurs, hospitalite, exposition et convivialite dans une experience memorable.",
    image: networkingImage,
  },
];

export const programmeDays = [
  {
    date: "Samedi 23 mai 2026",
    intro:
      "Journee d'ouverture du salon consacree a la vision, aux rencontres institutionnelles et aux grands formats business et culture.",
    items: [
      {
        time: "10:00",
        title: "Accueil et ouverture du salon",
        description:
          "Ouverture des portes, accueil des delegations, decouverte du hall d'exposition et mise en relation des participants.",
        image: audienceImage,
      },
      {
        time: "11:00",
        title: "Session inaugurale Tonga Mboka",
        description:
          "Prises de parole d'ouverture autour du theme Construire la paix et la prosperite partagee.",
        image: conferenceImage,
      },
      {
        time: "14:00",
        title: "Forum socio-economique",
        description:
          "Tables rondes et master classes sur investissement, entrepreneuriat, jeunesse, culture et diplomatie economique.",
        image: speakerImage,
      },
      {
        time: "18:30",
        title: "Networking et activations",
        description:
          "Rencontres B2B, connexions entre exposants, institutions, sponsors et porteurs de projets.",
        image: networkingImage,
      },
    ],
  },
  {
    date: "Dimanche 24 mai 2026",
    intro:
      "Seconde journee du salon dediee a l'experience des univers, a la valorisation des talents et a la cloture culturelle.",
    items: [
      {
        time: "10:00",
        title: "Univers d'experience et exposition",
        description:
          "Business, tourisme, culture, dynamique sociale et gastronomie se deploient a travers stands, rencontres et formats immersifs.",
        image: heroPoster,
      },
      {
        time: "13:00",
        title: "Talents et initiatives congolaises",
        description:
          "Mise en lumiere des talents, entreprises, projets et histoires qui incarnent l'energie de la diaspora.",
        image: cultureImage,
      },
      {
        time: "16:00",
        title: "Paroles d'engagement et transmission",
        description:
          "Dialogues entre jeunes, leaders, institutions et entrepreneurs autour d'un Congo durable, inclusif et prospere.",
        image: audienceImage,
      },
      {
        time: "19:00",
        title: "Cloture culturelle",
        description:
          "Final festif et culturel pour prolonger l'experience du salon au-dela des prises de parole.",
        image: cultureEditorialImage,
      },
    ],
  },
];

export const speakers = [
  {
    name: "Daniele Sassou Nguesso",
    role: "Voix institutionnelle et plaidoyer pour le rayonnement congolais",
    image: danieleSassou,
  },
  {
    name: "Maluma Munongo Claude",
    role: "Entrepreneuriat, investissement et transformation economique",
    image: malumaMunongo,
  },
  {
    name: "Yves Kabongo",
    role: "Leadership diaspora et cooperation entre talents et institutions",
    image: yvesKabongo,
  },
];

export const partnerCategories = [
  {
    title: "Partenaires officiels",
    partners: [
      { name: "Divine Conception", logo: divineConceptionLogo },
      { name: "Leopardsfoot", logo: leopardsfootLogo },
      { name: "Makutano", logo: makutanoLogo },
      { name: "Ministere de l'Europe et des Affaires etrangeres", logo: ministereLogo },
      { name: "SO ED", logo: soEdLogo },
      { name: "Top Congo FM", logo: topCongoFmLogo },
    ],
  },
  {
    title: "Medias",
    partners: [{ name: "B-One TV", logo: bOneLogo }],
  },
  {
    title: "Sponsors",
    partners: [{ name: "Afrique Digital", logo: afriqueDigitalLogo }],
  },
];

export const participationCards = [
  {
    title: "Visiteur",
    description:
      "Prenez votre billet pour vivre le salon, explorer les 5 univers et rencontrer les acteurs qui font bouger la diaspora.",
    cta: "Reserver",
    href: "https://my.weezevent.com/congo-na-paris-construire-la-paix",
  },
  {
    title: "Exposant",
    description:
      "Rejoignez le hall d'exposition pour presenter votre offre, votre marque ou votre projet au coeur de l'evenement.",
    cta: "Exposer au salon",
    href: `mailto:${siteContent.partnershipEmail}`,
  },
  {
    title: "Partenaire",
    description:
      "Associez votre marque a un rendez-vous a forte visibilite et activez votre presence au contact d'un public qualifie.",
    cta: "Devenir partenaire",
    href: "/sponsoriser",
  },
  {
    title: "Porteur de projet",
    description:
      "Presentez une initiative capable de creer des opportunites concretes pour la diaspora et les territoires congolais.",
    cta: "Soumettre un projet",
    href: "/soumettre-projet",
  },
];

export const participationSecondaryCards = [
  {
    title: "Programme DARAJA",
    description:
      "Une opportunite d'accompagnement et d'investissement pour les projets a impact portes par la diaspora.",
    href: "/ecosysteme-2026",
  },
  {
    title: "Voyage Congo",
    description:
      "Une immersion economique et culturelle pour reconnecter les ambitions de la diaspora au terrain.",
    href: "/ecosysteme-2026",
  },
];

export const partnerBenefits = [
  {
    title: "Prospecter de nouveaux clients",
    text:
      "Le salon reunit un public qualifie, curieux et engage, compose de visiteurs, entrepreneurs, familles et relais d'influence.",
  },
  {
    title: "Developper votre business",
    text:
      "Congo Na Paris rassemble des professionnels, des institutions et des particuliers avec lesquels construire des relations utiles et durables.",
  },
  {
    title: "Activer votre visibilite",
    text:
      "Le salon offre une vitrine physique et digitale pour prendre la parole, exposer, diffuser et renforcer votre notoriete.",
  },
];

export const partnerSummaryPacks = [
  {
    name: "Packs salon",
    summary:
      "Des niveaux de partenariat pour soutenir la visibilite, la communication, les badges exposants, les invitations et les activations sur le salon.",
  },
  {
    name: "Services a la carte",
    summary:
      "Stand, visibilite, communication, prise de parole, animation, gala et diffusion CNP en ligne adaptes a vos besoins.",
  },
  {
    name: "Partenariats a impact",
    summary:
      "Des formats de soutien lies a DARAJA et a l'ecosysteme 2026 pour valoriser un engagement concret envers la prosperite partagee.",
  },
];

export const partnerServiceHighlights = [
  "Stand et surface d'exposition",
  "Visibilite et communication",
  "Prise de parole et animation",
  "Soiree de gala et hospitalite",
  "Diffusion CNP en ligne",
];

export const magazineArticles = [
  {
    id: "1",
    template: "insight",
    title: "Pourquoi le salon Tonga Mboka est le coeur de CNP 2026",
    excerpt:
      "Le salon concentre la visibilite, les rencontres et l'energie de tout l'ecosysteme Congo Na Paris 2026.",
    image: conferenceImage,
    category: "Salon",
    date: "02 avril 2026",
    author: "Redaction CNP Mag",
    readTime: "4 min",
    heroLabel: "Salon",
    intro:
      "En 2026, le salon Tonga Mboka devient le point de rencontre principal entre diplomatie culturelle, business, exposition, talents et diaspora.",
    paragraphs: [
      "Congo Na Paris ne se resume pas a un simple evenement. Mais le salon est l'espace ou cette dynamique prend forme de la maniere la plus visible et la plus concrete.",
      "Pendant deux jours, institutions, entrepreneurs, artistes, exposants, visiteurs et partenaires evoluent dans un meme parcours. Cette concentration de profils donne au salon un role strategique dans l'ecosysteme 2026.",
      "Le site doit donc mettre le salon au premier plan, tandis que DARAJA et Voyage Congo apparaissent comme des prolongements naturels de cette meme ambition.",
    ],
    keyPoints: [
      "Deux jours de salon a Paris",
      "Cinq univers d'experience",
      "Un carrefour entre culture, economie et diplomatie sociale",
    ],
    pullQuote:
      "Le salon ne remplace pas le mouvement Congo Na Paris. Il lui donne un centre de gravite clair et visible.",
  },
  {
    id: "2",
    template: "feature",
    title: "Tonga Mboka: construire la paix par la connexion",
    excerpt:
      "Le theme 2026 relie paix, prosperite partagee, diaspora active et responsabilite collective.",
    image: audienceImage,
    category: "Theme",
    date: "28 mars 2026",
    author: "Equipe editoriale",
    readTime: "5 min",
    heroLabel: "Theme",
    intro:
      "Tonga Mboka traduit une orientation simple: construire le Congo de demain par le lien, la cooperation et l'action concrere.",
    paragraphs: [
      "La paix ne se decrete pas. Elle se construit a travers le dialogue, la cooperation, la confiance et la creation d'opportunites partagees.",
      "Dans cette perspective, le salon devient un espace ou les acteurs du terrain, les entrepreneurs, les institutions, les jeunes et les diasporas peuvent se rencontrer avec un objectif plus large que l'evenement lui-meme.",
      "C'est cette articulation entre culture, economie et responsabilite qui donne au theme 2026 sa force politique, sociale et symbolique.",
    ],
    highlights: [
      { label: "Paix", value: "Dialogue" },
      { label: "Diaspora", value: "Connexion" },
      { label: "Prosperite", value: "Action" },
    ],
    gallery: [speakerImage, conferenceImage, networkingImage],
  },
  {
    id: "3",
    template: "reportage",
    title: "Les talents congolais au coeur du salon",
    excerpt:
      "Le salon met en avant les talents, les savoir-faire et les expressions congolaises comme partie prenante de l'experience globale.",
    image: cultureEditorialImage,
    category: "Culture",
    date: "21 mars 2026",
    author: "CNP Mag",
    readTime: "3 min",
    heroLabel: "Talents",
    intro:
      "A Congo Na Paris, la culture n'est pas un decor. Elle structure l'identite du salon et donne corps a la promesse de diplomatie culturelle.",
    paragraphs: [
      "Les talents congolais ne sont pas convoques pour illustrer un discours. Ils participent pleinement a la narration de l'evenement, a sa desirabilite et a sa capacite a rassembler.",
      "Cette place accordee a la culture change la perception du salon: il ne s'agit pas seulement d'un forum business, mais d'un espace ou l'identite, la creativite et la relation humaine circulent ensemble.",
      "C'est aussi ce qui permet au public de vivre une experience plus forte, plus sensible et plus memorable.",
    ],
    timeline: [
      { title: "Parole", text: "Des voix, des debats et des angles editoriaux qui donnent du sens au salon." },
      { title: "Presence", text: "Des talents visibles dans l'exposition, les rencontres et les temps forts." },
      { title: "Cloture", text: "Un final culturel qui prolonge le salon au-dela du contenu strictement institutionnel." },
    ],
  },
  {
    id: "4",
    template: "insight",
    title: "DARAJA et Voyage Congo: l'apres-salon commence ici",
    excerpt:
      "Au-dela des deux jours a Paris, l'ecosysteme 2026 prolonge l'energie du salon par l'investissement et l'immersion terrain.",
    image: heroPoster,
    category: "Ecosysteme 2026",
    date: "15 mars 2026",
    author: "Redaction CNP Mag",
    readTime: "4 min",
    heroLabel: "Ecosysteme",
    intro:
      "Le salon est le coeur visible de CNP 2026, mais il s'inscrit dans un parcours plus large ou DARAJA et Voyage Congo prennent le relais.",
    paragraphs: [
      "DARAJA vise a orienter des capitaux, de la visibilite et de l'accompagnement vers des projets a impact portes par la diaspora.",
      "Voyage Congo transforme ensuite l'intention en immersion: terrain, rencontres locales, institutions, entrepreneurs et comprehension directe des contextes.",
      "Ensemble, ces initiatives montrent que CNP 2026 ne veut pas seulement rassembler, mais faire circuler l'action entre Paris et les Congo.",
    ],
    keyPoints: [
      "Le salon comme point de rencontre",
      "DARAJA comme levier de transformation",
      "Voyage Congo comme passage a l'action",
    ],
    pullQuote:
      "Le salon donne l'impulsion. DARAJA et Voyage Congo donnent la profondeur et la suite.",
  },
];

export function getMagazineArticle(id: string) {
  return magazineArticles.find((article) => article.id === id);
}
