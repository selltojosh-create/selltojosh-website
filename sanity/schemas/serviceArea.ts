import { defineType, defineField } from 'sanity'

export const serviceArea = defineType({
  name: 'serviceArea',
  title: 'Service Area',
  type: 'document',
  fields: [
    defineField({
      name: 'city',
      title: 'City Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      initialValue: 'TX',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'city',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Page Headline',
      type: 'string',
      description: 'e.g., "Sell Your Killeen Home Fast for Cash"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      description: 'Main content describing services in this area',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'scenarios',
      title: 'Common Scenarios',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of common situations where people need to sell (bullet points)',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO title for this service area page',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'SEO description for this service area page',
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
