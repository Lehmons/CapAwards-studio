export default {
  title: "Social Media",
  name: "socialMedia",
  type: "object",
  fields: [
    {
      title: "Icon",
      name: "icon",
      type: "imageBlock",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Link",
      name: "link",
      type: "url",
      placeholder: "https://youtube.com/link",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
  ],
  preview: {
    select: {
      title: "icon.image.alt",
      media: "icon.image",
    },
  },
};
