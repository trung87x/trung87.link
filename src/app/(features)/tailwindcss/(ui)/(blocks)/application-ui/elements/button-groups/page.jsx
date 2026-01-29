import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Basic from "./basic";
import IconOnly from "./icon_only";
import WithStat from "./with_stat";
import WithDropdown from "./with_dropdown";
import WithCheckboxAndDropdown from "./with_checkbox_and_dropdown";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      fileName: "basic.jsx",
    },
    {
      id: "02",
      name: "Icon only",
      component: <IconOnly />,
      fileName: "icon_only.jsx",
    },
    {
      id: "03",
      name: "With stat",
      component: <WithStat />,
      fileName: "with_stat.jsx",
    },
    {
      id: "04",
      name: "With dropdown",
      component: <WithDropdown />,
      fileName: "with_dropdown.jsx",
    },
    {
      id: "05",
      name: "With checkbox and dropdown",
      component: <WithCheckboxAndDropdown />,
      fileName: "with_checkbox_and_dropdown.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file button-groups (Application UI > Elements)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/elements/button-groups";

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
