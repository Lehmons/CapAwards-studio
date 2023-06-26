export default {
  title: "Blue Text Block",
  name: "blueTextBlock",
  type: "object",
  fields: [
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
