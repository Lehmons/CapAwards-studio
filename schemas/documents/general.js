export default {
  title: "General",
  name: "general",
  type: "document",
  fields: [
    {
      title: "Phone",
      name: "phone",
      type: "simple",
    },
    {
      title: "Email",
      name: "email",
      type: "simple",
    },
    {
      title: "Company Number",
      name: "companyNumber",
      type: "simple",
    },
    {
      title: "Tax Number",
      name: "taxNumber",
      type: "simple",
    },
    {
      title: "Quotes",
      name: "quotes",
      type: "array",
      of: [{ type: "generalQuotes" }],
    },
    {
      title: "Social Media Links",
      name: "socialMediaLinks",
      type: "array",
      of: [{ type: "socialMedia" }],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  preview: {
    prepare({ title }) {
      return {
        title: title ? title : "General",
      };
    },
  },
};
