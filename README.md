# VOID INDUSTRIES

A bold, experimental multi-page website built with **pure HTML, CSS, and vanilla JavaScript** — no build step, no framework. Styled in a brutalist aesthetic and animated with GSAP, Lenis, Swiper, and AOS loaded from CDN.

> *An experimental brand studio operating at the intersection of design, code, and culture.*

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Pages](#pages)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Libraries & Animations](#libraries--animations)
- [Design System](#design-system)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [License](#license)

---

## Demo

**Live site:** https://girishlade111.github.io/void-industries/

Or run it locally — open `index.html` directly, or serve the folder:

```bash
# Python
python -m http.server 8000

# Node (if installed)
npx serve .
```

Then visit `http://localhost:8000`.

---

## Features

- **15 pages** — full multi-page site with shared header/nav/footer
- **Brutalist design system** — black/white/acid-green palette, massive display type, hard 2px borders, zero rounded corners, visible structure
- **GSAP + ScrollTrigger** — hero entrances, stagger reveals, pinned horizontal scroll, parallax, stat count-ups, velocity-reactive marquee
- **Lenis smooth scrolling** — buttery scroll synced with GSAP's ticker and ScrollTrigger
- **Swiper carousels** — featured work, testimonials, and lab experiment sliders
- **AOS fade reveals** — lightweight content block animations
- **Fully responsive** — desktop grid layouts collapse to single column; mobile gets a fullscreen slide-in nav drawer
- **Active-link highlighting** — current page marked in the nav automatically
- **Contact form UX** — client-side submit feedback (demo only, no backend)
- **Accessible basics** — semantic HTML, `aria-expanded` on the menu toggle, `prefers-reduced-motion` respected (animations disabled)
- **Zero build tooling** — plain files, CDN scripts, open and go

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, Grid, Flexbox, clamp()) |
| Logic | Vanilla JavaScript (ES6, no modules/bundler) |
| Smooth scroll | Lenis |
| Animation | GSAP 3 + ScrollTrigger |
| Carousel | Swiper 11 |
| Reveals | AOS 2.3 |
| Fonts | Google Fonts — Space Grotesk + Space Mono |
| Hosting | Any static host (GitHub Pages, Netlify, Vercel, …) |

---

## Pages

| # | File | Purpose |
|---|------|---------|
| 1 | `index.html` | Home — hero, stats, manifesto teaser, featured work carousel, capabilities, quotes, CTA |
| 2 | `about.html` | Who we are, principles, stats |
| 3 | `manifesto.html` | Six-position brand manifesto |
| 4 | `lab.html` | Experiments — GSAP horizontal-scroll strip + Swiper gallery |
| 5 | `services.html` | Capabilities, engagement models, pricing tiers |
| 6 | `process.html` | Four-phase process (Dig → Break → Build → Launch) |
| 7 | `work.html` | Projects archive grid |
| 8 | `work-01.html` | Case study — Signal Decay (identity) |
| 9 | `work-02.html` | Case study — Monolith OS (product) |
| 10 | `work-03.html` | Case study — Static Field (web experience) |
| 11 | `journal.html` | Article index |
| 12 | `journal-01.html` | Full article template |
| 13 | `team.html` | Team grid + culture |
| 14 | `contact.html` | Inquiry form + direct contact details |
| 15 | `404.html` | Error page |

---

## Project Structure

```
void-industries/
├── index.html          # Home
├── about.html
├── manifesto.html
├── lab.html
├── services.html
├── process.html
├── work.html
├── work-01.html
├── work-02.html
├── work-03.html
├── journal.html
├── journal-01.html
├── team.html
├── contact.html
├── 404.html
├── css/
│   └── main.css        # Design tokens, layout, components, responsive rules
├── js/
│   ├── main.js         # Nav, active links, Lenis init, form handling
│   ├── animations.js   # GSAP + ScrollTrigger sequences
│   ├── swiper-init.js  # Swiper carousel configs
│   └── aos-init.js     # AOS reveal setup
├── .gitignore
└── README.md
```

---

## Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/girishlade111/void-industries.git
   cd void-industries
   ```

2. **Serve it** (pick one)

   ```bash
   python -m http.server 8000
   # or
   npx serve .
   # or just open index.html in your browser
   ```

3. **Open** `http://localhost:8000` and scroll.

No `npm install` required — all libraries load from CDN.

---

## Libraries & Animations

Scripts load at the end of every page in this order:

```
1. Lenis        — smooth scrolling
2. GSAP         — core animation engine
3. ScrollTrigger— scroll-linked animations
4. Swiper       — carousels
5. AOS          — simple fade-up reveals
6. main.js      — shared setup (runs first after libs)
7. animations.js
8. swiper-init.js
9. aos-init.js
```

### Animation inventory

| Effect | Where | Trigger |
|--------|-------|---------|
| Hero title/label/sub entrance | All page heroes | On load |
| Fade-up / fade-in | Various blocks | Scroll (`data-gsap`) |
| Stagger groups | Stats, card grids, steps | Scroll (`data-gsap-stagger`) |
| Horizontal pinned scroll | Lab experiment strip | Scroll (`data-gsap="horizontal"`) |
| Parallax background | Home hero bg | Scroll scrub |
| Marquee speed-up | Home/404 marquees | Scroll velocity |
| Stat count-up | Stats sections | Scroll into view |
| Process step slide-in | `.step` elements | Scroll |
| AOS block reveals | Cards, splits, forms | Scroll (IntersectionObserver) |
| Swiper sliders | Home, work, journal, lab | Drag / nav arrows |

`prefers-reduced-motion: reduce` disables Lenis, GSAP scroll effects, AOS, and marquee animation.

---

## Design System

Defined as CSS custom properties in `css/main.css`:

```css
--bg:       #0a0a0a;   /* page background */
--fg:       #f5f5f0;   /* primary text */
--accent:   #c8ff00;   /* acid green */
--surface:  #141414;   /* card background */
--border:   #f5f5f0;   /* structural borders */
--font-display: 'Space Grotesk';
--font-mono:    'Space Mono';
```

### Type scale (fluid)

| Class | Size |
|-------|------|
| `.display-xl` | `clamp(3.5rem, 13vw, 12rem)` |
| `.display-l`  | `clamp(2.5rem, 8vw, 7rem)` |
| `.display-m`  | `clamp(2rem, 5vw, 4.5rem)` |
| `.display-s`  | `clamp(1.4rem, 3vw, 2.5rem)` |

### Utility classes

- `.outline-text` / `.outline-text-accent` — stroked display text
- `.mono` — monospace label style
- `.btn` / `.btn--solid` / `.btn--ghost` — buttons with hard-shadow hover
- `.card` / `.card--media` — bordered content blocks
- `.grid-2` / `.grid-3` / `.grid-4` — responsive grids
- `.section`, `.container`, `.marquee`, `.split`, `.stats`, `.steps`

---

## Customization

1. **Colors** — edit the `:root` block in `css/main.css`
2. **Fonts** — change the `@import` at the top of `main.css` and the `--font-*` variables
3. **Nav links** — edit the `<nav class="nav">` block in each HTML file (kept duplicated intentionally for zero-build simplicity)
4. **Animation intensity** — tweak durations/eases in `js/animations.js`
5. **Carousel behavior** — breakpoints and options in `js/swiper-init.js`

---

## Browser Support

Modern evergreen browsers (Chrome, Firefox, Edge, Safari — last 2 major versions). Uses CSS Grid, `clamp()`, `aspect-ratio`, and ES6. No IE support (Lenis/GSAP 3 require modern engines).

---

## License

Free to use for learning and personal projects. The fictional brand content ("VOID INDUSTRIES") is placeholder material — swap in your own.
