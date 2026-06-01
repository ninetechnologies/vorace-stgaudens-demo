import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SUPPLEMENTS } from '../data/pizzas.js';

const fmt = (n) => n.toFixed(2).replace('.', ',') + ' €';

/* Ingrédients "neutres" qu'on ne doit JAMAIS pouvoir retirer (= base structurelle). */
const PROTECTED = ['Sauce tomate', 'Crème fraîche', 'Mozzarella'];

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.03, duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function PizzaCustomizer({ pizza, size, onClose, onConfirm }) {
  const basePrice = size === 26 ? pizza.price26 : pizza.price33;
  const [base, setBase] = useState(pizza.base);  // 'tomate' | 'creme'
  const [removed, setRemoved] = useState([]);    // ingrédients retirés
  const [extras, setExtras] = useState([]);      // suppléments ajoutés

  const baseChanged = base !== pizza.base;

  /* Liste d'ingrédients ajustée : on remplace la sauce d'origine par la nouvelle si l'utilisateur a basculé. */
  const displayedIngredients = useMemo(() => {
    if (!baseChanged) return pizza.ingredients;
    return pizza.ingredients.map((ing) => {
      if (ing.startsWith('Sauce tomate')) return base === 'creme' ? 'Crème fraîche' : ing;
      if (ing.startsWith('Crème fraîche')) return base === 'tomate' ? 'Sauce tomate' : ing;
      return ing;
    });
  }, [pizza.ingredients, base, baseChanged]);

  const extrasTotal = useMemo(
    () => extras.reduce((sum, e) => sum + e.price, 0),
    [extras]
  );

  const totalPrice = basePrice + extrasTotal;

  const isRemoved = (ing) => removed.includes(ing);
  const isExtra = (label) => extras.some((e) => e.label === label);

  const toggleRemove = (ing) => {
    if (PROTECTED.includes(ing.split(' ')[0]) || PROTECTED.includes(ing)) return;
    setRemoved((r) => (r.includes(ing) ? r.filter((x) => x !== ing) : [...r, ing]));
  };

  const toggleExtra = (sup) => {
    setExtras((e) =>
      e.find((x) => x.label === sup.label)
        ? e.filter((x) => x.label !== sup.label)
        : [...e, sup]
    );
  };

  const handleConfirm = () => {
    onConfirm({
      base,
      baseChanged,
      removed,
      extras,
      finalPrice: totalPrice,
    });
  };

  return (
    <motion.div
      className="z-cust-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="z-cust-modal"
        initial={{ y: 60, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 60, opacity: 0, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="z-cust-close" onClick={onClose} aria-label="Fermer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="z-cust-head">
          <img src={pizza.image} alt={pizza.name} className="z-cust-image" />
          <div>
            <span className="z-cust-eyebrow">Personnaliser</span>
            <h3 className="z-cust-title">{pizza.name}</h3>
            <p className="z-cust-size">Format {size} cm · {fmt(basePrice)}</p>
          </div>
        </div>

        <div className="z-cust-section">
          <div className="z-cust-section-head">
            <h4>Choix de la base</h4>
            <span className="z-cust-hint">Tomate ou crème selon votre envie</span>
          </div>
          <div className="z-cust-base-toggle">
            <button
              type="button"
              className="z-cust-base-option"
              data-active={base === 'tomate'}
              onClick={() => setBase('tomate')}
            >
              <span className="z-cust-base-emoji" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <span className="z-cust-base-label">
                <strong>Base tomate</strong>
                <small>Classique, italienne</small>
              </span>
            </button>
            <button
              type="button"
              className="z-cust-base-option"
              data-active={base === 'creme'}
              onClick={() => setBase('creme')}
            >
              <span className="z-cust-base-emoji" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <span className="z-cust-base-label">
                <strong>Base crème</strong>
                <small>Onctueux, plus doux</small>
              </span>
            </button>
          </div>
          {baseChanged && (
            <motion.p
              className="z-cust-base-note"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Vous avez modifié la base d'origine de cette pizza.
            </motion.p>
          )}
        </div>

        <div className="z-cust-section">
          <div className="z-cust-section-head">
            <h4>Ingrédients</h4>
            <span className="z-cust-hint">Désélectionnez pour retirer · allergies, goûts</span>
          </div>
          <ul className="z-cust-list">
            {displayedIngredients.map((ing, i) => {
              const protectedIng = PROTECTED.some((p) => ing.startsWith(p));
              const isOff = isRemoved(ing);
              return (
                <motion.li
                  key={ing}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="z-cust-item z-cust-item-ingredient"
                  data-off={isOff}
                  data-protected={protectedIng}
                  onClick={() => toggleRemove(ing)}
                >
                  <span className="z-cust-check">
                    {protectedIng ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : isOff ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </span>
                  <span className="z-cust-item-label">{ing}</span>
                  {protectedIng && <span className="z-cust-protected">obligatoire</span>}
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div className="z-cust-section">
          <div className="z-cust-section-head">
            <h4>Suppléments</h4>
            <span className="z-cust-hint">Ajoutez ce qui vous fait plaisir</span>
          </div>
          <ul className="z-cust-list">
            {SUPPLEMENTS.map((sup, i) => {
              const active = isExtra(sup.label);
              return (
                <motion.li
                  key={sup.label}
                  custom={pizza.ingredients.length + i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="z-cust-item z-cust-item-extra"
                  data-active={active}
                  onClick={() => toggleExtra(sup)}
                >
                  <span className="z-cust-extra-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      {active ? (
                        <path d="M20 6L9 17l-5-5" />
                      ) : (
                        <path d="M12 5v14M5 12h14" />
                      )}
                    </svg>
                  </span>
                  <span className="z-cust-item-label">{sup.label}</span>
                  <span className="z-cust-extra-price">+ {fmt(sup.price)}</span>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div className="z-cust-footer">
          <div className="z-cust-total">
            <span>Total</span>
            <motion.strong
              key={totalPrice}
              initial={{ scale: 1.18, color: 'var(--z-red)' }}
              animate={{ scale: 1, color: 'var(--z-black)' }}
              transition={{ duration: 0.35 }}
            >
              {fmt(totalPrice)}
            </motion.strong>
          </div>
          <button className="z-btn z-btn-primary" onClick={handleConfirm}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
            </svg>
            Ajouter au panier
          </button>
        </div>
      </motion.div>

      <style>{`
        .z-cust-backdrop {
          position: fixed;
          inset: 0;
          z-index: 250;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .z-cust-modal {
          background: var(--z-cream);
          border-radius: 22px;
          padding: 0;
          width: 100%;
          max-width: 520px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
        }
        .z-cust-close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 5;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.92);
          color: var(--z-text);
          display: grid;
          place-items: center;
          backdrop-filter: blur(8px);
        }
        .z-cust-close:hover {
          background: var(--z-red);
          color: var(--z-white);
        }

        .z-cust-head {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 18px;
          padding: 24px 24px 20px;
          background: var(--z-white);
          border-bottom: 1px solid var(--z-border);
          align-items: center;
        }
        .z-cust-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 8px 20px -8px rgba(14, 61, 36, 0.2);
        }
        .z-cust-eyebrow {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--z-red);
        }
        .z-cust-title {
          font-family: var(--z-font-display);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--z-black);
          margin: 4px 0 4px;
          letter-spacing: -0.02em;
        }
        .z-cust-size {
          font-size: 0.84rem;
          color: var(--z-text-muted);
          margin: 0;
        }

        .z-cust-section {
          padding: 22px 24px 12px;
        }

        .z-cust-base-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 4px;
        }
        .z-cust-base-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: var(--z-white);
          border: 1.5px solid var(--z-border);
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.25s var(--z-ease);
          text-align: left;
        }
        .z-cust-base-option:hover {
          border-color: var(--z-text-muted);
          transform: translateY(-1px);
        }
        .z-cust-base-option[data-active="true"] {
          border-color: var(--z-green);
          background: rgba(14, 61, 36, 0.06);
          box-shadow: 0 6px 16px -6px rgba(14, 61, 36, 0.3);
        }
        .z-cust-base-emoji {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }
        .z-cust-base-option:first-child .z-cust-base-emoji {
          background: rgba(214, 40, 40, 0.12);
          color: var(--z-red);
        }
        .z-cust-base-option:last-child .z-cust-base-emoji {
          background: rgba(201, 162, 75, 0.18);
          color: var(--z-gold);
        }
        .z-cust-base-option[data-active="true"]:first-child .z-cust-base-emoji {
          background: var(--z-red);
          color: var(--z-white);
        }
        .z-cust-base-option[data-active="true"]:last-child .z-cust-base-emoji {
          background: var(--z-gold);
          color: var(--z-white);
        }
        .z-cust-base-label {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .z-cust-base-label strong {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--z-text);
        }
        .z-cust-base-label small {
          font-size: 0.72rem;
          color: var(--z-text-muted);
          margin-top: 2px;
        }
        .z-cust-base-note {
          margin: 10px 0 0;
          padding: 8px 12px;
          font-size: 0.78rem;
          color: var(--z-green);
          background: rgba(14, 61, 36, 0.06);
          border-radius: 8px;
          font-style: italic;
        }
        @media (max-width: 480px) {
          .z-cust-base-option {
            padding: 12px 12px;
            gap: 10px;
          }
          .z-cust-base-label strong { font-size: 0.88rem; }
          .z-cust-base-label small { font-size: 0.68rem; }
        }

        .z-cust-section-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 12px;
        }
        .z-cust-section h4 {
          font-family: var(--z-font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--z-black);
          margin: 0;
        }
        .z-cust-hint {
          font-size: 0.74rem;
          color: var(--z-text-muted);
          text-align: right;
        }

        .z-cust-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .z-cust-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 14px;
          background: var(--z-white);
          border: 1.5px solid var(--z-border);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s var(--z-ease);
          user-select: none;
        }
        .z-cust-item:hover { border-color: var(--z-text-muted); }

        .z-cust-check {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--z-success);
          color: var(--z-white);
          display: grid;
          place-items: center;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .z-cust-item[data-off="true"] .z-cust-check {
          background: var(--z-danger);
        }
        .z-cust-item[data-off="true"] .z-cust-item-label {
          color: var(--z-text-muted);
          text-decoration: line-through;
        }
        .z-cust-item[data-off="true"] {
          background: rgba(220, 38, 38, 0.04);
          border-color: rgba(220, 38, 38, 0.25);
        }
        .z-cust-item[data-protected="true"] {
          cursor: not-allowed;
          opacity: 0.7;
        }
        .z-cust-item[data-protected="true"]:hover { border-color: var(--z-border); }

        .z-cust-item-label {
          flex: 1;
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--z-text);
        }
        .z-cust-protected {
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--z-text-muted);
          font-weight: 600;
        }

        .z-cust-extra-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--z-cream-warm);
          color: var(--z-text);
          display: grid;
          place-items: center;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .z-cust-item[data-active="true"] .z-cust-extra-icon {
          background: var(--z-success);
          color: var(--z-white);
        }
        .z-cust-item[data-active="true"] {
          background: rgba(46, 139, 87, 0.06);
          border-color: rgba(46, 139, 87, 0.35);
        }
        .z-cust-extra-price {
          font-family: var(--z-font-display);
          font-weight: 700;
          color: var(--z-red);
          font-size: 0.9rem;
          flex-shrink: 0;
        }
        .z-cust-item[data-active="true"] .z-cust-extra-price {
          color: var(--z-success);
        }

        .z-cust-footer {
          position: sticky;
          bottom: 0;
          background: var(--z-cream);
          padding: 18px 24px 22px;
          border-top: 1px solid var(--z-border);
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 8px;
        }
        .z-cust-total {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .z-cust-total span {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--z-text-muted);
          margin-bottom: 4px;
        }
        .z-cust-total strong {
          font-family: var(--z-font-display);
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--z-black);
          letter-spacing: -0.02em;
        }
        .z-cust-footer .z-btn {
          flex: 1;
          justify-content: center;
        }

        @media (max-width: 480px) {
          .z-cust-head {
            grid-template-columns: 80px 1fr;
            padding: 20px 20px 16px;
          }
          .z-cust-image { width: 80px; height: 80px; }
          .z-cust-title { font-size: 1.4rem; }
          .z-cust-section { padding: 18px 20px 10px; }
          .z-cust-footer { padding: 14px 20px 18px; }
          .z-cust-total strong { font-size: 1.4rem; }
        }
      `}</style>
    </motion.div>
  );
}
