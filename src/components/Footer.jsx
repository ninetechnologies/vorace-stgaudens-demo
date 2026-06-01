import React from 'react';
import { motion } from 'motion/react';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="z-footer">
      <div className="z-container">
        <motion.div
          className="z-footer-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="z-footer-brand">
            <Logo size={48} inverse />
            <p>Votre pizzeria &amp; restaurant artisanal à Saint-Gaudens. Ouvert du mardi au samedi soir.</p>
          </div>

          <div className="z-footer-col">
            <h4>Carte</h4>
            <ul>
              <li><a href="#menu">Toutes les pizzas</a></li>
              <li><a href="#menu">Calzones</a></li>
              <li><a href="#menu">Pizza Familiale</a></li>
              <li><a href="#menu">Desserts</a></li>
            </ul>
          </div>

          <div className="z-footer-col">
            <h4>Commander</h4>
            <ul>
              <li><a href="#commander">En direct (sans commission)</a></li>
              <li><a href="https://www.ubereats.com/fr/store/vorace-stgaudens/QwHC6CbvVIWzlPZwkwQNHQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlNhaW50LUdhdWRlbnMlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKYVpJVUtaRDhxQklSS1AySDZYUjNVajglMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuMTA2ODk1JTJDJTIybG9uZ2l0dWRlJTIyJTNBMC43MjM3NjI5OTk5OTk5OTk5JTdE" target="_blank" rel="noopener noreferrer">Uber Eats</a></li>
              <li><a href="tel:+33769917382">Par téléphone</a></li>
            </ul>
          </div>

          <div className="z-footer-col">
            <h4>Suivez-nous</h4>
            <div className="z-footer-social">
              <a
                href="https://www.facebook.com/profile.php?id=100089851254633"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Page Facebook Vorace"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vorace.pizza/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Vorace"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                </svg>
              </a>
              <a
                href="https://www.google.com/search?q=Vorace+Pizza+Saint-Gaudens"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Avis Google Vorace"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L9.91 8.26 3 9.27l5 4.87L6.82 21 12 17.77 17.18 21 16 14.14l5-4.87-6.91-1.01L12 2z" />
                </svg>
              </a>
            </div>
            <p className="z-footer-tagline">@vorace.pizza</p>
          </div>
        </motion.div>

        <div className="z-footer-bottom">
          <span>© {new Date().getFullYear()} Vorace · 59 Avenue de l'Isle, 31800 Saint-Gaudens</span>
          <span className="z-footer-legal">
            <a href="#">Mentions légales</a>
            <span>·</span>
            <a href="#">Politique de confidentialité</a>
            <span>·</span>
            <a href="#">CGV</a>
          </span>
        </div>
      </div>

      <style>{`
        .z-footer {
          padding: 80px 0 32px;
          background: var(--z-black);
          color: rgba(255, 255, 255, 0.75);
        }
        .z-footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (min-width: 720px) {
          .z-footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; gap: 32px; }
        }
        .z-footer-brand p {
          font-size: 0.92rem;
          line-height: 1.55;
          margin: 16px 0 0;
          max-width: 320px;
          color: rgba(255, 255, 255, 0.6);
        }
        .z-footer-col h4 {
          font-family: var(--z-font-body);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--z-white);
          margin: 0 0 16px;
        }
        .z-footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .z-footer-col li a {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.65);
          transition: color 0.2s;
        }
        .z-footer-col li a:hover {
          color: var(--z-white);
        }
        .z-footer-social {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
        }
        .z-footer-social a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          display: grid;
          place-items: center;
          color: rgba(255, 255, 255, 0.85);
          transition: all 0.2s;
        }
        .z-footer-social a:hover {
          background: var(--z-red);
          color: var(--z-white);
          transform: translateY(-2px);
        }
        .z-footer-tagline {
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.55);
          margin: 0;
        }
        .z-footer-bottom {
          padding-top: 28px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 16px;
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.45);
        }
        .z-footer-legal {
          display: inline-flex;
          gap: 8px;
        }
        .z-footer-legal a {
          color: rgba(255, 255, 255, 0.5);
        }
        .z-footer-legal a:hover {
          color: var(--z-white);
        }
      `}</style>
    </footer>
  );
}
