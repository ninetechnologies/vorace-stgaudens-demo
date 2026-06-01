/**
 * Carte Vorace — source : carte officielle de Flo
 * (Vorace Pizzeria & Restaurant, 59 Avenue de l'Isle, 31800 Saint-Gaudens).
 * Prix relevés sur post Facebook du 18 octobre 2025.
 * Photos produit réelles (Facebook + Google Maps).
 */

const pi = (s) => `/images/pizzas/${s}.jpg`;
const ai = (s) => `/images/ambiance/${s}.jpg`;

export const FEATURED = [
  {
    id: 'tartufo',
    name: 'Tartufo',
    desc: "Crème à la truffe, Fior di Latte, burrata à la truffe, jambon cuit truffé.",
    price: 18,
    image: pi('tartufo'),
    signature: true,
  },
  {
    id: 'pistacchio',
    name: 'Pistacchio',
    desc: "Pesto de pistaches grillées, Fior di Latte, burrata di Buffalo, mortadelle pistache, brisures.",
    price: 17,
    image: pi('pistacchio'),
    signature: true,
  },
  {
    id: 'cremosa',
    name: 'Cremosa',
    desc: "Crème de burrata aux zests de citron, jambon de Parme 18 mois, tomates séchées, pesto maison.",
    price: 16,
    image: pi('cremosa'),
    popular: true,
  },
  {
    id: 'carbonara',
    name: 'Carbonara',
    desc: "Crème de carbonara maison, Guanciale de Porc Noir de Bigorre grillé, Fior di Latte, poivre.",
    price: 15,
    image: pi('carbonara'),
  },
  {
    id: 'piccante',
    name: 'Piccante',
    desc: "Tomate Bio des Pouilles, Spianata Piccante, roquette, coulis de poivrons grillés, huile pimentée.",
    price: 14,
    image: pi('piccante'),
    popular: true,
  },
  {
    id: 'chevre-miel',
    name: 'Chèvre Miel',
    desc: "Base crème, bûche de chèvre frais du Peuple des Chèvres, miel de romarin des Frères Sarriguet, romarin.",
    price: 14,
    image: pi('chevre-miel'),
    signature: true,
  },
];

export const CARTE = [
  {
    cat: 'Les Créations',
    items: [
      { name: 'Tartufo', desc: "Crème à la truffe, Fior di Latte, burrata à la truffe, jambon cuit truffé.", price: 18, img: pi('tartufo') },
      { name: 'Pistacchio', desc: "Pesto de pistaches grillées, burrata di Buffalo, mortadelle pistache, brisures.", price: 17, img: pi('pistacchio') },
      { name: 'Cremosa', desc: "Crème de burrata zests citron, jambon de Parme 18 mois, tomates séchées, pesto maison.", price: 16, img: pi('cremosa') },
      { name: 'Carbonara', desc: "Crème carbonara maison, Guanciale de Porc Noir de Bigorre grillé, Fior di Latte.", price: 15, img: pi('carbonara') },
      { name: 'Piccante', desc: "Tomate Bio Pouilles, Spianata Piccante, roquette, coulis poivrons grillés, huile pimentée.", price: 14, img: pi('piccante') },
    ],
  },
  {
    cat: 'Les Classiques',
    items: [
      { name: 'Margherita', desc: "Tomate Bio des Pouilles, basilic frais, Fior di Latte, huile d'olive.", price: 12, img: pi('margherita') },
      { name: 'Chèvre Miel', desc: "Crème, Fior di Latte, bûche de chèvre frais, miel de romarin Frères Sarriguet, romarin.", price: 14, img: pi('chevre-miel') },
      { name: 'Végétarienne', desc: "Crème de champignons, Fior di Latte, légumes marinés/grillés, parmesan 24 mois, pesto.", price: 14 },
      { name: 'Regina', desc: "Tomate Bio Pouilles, jambon cuit sans nitrite, Fior di Latte, champignons, origan, oignon rouge.", price: 15, img: pi('regina') },
      { name: 'Tartiflette', desc: "Crème, pomme de terre, compotée d'oignons, Reblochon au lait cru, Ventrèche de Porc Noir de Bigorre.", price: 17, img: pi('tartiflette') },
    ],
  },
  {
    cat: 'Les Fromages',
    items: [
      { name: '4 Formaggi', desc: "Fior di Latte, Scamorza fumée, gorgonzola, pecorino semi-affiné.", price: 15, img: pi('4-formaggi') },
      { name: '4 Fromages', desc: "Crème, tomme de la ferme de Prouzic, Fourme d'Ambert, Reblochon lait cru, raclette de chèvre Bio des Hounts.", price: 15, img: pi('4-fromages') },
    ],
  },
  {
    cat: 'Desserts maison',
    items: [
      { name: 'Cookie Pistache', desc: "Cookie fourré à la crème de pistache artisanale.", price: 5, img: pi('cookie-pistache') },
      { name: 'Cookie Choco', desc: "Cookie maison aux pépites de chocolat.", price: 5 },
    ],
  },
];

/* La Pizza du Moment — annoncée FB + Insta */
export const PIZZA_DU_MOMENT = {
  name: 'La Pizza du Moment',
  description: "En fonction des mois et des saisons. La recette est annoncée sur Facebook et Instagram. Demandez à Flo.",
  image: ai('enseigne'),
};

/* Options de personnalisation pizza Vorace */
export const PIZZA_OPTIONS = {
  // Toutes les pizzas dispo en Petite (−15 %) ou Normale
  tailles: [
    { id: 'petite', label: 'Petite', factor: 0.85, sub: '−15 %' },
    { id: 'normale', label: 'Normale', factor: 1, sub: 'Format standard' },
  ],
  // Suppléments officiels — carte Vorace
  supplements: [
    { label: 'Olives', price: 1.5 },
    { label: 'Œuf', price: 1.5 },
    { label: 'Crème', price: 1.5 },
    { label: 'Miel', price: 1.5 },
    { label: 'Légumes', price: 2.0 },
    { label: 'Fromage', price: 2.0 },
    { label: 'Charcuterie / Viande', price: 3.0 },
    { label: 'Anchois', price: 4.0 },
    { label: 'Burrata', price: 4.0 },
  ],
};

/* Compat code grill-chicken — Vorace n'a pas de tacos, on garde le nom de variable
   pour que les composants importés (Order.jsx, TacosCustomizer.jsx) continuent à charger. */
export const TACOS_OPTIONS = {
  viandes: [],
  sauces: [],
  gratinages: [],
  supplements: PIZZA_OPTIONS.supplements,
  menuDrinks: [],
  menuPrice: 0,
  fritesAccomp: [],
};

export const LOCATIONS = [
  {
    id: 'saint-gaudens',
    name: 'Vorace · Saint-Gaudens',
    address: "59 Avenue de l'Isle",
    zip: '31800 Saint-Gaudens',
    tel: '07 69 91 73 82',
    telHref: '+33769917382',
    rating: '4,9',
    reviews: '87 avis Google',
    image: ai('interieur'),
    mapsEmbed:
      "https://maps.google.com/maps?q=59+Avenue+de+l%27Isle+31800+Saint-Gaudens&t=&z=16&ie=UTF8&iwloc=&output=embed",
    mapsDir:
      "https://www.google.com/maps/dir/?api=1&destination=59+Avenue+de+l%27Isle+31800+Saint-Gaudens",
    hours: [
      { day: 'Lundi', value: 'Fermé', closed: true },
      { day: 'Mardi', value: '18h30 – 21h30' },
      { day: 'Mercredi', value: '18h30 – 21h30' },
      { day: 'Jeudi', value: '18h30 – 21h30' },
      { day: 'Vendredi', value: '18h30 – 21h30' },
      { day: 'Samedi', value: '18h30 – 21h30' },
      { day: 'Dimanche', value: 'Fermé', closed: true },
    ],
  },
];

/* Horaires consolidés (utilisés par Order.jsx pour les créneaux disponibles).
   Vorace = soir uniquement Mar-Sam 18h30-21h30. */
export const SERVICE_HOURS = {
  byWeekday: {
    0: null,
    1: null,
    2: { start: '18:30', end: '21:30' },
    3: { start: '18:30', end: '21:30' },
    4: { start: '18:30', end: '21:30' },
    5: { start: '18:30', end: '21:30' },
    6: { start: '18:30', end: '21:30' },
  },
  slotMinutes: 15,
};

/* Modes de commande Vorace — pas de livraison. */
export const ORDER_MODES = [
  { id: 'sur-place', label: 'Sur place', desc: 'Réserver une table et manger au resto.', icon: '◐' },
  { id: 'emporter', label: 'À emporter', desc: 'Préparée, prête à récupérer au comptoir.', icon: '◑' },
];

/* Réseaux Vorace */
export const SOCIAL = {
  facebook: 'https://www.facebook.com/profile.php?id=61566530946394',
  instagram: 'https://www.instagram.com/vorace.pizza/',
  google: 'https://www.google.com/maps/place/VORACE/@43.1162029,0.7266264,17z',
};

/* Identité Vorace pour les composants génériques */
export const BRAND = {
  name: 'Vorace',
  tagline: 'Pizzeria & Restaurant',
  city: 'Saint-Gaudens',
  signature: "Tout est fait maison, avec amour et passion.",
  ownerFirstName: 'Flo',
  ownerFullName: 'Florian Autin',
  siret: '934 180 639 00015',
  legalForm: 'SASU au capital de 2 000 €',
};
