import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Light from "./light";
import Dark from "./dark";
import WithExpandableSections from "./with_expandable_sections";
import WithSecondaryNavigation from "./with_secondary_navigation";
import Brand from "./brand";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Light",
      component: <Light />,
      fileName: "light.jsx",
    },
    {
      id: "02",
      name: "Dark",
      component: <Dark />,
      fileName: "dark.jsx",
    },
    {
      id: "03",
      name: "With expandable sections",
      component: <WithExpandableSections />,
      fileName: "with_expandable_sections.jsx",
    },
    {
      id: "04",
      name: "With secondary navigation",
      component: <WithSecondaryNavigation />,
      fileName: "with_secondary_navigation.jsx",
    },
    {
      id: "05",
      name: "Brand",
      component: <Brand />,
      fileName: "brand.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file sidebar-navigation (Application UI > Navigation)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/navigation/sidebar-navigation";

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
