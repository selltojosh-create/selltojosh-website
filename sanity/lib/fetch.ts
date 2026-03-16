import { client, isSanityConfigured } from './client'
import {
  siteSettingsQuery,
  pageBySlugQuery,
  allTestimonialsQuery,
  featuredTestimonialsQuery,
  allFaqsQuery,
  allReelsQuery,
  allServiceAreasQuery,
  serviceAreaBySlugQuery,
} from './queries'

// Types
export interface SanitySiteSettings {
  businessName: string
  tagline?: string
  description?: string
  phone: string
  email: string
  address?: {
    city?: string
    state?: string
    region?: string
  }
  serviceAreas?: string[]
  heroImage?: unknown
  heroHeadline?: string
  heroSubheadline?: string
  featuredVideoId?: string
  featuredVideoTitle?: string
  ownerImage?: unknown
  social?: {
    facebook?: string
    instagram?: string
    youtube?: string
  }
}

export interface SanityPage {
  title: string
  slug: string
  metaTitle?: string
  metaDescription?: string
  ogImage?: unknown
}

export interface SanityTestimonial {
  _id: string
  name: string
  location: string
  quote: string
  rating?: number
  image?: unknown
  featured?: boolean
}

export interface SanityFaq {
  _id: string
  question: string
  answer: string
  order?: number
}

export interface SanityReel {
  _id: string
  title: string
  description?: string
  youtubeId: string
  order?: number
}

export interface SanityServiceArea {
  _id: string
  city: string
  state: string
  slug: string
  headline: string
  description: string
  content?: string[]
  scenarios?: string[]
  landmarks?: string[]
  metaTitle?: string
  metaDescription?: string
  coordinates?: {
    lat: number
    lng: number
  }
}

// Fetch functions with null returns for graceful fallbacks
export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  if (!isSanityConfigured()) return null
  try {
    const settings = await client.fetch<SanitySiteSettings>(siteSettingsQuery)
    return settings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

export async function getPageBySlug(slug: string): Promise<SanityPage | null> {
  if (!isSanityConfigured()) return null
  try {
    const page = await client.fetch<SanityPage>(pageBySlugQuery, { slug })
    return page
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

export async function getAllTestimonials(): Promise<SanityTestimonial[]> {
  if (!isSanityConfigured()) return []
  try {
    const testimonials = await client.fetch<SanityTestimonial[]>(allTestimonialsQuery)
    return testimonials || []
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getFeaturedTestimonials(): Promise<SanityTestimonial[]> {
  if (!isSanityConfigured()) return []
  try {
    const testimonials = await client.fetch<SanityTestimonial[]>(featuredTestimonialsQuery)
    return testimonials || []
  } catch (error) {
    console.error('Error fetching featured testimonials:', error)
    return []
  }
}

export async function getAllFaqs(): Promise<SanityFaq[]> {
  if (!isSanityConfigured()) return []
  try {
    const faqs = await client.fetch<SanityFaq[]>(allFaqsQuery)
    return faqs || []
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    return []
  }
}

export async function getAllReels(): Promise<SanityReel[]> {
  if (!isSanityConfigured()) return []
  try {
    const reels = await client.fetch<SanityReel[]>(allReelsQuery)
    return reels || []
  } catch (error) {
    console.error('Error fetching reels:', error)
    return []
  }
}

export async function getAllServiceAreas(): Promise<SanityServiceArea[]> {
  if (!isSanityConfigured()) return []
  try {
    const areas = await client.fetch<SanityServiceArea[]>(allServiceAreasQuery)
    return areas || []
  } catch (error) {
    console.error('Error fetching service areas:', error)
    return []
  }
}

export async function getServiceAreaBySlug(slug: string): Promise<SanityServiceArea | null> {
  if (!isSanityConfigured()) return null
  try {
    const area = await client.fetch<SanityServiceArea>(serviceAreaBySlugQuery, { slug })
    return area
  } catch (error) {
    console.error('Error fetching service area:', error)
    return null
  }
}
