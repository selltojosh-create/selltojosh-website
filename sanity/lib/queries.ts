import { groq } from 'next-sanity'

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    businessName,
    tagline,
    description,
    phone,
    email,
    address,
    serviceAreas,
    heroImage,
    heroHeadline,
    heroSubheadline,
    featuredVideoId,
    featuredVideoTitle,
    ownerImage,
    social
  }
`

// Page SEO
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    metaTitle,
    metaDescription,
    ogImage
  }
`

export const allPagesQuery = groq`
  *[_type == "page"] | order(title asc) {
    title,
    "slug": slug.current,
    metaTitle,
    metaDescription
  }
`

// Testimonials
export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    location,
    quote,
    rating,
    image,
    featured
  }
`

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    name,
    location,
    quote,
    rating,
    image
  }
`

// FAQs
export const allFaqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    order
  }
`

// Reels / Videos
export const allReelsQuery = groq`
  *[_type == "reel"] | order(order asc) {
    _id,
    title,
    description,
    youtubeId,
    order
  }
`

// Service Areas
export const allServiceAreasQuery = groq`
  *[_type == "serviceArea"] | order(city asc) {
    _id,
    city,
    state,
    "slug": slug.current,
    headline,
    description,
    scenarios,
    metaTitle,
    metaDescription
  }
`

export const serviceAreaBySlugQuery = groq`
  *[_type == "serviceArea" && slug.current == $slug][0] {
    _id,
    city,
    state,
    "slug": slug.current,
    headline,
    description,
    scenarios,
    metaTitle,
    metaDescription
  }
`
