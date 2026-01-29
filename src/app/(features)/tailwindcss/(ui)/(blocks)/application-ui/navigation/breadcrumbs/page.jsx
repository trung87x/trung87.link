import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Contained from "./contained";
import FullWidthBar from "./full_width_bar";
import SimpleWithChevrons from "./simple_with_chevrons";
import SimpleWithSlashes from "./simple_with_slashes";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Contained",
      component: <Contained />,
      fileName: "contained.jsx",
    },
    {
      id: "02",
      name: "Full-width bar",
      component: <FullWidthBar />,
      fileName: "full_width_bar.jsx",
    },
    {
      id: "03",
      name: "Simple with chevrons",
      component: <SimpleWithChevrons />,
      fileName: "simple_with_chevrons.jsx",
    },
    {
      id: "04",
      name: "Simple with slashes",
      component: <SimpleWithSlashes />,
      fileName: "simple_with_slashes.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file breadcrumbs (Application UI > Navigation)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/navigation/breadcrumbs";

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
