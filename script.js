// ---------------------------------------------------------------------------
// Projects. Placeholders for now — to use real assets from /assets, set
// `media` to e.g. { type: "video", src: "assets/dx-app/home - map pan.mp4" }
// or { type: "image", src: "assets/in-case-of-loss/01.jpg" }.
// ---------------------------------------------------------------------------
const PROJECTS = [
  { title: "Project 01", summary: "One or two sentences about the project, what it is and who it was for.", year: "2026", role: "Role / medium", media: null },
  { title: "Project 02", summary: "One or two sentences about the project, what it is and who it was for.", year: "2025", role: "Role / medium", media: null },
  { title: "Project 03", summary: "One or two sentences about the project, what it is and who it was for.", year: "2025", role: "Role / medium", media: null },
  { title: "Project 04", summary: "One or two sentences about the project, what it is and who it was for.", year: "2024", role: "Role / medium", media: null },
  { title: "Project 05", summary: "One or two sentences about the project, what it is and who it was for.", year: "2024", role: "Role / medium", media: null },
];

const root = document.documentElement;
const header = document.querySelector(".site-header");
const statement = document.querySelector(".statement");
const projectsEl = document.querySelector(".projects");

// ---------- render cards ----------

function mediaHTML(media) {
  if (!media) return `<span class="placeholder-label">image / video</span>`;
  if (media.type === "video") {
    return `<video src="${encodeURI(media.src)}" muted loop playsinline autoplay preload="metadata"></video>`;
  }
  return `<img src="${encodeURI(media.src)}" alt="" loading="lazy">`;
}

projectsEl.innerHTML = PROJECTS.map((p, i) => `
  <a class="card${i === 0 ? " is-open" : ""}" href="#project-${i + 1}">
    <div class="card__media">${mediaHTML(p.media)}</div>
    <div class="card__info">
      <div class="text-box">
        <h2>${p.title}</h2>
        <p>${p.summary}</p>
      </div>
      <div class="text-box text-box--meta">
        <p class="label">Year</p><p>${p.year}</p>
      </div>
      <div class="text-box text-box--meta">
        <p class="label">Role</p><p>${p.role}</p>
      </div>
    </div>
  </a>
`).join("");

// ---------- accordion: the hovered / focused card expands ----------

const cards = [...projectsEl.querySelectorAll(".card")];

function open(card) {
  cards.forEach((c) => c.classList.toggle("is-open", c === card));
}

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => open(card));
  card.addEventListener("focus", () => open(card));
});

// ---------- header collapse on scroll ----------
// Figma: header line at 523 / 1024 → 68 (compact "Enya Pan" bar).
// Statement top 283 → 17, font size 64 → 30 (font size is handled in CSS).

let layout = { full: 523, compact: 68, topStart: 283, topEnd: 17 };

function measure() {
  const u = window.innerWidth / 1440;
  root.style.setProperty("--p", 0);

  const statementHeight = statement.getBoundingClientRect().height;
  const minTop = 110 * u; // keep the big statement clear of the nav
  const full = Math.max(window.innerHeight * (523 / 1024), minTop + statementHeight + 25 * u);

  layout = {
    full,
    compact: 68 * u,
    topStart: full - 25 * u - statementHeight,
    topEnd: 17 * u,
  };
  root.style.setProperty("--collapse-distance", `${layout.full - layout.compact}px`);
  update();
}

function update() {
  const distance = layout.full - layout.compact;
  const p = Math.min(1, Math.max(0, window.scrollY / distance));
  const lerp = (a, b) => a + (b - a) * p;

  root.style.setProperty("--p", p.toFixed(4));
  root.style.setProperty("--header-h", `${lerp(layout.full, layout.compact)}px`);
  root.style.setProperty("--statement-top", `${lerp(layout.topStart, layout.topEnd)}px`);
}

let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { update(); ticking = false; });
}, { passive: true });

window.addEventListener("resize", measure);
document.fonts?.ready.then(measure);
measure();

// Clicking the name scrolls back to the top
statement.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- press "g" to toggle red gutter guides ----------
window.addEventListener("keydown", (e) => {
  if (e.key === "g" && !e.metaKey && !e.ctrlKey && !/input|textarea/i.test(e.target.tagName)) {
    document.body.classList.toggle("show-guides");
  }
});
