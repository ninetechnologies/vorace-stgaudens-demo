import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { TACOS_OPTIONS } from '../data/menu.js';

const fmt = (n) => n.toFixed(2).replace('.', ',') + ' €';
const CRUDITES = ['Salade', 'Tomate', 'Oignons'];

/**
 * Personnalisation d'un plat (tacos / sandwich-naan / burger / assiette).
 * Props : item { id, name, price, image, kind, viandes, fromagere, gratin, frites, crudites:'add'|'remove' }
 *         onClose(), onConfirm(cartItem)
 */
export default function TacosCustomizer({ item, onClose, onConfirm }) {
  const viandeCount = item.viandes || 0;

  const [viandes, setViandes] = useState([]);
  const [fromagere, setFromagere] = useState(true);
  const [sauce, setSauce] = useState('Blanche');
  const [frites, setFrites] = useState(true);
  const [gratin, setGratin] = useState(null);
  const [accomp, setAccomp] = useState('sans'); // 'sans' ou {label,price} — frites en accompagnement (extra)
  const [supps, setSupps] = useState([]);
  const [crud, setCrud] = useState([]);   // crudités ajoutées (mode add) ou retirées (mode remove)
  const [menu, setMenu] = useState(null);

  const toggleViande = (v) =>
    setViandes((prev) => {
      if (prev.includes(v)) return prev.filter((x) => x !== v);
      if (prev.length >= viandeCount) return [...prev.slice(1), v];
      return [...prev, v];
    });
  const toggleSupp = (s) =>
    setSupps((p) => (p.find((x) => x.label === s.label) ? p.filter((x) => x.label !== s.label) : [...p, s]));
  const toggleCrud = (c) =>
    setCrud((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));

  const finalPrice = useMemo(() => {
    let p = item.price;
    if (gratin) p += gratin.price;
    if (accomp !== 'sans' && accomp.price) p += accomp.price;
    supps.forEach((s) => (p += s.price));
    if (menu) p += TACOS_OPTIONS.menuPrice;
    return p;
  }, [item.price, gratin, accomp, supps, menu]);

  const ready = viandeCount === 0 || viandes.length === viandeCount;

  const confirm = () => {
    const extras = [
      ...viandes,
      sauce !== 'Sans Sauce' ? `Sauce ${sauce}` : 'Sans sauce',
      ...(item.fromagere && fromagere ? ['Sauce fromagère'] : []),
      ...(item.crudites === 'add' ? crud.map((c) => `+ ${c}`) : []),
      ...(gratin ? [{ label: `Gratiné ${gratin.label}`, price: gratin.price }] : []),
      ...(accomp !== 'sans' && accomp.price > 0 ? [{ label: accomp.label, price: accomp.price }] : []),
      ...supps.map((s) => ({ label: s.label, price: s.price })),
      ...(menu ? [{ label: `Menu ${menu}`, price: TACOS_OPTIONS.menuPrice }] : []),
    ].map((e) => (typeof e === 'string' ? { label: e } : e));

    const removed = [
      ...(item.crudites === 'remove' ? crud : []),
      ...(item.frites && !frites ? ['Frites dans le tacos'] : []),
      ...(accomp === 'sans' ? ['Frites en accompagnement'] : []),
    ];

    onConfirm({ id: `${item.id}-${Date.now()}`, name: item.name, price: finalPrice, image: item.image, removed, extras });
  };

  return (
    <motion.div className="z-cz-overlay" data-lenis-prevent initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="z-cz"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="z-cz-head" style={{ backgroundImage: `linear-gradient(180deg, rgba(22,17,14,.15), rgba(22,17,14,.75)), url('${item.image}')` }}>
          <button className="z-cz-close" onClick={onClose} aria-label="Fermer">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <div className="z-cz-head-txt">
            <span className="z-cz-tag">Composez le vôtre</span>
            <h3>{item.name}</h3>
          </div>
        </div>

        <div className="z-cz-body" data-lenis-prevent>
          {viandeCount > 0 && (
            <div className="z-cz-group">
              <div className="z-cz-glabel"><span>Choix de la viande</span><em>{viandes.length}/{viandeCount}</em></div>
              <div className="z-cz-chips">
                {TACOS_OPTIONS.viandes.map((v) => (
                  <button key={v} className="z-cz-chip" data-on={viandes.includes(v)} onClick={() => toggleViande(v)}>{v}</button>
                ))}
              </div>
            </div>
          )}

          {item.fromagere && (
            <div className="z-cz-group">
              <div className="z-cz-glabel"><span>Sauce fromagère maison</span></div>
              <div className="z-cz-chips">
                <button className="z-cz-chip" data-on={fromagere} onClick={() => setFromagere(true)}>Oui</button>
                <button className="z-cz-chip" data-on={!fromagere} onClick={() => setFromagere(false)}>Non</button>
              </div>
            </div>
          )}

          <div className="z-cz-group">
            <div className="z-cz-glabel"><span>Sauce au choix</span></div>
            <div className="z-cz-chips">
              {TACOS_OPTIONS.sauces.map((s) => (
                <button key={s} className="z-cz-chip" data-on={sauce === s} onClick={() => setSauce(s)}>{s}</button>
              ))}
              <button className="z-cz-chip" data-on={sauce === 'Sans Sauce'} onClick={() => setSauce('Sans Sauce')}>Sans sauce</button>
            </div>
          </div>

          {item.crudites === 'add' && (
            <div className="z-cz-group">
              <div className="z-cz-glabel"><span>Ajouter des crudités</span><em>offert</em></div>
              <div className="z-cz-chips">
                {CRUDITES.map((c) => (
                  <button key={c} className="z-cz-chip" data-on={crud.includes(c)} onClick={() => toggleCrud(c)}>{c}</button>
                ))}
              </div>
            </div>
          )}

          {item.frites && (
            <div className="z-cz-group">
              <div className="z-cz-glabel"><span>Frites à l'intérieur</span></div>
              <div className="z-cz-chips">
                <button className="z-cz-chip" data-on={frites} onClick={() => setFrites(true)}>Avec frites</button>
                <button className="z-cz-chip" data-on={!frites} onClick={() => setFrites(false)}>Sans frites</button>
              </div>
            </div>
          )}

          <div className="z-cz-group">
            <div className="z-cz-glabel"><span>Frites en accompagnement</span></div>
            <div className="z-cz-chips">
              <button className="z-cz-chip" data-on={accomp === 'sans'} onClick={() => setAccomp('sans')}>Sans</button>
              {TACOS_OPTIONS.fritesAccomp.map((f) => (
                <button key={f.label} className="z-cz-chip" data-on={accomp !== 'sans' && accomp.label === f.label} onClick={() => setAccomp(f)}>
                  {f.label}{f.price > 0 && <i>+{fmt(f.price)}</i>}
                </button>
              ))}
            </div>
          </div>

          {item.gratin && (
            <div className="z-cz-group">
              <div className="z-cz-glabel"><span>Supplément gratiné</span><em>+3 €</em></div>
              <div className="z-cz-chips">
                <button className="z-cz-chip" data-on={!gratin} onClick={() => setGratin(null)}>Aucun</button>
                {TACOS_OPTIONS.gratinages.map((g) => (
                  <button key={g.label} className="z-cz-chip" data-on={gratin?.label === g.label} onClick={() => setGratin(g)}>{g.label}</button>
                ))}
              </div>
            </div>
          )}

          <div className="z-cz-group">
            <div className="z-cz-glabel"><span>Suppléments</span></div>
            <div className="z-cz-chips">
              {TACOS_OPTIONS.supplements.map((s) => (
                <button key={s.label} className="z-cz-chip" data-on={!!supps.find((x) => x.label === s.label)} onClick={() => toggleSupp(s)}>
                  {s.label} <i>+{fmt(s.price)}</i>
                </button>
              ))}
            </div>
          </div>

          <div className="z-cz-group">
            <div className="z-cz-glabel"><span>En menu&nbsp;? Frites + boisson</span><em>+2 €</em></div>
            <div className="z-cz-chips">
              <button className="z-cz-chip" data-on={!menu} onClick={() => setMenu(null)}>Sans</button>
              {TACOS_OPTIONS.menuDrinks.map((d) => (
                <button key={d} className="z-cz-chip" data-on={menu === d} onClick={() => setMenu(d)}>{d}</button>
              ))}
            </div>
          </div>

          {item.crudites === 'remove' && (
            <div className="z-cz-group">
              <div className="z-cz-glabel"><span>Retirer un ingrédient</span></div>
              <div className="z-cz-chips">
                {CRUDITES.map((c) => (
                  <button key={c} className="z-cz-chip z-cz-chip-rm" data-on={crud.includes(c)} onClick={() => toggleCrud(c)}>
                    {crud.includes(c) ? 'Sans ' + c.toLowerCase() : c}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="z-cz-foot">
          <button className="z-btn z-btn-primary z-cz-add" disabled={!ready} onClick={confirm}>
            {ready ? <>Ajouter · {fmt(finalPrice)}</> : `Choisissez ${viandeCount} viande${viandeCount > 1 ? 's' : ''}`}
          </button>
        </div>
      </motion.div>

      <style>{`
        .z-cz-overlay {
          position: fixed; inset: 0; z-index: 300;
          background: rgba(22, 17, 14, 0.6); backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center; padding: 20px;
        }
        .z-cz {
          background: var(--z-cream); border-radius: 24px; width: 100%; max-width: 540px;
          max-height: 88vh; display: flex; flex-direction: column; overflow: hidden;
          box-shadow: 0 40px 90px -20px rgba(0,0,0,.5);
        }
        .z-cz-head {
          position: relative; height: 150px; background-size: cover; background-position: center;
          display: flex; align-items: flex-end; padding: 18px 22px; color: #fff;
        }
        .z-cz-close {
          position: absolute; top: 14px; right: 14px; width: 36px; height: 36px; border-radius: 50%;
          background: rgba(0,0,0,.35); color: #fff; display: grid; place-items: center; backdrop-filter: blur(6px);
        }
        .z-cz-tag { font-size: .7rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: var(--z-gold); }
        .z-cz-head-txt h3 { font-family: var(--z-font-display); font-size: 1.8rem; font-weight: 900; color: #fff; margin: 4px 0 0; }
        .z-cz-body { padding: 22px; overflow-y: auto; -webkit-overflow-scrolling: touch; overscroll-behavior: contain; flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; gap: 22px; }
        .z-cz-head { flex-shrink: 0; }
        .z-cz-group { display: flex; flex-direction: column; gap: 10px; }
        .z-cz-glabel { display: flex; align-items: baseline; justify-content: space-between; }
        .z-cz-glabel span { font-family: var(--z-font-display); font-weight: 700; font-size: 1.05rem; color: var(--z-black); }
        .z-cz-glabel em { font-size: .78rem; font-weight: 600; color: var(--z-text-muted); font-style: normal; }
        .z-cz-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .z-cz-chip {
          padding: 9px 14px; border-radius: 999px; border: 1.5px solid var(--z-border);
          background: var(--z-white); color: var(--z-text); font-size: .86rem; font-weight: 600;
          cursor: pointer; transition: all .18s var(--z-ease); display: inline-flex; align-items: center; gap: 6px;
        }
        .z-cz-chip i { font-style: normal; opacity: .7; font-size: .78rem; }
        .z-cz-chip:hover { border-color: var(--z-charcoal); }
        .z-cz-chip[data-on="true"] { background: var(--z-green); color: #fff; border-color: var(--z-green); }
        .z-cz-chip-rm[data-on="true"] { background: var(--z-danger); border-color: var(--z-danger); }
        .z-cz-foot { padding: 16px 22px; border-top: 1px solid var(--z-border); background: var(--z-white); }
        .z-cz-add { width: 100%; }
        .z-cz-add[disabled] { opacity: .5; cursor: not-allowed; }
        @media (max-width: 560px) {
          .z-cz-overlay { padding: 0; align-items: flex-end; }
          .z-cz { max-width: 100%; max-height: 92vh; border-radius: 24px 24px 0 0; }
        }
      `}</style>
    </motion.div>
  );
}
