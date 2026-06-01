import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Bouton flottant WhatsApp (à droite, ne masque pas la cart bubble centrale).
 * Apparaît uniquement après que l'utilisateur a scrollé un peu.
 */
export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/33751148677?text=Bonjour%20Vorace%20Pizza%2C%20je%20souhaite%20commander"
          target="_blank"
          rel="noopener noreferrer"
          className="z-fab-whatsapp"
          aria-label="Discuter sur WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 240, damping: 18 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4-.1-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.5-.4-.6-.4-.2 0-.4 0-.6 0s-.5.1-.7.4c-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.3zM12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6C8.1 23.4 10 24 12 24c6.6 0 12-5.4 12-12S18.6 0 12 0zm0 22c-1.9 0-3.7-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.5 15.8 2 13.9 2 12 2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" />
          </svg>
          <style>{`
            .z-fab-whatsapp {
              position: fixed;
              bottom: 24px;
              right: 24px;
              z-index: 80;
              width: 56px;
              height: 56px;
              border-radius: 50%;
              background: #25D366;
              color: var(--z-white);
              display: grid;
              place-items: center;
              text-decoration: none;
              box-shadow: 0 12px 30px -8px rgba(37, 211, 102, 0.6);
            }
            @media (max-width: 540px) {
              .z-fab-whatsapp { bottom: 96px; right: 18px; width: 50px; height: 50px; }
            }
          `}</style>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
