export default {
  title: "Quotes",
  name: "quotes",
  type: "object",
  fields: [
    {
      title: "Quote",
      name: "quote",
      type: "array",
      of: [{ type: "quoteBlock" }],
    },
  ],
  preview: {
    select: {
      title: "quotes",
    },
  },
};
