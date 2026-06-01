import React from 'react';

/**
 * Placeholder vectoriel élégant pour les pizzas sans photo réelle.
 * Affiche une pizza stylisée vue de dessus, avec des "toppings" générés
 * de manière déterministe à partir du nom (toujours la même pizza pour la même
 * recette). Couleurs adaptées à la base (tomate ou crème).
 */
export default function PizzaPlaceholder({ pizza }) {
  const { base, name, ingredients = [] } = pizza;
  const sauce = base === 'creme' ? '#F4ECDE' : '#D04A2A';
  const sauceDark = base === 'creme' ? '#E0D5C1' : '#A0331C';
  const crust = '#D4A968';
  const crustDark = '#A07B3D';

  // Génère 7 toppings déterministes selon le hash du nom
  const seed = [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const rng = (n) => ((seed * 9301 + 49297 + n * 233280) % 233280) / 233280;

  // Type de topping selon les ingrédients
  const hasOlives = ingredients.some((i) => /olives?/i.test(i));
  const hasCheese = ingredients.some((i) => /chèvre|brie|roquefort|cheddar|mozza/i.test(i));
  const hasMeat = ingredients.some((i) =>
    /viande|chorizo|jambon|poulet|merguez|lardon|magret|kebab|burger/i.test(i)
  );
  const hasMushroom = ingredients.some((i) => /champignon/i.test(i));
  const hasPepper = ingredients.some((i) => /poivron|piment/i.test(i));

  const toppings = [];
  // 3 olives noires
  if (hasOlives) {
    for (let i = 0; i < 3; i++) {
      toppings.push({
        type: 'olive',
        cx: 110 + Math.sin(seed + i * 2) * 50,
        cy: 110 + Math.cos(seed + i * 2) * 50,
      });
    }
  }
  // 4-5 morceaux viande/champi/poivron rouge
  if (hasMeat || hasMushroom || hasPepper) {
    const meatColor = hasMushroom
      ? '#6B4E2E'
      : hasPepper
        ? '#C53030'
        : '#9B5A3D';
    for (let i = 0; i < 6; i++) {
      toppings.push({
        type: 'chunk',
        cx: 110 + (rng(i + 10) - 0.5) * 130,
        cy: 110 + (rng(i + 20) - 0.5) * 130,
        r: 7 + rng(i + 30) * 4,
        color: meatColor,
      });
    }
  }
  // Pépites de fromage doré
  if (hasCheese) {
    for (let i = 0; i < 8; i++) {
      toppings.push({
        type: 'cheese',
        cx: 110 + (rng(i + 40) - 0.5) * 140,
        cy: 110 + (rng(i + 50) - 0.5) * 140,
        r: 4 + rng(i + 60) * 3,
      });
    }
  }

  return (
    <div className="z-pizza-placeholder" data-base={base}>
      <svg
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="z-pizza-placeholder-svg"
      >
        <defs>
          <radialGradient id={`crust-${pizza.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="80%" stopColor={crust} />
            <stop offset="100%" stopColor={crustDark} />
          </radialGradient>
          <radialGradient id={`sauce-${pizza.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={sauce} stopOpacity="1" />
            <stop offset="100%" stopColor={sauceDark} stopOpacity="0.95" />
          </radialGradient>
        </defs>

        {/* Croûte */}
        <circle cx="110" cy="110" r="100" fill={`url(#crust-${pizza.id})`} />
        {/* Brûlures de cuisson sur la croûte */}
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2 + seed;
          return (
            <ellipse
              key={`burn-${i}`}
              cx={110 + Math.cos(angle) * 95}
              cy={110 + Math.sin(angle) * 95}
              rx="10"
              ry="6"
              fill="#5A3A1E"
              opacity="0.35"
              transform={`rotate(${(angle * 180) / Math.PI} ${110 + Math.cos(angle) * 95} ${110 + Math.sin(angle) * 95})`}
            />
          );
        })}
        {/* Sauce / fromage fondu */}
        <circle cx="110" cy="110" r="86" fill={`url(#sauce-${pizza.id})`} />

        {/* Toppings */}
        {toppings.map((t, i) => {
          if (t.type === 'olive') {
            return (
              <ellipse
                key={`t-${i}`}
                cx={t.cx}
                cy={t.cy}
                rx="6"
                ry="4"
                fill="#1A1A1A"
              />
            );
          }
          if (t.type === 'chunk') {
            return (
              <circle
                key={`t-${i}`}
                cx={t.cx}
                cy={t.cy}
                r={t.r}
                fill={t.color}
                opacity="0.85"
              />
            );
          }
          if (t.type === 'cheese') {
            return (
              <circle
                key={`t-${i}`}
                cx={t.cx}
                cy={t.cy}
                r={t.r}
                fill="#FCD862"
                opacity="0.7"
              />
            );
          }
          return null;
        })}

        {/* Reflets sur le fromage (brillance) */}
        <ellipse
          cx="85"
          cy="80"
          rx="20"
          ry="8"
          fill="#FFFFFF"
          opacity="0.18"
          transform="rotate(-30 85 80)"
        />
      </svg>

      <span className="z-pizza-placeholder-note">Photo à venir</span>
    </div>
  );
}
