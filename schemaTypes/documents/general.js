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
      title: "Mobile Menu Quotes",
      name: "quotes",
      type: "generalQuotes",
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
