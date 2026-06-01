import React from 'react';

/**
 * Logo Vorace inline SVG — V stylisé blanc sur disque bordeaux.
 * Inspiré du logo officiel Facebook de Vorace Pizzeria.
 * `size` = hauteur en px, `inverse` réservé compat Navbar (sans effet ici).
 */
export default function Logo({ size = 56, inverse = false }) {
  const w = size;
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'block',
        filter: inverse
          ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.35))'
          : 'drop-shadow(0 1px 2px rgba(0,0,0,0.08))',
      }}
      role="img"
      aria-label="Vorace"
    >
      <circle cx="50" cy="50" r="48" fill="#6B1620" />
      <circle cx="50" cy="50" r="48" fill="none" stroke="#4A0E16" strokeWidth="1.5" opacity="0.5" />
      {/* Lettre V stylisée, italique, façon couverture FB Vorace */}
      <g transform="translate(50 50)">
        <path
          d="M -22 -26 L -8 22 L 0 22 L 24 -26 L 14 -26 L -2 12 L -14 -26 Z"
          fill="#F5EFE6"
          stroke="#F5EFE6"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
