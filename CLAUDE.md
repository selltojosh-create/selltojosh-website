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

Edit `src/data/reels.ts` (or use Sanity CMS):
```typescript
{
  id: "7",
  title: "Video Title",
  description: "Video description",
  youtubeId: "YOUTUBE_VIDEO_ID"  // Just the ID, not full URL
}
```

## Sanity CMS Integration

The site is integrated with Sanity CMS for content management. Access the admin dashboard at `/studio`.

### Environment Variables

Copy `.env.local.example` to `.env.local` and add your Sanity credentials:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Sanity Structure

```
sanity/
├── schemas/           # Content type definitions
│   ├── siteSettings.ts   # Global site settings (singleton)
│   ├── page.ts           # SEO metadata per page
│   ├── testimonial.ts    # Customer testimonials
│   ├── faq.ts            # FAQ questions/answers
│   ├── reel.ts           # Video reels
│   ├── serviceArea.ts    # Service area pages
│   └── index.ts          # Schema exports
└── lib/
    ├── client.ts         # Sanity client configuration
    ├── queries.ts        # GROQ queries
    └── fetch.ts          # Data fetching functions
```

### Content Types

| Type | Description | Managed In |
|------|-------------|------------|
| Site Settings | Business name, phone, email, hero content | Singleton document |
| Pages | SEO title/description per page | Document list |
| Testimonials | Customer reviews with ratings | Document list |
| FAQs | Questions and answers | Document list |
| Reels | YouTube video content | Document list |
| Service Areas | City-specific landing pages | Document list |

### Fallback Behavior

The site uses static data from `src/data/` when:
- Sanity is not configured (no project ID)
- Sanity returns empty results
- Sanity fetch fails

This ensures the site always works, even without CMS setup.

### Setting Up a New Sanity Project

1. Create account at [sanity.io](https://sanity.io)
2. Create new project named "selltojosh"
3. Copy Project ID to `.env.local`
4. Run `npm run dev` and visit `/studio`
5. Add content via the studio interface
