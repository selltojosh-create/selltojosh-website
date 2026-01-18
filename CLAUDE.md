# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SellToJosh.com - A lead-generation website for a Central Texas cash home buyer. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/leads/         # Lead form API endpoint
│   ├── about/             # About page
│   ├── areas/             # Service areas (SEO-critical)
│   ├── contact/           # Lead form page
│   ├── faq/               # FAQ page
│   ├── how-it-works/      # Process page
│   ├── privacy/           # Privacy policy
│   ├── reels/             # Video reels page
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt config
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── LeadForm.tsx       # Lead capture form (3 variants)
│   ├── StickyMobileCTA.tsx # Mobile call button
│   ├── ReelsCarousel.tsx  # Video carousel
│   ├── FAQAccordion.tsx   # Expandable FAQ
│   ├── TestimonialCard.tsx
│   ├── YouTubeEmbed.tsx
│   └── LocalBusinessSchema.tsx  # JSON-LD schema
└── data/                  # Data files (easy to edit)
    ├── siteConfig.ts      # Phone, email, business info
    ├── reels.ts           # YouTube video data
    ├── faqs.ts            # FAQ content
    └── areas.ts           # Service area content
```

## Key Architecture Decisions

- **Lead Form**: Submits to `/api/leads` - currently logs to console. Add email/CRM integration there.
- **Reels Data**: Add/edit videos in `src/data/reels.ts` - just need YouTube video ID, title, description.
- **Service Areas**: SEO content for each city in `src/data/areas.ts`.
- **Site Config**: Phone number, email, business name in `src/data/siteConfig.ts`.

## Styling

Colors defined in `globals.css` using CSS variables:
- `--navy` / `--navy-dark`: Primary brand color
- `--orange` / `--orange-hover`: CTA buttons
- Utility classes: `.btn-primary`, `.btn-secondary`, `.section-padding`, `.container-custom`

## Lead Form Integration (TODO)

The `/api/leads/route.ts` endpoint is ready for integration:
- Add SendGrid/Resend for email notifications
- Add GoHighLevel webhook or Zapier integration
- Add database (Supabase/Prisma) if needed

## Adding New Videos

Edit `src/data/reels.ts`:
```typescript
{
  id: "7",
  title: "Video Title",
  description: "Video description",
  youtubeId: "YOUTUBE_VIDEO_ID"  // Just the ID, not full URL
}
```
