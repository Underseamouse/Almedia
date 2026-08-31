/** Stand-in game artwork. Data URIs so the pixel sampler stays same-origin. */
const svg = (inner: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320">${inner}</svg>`
  )}`;

export const artSolitaire = svg(`
  <defs>
    <radialGradient id="a" cx="35%" cy="30%">
      <stop offset="0%" stop-color="#7ad3ff"/>
      <stop offset="55%" stop-color="#2b6bd6"/>
      <stop offset="100%" stop-color="#16215c"/>
    </radialGradient>
  </defs>
  <rect width="320" height="320" fill="url(#a)"/>
  <circle cx="240" cy="80" r="52" fill="#ffd84d" opacity="0.9"/>
  <rect x="40" y="180" width="90" height="120" rx="10" fill="#fff" opacity="0.92" transform="rotate(-12 85 240)"/>
  <rect x="120" y="190" width="90" height="120" rx="10" fill="#fff" opacity="0.8" transform="rotate(6 165 250)"/>
  <circle cx="90" cy="90" r="34" fill="#ff5d8f" opacity="0.85"/>
`);

export const artMonopoly = svg(`
  <defs>
    <linearGradient id="b" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ff9a3c"/>
      <stop offset="50%" stop-color="#e0402f"/>
      <stop offset="100%" stop-color="#5b1146"/>
    </linearGradient>
  </defs>
  <rect width="320" height="320" fill="url(#b)"/>
  <rect x="70" y="70" width="180" height="180" rx="24" fill="#ffe9b0" opacity="0.9"/>
  <circle cx="160" cy="160" r="58" fill="#1f8f5a"/>
  <circle cx="160" cy="160" r="26" fill="#ffd84d"/>
  <rect x="18" y="240" width="60" height="60" rx="12" fill="#2b6bd6" opacity="0.8"/>
`);

export const artSurvey = svg(`
  <defs>
    <linearGradient id="c" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#33e08a"/>
      <stop offset="100%" stop-color="#065f46"/>
    </linearGradient>
  </defs>
  <rect width="320" height="320" fill="url(#c)"/>
  <rect x="60" y="50" width="200" height="220" rx="18" fill="#f5fff9" opacity="0.94"/>
  <rect x="88" y="92" width="144" height="16" rx="8" fill="#0f5132" opacity="0.5"/>
  <rect x="88" y="130" width="110" height="16" rx="8" fill="#0f5132" opacity="0.32"/>
  <rect x="88" y="168" width="132" height="16" rx="8" fill="#0f5132" opacity="0.32"/>
  <circle cx="232" cy="238" r="30" fill="#ffc700"/>
`);
