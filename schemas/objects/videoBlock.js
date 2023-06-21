export default {
  title: "Video block",
  name: "videoBlock",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    {
      title: "Video file",
      name: "video",
      type: "mux.video",
    },
  ],
};
