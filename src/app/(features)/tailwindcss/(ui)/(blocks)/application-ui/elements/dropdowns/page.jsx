import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import WithDividers from "./with_dividers";
import WithIcons from "./with_icons";
import WithMinimalMenuIcon from "./with_minimal_menu_icon";
import WithSimpleHeader from "./with_simple_header";

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
      name: "With dividers",
      component: <WithDividers />,
      fileName: "with_dividers.jsx",
    },
    {
      id: "03",
      name: "With icons",
      component: <WithIcons />,
      fileName: "with_icons.jsx",
    },
    {
      id: "04",
      name: "With minimal menu icon",
      component: <WithMinimalMenuIcon />,
      fileName: "with_minimal_menu_icon.jsx",
    },
    {
      id: "05",
      name: "With simple header",
      component: <WithSimpleHeader />,
      fileName: "with_simple_header.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file dropdowns (Application UI > Elements)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/elements/dropdowns";

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
