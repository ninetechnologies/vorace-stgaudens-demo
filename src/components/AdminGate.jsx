import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AdminPreview from './AdminPreview.jsx';

const ADMIN_ID = 'vorace';
const ADMIN_PASSWORD = 'pizza2026';

export default function AdminGate() {
  const [stage, setStage] = useState('closed');
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');
  const idInputRef = useRef(null);

  useEffect(() => {
    const onOpen = () => {
      if (stage === 'admin') return;
      setError('');
      setId('');
      setPwd('');
      setStage('login');
    };
    window.addEventListener('vorace:open-admin-gate', onOpen);
    return () => window.removeEventListener('vorace:open-admin-gate', onOpen);
  }, [stage]);

  useEffect(() => {
    if (stage === 'login' && idInputRef.current) {
      setTimeout(() => idInputRef.current?.focus(), 60);
    }
  }, [stage]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (stage === 'login') setStage('closed');
      else if (stage === 'admin') setStage('closed');
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [stage]);

  useEffect(() => {
    document.body.style.overflow = stage === 'closed' ? '' : 'hidden';
    document.body.dataset.adminStage = stage;
    return () => {
      document.body.style.overflow = '';
      delete document.body.dataset.adminStage;
    };
  }, [stage]);

  function submit(e) {
    e.preventDefault();
    if (id.trim().toLowerCase() === ADMIN_ID && pwd === ADMIN_PASSWORD) {
      setError('');
      setStage('admin');
    } else {
      setError('Identifiants incorrects');
      setPwd('');
    }
  }

  return (
    <>
      <AnimatePresence>
        {stage === 'login' && (
          <motion.div
            className="z-gate-backdrop"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setStage('closed')}
          >
            <motion.form
              className="z-gate-card"
              initial={{ y: 30, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              onSubmit={submit}
            >
              <button
                type="button"
                className="z-gate-close"
                onClick={() => setStage('closed')}
                aria-label="Fermer"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="z-gate-head">
                <span className="z-gate-eyebrow">Accès restreint</span>
                <h3 className="z-gate-title">Tableau de bord Vorace</h3>
                <p className="z-gate-sub">Réservé à la pizzeria. Connectez-vous pour voir les commandes en direct.</p>
              </div>

              <label className="z-gate-field">
                <span>Identifiant</span>
                <input
                  ref={idInputRef}
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  autoComplete="username"
                  spellCheck={false}
                  required
                />
              </label>

              <label className="z-gate-field">
                <span>Mot de passe</span>
                <input
                  type="password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  autoComplete="current-password"
                  required
                />
              </label>

              {error && <p className="z-gate-error">{error}</p>}

              <button type="submit" className="z-gate-submit">Se connecter</button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage === 'admin' && (
          <motion.div
            className="z-gate-admin"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <button
              type="button"
              className="z-gate-logout"
              onClick={() => setStage('closed')}
              aria-label="Quitter le tableau de bord"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Quitter
            </button>
            <AdminPreview />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .z-gate-backdrop {
          position: fixed;
          inset: 0;
          z-index: 400;
          background: rgba(8, 18, 14, 0.72);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        body:not([data-admin-stage="login"]) .z-gate-backdrop,
        body:not([data-admin-stage="admin"]) .z-gate-admin {
          pointer-events: none !important;
        }
        .z-gate-card {
          position: relative;
          width: 100%;
          max-width: 420px;
          background: var(--z-white);
          color: var(--z-text);
          border-radius: 22px;
          padding: 36px 32px 28px;
          box-shadow: 0 30px 80px -20px rgba(0,0,0,0.55);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .z-gate-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--z-cream-warm, #f3ede3);
          color: var(--z-text);
          display: grid;
          place-items: center;
          border: none;
          cursor: pointer;
        }
        .z-gate-head { margin-bottom: 6px; }
        .z-gate-eyebrow {
          display: inline-block;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--z-red, #D62828);
          margin-bottom: 6px;
        }
        .z-gate-title {
          font-family: var(--z-font-display);
          font-size: 1.7rem;
          font-weight: 800;
          margin: 0 0 6px;
          color: var(--z-black, #6B1620);
          line-height: 1.1;
        }
        .z-gate-sub {
          font-size: 0.9rem;
          color: var(--z-text-muted, #6B7280);
          margin: 0;
          line-height: 1.45;
        }
        .z-gate-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .z-gate-field span {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--z-text-muted, #6B7280);
          letter-spacing: 0.04em;
        }
        .z-gate-field input {
          padding: 12px 14px;
          border-radius: 12px;
          border: 1.5px solid var(--z-border, #E5E7EB);
          font-size: 1rem;
          font-family: inherit;
          background: #fafafa;
          color: var(--z-text);
          transition: border-color 0.2s, background 0.2s;
        }
        .z-gate-field input:focus {
          outline: none;
          border-color: var(--z-green, #6B1620);
          background: #fff;
        }
        .z-gate-error {
          margin: 0;
          font-size: 0.85rem;
          color: #D62828;
          font-weight: 600;
        }
        .z-gate-submit {
          margin-top: 6px;
          padding: 14px 20px;
          border-radius: 12px;
          background: var(--z-green, #6B1620);
          color: var(--z-white, #fff);
          font-size: 1rem;
          font-weight: 700;
          font-family: inherit;
          border: none;
          cursor: pointer;
          transition: transform 0.15s, background 0.2s;
        }
        .z-gate-submit:hover { background: #4A0E16; }
        .z-gate-submit:active { transform: scale(0.98); }
        .z-gate-hint {
          margin: 4px 0 0;
          text-align: center;
          font-size: 0.74rem;
          color: var(--z-text-muted, #6B7280);
        }
        .z-gate-hint strong { color: var(--z-text); }

        .z-gate-admin {
          position: fixed;
          inset: 0;
          z-index: 350;
          overflow-y: auto;
          background: var(--z-black, #2E0810);
          -webkit-overflow-scrolling: touch;
        }
        .z-gate-logout {
          position: fixed;
          top: 18px;
          right: 18px;
          z-index: 360;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          font-family: inherit;
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          cursor: pointer;
          transition: background 0.2s;
        }
        .z-gate-logout:hover { background: rgba(255, 255, 255, 0.2); }

        @media (max-width: 520px) {
          .z-gate-card {
            padding: 30px 22px 22px;
            border-radius: 20px;
          }
          .z-gate-title { font-size: 1.5rem; }
        }
      `}</style>
    </>
  );
}
