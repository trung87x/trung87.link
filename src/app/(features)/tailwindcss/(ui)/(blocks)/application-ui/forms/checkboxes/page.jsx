import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import ListWithDescription from "./list_with_description";
import ListWithInlineDescription from "./list_with_inline_description";
import ListWithCheckboxOnRight from "./list_with_checkbox_on_right";
import SimpleListWithHeading from "./simple_list_with_heading";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "List with description",
      component: <ListWithDescription />,
      fileName: "list_with_description.jsx",
    },
    {
      id: "02",
      name: "List with inline description",
      component: <ListWithInlineDescription />,
      fileName: "list_with_inline_description.jsx",
    },
    {
      id: "03",
      name: "List with checkbox on right",
      component: <ListWithCheckboxOnRight />,
      fileName: "list_with_checkbox_on_right.jsx",
    },
    {
      id: "04",
      name: "Simple list with heading",
      component: <SimpleListWithHeading />,
      fileName: "simple_list_with_heading.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file checkboxes (Application UI > Forms)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/forms/checkboxes";

  return (
    <div className="space-y-10 pb-20">
      {layouts.map((layout) => (
        <section
          key={layout.id}
          className="border-b border-gray-100 pb-10 last:border-0"
        >
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            {layout.id}. {layout.name}
          </h2>
          <PreviewWrapper
            name={layout.name}
            // Nạp mã nguồn động qua getRaw dựa trên fileName và baseDir
            code={getRaw(`${baseDir}/${layout.fileName}`)}
          >
            {layout.component}
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
