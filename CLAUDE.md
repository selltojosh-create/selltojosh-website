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

The form has 3 variants: `default`, `compact`, `full`. It uses React 19 `useId()` for unique field IDs, allowing multiple forms per page without duplicate HTML IDs. It optionally captures a reCAPTCHA v3 token. On successful submit, it pushes a `generate_lead` GA4 event to the GTM dataLayer before redirecting to `/thank-you`.

The API route (`src/app/api/leads/route.ts`) applies in-memory rate limiting (5 requests per 15 minutes per IP via `src/lib/rate-limit.ts`), validates fields, verifies reCAPTCHA if configured, and sends a formatted HTML email via Resend. Returns 429 with `Retry-After` header when rate limited. No CRM or database integration — email only.

LeadForm appears on:
- Homepage hero (compact, dark)
- Contact page (full)
- All 8 city pages — hero (compact, dark) + mid-page section after FAQs (default, dark)
- All 4 situation pages — hero (compact, dark) + mid-page section after FAQs (default, dark)

### Sanity CMS

Studio accessible at `/studio` (catch-all route). Schemas in `sanity/schemas/`. Fetch functions with fallback logic in `sanity/lib/fetch.ts`. GROQ queries in `sanity/lib/queries.ts`.

Content types: siteSettings (singleton), page (SEO meta), testimonial, faq, reel, serviceArea.

### SEO Infrastructure

- `src/app/sitemap.ts` — Generates URLs for all static pages, 8 city pages, 4 situation pages
- `src/app/robots.ts` — Allows all crawlers; disallows `/api/`
- `LocalBusinessSchema.tsx` — JSON-LD LocalBusiness structured data in root layout with AggregateRating (5.0, 1 review from Brandon Dixon) and sameAs social links
- City pages include per-city LocalBusiness schema + FAQPage JSON-LD schema (6 FAQs per city, 48 total)
- Situation pages include FAQPage JSON-LD schema (6 FAQs per situation, 24 total)
- Google Search Console verification meta tag in root layout metadata

### SEO Title/Meta Strategy

- Root layout template: `%s | Sell to Josh` — automatically appends brand to all child page titles
- **Do NOT include `| Sell to Josh` in any child page metaTitle** — the template handles it
- Homepage (`src/app/page.tsx`) is in the same segment as the layout, so the template does NOT apply — homepage title must include the brand name directly
- All title tags are ≤60 chars (including template suffix)
- All meta descriptions are ≤155 chars
- City pages use pattern: `Sell My House Fast {City} TX for Cash`
- Waco and Georgetown exclude Fort Hood references (controlled by `noFortHoodSlugs` in `areas/[slug]/page.tsx`)
- OpenGraph titles must include `| ${siteConfig.name}` explicitly since OG doesn't use the layout template

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
- Each city page has 500+ words of unique content + 6 city-specific FAQs in `src/data/areas.ts`.
- Testimonials use Brandon Dixon's real review — do not add placeholder/fabricated testimonials.
- Social profiles: Facebook (profile.php?id=61573261776960), Instagram (@selltojosh), YouTube (@FlippinTexas).

## ADA / WCAG 2.1 AA

- All decorative SVGs must have `aria-hidden="true"` — 28 SVGs across 12 files verified as of 2026-04-17
- Breadcrumb separators must have `aria-hidden="true"`
- Star ratings use `role="img"` + `aria-label="5 out of 5 stars"` on container, `aria-hidden="true"` on individual SVGs
- reCAPTCHA badge is hidden from assistive tech via MutationObserver in root layout
- LeadForm uses `useId()` for unique field IDs — safe to render multiple forms per page without duplicate ID violations

## Session Log — 2026-04-17

**Commit `4b2a79b`:** SEO: fix duplicate titles, tighten meta, add AggregateRating schema, update social URLs, ADA fixes (16 files, 86 insertions, 89 deletions)

**Commit `f8ba5ec`:** Lead gen: add forms to city/situation pages, GA4 conversion event, rate limiting, ADA SVG fixes (18 files, 105 insertions, 37 deletions)
- GA4 `generate_lead` event pushed to dataLayer on successful form submit
- LeadForm added to all 8 city pages and 4 situation pages (mid-page section after FAQs)
- React `useId()` used to generate unique form field IDs (fixes duplicate ID issue with multiple forms)
- Rate limiting added to `/api/leads` — 5 requests per 15 min per IP, 429 response with Retry-After
- 28 decorative SVGs fixed with `aria-hidden="true"` across 12 files
