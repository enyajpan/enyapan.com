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

// Dummy long-form content shown when you scroll inside a card.
// Replace with real project writing and media later.
const LOREM = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.",
  "Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.",
];

function moreHTML() {
  const box = (label, paras) =>
    `<div class="text-box"><p class="label">${label}</p>${paras.map((t) => `<p>${t}</p>`).join("")}</div>`;
  const media = (tall = false) =>
    `<div class="more__media${tall ? " more__media--tall" : ""}"><span class="placeholder-label">image / video</span></div>`;

  return `
    <div class="card__more">
      ${box("Overview", [LOREM[0], LOREM[1]])}
      ${media()}
      <div class="more__row">
        ${box("Process", [LOREM[2]])}
        ${box("Outcome", [LOREM[3]])}
      </div>
      <div class="more__row">${media(true)}${media(true)}</div>
      ${box("Reflection", [LOREM[1], LOREM[0]])}
      ${media()}
      ${box("Credits", ["Collaborators, tools, and acknowledgements."])}
    </div>`;
}

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
    ${moreHTML()}
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

// On the home page (header not fully collapsed), the first project is the
// default: it re-opens when the cursor leaves the projects. Once scrolled
// down, the last hovered project stays open.
let collapsed = false;
let progress = 0; // header collapse, 0 → 1

function resetToFirst() {
  if (!collapsed && !projectsEl.matches(":hover")) open(cards[0]);
}

projectsEl.addEventListener("mouseleave", resetToFirst);

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
  progress = p;
  root.style.setProperty("--header-h", `${lerp(layout.full, layout.compact)}px`);
  root.style.setProperty("--statement-top", `${lerp(layout.topStart, layout.topEnd)}px`);

  // Scrolling back up to the home page also restores the default
  const wasCollapsed = collapsed;
  collapsed = p >= 1;
  // cards scroll on their own only on the scrolled-down page
  document.body.classList.toggle("is-collapsed", collapsed);
  if (wasCollapsed && !collapsed) {
    cards.forEach((c) => { c.scrollTop = 0; });
    resetToFirst();
  }
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

// ---------- hover labels (rabbit, hole, "Enya", "Pan", "designer") ----------
// Any element with data-label gets a label that follows the cursor.
// data-theme picks the colors (see .hover-label--* in style.css).
// The rabbit is in frame for the first ~4.15s of the 6s loop, then it's gone into the hole.

const bunnyVideo = document.querySelector(".bunny__video");
const RABBIT_GONE_AT = 4.15;

const hoverLabel = document.createElement("div");
hoverLabel.className = "hover-label";
hoverLabel.setAttribute("aria-hidden", "true");
document.body.appendChild(hoverLabel);

let hoveredEl = null;
const cursor = { x: 0, y: 0 };

function labelIsAvailable(el) {
  // words in the rest of the headline (and the bunny) fade out as the header collapses
  if (el.closest(".rest") && progress >= 0.2) return false;
  if (!el.classList.contains("bunny__hit")) return true;
  return !(el.dataset.label === "rabbit" && bunnyVideo.currentTime > RABBIT_GONE_AT);
}

function renderHoverLabel() {
  const show = hoveredEl && labelIsAvailable(hoveredEl);
  hoverLabel.classList.toggle("is-visible", Boolean(show));
  if (!show) return;
  hoverLabel.textContent = hoveredEl.dataset.label;
  hoverLabel.className = `hover-label is-visible hover-label--${hoveredEl.dataset.theme || "gray"}`;
  hoverLabel.style.transform = `translate(${cursor.x + 12}px, ${cursor.y + 14}px)`;
}

document.querySelectorAll("[data-label]").forEach((el) => {
  el.addEventListener("mouseenter", () => { hoveredEl = el; renderHoverLabel(); });
  el.addEventListener("mouseleave", () => { hoveredEl = null; renderHoverLabel(); });
  el.addEventListener("mousemove", (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    renderHoverLabel();
  });
});

bunnyVideo.addEventListener("timeupdate", renderHoverLabel);
window.addEventListener("scroll", renderHoverLabel, { passive: true });
