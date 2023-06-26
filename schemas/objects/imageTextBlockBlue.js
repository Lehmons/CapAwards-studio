export default {
  type: "object",
  name: "imageTextBlockBlue",
  title: "Image & Text Blue",
  fields: [
    {
      title: "Line Breaker",
      name: "lineBreaker",
      type: "boolean",
    },
    {
      title: "Image",
      name: "image",
      type: "array",
      of: [{ type: "imageBlock" }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      title: "Paragraph",
      name: "paragraph",
      type: "headingOneTwoThreeNormalSmall",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "linkedPage",
      title: "Linked Page",
      type: "linkedPage",
    },
    {
      name: "sectionId",
      type: "string",
      title: "Section Id",
    },
  ],
  preview: {
    select: {
      title: "paragraph",
      media: "image",
    },
  },
};
