# CLAUDE.md

Snapshot of selltojosh.com current state for Claude Code sessions. Updated 2026-05-15.

## Project Overview

SellToJosh.com is a lead-generation site for Josh Isbell, a Texas licensed real estate broker (TREC #597248-B) operating as a principal cash home buyer in Central Texas. Properties are purchased by **TrippCo Holdings LLC**, **Red Belly Holdings LLC**, or other entities owned by **Joshua Isbell**. The site is intentionally not a brokerage site — Josh acts as a principal buyer in every transaction arranged here, never as an agent.

Built with Next.js 16 App Router, deployed via Vercel from the GitHub `main` branch (auto-deploy on push). Sanity CMS is wired in but every page falls back to static data files in `src/data/`, so the site works 100% without Sanity configured.

**Live site:** https://www.selltojosh.com (apex `selltojosh.com` 307-redirects to `www`)

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (validates all 35 static pages)
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework. Use `npm run build` to catch type errors and broken pages.

## Current Tech Stack

- **Next.js 16.2.2** (App Router, Turbopack-aware)
- **React 19.2.3**
- **TypeScript 5**
- **Tailwind CSS 4** (PostCSS plugin `@tailwindcss/postcss`)
- **Sanity CMS 5.4.0** (Studio at `/studio`, fetch with static fallback)
- **Resend 6.7.0** (lead notification emails to `SelltoJosh@gmail.com`)
- **Vercel** (production deploy from `main` branch)
- **Google Tag Manager** container `GTM-5L25X4L6` — **Version 4 (Live)**, published by selltojosh@gmail.com on 2026-05-15 (fixes the `generate_lead` trigger that never fired in V3 — see Tracking section)
- **CallRail** company ID `180352688`, swap key `b4664efee791deafebc4` — live in production via GTM (CSP fix `ec4cd57` was required for swap.js to actually load)
- **reCAPTCHA v3** (optional — activates if env vars present)

## Architecture (high level)

- **Static pages**: `/`, `/about`, `/how-it-works`, `/contact`, `/faq`, `/reels`, `/privacy`, `/terms`, `/thank-you`, `/buyer-disclosure`, `/accessibility`, `/sell-as-is`, `/cash-offer`, `/how-our-offer-works`
- **SSG dynamic routes**: `/areas/[slug]` (10 cities), `/situations/[slug]` (4 situations) — both use `generateStaticParams()` and shared templates
- **Index pages**: `/areas`, `/situations`
- **API routes**: `/api/leads` (POST — lead intake)
- **Sanity Studio**: `/studio/[[...tool]]` (catch-all, blocked from indexing in robots.ts)
- **35 static pages total** generated at build time

Every Sanity-backed page falls back to `src/data/*.ts` static files when Sanity is missing/empty/erroring. Static data is the source of truth for development.

## Compliance Posture

- **TREC license:** Josh Isbell, Texas Licensed Real Estate Broker, **#597248-B**
- **Buying entities:** TrippCo Holdings LLC, Red Belly Holdings LLC, or other entities owned by Joshua Isbell
- **Site-wide TREC 535.144 disclosure footer** with broker license info, entity disclosure, principal-buyer notice + Legal disclosures nav (commit `4d6c856`). Contrast verified at 8:1 (WCAG AAA).
- **`/buyer-disclosure` page** with full TREC 535.144 disclosure language (commit `5637c5e`)
- **`/privacy`** includes "Tracking and Analytics" section disclosing Google Ads, GTM, GA, and call tracking usage with opt-out link (commit `b198308`)
- **`/terms`** includes "No Agency Relationship" section with multi-entity language and link to /buyer-disclosure (commits `b198308`, `0125de0`)
- **`/accessibility`** statement page targeting WCAG 2.1 Level AA (commit `2068fa7`)
- **No IABS form on the site** (intentional — site is not a brokerage; including IABS would misrepresent transactions)
- **No Isbell Realtors / Isbell Properties branding** on this site (intentional — separate brand)

## Lead Pipeline

- Form submissions POST to **`/api/leads`** (`src/app/api/leads/route.ts`)
- Validation, length limits, in-memory rate limit (5 req/15min/IP via `src/lib/rate-limit.ts`), optional reCAPTCHA verify
- Email notification via **Resend** to **`SelltoJosh@gmail.com`** (`leads@selltojosh.com` from address)
- Email body includes a **Quick Actions** block:
  - Call: working `tel:` link
  - Text: copyable styled `<div>` with personalized pre-filled SMS body Josh can triple-tap-select and paste into his SMS app
  - Reply to this email to follow up
- **`sms:` protocol links don't work in Gmail (web or mobile)** — confirmed and replaced with copyable text block (commits `66e2577`, `08078e7`, `1a4e289`)
- On successful submit, `LeadForm` pushes `generate_lead` event to `window.dataLayer` (with optional UTM params) and redirects to `/thank-you`
- **No CRM, no Twilio, no Zapier, no SMS service** — intentional while KeepSimpleCRM is in development. Speed-to-lead achieved via Gmail push notifications on Josh's phone.
- **`LeadForm` is a single shared component** used on 13+ pages (homepage, contact, all 4 situation pages, all 10 city pages, /sell-as-is, /cash-offer). Variants: `default`, `compact`, `full`. Optional `submitText` prop.

## Landing Pages for Google Ads (Tier 1)

Three new pages built 2026-05-02 for the Google Ads launch:

- **`/sell-as-is`** — "Sell House As-Is" ad group destination (commit `c868da9`). 9 sections, hero with form, 6-card "Houses We Buy" grid, 2-column comparison, 6 FAQs. Form submits "GET MY OFFER".
- **`/cash-offer`** — "Cash Home Buyers" ad group destination (commit `d163a94`). 9 sections, hero with form, 4-step process, 3-column comparison (Josh / Agent / iBuyer), 6 FAQs. Form submits "REQUEST MY OFFER".
- **`/how-our-offer-works`** — Trust anchor / process page (commit `24592f4`). No form, content-only. 7 sections, "lock-the-offer" promise callout. Linked from /sell-as-is and /cash-offer.

All three indexable, in sitemap.xml at priority 0.9 (form pages) / 0.8 (trust page), and internally linked from the existing 10 city pages and 4 situation pages via shared template edits (commit `430534f`).

## Accessibility Posture

WCAG 2.1 Level AA targeted. Documented good-faith effort:
- **`/accessibility` statement** live with 2-business-day SLA on accessibility-related contact (commit `2068fa7`)
- **Lighthouse Accessibility scores 96+** verified on tested pages (May 2026)
- **Skip-to-main link** on every page (`Header.tsx:23`, focus-revealed)
- **Semantic HTML**: 1 `<h1>` per page, logical heading hierarchy, `<article>` for cards, `<ul>/<li>` for lists, `<table>` with `<thead>`/`<tbody>`/`<th scope="col">` for comparison tables
- **Form labeling**: `<label htmlFor>`, `aria-required`, `aria-describedby`, `inputMode`, `autoComplete`, `role="alert"` + `aria-live="polite"` for errors (commit `7c3be02`)
- **Focus indicators**: `*:focus-visible { outline: 2px solid var(--navy); outline-offset: 2px }` in `globals.css`
- **Touch targets**: critical UI ≥44×44px (forms, CTAs, sticky bar, ReelsCarousel arrows/dots — commit `cc38952`); all interactive elements ≥24×24 (WCAG AA min)
- **Decorative SVGs/emojis** marked `aria-hidden="true"` (28 SVGs verified across 12 files in commit `f8ba5ec`, plus additional in subsequent commits)
- **TestimonialCard** uses semantic `<blockquote>` + `<cite>` (commit `cc38952`)
- **Mobile menu** has state-aware `aria-label` ("Open navigation menu" / "Close navigation menu")

### Known contrast exceptions (intentionally not addressed)

Brand identity is preserved. Documented as known:

| Element | Measured | Required | Used in |
|---|---|---|---|
| LeadForm input borders (`border-gray-300` on white) | 1.47:1 | 3:1 (UI 1.4.11) | All form fields |
| Footer `<hr>` separator (`border-gray-600` on navy) | 1.56:1 | 3:1 (UI 1.4.11) | Footer disclosure separator |
| `text-gray-500` on white (helper text, testimonial location) | 4.83:1 | 4.5:1 | Marginal pass |

Defensible: brand palette is a documented design constraint; alternate communication channels (phone, email) explicitly invited in /accessibility.

## Tracking and Analytics (current state)

Updated 2026-05-15. **State:**

| System | Status |
|---|---|
| Google Tag Manager | **Live in production** — container `GTM-5L25X4L6`, **Version 4 (Live)** published 2026-05-15 by selltojosh@gmail.com. Loaded conditionally via `NEXT_PUBLIC_GTM_ID` in `layout.tsx`. |
| Google Analytics 4 | **Live via GTM** — "GA4 Configuration" tag |
| Google Ads conversion tracking | **Live (fixed in V4)** — tag renamed "GA4 - Thank You Conversion" → **"GA4 - Generate Lead Conversion"**. Trigger renamed "Thank You Page View" → **"Generate Lead Event"** and switched from Page View on `/thank-you` to a **Custom Event trigger on the `generate_lead` dataLayer event**. Reason for fix: Next.js App Router client-side routing doesn't generate real Page View events on `router.push('/thank-you')`, so the V3 Page View trigger never fired in production — the conversion path was broken between 2026-05-03 (V3 publish) and 2026-05-15 (V4 publish) despite GTM Preview showing it work. Conversion action `generate_lead` (ID `528683826`) in Google Ads, sourced from GA4, Primary, $50 default value, one-per-click, 30-day window. |
| CallRail | **Live (fixed in commit `ec4cd57`)** — "CallRail Swap Script" tag (company `180352688`, swap key `b4664efee791deafebc4`). CSP allowlists `cdn.callrail.com`, `js.callrail.com`, and `*.callrail.com` (commits `ae4ffdf`, `ec4cd57`). The swap script loads from `js.callrail.com`; before `ec4cd57` only `cdn.callrail.com` was allowlisted, so the script was CSP-blocked and phone-number swapping did not actually work on production — despite the V3 GTM publish appearing complete. Number swap working on all pages post-`ec4cd57`. |
| CallRail ↔ Google Ads integration | **Live** — verified active 2026-05-15. Separate conversion actions configured for first-time vs repeat callers. Integration-side filter: **60-second minimum call duration** before a call counts as a conversion. |
| Facebook Pixel / Meta | Not installed |
| Hotjar / Mixpanel / Segment / PostHog / Sentry / Datadog | None |
| reCAPTCHA v3 | Wired but optional (activates if env vars present) |

**Three live GTM tags:** GA4 Configuration, GA4 - Generate Lead Conversion, CallRail Swap Script.

**`dataLayer` push:** `LeadForm.tsx:69-75` pushes `event: 'generate_lead'` with `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` (all conditional) on successful form submit.

**End-to-end conversion path (post-V4):** ad click → form submit → `LeadForm` dataLayer push → "Generate Lead Event" custom-event trigger → "GA4 - Generate Lead Conversion" tag → GA4 → Google Ads conversion. The 2026-05-03 GTM Preview run did see the event fire (Preview attaches to the dataLayer regardless of trigger config), which masked the fact that the production tag's Page View trigger never fired on Next.js client-side `/thank-you` navigation.

## Google Ads Campaign State (2026-05-15)

Snapshot of the account after the 2026-05-15 cleanup pass:

- **Active campaign (sole):** Bell County Flagship at **$100/day**
- **Paused:** "Sell House As-Is — Bell County", "Cash Home Buyers — Bell County" (consolidated into Flagship)
- **Optimization score:** 68.5% → **77.1%**
- **Match types:** Broad → **Phrase/Exact** on top 10 keywords
- **Negative keywords:** **+43 added**
- **High-intent keywords:** **+15 added**
- **Sitelinks:** 6 total
- **Phone Call conversion count:** Every → **One**
- **Location targeting:** confirmed **Presence-only**
- **Bid strategy:** still on default; switch to **Maximize Conversions** is gated on accumulating **5–10 recorded conversions** in the account first

## Environment Variables

```bash
# Required for lead form emails
RESEND_API_KEY=re_...

# Optional — reCAPTCHA v3 spam protection
RECAPTCHA_SECRET_KEY=...
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...

# Optional — Sanity CMS (site works without these)
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Optional — Google Tag Manager (production has GTM-5L25X4L6)
NEXT_PUBLIC_GTM_ID=GTM-...
```

`.env.local.example` documents only Sanity vars — **gap**: should be expanded to document Resend, reCAPTCHA, and GTM vars too.

## SEO Infrastructure

- `src/app/sitemap.ts` — generates 29 URLs (homepage, 10 cities, 4 situations, 14 static)
- `src/app/robots.ts` — allows all crawlers; disallows `/api/`, `/studio`
- `LocalBusinessSchema.tsx` — JSON-LD LocalBusiness schema in root layout with AggregateRating (5.0, 1 review from Brandon Dixon) and `sameAs` social links
- City pages: per-city LocalBusiness schema + FAQPage JSON-LD (6 FAQs each, 60 total)
- Situation pages: FAQPage JSON-LD (6 FAQs each, 24 total)
- **Title template** in root layout: `%s | Sell to Josh` — child page metadata.title should NOT include the brand name (template appends it). Homepage is exception (same segment as layout) — must include brand directly. OG titles need `| ${siteConfig.name}` explicit since OG doesn't use the template.
- **City title pattern**: `Sell My House Fast {City} TX for Cash`
- **Waco, Georgetown, Lampasas** exclude Fort Hood references (controlled by `noFortHoodSlugs` array in `areas/[slug]/page.tsx`)

## Conventions and Style

- **Component reuse over duplication**: `LeadForm`, `FAQAccordion`, `TestimonialCard`, service area pill grid all reused across 13+ pages
- **Single shared templates** for `/areas/[slug]` and `/situations/[slug]` — change once, deploys to all 10 cities / 4 situations
- **Compliance-safe ad copy phrases** on landing pages (preserved verbatim):
  - "No agent commissions when selling directly to us"
  - "Fast closings may be possible"
- **Banned phrases** in ad and site copy:
  - "We Buy Ugly Houses" (HomeVestors trademark)
  - Guaranteed-outcome language: "guarantee", "always", "every time"
- **Multi-entity language** wherever entities are named:
  > "TrippCo Holdings LLC, Red Belly Holdings LLC, or other entities owned by Joshua Isbell"
- **Name conventions**:
  - "Josh Isbell" — brand contexts (footer, hero, testimonials)
  - "Joshua Isbell" — legal entity ownership references (TREC, LLC ownership)
  - Both correct; do not normalize
- **License formatting**: `597248-B` always wrapped in `<span className="whitespace-nowrap">` so it never breaks across lines
- **Em dashes** are real U+2014 characters, not `--`
- **Fort Hood reference**: "Fort Hood (formerly Fort Cavazos)" maintained consistently
- **Service areas (10)**: Killeen, Harker Heights, Temple, Belton, Copperas Cove, Waco, Salado, Georgetown, Nolanville, Lampasas
- **Path alias**: `@/*` maps to `./src/*`
- **Testimonials**: Brandon Dixon's real review only — no placeholder/fabricated testimonials

## Active Follow-ups / Known Issues

- **22 GitHub Dependabot vulnerabilities** (10 high, 12 moderate) on `main` branch — predate Apr 2026, not blocking deployment
- **`/how-it-works` vs `/how-our-offer-works` overlap** — both are process pages with similar intent. Defer consolidation until traffic data shows which performs better.
- **JSON-LD FAQ schema** on `/sell-as-is`, `/cash-offer`, `/buyer-disclosure` — not yet added because the project's PreToolUse security hook blocks new inline JSON-LD injection. Existing city/situation pages have it via pre-hook code. Resolve via the `next/script` component pattern when prioritized.
- **Brand orange + brand navy contrast** on certain non-text elements (form input borders, footer separator) intentionally unchanged for brand identity preservation. Documented in /accessibility statement context.
- **`.env.local.example`** does not document non-Sanity env vars (Resend, GTM, reCAPTCHA) — should be expanded for new contributors.
- **Outstanding** (as of 2026-05-15):
  - GBP (Google Business Profile) phone update to **254-401-4216** — carried over from 2026-05-03
  - Google Ads advertiser verification doc upload (21–30 day grace period) — still pending
  - **Image assets for RSAs** (responsive search ads) — needed before scaling creative
  - **Switch to Maximize Conversions bid strategy** — gated on 5–10 recorded conversions in the account
- **Resolved 2026-05-15:**
  - GTM trigger bug — `generate_lead` switched from Page View on `/thank-you` to Custom Event on the dataLayer event (GTM V4 publish). Conversion path was silently broken from 2026-05-03 (V3 publish) until V4.
  - CallRail CSP block — `https://js.callrail.com` added to `script-src` in `next.config.ts` (commit `ec4cd57`). Number swap was non-functional on production before this fix despite the V3 GTM publish.
  - CallRail ↔ Google Ads integration — verified live; first-time vs repeat caller conversion actions configured; 60s min-duration filter set.
  - Google Ads campaign cleanup — two campaigns paused, match types tightened (Broad → Phrase/Exact on top 10), +43 negatives, +15 high-intent keywords, 6 sitelinks, Phone Call conversion count Every → One, Presence-only targeting confirmed. Sole active campaign: Bell County Flagship at $100/day. Optimization score 68.5% → 77.1%.

## Session Log — 2026-05-03 evening to 2026-05-15 (reverse chronological)

```
ec4cd57  fix(csp): allowlist js.callrail.com in script-src  (2026-05-15)
0f8225a  docs: update CLAUDE.md with GTM v3, CallRail, and Google Ads conversion go-live  (2026-05-03 PM)
5f21711  feat(leads): add utm_medium, utm_content, utm_term to dataLayer push for full GTM attribution  (2026-05-03 AM)
```

Non-git work on 2026-05-15:
- GTM container published **Version 4** — trigger fix for `generate_lead` (Page View → Custom Event), tag and trigger renamed.
- Google Ads campaign cleanup — see "Google Ads Campaign State" section above.
- CallRail ↔ Google Ads integration configured and verified.

## Session Log — 2026-05-02 to 2026-05-03 (18 commits, reverse chronological)

```
ae4ffdf  fix(csp): allowlist CallRail domains for script/style/img/connect
1a4e289  fix(leads): replace dead sms: link with copyable message block (Gmail filters sms: protocol)
08078e7  fix(leads): don't HTML-escape sms: link href in lead emails
66e2577  feat(leads): add SMS quick-action link to lead emails + update thank-you copy
2068fa7  feat(a11y): add /accessibility statement page, footer link, sitemap
cc38952  fix(a11y): touch targets + ARIA polish
7c3be02  fix(a11y): forms — aria-required, inputMode, aria-describedby on LeadForm
780b4d6  fix(a11y): semantic HTML — convert div cards to article, scenario divs to ul/li
1c7a402  fix: improve link text in /how-our-offer-works Step 1
93fc829  fix: add /buyer-disclosure to sitemap.ts
430534f  feat: add internal links to new landing pages from existing site
24592f4  feat: build /how-our-offer-works trust page
d163a94  feat: build /cash-offer landing page for Cash Home Buyers ad group
c868da9  feat: build /sell-as-is landing page for Sell House As-Is ad group
0125de0  refactor: remove redundant "No Agency or Representation" section from /terms
b198308  feat: add tracking disclosure to /privacy and no-agency clause to /terms
5637c5e  feat: build full /buyer-disclosure page with TREC 535.144 content
4d6c856  feat: add TREC compliance disclosure to site-wide footer
```

## Older Session History

Prior session work (Apr 2026) — kept here for searchability:

- **Commit `375105a` (2026-04-26)**: Fixed homepage hero subhead duplicate ampersand
- **Commit `0735d9f` (2026-04-26)**: Added Nolanville and Lampasas city pages (10 cities total)
- **Commit `375103f` (2026-04-18)**: Pre-PPC launch — UTM capture in LeadForm via `useSearchParams()` (wrapped in Suspense for SSG), `josh.jpg` compressed 8.2MB→83KB, `/studio` added to robots.ts disallow
- **Commit `e29a948` (2026-04-17)**: P1 — `opengraph-image.tsx` (Next.js file convention, edge runtime 1200x630), Brandon Dixon testimonial added to all 4 situation pages, 32 situation cross-links on city pages
- **Commits `4b2a79b`, `f8ba5ec`, `3a54cca` (2026-04-17)**: SEO + ADA foundation — duplicate title fixes, AggregateRating schema, **28 decorative SVGs marked `aria-hidden`**, mobile nav `aria-expanded`/`aria-controls`, LeadForm `autoComplete` attributes, XSS sanitization in email template, input length limits, rate limiting on `/api/leads`
