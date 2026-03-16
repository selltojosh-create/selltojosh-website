import { defineConfig } from 'sanity'
import { structureTool, type StructureBuilder } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'selltojosh',
  title: 'Sell to Josh CMS',

  projectId,
  dataset,

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S: StructureBuilder) =>
        S.list()
          .title('Content')
          .items([
            // Site Settings singleton
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Pages
            S.listItem()
              .title('Pages (SEO)')
              .schemaType('page')
              .child(S.documentTypeList('page').title('Pages')),
            S.divider(),
            // Content types
            S.listItem()
              .title('Testimonials')
              .schemaType('testimonial')
              .child(S.documentTypeList('testimonial').title('Testimonials')),
            S.listItem()
              .title('FAQs')
              .schemaType('faq')
              .child(S.documentTypeList('faq').title('FAQs')),
            S.listItem()
              .title('Reels / Videos')
              .schemaType('reel')
              .child(S.documentTypeList('reel').title('Reels')),
            S.listItem()
              .title('Service Areas')
              .schemaType('serviceArea')
              .child(S.documentTypeList('serviceArea').title('Service Areas')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
