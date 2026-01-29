import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import SidebarOnDark from "./sidebar_on_dark";
import StackedLayout from "./stacked";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Sidebar on dark",
      component: <SidebarOnDark />,
      fileName: "sidebar_on_dark.jsx",
    },
    {
      id: "02",
      name: "Stacked",
      component: <StackedLayout />,
      fileName: "stacked.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file detail-screens (Application UI)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/page-examples/detail-screens";

  return (
    <div className="space-y-16 pb-20">
      {layouts.map((layout) => (
        <section
          key={layout.id}
          className="border-b border-gray-100 pb-16 last:border-0"
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
