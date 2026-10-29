// ---------------------------------------------------------------------------
// Archive projects (archive.html), from the Figma frames "archive / …" (1150 wide).
// Same fields as PROJECTS in script.js, plus:
//   media.crop   where the cover sits in the open card when it isn't simply filling it:
//                --l / --t (left / top), --w / --h (width / height) and --r (rotation)
//   media.pos    object-position of the cover
//   media.bg     colour behind the cover
//   notes        text under the title: an optional label over columns of text, each { label, width, html }
//                (`before`: its own gap from the column before);
//                gap between the columns and `after` (space down to the images) in Figma px
//   assetsInset  the images sit 20px in from both sides
//   assets       besides { src, w, h }: { grid: [...], cols } or { grid, template, height } (a fixed-height
//                row), { space } (an empty gap in Figma px), and a video with player: true gets Play / Mute
//                buttons instead of autoplaying
// ---------------------------------------------------------------------------
const ARCHIVE = [
  {
    title: "Everything I Once Knew",
    eyebrow: "Animation",
    scrollCue: true, // "Scroll to view" next to the title, down to the film
    // loops muted, no controls (add sound: true to play it with sound while the project is open)
    media: { type: "video", src: "assets/everything-i-once-knew/everything_i_once_knew_thumbnail.mp4" },
    caseStudy: {
      meta: [{ label: "Timeline", value: "February 2023" }],
      notes: {
        gap: 60,
        after: 24,
        cols: [
          {
            label: "Concept",
            width: 696,
            html: "Hand-drawn and cutout animation depicting the most painful loneliness I’ve ever felt when entering college during the peak of COVID isolation. Dedicated to my mother and all the other mothers out there in the world.",
          },
          { label: "Specs", width: 138, html: "2,160 frames<br>24 frames/second" },
          { label: "Music", width: 211, before: 4, html: "Claire de Lune (sped-up version)" },
        ],
      },
      // player: no autoplay; the viewer presses play (with sound) and can mute
      assets: [{ src: "assets/everything-i-once-knew/EverythingIOnceKnew.mp4", w: 1920, h: 1080, player: true }],
    },
  },
  {
    title: "Phonetics-based Machine Orthography",
    eyebrow: "Natural Language Processing",
    // the poster and the letter grid side by side, 5px apart, uncropped
    // (two 1534 × 2300 images in (100% − 5px) / 2 each → 74.64% of the card's width tall)
    media: {
      type: "pair",
      srcs: [
        "assets/machine-orthography/web/machineorthography_poster.jpg",
        "assets/machine-orthography/web/machineorthography_grid.jpg",
      ],
      openHeight: "74.64cqi",
    },
    caseStudy: {
      meta: [{ label: "Timeline", value: "April 2024" }],
      notes: {
        label: "Concept",
        gap: 54,
        after: 40,
        cols: [
          {
            width: 600,
            html: "In orthography in linguistics, letterforms all fall into a horizontal and vertical grid. This experiment explores how machines interpret the English language based on phonetics alone (a human sense) and present that machine-generated language visually. The goal is to see if two separate AI models would be able to interpret their self-generated letterforms and answer the question: Can machines form languages and orthographic writing systems based on phonetics in the same way humans do?",
          },
          {
            width: 422,
            html: "Step 1: Converting from text to image. I wrote a script that extracts phonemes from the English language and utilized stable diffusion machine learning algorithms to iterate over the prompt ““Create an image that sounds like the letter ‘_’ in the English alphabet” 100 times for each letter in the English alphabet. In total, 2,600 letterforms were generated during this process.<br><br>Step 2: Converting from imge to text. These letterforms were then fed into an alt text generator to generate text descriptions for each of the images. I finally compared the text descriptions with the original letter inputted into the prompt to test the accuracy of text-to-image generation and image recognition.",
          },
        ],
      },
      assets: [
        {
          cols: 5,
          grid: ["A", "B", "C", "D", "E", "N", "Q", "R", "U", "W"].map((l) =>
            ({ src: `assets/machine-orthography/${l}.mp4`, w: 960, h: 960 })),
        },
      ],
    },
  },
  {
    title: "Interview with Talia Cotton",
    eyebrow: "Publication Design",
    // the whole spread on black, 74% wide from 13% in (Figma crop)
    media: {
      type: "image",
      src: "assets/talia-cotton-interview/web/interview_newspaper.jpg",
      bg: "#000",
      crop: { l: "13.01%", t: "-2.69%", w: "73.97%", h: "100%" },
    },
    caseStudy: {
      meta: [{ label: "Timeline", value: "March 2024" }],
      notes: {
        after: 40,
        cols: [
          {
            label: "Process",
            width: 600,
            html: "In a 49 minute interview with Talia Cotton, Hannah Jeong and I chatted with her about her graphic design, coding, and teaching practices, touching on topics such as the founding of her studio (<span class=\"case__link\" data-href=\"https://cotton.design/\" role=\"link\" tabindex=\"0\">cotton.design</span>) after her departure from Pentagram, her outlook on code’s “fullest potential”, and past and future projects she’s worked on and is excited about.",
          },
        ],
      },
      assets: [{ src: "assets/talia-cotton-interview/web/interview_fullspread.jpg", w: 2300, h: 1138 }],
    },
  },
  {
    title: "The Lawnmower Museum",
    eyebrow: "Branding & Identity",
    // No Mow May, tilted 8.45° and enlarged (Figma crop)
    media: {
      type: "image",
      src: "assets/lawnmower/web/lawnmower_nomowmay.jpg",
      crop: { l: "2.206%", t: "-36.825%", w: "114.79%", h: "auto", r: "8.447deg" },
    },
    caseStudy: {
      meta: [{ label: "Timeline", value: "May 2024" }],
      notes: {
        after: 40,
        cols: [
          {
            label: "Project",
            width: 600,
            html: "The British Lawnmower Museum is England’s foremost garden machinery collection, multi-award winning unique museum of over 250 restored machines. Adapting this to the US, the fresh new supergreen lawns offered an escape from monochrome life in the cities—a brightly-colored consistent landscape that mirrored the aesthetic and racial uniformity of 1950s suburbia, where a perfect lawn became the very symbol of the American Dream and suburban success in post-WWII America.<br><br>In designing the identity system, I deconstructed the museum to arrive at the following themes: cutting grass, cookie-cutter homogeneity, and the anti-lawn movement where the act of lawnmowing becomes inherently political.",
          },
        ],
      },
      assets: [
        { src: "assets/lawnmower/lawnmower_pixelfont.gif", w: 1074, h: 434 },
        { src: "assets/lawnmower/web/lawnmower_stationary.jpg", w: 2300, h: 1568 },
        { src: "assets/lawnmower/web/lawnmower_letterhead.jpg", w: 2300, h: 1530 },
      ],
    },
  },
  {
    title: "Wild Typography",
    eyebrow: "Typographic Applications",
    media: { type: "image", src: "assets/wild-type/web/dsc0112.jpg", pos: "50% 66.4%" },
    caseStudy: {
      meta: [{ label: "Timeline", value: "November 2021" }],
      notes: {
        gap: 60,
        after: 40,
        cols: [
          {
            label: "Project",
            width: 600,
            html: "My Wild Typography centers around my childhood memories documented by my parents. Growing up in both the US and China, they have always taken videos of our everyday lives, capturing the most minute and mundane moments that I now treasure immensely. However, these videos stopped after I turned 10, which makes the memories that they have captured even more dear to me than ever.",
          },
          {
            label: "Wild Typography",
            width: 287,
            html: "Wild Typography is an alphabet assembled using typography from signage and other found objects around Providence showcasing the letterforms and field notes collected.",
          },
        ],
      },
      assetsInset: true,
      assets: [
        {
          template: "351fr 371fr 383fr",
          height: 577,
          grid: [
            { src: "assets/wild-type/web/dsc0104.jpg", w: 1716, h: 2300 },
            { src: "assets/wild-type/web/dsc0091.jpg", w: 1529, h: 2300 },
            { src: "assets/wild-type/web/dsc0103.jpg", w: 1528, h: 2300 },
          ],
        },
        { space: 24 },
        { src: "assets/wild-type/web/dsc0168.jpg", w: 2300, h: 1529 },
        { space: 24 },
        { src: "assets/wild-type/web/dsc0119.jpg", w: 2300, h: 1420 },
        { src: "assets/wild-type/web/dsc0124.jpg", w: 2300, h: 1529 },
        { src: "assets/wild-type/web/dsc0129.jpg", w: 2300, h: 1529 },
        { src: "assets/wild-type/web/dsc0138.jpg", w: 2300, h: 1583 },
      ],
    },
  },
  {
    title: "Diary of a Synesthete",
    eyebrow: "Conceptual",
    media: { type: "image", src: "assets/diary-of-a-synesthete/diaryofasynesthete_flipthrough.gif" },
    caseStudy: {
      meta: [{ label: "Timeline", value: "May 2022" }],
      notes: {
        after: 24,
        cols: [
          {
            label: "Project",
            width: 600,
            html: "<em>Diary of a Synesthete</em> is a tactile book that incorporates a third sense into this exploration of synesthesia — touch. The layered natural muslim fabric, duck canvas, and embroidery thread entices the viewer to interact with the letters, while each page carries a specific weight depending on the number of letters on a page and how small or tight the letters are woven.",
          },
        ],
      },
      assets: [],
    },
  },
  {
    title: "Kaybug Music Festival",
    eyebrow: "Branding & Identity",
    media: { type: "video", src: "assets/kaybug/kaybug_billboard.mp4" },
    caseStudy: {
      meta: [{ label: "Timeline", value: "May 2021" }],
      notes: {
        after: 24,
        cols: [
          {
            label: "Project",
            width: 600,
            html: "Kaybug is an identity system for a three-day fictional music festival inspired by Y2K style, which features distinct aesthetic tastes that encapsulate fashion, hardware design, and music with “tech optimism”: techno fonts, optimistic and loud colors, gradients and drop shadows, and psychedelic patterns influenced by the dropping of acid.<br><br>The name comes from the Y2K (the year 2000, or Kaybug) bug, also known as the Millennium bug, where computers failed to change the date in the transition from December 31, 1999, to January 1, 2000. This informs the concert dates, which go from December 29th to December 31st, ending exactly at 11:59 pm right before the date turns to January 1, 2023.",
          },
        ],
      },
      assets: [{ src: "assets/kaybug/kaybug_webscroll.mp4", w: 1920, h: 1200 }],
    },
  },
  {
    title: "Hush, by The Marías",
    eyebrow: "Animation",
    media: { type: "image", src: "assets/hush-marias/web/hush_poster.jpg", pos: "50% 16.8%" },
    caseStudy: {
      meta: [{ label: "Timeline", value: "October 2023" }],
      assets: [{ src: "assets/hush-marias/web/hush_poster.jpg", w: 1841, h: 2300 }],
    },
  },
];
