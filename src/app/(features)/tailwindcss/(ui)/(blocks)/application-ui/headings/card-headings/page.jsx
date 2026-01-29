import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import WithAction from "./with_action";
import WithAvatarAndActions from "./with_avatar_and_actions";
import WithDescriptionAndAction from "./with_description_and_action";
import WithDescription from "./with_description";
import WithAvatarMetaAndDropdown from "./with_avatar__meta__and_dropdown";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    { id: "01", name: "Simple", component: <Simple />, fileName: "simple.jsx" },
    {
      id: "02",
      name: "With action",
      component: <WithAction />,
      fileName: "with_action.jsx",
    },
    {
      id: "03",
      name: "With avatar and actions",
      component: <WithAvatarAndActions />,
      fileName: "with_avatar_and_actions.jsx",
    },
    {
      id: "04",
      name: "With description and action",
      component: <WithDescriptionAndAction />,
      fileName: "with_description_and_action.jsx",
    },
    {
      id: "05",
      name: "With description",
      component: <WithDescription />,
      fileName: "with_description.jsx",
    },
    {
      id: "06",
      name: "With avatar, meta, and dropdown",
      component: <WithAvatarMetaAndDropdown />,
      fileName: "with_avatar__meta__and_dropdown.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file card-headings (Application UI > Headings)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/headings/card-headings";

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
