import React from 'react';
import { motion } from 'motion/react';

/* Vrais avis Vorace extraits de Google (4,9 sur 87 avis). */
const REVIEWS = [
  {
    name: 'Cocinelle',
    rating: 5,
    date: 'Il y a 6 mois',
    text: "Une pizzeria absolument incontournable à Saint-Gaudens ! L'accueil est tout simplement exceptionnel grâce à Flo, le propriétaire et pizzaiolo passionné.",
  },
  {
    name: 'Josiane J.',
    rating: 5,
    date: 'Il y a 4 mois',
    text: "Voraces, oui, nous l'avons été ; nous avons dévoré nos pizzas, jusqu'a la dernière miette. Un véritable savoir-faire italien, des produits frais et un accueil chaleureux.",
  },
  {
    name: 'Max Colombel',
    rating: 5,
    date: 'Il y a 3 mois',
    text: "Un véritable savoir-faire de la pizza ! On voit Flo travailler la pâte devant nous, et le résultat est à la hauteur. À recommander les yeux fermés.",
  },
  {
    name: 'Martine G.',
    rating: 5,
    date: 'Il y a 2 mois',
    text: "Pizzaiolo sympa, pizzas excellentes, beaucoup d'imagination pour les créations. Les produits locaux du Comminges font vraiment la différence. On reviendra !",
  },
];

function Stars({ n }) {
  return (
    <span className="z-stars" aria-label={`${n} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i <= n ? '#F5B400' : 'none'}
          stroke={i <= n ? '#F5B400' : 'rgba(0,0,0,0.15)'}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section className="z-reviews" id="avis">
      <div className="z-container">
        <motion.div
          className="z-reviews-head"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="z-reviews-score">
            <div className="z-reviews-google">
              <svg width="32" height="32" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571c.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
              </svg>
              <span>Google</span>
            </div>
            <div className="z-reviews-rating">
              <Stars n={5} />
              <strong>4,9 / 5</strong>
              <span>basé sur <a href="https://www.google.com/search?q=Vorace+Pizza+Saint-Gaudens" target="_blank" rel="noopener noreferrer">87 avis Google</a></span>
            </div>
          </div>

          <h2 className="z-reviews-title">
            Ce que nos clients <em>en disent</em>.
          </h2>
        </motion.div>

        <div className="z-reviews-grid">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name + i}
              className="z-review"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="z-review-head">
                <div className="z-review-avatar">{r.name.charAt(0)}</div>
                <div>
                  <div className="z-review-name">{r.name}</div>
                  <div className="z-review-date">{r.date}</div>
                </div>
                <Stars n={r.rating} />
              </div>
              <blockquote className="z-review-text">"{r.text}"</blockquote>
            </motion.figure>
          ))}
        </div>

        <motion.a
          href="https://www.google.com/search?q=Vorace+Pizza+Saint-Gaudens"
          target="_blank"
          rel="noopener noreferrer"
          className="z-reviews-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Lire tous les avis Google →
        </motion.a>
      </div>

      <style>{`
        .z-reviews {
          padding: 100px 0;
          background: var(--z-cream);
        }
        .z-reviews-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 56px;
        }
        .z-reviews-score {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          padding: 14px 22px;
          background: var(--z-white);
          border-radius: 999px;
          box-shadow: 0 1px 3px rgba(14, 61, 36, 0.06), 0 12px 30px -12px rgba(14, 61, 36, 0.15);
          margin-bottom: 28px;
        }
        @media (max-width: 480px) {
          .z-reviews-score {
            flex-direction: column;
            gap: 8px;
            padding: 16px 22px;
            border-radius: 20px;
          }
        }
        .z-reviews-google {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: var(--z-text);
        }
        .z-reviews-rating {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--z-text-muted);
        }
        .z-reviews-rating strong {
          font-family: var(--z-font-display);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--z-black);
          margin-left: 2px;
        }
        .z-reviews-rating a {
          color: var(--z-text);
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: var(--z-border);
          text-underline-offset: 3px;
        }
        .z-reviews-rating a:hover { text-decoration-color: var(--z-red); }

        .z-stars {
          display: inline-flex;
          gap: 1px;
          line-height: 0;
        }

        .z-reviews-title {
          font-family: var(--z-font-display);
          font-size: clamp(2rem, 5vw, 3.4rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--z-black);
          margin: 0;
        }
        .z-reviews-title em {
          font-style: italic;
          color: var(--z-red);
        }

        .z-reviews-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          margin-bottom: 40px;
        }
        @media (min-width: 720px) {
          .z-reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .z-reviews-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .z-review {
          background: var(--z-white);
          border-radius: 18px;
          padding: 26px 24px;
          box-shadow: 0 1px 3px rgba(14, 61, 36, 0.06);
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .z-review-head {
          display: grid;
          grid-template-columns: 44px 1fr auto;
          gap: 12px;
          align-items: center;
        }
        .z-review-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--z-red) 0%, var(--z-red-dark) 100%);
          color: var(--z-white);
          display: grid;
          place-items: center;
          font-family: var(--z-font-display);
          font-weight: 800;
          font-size: 1.15rem;
        }
        .z-review-name {
          font-weight: 600;
          color: var(--z-black);
          line-height: 1.2;
        }
        .z-review-date {
          font-size: 0.72rem;
          color: var(--z-text-muted);
          margin-top: 2px;
        }
        .z-review-text {
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.55;
          color: var(--z-text);
          font-style: italic;
        }

        .z-reviews-cta {
          display: block;
          text-align: center;
          font-weight: 600;
          color: var(--z-green);
          text-decoration: underline;
          text-decoration-color: var(--z-border);
          text-underline-offset: 4px;
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        .z-reviews-cta:hover {
          color: var(--z-red);
        }
      `}</style>
    </section>
  );
}
