/**
 * Carte Vorace — source : carte officielle de Flo, post Facebook du 18 octobre 2025.
 * Tous les prix en euros.
 * Catégories : creation | classique | fromages | autres
 *
 * Photos :
 * - realPhoto: true → vraie photo Vorace (récupérée de Facebook / Google Maps)
 */

export const CATEGORIES = [
  { id: 'all', label: 'Toute la carte' },
  { id: 'creation', label: 'Les Créations' },
  { id: 'classique', label: 'Les Classiques' },
  { id: 'fromages', label: 'Les Fromages' },
  { id: 'autres', label: 'Desserts & options' },
];

const local = (slug, ext = 'jpg') => `/images/pizzas/${slug}.${ext}`;

export const PIZZAS = [
  // ===== LES CRÉATIONS =====
  {
    id: 'tartufo',
    name: 'Tartufo',
    category: 'creation',
    base: 'creme',
    ingredients: ['Crème à la truffe', 'Fior di Latte', 'Burrata à la truffe', 'Jambon cuit truffé'],
    afterCooking: ['Burrata à la truffe', 'Jambon cuit truffé'],
    price: 18,
    price26: 15.3,
    price33: 18,
    image: local('tartufo'),
    realPhoto: true,
    signature: true,
  },
  {
    id: 'pistacchio',
    name: 'Pistacchio',
    category: 'creation',
    base: 'creme',
    ingredients: ['Pesto de pistaches grillées', 'Fior di Latte', 'Burrata di Buffalo', 'Mortadelle à la pistache', 'Brisures de pistache'],
    afterCooking: ['Burrata di Buffalo', 'Mortadelle à la pistache', 'Brisures de pistache'],
    price: 17,
    price26: 14.45,
    price33: 17,
    image: local('pistacchio'),
    realPhoto: true,
    signature: true,
  },
  {
    id: 'cremosa',
    name: 'Cremosa',
    category: 'creation',
    base: 'creme',
    ingredients: ['Crème de burrata aux zests de citron', 'Oignon rouge', 'Fior di Latte', 'Jambon de Parme 18 mois', 'Tomates séchées', 'Pesto maison'],
    price: 16,
    price26: 13.6,
    price33: 16,
    image: local('cremosa'),
    realPhoto: true,
  },
  {
    id: 'carbonara',
    name: 'Carbonara',
    category: 'creation',
    base: 'creme',
    ingredients: ['Crème de Carbonara maison', 'Guanciale de Porc Noir de Bigorre grillé', 'Fior di Latte'],
    afterCooking: ['Poivre', 'Tranches de Guanciale'],
    price: 15,
    price26: 12.75,
    price33: 15,
    image: local('carbonara'),
    realPhoto: true,
  },
  {
    id: 'piccante',
    name: 'Piccante',
    category: 'creation',
    base: 'tomate',
    ingredients: ['Tomate Bio des Pouilles', 'Fior di Latte', 'Spianata Piccante'],
    afterCooking: ['Roquette', 'Coulis de poivrons grillés', 'Huile pimentée'],
    price: 14,
    price26: 11.9,
    price33: 14,
    image: local('piccante'),
    realPhoto: true,
    spicy: true,
  },

  // ===== LES CLASSIQUES =====
  {
    id: 'margherita',
    name: 'Margherita',
    category: 'classique',
    base: 'tomate',
    ingredients: ['Tomate Bio des Pouilles', 'Basilic frais', 'Fior di Latte', "Huile d'olive"],
    price: 12,
    price26: 10.2,
    price33: 12,
    image: local('margherita'),
    realPhoto: true,
    veggie: true,
    bio: true,
  },
  {
    id: 'chevre-miel',
    name: 'Chèvre Miel',
    category: 'classique',
    base: 'creme',
    ingredients: ['Base crème', 'Fior di Latte', 'Bûche de chèvre frais du Peuple des Chèvres', 'Miel de romarin des Frères Sarriguet', 'Romarin'],
    price: 14,
    price26: 11.9,
    price33: 14,
    image: local('chevre-miel'),
    realPhoto: true,
    veggie: true,
    bio: true,
  },
  {
    id: 'vegetarienne',
    name: 'Végétarienne',
    category: 'classique',
    base: 'creme',
    ingredients: ['Crème de champignons', 'Fior di Latte', 'Légumes marinés ou grillés'],
    afterCooking: ['Parmesan 24 mois', 'Pesto maison'],
    price: 14,
    price26: 11.9,
    price33: 14,
    image: null,
    veggie: true,
    bio: true,
  },
  {
    id: 'regina',
    name: 'Regina',
    category: 'classique',
    base: 'tomate',
    ingredients: ['Tomate Bio des Pouilles', 'Jambon cuit sans nitrite', 'Fior di Latte', 'Champignons', 'Origan', 'Oignon rouge', 'Poivre du moulin'],
    price: 15,
    price26: 12.75,
    price33: 15,
    image: local('regina'),
    realPhoto: true,
  },
  {
    id: 'tartiflette',
    name: 'Tartiflette',
    category: 'classique',
    base: 'creme',
    ingredients: ['Base crème', 'Pomme de terre', "Compotée d'oignons", 'Reblochon au lait cru', 'Ventrèche de Porc Noir de Bigorre'],
    price: 17,
    price26: 14.45,
    price33: 17,
    image: local('tartiflette'),
    realPhoto: true,
  },

  // ===== LES FROMAGES =====
  {
    id: '4-formaggi',
    name: '4 Formaggi',
    category: 'fromages',
    base: 'creme',
    ingredients: ['Fior di Latte', 'Scamorza fumée', 'Gorgonzola', 'Pecorino semi-affiné'],
    price: 15,
    price26: 12.75,
    price33: 15,
    image: local('4-formaggi'),
    realPhoto: true,
    veggie: true,
    italie: true,
  },
  {
    id: '4-fromages',
    name: '4 Fromages',
    category: 'fromages',
    base: 'creme',
    ingredients: ['Base crème', 'Tomme de la ferme de Prouzic', "Fourme d'Ambert", 'Reblochon au lait cru', 'Raclette de chèvre Bio des Hounts'],
    price: 15,
    price26: 12.75,
    price33: 15,
    image: local('4-fromages'),
    realPhoto: true,
    veggie: true,
    france: true,
  },

  // ===== DESSERTS & OPTIONS =====
  {
    id: 'cookie-pistache',
    name: 'Cookie Pistache',
    category: 'autres',
    base: 'dessert',
    ingredients: ['Cookie fourré à la crème de pistache artisanale'],
    price: 5,
    price26: 4.25,
    price33: 5,
    image: local('cookie-pistache'),
    realPhoto: true,
    dessert: true,
  },
  {
    id: 'cookie-choco',
    name: 'Cookie Choco',
    category: 'autres',
    base: 'dessert',
    ingredients: ['Cookie maison aux pépites de chocolat'],
    price: 5,
    price26: 4.25,
    price33: 5,
    image: null,
    dessert: true,
  },
];

export const PIZZA_DU_MOMENT = {
  name: 'La Pizza du Moment',
  description: 'En fonction des mois et des saisons. La recette est annoncée sur Facebook et Instagram. Demandez à Flo.',
  image: '/images/ambiance/enseigne.jpg',
};

export const PETITE_TAILLE = {
  label: 'Pizza Petite Taille',
  description: 'Toutes les pizzas sont disponibles en petite taille, -15 % sur le prix initial.',
  discount: 0.15,
};

export const SUPPLEMENTS = [
  { label: 'Olives', price: 1.50 },
  { label: 'Œuf / Miel / Crème', price: 1.50 },
  { label: 'Légumes', price: 2.00 },
  { label: 'Fromage', price: 2.00 },
  { label: 'Charcuterie / Viande', price: 3.00 },
  { label: 'Anchois', price: 4.00 },
  { label: 'Burrata', price: 4.00 },
];


// Stubs pour compatibilité Menu.jsx (Vorace n'a pas ces options ZIDI)
export const CALZONES = [];
export const FAMILIALE = null;
export const DESSERTS = [
  { name: 'Cookie Choco', price: 5 },
  { name: 'Cookie Pistache', price: 5 },
];

/* Photos d'ambiance disponibles pour les sections "Notre maison" / "Contact" */
export const AMBIANCE = {
  interieur: '/images/ambiance/interieur.jpg',
  enseigne: '/images/ambiance/enseigne.jpg',
  duoPizzas: '/images/ambiance/duo-pizzas.jpg',
  videoHero: '/videos/hero-desktop.mp4',
  videoHeroMobile: '/videos/hero-mobile.mp4',
  videoHeroPoster: '/videos/hero-poster.jpg',
};
