export default {
  title: "Quote Block",
  name: "quoteBlock",
  type: "object",
  fields: [
    {
      title: "Line Breaker",
      name: "lineBreaker",
      type: "boolean",
    },
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
