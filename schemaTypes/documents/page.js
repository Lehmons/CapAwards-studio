export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          `/${input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, '-')
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
            .slice(0, 200)}`,
      },
    },
    {
      title: 'Blocks',
      name: 'blocks',
      type: 'array',
      of: [
        {type: 'imageBlock'},
        {type: 'textBlock'},
        {type: 'blueTextBlock'},
        {type: 'silverTextBlock'},
        {type: 'imageTextBlock'},
        {type: 'imageTextBlockBlue'},
        {type: 'quotes'},
        {type: 'videoBlock'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title ? title : 'No title defined',
      }
    },
  },
}
