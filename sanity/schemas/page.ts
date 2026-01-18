import { defineType, defineField } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'The URL path for this page (e.g., "about", "contact", "faq")',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO title (appears in browser tab and search results). Keep under 60 characters.',
      validation: (Rule) => Rule.max(70).warning('Should be under 60 characters'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'SEO description (appears in search results). Keep between 120-160 characters.',
      validation: (Rule) => Rule.max(160).warning('Should be under 160 characters'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image shown when page is shared on social media. Recommended: 1200x630 pixels.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: `/${slug || ''}`,
      }
    },
  },
})
