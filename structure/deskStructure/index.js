import S from "@sanity/desk-tool/structure-builder";
import PagePreview from "../components/previews/page/PagePreview";

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  // if the schema is a project then return the project preview component
  if (schemaType === "page") {
    return S.document().views([
      S.view.form(),
      S.view.component(PagePreview).title("Preview"),
    ]);
  }

  return S.document().views([S.view.form()]);
};

export default S.defaults();
