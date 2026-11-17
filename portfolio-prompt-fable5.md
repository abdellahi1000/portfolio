# Prompt — Abdellahi Seyid Portfolio (paste everything below into Fable 5)

---

You are a senior creative developer (Awwwards / Site-of-the-Day level). Build my personal portfolio website using **only HTML, CSS and vanilla JavaScript** — no React, no build tools, no npm. External libraries are allowed **only via CDN** and only these two: **Three.js** (via an ES-module importmap, including `GLTFLoader`/`RoundedBoxGeometry`/`RGBELoader` addons if needed) and **GSAP** (core). The site must run by simply opening `index.html` through any static server. Do not publish, host or deploy anything — just give me the code; I will publish it myself.

## 1. Reference & creative direction

The design and interaction model is inspired by **https://scout-omega.vercel.app/** (Scout). Do NOT copy its brand, logo, products or assets — reproduce the *experience*:

- The whole page is **one fullscreen WebGL `<canvas>`** (Three.js) with an **HTML overlay** for text and UI on top.
- The page **does not scroll natively** (`body` = 100vh, `overflow: hidden`). Mouse wheel, trackpad, touch swipe and arrow keys / PageUp / PageDown move between **"slides"**, one per section, with a cinematic GSAP transition (debounced so one gesture = one slide; lock input during the transition).
- Each slide shows a **3D "collector case"**: a dark, slightly rounded rectangular box (like a premium vinyl/toy packaging) with a glossy/metallic dark-grey material, soft studio lighting, subtle reflections, a recessed inner tray, and **holographic iridescent stickers** on it (a smiley-style badge, a vertical "ABDELLAHI" label on the side, a small info label at the bottom). Inside each case sits the slide's hero object.
- The case **tilts smoothly toward the mouse** (lerped rotation, max ~8°) and floats/breathes gently when idle.
- On hover over the case, the cursor becomes a **custom circular cursor (blue/purple disc with a "+")**.
- **Click on the case** → GSAP timeline: the case slides to the left (and rotates slightly), and on the right an **info panel reveals with a staggered animation** — title, then description, then feature tiles, then button — each element fading/translating up with an incremental delay (`delay-in` order). Clicking again, pressing Esc, or clicking a "close" control reverses it (with reversed `delay-out` order). Changing slide while open closes it first.
- Big outlined/stroked display typography printed on the case front (slide title in a huge grotesk font, e.g. "Abdellahi"), plus a small uppercase subtitle above it.
- Top-left: my logo/name "AB" with a **text-scramble effect** (random characters resolving into the letters) on load and on every slide change. Top-right: a pill button **"Let's talk"** (goes to the Contact slide) + a small **language switcher (EN / FR / AR)**.
- Bottom-center: a pill button **"Next →"** (`○ Next`) that goes to the next slide, plus a minimal progress indicator (e.g. `01 / 06` or dots).
- Dark, minimal, premium, slightly playful. Lots of empty space.

## 2. Visual identity

- Background: `#09090B` (near-black), with very subtle vignette/noise.
- Accent purple: `#635BFF`, accent blue: `#2563EB`. Use a purple→blue gradient for the cursor, key highlights and holographic sticker tints.
- Text: `#FAFAFA` primary, `#A1A1AA` secondary.
- Fonts (Google Fonts): a bold wide grotesk for titles (e.g. "Unbounded" or "Syne"), "Inter" for body, "JetBrains Mono" for small labels. Arabic: "IBM Plex Sans Arabic" or "Cairo".
- Rounded corners, pill buttons, glassy feature tiles (`backdrop-filter: blur`) with thin borders.

## 3. Slides & content

Slide order: **1 Hero → 2 About → 3 Skills → 4 Projects (4 sub-slides, one case per project) → 5 Experience → 6 Contact.** (Projects = 4 consecutive slides, so total ≈ 9 slides; the progress indicator should reflect that.)

### Slide 1 — Hero (identity card)
- Object inside the case: **my photo** on a slightly curved card/plane with a holographic sheen that reacts to the mouse (shader or animated gradient overlay). Load it from `assets/photo.jpg`. If the file is missing, render a stylised placeholder silhouette with the initials "AS".
- Case front text: small label "SOFTWARE ENGINEERING STUDENT", big title **"Abdellahi"**.
- Bottom sticker label: "Nouakchott, Mauritania 🇲🇷 · L3 @ SupNum".
- Info panel on click (Profile Card):
  - Title: **Abdellahi Seyid**
  - Subtitle: Software Engineering Student | Full-Stack Developer
  - Tagline: "Building innovative digital solutions through software engineering, modern web technologies, and cybersecurity."
  - Tiles: 🎓 SupNum — Développement des Systèmes Informatiques (L3) · 📍 Nouakchott, Mauritania · 💻 Full-Stack & Cybersecurity
  - Buttons: GitHub (https://github.com/abdellahi1000), LinkedIn (https://www.linkedin.com/in/abdellahi-seyid-2035b8430), **Download CV** (`assets/cv.pdf`, `download` attribute).

### Slide 2 — About
- Object: a stylised 3D laptop or terminal window floating in the case, screen showing a blinking cursor.
- Case title: "About".
- Info panel:
  - "I'm a student in Information Systems Development, passionate about software engineering and building web and mobile applications."
  - "I work on real projects with modern technologies, building complete systems that bring together frontend, backend and databases."
  - "I have a special interest in cybersecurity, artificial intelligence and digital innovation, and I keep growing my technical and professional skills through learning and hands-on practice."
  - "My goal: become a software engineer specialised in Full-Stack Development and Cybersecurity, and continue my studies through a Master's degree."
  - Tiles — Languages: Arabic (native), French (fluent — studies & tech), English (B1).

### Slide 3 — Skills
- Object: a cluster of floating 3D tokens/coins (like game pieces) orbiting slowly inside the case, each embossed with a tech name (generate textures with a 2D canvas — no external images).
- Case title: "Skills".
- Info panel with 3 highlighted "core" cards first:
  1. **Full-Stack Development** — frontends, backends and complete integrated apps.
  2. **Backend & Database Engineering** — building APIs, managing databases and designing systems.
  3. **Cybersecurity & AI Integration** — security fundamentals and integrating AI into applications.
- Then grouped chips:
  - Languages: Java, JavaScript, TypeScript, Dart, Python, SQL, HTML, CSS
  - Frameworks: React, Next.js, React Native, Flutter, Spring Boot, Flask, Jinja, Node.js
  - Databases: Supabase, PostgreSQL, MySQL, MongoDB
  - Tools: Git & GitHub, Docker (learning), VS Code, Android Studio, Maven, Linux / Ubuntu
  - Practices: REST APIs, Database Design, API Integration, Authentication & Authorization, AI Integration

### Slides 4a–4d — Projects (one case each; label "PROJECT 01/04" etc.)
Each case contains an emblem object built from simple Three.js geometry (no external models), with a distinct accent tint.

**4a — Rahalatte · Captain App** (main project) — object: a steering wheel / location pin
- "An app that brings ride and delivery requests from multiple companies into a single interface for drivers (captains), making it easier to manage orders across platforms."
- Tech: Flutter, Dart, Supabase, PostgreSQL, Next.js (admin dashboard), API Integration
- Role: System design, UI, backend and third-party integrations.
- Link: GitHub → https://github.com/abdellahi1000/idea

**4b — Digital Medical Record (Dossier Médical Numérique)** — object: a medical cross / folder
- "A digital system managing patient medical records, appointments, doctors, health-insurance verification, medical signatures and PDF medical-record generation."
- Tech: Python, Flask, Jinja2, MongoDB, MongoDB Atlas, Vercel
- Role: Developed the system during my internship (Khidmaty context) — features and medical data management.
- Link: Live → `https://dossier-medical-abdev48.vercel.app` (keep as a constant I can edit)

**4c — Banking Face Detection** — object: a shield with a face-scan grid
- "A security project for banking apps that strengthens user identity verification with face recognition and additional verification methods."
- Tech: React Native, Kotlin / Java, Supabase, Edge Functions, Face Recognition, QR Code Authentication
- Role: Mobile app ↔ backend integration and security features.

**4d — AutoCV** — object: a stack of document sheets
- "An AI-powered platform that organises professional information, skills and projects, and turns them into an always-up-to-date, exportable CV."
- Tech: AI Integration, APIs, Backend
- Role: Creator — concept, system design and development.

### Slide 5 — Experience & Education
- Object: a stylised graduation cap or timeline rail.
- Info panel (vertical timeline):
  - **Internship — Digital Medical Record system** (Khidmaty context): developed a digital medical-records management platform.
  - **SupNum — Institut Supérieur du Numérique**, Licence in Développement des Systèmes Informatiques — currently L3 (2025–2026).
  - **Coursework & interests:** Software Engineering, Spring Boot & Java, Database Management, Cloud & Virtualization, Big Data, SOA & Web Services, Linux & DevOps, Cybersecurity.
  - **Community:** Takes part in tech competitions and forums.

### Slide 6 — Contact
- Object: a paper plane / envelope that "flies" a little when the case is clicked.
- Case title: "Let's talk".
- Info panel:
  - Text: "Have a project, an internship or an idea? Let's build something together."
  - Email: `EMAIL_PLACEHOLDER` (single constant at the top of `main.js` I'll replace).
  - Links: GitHub, LinkedIn.
  - Contact form: Full Name, Email, Subject, Message, **Send Message**. No backend: submit via `mailto:` built from the fields, with a clearly marked constant `FORM_ENDPOINT` so I can later switch to Formspree. Client-side validation + a success toast animation.
  - Download CV button again.

## 4. Languages (EN / FR / AR)

- Default **English**; switcher with **Français** and **العربية**. Put ALL texts in one `i18n.js` dictionary object (translate every string above into accurate, natural French and Modern Standard Arabic).
- Arabic switches `<html dir="rtl" lang="ar">`, uses the Arabic font, mirrors the layout (info panel appears on the **left**, case slides **right**).
- Remember the choice in `localStorage` (wrapped in try/catch). Texts printed on the 3D case (canvas textures) must also update on language change.

## 5. Loader & intro

- A short preloader: black screen, a counter `000 → 100` in mono font tied to real asset loading (Three.js `LoadingManager`), the "AB" scramble, then the first case rises from below with a camera dolly-in and the UI fades in with stagger.

## 6. Technical requirements

- Files: `index.html`, `css/style.css`, `js/main.js` (scene, slides, interactions), `js/i18n.js`, `assets/` (photo.jpg, cv.pdf — I'll add them). Clean, commented, modular code (classes or clear functions: `Experience`, `Slides`, `Case`, `Cursor`, `Scramble`, `InfoPanel`).
- Three.js: `MeshPhysicalMaterial` (clearcoat, roughness) for the case, an environment map generated with `RoomEnvironment` + `PMREMGenerator` (no external HDR), ACES tone mapping, sRGB output, pixel ratio capped at 2. Stickers = planes with canvas-generated holographic gradient textures that shift with view angle/mouse.
- All motion through GSAP timelines (`power3`/`expo` easings). Mouse tilt via lerp in the render loop.
- Accessibility & SEO: the HTML overlay contains the real text (semantic headings, landmark roles), buttons are real `<button>`/`<a>`, keyboard navigation works (Tab, Enter to open a case, Esc to close, arrows for slides), visible focus styles, `<title>`, meta description, Open Graph tags.
- `prefers-reduced-motion`: disable tilt/float, use simple fades.
- **Responsive:** desktop, tablet, mobile. On mobile: the case is centered and smaller; tapping it opens the info panel as a **bottom sheet** over the case; swipe up/down changes slides; hide the custom cursor on touch devices; reduce geometry/shadow quality.
- Fallback: if WebGL is unavailable, show a styled static version (same content as normal scrolling sections).
- Performance: 60 fps target, dispose unused resources, pause rendering when the tab is hidden.

## 7. Deliverable

Give me the **complete code of every file**, ready to copy, then a short README: how to run locally, where to put `photo.jpg` and `cv.pdf`, and which constants to edit (email, form endpoint, links).
