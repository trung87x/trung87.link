import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import SimpleWithIcons from "./simple_with_icons";
import WithComments from "./with_comments";
import WithMultipleItemTypes from "./with_multiple_item_types";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple with icons",
      component: <SimpleWithIcons />,
      fileName: "simple_with_icons.jsx",
    },
    {
      id: "02",
      name: "With comments",
      component: <WithComments />,
      fileName: "with_comments.jsx",
    },
    {
      id: "03",
      name: "With multiple item types",
      component: <WithMultipleItemTypes />,
      fileName: "with_multiple_item_types.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file feeds (Application UI > Lists)
  const baseDir = "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/lists/feeds";

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
