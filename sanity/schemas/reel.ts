import { defineType, defineField } from 'sanity'

export const reel = defineType({
  name: 'reel',
  title: 'Reel / Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'Just the video ID (e.g., "dQw4w9WgXcQ"), not the full URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      youtubeId: 'youtubeId',
    },
    prepare({ title, youtubeId }) {
      return {
        title,
        subtitle: youtubeId ? `YouTube: ${youtubeId}` : 'No video ID',
      }
    },
  },
})
