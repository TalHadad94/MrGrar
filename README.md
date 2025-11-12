# Mr Grar — Towing & Recovery Website

A fast, lightweight **RTL (Hebrew)** marketing site for a local towing & recovery service in Be’er Ya’akov, Israel. Built with **vanilla HTML/CSS/JS**. The site is SEO‑ready, responsive, and optimized for quick calls via a sticky call‑to‑action bar. The home page includes a **click‑only** steps slider (no autoplay).

Live site: https://www.mrgrar.co.il/

## Features
- Static site, no frameworks, minimal JavaScript
- RTL layout and Heebo font
- Sticky CTA bar: two phone buttons + WhatsApp
- Steps slider driven by click only (stable and accessible)
- Blog under `/blog/` (list + articles)
- SEO: `title`/`description`/`canonical`, Open Graph, and Schema.org JSON‑LD (`LocalBusiness`, `BlogPosting`)
- Responsive: consistent image aspect ratio in slides
- Accessibility: visible focus states, semantic HTML, meaningful image `alt`

## Quick Start (Local)
No build step — just serve the folder.

**VS Code — Live Server**
1. Open the folder in VS Code.
2. Install the “Live Server” extension.
3. Right‑click `index.html` → **Open with Live Server**.

**Python**
```bash
python -m http.server 5173
# open http://localhost:5173
```

**Node**
```bash
npx serve .
# or
npx http-server -p 5173 .
```

## Editing Content
- **Phone numbers & WhatsApp:** sticky CTA in `index.html` and buttons in `contact.html` (`tel:`/`wa.me`).
- **Brand text:** `.brand-text` (desktop) and `.brand-text-phone` (mobile) in the header.
- **Slides:** inside `<section class="steps">` in `index.html`. Behavior is in `assets/main.js` (`initStepsSlider()`, click-only).
- **Blog:** add new posts under `/blog/` and link them from `/blog/index.html`.
- **SEO:** set a unique `title`, `meta description`, and `link rel="canonical"` on each page. Keep JSON‑LD up to date.

## Styling Notes
- Design tokens live in `:root` (colors, radius, shadow, container width).
- Sticky CTA aligns to the page edges using `padding-inline: max(16px, calc((100vw - var(--container)) / 2 + 16px))`.
- Slide images are stabilized with a fixed aspect ratio and `object-fit: cover`.

## Deployment (GitHub Pages)
1. Push the repo to GitHub.
2. Go to **Settings → Pages** and choose **Deploy from a branch**. Select the `main` branch and the root folder.
3. (Optional) Custom domain: add your domain in Pages settings and commit a `CNAME` file at the repo root containing:
   ```
   www.mrgrar.co.il
   ```
4. Update your DNS according to GitHub’s documentation.

The site also works on any static host (Netlify, Cloudflare Pages, Vercel, S3/CloudFront, etc.).

## Checklist (Perf & Accessibility)
- [ ] Meaningful `alt` text for every image
- [ ] Keyboard reachable controls with visible `:focus`
- [ ] Unique `title` and `description` per page
- [ ] `loading="lazy"` on non‑critical images
- [ ] Optimized images (`.jpg`/`.webp`)
- [ ] Validate JSON‑LD with Google’s Rich Results Test

## Contributing
- Keep HTML semantic and clean.
- Reuse existing CSS and avoid heavy libraries.
- Test on small screens (≤360px) and RTL.

## License
© Mr Grar. All rights reserved.  
This repository contains proprietary content and assets. Do not copy, redistribute, or reuse without written permission.
