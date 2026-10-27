// ---------------------------------------------------------------------------
// Projects. Placeholders for now — to use real assets from /assets, set
// `media` to e.g. { type: "video", src: "assets/dx-app/home - map pan.mp4" }
// or { type: "image", src: "assets/in-case-of-loss/01.jpg" }.
// ---------------------------------------------------------------------------
const PROJECTS = [
  { title: "Project 01", summary: "One or two sentences about the project, what it is and who it was for.", year: "2026", role: "Role / medium", media: null },
  {
    // From the Figma frame "in-case-of-loss"
    title: "In case of loss, please return to:",
    eyebrow: "RISD Graphic Design Degree Project", // small label above the title
    tagline: "What is loss if not an absence?",    // shown on the home page (top) view only
    media: { type: "video", src: "assets/in-case-of-loss/thumbnail_loss.mp4" },
    caseStudy: {
      meta: [
        { label: "Timeline", value: "May 2025" },
        { label: "Scope", value: "Graphic &amp; Web Design // Installation" },
      ],
      context: {
        label: "RISD Degree Project",
        paragraphs: [
          "The RISD DP is a self-defined creative and research project.",
          "As graduation was nearing, I found myself reflecting on these years of becoming \u2014 as a student, daughter, friend, individual. I thought about all that I\u2019ve gained, and how all this gain is not possible without loss: where rapidly learning new things about the world and life comes the loss of innocence, where growing up and entering the real world comes the loss of my childhood, where moving to a new city comes the loss of the life I have here, where becoming fully independent comes potentially a lost of connection as well\u2026 and as I get older, so do the people around me, and that alone brings an indescribable loss of some kind. My DP intends to explore this loss \u2014 what is loss if not an absence?",
        ],
      },
      statement: {
        label: "Artist Statement",
        paragraphs: [
          "Loss is our first lesson in mystery. It teaches us that not everything can be saved, stored, or held, that systems of logic \u2014 the foundation of life as we currently know it \u2014 have limits. We learn that sometimes, what\u2019s most human is what we cannot explain. In case of loss, please return to: is an exploration of loss as a site of emotional residue, where we can only feel what we feel after we have lost what we lost. To truly understand the world we live in is to acknowledge that a lot of it is a beautiful mystery.",
          "Inspired by Craigslist\u2019s \u2018missed connections\u2019 ad postings, this project seeks to create a space to gather those fragments of time. As people share what they\u2019ve lost, this collection turns into a living archive of what slips away and the ways we reach for it. You can leave something here, and maybe someone else will find it; you can find something here, and while it may not be yours, it may pierce the heart and feel strangely familiar. This digital-turned-physical archive grows with every entry, every act of surrender, every fragile attempt at either holding on or letting go.",
          "To lose is to live. And sometimes, to find is not to recover, but to stumble across what we didn\u2019t know we were seeking. What is lost can be found; or, perhaps, not all that is lost wants to be found. Maybe that\u2019s what this is at its core: a love letter to everything we couldn\u2019t hold on to, and a goodbye to what once was.",
        ],
      },
      // Shown one after another, in order. w / h keep the layout steady while files load.
      assets: [
        { src: "assets/in-case-of-loss/01.jpg", w: 3467, h: 2477 },
        { src: "assets/in-case-of-loss/02.mp4", w: 2560, h: 1440 },
        { src: "assets/in-case-of-loss/03.mp4", w: 2560, h: 1440 },
        { src: "assets/in-case-of-loss/04.jpg", w: 5198, h: 3713 },
        { src: "assets/in-case-of-loss/05.mp4", w: 1920, h: 1080 },
        { src: "assets/in-case-of-loss/06.mp4", w: 2560, h: 1440 },
        { src: "assets/in-case-of-loss/07.jpg", w: 3891, h: 2780 },
        { src: "assets/in-case-of-loss/08.jpg", w: 4169, h: 2978 },
        { src: "assets/in-case-of-loss/09.jpg", w: 11654, h: 8324 },
        { src: "assets/in-case-of-loss/10.jpg", w: 7110, h: 5078 },
        { src: "assets/in-case-of-loss/11.mp4", w: 2700, h: 1930 },
        { src: "assets/in-case-of-loss/12.jpg", w: 4654, h: 3325 },
        { src: "assets/in-case-of-loss/13.jpg", w: 9331, h: 6664 },
        { src: "assets/in-case-of-loss/14.mp4", w: 3032, h: 2020 },
        { src: "assets/in-case-of-loss/15.jpg", w: 5798, h: 4141 },
        { src: "assets/in-case-of-loss/16.mp4", w: 3840, h: 2742 },
        { src: "assets/in-case-of-loss/17.jpg", w: 2152, h: 1537 },
        { src: "assets/in-case-of-loss/18.jpg", w: 3482, h: 2487 },
        { src: "assets/in-case-of-loss/19.jpg", w: 5054, h: 3609 },
        { src: "assets/in-case-of-loss/20.jpg", w: 4736, h: 3376 },
      ],
    },
  },
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

// Real project content (currently project 2, from the Figma frame "in-case-of-loss")
function caseStudyHTML(p) {
  const cs = p.caseStudy;
  const asset = ({ src, w, h }) => {
    const url = encodeURI(src);
    return src.endsWith(".mp4")
      ? `<video class="case__asset" data-src="${url}" width="${w}" height="${h}" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback preload="none" tabindex="-1" aria-hidden="true"></video>`
      : `<img class="case__asset" src="${url}" width="${w}" height="${h}" alt="" loading="lazy" decoding="async">`;
  };

  return `
    <div class="card__info case">
      <div class="case__overview">
        <div class="case__heading">
          <p class="case__label">${p.eyebrow}</p>
          <h2 class="case__title">${p.title}</h2>
        </div>
        ${cs.meta.map((m) => `<div class="case__meta"><p class="case__label">${m.label}</p><p class="case__value">${m.value}</p></div>`).join("")}
        ${p.tagline ? `<p class="case__tagline">${p.tagline}</p>` : ""}
      </div>
      <div class="case__text">
        <div class="case__statement">
          <p class="case__label">${cs.statement.label}</p>
          ${cs.statement.paragraphs.map((t) => `<p class="case__body">${t}</p>`).join("")}
        </div>
        <div class="case__context">
          <p class="case__label">${cs.context.label}</p>
          ${cs.context.paragraphs.map((t) => `<p class="case__body">${t}</p>`).join("")}
        </div>
      </div>
    </div>
    <div class="case__assets">${cs.assets.map(asset).join("")}</div>`;
}

function mediaHTML(media) {
  if (!media) return `<span class="placeholder-label">image / video</span>`;
  if (media.type === "video") {
    return `<video src="${encodeURI(media.src)}" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback preload="auto" tabindex="-1" aria-hidden="true"></video>`;
  }
  return `<img src="${encodeURI(media.src)}" alt="" loading="lazy">`;
}

projectsEl.innerHTML = PROJECTS.map((p, i) => p.caseStudy ? `
  <a class="card card--case${i === 0 ? " is-open" : ""}" href="#project-${i + 1}">
    <div class="card__media">${mediaHTML(p.media)}</div>
    ${caseStudyHTML(p)}
  </a>
` : `
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

// ---------- project videos: load and play only while on screen ----------
// The in-case-of-loss videos are large (23–102 MB), so nothing downloads until a
// video is about to scroll into view, and each pauses again once it leaves.

const caseVideos = document.querySelectorAll("video.case__asset");

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target: video, isIntersecting }) => {
    if (isIntersecting) {
      if (!video.src) video.src = video.dataset.src;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}, { rootMargin: "300px 0px" });

caseVideos.forEach((v) => videoObserver.observe(v));
