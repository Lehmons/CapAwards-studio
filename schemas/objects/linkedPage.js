export default {
  title: "Linked Page",
  type: "object",
  name: "linkedPage",
  fields: [
    {
      // string (link title)
      title: "Link title",
      name: "linkTitle",
      type: "string",
    },
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
