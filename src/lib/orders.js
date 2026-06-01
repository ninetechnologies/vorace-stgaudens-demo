/**
 * Store de commandes (démo) — partagé entre le tunnel client et l'écran cuisine.
 * Basé sur localStorage + events : une commande passée dans le navigateur apparaît
 * instantanément sur l'écran cuisine (même appareil). En prod : Firestore temps réel
 * synchronisé entre le téléphone client et la tablette cuisine.
 */
const KEY = 'gc_orders';
const EV = 'vorace:orders';
export const OPEN_EVENT = 'gc:open-kitchen';

export function getOrders() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; }
}

function save(arr) {
  localStorage.setItem(KEY, JSON.stringify(arr));
  window.dispatchEvent(new CustomEvent(EV));
}

export function placeOrder(order) {
  const arr = getOrders();
  arr.unshift(order);
  save(arr);
}

export function updateStatus(code, status) {
  save(getOrders().map((o) => (o.code === code ? { ...o, status } : o)));
}

export function clearOrders() { save([]); }

export function subscribe(cb) {
  const h = () => cb(getOrders());
  window.addEventListener(EV, h);
  window.addEventListener('storage', h);
  return () => { window.removeEventListener(EV, h); window.removeEventListener('storage', h); };
}

export function openKitchen() { window.dispatchEvent(new CustomEvent(OPEN_EVENT)); }
