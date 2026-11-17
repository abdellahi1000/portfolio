# Abdellahi Seyid — Portfolio

A single-page 3D portfolio: one fullscreen Three.js canvas, GSAP slide transitions,
an HTML overlay for the real content, in EN / FR / AR. No build tools — plain
HTML, CSS and vanilla JS with Three.js and GSAP from CDN.

## Run locally

The site must be served over HTTP (ES modules don't load from `file://`).
Any static server works:

```bash
# Python
python -m http.server 8000
# or Node
npx serve .
```

Then open http://localhost:8000.

## Files

```
index.html        page shell, overlay UI, fonts, importmap (Three.js), GSAP CDN
css/style.css     all styles (overlay, panel, cursor, mobile bottom sheet, fallback)
js/i18n.js        every text string in English, French and Arabic
js/main.js        Three.js scene, cases, slides, interactions, loader
assets/           you add: photo.jpg and cv.pdf
```

## Your assets

- `assets/photo.jpg` — your portrait, shown on the hero card (roughly portrait
  orientation, e.g. 800×1000). If it's missing, a stylised "AS" placeholder renders instead.
- `assets/cv.pdf` — downloaded by the "Download CV" buttons.

## Constants to edit (top of `js/main.js`)

| constant | currently | what it is |
| --- | --- | --- |
| `CONTACT_EMAIL` | abdellahiseyid10@gmail.com | contact email (mailto + displayed) |
| `FORM_ENDPOINT` | `''` | empty = contact form uses `mailto:`; set a Formspree URL to POST instead |
| `LINK_GITHUB` / `LINK_LINKEDIN` | your profiles | header/panel links |
| `LINK_P1_GITHUB` | github.com/abdellahi1000/idea | Rahalatte repo link |
| `LINK_P2_LIVE` | dossier-medical-abdev48.vercel.app | Medical Record live demo |

## Controls

Wheel / swipe / arrow keys / PageUp-PageDown change slides. Click (or Enter)
on a case opens its info panel; Esc, the × button or clicking the case again
closes it. "Let's talk" jumps to the contact slide. EN/FR/AR switcher is
remembered in localStorage; Arabic flips the whole layout to RTL.

`prefers-reduced-motion` is respected, and if WebGL is unavailable the site
renders as a plain scrolling page with the same content.
