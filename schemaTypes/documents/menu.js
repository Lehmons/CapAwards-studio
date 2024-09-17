export default {
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    {
      type: "array",
      name: "menu",
      title: "Menu",
      of: [
        {
          type: "linkedPage",
        },
      ],
    },
    {
      title: "Shimmer",
      name: "shimmer",
      type: "imageBlock",
    },
  ],
  preview: {
    prepare({}) {
      return {
        title: "Menu",
      };
    },
  },
};
