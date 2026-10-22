// Each ghost is an original, simple vector drawing (inline SVG).
// color = body fill, accent = blush/cheek color.
const ghosts = [
  {
    name: "Casper",
    desc: "The classic friendly ghost — soft, round and harmless.",
    color: "#e8ecff",
    accent: "#ffb3c1",
  },
  {
    name: "Boo",
    desc: "A tiny, shy ghost who hides behind its own sheet.",
    color: "#cfe0ff",
    accent: "#ff9eb5",
  },
  {
    name: "Wisp",
    desc: "A wispy spirit that drifts and fades into the night.",
    color: "#a9b8ff",
    accent: "#ffb3c1",
  },
  {
    name: "Gloom",
    desc: "A moody shadow-ghost with a soft purple glow.",
    color: "#6a5acd",
    accent: "#ff9eb5",
  },
  {
    name: "Minty",
    desc: "A cool, mint-green ghost with a refreshing chill.",
    color: "#7fe0c3",
    accent: "#ffb3c1",
  },
  {
    name: "Ember",
    desc: "A warm, glowing ghost with a gentle orange light.",
    color: "#ffb37a",
    accent: "#ff7a9e",
  },
  {
    name: "Pip",
    desc: "A small, playful ghost that loves to bounce around.",
    color: "#ffd6e8",
    accent: "#ff8fb0",
  },
  {
    name: "Nimbus",
    desc: "A cloudy, puffy ghost that floats like a storm cloud.",
    color: "#b8c4d8",
    accent: "#ffb3c1",
  },
];

function ghostSVG(ghost) {
  return `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${ghost.name}">
      <path d="M60 12
               C 30 12 16 30 16 56
               L 16 92
               L 28 82
               L 40 92
               L 52 82
               L 64 92
               L 76 82
               L 88 92
               L 100 82
               L 104 92
               L 104 56
               C 104 30 90 12 60 12 Z"
            fill="${ghost.color}" />
      <circle cx="44" cy="52" r="7" fill="#1a1e33" />
      <circle cx="76" cy="52" r="7" fill="#1a1e33" />
      <ellipse cx="60" cy="68" rx="9" ry="12" fill="#1a1e33" />
      <circle cx="34" cy="62" r="5" fill="${ghost.accent}" opacity="0.85" />
      <circle cx="86" cy="62" r="5" fill="${ghost.accent}" opacity="0.85" />
    </svg>
  `;
}

const grid = document.getElementById("ghost-grid");

ghosts.forEach((ghost) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    ${ghostSVG(ghost)}
    <h2>${ghost.name}</h2>
    <p>${ghost.desc}</p>
  `;
  grid.appendChild(card);
});