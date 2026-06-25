# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Static export to /out (next build with output: 'export')
npm run lint     # ESLint
```

No test suite exists in this project.

## Architecture

This is a **Next.js 16 (App Router) static export** site for SIE Diving Colombia (`siediving.com`). Build output goes to `/out` — no server-side rendering at runtime.

**i18n via URL segments:** All user-facing pages live under `src/app/[lang]/`. The root `src/app/page.tsx` redirects to the default locale (`es`). Supported locales: `es`, `en`, `fr`, `de`, `zh`, `ja` (defined in `src/i18n.ts`). Translations are flat JSON files in `src/dictionaries/[locale].json`. Load them with `getDictionary(lang)` from `src/i18n.ts`.

**Data is static, not fetched from a DB:**
- Products → `src/data/products.ts` (`Product` interface + `products[]` array). Product detail fields have `Es`/`En` suffix variants for bilingual content.
- Destinations → `src/lib/destinations.tsx` (`DESTINATIONS[]`). Also uses `Es`/`En` suffix fields.
- News/blog posts → `src/lib/posts.ts`.

**Styling:** CSS Modules per-component/page (e.g., `page.module.css`, `dest.module.css`, `EquipmentCarousel.module.css`). Global styles in `src/app/globals.css`.

**Key pages:**
- `/[lang]/` — Homepage (hero, equipment carousel, expeditions)
- `/[lang]/destinos/[slug]` — Destination detail pages (each has its own `page.tsx` + `dest.module.css`)
- `/[lang]/tienda/[categoria]` — Product category listing
- `/[lang]/tienda/[categoria]/[id]` — Product detail page
- `/[lang]/cursos-padi/[course]` — PADI course pages
- `/[lang]/expediciones` — Expeditions listing (has client component `ExpedicionesClient.tsx`)

**Images:** Stored in `public/images/`. Next.js image optimization is disabled (`unoptimized: true`) for static export compatibility.

**GA4:** Hardcoded as `G-75EZQXR6T6` in `src/app/layout.tsx` root layout.

**Important:** This project uses Next.js 16 which may have breaking changes vs. earlier versions. Check `node_modules/next/dist/docs/` for current API docs before writing Next.js-specific code.
