export default {
  title: "General Quotes",
  name: "generalQuotes",
  type: "object",
  fields: [
    {
      title: "Quote",
      name: "quote",
      type: "array",
      of: [{ type: "generalQuoteBlock" }],
    },
  ],
  preview: {
    select: {
      title: "quotes",
    },
  },
};
