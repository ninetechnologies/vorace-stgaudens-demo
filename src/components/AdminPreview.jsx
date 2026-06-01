import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/* Commandes mock typiques d'une journée ZIDI (heure simulée 12h30, samedi midi) */
const ORDERS = [
  {
    id: 'ZID-3853',
    time: '12h25',
    customer: 'Café des Sports',
    phone: '+33567845512',
    address: '3 place Jean Jaurès, 31800 Saint-Gaudens',
    items: 8,
    label: '8 pizzas pour les supporters',
    total: 89.60,
    paid: 'paid',
    status: 'preparing',
    lat: 43.1108,
    lng: 0.7239,
    isNew: true,
  },
  {
    id: 'ZID-3852',
    time: '12h18',
    customer: 'Famille Rocha',
    phone: '+33625147890',
    address: 'Lieu-dit Mascard, 31800 Saint-Gaudens',
    items: 6,
    label: '6 pizzas + 6 boissons',
    total: 78.40,
    paid: 'paid',
    status: 'oven',
    lat: 43.1011,
    lng: 0.7384,
  },
  {
    id: 'ZID-3851',
    time: '12h12',
    customer: 'Thomas V.',
    phone: '+33612458790',
    address: '7 rue de la Mairie, 31800 Saint-Gaudens',
    items: 2,
    label: "1 O'Tchez Normale · 1 Tiramisu",
    total: 14.20,
    paid: 'failed',
    status: 'cancelled',
    lat: 43.1102,
    lng: 0.7252,
  },
  {
    id: 'ZID-3850',
    time: '12h08',
    customer: 'Inès K.',
    phone: '+33677125683',
    address: '14 av. Maréchal Joffre, 31800 Saint-Gaudens',
    items: 3,
    label: '3 pizzas mer & fromages',
    total: 31.20,
    paid: 'paid',
    status: 'delivered',
    lat: 43.1064,
    lng: 0.7311,
  },
  {
    id: 'ZID-3849',
    time: '12h02',
    customer: 'Marc D.',
    phone: '+33634785612',
    address: '28 rue de la République, 31800 Saint-Gaudens',
    items: 2,
    label: '1 Pizza Familiale · 1 Margarita',
    total: 47.90,
    paid: 'pending',
    status: 'preparing',
    lat: 43.1088,
    lng: 0.7245,
  },
  {
    id: 'ZID-3848',
    time: '11h53',
    customer: 'Karim B.',
    phone: '+33689412375',
    address: '5 rue Thiers, 31800 Saint-Gaudens',
    items: 2,
    label: '2 Kebab Normale',
    total: 22.30,
    paid: 'paid',
    status: 'delivery',
    lat: 43.1092,
    lng: 0.7268,
  },
  {
    id: 'ZID-3847',
    time: '11h47',
    customer: 'Sophie Martin',
    phone: '+33655842163',
    address: '12 av. de Boulogne, 31800 Saint-Gaudens',
    items: 4,
    label: '4 pizzas familles',
    total: 36.50,
    paid: 'paid',
    status: 'delivered',
    lat: 43.1124,
    lng: 0.7193,
  },
];

const PAID_CONFIG = {
  paid:    { label: 'Payé',       color: 'success', icon: '✓' },
  pending: { label: 'En attente', color: 'warning', icon: '⏱' },
  failed:  { label: 'Échec CB',   color: 'danger',  icon: '!' },
};

const STATUS_CONFIG = {
  preparing: { label: 'En préparation', dot: 'orange' },
  oven:      { label: 'Au four',        dot: 'red'    },
  delivery:  { label: 'En livraison',   dot: 'blue'   },
  delivered: { label: 'Livrée',         dot: 'green'  },
  cancelled: { label: 'Annulée',        dot: 'gray'   },
};

const fmt = (n) => n.toFixed(2).replace('.', ',') + ' €';

function buildWazeUrl(lat, lng) {
  return `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
}
function buildMapsUrl(lat, lng, address) {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encodeURIComponent(address)}`;
}

export default function AdminPreview() {
  const [activeOrder, setActiveOrder] = useState(null);

  const kpis = {
    count: ORDERS.length,
    paid: ORDERS.filter((o) => o.paid === 'paid').length,
    pending: ORDERS.filter((o) => o.paid === 'pending').length,
    failed: ORDERS.filter((o) => o.paid === 'failed').length,
    revenuePaid: ORDERS.filter((o) => o.paid === 'paid').reduce((acc, o) => acc + o.total, 0),
    revenuePending: ORDERS.filter((o) => o.paid === 'pending').reduce((acc, o) => acc + o.total, 0),
  };

  return (
    <section className="z-admin" id="admin">
      <div className="z-container">
        <motion.div
          className="z-admin-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="z-eyebrow" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            <span style={{ background: 'rgba(255,255,255,0.7)', width: 28, height: 1.5 }} />
            Côté cuisine · Vue admin
          </span>
          <h2 className="z-admin-title">
            Toutes les commandes en <em>un coup d'œil</em>.
          </h2>
          <p className="z-admin-intro">
            Vous voyez en temps réel qui a payé, qui attend, et qui livrer
            ensuite. Un clic ouvre l'itinéraire dans Waze ou Google Maps —
            fini le copier-coller des adresses.
          </p>
        </motion.div>

        <motion.div
          className="z-admin-frame"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top bar simulé d'une app admin */}
          <div className="z-admin-topbar">
            <div className="z-admin-brand">
              <span className="z-admin-dot" />
              <span>Vorace · Tableau de bord</span>
            </div>
            <div className="z-admin-meta">
              <span className="z-admin-live">
                <span className="z-pulse" /> En direct · Samedi 12h30
              </span>
            </div>
          </div>

          {/* KPIs */}
          <div className="z-kpis">
            <div className="z-kpi">
              <span className="z-kpi-label">Commandes du jour</span>
              <strong className="z-kpi-value">{kpis.count}</strong>
              <span className="z-kpi-sub">
                {kpis.paid} payées · {kpis.pending} en attente · {kpis.failed} échec
              </span>
            </div>
            <div className="z-kpi z-kpi-revenue">
              <span className="z-kpi-label">CA encaissé</span>
              <strong className="z-kpi-value">{fmt(kpis.revenuePaid)}</strong>
              <span className="z-kpi-sub z-kpi-positive">
                + {fmt(kpis.revenuePending)} en attente paiement
              </span>
            </div>
            <div className="z-kpi">
              <span className="z-kpi-label">Temps moyen livraison</span>
              <strong className="z-kpi-value">28 min</strong>
              <span className="z-kpi-sub">Objectif &lt; 30 min · OK</span>
            </div>
            <div className="z-kpi">
              <span className="z-kpi-label">À l'instant</span>
              <strong className="z-kpi-value">2 au four</strong>
              <span className="z-kpi-sub">1 en livraison · 1 en prépa</span>
            </div>
          </div>

          {/* Table commandes */}
          <div className="z-orders-table">
            <div className="z-orders-table-head">
              <span>Commande</span>
              <span>Client</span>
              <span>Adresse</span>
              <span>Total</span>
              <span>Paiement</span>
              <span>Statut</span>
              <span className="z-orders-actions-col">Actions</span>
            </div>

            <AnimatePresence>
              {ORDERS.map((o, i) => (
                <motion.div
                  key={o.id}
                  className="z-order-row"
                  data-new={o.isNew}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  onClick={() => setActiveOrder(o)}
                >
                  <div className="z-order-id">
                    <strong>{o.id}</strong>
                    <span>{o.time}</span>
                  </div>
                  <div className="z-order-client">
                    <strong>{o.customer}</strong>
                    <span>{o.phone.replace('+33', '0').replace(/(\d{2})(?=\d)/g, '$1 ').trim()}</span>
                  </div>
                  <div className="z-order-address">{o.address}</div>
                  <div className="z-order-total">{fmt(o.total)}</div>
                  <div className="z-order-paid">
                    <span
                      className="z-pill"
                      data-color={PAID_CONFIG[o.paid].color}
                    >
                      <span className="z-pill-icon">{PAID_CONFIG[o.paid].icon}</span>
                      {PAID_CONFIG[o.paid].label}
                    </span>
                  </div>
                  <div className="z-order-status">
                    <span className="z-status">
                      <span className="z-status-dot" data-color={STATUS_CONFIG[o.status].dot} />
                      {STATUS_CONFIG[o.status].label}
                    </span>
                  </div>
                  <div className="z-order-actions" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={buildWazeUrl(o.lat, o.lng)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-action z-action-primary"
                      title="Ouvrir l'itinéraire dans Waze"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Waze
                    </a>
                    <a
                      href={`tel:${o.phone}`}
                      className="z-action"
                      title="Appeler le client"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="z-admin-footer">
            <div className="z-admin-feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <strong>Itinéraire Waze en 1 clic</strong>
                <span>Plus de copier-coller des adresses</span>
              </div>
            </div>
            <div className="z-admin-feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <div>
                <strong>Statut paiement instantané</strong>
                <span>Plus de doute "il a payé ou pas&nbsp;?"</span>
              </div>
            </div>
            <div className="z-admin-feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="9" y1="9" x2="15" y2="9" />
                <line x1="9" y1="13" x2="15" y2="13" />
              </svg>
              <div>
                <strong>Export comptable mensuel</strong>
                <span>CSV exportable URSSAF en 1 clic</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeOrder && (
          <motion.div
            className="z-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveOrder(null)}
          >
            <motion.div
              className="z-modal"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="z-modal-close" onClick={() => setActiveOrder(null)} aria-label="Fermer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <span className="z-modal-eyebrow">Détail commande</span>
              <h3 className="z-modal-title">{activeOrder.id}</h3>
              <p className="z-modal-time">Passée à {activeOrder.time}</p>

              <div className="z-modal-section">
                <span className="z-modal-label">Client</span>
                <p>
                  <strong>{activeOrder.customer}</strong><br />
                  {activeOrder.phone.replace('+33', '0').replace(/(\d{2})(?=\d)/g, '$1 ').trim()}
                </p>
              </div>

              <div className="z-modal-section">
                <span className="z-modal-label">Livraison</span>
                <p>{activeOrder.address}</p>
                <small style={{ color: 'var(--z-text-muted)', display: 'block', marginTop: 4, fontSize: '0.78rem' }}>
                  GPS · {activeOrder.lat}, {activeOrder.lng}
                </small>
              </div>

              <div className="z-modal-section">
                <span className="z-modal-label">Commande</span>
                <p>{activeOrder.label}</p>
                <p style={{ fontFamily: 'var(--z-font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--z-black)', marginTop: 6 }}>
                  {fmt(activeOrder.total)}
                </p>
              </div>

              <div className="z-modal-actions">
                <a
                  href={buildWazeUrl(activeOrder.lat, activeOrder.lng)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-btn z-btn-primary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Ouvrir dans Waze
                </a>
                <a
                  href={buildMapsUrl(activeOrder.lat, activeOrder.lng, activeOrder.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-btn-ghost-dark"
                >
                  Google Maps
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .z-admin {
          padding: 100px 0 120px;
          background: linear-gradient(180deg, var(--z-green-dark) 0%, var(--z-black) 100%);
          color: var(--z-white);
          position: relative;
        }
        .z-admin::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(214, 40, 40, 0.18), transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(201, 162, 75, 0.12), transparent 40%);
          pointer-events: none;
        }
        .z-admin > * { position: relative; z-index: 1; }

        .z-admin-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 56px;
        }
        .z-admin-title {
          font-family: var(--z-font-display);
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--z-white);
          margin: 20px 0 20px;
        }
        .z-admin-title em {
          font-style: italic;
          color: #FFB84D;
          font-weight: 900;
        }
        .z-admin-intro {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .z-admin-frame {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          backdrop-filter: blur(20px);
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
        }

        .z-admin-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 24px;
          background: rgba(0, 0, 0, 0.4);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .z-admin-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
        }
        .z-admin-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--z-red);
        }
        .z-admin-meta {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.6);
        }
        .z-admin-live {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .z-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2EFF8C;
          box-shadow: 0 0 0 0 rgba(46, 255, 140, 0.7);
          animation: z-pulse 2s infinite;
        }
        @keyframes z-pulse {
          0% { box-shadow: 0 0 0 0 rgba(46, 255, 140, 0.7); }
          70% { box-shadow: 0 0 0 12px rgba(46, 255, 140, 0); }
          100% { box-shadow: 0 0 0 0 rgba(46, 255, 140, 0); }
        }

        .z-kpis {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1px;
          background: rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .z-kpi {
          padding: 22px 24px;
          background: rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .z-kpi-label {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
        }
        .z-kpi-value {
          font-family: var(--z-font-display);
          font-size: 2rem;
          font-weight: 800;
          color: var(--z-white);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .z-kpi-revenue .z-kpi-value {
          color: #FFB84D;
        }
        .z-kpi-sub {
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.55);
        }
        .z-kpi-positive {
          color: rgba(46, 255, 140, 0.85);
        }

        .z-orders-table {
          padding: 0;
        }
        .z-orders-table-head,
        .z-order-row {
          display: grid;
          grid-template-columns: 110px 140px minmax(180px, 1.4fr) 90px 120px 140px 130px;
          gap: 16px;
          align-items: center;
          padding: 14px 24px;
          font-size: 0.88rem;
        }
        .z-orders-table-head {
          background: rgba(0, 0, 0, 0.4);
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
          padding: 14px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .z-order-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          transition: background 0.2s;
        }
        .z-order-row:hover {
          background: rgba(255, 255, 255, 0.04);
        }
        .z-order-row[data-new="true"] {
          background: rgba(214, 40, 40, 0.1);
          border-left: 3px solid var(--z-red);
          padding-left: 21px;
        }
        .z-order-id strong {
          display: block;
          font-weight: 700;
          color: var(--z-white);
        }
        .z-order-id span {
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.5);
        }
        .z-order-client strong {
          display: block;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
        }
        .z-order-client span {
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.5);
        }
        .z-order-address {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.35;
        }
        .z-order-total {
          font-family: var(--z-font-display);
          font-weight: 700;
          color: var(--z-white);
        }

        .z-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 0.74rem;
          font-weight: 600;
        }
        .z-pill[data-color="success"] {
          background: rgba(46, 255, 140, 0.15);
          color: #5EFF9F;
          border: 1px solid rgba(46, 255, 140, 0.3);
        }
        .z-pill[data-color="warning"] {
          background: rgba(217, 119, 6, 0.18);
          color: #FFB84D;
          border: 1px solid rgba(217, 119, 6, 0.35);
        }
        .z-pill[data-color="danger"] {
          background: rgba(220, 38, 38, 0.18);
          color: #FF8585;
          border: 1px solid rgba(220, 38, 38, 0.35);
        }
        .z-pill-icon {
          width: 12px;
          height: 12px;
          display: grid;
          place-items: center;
          font-size: 0.7rem;
          font-weight: 800;
        }

        .z-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.82rem;
        }
        .z-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .z-status-dot[data-color="orange"] { background: #FFB84D; }
        .z-status-dot[data-color="red"]    { background: #FF6B6B; }
        .z-status-dot[data-color="blue"]   { background: #6BB6FF; }
        .z-status-dot[data-color="green"]  { background: #5EFF9F; }
        .z-status-dot[data-color="gray"]   { background: rgba(255,255,255,0.3); }

        .z-orders-actions-col { text-align: right; }
        .z-order-actions {
          display: flex;
          gap: 6px;
          justify-content: flex-end;
        }
        .z-action {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.74rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }
        .z-action:hover {
          background: rgba(255, 255, 255, 0.18);
          color: var(--z-white);
        }
        .z-action-primary {
          background: #5C8AFB;
          color: var(--z-white);
        }
        .z-action-primary:hover {
          background: #4A77E5;
        }

        .z-admin-footer {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
          padding: 24px;
          background: rgba(0, 0, 0, 0.35);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .z-admin-feature {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: rgba(255, 255, 255, 0.85);
        }
        .z-admin-feature svg {
          color: #FFB84D;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .z-admin-feature strong {
          display: block;
          color: var(--z-white);
          font-size: 0.92rem;
          margin-bottom: 2px;
        }
        .z-admin-feature span {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.55);
        }

        /* Mobile : table → cards */
        @media (max-width: 980px) {
          .z-orders-table-head { display: none; }
          .z-order-row {
            grid-template-columns: 1fr;
            gap: 6px;
            padding: 18px 18px 16px;
            position: relative;
          }
          .z-order-row[data-new="true"] {
            padding-left: 15px;
          }
          .z-order-id, .z-order-client, .z-order-address, .z-order-total,
          .z-order-paid, .z-order-status, .z-order-actions {
            display: flex;
            justify-content: flex-start;
          }
          .z-order-id {
            justify-content: space-between;
          }
          .z-order-id::before { content: ''; }
          .z-order-total {
            order: 3;
            justify-content: flex-end;
            font-size: 1.1rem;
          }
          .z-order-paid { order: 4; }
          .z-order-status { order: 5; }
          .z-order-actions {
            order: 6;
            justify-content: stretch;
            gap: 8px;
            margin-top: 6px;
          }
          .z-order-actions .z-action {
            flex: 1;
            justify-content: center;
          }
        }

        /* Modal */
        .z-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 300;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .z-modal {
          background: var(--z-white);
          color: var(--z-text);
          border-radius: 24px;
          padding: 32px;
          max-width: 460px;
          width: 100%;
          position: relative;
        }
        .z-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--z-cream-warm);
          color: var(--z-text);
          display: grid;
          place-items: center;
        }
        .z-modal-eyebrow {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--z-red);
        }
        .z-modal-title {
          font-family: var(--z-font-display);
          font-size: 2rem;
          font-weight: 800;
          margin: 8px 0 4px;
          color: var(--z-black);
        }
        .z-modal-time {
          font-size: 0.88rem;
          color: var(--z-text-muted);
          margin: 0 0 24px;
        }
        .z-modal-section {
          padding: 14px 0;
          border-top: 1px solid var(--z-border);
        }
        .z-modal-section:first-of-type { border-top: none; padding-top: 0; }
        .z-modal-label {
          display: block;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--z-text-muted);
          margin-bottom: 6px;
        }
        .z-modal-section p {
          margin: 0;
          line-height: 1.4;
          color: var(--z-text);
        }
        .z-modal-actions {
          display: flex;
          gap: 10px;
          margin-top: 24px;
        }
        .z-modal-actions .z-btn,
        .z-modal-actions .z-btn-ghost-dark {
          flex: 1;
        }
      `}</style>
    </section>
  );
}
