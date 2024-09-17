export default {
  title: "General Quote Block",
  name: "generalQuoteBlock",
  type: "object",
  fields: [
    {
      title: "Quote",
      name: "quote",
      type: "simple",
    },
    {
      title: "Attribution",
      name: "attribution",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "quote",
    },
  },
};
