// ---------- Messages: leave a message (Figma frame "Messages") ----------
// Messages live in Firebase (Firestore collection "notes"), read and written with Google's Firebase
// SDK. The config below is public by design; firebase/firestore.rules decides what visitors can do.
// The wall works like the projects: the newest message is open, hovering a strip opens that one,
// and moving off the wall goes back to the newest. "View as grid" shows them all as cards.

const FIREBASE = {
  apiKey: "AIzaSyBCELe2dcKy8o_tEJ8nlyKFUNPBjv4_A7I",
  authDomain: "enyapan-com.firebaseapp.com",
  projectId: "enyapan-com",
  appId: "1:1056775472835:web:35eed28348152bc13f4476",
};
const FIREBASE_SDK = "https://www.gstatic.com/firebasejs/10.12.2/";
// "city, state" on each message: an approximate place from the visitor's IP, looked up once when
// they post (nothing else is kept). If the lookup fails or is blocked, the message has no place.
const PLACE_LOOKUP = "https://ipapi.co/json/";

(() => {
  const form = document.querySelector(".note-form");
  const wall = document.querySelector(".wall");
  const list = document.querySelector(".wall__list");
  if (!form || !list) return;

  // Figma order: dark green, light green, pink, purple, blue, gray ("blue" is the old light blue, kept for older messages)
  const COLORS = ["lime", "green", "purple", "violet", "cobalt", "gray", "blue"];
  const COOLDOWN_MS = 30_000; // one message per 30 seconds per browser
  const store = {
    get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} },
  };

  // ---------- data ----------
  // the Firebase SDK loads only on this page
  let db = null;
  const firestore = async () => {
    const [{ initializeApp }, fs] = await Promise.all([
      import(`${FIREBASE_SDK}firebase-app.js`),
      import(`${FIREBASE_SDK}firebase-firestore.js`),
    ]);
    db ??= fs.getFirestore(initializeApp(FIREBASE));
    return { db, ...fs };
  };
  const fromDoc = (d) => {
    const data = d.data();
    return { id: d.id, ...data, created_at: (data.created_at?.toDate?.() ?? new Date()).toISOString() };
  };

  async function listMessages() {
    const { db, collection, query, orderBy, limit, getDocs } = await firestore();
    const snap = await getDocs(query(collection(db, "notes"), orderBy("created_at", "desc"), limit(200)));
    return snap.docs.map(fromDoc);
  }

  async function addMessage(message) {
    const { db, collection, addDoc, serverTimestamp } = await firestore();
    const ref = await addDoc(collection(db, "notes"), { ...message, created_at: serverTimestamp() });
    return { id: ref.id, ...message, created_at: new Date().toISOString() };
  }

  async function lookUpPlace() {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 2500);
      const res = await fetch(PLACE_LOOKUP, { signal: ctrl.signal });
      clearTimeout(timer);
      if (!res.ok) return null;
      const p = await res.json();
      if (!p.city) return null;
      // US: "Brooklyn, NY"; elsewhere: "Toronto, Canada"
      const second = p.country_code === "US" ? p.region_code : p.country_name;
      return [p.city, second].filter(Boolean).join(", ").slice(0, 60);
    } catch {
      return null;
    }
  }

  // ---------- wall ----------
  const when = (iso) => {
    const d = new Date(iso);
    const date = d.toLocaleDateString("en-US", { month: "numeric", day: "numeric", year: "2-digit" });
    const time = d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    return `${date}, ${time}`;
  };

  const text = (tag, cls, value) => {
    const el = document.createElement(tag);
    el.className = cls;
    el.textContent = value;
    return el;
  };

  function messageEl(m) {
    const li = document.createElement("li");
    li.className = `message message--${COLORS.includes(m.color) ? m.color : "gray"}`;
    li.tabIndex = 0;
    const inner = document.createElement("div");
    inner.className = "message__inner";
    const time = text("time", "message__time", when(m.created_at));
    time.dateTime = m.created_at;
    inner.append(text("p", "message__name", m.name || "Anonymous"), time, text("p", "message__body", m.body));
    if (m.location) inner.append(text("p", "message__place", m.location));
    li.append(inner);
    li.setAttribute("aria-label", `${m.name || "Anonymous"}: ${m.body}`);
    return li;
  }

  // the open card's width, so its contents are laid out once at that size and don't reflow
  const syncOpenWidth = () => {
    // what the open card settles at: everything else is a 29px strip, 4 apart
    const u = window.innerWidth / 1440;
    const w = list.clientWidth - (list.children.length - 1) * (29 + 4) * u;
    wall.style.setProperty("--open-w", `${Math.max(w, 600 * u)}px`);
  };

  const openMessage = (li) => {
    if (!li || li.classList.contains("is-open")) return;
    list.querySelector(".message.is-open")?.classList.remove("is-open");
    li.classList.add("is-open");
  };
  const openNewest = () => openMessage(list.querySelector(".message"));

  list.addEventListener("mouseover", (e) => {
    if (wall.classList.contains("is-grid")) return;
    openMessage(e.target.closest(".message"));
  });
  list.addEventListener("focusin", (e) => openMessage(e.target.closest(".message")));
  list.addEventListener("mouseleave", () => { if (!wall.classList.contains("is-grid")) openNewest(); });
  window.addEventListener("resize", syncOpenWidth);

  function render(messages) {
    if (!messages.length) {
      list.innerHTML = `<li class="wall__empty">No messages yet. Be the first!</li>`;
      return;
    }
    list.replaceChildren(...messages.map(messageEl));
    openNewest();
    syncOpenWidth();
  }

  listMessages().then(render).catch((err) => {
    console.error(err);
    list.innerHTML = `<li class="wall__empty">Couldn’t load the messages right now.</li>`;
  });

  // View as grid ⇄ View as cards
  const viewButton = document.querySelector(".wall__view");
  viewButton?.addEventListener("click", () => {
    const grid = wall.classList.toggle("is-grid");
    viewButton.textContent = grid ? "View as cards" : "View as grid";
    viewButton.setAttribute("aria-pressed", String(grid));
    if (!grid) { openNewest(); syncOpenWidth(); }
    list.scrollTo({ top: 0, left: 0 });
  });

  // ---------- form ----------
  const body = form.elements.body;
  const counter = form.querySelector(".note-form__count");
  const status = form.querySelector(".note-form__status");
  const submit = form.querySelector(".note-form__submit");
  const syncCount = () => { counter.textContent = `${body.value.length} / ${body.maxLength}`; };
  body.addEventListener("input", syncCount);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const message = body.value.trim();
    status.textContent = "";
    if (form.elements.website.value) return; // the hidden field only bots fill in
    if (!message) { status.textContent = "Write a message first."; body.focus(); return; }
    const wait = store.get("notes-last", 0) + COOLDOWN_MS - Date.now();
    if (wait > 0) { status.textContent = `Thanks! You can leave another in ${Math.ceil(wait / 1000)}s.`; return; }

    submit.disabled = true;
    submit.textContent = "Sending…";
    try {
      const location = await lookUpPlace();
      const saved = await addMessage({
        name: form.elements.name.value.trim() || null,
        body: message,
        color: form.elements.color.value,
        location,
      });
      store.set("notes-last", Date.now());
      list.querySelector(".wall__empty")?.remove();
      const li = messageEl(saved);
      li.classList.add("is-new");
      list.prepend(li);
      if (!wall.classList.contains("is-grid")) { openMessage(li); syncOpenWidth(); }
      list.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      body.value = "";
      syncCount();
      status.textContent = "Sent. Thank you!";
    } catch (err) {
      console.error(err);
      status.textContent = "Something went wrong. Please try again.";
    } finally {
      submit.disabled = false;
      submit.textContent = "Submit";
    }
  });
})();
