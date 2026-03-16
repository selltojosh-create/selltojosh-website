import { defineType, defineField } from 'sanity'

export const serviceArea = defineType({
  name: 'serviceArea',
  title: 'Service Area',
  type: 'document',
  groups: [
    { name: 'basic', title: 'Basic Info' },
    { name: 'content', title: 'Page Content' },
    { name: 'seo', title: 'SEO' },
    { name: 'location', title: 'Location Data' },
  ],
  fields: [
    // Basic Info
    defineField({
      name: 'city',
      title: 'City Name',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      group: 'basic',
      initialValue: 'TX',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'basic',
      options: {
        source: 'city',
        maxLength: 96,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 96)
      },
      validation: (Rule) => Rule.required(),
    }),

    // Page Content
    defineField({
      name: 'headline',
      title: 'Page Headline',
      type: 'string',
      group: 'content',
      description: 'e.g., "Sell Your Killeen Home Fast for Cash"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 4,
      group: 'content',
      description: 'Brief overview shown in hero section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Main Content Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      group: 'content',
      description: 'Detailed content about buying homes in this city (2-3 paragraphs)',
    }),
    defineField({
      name: 'scenarios',
      title: 'Common Scenarios',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
      description: 'List of common situations where people need to sell (bullet points)',
    }),
    defineField({
      name: 'landmarks',
      title: 'Local Landmarks & Neighborhoods',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
      description: 'Nearby landmarks, neighborhoods, or areas for local SEO',
    }),

    // SEO
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
      description: 'SEO title (e.g., "Sell My House Fast in Killeen TX | Cash Home Buyer")',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'SEO description for search results',
    }),

    // Location Data
    defineField({
      name: 'coordinates',
      title: 'City Coordinates',
      type: 'object',
      group: 'location',
      fields: [
        defineField({
          name: 'lat',
          title: 'Latitude',
          type: 'number',
        }),
        defineField({
          name: 'lng',
          title: 'Longitude',
          type: 'number',
        }),
      ],
      description: 'For local business schema markup',
    }),
  ],
  preview: {
    select: {
      title: 'city',
      state: 'state',
    },
    prepare({ title, state }) {
      return {
        title: `${title}, ${state || 'TX'}`,
      }
    },
  },
})
