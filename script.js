// ---------------------------------------------------------------------------
// Projects. Placeholders for now — to use real assets from /assets, set
// `media` to e.g. { type: "video", src: "assets/dx-app/dx_app_thumbnail.mp4" }
// or { type: "image", src: "assets/in-case-of-loss/01.jpg" }.
// ---------------------------------------------------------------------------
const PROJECTS = [
  {
    // From the Figma frame "dx-app"
    title: "Dasher App: Offer at a Glance",
    eyebrow: "DoorDash",
    tagline: "How can DoorDash help Dashers make faster and more informed decisions when accepting offers to dash?",
    media: { type: "video", src: "assets/dx-app/dx_app_thumbnail.mp4" },
    caseStudy: {
      meta: [
        { label: "Timeline", value: "May 2026" },
        { label: "Scope", value: "Product Design // Product Strategy // Data Analytics" },
      ],
      body: dxLockHTML(), // password protected: decrypted from dx-locked.js (see the end of this file)
    },
  },
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
        { src: "assets/in-case-of-loss/web/01.jpg", w: 2300, h: 1643 },
        { src: "assets/in-case-of-loss/02.mp4", w: 2560, h: 1440 },
        { src: "assets/in-case-of-loss/03.mp4", w: 2560, h: 1440 },
        { src: "assets/in-case-of-loss/web/04.jpg", w: 2300, h: 1643 },
        { src: "assets/in-case-of-loss/05.mp4", w: 1920, h: 1080 },
        { src: "assets/in-case-of-loss/06.mp4", w: 2560, h: 1440 },
        { src: "assets/in-case-of-loss/web/07.jpg", w: 2300, h: 1643 },
        { src: "assets/in-case-of-loss/web/08.jpg", w: 2300, h: 1643 },
        { src: "assets/in-case-of-loss/web/09.jpg", w: 2300, h: 1643 },
        { src: "assets/in-case-of-loss/web/10.jpg", w: 2300, h: 1642 },
        { src: "assets/in-case-of-loss/11.mp4", w: 2700, h: 1930 },
        { src: "assets/in-case-of-loss/web/12.jpg", w: 2300, h: 1643 },
        { src: "assets/in-case-of-loss/web/13.jpg", w: 2300, h: 1642 },
        { src: "assets/in-case-of-loss/14.mp4", w: 3032, h: 2020 },
        { src: "assets/in-case-of-loss/web/15.jpg", w: 2300, h: 1642 },
        { src: "assets/in-case-of-loss/16.mp4", w: 3840, h: 2742 },
        { src: "assets/in-case-of-loss/web/17.jpg", w: 2152, h: 1537 },
        { src: "assets/in-case-of-loss/web/18.jpg", w: 2300, h: 1642 },
        { src: "assets/in-case-of-loss/web/19.jpg", w: 2300, h: 1642 },
        { src: "assets/in-case-of-loss/web/20.jpg", w: 2300, h: 1639 },
      ],
    },
  },
  {
    // From the Figma frame "mkwrl"
    title: "MillerKnoll WRL Rebrand",
    eyebrow: "Branding & Identity",
    media: { type: "video", src: "assets/miller-knoll-identity/mkwrl_thumbnail.mp4" },
    caseStudy: {
      meta: [
        { label: "Timeline", value: "April 2024" },
        { label: "Scope", value: "Graphic Design // Brand Identity" },
      ],
      statement: {
        label: "Project",
        paragraphs: [
          "MillerKnoll is a design-inspired workplace furniture brand inspired by how people interact with their environments, and in turn how those environments impact what they do. Its Workplace Research Library explores the connection between workspace design and human behavior, health and performance, and ergonomics and sustainability.",
          "In creating a new brand identity for MillerKnoll\u2019s Workplace Research Library, my system is inspired by the manila folders we use daily because of their content-agnostic, timeless, and versatile nature. These become an expandable motif for the identity while encapsulating the themes of modernity, functionality, and flexibility that remain consistent with the current MillerKnoll brand.",
          "Herman Miller is one brand within the MillerKnoll collective. While the brand today is very modern, I wanted to anchor some of the rebrand choices on the retro style of Herman Miller\u2019s old product catalogs from the 1960s. Even sales packets, such as the one designed by Barbara Loveland in 1979, used repeating forms (in this case the Herman Miller logo) as a design motif. And not to mention, furniture is modular (e.g. a sofa group), hence why I chose to use another staple in not the home, but the office\u2014the manila folder\u2014as a modular design component to extend the modularity of Herman Miller products beyond just furniture to the Workplace Research Library.",
        ],
      },
      // Small reference images beside the text (Figma "Frame 35")
      collage: {
        stack: [
          { src: "assets/miller-knoll-identity/web/miho.jpg", w: 600, h: 350 },
          { src: "assets/miller-knoll-identity/web/catalog.jpg", w: 600, h: 350 },
        ],
        tall: { src: "assets/miller-knoll-identity/web/loveland.jpg", w: 600, h: 757 },
      },
      // "load images here in order": 01.jpeg … 14.jpeg, as web-sized copies (originals in the folder above)
      assets: Array.from({ length: 14 }, (_, i) => ({
        src: `assets/miller-knoll-identity/web/${String(i + 1).padStart(2, "0")}.jpg`, w: 2300, h: 1293,
      })),
    },
  },
  {
    // From the Figma frame "samsung"
    title: "Samsung Foundry Visual Identity",
    eyebrow: "Visual Design",
    media: { type: "video", src: "assets/samsung/samsung_thumbnail.mp4", cls: "media--samsung" },
    caseStudy: {
      meta: [
        { label: "Timeline", value: "April 2024" },
        { label: "Scope", value: "Brand Identity" },
        { label: "Role", value: "Visual Designer" },
        { label: "Team", value: "Edge &amp; Endpoint Segment Marketing" },
      ],
      variant: "samsung",
      bodyClass: "sx",
      body: samsungBodyHTML(), // its own layout, below
    },
  },
  {
    // From the Figma frame "formel". No write-up: it opens like the others, and a click links out.
    title: "Formel Skin",
    eyebrow: "Brand &amp; Marketing",
    media: { type: "video", src: "assets/formel/formel_thumbnail.mp4" },
    link: "https://www.formelskin.de/slow-aging-uebersicht",
    caseStudy: {
      meta: [
        { label: "Timeline", value: "October 2024" },
        { label: "Scope", value: "Product Design // Marketing" },
      ],
    },
  },
];

const root = document.documentElement;
const header = document.querySelector(".site-header");
const statement = document.querySelector(".statement");
// the About page has no project list: a detached stand-in keeps the project code below harmless
const projectsEl = document.querySelector(".projects") || document.createElement("div");
const isAbout = document.body.classList.contains("page-about");

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
// the chevron of the header's "Scroll to view" button
const CHEVRON = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1 11L8 5L15 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function caseStudyHTML(p) {
  const cs = p.caseStudy;
  const asset = ({ src, w, h, player }) => {
    const url = encodeURI(src);
    if (!src.endsWith(".mp4")) {
      return `<img class="case__asset" src="${url}" width="${w}" height="${h}" alt="" loading="lazy" decoding="async">`;
    }
    if (player) {
      // only the first frame loads (#t=0.1) until the viewer presses Play
      return `
        <div class="case__player">
          <div class="case__player-bar">
            <button class="case__cue" type="button" data-player="mute">Mute</button>
          </div>
          <video class="case__asset case__player-video" src="${url}#t=0.1" width="${w}" height="${h}" playsinline disablepictureinpicture disableremoteplayback preload="metadata" tabindex="-1"></video>
        </div>`;
    }
    return `<video class="case__asset" data-src="${url}" width="${w}" height="${h}" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback preload="none" tabindex="-1" aria-hidden="true"></video>`;
  };

  // Archive: { grid: [...], cols } puts several files side by side; { grid, template, height } is a row
  // of that height (Figma px) with those columns, the files cropped to fill; { space } is an empty gap
  const assetOrGrid = (a) =>
    a.space ? `<div class="case__space" style="--space: ${a.space}"></div>`
    : a.template ? `<div class="case__grid case__grid--row" style="grid-template-columns: ${a.template}; --row: ${a.height}">${a.grid.map(asset).join("")}</div>`
    : a.grid ? `<div class="case__grid" style="--cols: ${a.cols}">${a.grid.map(asset).join("")}</div>`
    : asset(a);

  // Archive: text under the title, an optional label over columns (widths and gaps in Figma px)
  const notesHTML = (n) => `
      <div class="case__notes" style="--gap: ${n.gap || 0}; --after: ${n.after ?? 40}">
        ${n.label ? `<p class="case__label">${n.label}</p>` : ""}
        <div class="case__notes-cols">
          ${n.cols.map((c) => `
          <div class="case__note" style="--w: ${c.width}${c.before != null ? `; --before: ${c.before}` : ""}">
            ${c.label ? `<p class="case__label">${c.label}</p>` : ""}
            <p class="case__body">${c.html}</p>
          </div>`).join("")}
        </div>
      </div>`;

  const collageImg = ({ src, w, h }) =>
    `<img class="case__collage-img" src="${encodeURI(src)}" width="${w}" height="${h}" alt="" loading="lazy" decoding="async">`;

  const variant = cs.collage ? " case--collage" : cs.body ? ` case--body${cs.variant ? ` case--${cs.variant}` : ""}` : "";

  return `
    <div class="card__info case${variant}">
      <div class="case__overview">
        <div class="case__heading">
          <p class="case__label">${p.eyebrow}</p>
          ${p.scrollCue ? `
          <div class="case__title-row">
            <h2 class="case__title">${p.title}</h2>
            <button class="case__cue case__scroll" type="button">${CHEVRON}Scroll to view</button>
          </div>` : `<h2 class="case__title">${p.title}</h2>`}
        </div>
        ${cs.meta.map((m) => `<div class="case__meta"><p class="case__label">${m.label}</p><p class="case__value">${m.value}</p></div>`).join("")}
        ${p.tagline ? `<p class="case__tagline">${p.tagline}</p>` : ""}
      </div>
      ${cs.notes ? notesHTML(cs.notes) : ""}
      ${cs.body ? `<div class="${cs.bodyClass || "dx"}">${cs.body}</div>` : !cs.statement ? "" : `
      <div class="case__text">
        <div class="case__statement">
          <p class="case__label">${cs.statement.label}</p>
          ${cs.statement.paragraphs.map((t) => `<p class="case__body">${t}</p>`).join("")}
        </div>
        ${cs.context ? `
        <div class="case__context">
          <p class="case__label">${cs.context.label}</p>
          ${cs.context.paragraphs.map((t) => `<p class="case__body">${t}</p>`).join("")}
        </div>` : ""}
        ${cs.collage ? `
        <div class="case__collage">
          <div class="case__collage-stack">${cs.collage.stack.map(collageImg).join("")}</div>
          ${collageImg(cs.collage.tall)}
        </div>` : ""}
      </div>`}
    </div>
    ${cs.assets ? `<div class="case__assets${cs.assetsInset ? " case__assets--inset" : ""}">${cs.assets.map(assetOrGrid).join("")}</div>` : ""}`;
}

// Project 4's write-up (Figma frame "samsung"). The image blocks are 2x exports of the Figma groups.
function samsungBodyHTML() {
  const SX = "assets/samsung/web/";
  const img = (file, w, h, cls = "") =>
    `<img class="sx-img${cls}" src="${SX + file}" width="${w}" height="${h}" alt="" loading="lazy" decoding="async">`;
  const label = (t) => `<p class="case__label">${t}</p>`;
  const section = (title, image, extra = "") =>
    `<section class="sx-section"><div class="sx-head">${label(title)}${extra}</div>${image}</section>`;
  const sun = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.05V1M8 15v-.02M1.05 8H1M15 8h-.02M3.08 12.92l-.03.03M12.95 3.05l-.01.01M12.92 12.92l.03.03M3.05 3.05l.01.01M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="none" stroke="currentColor" stroke-linecap="round"/></svg>`;

  const moon = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M15 10.69a7.32 7.32 0 0 1-9.69-9.69A7.32 7.32 0 0 0 8.32 15 7.33 7.33 0 0 0 15 10.69Z" fill="none" stroke="currentColor" stroke-linejoin="round"/></svg>`;
  // Six crops of target-applications.png, placed as in Figma (box 1090 × 238).
  // [left, top, width, height] in px of the box, then the crop as background size / position in %.
  const targets = [
    [24, 54, 170, 165, "329.5% 235.8%", "2.66% 94.41%"],
    [196, 0, 175, 218, "319.8% 178.6%", "49.6% 0%"],
    [373, 1, 175, 218, "319% 178.6%", "97.92% 0%"],
    [550, 54, 170, 165, "328.3% 235.8%", "50.63% 94.41%"],
    [723, 1, 171, 218, "326.2% 178.6%", "2.78% 0%"],
    [896, 54, 170, 165, "328.7% 235.8%", "97.38% 94.41%"],
  ].map(([x, y, w, h, size, pos]) =>
    `<span style="left:${(x / 10.9).toFixed(3)}%;top:${(y / 2.38).toFixed(3)}%;width:${(w / 10.9).toFixed(3)}%;height:${(h / 2.38).toFixed(3)}%;background-size:${size};background-position:${pos}"></span>`
  ).join("");

  // Dark by default; the tag swaps in the Figma frame "light-mode" and back
  const platforms = `
        <section class="sx-section sx-platforms">
          <div class="sx-head">
            ${label("Performance + Tech Platforms")}
            <span class="sx-badge sx-when-dark" role="button" tabindex="0">${sun}Light Mode</span>
            <span class="sx-badge sx-badge--filled sx-when-light" role="button" tabindex="0">${moon}Dark Mode</span>
          </div>
          ${img("platforms.png", 2180, 764, " sx-when-dark")}
          ${img("platforms-light.png", 2180, 764, " sx-when-light")}
        </section>`;

  return `
    <div class="sx-intro">
      <section class="sx-text">
        ${label("Background")}
        <p>Samsung’s America’s Foundry Business became its own business unit just a few years ago in 2017, so it did not yet have a robust business infrastructure. In the B2B marketing department specifically, I noticed that in order to reduce unnecessary time spent preparing for client meetings and increase operational efficiency in the long-term, there needed to be a more organized workflow.</p>
        <p>As the only designer on the team, I was tasked with visually communicating complex electrical engineering concepts (technical process node technologies and advanced packaging diagrams) and creating from scratch Foundry’s visual identity through re-designing standardized PowerPoint templates for Foundry’s 10k+ employees in both the US and Korea to use.</p>
        <p>I also proposed a new system of gathering, consolidating, and designing slide deck material to senior management in order to streamline the process segment marketers have to take to effectively target customers and deliver pitches to potential clients. From analyzing current business processes and competitive positioning, I took charge of brand management and outlined steps to increase brand equity and professionalism. During this process, I spoke with people from all disciplines — clients, business partners, salespeople, segment marketers, electrical engineers, and even dispatchers from the Korea office — when actively learning technical electrical engineering concepts and industry knowledge to be able to better communicate with clients and my team.</p>
        <p>Post-internship, I continued working with the team as a contractor, previewing segment, packaging technologies, and inbound/outbound marketing slide decks before client meetings and trade shows and aligning pitch decks with client preferences in branding, voice, and visual appearance.</p>
      </section>
      <video class="sx-video" data-src="${encodeURI("assets/samsung/smart_city_anim.mp4")}" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback preload="none" tabindex="-1" aria-hidden="true"></video>
    </div>

    <div class="sx-band">
      ${img("cover-band.png", 2300, 1168, " sx-cover")}
      <div class="sx-sections">
        ${platforms}
        ${section("RF Landscape", img("rf-landscape.png", 2180, 814))}
        ${section("Packaging Diagrams", img("packaging.png", 2172, 972, " sx-img--packaging"))}
        ${section("Edge &amp; Endpoint Target Applications", `<div class="sx-frame sx-targets">${targets}</div>`)}
        ${section("Isometric Components", `<div class="sx-frame sx-frame--isometric">${img("isometric-clear.png", 1470, 1507)}</div>`)}
        ${section("Automotive Icons &amp; Components", `<div class="sx-frame sx-frame--automotive">${img("automotive-clear.png", 2180, 1052)}</div>`)}
        ${section("All Icons &amp; Components", img("icons.png", 2180, 1080))}
      </div>
    </div>`;
}

// Project 1's write-up is password protected. Until it's unlocked, its case study is this box.
function dxLockHTML() {
  return `
    <section class="dx-lock">
      <p class="case__label">Password Protected</p>
      <p>Enter the password to view this project.</p>
      <div class="dx-lock__row">
        <span class="dx-lock__field">
          <input class="dx-lock__input" type="password" placeholder="Password" aria-label="Password" autocomplete="current-password">
          <button class="dx-lock__eye" type="button" aria-label="Show password" aria-pressed="false">
            <svg class="dx-lock__eye-open" viewBox="0 0 16 16" aria-hidden="true"><path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z"/><circle cx="8" cy="8" r="2.25"/></svg>
            <svg class="dx-lock__eye-closed" viewBox="0 0 16 16" aria-hidden="true"><path d="M1 8s2.5 5 7 5 7-5 7-5M3.2 10.6 1.8 12.2M8 13v2M12.8 10.6l1.4 1.6"/></svg>
          </button>
        </span>
        <button class="dx-lock__button" type="button">View</button>
      </div>
      <p class="dx-lock__error" hidden>That password isn’t right. Try again.</p>
    </section>`;
}

function mediaHTML(media) {
  if (!media) return `<span class="placeholder-label">image / video</span>`;
  if (media.type === "pair") {
    return `<div class="media-pair">${media.srcs.map((src) => `<img src="${encodeURI(src)}" alt="" loading="lazy">`).join("")}</div>`;
  }
  if (media.type === "video") {
    return `<video${media.cls ? ` class="${media.cls}"` : ""} src="${encodeURI(media.src)}"${media.sound ? " data-sound" : " autoplay muted"} loop playsinline disablepictureinpicture disableremoteplayback preload="auto" tabindex="-1" aria-hidden="true"></video>`;
  }
  // Archive covers placed like their Figma crop (only in the open card; narrow strips fill as usual)
  if (media.crop) {
    const { l, t, w, h, r = "0deg" } = media.crop;
    return `<img class="media--crop" src="${encodeURI(media.src)}" style="--l: ${l}; --t: ${t}; --w: ${w}; --h: ${h}; --r: ${r}" alt="" loading="lazy">`;
  }
  return `<img src="${encodeURI(media.src)}"${media.pos ? ` style="object-position: ${media.pos}"` : ""} alt="" loading="lazy">`;
}

// archive.html shows the Archive projects (archive.js) with the same cards
const isArchive = document.body.classList.contains("page-archive");

projectsEl.innerHTML = (isArchive ? ARCHIVE : isAbout ? [] : PROJECTS).map((p, i) => p.caseStudy ? `
  <a class="card card--case${p.link ? " card--link" : ""}" href="${p.link || `#project-${i + 1}`}"${p.media?.openHeight ? ` style="--open-media: ${p.media.openHeight}"` : ""}${p.link ? ` target="_blank" rel="noopener"` : ""}>
    <div class="card__media"${p.media?.bg ? ` style="background: ${p.media.bg}"` : ""}>${mediaHTML(p.media)}</div>
    ${caseStudyHTML(p)}
  </a>
` : `
  <a class="card" href="#project-${i + 1}">
    <div class="card__media"${p.media?.bg ? ` style="background: ${p.media.bg}"` : ""}>${mediaHTML(p.media)}</div>
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
  // a video the viewer started stops when its project closes, and a thumbnail's sound goes off
  document.querySelectorAll(".card:not(.is-open) .case__player-video").forEach((v) => v.pause());
  syncSound();
  projectsEl.classList.toggle("is-even", !card); // nothing open: all five share the width
}

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => open(card));
  card.addEventListener("focus", () => open(card));
});

// On the home page (header not fully collapsed), nothing is open by default:
// the five projects share the width equally again when the cursor leaves them.
// Once scrolled down, one project is always open (the first, unless another
// was hovered), and the last hovered project stays open.
let collapsed = false;
let progress = 0; // header collapse, 0 → 1

// Archive (Figma frame "Archive"): one project is always open, the first to start with,
// then the last one hovered.
function resetToEven() {
  if (!collapsed && !isArchive && !projectsEl.matches(":hover")) open(null);
}

projectsEl.addEventListener("mouseleave", resetToEven);
open(isArchive ? cards[0] : null);
// the first Archive project starts open, without animating from equal widths
setTimeout(() => document.body.classList.remove("is-loading"), 100);

// ---------- typed headline (all pages) ----------
// Work, Archive and About share one headline, split into pieces (data-seg). Each page state shows
// some of them. Going from one state to another, a cursor backspaces the pieces that go (last
// first, one character at a time; the bunny and line breaks count as one) and then types the new
// ones in order.
//   Work      Enya Pan is a designer and research [bunny] enthusiast who loves to play.
//   Archive   Enya Pan is a research [bunny] enthusiast who loves to play.
//   scrolled  Enya loves to play.   (Archive)      Enya Pan   (Work, the rest fades out)
//   About     Enya Pan is, then on a loop: … a designer. → a tinkerer. → a [visual, data] storyteller. → (back to "is")

const SEGS = ["enya", "pan", "is", "a", "designer", "designer-dot", "tinkerer", "tinkerer-dot", "storyteller", "storyteller-dot",
  "and", "research", "enthusiast", "who", "loves"];
const ABOUT_ONLY = ["designer-dot", "tinkerer", "tinkerer-dot", "storyteller", "storyteller-dot"];
const HEADLINES = {
  work: SEGS.filter((s) => !ABOUT_ONLY.includes(s)),
  "work-collapsed": ["enya", "pan"],
  archive: SEGS.filter((s) => !ABOUT_ONLY.includes(s) && s !== "designer" && s !== "and"),
  "archive-collapsed": ["enya", "loves"],
  about: ["enya", "pan", "is"],
  "about-designer": ["enya", "pan", "is", "a", "designer", "designer-dot"],
  "about-tinkerer": ["enya", "pan", "is", "a", "tinkerer", "tinkerer-dot"],
  "about-storyteller": ["enya", "pan", "is", "a", "storyteller", "storyteller-dot"],
};

const headline = (() => {
  const segs = SEGS.map((name) => {
    const el = statement.querySelector(`[data-seg="${name}"]`);
    const units = [];
    const walk = (node) => {
      for (const child of node.childNodes) {
        if (child.nodeType === Node.TEXT_NODE) [...child.textContent].forEach((ch) => units.push({ node: child, ch }));
        else if (child.classList.contains("bunny-slot") || child.tagName === "BR") units.push({ el: child });
        else walk(child);
      }
    };
    walk(el);
    return { name, el, units, shown: units.length };
  });
  const caret = document.createElement("span");
  caret.className = "type-caret";
  let timer = null;
  let finish = null; // what to do when the current run ends (or is replaced by another)

  const render = (seg) => {
    const text = new Map();
    seg.units.forEach((u, i) => {
      if (u.el) u.el.style.display = i < seg.shown ? "" : "none";
      else text.set(u.node, (text.get(u.node) || "") + (i < seg.shown ? u.ch : ""));
    });
    text.forEach((t, node) => { node.textContent = t; });
  };

  const stop = () => {
    clearTimeout(timer);
    caret.remove();
    const done = finish;
    finish = null;
    done?.();
  };

  return {
    // show a state at once
    set(state) {
      stop();
      const keep = HEADLINES[state];
      segs.forEach((seg) => { seg.shown = keep.includes(seg.name) ? seg.units.length : 0; render(seg); });
      statement.classList.add("is-ready"); // the About-only words are hidden in the HTML until now
    },
    // backspace / type from what's showing now to a state
    // speed: 1.5 types / backspaces one and a half times as fast
    animate(state, { delay = 250, speed = 1, onStep = () => {}, onDone = () => {} } = {}) {
      stop();
      finish = onDone;
      const keep = HEADLINES[state];
      const step = () => {
        // first backspace the last piece that has to go, then type the first piece that has to come
        const going = segs.filter((seg) => !keep.includes(seg.name) && seg.shown > 0).pop();
        const coming = !going && segs.find((seg) => keep.includes(seg.name) && seg.shown < seg.units.length);
        const seg = going || coming;
        if (!seg) { timer = setTimeout(stop, 500); return; }
        seg.shown += going ? -1 : 1;
        render(seg);
        seg.el.appendChild(caret);
        onStep();
        timer = setTimeout(step, (going ? 32 + Math.random() * 24 : 45 + Math.random() * 35) / speed);
      };
      timer = setTimeout(step, delay);
    },
  };
})();

// About: after "Enya Pan is", the headline cycles through what's in the list below it
const ABOUT_LOOP = ["about-designer", "about-tinkerer", "about-storyteller", "about"];
let aboutState = "about";
function aboutLoop(i = 0) {
  const state = ABOUT_LOOP[i % ABOUT_LOOP.length];
  headline.animate(state, {
    delay: 0,
    onStep: () => measure(),
    onDone: () => {
      aboutState = state;
      setTimeout(() => aboutLoop(i + 1), state === "about" ? 300 : 1600); // each one stays up a moment
    },
  });
}

const pageHeadline = () =>
  isAbout ? aboutState : isArchive ? (collapsed ? "archive-collapsed" : "archive") : progress >= 0.5 ? "work-collapsed" : "work";

// Leaving through the header links: remember how the headline looks, so the next page can start
// from it (same words, same size) — the page change then morphs it in place before the typing.
document.querySelectorAll(".nav a").forEach((link) => link.addEventListener("click", () => {
  if (link.getAttribute("aria-current") === "page") return;
  const box = statement.getBoundingClientRect();
  const from = { state: pageHeadline(), width: box.width, font: parseFloat(getComputedStyle(statement).fontSize) };
  try { sessionStorage.setItem("headline-from", JSON.stringify(from)); } catch {}
}));

// Arriving: start from the last page's headline and type this page's.
// Until the typing is done the headline keeps the last page's shape: its width scaled to this
// page's text size, and (Work) without its line breaks.
let arrivingFrom = null;
try { arrivingFrom = JSON.parse(sessionStorage.getItem("headline-from")); sessionStorage.removeItem("headline-from"); } catch {}
if (arrivingFrom && HEADLINES[arrivingFrom.state] && arrivingFrom.state !== pageHeadline()) {
  headline.set(arrivingFrom.state);
  // Work: its own width and line breaks from the start, so the typing wraps after "and" and "enthusiast"
  // like the finished headline. Archive / About: never wider than their own headline.
  const isWork = !isArchive && !isAbout;
  if (window.innerWidth > 760 && !isWork) {
    const font = parseFloat(getComputedStyle(statement).fontSize);
    const own = statement.getBoundingClientRect().width;
    statement.style.width = `${Math.min((arrivingFrom.width * font) / arrivingFrom.font, own)}px`;
  }
  if (!isWork) statement.classList.add("is-retyping");
  const settle = () => {
    statement.style.width = "";
    statement.classList.remove("is-retyping");
    measure();
    if (isAbout) aboutLoop();
  };
  // About → Work types the most, so it goes 1.5× as fast
  const speed = arrivingFrom.state.startsWith("about") && pageHeadline() === "work" ? 1.5 : 1;
  setTimeout(() => headline.animate(pageHeadline(), { delay: 0, speed, onStep: () => measure(), onDone: settle }), 800);
} else {
  headline.set(pageHeadline());
  if (isAbout) setTimeout(aboutLoop, 800);
}

// ---------- header collapse on scroll ----------
// Figma: header line at 523 / 1024 → 68 (compact "Enya Pan" bar).
// Statement top 283 → 17, font size 64 → 30 (font size is handled in CSS).

let layout = { full: 523, compact: 68, topStart: 283, topEnd: 17 };

function measure() {
  const u = window.innerWidth / 1440;

  // About (Figma frame "About"): the same small header as Archive, no collapse. The line sits
  // 13.69px under the headline (a quarter of Figma's 54.75), and moves down while it's retyped.
  if (isAbout) {
    const h = 148 * u + statement.getBoundingClientRect().height + 13.69 * u;
    root.style.setProperty("--header-h", `${h}px`);
    root.style.setProperty("--statement-top", `${148 * u}px`);
    return;
  }

  // Archive (Figma frame "Archive"): a smaller header (headline from y 148, line 11.25px under it,
  // half of Figma's 22.5, so at 223.75) that collapses to the same 68px bar as Work.
  if (isArchive) {
    layout = { full: 223.75 * u, compact: 68 * u, topStart: 148 * u, topEnd: 17 * u };
    root.style.setProperty("--collapse-distance", `${layout.full - layout.compact}px`);
    update();
    return;
  }

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
  if (isAbout) return; // fixed header
  // whole pixels: the page only scrolls in whole pixels, so a fractional distance (e.g. 55.1px)
  // would never be reached and the header would never finish collapsing
  const distance = Math.floor(layout.full - layout.compact);
  const p = Math.min(1, Math.max(0, window.scrollY / distance));
  const lerp = (a, b) => a + (b - a) * p;

  root.style.setProperty("--p", p.toFixed(4));
  progress = p;
  const statementTop = lerp(layout.topStart, layout.topEnd);
  let headerH = lerp(layout.full, layout.compact);
  // Archive: never shorter than the headline, so its second line isn't cut off while it backspaces
  if (isArchive) headerH = Math.max(headerH, statementTop + statement.getBoundingClientRect().height + 11.25 * (window.innerWidth / 1440));
  root.style.setProperty("--header-h", `${headerH}px`);
  root.style.setProperty("--statement-top", `${statementTop}px`);

  // Scrolling back up to the home page also restores the default
  const wasCollapsed = collapsed;
  collapsed = p >= 1;
  // cards scroll on their own only on the scrolled-down page
  document.body.classList.toggle("is-collapsed", collapsed);
  if (collapsed && !cards.some((c) => c.classList.contains("is-open"))) open(cards[0]);
  if (wasCollapsed && !collapsed) {
    cards.forEach((c) => { c.scrollTop = 0; });
    resetToEven();
  }
  // Archive: "Enya Pan is a research … who loves to play." backspaces to "Enya loves to play."
  if (isArchive && collapsed !== wasCollapsed) headline.animate(pageHeadline(), { onStep: () => update() });
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
// Samsung's Light Mode / Dark Mode tag. Runs before the card's own link and hover handling.
const toggleSamsungMode = (e) => {
  const badge = e.target.closest(".sx-badge");
  if (!badge) return;
  if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
  e.preventDefault();
  e.stopPropagation();
  badge.closest(".sx-platforms").classList.toggle("is-light");
};
projectsEl.addEventListener("click", toggleSamsungMode, true);

// A link inside a project's text (Archive: cotton.design). The card is itself a link, so these are
// spans with data-href that open in a new tab.
const openTextLink = (e) => {
  const link = e.target.closest(".case__link[data-href]");
  if (!link || (e.type === "keydown" && e.key !== "Enter")) return;
  e.preventDefault();
  e.stopPropagation();
  window.open(link.dataset.href, "_blank", "noopener");
};
projectsEl.addEventListener("click", openTextLink, true);
projectsEl.addEventListener("keydown", openTextLink, true);

// "Scroll to view" under a thumbnail, and a video player (Archive): a click on the film plays / pauses it, Mute mutes it.
// The card is a link, so these clicks are handled here and go no further.
projectsEl.addEventListener("click", (e) => {
  const cue = e.target.closest(".case__scroll");
  const player = e.target.closest(".case__player");
  if (!cue && !player) return;
  e.preventDefault();
  e.stopPropagation();

  if (cue) {
    const card = cue.closest(".card");
    const target = card.querySelector(".case__assets");
    card.scrollTo({ top: target.offsetTop - card.offsetTop, behavior: "smooth" });
    return;
  }

  const video = player.querySelector("video");
  const action = e.target.closest("[data-player]")?.dataset.player || "play"; // clicking the picture plays / pauses
  if (action === "play") video.paused ? video.play() : video.pause();
  else video.muted = !video.muted;
}, true);

document.querySelectorAll(".case__player-video").forEach((video) => {
  const bar = video.parentElement.querySelector(".case__player-bar");
  const sync = () => {
    bar.querySelector('[data-player="mute"]').textContent = video.muted ? "Unmute" : "Mute";
  };
  ["play", "pause", "volumechange", "ended"].forEach((type) => video.addEventListener(type, sync));
});
projectsEl.addEventListener("keydown", toggleSamsungMode, true);

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
  const show = hoveredEl && labelIsAvailable(hoveredEl) && !textCursor.textContent; // the big cursor text wins
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

bunnyVideo?.addEventListener("timeupdate", renderHoverLabel); // no bunny on About

// ---------- big cursor text ----------
// Over a project's cover the cursor becomes "Scroll to view" (Figma frame "cursor-hover"), anywhere
// over a project that links out (Formel) "Click to view", and over
// the Archive film "Play" / "Pause" (a click plays or pauses it). Elsewhere it's the usual cursor.

const textCursor = document.createElement("div");
textCursor.className = "text-cursor";
textCursor.setAttribute("aria-hidden", "true");
document.body.appendChild(textCursor);
const finePointer = matchMedia("(hover: hover) and (pointer: fine)");

function cursorTextFor(el) {
  // videos don't take the pointer (style.css), so it's the film's box under the pointer that counts
  const film = el?.closest?.(".case__player")?.querySelector("video");
  const box = film?.getBoundingClientRect();
  if (box && cursor.y >= box.top && cursor.y <= box.bottom) return film.paused ? "Play" : "Pause";
  if (el?.closest?.(".projects .card--link")) return "Click\nto view"; // Formel links out: the whole card (Figma "click-hover")
  // top of the page: the whole project, title and all; once scrolled: only its cover
  if (el?.closest?.(collapsed ? ".projects .card__media" : ".projects .card")) return "Scroll\nto view";
  return "";
}

function renderTextCursor() {
  const el = cursor.inside && finePointer.matches ? document.elementFromPoint(cursor.x, cursor.y) : null;
  const text = cursorTextFor(el);
  if (textCursor.textContent !== text) textCursor.textContent = text;
  textCursor.dataset.kind = text.split("\n")[0].toLowerCase(); // colour per word (style.css)
  document.body.classList.toggle("has-text-cursor", Boolean(text));
  if (!text) return;
  // centred on the pointer, kept inside the window
  const w = textCursor.offsetWidth;
  const h = textCursor.offsetHeight;
  const x = Math.min(Math.max(cursor.x, w / 2), innerWidth - w / 2);
  const y = Math.min(Math.max(cursor.y, h / 2), innerHeight - h / 2);
  textCursor.style.transform = `translate(${x - w / 2}px, ${y - h / 2}px)`;
}

document.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
  cursor.inside = true;
  renderTextCursor();
  renderHoverLabel();
});
document.documentElement.addEventListener("mouseleave", () => {
  cursor.inside = false;
  renderTextCursor();
});
window.addEventListener("scroll", renderTextCursor, { passive: true });
document.querySelectorAll(".card").forEach((card) => card.addEventListener("scroll", renderTextCursor, { passive: true }));
document.querySelectorAll(".case__player-video").forEach((video) => {
  ["play", "pause", "ended"].forEach((type) => video.addEventListener(type, renderTextCursor));
});
window.addEventListener("scroll", renderHoverLabel, { passive: true });

// ---------- blurred preview while a video loads ----------
// Every video has a tiny (~2 KB) frame of itself at <folder>/web/<name>-poster.jpg. It shows,
// blurred, in the video's place until the first real frame arrives (instead of a gray box).
// Not for the headline bunny (small, loads at once) or project 1's encrypted videos.

const posterFor = (src) => {
  const path = decodeURI(src).split("#")[0];
  const slash = path.lastIndexOf("/");
  return encodeURI(`${path.slice(0, slash)}/web/${path.slice(slash + 1).replace(/\.\w+$/, "")}-poster.jpg`);
};

document.querySelectorAll("video").forEach((video) => {
  const src = video.getAttribute("src") || video.dataset.src;
  if (!src || video.closest(".bunny") || video.dataset.enc) return;
  video.poster = posterFor(src);
  if (video.readyState >= 2) return;
  video.classList.add("is-preview");
  video.addEventListener("loadeddata", () => video.classList.remove("is-preview"), { once: true });
});

// Images the same way: each has a tiny copy at <folder>/web/<name>-blur.jpg (.png for PNGs, to keep
// transparency), shown blurred behind it until the image itself has loaded.
const blurFor = (src) => {
  const path = decodeURI(src);
  const slash = path.lastIndexOf("/");
  const name = path.slice(slash + 1);
  return encodeURI(`${path.slice(0, slash).replace(/\/web$/, "")}/web/${name.replace(/\.\w+$/, "")}-blur.${/\.png$/i.test(name) ? "png" : "jpg"}`);
};

document.querySelectorAll("img").forEach((img) => {
  const src = img.getAttribute("src");
  if (!src?.startsWith("assets/") || (img.complete && img.naturalWidth)) return;
  img.style.backgroundImage = `url("${blurFor(src)}")`;
  img.style.backgroundPosition = img.style.objectPosition;
  img.classList.add("is-preview");
  const done = () => {
    img.classList.remove("is-preview");
    img.style.backgroundImage = "";
  };
  img.addEventListener("load", done, { once: true });
  img.addEventListener("error", done, { once: true });
});

// ---------- thumbnails with sound (Archive: Everything I Once Knew) ----------
// The sound is on only while its project is open. Browsers only let a video play with sound by
// itself once the visitor has clicked or pressed a key on the page; until then it plays silently
// (data-blocked), and the sound comes on with that first click or key.

function syncSound() {
  document.querySelectorAll("video[data-sound]").forEach((video) => {
    const isOpen = video.closest(".card").classList.contains("is-open");
    video.muted = !isOpen || "blocked" in video.dataset;
  });
}

document.querySelectorAll("video[data-sound]").forEach((video) => {
  syncSound();
  video.play().catch(() => {
    video.dataset.blocked = "";
    syncSound();
    video.play().catch(() => {});
    const allow = () => {
      delete video.dataset.blocked;
      syncSound();
      video.play().catch(() => {});
      ["pointerdown", "keydown"].forEach((type) => window.removeEventListener(type, allow, true));
    };
    ["pointerdown", "keydown"].forEach((type) => window.addEventListener(type, allow, true));
  });
});

// ---------- project videos: load and play only while on screen ----------
// The in-case-of-loss videos are large (23–102 MB), so nothing downloads until a
// video is about to scroll into view, and each pauses again once it leaves.

const caseVideos = document.querySelectorAll("video.case__asset:not(.case__player-video), video.dx-phone, video.sx-video");

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target: video, isIntersecting }) => {
    if (isIntersecting) {
      if (video.dataset.enc) { loadLockedVideo(video); return; }
      if (!video.src) video.src = video.dataset.src;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}, { rootMargin: "300px 0px" });

caseVideos.forEach((v) => videoObserver.observe(v));

// ---------- project 1: password protected ----------
// dx-locked.js holds the write-up encrypted with AES-256-CBC (key from the password with
// PBKDF2-SHA256), and its videos are encrypted .bin files. Made by private/lock.py.
// Once unlocked, the key is kept for this browser tab so a reload stays unlocked.

const DX_KEY_STORE = "dx-key";
let dxKey = null;

const b64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

async function dxDecrypt(key, bytes) {
  return crypto.subtle.decrypt({ name: "AES-CBC", iv: bytes.slice(0, 16) }, key, bytes.slice(16));
}

async function dxKeyFromPassword(password) {
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", hash: "SHA-256", salt: b64(DX_LOCKED.salt), iterations: DX_LOCKED.iterations },
    base, { name: "AES-CBC", length: 256 }, true, ["decrypt"]
  );
}

// Returns true if the key opens the write-up (and shows it)
async function dxUnlockWith(key) {
  let text;
  try {
    text = new TextDecoder().decode(await dxDecrypt(key, b64(DX_LOCKED.body)));
  } catch {
    return false; // wrong key: bad padding
  }
  if (!text.startsWith("DX1:")) return false;

  dxKey = key;
  const lock = projectsEl.querySelector(".dx-lock");
  const dx = lock.parentElement;
  dx.innerHTML = text.slice(4);
  dx.querySelectorAll("video.dx-phone").forEach((v) => videoObserver.observe(v));
  try {
    const raw = await crypto.subtle.exportKey("raw", key);
    sessionStorage.setItem(DX_KEY_STORE, `${DX_LOCKED.salt}:${btoa(String.fromCharCode(...new Uint8Array(raw)))}`);
  } catch {}
  return true;
}

async function loadLockedVideo(video) {
  if (video.dataset.loading) { if (video.src) video.play().catch(() => {}); return; }
  video.dataset.loading = "1";
  const res = await fetch(video.dataset.enc);
  const plain = await dxDecrypt(dxKey, new Uint8Array(await res.arrayBuffer()));
  video.src = URL.createObjectURL(new Blob([plain], { type: "video/mp4" }));
  video.play().catch(() => {});
}

async function submitDxPassword() {
  const lock = projectsEl.querySelector(".dx-lock");
  if (!lock) return;
  const input = lock.querySelector(".dx-lock__input");
  const button = lock.querySelector(".dx-lock__button");
  button.disabled = true;
  const ok = await dxUnlockWith(await dxKeyFromPassword(input.value));
  if (!ok) {
    button.disabled = false;
    lock.querySelector(".dx-lock__error").hidden = false;
    input.select();
  }
}

// The box sits inside the project's link, so keep clicks and keys in it from following the link
projectsEl.addEventListener("click", (e) => {
  if (!e.target.closest(".dx-lock")) return;
  e.preventDefault();
  if (e.target.closest(".dx-lock__button")) submitDxPassword();
  const eye = e.target.closest(".dx-lock__eye");
  if (eye) {
    // show / hide the password
    const input = eye.parentElement.querySelector(".dx-lock__input");
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    eye.setAttribute("aria-pressed", String(show));
    eye.setAttribute("aria-label", show ? "Hide password" : "Show password");
    input.focus();
  }
}, true);
projectsEl.addEventListener("keydown", (e) => {
  if (!e.target.closest(".dx-lock__input") || e.key !== "Enter") return;
  e.preventDefault();
  submitDxPassword();
}, true);

// Unlocked earlier in this tab?
(async () => {
  let saved = null;
  try { saved = sessionStorage.getItem(DX_KEY_STORE); } catch {}
  if (!saved || !saved.startsWith(`${DX_LOCKED.salt}:`)) return;
  try {
    const key = await crypto.subtle.importKey("raw", b64(saved.split(":")[1]), "AES-CBC", true, ["decrypt"]);
    await dxUnlockWith(key);
  } catch {}
})();
