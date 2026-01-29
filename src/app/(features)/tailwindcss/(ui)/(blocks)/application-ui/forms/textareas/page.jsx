import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import WithAvatarAndActions from "./with_avatar_and_actions";
import WithUnderlineAndActions from "./with_underline_and_actions";
import WithTitleAndPillActions from "./with_title_and_pill_actions";
import WithPreviewButton from "./with_preview_button";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      fileName: "simple.jsx",
    },
    {
      id: "02",
      name: "With avatar and actions",
      component: <WithAvatarAndActions />,
      fileName: "with_avatar_and_actions.jsx",
    },
    {
      id: "03",
      name: "With underline and actions",
      component: <WithUnderlineAndActions />,
      fileName: "with_underline_and_actions.jsx",
    },
    {
      id: "04",
      name: "With title and pill actions",
      component: <WithTitleAndPillActions />,
      fileName: "with_title_and_pill_actions.jsx",
    },
    {
      id: "05",
      name: "With preview button",
      component: <WithPreviewButton />,
      fileName: "with_preview_button.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file textareas (Application UI > Forms)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/forms/textareas";

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
