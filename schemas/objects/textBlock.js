export default {
  title: "Text Block",
  name: "textBlock",
  type: "object",
  fields: [
    {
      title: "Line Breaker",
      name: "lineBreaker",
      type: "boolean",
    },
    {
      title: "Paragraph",
      name: "paragraph",
      type: "headingOneTwoThreeNormalSmall",
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
    },
  },
};
