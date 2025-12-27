# React + Vite Portfolio Starter

Fully responsive, accessibility-first portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Swiper.

## Prerequisites
- Node.js 18+ and npm.

## Quick Start
1) Install deps
```
npm install
```
2) Run dev server
```
npm run dev
```
3) Lint (optional)
```
npm run lint
```
4) Build
```
npm run build
```
5) Preview built site
```
npm run preview
```

## Netlify Deploy
1) Push this repo to GitHub.
2) In Netlify, "New site from Git" → choose the repo.
3) Build command: `npm run build`
4) Publish directory: `dist`
5) (Optional) Enable Netlify Forms for the contact form.

## Media Guidance
- Add images/videos to `public/projects/` (WebP preferred; MP4 compressed, with poster images).
- Update slide paths in `src/data/projects.js`.
- Every image uses `loading="lazy"`; keep sizes reasonable for performance.

## Customization Notes
- Update SEO tags in `index.html` (title, meta description, OpenGraph).
- Palette tweaks live in `tailwind.config.js` (primary color, surface color).
- Sections/components live under `src/components/` with short comments at the top of each file.

## Folder Map
- `src/data/projects.js` — portfolio entries with slides (image/video mix) and links.
- `public/projects/` — your media assets.
- `src/components/` — UI sections (Header, Hero, About, Projects, Contact, Footer, slider + modal).

## Accessibility
- Semantic landmarks, keyboard-friendly nav, aria labels on sliders/buttons.
- Swiper includes keyboard navigation and aria labels; videos use `preload="metadata"` and poster support.

## Notes
- Tailwind + Framer Motion power the visuals; smooth scroll is enabled globally.
- Replace social/contact links in `Contact.jsx` and `Footer.jsx`.
