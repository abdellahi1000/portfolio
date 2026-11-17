/* ============================================================
   Abdellahi Seyid — portfolio
   Three.js scene (collector cases) + GSAP slide machine.
   ============================================================ */

import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

/* ------------------------------------------------------------
   Constants you may want to edit
   ------------------------------------------------------------ */
const CONTACT_EMAIL = 'abdellahiseyid10@gmail.com'; // your email
const FORM_ENDPOINT = ''; // leave '' for mailto:, or set a Formspree URL like 'https://formspree.io/f/xxxx'
const LINK_GITHUB = 'https://github.com/abdellahi1000';
const LINK_LINKEDIN = 'https://www.linkedin.com/in/abdellahi-seyid-2035b8430';
const LINK_P1_GITHUB = 'https://github.com/abdellahi1000/idea';
const LINK_P2_LIVE = 'https://dossier-medical-abdev48.vercel.app';
const ASSET_PHOTO = 'assets/photo.jpg';
const ASSET_CV = 'assets/cv.pdf';

const SLIDE_IDS = ['hero', 'about', 'skills', 'p1', 'p2', 'p3', 'p4', 'exp', 'contact'];
const ACCENTS = {
  hero: 0x635bff, about: 0x2563eb, skills: 0x8b5cf6,
  p1: 0x635bff, p2: 0x22c55e, p3: 0x2563eb, p4: 0xec4899,
  exp: 0xf59e0b, contact: 0x635bff
};
const SPACING = 15;
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const IS_TOUCH = window.matchMedia('(pointer: coarse)').matches;

let LANG = 'en';
try { LANG = localStorage.getItem('lang') || 'en'; } catch (e) { /* private mode */ }
if (!window.I18N[LANG]) LANG = 'en';
const T = () => window.I18N[LANG];
const isRTL = () => T().dir === 'rtl';

/* ------------------------------------------------------------
   Canvas texture helpers
   ------------------------------------------------------------ */
function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}

function holoGradient(ctx, w, h) {
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0.0, '#635bff');
  g.addColorStop(0.25, '#2563eb');
  g.addColorStop(0.5, '#22d3ee');
  g.addColorStop(0.75, '#ec4899');
  g.addColorStop(1.0, '#635bff');
  return g;
}

function displayFont(px, weight = 800) {
  const fam = LANG === 'ar' ? '"IBM Plex Sans Arabic"' : '"Unbounded"';
  return `${weight} ${px}px ${fam}, sans-serif`;
}

/* Front face of a case: small label + huge stroked title */
function drawFront(ctx, w, h, slide) {
  const t = T().slides[slide.id];
  ctx.clearRect(0, 0, w, h);
  // thin frame
  ctx.strokeStyle = 'rgba(250,250,250,0.1)';
  ctx.lineWidth = 2;
  ctx.strokeRect(28, 28, w - 56, h - 56);
  // label
  ctx.font = '600 30px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(250,250,250,0.6)';
  ctx.textAlign = 'center';
  ctx.fillText(t.label, w / 2, h * 0.17);
  // big stroked title
  let size = 150;
  ctx.font = displayFont(size);
  while (ctx.measureText(t.caseTitle).width > w - 120 && size > 40) {
    size -= 8;
    ctx.font = displayFont(size);
  }
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgba(250,250,250,0.9)';
  ctx.strokeText(t.caseTitle, w / 2, h * 0.82);
  // faint gradient fill behind the stroke
  ctx.globalAlpha = 0.12;
  ctx.fillStyle = holoGradient(ctx, w, h);
  ctx.fillText(t.caseTitle, w / 2, h * 0.82);
  ctx.globalAlpha = 1;
}

/* Smiley holographic badge */
function drawBadge(ctx, s) {
  ctx.clearRect(0, 0, s, s);
  ctx.fillStyle = holoGradient(ctx, s, s);
  ctx.beginPath();
  ctx.arc(s / 2, s / 2, s / 2 - 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.7)';
  ctx.lineWidth = 6;
  ctx.stroke();
  // face
  ctx.fillStyle = '#09090b';
  ctx.beginPath(); ctx.arc(s * 0.36, s * 0.42, s * 0.05, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(s * 0.64, s * 0.42, s * 0.05, 0, Math.PI * 2); ctx.fill();
  ctx.lineWidth = 8;
  ctx.strokeStyle = '#09090b';
  ctx.beginPath(); ctx.arc(s / 2, s * 0.55, s * 0.2, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
}

/* Vertical side label */
function drawSideLabel(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = holoGradient(ctx, w, h);
  ctx.fillRect(0, 0, w, h);
  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.font = '800 60px "Unbounded", sans-serif';
  ctx.fillStyle = '#09090b';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('ABDELLAHI', 0, 0);
  ctx.restore();
}

/* Small bottom info sticker */
function drawInfoLabel(ctx, w, h, slide) {
  const t = T().slides[slide.id];
  ctx.clearRect(0, 0, w, h);
  const r = h / 2;
  ctx.fillStyle = 'rgba(250,250,250,0.92)';
  ctx.beginPath();
  ctx.roundRect(2, 2, w - 4, h - 4, r);
  ctx.fill();
  const fam = LANG === 'ar' ? '"IBM Plex Sans Arabic"' : '"JetBrains Mono"';
  ctx.font = `600 34px ${fam}, monospace`;
  ctx.fillStyle = '#18181b';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(t.sticker, w / 2, h / 2 + 2);
}

function canvasTexture(c) {
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/* Placeholder portrait if assets/photo.jpg is missing */
function placeholderPortrait() {
  const [c, ctx] = makeCanvas(512, 640);
  const g = ctx.createLinearGradient(0, 0, 512, 640);
  g.addColorStop(0, '#1b1b22');
  g.addColorStop(1, '#101014');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 512, 640);
  // silhouette
  ctx.fillStyle = 'rgba(99,91,255,0.25)';
  ctx.beginPath(); ctx.arc(256, 240, 110, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(256, 520, 190, 150, 0, Math.PI, 0); ctx.fill();
  ctx.font = '800 120px "Unbounded", sans-serif';
  ctx.textAlign = 'center';
  const tg = holoGradient(ctx, 512, 640);
  ctx.fillStyle = tg;
  ctx.fillText('AS', 256, 290);
  return canvasTexture(c);
}

/* ------------------------------------------------------------
   Text scramble
   ------------------------------------------------------------ */
class Scramble {
  constructor(el) { this.el = el; this.chars = '!<>-_\\/[]{}=+*^?#'; this.frame = 0; }
  to(text) {
    cancelAnimationFrame(this.raf);
    if (REDUCED) { this.el.textContent = text; return; }
    const from = this.el.textContent;
    const len = Math.max(from.length, text.length);
    const queue = [];
    for (let i = 0; i < len; i++) {
      queue.push({ to: text[i] || '', start: Math.floor(Math.random() * 12), end: Math.floor(Math.random() * 12) + 12 });
    }
    let frame = 0;
    const step = () => {
      let out = '', done = 0;
      for (const q of queue) {
        if (frame >= q.end) { done++; out += q.to; }
        else if (frame >= q.start) out += this.chars[Math.floor(Math.random() * this.chars.length)];
        else out += '';
      }
      this.el.textContent = out || ' ';
      frame++;
      if (done < queue.length) this.raf = requestAnimationFrame(step);
    };
    step();
  }
}

/* ------------------------------------------------------------
   Custom cursor
   ------------------------------------------------------------ */
class Cursor {
  constructor() {
    this.el = document.getElementById('cursor');
    this.x = innerWidth / 2; this.y = innerHeight / 2;
    this.tx = this.x; this.ty = this.y;
    if (IS_TOUCH) { this.el.style.display = 'none'; return; }
    document.body.classList.add('cursor-ready');
    addEventListener('pointermove', (e) => { this.tx = e.clientX; this.ty = e.clientY; });
  }
  hover(on) { this.el.classList.toggle('is-hover', on); }
  update() {
    if (IS_TOUCH) return;
    this.x += (this.tx - this.x) * 0.2;
    this.y += (this.ty - this.y) * 0.2;
    this.el.style.transform = `translate(${this.x - 50}%, ${this.y - 50}%)`;
    this.el.style.left = this.x + 'px';
    this.el.style.top = this.y + 'px';
    this.el.style.transform = 'translate(-50%,-50%)';
  }
}

/* ------------------------------------------------------------
   Info panel
   ------------------------------------------------------------ */
class InfoPanel {
  constructor() {
    this.el = document.getElementById('panel');
    this.inner = document.getElementById('panel-inner');
    this.closeBtn = document.getElementById('panel-close');
    this.isOpen = false;
    this.closeBtn.addEventListener('click', () => app.toggleCase(false));
  }

  html(id) {
    const t = T(), s = t.slides[id].panel, u = t.ui;
    const pill = (href, label, dl) =>
      `<a class="pill" href="${href}" ${dl ? 'download' : 'target="_blank" rel="noopener"'}>${label}</a>`;
    const tiles = (arr) => `<div class="tile-list">${arr.map((x) => `<div class="tile">${x}</div>`).join('')}</div>`;

    switch (id) {
      case 'hero':
        return `<h2 id="panel-title">${s.title}</h2>
          <p class="subtitle">${s.subtitle}</p>
          <p>${s.tagline}</p>
          ${tiles(s.tiles)}
          <div class="btn-row">${pill(LINK_GITHUB, u.github)}${pill(LINK_LINKEDIN, u.linkedin)}${pill(ASSET_CV, u.downloadCV, true)}</div>`;
      case 'about':
        return `<h2 id="panel-title">${s.title}</h2>
          ${s.paragraphs.map((p) => `<p>${p}</p>`).join('')}
          <p class="meta-label">${s.tilesTitle}</p>
          ${tiles(s.tiles)}`;
      case 'skills':
        return `<h2 id="panel-title">${s.title}</h2>
          ${s.cards.map((c) => `<div class="card"><h3>${c.title}</h3><p>${c.desc}</p></div>`).join('')}
          ${s.groups.map((g) => `<div class="chip-group"><h4>${g.label}</h4><div class="chips">${g.chips.map((c) => `<span class="chip">${c}</span>`).join('')}</div></div>`).join('')}`;
      case 'p1': case 'p2': case 'p3': case 'p4': {
        const links = { p1: pill(LINK_P1_GITHUB, u.github), p2: pill(LINK_P2_LIVE, u.live) }[id] || '';
        return `<p class="meta-label">${T().slides[id].label}</p>
          <h2 id="panel-title">${s.title}</h2>
          <p>${s.desc}</p>
          <p class="meta-label">${u.tech}</p>
          <div class="chips">${s.tech.map((c) => `<span class="chip">${c}</span>`).join('')}</div>
          <p class="meta-label" style="margin-top:1rem">${u.role}</p>
          <p>${s.role}</p>
          ${links ? `<div class="btn-row">${links}</div>` : ''}`;
      }
      case 'exp':
        return `<h2 id="panel-title">${s.title}</h2>
          <div class="timeline">${s.timeline.map((i) => `<div class="timeline-item"><h3>${i.title}</h3><p>${i.desc}</p></div>`).join('')}</div>`;
      case 'contact':
        return `<h2 id="panel-title">${s.title}</h2>
          <p>${s.text}</p>
          <p><a class="contact-email" href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></p>
          <div class="btn-row">${pill(LINK_GITHUB, u.github)}${pill(LINK_LINKEDIN, u.linkedin)}${pill(ASSET_CV, u.downloadCV, true)}</div>
          <form class="form" id="contact-form" novalidate>
            <input name="name" type="text" placeholder="${u.formName}" required />
            <input name="email" type="email" placeholder="${u.formEmail}" required />
            <input name="subject" type="text" placeholder="${u.formSubject}" required />
            <textarea name="message" placeholder="${u.formMessage}" required></textarea>
            <button type="submit" class="pill pill-accent">${u.formSend}</button>
          </form>`;
    }
    return '';
  }

  open(id) {
    this.inner.innerHTML = this.html(id);
    this.el.hidden = false;
    this.isOpen = true;
    const kids = [...this.inner.children];
    gsap.killTweensOf(kids);
    gsap.fromTo(this.el, { autoAlpha: 0 }, { autoAlpha: 1, duration: REDUCED ? 0.2 : 0.4 });
    gsap.fromTo(kids,
      { autoAlpha: 0, y: REDUCED ? 0 : 26 },
      { autoAlpha: 1, y: 0, duration: REDUCED ? 0.25 : 0.6, ease: 'power3.out', stagger: REDUCED ? 0 : 0.07, delay: 0.15 });
    const form = this.inner.querySelector('#contact-form');
    if (form) form.addEventListener('submit', onContactSubmit);
    this.closeBtn.focus({ preventScroll: true });
  }

  close(instant = false) {
    if (!this.isOpen) return;
    this.isOpen = false;
    const kids = [...this.inner.children].reverse();
    if (instant || REDUCED) {
      gsap.to(this.el, { autoAlpha: 0, duration: 0.2, onComplete: () => (this.el.hidden = true) });
      return;
    }
    gsap.to(kids, { autoAlpha: 0, y: 16, duration: 0.3, ease: 'power2.in', stagger: 0.04 });
    gsap.to(this.el, { autoAlpha: 0, duration: 0.35, delay: 0.25, onComplete: () => (this.el.hidden = true) });
  }
}

function onContactSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const data = Object.fromEntries(new FormData(form));
  let valid = true;
  for (const el of form.querySelectorAll('input, textarea')) {
    const ok = el.value.trim() !== '' && (el.type !== 'email' || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value));
    el.classList.toggle('invalid', !ok);
    if (!ok) valid = false;
  }
  if (!valid) { toast(T().ui.formInvalid); return; }
  if (FORM_ENDPOINT) {
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data)
    }).then(() => { toast(T().ui.formSuccess); form.reset(); })
      .catch(() => toast(T().ui.formInvalid));
  } else {
    const body = encodeURIComponent(`${data.name} <${data.email}>\n\n${data.message}`);
    location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(data.subject)}&body=${body}`;
    toast(T().ui.formSuccess);
    form.reset();
  }
}

function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.hidden = false;
  gsap.killTweensOf(el);
  gsap.fromTo(el, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.35 });
  gsap.to(el, { autoAlpha: 0, delay: 2.6, duration: 0.4, onComplete: () => (el.hidden = true) });
}

/* ------------------------------------------------------------
   3D: inner hero objects per slide (simple geometry only)
   ------------------------------------------------------------ */
function stdMat(color, opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color, metalness: 0.5, roughness: 0.35, clearcoat: 0.6, clearcoatRoughness: 0.3, ...opts
  });
}

function buildInner(id, accent, photoTex) {
  const g = new THREE.Group();
  const a = new THREE.Color(accent);

  if (id === 'hero') {
    // slightly curved photo card with a holographic sheen overlay
    const geo = new THREE.PlaneGeometry(1.9, 2.4, 24, 1);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      pos.setZ(i, Math.cos((x / 0.95) * 0.6) * 0.18);
    }
    geo.computeVertexNormals();
    const card = new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial({
      map: photoTex, roughness: 0.4, clearcoat: 1, clearcoatRoughness: 0.2
    }));
    const [hc, hctx] = makeCanvas(256, 256);
    hctx.fillStyle = holoGradient(hctx, 256, 256);
    hctx.fillRect(0, 0, 256, 256);
    const sheenTex = canvasTexture(hc);
    sheenTex.wrapS = THREE.RepeatWrapping;
    const sheen = new THREE.Mesh(geo.clone(), new THREE.MeshBasicMaterial({
      map: sheenTex, transparent: true, opacity: 0.14, blending: THREE.AdditiveBlending, depthWrite: false
    }));
    sheen.position.z = 0.012;
    g.add(card, sheen);
    g.userData.sheen = sheenTex;
  } else if (id === 'about') {
    const base = new THREE.Mesh(new RoundedBoxGeometry(1.8, 0.1, 1.2, 3, 0.03), stdMat(0x1c1c22));
    const lid = new THREE.Group();
    const lidBody = new THREE.Mesh(new RoundedBoxGeometry(1.8, 1.1, 0.07, 3, 0.03), stdMat(0x1c1c22));
    lidBody.position.y = 0.55;
    const [sc, sctx] = makeCanvas(512, 320);
    g.userData.screen = { c: sc, ctx: sctx, on: true };
    const screenTex = canvasTexture(sc);
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.95),
      new THREE.MeshBasicMaterial({ map: screenTex }));
    screen.position.set(0, 0.55, 0.04);
    g.userData.screenTex = screenTex;
    lid.add(lidBody, screen);
    lid.position.z = -0.58;
    lid.rotation.x = -0.25;
    base.position.y = -0.5;
    lid.position.y = -0.5;
    g.add(base, lid);
  } else if (id === 'skills') {
    const names = ['JS', 'TS', 'Java', 'Py', 'SQL', 'Flutter', 'React'];
    const ring = new THREE.Group();
    names.forEach((n, i) => {
      const [cc, cctx] = makeCanvas(256, 256);
      cctx.fillStyle = '#17171c';
      cctx.beginPath(); cctx.arc(128, 128, 126, 0, Math.PI * 2); cctx.fill();
      cctx.strokeStyle = holoGradient(cctx, 256, 256);
      cctx.lineWidth = 10; cctx.stroke();
      cctx.font = '800 64px "Unbounded", sans-serif';
      cctx.fillStyle = '#fafafa';
      cctx.textAlign = 'center'; cctx.textBaseline = 'middle';
      cctx.fillText(n, 128, 132);
      const coin = new THREE.Mesh(
        new THREE.CylinderGeometry(0.34, 0.34, 0.08, 32),
        [stdMat(0x202028), new THREE.MeshBasicMaterial({ map: canvasTexture(cc) }), new THREE.MeshBasicMaterial({ map: canvasTexture(cc) })]
      );
      coin.rotation.x = Math.PI / 2;
      const ang = (i / names.length) * Math.PI * 2;
      coin.position.set(Math.cos(ang) * 1.05, Math.sin(ang) * 1.05, Math.sin(i) * 0.15);
      ring.add(coin);
    });
    g.add(ring);
    g.userData.ring = ring;
  } else if (id === 'p1') {
    // steering wheel + pin
    const wheel = new THREE.Group();
    wheel.add(new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.11, 24, 64), stdMat(a)));
    for (let i = 0; i < 3; i++) {
      const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.5, 12), stdMat(0x26262e));
      spoke.rotation.z = (i / 3) * Math.PI * 2;
      wheel.add(spoke);
    }
    wheel.add(new THREE.Mesh(new THREE.SphereGeometry(0.22, 24, 24), stdMat(0xfafafa, { metalness: 0.8 })));
    g.add(wheel);
  } else if (id === 'p2') {
    const cross = new THREE.Group();
    cross.add(new THREE.Mesh(new RoundedBoxGeometry(1.5, 0.5, 0.3, 3, 0.08), stdMat(a)));
    cross.add(new THREE.Mesh(new RoundedBoxGeometry(0.5, 1.5, 0.3, 3, 0.08), stdMat(a)));
    g.add(cross);
  } else if (id === 'p3') {
    // shield + scan grid
    const shape = new THREE.Shape();
    shape.moveTo(0, 1);
    shape.bezierCurveTo(0.7, 0.85, 0.85, 0.7, 0.85, 0.2);
    shape.bezierCurveTo(0.85, -0.5, 0.45, -0.85, 0, -1.05);
    shape.bezierCurveTo(-0.45, -0.85, -0.85, -0.5, -0.85, 0.2);
    shape.bezierCurveTo(-0.85, 0.7, -0.7, 0.85, 0, 1);
    const shield = new THREE.Mesh(
      new THREE.ExtrudeGeometry(shape, { depth: 0.18, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04 }),
      stdMat(0x1c1c24)
    );
    shield.position.z = -0.1;
    const [gc, gctx] = makeCanvas(256, 300);
    gctx.strokeStyle = '#2563eb';
    gctx.lineWidth = 2;
    for (let i = 0; i <= 8; i++) {
      gctx.beginPath(); gctx.moveTo(i * 32, 0); gctx.lineTo(i * 32, 300); gctx.stroke();
      gctx.beginPath(); gctx.moveTo(0, i * 37); gctx.lineTo(256, i * 37); gctx.stroke();
    }
    gctx.strokeStyle = '#22d3ee';
    gctx.lineWidth = 4;
    gctx.beginPath(); gctx.ellipse(128, 140, 60, 85, 0, 0, Math.PI * 2); gctx.stroke();
    const grid = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.3),
      new THREE.MeshBasicMaterial({ map: canvasTexture(gc), transparent: true, opacity: 0.85 }));
    grid.position.z = 0.15;
    g.add(shield, grid);
  } else if (id === 'p4') {
    for (let i = 0; i < 3; i++) {
      const [dc, dctx] = makeCanvas(256, 340);
      dctx.fillStyle = i === 2 ? '#f4f4f5' : '#d4d4d8';
      dctx.fillRect(0, 0, 256, 340);
      dctx.fillStyle = '#a1a1aa';
      for (let l = 0; l < 9; l++) dctx.fillRect(30, 50 + l * 30, 150 + (l % 3) * 25, 8);
      dctx.fillStyle = '#635bff';
      dctx.fillRect(30, 20, 90, 14);
      const sheet = new THREE.Mesh(new RoundedBoxGeometry(1.25, 1.65, 0.03, 2, 0.02),
        new THREE.MeshPhysicalMaterial({ map: canvasTexture(dc), roughness: 0.6 }));
      sheet.position.set((i - 1) * 0.12, (i - 1) * 0.08, i * 0.12);
      sheet.rotation.z = (i - 1) * 0.08;
      g.add(sheet);
    }
  } else if (id === 'exp') {
    const cap = new THREE.Group();
    const board = new THREE.Mesh(new RoundedBoxGeometry(1.7, 0.09, 1.7, 2, 0.02), stdMat(0x1c1c22));
    board.rotation.y = Math.PI / 4;
    const head = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.6, 0.5, 32), stdMat(0x26262e));
    head.position.y = -0.3;
    const button = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 16), stdMat(a));
    button.position.y = 0.08;
    const tasselString = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.7, 8), stdMat(a));
    tasselString.position.set(0.82, -0.28, 0.82);
    const tassel = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.25, 16), stdMat(a));
    tassel.position.set(0.82, -0.72, 0.82);
    cap.add(board, head, button, tasselString, tassel);
    cap.position.y = 0.15;
    g.add(cap);
  } else if (id === 'contact') {
    const plane = new THREE.Group();
    const mat = stdMat(0xfafafa, { metalness: 0.1, roughness: 0.45 });
    const body = new THREE.Mesh(new THREE.ConeGeometry(0.42, 1.7, 4, 1), mat);
    body.scale.set(1, 1, 0.45);
    body.rotation.x = Math.PI / 2;
    body.rotation.z = Math.PI / 4;
    plane.add(body);
    plane.rotation.z = -0.3;
    plane.rotation.y = 0.5;
    g.add(plane);
    g.userData.paperPlane = plane;
  }

  return g;
}

/* ------------------------------------------------------------
   3D: the collector case
   ------------------------------------------------------------ */
function buildCase(id, index, photoTex) {
  const root = new THREE.Group();
  root.position.x = index * SPACING;
  const slide = { id };

  // body
  const body = new THREE.Mesh(
    new RoundedBoxGeometry(4.2, 5.4, 0.8, 5, 0.12),
    new THREE.MeshPhysicalMaterial({
      color: 0x141418, metalness: 0.65, roughness: 0.32,
      clearcoat: 1, clearcoatRoughness: 0.22
    })
  );
  root.add(body);

  // recessed inner tray
  const tray = new THREE.Mesh(
    new THREE.PlaneGeometry(3.5, 4.5),
    new THREE.MeshStandardMaterial({ color: 0x0a0a0e, metalness: 0.3, roughness: 0.7 })
  );
  tray.position.z = 0.401;
  root.add(tray);

  // front typography (redrawable for language switching)
  const [fc, fctx] = makeCanvas(1024, 1312);
  const frontTex = canvasTexture(fc);
  const front = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 5.4),
    new THREE.MeshBasicMaterial({ map: frontTex, transparent: true }));
  front.position.z = 0.42;
  root.add(front);

  // holographic smiley badge
  const [bc, bctx] = makeCanvas(256, 256);
  drawBadge(bctx, 256);
  const badgeTex = canvasTexture(bc);
  const badge = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.72),
    new THREE.MeshBasicMaterial({ map: badgeTex, transparent: true }));
  badge.position.set(1.45, 2.2, 0.43);
  badge.rotation.z = -0.15;
  root.add(badge);

  // vertical "ABDELLAHI" label on the side
  const [slc, slctx] = makeCanvas(128, 1024);
  drawSideLabel(slctx, 128, 1024);
  const side = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 4.2),
    new THREE.MeshBasicMaterial({ map: canvasTexture(slc) }));
  side.position.set(2.11, 0, 0);
  side.rotation.y = Math.PI / 2;
  root.add(side);

  // bottom info sticker (redrawable)
  const [ic, ictx] = makeCanvas(1024, 96);
  const infoTex = canvasTexture(ic);
  const info = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 0.28),
    new THREE.MeshBasicMaterial({ map: infoTex, transparent: true }));
  info.position.set(0, -2.35, 0.43);
  root.add(info);

  // the hero object inside
  const inner = buildInner(id, ACCENTS[id], photoTex);
  inner.position.z = 0.95;
  inner.scale.setScalar(0.92);
  root.add(inner);

  const redraw = () => {
    drawFront(fctx, 1024, 1312, slide); frontTex.needsUpdate = true;
    drawInfoLabel(ictx, 1024, 96, slide); infoTex.needsUpdate = true;
  };
  redraw();

  root.userData = { id, index, inner, redraw, baseX: index * SPACING };
  return root;
}

/* ------------------------------------------------------------
   The experience
   ------------------------------------------------------------ */
const app = {
  index: 0,
  locked: false,
  caseOpen: false,
  mouse: new THREE.Vector2(0, 0),
  clock: new THREE.Clock(),
  paused: false
};

function initThree() {
  const container = document.getElementById('webgl');
  app.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  app.renderer.setPixelRatio(Math.min(devicePixelRatio, IS_TOUCH ? 1.5 : 2));
  app.renderer.setSize(innerWidth, innerHeight);
  app.renderer.setClearColor(0x09090b);
  app.renderer.outputColorSpace = THREE.SRGBColorSpace;
  app.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  app.renderer.toneMappingExposure = 1.1;
  container.appendChild(app.renderer.domElement);

  app.scene = new THREE.Scene();
  app.camera = new THREE.PerspectiveCamera(35, innerWidth / innerHeight, 0.1, 60);
  app.camera.position.set(0, 0.15, 9.2);

  // studio environment (no external HDR)
  const pmrem = new THREE.PMREMGenerator(app.renderer);
  app.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  // soft studio lights
  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(3, 5, 6);
  const rim = new THREE.DirectionalLight(0x635bff, 1.1);
  rim.position.set(-5, 2, -3);
  const fill = new THREE.AmbientLight(0xffffff, 0.25);
  app.scene.add(key, rim, fill);

  // floor glow
  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 14),
    new THREE.MeshBasicMaterial({
      map: (() => {
        const [c, ctx] = makeCanvas(256, 128);
        const g = ctx.createRadialGradient(128, 64, 4, 128, 64, 120);
        g.addColorStop(0, 'rgba(99,91,255,0.28)');
        g.addColorStop(1, 'rgba(9,9,11,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 256, 128);
        return canvasTexture(c);
      })(),
      transparent: true, depthWrite: false
    })
  );
  glow.rotation.x = -Math.PI / 2;
  glow.position.y = -3.4;
  app.scene.add(glow);

  // photo (with graceful placeholder)
  app.manager = new THREE.LoadingManager();
  const loader = new THREE.TextureLoader(app.manager);
  app.photoTex = loader.load(ASSET_PHOTO,
    (t) => { t.colorSpace = THREE.SRGBColorSpace; },
    undefined,
    () => { app.cases[0].userData.inner.children[0].material.map = placeholderPortrait(); app.cases[0].userData.inner.children[0].material.needsUpdate = true; }
  );
  app.photoTex.colorSpace = THREE.SRGBColorSpace;

  // the cases
  app.slidesGroup = new THREE.Group();
  app.cases = SLIDE_IDS.map((id, i) => {
    const c = buildCase(id, i, app.photoTex);
    app.slidesGroup.add(c);
    return c;
  });
  app.slidesGroup.position.y = -8; // below screen; intro raises it
  app.scene.add(app.slidesGroup);

  app.raycaster = new THREE.Raycaster();
}

/* ---------- interactions ---------- */
function activeCase() { return app.cases[app.index]; }

function pointerNDC(e) {
  return new THREE.Vector2((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
}

function hitsActiveCase(e) {
  app.raycaster.setFromCamera(pointerNDC(e), app.camera);
  return app.raycaster.intersectObject(activeCase(), true).length > 0;
}

function toggleCase(open = !app.caseOpen) {
  if (app.locked || open === app.caseOpen) return;
  app.caseOpen = open;
  const c = activeCase();
  const dir = isRTL() ? 1 : -1;
  const small = innerWidth < 720;
  const dur = REDUCED ? 0.3 : 0.9;
  if (open) {
    gsap.to(c.position, { x: c.userData.baseX + (small ? 0 : dir * 2.0), y: small ? 0.9 : 0, duration: dur, ease: 'expo.out' });
    gsap.to(c.rotation, { y: REDUCED ? 0 : -dir * 0.4, duration: dur, ease: 'expo.out' });
    if (c.userData.id === 'contact' && c.userData.inner.userData.paperPlane && !REDUCED) {
      const p = c.userData.inner.userData.paperPlane;
      gsap.timeline()
        .to(p.position, { x: 0.8, y: 0.6, duration: 0.5, ease: 'power2.out' })
        .to(p.position, { x: 0, y: 0, duration: 0.7, ease: 'power2.inOut' });
    }
    app.panel.open(c.userData.id);
  } else {
    gsap.to(c.position, { x: c.userData.baseX, y: 0, duration: dur, ease: 'expo.out' });
    gsap.to(c.rotation, { y: 0, duration: dur, ease: 'expo.out' });
    app.panel.close();
  }
}
app.toggleCase = toggleCase;

function goTo(i) {
  if (app.locked) return;
  const n = SLIDE_IDS.length;
  const next = (i + n) % n;
  if (next === app.index) return;
  if (app.caseOpen) toggleCase(false);
  app.locked = true;
  app.index = next;

  const dur = REDUCED ? 0.4 : 1.15;
  gsap.to(app.slidesGroup.position, {
    x: -next * SPACING, duration: dur, ease: 'expo.inOut',
    onComplete: () => { setTimeout(() => (app.locked = false), 120); }
  });
  if (!REDUCED) {
    gsap.fromTo(app.camera.position, { z: 9.2 }, { z: 9.9, duration: dur / 2, yoyo: true, repeat: 1, ease: 'sine.inOut' });
  }
  app.scramble.to('AB');
  updateSlideUI();
}

function updateSlideUI() {
  const t = T();
  document.getElementById('progress-current').textContent = String(app.index + 1).padStart(2, '0');
  document.getElementById('progress-total').textContent = String(SLIDE_IDS.length).padStart(2, '0');
  document.getElementById('slide-heading').textContent = t.slides[SLIDE_IDS[app.index]].heading;
}

function initInput() {
  // wheel
  let wheelAcc = 0;
  addEventListener('wheel', (e) => {
    if (app.locked) return;
    if (e.target.closest && e.target.closest('.panel')) return; // let the panel scroll
    wheelAcc += e.deltaY;
    if (Math.abs(wheelAcc) > 40) {
      goTo(app.index + (wheelAcc > 0 ? 1 : -1));
      wheelAcc = 0;
    }
  }, { passive: true });

  // touch swipe
  let touchY = null;
  addEventListener('touchstart', (e) => { touchY = e.touches[0].clientY; }, { passive: true });
  addEventListener('touchend', (e) => {
    if (touchY === null) return;
    const dy = touchY - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 55) goTo(app.index + (dy > 0 ? 1 : -1));
    touchY = null;
  }, { passive: true });

  // keyboard
  addEventListener('keydown', (e) => {
    const inForm = /INPUT|TEXTAREA/.test(document.activeElement?.tagName || '');
    if (e.key === 'Escape') { toggleCase(false); return; }
    if (inForm) return;
    if (['ArrowDown', 'ArrowRight', 'PageDown'].includes(e.key)) { e.preventDefault(); goTo(app.index + 1); }
    if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); goTo(app.index - 1); }
    if (e.key === 'Enter' && document.activeElement === document.body) toggleCase();
  });

  // pointer: tilt target + hover + click on the case
  addEventListener('pointermove', (e) => {
    app.mouse.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    if (!IS_TOUCH) {
      const hit = hitsActiveCase(e);
      app.cursor.hover(hit);
    }
  });
  app.renderer.domElement.addEventListener('pointerdown', (e) => {
    if (hitsActiveCase(e)) toggleCase();
  });

  // buttons
  document.getElementById('btn-next').addEventListener('click', () => goTo(app.index + 1));
  document.getElementById('btn-talk').addEventListener('click', () => goTo(SLIDE_IDS.length - 1));
  document.getElementById('logo').addEventListener('click', (e) => { e.preventDefault(); goTo(0); });

  // language
  document.querySelectorAll('.lang-btn').forEach((btn) =>
    btn.addEventListener('click', () => setLang(btn.dataset.lang)));

  addEventListener('resize', () => {
    app.camera.aspect = innerWidth / innerHeight;
    app.camera.updateProjectionMatrix();
    app.renderer.setSize(innerWidth, innerHeight);
  });

  document.addEventListener('visibilitychange', () => {
    app.paused = document.hidden;
    if (!app.paused) { app.clock.getDelta(); loop(); }
  });
}

/* ---------- language ---------- */
function setLang(code) {
  if (!window.I18N[code]) return;
  LANG = code;
  try { localStorage.setItem('lang', code); } catch (e) { /* ignore */ }
  const t = T();
  document.documentElement.lang = t.htmlLang;
  document.documentElement.dir = t.dir;
  document.querySelectorAll('.lang-btn').forEach((b) =>
    b.classList.toggle('is-active', b.dataset.lang === code));
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const path = el.dataset.i18n.split('.');
    let v = t;
    for (const p of path) v = v?.[p];
    if (typeof v === 'string') el.textContent = v;
  });
  // redraw canvas textures printed on the cases
  document.fonts.ready.then(() => app.cases.forEach((c) => c.userData.redraw()));
  updateSlideUI();
  // rebuild the panel if open
  if (app.panel.isOpen) app.panel.open(activeCase().userData.id);
}

/* ---------- render loop ---------- */
function loop() {
  if (app.paused) return;
  requestAnimationFrame(loop);
  const dt = app.clock.getDelta();
  const t = app.clock.elapsedTime;

  const c = activeCase();
  if (!REDUCED && !app.caseOpen) {
    // tilt toward the mouse (max ~8°) + idle float/breathe
    c.rotation.x += (-app.mouse.y * 0.14 - c.rotation.x) * 0.06;
    c.rotation.y += (app.mouse.x * 0.14 - c.rotation.y) * 0.06;
    c.position.y += (Math.sin(t * 1.1) * 0.07 - c.position.y) * 0.05;
    const s = 1 + Math.sin(t * 0.9) * 0.004;
    c.scale.setScalar(s);
  }

  // per-slide inner animation
  app.cases.forEach((cs, i) => {
    if (Math.abs(i - app.index) > 1) return; // skip offscreen work
    const inner = cs.userData.inner;
    if (!REDUCED) inner.position.y = Math.sin(t * 1.3 + i) * 0.05;
    const ud = inner.userData;
    if (ud.ring && !REDUCED) ud.ring.rotation.z = t * 0.35;
    if (ud.sheen) ud.sheen.offset.x = app.mouse.x * 0.25;
    if (ud.screen) {
      ud.screenTime = (ud.screenTime || 0) + dt;
      if (ud.screenTime > 0.53) {
        ud.screenTime = 0;
        ud.screen.blink = !ud.screen.blink;
        const { ctx } = ud.screen;
        ctx.fillStyle = '#0c0c10';
        ctx.fillRect(0, 0, 512, 320);
        ctx.font = '600 40px "JetBrains Mono", monospace';
        ctx.fillStyle = '#635bff';
        ctx.fillText('~$ ', 30, 80);
        ctx.fillStyle = '#fafafa';
        ctx.fillText('whoami', 95, 80);
        ctx.fillStyle = '#a1a1aa';
        ctx.fillText('abdellahi', 30, 140);
        if (ud.screen.blink) { ctx.fillStyle = '#635bff'; ctx.fillRect(30, 180, 24, 44); }
        ud.screenTex.needsUpdate = true;
      }
    }
  });

  app.cursor.update();
  app.renderer.render(app.scene, app.camera);
}

/* ---------- preloader + intro ---------- */
function runIntro() {
  const pre = document.getElementById('preloader');
  const counter = document.getElementById('preloader-counter');
  const state = { v: 0 };
  let assetsDone = false;
  app.manager.onLoad = () => { assetsDone = true; };
  // if the manager had nothing pending, consider it done
  setTimeout(() => { assetsDone = true; }, 2500);

  const tl = gsap.timeline();
  tl.to(state, {
    v: 100, duration: REDUCED ? 0.4 : 1.5, ease: 'power2.inOut',
    onUpdate: () => (counter.textContent = String(Math.round(state.v)).padStart(3, '0'))
  });

  const finish = () => {
    if (!assetsDone) { setTimeout(finish, 120); return; }
    app.scramble.to('AB');
    const ui = document.getElementById('ui');
    const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
    intro
      .to(pre, { autoAlpha: 0, duration: 0.6, onComplete: () => pre.remove() })
      .to(app.slidesGroup.position, { y: 0, duration: REDUCED ? 0.5 : 1.6 }, '-=0.2')
      .fromTo(app.camera.position, { z: 12.5 }, { z: 9.2, duration: REDUCED ? 0.5 : 1.8 }, '<')
      .add(() => ui.classList.remove('ui-hidden'), '-=0.9')
      .fromTo(['.topbar', '.bottombar'],
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 }, '-=0.8');
  };
  tl.call(finish);
}

/* ---------- WebGL-less fallback ---------- */
function buildFallback() {
  document.body.classList.add('allow-scroll');
  ['webgl', 'ui', 'cursor', 'preloader'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  const t = T(), u = t.ui;
  const main = document.getElementById('fallback');
  const sec = (inner) => `<section>${inner}</section>`;
  const chips = (arr) => `<div class="chips">${arr.map((c) => `<span class="chip">${c}</span>`).join('')}</div>`;
  main.innerHTML =
    sec(`<h1>${t.slides.hero.panel.title}</h1><p>${t.slides.hero.panel.subtitle}</p><p>${t.slides.hero.panel.tagline}</p>
      <p><a href="${LINK_GITHUB}">${u.github}</a> · <a href="${LINK_LINKEDIN}">${u.linkedin}</a> · <a href="${ASSET_CV}" download>${u.downloadCV}</a></p>`) +
    sec(`<h2>${t.slides.about.panel.title}</h2>${t.slides.about.panel.paragraphs.map((p) => `<p>${p}</p>`).join('')}`) +
    sec(`<h2>${t.slides.skills.panel.title}</h2>${t.slides.skills.panel.cards.map((c) => `<p><strong>${c.title}</strong> — ${c.desc}</p>`).join('')}
      ${t.slides.skills.panel.groups.map((g) => `<h4>${g.label}</h4>${chips(g.chips)}`).join('')}`) +
    ['p1', 'p2', 'p3', 'p4'].map((id) => {
      const s = t.slides[id].panel;
      return sec(`<h2>${s.title}</h2><p>${s.desc}</p>${chips(s.tech)}<p>${s.role}</p>`);
    }).join('') +
    sec(`<h2>${t.slides.exp.panel.title}</h2>${t.slides.exp.panel.timeline.map((i) => `<p><strong>${i.title}</strong> — ${i.desc}</p>`).join('')}`) +
    sec(`<h2>${t.slides.contact.panel.title}</h2><p>${t.slides.contact.panel.text}</p>
      <p><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></p>`);
  main.hidden = false;
}

/* ---------- boot ---------- */
function boot() {
  app.scramble = new Scramble(document.getElementById('logo'));
  app.cursor = new Cursor();
  app.panel = new InfoPanel();

  try {
    initThree();
  } catch (err) {
    console.warn('WebGL unavailable, falling back to static version.', err);
    buildFallback();
    return;
  }

  setLang(LANG);
  initInput();
  updateSlideUI();
  document.fonts.ready.then(() => app.cases.forEach((c) => c.userData.redraw()));
  loop();
  runIntro();
}

boot();
