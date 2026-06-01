import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PIZZAS, CATEGORIES, CALZONES, FAMILIALE, DESSERTS, SUPPLEMENTS, PIZZA_DU_MOMENT, PETITE_TAILLE } from '../data/pizzas.js';
import { useCart } from '../hooks/useCart.jsx';
import PizzaPlaceholder from './PizzaPlaceholder.jsx';
import PizzaCustomizer from './PizzaCustomizer.jsx';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const fmt = (n) => n.toFixed(2).replace('.', ',') + ' €';

export default function Menu() {
  const [filter, setFilter] = useState('all');
  const [sizeChoice, setSizeChoice] = useState({}); // pizzaId -> 26|33
  const [justAdded, setJustAdded] = useState(null);
  const [customizing, setCustomizing] = useState(null); // {pizza, size} ou null
  const { addItem } = useCart();

  const filtered = useMemo(() => {
    if (filter === 'all') return PIZZAS;
    return PIZZAS.filter((p) => p.category === filter);
  }, [filter]);

  const getSize = (id) => sizeChoice[id] ?? 33;

  const handleAdd = (pizza) => {
    const size = getSize(pizza.id);
    const price = size === 26 ? pizza.price26 : pizza.price33;
    addItem({
      id: `${pizza.id}-${size}`,
      pizzaId: pizza.id,
      name: pizza.name,
      size: `${size} cm`,
      price,
      image: pizza.image,
    });
    setJustAdded(`${pizza.id}-${size}`);
    setTimeout(() => setJustAdded(null), 1200);
  };

  const handleCustomize = (pizza) => {
    const size = getSize(pizza.id);
    setCustomizing({ pizza, size });
  };

  const handleConfirmCustomize = ({ base, baseChanged, removed, extras, finalPrice }) => {
    const { pizza, size } = customizing;
    const baseKey = baseChanged ? `-b${base}` : '';
    const removedKey = removed.length ? `-no-${removed.length}` : '';
    const extrasKey = extras.length ? `-x${extras.length}` : '';
    addItem({
      id: `${pizza.id}-${size}${baseKey}${removedKey}${extrasKey}-${Date.now()}`,
      pizzaId: pizza.id,
      name: pizza.name,
      size: `${size} cm`,
      price: finalPrice,
      image: pizza.image,
      base,
      baseChanged,
      removed,
      extras,
    });
    setJustAdded(`custom-${pizza.id}`);
    setCustomizing(null);
    setTimeout(() => setJustAdded(null), 1200);
  };

  return (
    <section className="z-menu" id="menu">
      <div className="z-container">
        <motion.div
          className="z-menu-head"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="z-eyebrow">Notre carte</span>
          <h2 className="z-menu-title">
            14 pizzas, <em>une seule</em> obsession :<br /> la qualité.
          </h2>
          <p className="z-menu-intro">
            Toutes nos pizzas sont préparées à la commande, à partir d'ingrédients
            frais et de produits locaux du Comminges. Format unique pour partager,
            Format normal ou petite taille (-1533&nbsp;cm à partager, ou Familiale 60×40 pour la tablée.nbsp;%) si vous mangez léger.
          </p>
        </motion.div>

        <div className="z-menu-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className="z-chip"
              data-active={filter === cat.id}
            >
              {cat.label}
              {cat.id === 'all' && (
                <span className="z-chip-count">{PIZZAS.length}</span>
              )}
              {cat.id !== 'all' && (
                <span className="z-chip-count">
                  {PIZZAS.filter((p) => p.category === cat.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <motion.div className="z-menu-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((pizza, i) => {
              const size = getSize(pizza.id);
              const price = size === 26 ? pizza.price26 : pizza.price33;
              const cartId = `${pizza.id}-${size}`;
              return (
                <motion.article
                  key={pizza.id}
                  layout
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="z-pizza-card"
                  whileHover={{ y: -6 }}
                >
                  {pizza.signature && (
                    <span className="z-pizza-badge z-pizza-badge-signature">
                      ★ Signature
                    </span>
                  )}
                  {pizza.veggie && (
                    <span className="z-pizza-badge z-pizza-badge-veggie">
                      Végé
                    </span>
                  )}
                  {pizza.realPhoto && (
                    <span className="z-pizza-photo-real" title="Photo réelle prise dans le commerce">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                      Photo maison
                    </span>
                  )}

                  <div className="z-pizza-image">
                    {pizza.image ? (
                      <img src={pizza.image} alt={pizza.name} loading="lazy" />
                    ) : (
                      <PizzaPlaceholder pizza={pizza} />
                    )}
                    <span className="z-pizza-base" data-base={pizza.base}>
                      {pizza.base === 'creme' ? 'Base crème' : 'Base tomate'}
                    </span>
                  </div>

                  <div className="z-pizza-body">
                    <h3 className="z-pizza-name">{pizza.name}</h3>
                    <p className="z-pizza-ingredients">
                      {pizza.ingredients.join(' · ')}
                    </p>

                    <div className="z-pizza-sizes">
                      <button
                        className="z-pizza-size"
                        data-active={size === 26}
                        onClick={() =>
                          setSizeChoice((s) => ({ ...s, [pizza.id]: 26 }))
                        }
                      >
                        <span className="z-pizza-size-label">Petite</span>
                        <span className="z-pizza-size-price">
                          {fmt(pizza.price26)}
                        </span>
                      </button>
                      <button
                        className="z-pizza-size"
                        data-active={size === 33}
                        onClick={() =>
                          setSizeChoice((s) => ({ ...s, [pizza.id]: 33 }))
                        }
                      >
                        <span className="z-pizza-size-label">Normale</span>
                        <span className="z-pizza-size-price">
                          {fmt(pizza.price33)}
                        </span>
                      </button>
                    </div>

                    <div className="z-pizza-actions">
                      <button
                        className="z-pizza-add"
                        onClick={() => handleAdd(pizza)}
                        data-success={justAdded === cartId}
                      >
                        {justAdded === cartId ? (
                          <>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            Ajoutée !
                          </>
                        ) : (
                          <>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <path d="M12 5v14M5 12h14" />
                            </svg>
                            {fmt(price)}
                          </>
                        )}
                      </button>
                      <button
                        className="z-pizza-customize"
                        onClick={() => handleCustomize(pizza)}
                        title="Retirer un ingrédient, ajouter un supplément"
                        aria-label="Personnaliser cette pizza"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18M3 12h18M3 18h18" />
                          <circle cx="6" cy="6" r="2" fill="currentColor" />
                          <circle cx="15" cy="12" r="2" fill="currentColor" />
                          <circle cx="9" cy="18" r="2" fill="currentColor" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {customizing && (
            <PizzaCustomizer
              pizza={customizing.pizza}
              size={customizing.size}
              onClose={() => setCustomizing(null)}
              onConfirm={handleConfirmCustomize}
            />
          )}
        </AnimatePresence>

        <motion.div
          className="z-menu-extras"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="z-extras-card z-extras-familiale">
            <span className="z-extras-tag">Saison</span>
            <h3>{PIZZA_DU_MOMENT.name}</h3>
            <p>{PIZZA_DU_MOMENT.description}</p>
            <div className="z-extras-price">Demandez à Flo</div>
          </div>

          <div className="z-extras-card">
            <span className="z-extras-tag">Option</span>
            <h3>{PETITE_TAILLE.label}</h3>
            <p>{PETITE_TAILLE.description}</p>
            <div className="z-extras-price">−15 %</div>
          </div>

          <div className="z-extras-card">
            <h3>Desserts maison</h3>
            <ul className="z-extras-list">
              {DESSERTS.map((d) => (
                <li key={d.name}>
                  <span>{d.name}</span>
                  <span>{fmt(d.price)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="z-extras-card">
            <h3>Suppléments</h3>
            <ul className="z-extras-list">
              {SUPPLEMENTS.map((s) => (
                <li key={s.label}>
                  <span>{s.label}</span>
                  <span>+ {fmt(s.price)}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <style>{`
        .z-menu {
          padding: 100px 0 120px;
          background: var(--z-cream);
          position: relative;
        }
        .z-menu-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 56px;
        }
        .z-menu-title {
          font-family: var(--z-font-display);
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.05;
          margin: 20px 0 20px;
          color: var(--z-black);
          letter-spacing: -0.025em;
        }
        .z-menu-title em {
          font-style: italic;
          color: var(--z-red);
          font-weight: 900;
        }
        .z-menu-intro {
          font-size: 1.05rem;
          color: var(--z-text-muted);
          line-height: 1.6;
        }

        .z-menu-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 56px;
          padding: 0 12px;
        }
        .z-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          background: var(--z-white);
          border: 1.5px solid var(--z-border);
          color: var(--z-text);
          font-size: 0.88rem;
          font-weight: 600;
          transition: all 0.25s var(--z-ease);
          cursor: pointer;
        }
        .z-chip:hover {
          border-color: var(--z-green);
          color: var(--z-green);
        }
        .z-chip[data-active="true"] {
          background: var(--z-green);
          color: var(--z-white);
          border-color: var(--z-green);
          box-shadow: 0 6px 20px -8px rgba(14, 61, 36, 0.4);
        }
        .z-chip-count {
          font-size: 0.7rem;
          opacity: 0.7;
          padding: 2px 7px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.08);
        }
        .z-chip[data-active="true"] .z-chip-count {
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
        }

        .z-menu-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 560px) {
          .z-menu-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 960px) {
          .z-menu-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
        }
        @media (min-width: 1280px) {
          .z-menu-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .z-pizza-card {
          position: relative;
          background: var(--z-white);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(14, 61, 36, 0.06), 0 12px 30px -10px rgba(14, 61, 36, 0.1);
          transition: box-shadow 0.3s var(--z-ease);
          display: flex;
          flex-direction: column;
        }
        .z-pizza-card:hover {
          box-shadow: 0 1px 3px rgba(14, 61, 36, 0.08), 0 25px 60px -15px rgba(14, 61, 36, 0.2);
        }

        .z-pizza-badge {
          position: absolute;
          top: 14px;
          z-index: 2;
          padding: 5px 12px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 999px;
          backdrop-filter: blur(8px);
        }
        .z-pizza-badge-signature {
          right: 14px;
          background: rgba(214, 40, 40, 0.95);
          color: var(--z-white);
        }
        .z-pizza-badge-veggie {
          left: 14px;
          background: rgba(46, 139, 87, 0.95);
          color: var(--z-white);
        }
        .z-pizza-photo-real {
          position: absolute;
          bottom: calc(100% - 14px);
          right: 14px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 9px;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--z-black);
          background: var(--z-gold);
          border-radius: 999px;
          box-shadow: 0 4px 12px rgba(201, 162, 75, 0.4);
        }
        .z-pizza-card:has(.z-pizza-badge-signature) .z-pizza-photo-real {
          bottom: auto;
          top: 50px;
        }

        .z-pizza-image {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: var(--z-cream-warm);
        }
        .z-pizza-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s var(--z-ease);
        }
        .z-pizza-card:hover .z-pizza-image img {
          transform: scale(1.06);
        }
        .z-pizza-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: linear-gradient(135deg, #F8F1E5 0%, #EBDFC8 100%);
          transition: transform 0.6s var(--z-ease);
        }
        .z-pizza-placeholder[data-base="creme"] {
          background: linear-gradient(135deg, #FBF7F1 0%, #E8DFD0 100%);
        }
        .z-pizza-card:hover .z-pizza-placeholder {
          transform: scale(1.05);
        }
        .z-pizza-placeholder-svg {
          width: 78%;
          height: 78%;
          filter: drop-shadow(0 8px 16px rgba(160, 100, 50, 0.25));
        }
        .z-pizza-placeholder-note {
          position: absolute;
          bottom: 10px;
          right: 10px;
          padding: 3px 9px;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--z-text-muted);
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(6px);
          border-radius: 999px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .z-pizza-base {
          position: absolute;
          bottom: 12px;
          left: 12px;
          padding: 4px 10px;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--z-white);
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(8px);
          border-radius: 999px;
        }
        .z-pizza-base[data-base="creme"] {
          background: rgba(201, 162, 75, 0.92);
        }

        .z-pizza-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .z-pizza-name {
          font-family: var(--z-font-display);
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.015em;
          color: var(--z-black);
          margin: 0;
        }
        .z-pizza-ingredients {
          font-size: 0.82rem;
          color: var(--z-text-muted);
          line-height: 1.45;
          flex: 1;
        }
        .z-pizza-sizes {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .z-pizza-size {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 8px 10px;
          border-radius: 10px;
          background: var(--z-cream-warm);
          border: 1.5px solid transparent;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .z-pizza-size:hover {
          background: var(--z-border);
        }
        .z-pizza-size[data-active="true"] {
          background: rgba(14, 61, 36, 0.06);
          border-color: var(--z-green);
        }
        .z-pizza-size-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--z-text-muted);
          letter-spacing: 0.05em;
        }
        .z-pizza-size-price {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--z-black);
          font-family: var(--z-font-display);
        }
        .z-pizza-size[data-active="true"] .z-pizza-size-price {
          color: var(--z-green);
        }

        .z-pizza-actions {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 8px;
        }
        .z-pizza-add {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          background: var(--z-red);
          color: var(--z-white);
          border-radius: 12px;
          font-size: 0.92rem;
          font-weight: 600;
          transition: all 0.25s var(--z-ease);
        }
        .z-pizza-add:hover {
          background: var(--z-red-dark);
          transform: translateY(-1px);
        }
        .z-pizza-add[data-success="true"] {
          background: var(--z-success);
        }
        .z-pizza-customize {
          width: 44px;
          display: grid;
          place-items: center;
          background: var(--z-cream-warm);
          color: var(--z-text);
          border-radius: 12px;
          border: 1.5px solid var(--z-border);
          transition: all 0.2s var(--z-ease);
          cursor: pointer;
          flex-shrink: 0;
        }
        .z-pizza-customize:hover {
          background: var(--z-green);
          color: var(--z-white);
          border-color: var(--z-green);
        }

        .z-menu-extras {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          margin-top: 64px;
        }
        @media (min-width: 720px) {
          .z-menu-extras { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .z-menu-extras { grid-template-columns: 1.4fr 1fr 1fr 1fr; }
        }

        .z-extras-card {
          background: var(--z-white);
          padding: 28px 24px;
          border-radius: 18px;
          box-shadow: 0 1px 3px rgba(14, 61, 36, 0.06);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .z-extras-card h3 {
          font-family: var(--z-font-display);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--z-black);
          margin: 0;
        }
        .z-extras-familiale {
          background: linear-gradient(135deg, var(--z-green) 0%, var(--z-green-dark) 100%);
          color: var(--z-white);
          grid-column: span 1;
        }
        .z-extras-familiale h3,
        .z-extras-familiale p {
          color: var(--z-white);
        }
        .z-extras-tag {
          align-self: flex-start;
          padding: 4px 12px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 999px;
        }
        .z-extras-price {
          font-family: var(--z-font-display);
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--z-gold);
          letter-spacing: -0.02em;
          margin-top: auto;
        }
        .z-extras-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .z-extras-list li {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
          font-size: 0.92rem;
          padding-bottom: 8px;
          border-bottom: 1px dashed var(--z-border);
        }
        .z-extras-list li:last-child {
          border-bottom: none;
        }
        .z-extras-list li span:last-child {
          font-family: var(--z-font-display);
          font-weight: 700;
          color: var(--z-red);
          flex-shrink: 0;
        }
        .z-extras-note {
          font-size: 0.78rem;
          color: var(--z-text-muted);
          font-style: italic;
        }
      `}</style>
    </section>
  );
}
