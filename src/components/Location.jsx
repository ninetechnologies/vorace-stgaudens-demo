import React from 'react';
import { motion } from 'motion/react';
import { AMBIANCE } from '../data/pizzas.js';

const HOURS = [
  { day: 'Lundi', value: 'Fermé', closed: true },
  { day: 'Mardi', value: '18h30 – 21h30' },
  { day: 'Mercredi', value: '18h30 – 21h30' },
  { day: 'Jeudi', value: '18h30 – 21h30' },
  { day: 'Vendredi', value: '18h30 – 21h30' },
  { day: 'Samedi', value: '18h30 – 21h30' },
  { day: 'Dimanche', value: 'Fermé', closed: true },
];

const MAPS_EMBED =
  'https://maps.google.com/maps?q=59+Avenue+de+l%27Isle+31800+Saint-Gaudens&t=&z=16&ie=UTF8&iwloc=&output=embed';
const MAPS_DIR =
  'https://www.google.com/maps/dir/?api=1&destination=59+Avenue+de+l%27Isle+31800+Saint-Gaudens';

export default function Location() {
  return (
    <section className="z-location" id="contact">
      <div className="z-container">
        <motion.div
          className="z-location-head"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="z-eyebrow">Nous trouver</span>
          <h2 className="z-location-title">
            59 Avenue de l'Isle, <em>Saint-Gaudens</em>.
          </h2>
          <p className="z-location-intro">
            On vous accueille sur place pour récupérer votre commande à emporter,
            ou on vient chez vous en livraison.
          </p>
        </motion.div>

        <div className="z-location-grid">
          <motion.div
            className="z-location-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={AMBIANCE.interieur}
              alt="Façade Vorace la nuit avec son enseigne verte allumée"
              className="z-location-photo"
              loading="lazy"
            />

            <div className="z-location-block">
              <h3>Coordonnées</h3>
              <p>
                59 Avenue de l'Isle<br />
                31800 Saint-Gaudens
              </p>
              <div className="z-location-buttons">
                <a href="tel:+33769917382" className="z-btn z-btn-primary z-loc-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                  07 69 91 73 82
                </a>
                <a
                  href={MAPS_DIR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-loc-btn z-loc-btn-ghost"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Itinéraire
                </a>
              </div>
              <p className="z-location-altphone">
                Ou au <a href="tel:+33955075782">09 55 07 57 82</a>
              </p>
            </div>

            <div className="z-location-block">
              <h3>Horaires</h3>
              <ul className="z-hours">
                {HOURS.map((h) => (
                  <li key={h.day}>
                    <span>{h.day}</span>
                    <span>{h.value}</span>
                  </li>
                ))}
              </ul>
              <p className="z-hours-note">
                <span className="z-pulse-green" /> Ouvert tous les jours · midi & soir
              </p>
            </div>

            <div className="z-location-block">
              <h3>Aussi disponible sur</h3>
              <a
                href="https://www.ubereats.com/fr/store/vorace-stgaudens/QwHC6CbvVIWzlPZwkwQNHQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlNhaW50LUdhdWRlbnMlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKYVpJVUtaRDhxQklSS1AySDZYUjNVajglMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuMTA2ODk1JTJDJTIybG9uZ2l0dWRlJTIyJTNBMC43MjM3NjI5OTk5OTk5OTk5JTdE"
                target="_blank"
                rel="noopener noreferrer"
                className="z-partner z-partner-uber z-partner-solo"
              >
                <strong>Uber Eats</strong>
                <span>Commission applicable</span>
              </a>
              <p className="z-partners-note">
                Pour soutenir notre commerce local et éviter les commissions,
                privilégiez la <a href="#commander">commande en direct</a>.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="z-location-map-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              src={MAPS_EMBED}
              className="z-location-map"
              loading="lazy"
              title="Carte Vorace"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        .z-location {
          padding: 100px 0;
          background: var(--z-cream-warm);
        }
        .z-location-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 56px;
        }
        .z-location-title {
          font-family: var(--z-font-display);
          font-size: clamp(2rem, 5vw, 3.4rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--z-black);
          margin: 20px 0 20px;
        }
        .z-location-title em {
          font-style: italic;
          color: var(--z-red);
        }
        .z-location-intro {
          font-size: 1.05rem;
          color: var(--z-text-muted);
          line-height: 1.55;
        }

        .z-location-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 1024px) {
          .z-location-grid {
            grid-template-columns: 1.05fr 0.95fr;
            align-items: stretch;
          }
        }

        .z-location-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .z-location-photo {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 20px 50px -15px rgba(14, 61, 36, 0.3);
        }
        @media (min-width: 720px) {
          .z-location-photo { height: 300px; }
        }
        .z-location-block {
          background: var(--z-white);
          border-radius: 18px;
          padding: 24px 26px;
          box-shadow: 0 1px 3px rgba(14, 61, 36, 0.05);
        }
        .z-location-block h3 {
          font-family: var(--z-font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--z-black);
          margin: 0 0 14px;
        }
        .z-location-block p {
          margin: 0 0 14px;
          color: var(--z-text);
          line-height: 1.5;
        }
        .z-location-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .z-loc-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px !important;
          font-size: 0.92rem !important;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
          flex: 1;
          justify-content: center;
        }
        .z-loc-btn-ghost {
          background: transparent;
          border: 1.5px solid var(--z-border);
          color: var(--z-text);
          transition: all 0.2s;
        }
        .z-loc-btn-ghost:hover {
          border-color: var(--z-green);
          color: var(--z-green);
          background: rgba(14, 61, 36, 0.04);
        }
        .z-location-altphone {
          margin-top: 12px !important;
          font-size: 0.84rem;
          color: var(--z-text-muted);
        }
        .z-location-altphone a {
          color: var(--z-text);
          font-weight: 600;
        }

        .z-hours {
          list-style: none;
          padding: 0;
          margin: 0 0 14px;
        }
        .z-hours li {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 14px;
          padding: 8px 0;
          font-size: 0.88rem;
          border-bottom: 1px dashed var(--z-border);
        }
        .z-hours li:last-child { border-bottom: none; }
        .z-hours li span:first-child {
          font-weight: 600;
          color: var(--z-text);
        }
        .z-hours li span:last-child {
          color: var(--z-text-muted);
          font-variant-numeric: tabular-nums;
        }
        .z-hours-note {
          display: flex !important;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--z-success);
          margin: 0 !important;
          font-weight: 600;
        }
        .z-pulse-green {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--z-success);
          box-shadow: 0 0 0 0 rgba(46, 139, 87, 0.6);
          animation: zg-pulse 2s infinite;
        }
        @keyframes zg-pulse {
          0% { box-shadow: 0 0 0 0 rgba(46, 139, 87, 0.6); }
          70% { box-shadow: 0 0 0 10px rgba(46, 139, 87, 0); }
          100% { box-shadow: 0 0 0 0 rgba(46, 139, 87, 0); }
        }

        .z-partner {
          display: block;
          padding: 16px 20px;
          border-radius: 14px;
          text-align: center;
          text-decoration: none;
          transition: all 0.2s;
          margin-bottom: 14px;
        }
        .z-partner-solo {
          padding: 18px 22px;
        }
        .z-partner strong {
          display: block;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .z-partner span {
          font-size: 0.7rem;
          letter-spacing: 0.04em;
          opacity: 0.85;
        }
        .z-partner-uber {
          background: #000;
          color: #fff;
        }
        .z-partner-uber:hover { background: #1a1a1a; }
        .z-partners-note {
          margin: 0 !important;
          font-size: 0.82rem;
          color: var(--z-text-muted);
          font-style: italic;
        }
        .z-partners-note a {
          color: var(--z-red);
          font-weight: 600;
          font-style: normal;
        }

        .z-location-map-wrap {
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 20px 50px -15px rgba(14, 61, 36, 0.3);
          min-height: 400px;
          background: var(--z-cream);
        }
        @media (min-width: 1024px) {
          .z-location-map-wrap {
            position: sticky;
            top: 100px;
            height: 100%;
            min-height: 100%;
          }
        }
        .z-location-map {
          width: 100%;
          height: 100%;
          min-height: 400px;
          border: 0;
          display: block;
        }
      `}</style>
    </section>
  );
}
