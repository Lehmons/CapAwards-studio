export default {
  type: "document",
  name: "faq",
  title: "Faq",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Paragraph",
      name: "paragraph",
      type: "simple",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          `/${input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, "-")
            //Remove double --
            .replace(/[--]/g)
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
            .slice(0, 200)}`,
      },
    },
    {
      title: "FAQs",
      name: "faqs",
      type: "array",
      of: [{ type: "accordion" }],
    },
  ],
};
