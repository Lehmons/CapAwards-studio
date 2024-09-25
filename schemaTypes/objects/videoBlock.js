export default {
  title: 'Video block',
  name: 'videoBlock',
  type: 'object',
  fields: [
    {
      title: 'Video',
      name: 'video',
      type: 'mux.video',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
      description: 'Ensure alt text is filled in for accessibility',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'mux.video',
    },
  },
}

//This is to help a push
