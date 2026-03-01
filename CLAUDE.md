# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (auto-opens at localhost:5173, HMR enabled)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

No lint or test scripts are configured.

## Architecture

This is a React SPA for Trinity Christs Rugby Union Football Club (TCRUFC). It uses **Vite**, **React Router v6**, **Tailwind CSS**, and **Motion** (Framer Motion).

**Routing** is defined in `src/main.jsx`. All pages share a `Layout` wrapper (`src/components/Layout.jsx`) that renders the `Header` and `<Outlet>`. Active routes: `/`, `/about`. Routes for `/gallery`, `/alumni`, `/fixtures`, `/events` are commented out (see Hidden Pages below).

**State management** is local only (`useState`). No global state library is used.

**All content** (fixtures, alumni profiles, gallery photos, events) is defined as plain arrays/objects directly inside the relevant page component — there is no backend or CMS.

## Styling

Custom club colors are defined in `tailwind.config.js` and must be used for brand consistency:
- `tcrufc-red` → `rgb(200, 16, 46)`
- `tcrufc-blue` → `rgb(0, 51, 160)`
- `tcrufc-gold` → `rgb(255, 205, 0)`

Font: Inter (loaded from Google Fonts in `index.html`).

## Animations

`src/components/AnimatedSection.jsx` is the reusable scroll-triggered animation wrapper. It supports `direction` (`up`, `down`, `left`, `right`) and `delay` props. Use `whileInView` with `once: true` for all scroll animations — this is already set in `AnimatedSection`. The standard easing curve used project-wide is `[0.25, 0.4, 0.25, 1]`.

## Static Assets

Images must be placed in `/public/` to be served correctly (e.g., `/public/gallery/`, `/public/alumni/`). Reference them by their URL path (e.g., `/gallery/Team1888.png`), not as imports.

The PDF `public/teams-down-the-years.pdf` is rendered inline on the home page via PDF.js (loaded from CDN). The loader is `src/utils/loadPdfJs.js` (singleton promise, safe to call from multiple components). The full viewer component is `src/components/TeamsViewer.jsx`.

## Hidden Pages — How to Restore

Four pages are hidden but fully intact. To restore any of them, uncomment in **all three** places:

**1. `src/main.jsx`** — uncomment the import and the route object
**2. `src/components/Header.jsx`** — uncomment the `<Link>` block for that page
**3. `src/pages/Home.jsx`** — uncomment the relevant CTA button(s) in the hero and/or Join Our Legacy sections

| Page | Route | Import | File |
|------|-------|--------|------|
| Gallery | `/gallery` | `Gallery` | `src/pages/Gallery.jsx` |
| Alumni | `/alumni` | `Alumni` | `src/pages/Alumni.jsx` |
| Fixtures | `/fixtures` | `Fixtures` | `src/pages/Fixtures.jsx` |
| Events | `/events` | `Events` | `src/pages/Events.jsx` |

### Removed Home sections (also commentable back in)

- **Heritage section** ("A Legacy Built on Tradition") — commented out in `src/pages/Home.jsx` with label `REMOVED: Heritage`
- **Gallery preview** ("Through The Years") — commented out in `src/pages/Home.jsx` with label `REMOVED: "Through The Years"`
- Restoring these also requires uncommenting `StaggerContainer`, `StaggerItem`, `ScaleOnView`, `ChevronRightIcon` imports (noted in the commented import block at the top of `Home.jsx`)
