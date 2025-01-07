import documentTypes from './documentTypes'

export default {
  title: 'Linked Page',
  type: 'object',
  name: 'linkedPage',
  fields: [
    {
      title: 'Link title',
      name: 'linkTitle',
      type: 'string',
    },
    {
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: documentTypes,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'page.title',
      linkTitle: 'linkTitle',
    },
    prepare({title, linkTitle}) {
      const fallback = linkTitle || 'No title defined'
      return {
        title: title ? title : fallback,
      }
    },
  },
}
