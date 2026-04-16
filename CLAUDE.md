# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SellToJosh.com — Lead-generation website for a Central Texas cash home buyer (Josh Isbell). Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Sanity CMS.

**Live site:** https://selltojosh.com/

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (also validates all static pages)
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured. Use `npm run build` to catch type errors and broken pages.

## Architecture

### Page Types

The site has three categories of pages, all using App Router with server components by default:

1. **Static pages** — `/`, `/about`, `/how-it-works`, `/contact`, `/faq`, `/reels`, `/privacy`, `/terms`, `/thank-you`
2. **SEO landing pages (areas)** — `/areas` index + `/areas/[slug]` for 8 cities. Data in `src/data/areas.ts`. Also fetches from Sanity with static fallback.
3. **SEO landing pages (situations)** — `/situations` index + `/situations/[slug]` for 4 situations (foreclosure, inherited, military PCS, divorce). Data in `src/data/situations.ts`. Static only, no Sanity integration.

Both dynamic page types use `generateStaticParams()` for SSG at build time.

### Data Layer — Dual Source with Fallback

Every page that queries Sanity CMS falls back to static data files in `src/data/` when:
- Sanity is not configured (missing project ID)
- Sanity returns empty results
- Sanity fetch fails

The site works 100% without Sanity configured. Static data files are the source of truth for development.

Key data files:
- `src/data/siteConfig.ts` — Phone, email, business name, legal entities, service areas list
- `src/data/areas.ts` — Exports `serviceAreas[]` (8 cities) and `cityData` (rich content per city)
- `src/data/situations.ts` — Exports `situations[]` (4 types) and `situationData` (rich content per situation)
- `src/data/faqs.ts` — 15 general Q&A entries
- `src/data/reels.ts` — YouTube video data (currently placeholder)

### Lead Form Pipeline

`LeadForm.tsx` (client component) → POST `/api/leads` → Resend email to SelltoJosh@gmail.com

The form has 3 variants: `default`, `compact`, `full`. It optionally captures a reCAPTCHA v3 token. The API route (`src/app/api/leads/route.ts`) validates fields, verifies reCAPTCHA if configured, and sends a formatted HTML email via Resend. No CRM or database integration — email only.

### Sanity CMS

Studio accessible at `/studio` (catch-all route). Schemas in `sanity/schemas/`. Fetch functions with fallback logic in `sanity/lib/fetch.ts`. GROQ queries in `sanity/lib/queries.ts`.

Content types: siteSettings (singleton), page (SEO meta), testimonial, faq, reel, serviceArea.

### SEO Infrastructure

- `src/app/sitemap.ts` — Generates URLs for all static pages, 8 city pages, 4 situation pages
- `src/app/robots.ts` — Allows all crawlers; disallows `/api/`
- `LocalBusinessSchema.tsx` — JSON-LD LocalBusiness structured data in root layout
- Situation pages include FAQPage JSON-LD schema
- Google Search Console verification meta tag in root layout metadata

### Security Headers

Configured in `next.config.ts` for all routes: CSP (allows Google reCAPTCHA, GTM, YouTube, Sanity CDN), X-Content-Type-Options, X-Frame-Options: DENY, Referrer-Policy.

## Environment Variables

```bash
# Required for lead form emails
RESEND_API_KEY=re_...

# Optional — reCAPTCHA v3 spam protection
RECAPTCHA_SECRET_KEY=...
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...

# Optional — Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Optional — Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-...
```

## Styling

Tailwind CSS v4 with PostCSS plugin (`@tailwindcss/postcss`). Brand colors defined as CSS variables in `globals.css`:
- `--navy` / `--navy-dark` — Primary brand
- `--orange` / `--orange-hover` — CTA buttons
- Utility classes: `.btn-primary`, `.btn-secondary`, `.section-padding`, `.container-custom`

## SEO Agent (standalone)

`agent/seo-agent.js` — Node.js script (separate from Next.js) that pulls Google Search Console data and generates weekly Markdown performance reports. Uses service account credentials at `secrets/gsc-credentials.json`. Reports saved to `reports/` directory.

## Content Conventions

- Fort Hood is referred to as "Fort Hood (formerly Fort Cavazos)" throughout the site — maintain this format consistently.
- Service areas: Killeen, Harker Heights, Temple, Belton, Copperas Cove, Waco, Salado, Georgetown.
- The `@/*` path alias maps to `./src/*`.
