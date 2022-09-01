export default {
  title: "Menu Item",
  name: "menuItem",
  type: "object",
  fields: [
    {
      name: "page",
      title: "Page",
      type: "reference",
      to: [{ type: "page" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "page.title",
    },
    prepare({ title }) {
      return {
        title: title ? title : "No title defined",
      };
    },
  },
};
