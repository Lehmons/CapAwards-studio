export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      type: "array",
      name: "getInTouchLinks",
      title: "Get In Touch Links",
      of: [
        {
          type: "footerLink",
        },
      ],
    },
    // {
    //   title: "Logo",
    //   name: "logo",
    //   type: "imageBlock",
    // },
    {
      type: "array",
      name: "followUsLinks",
      title: "Follow Us Links",
      of: [
        {
          type: "footerLink",
        },
      ],
    },
    {
      type: "array",
      name: "pageLinks",
      title: "Page Links",
      of: [
        {
          type: "linkedPage",
        },
      ],
    },
    {
      type: "string",
      name: "companyNumber",
      title: "Company Number",
      placeholder: "03613459",
    },
    {
      type: "string",
      name: "vat",
      title: "VAT",
      placeholder: "715109657",
    },
  ],
  preview: {
    prepare({ title }) {
      return {
        title: title ? title : "Footer",
      };
    },
  },
};
