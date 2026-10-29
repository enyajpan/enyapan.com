// ---------------------------------------------------------------------------
// Archive projects (archive.html). Same fields as PROJECTS in script.js.
// Titles come from the asset folder names; "TBD" marks text still to write.
// An item in `assets` can be { grid: [...], cols } to show files side by side.
// ---------------------------------------------------------------------------
const TBD = [
  { label: "Timeline", value: "TBD" },
  { label: "Scope", value: "TBD" },
];

const ARCHIVE = [
  {
    title: "Everything I Once Knew",
    eyebrow: "TBD",
    media: { type: "image", src: "assets/everything-i-once-knew/web/everything_i_once_knew_2-copy.jpg" },
    caseStudy: {
      meta: TBD,
      assets: [{ src: "assets/everything-i-once-knew/EverythingIOnceKnew.mp4", w: 1920, h: 1080 }],
    },
  },
  {
    title: "Machine Orthography",
    eyebrow: "TBD",
    media: { type: "image", src: "assets/machine-orthography/web/machineorthography_poster.jpg" },
    caseStudy: {
      meta: TBD,
      assets: [
        {
          cols: 5,
          grid: ["A", "B", "C", "D", "E", "N", "Q", "R", "U", "W"].map((l) =>
            ({ src: `assets/machine-orthography/${l}.mp4`, w: 960, h: 960 })),
        },
        {
          cols: 2,
          grid: [
            { src: "assets/machine-orthography/web/machineorthography_poster.jpg", w: 1535, h: 2300 },
            { src: "assets/machine-orthography/web/machineorthography_grid.jpg", w: 1533, h: 2300 },
          ],
        },
      ],
    },
  },
  {
    title: "Interview with Talia Cotton",
    eyebrow: "TBD",
    media: { type: "image", src: "assets/talia-cotton-interview/web/interview_newspaper.jpg" },
    caseStudy: {
      meta: TBD,
      assets: [{ src: "assets/talia-cotton-interview/web/interview_fullspread.jpg", w: 2300, h: 1138 }],
    },
  },
  {
    title: "The Lawnmower Museum",
    eyebrow: "TBD",
    media: { type: "image", src: "assets/lawnmower/web/lawnmower_letterhead.jpg" },
    caseStudy: {
      meta: TBD,
      assets: [
        { src: "assets/lawnmower/lawnmower_pixelfont.gif", w: 1074, h: 434 },
        { src: "assets/lawnmower/web/lawnmower_stationary.jpg", w: 2300, h: 1568 },
        { src: "assets/lawnmower/web/lawnmower_nomowmay.jpg", w: 2300, h: 1533 },
      ],
    },
  },
  {
    title: "Wild Type",
    eyebrow: "TBD",
    media: { type: "image", src: "assets/wild-type/web/dsc0112.jpg" },
    caseStudy: {
      meta: TBD,
      assets: [
        {
          cols: 3,
          grid: [
            { src: "assets/wild-type/web/dsc0091.jpg", w: 1529, h: 2300 },
            { src: "assets/wild-type/web/dsc0103.jpg", w: 1528, h: 2300 },
            { src: "assets/wild-type/web/dsc0104.jpg", w: 1716, h: 2300 },
          ],
        },
        { src: "assets/wild-type/web/dsc0119.jpg", w: 2300, h: 1420 },
        { src: "assets/wild-type/web/dsc0124.jpg", w: 2300, h: 1529 },
        { src: "assets/wild-type/web/dsc0129.jpg", w: 2300, h: 1529 },
        { src: "assets/wild-type/web/dsc0138.jpg", w: 2300, h: 1583 },
        { src: "assets/wild-type/web/dsc0168.jpg", w: 2300, h: 1529 },
      ],
    },
  },
  {
    title: "Diary of a Synesthete",
    eyebrow: "TBD",
    media: { type: "image", src: "assets/diary-of-a-synesthete/diaryofasynesthete_flipthrough.gif" },
    caseStudy: { meta: TBD, assets: [] },
  },
  {
    title: "Kaybug",
    eyebrow: "TBD",
    media: { type: "video", src: "assets/kaybug/kaybug_billboard.mp4" },
    caseStudy: {
      meta: TBD,
      assets: [{ src: "assets/kaybug/kaybug_webscroll.mp4", w: 1920, h: 1200 }],
    },
  },
  {
    title: "Hush",
    eyebrow: "TBD",
    media: { type: "image", src: "assets/hush-marias/web/hush_poster.jpg" },
    caseStudy: {
      meta: TBD,
      assets: [{ src: "assets/hush-marias/web/hush_poster.jpg", w: 1841, h: 2300 }],
    },
  },
];
