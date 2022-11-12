export default {
  title: "FAQ Block",
  name: "faqBlock",
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
  ],
  preview: {
    select: {
      title: "paragraph",
    },
  },
};
