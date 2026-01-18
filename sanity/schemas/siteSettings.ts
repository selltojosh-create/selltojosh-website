import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'general', title: 'General' },
    { name: 'legal', title: 'Legal & Business Entities' },
    { name: 'contact', title: 'Contact Information' },
    { name: 'hero', title: 'Hero Section' },
    { name: 'social', title: 'Social Media' },
  ],
  fields: [
    // General Settings
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'general',
      description: 'Short tagline for the business (e.g., "Central Texas Cash Home Buyer")',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      group: 'general',
      description: 'Default meta description for SEO',
    }),

    // Legal & Business Entity Information
    defineField({
      name: 'ownerName',
      title: 'Owner Name',
      type: 'string',
      group: 'legal',
      description: 'Name of the business owner (e.g., "Josh Isbell")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'legalEntityMarketing',
      title: 'Marketing Entity',
      type: 'string',
      group: 'legal',
      description: 'Legal entity that operates the website for marketing (e.g., "TrippCo Holdings, LLC")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'legalEntityPurchasing',
      title: 'Purchasing Entity',
      type: 'string',
      group: 'legal',
      description: 'Legal entity that conducts home purchases (e.g., "Red Belly Holdings, LLC")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'principalDisclaimer',
      title: 'Principal Buyer Disclaimer',
      type: 'text',
      rows: 4,
      group: 'legal',
      description: 'Legal disclaimer stating that you are a principal buyer, not a broker or agent',
      validation: (Rule) => Rule.required(),
    }),

    // Contact Information
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
      description: 'Format: 254-498-6025',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      group: 'contact',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({
          name: 'street',
          title: 'Street Address',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
        }),
        defineField({
          name: 'state',
          title: 'State',
          type: 'string',
        }),
        defineField({
          name: 'zip',
          title: 'ZIP Code',
          type: 'string',
        }),
        defineField({
          name: 'region',
          title: 'Region',
          type: 'string',
          description: 'e.g., "Central Texas"',
        }),
      ],
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Service Areas (Quick List)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'contact',
      description: 'List of cities shown in the hero and footer',
    }),

    // Hero Section
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      group: 'hero',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
      description: 'Main headline on the homepage hero',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 2,
      group: 'hero',
      description: 'Supporting text below the headline',
    }),
    defineField({
      name: 'featuredVideoId',
      title: 'Featured YouTube Video ID',
      type: 'string',
      group: 'hero',
      description: 'Just the video ID (e.g., "dQw4w9WgXcQ"), not the full URL',
    }),
    defineField({
      name: 'featuredVideoTitle',
      title: 'Featured Video Title',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'ownerImage',
      title: 'Owner Photo',
      type: 'image',
      group: 'hero',
      options: {
        hotspot: true,
      },
      description: 'Photo shown on the About page',
    }),

    // Social Media
    defineField({
      name: 'social',
      title: 'Social Media Links',
      type: 'object',
      group: 'social',
      fields: [
        defineField({
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
