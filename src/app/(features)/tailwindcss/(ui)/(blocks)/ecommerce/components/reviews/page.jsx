import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import MultiColumn from "./multi_column";
import WithSummaryChart from "./with_summary_chart";
import AvatarsWithSeparateDescription from "./avatars_with_separate_description";
import SimpleWithAvatars from "./simple_with_avatars";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Multi-column",
      component: <MultiColumn />,
      fileName: "multi_column.jsx",
    },
    {
      id: "02",
      name: "With summary chart",
      component: <WithSummaryChart />,
      fileName: "with_summary_chart.jsx",
    },
    {
      id: "03",
      name: "Avatars with separate description",
      component: <AvatarsWithSeparateDescription />,
      fileName: "avatars_with_separate_description.jsx",
    },
    {
      id: "04",
      name: "Simple with avatars",
      component: <SimpleWithAvatars />,
      fileName: "simple_with_avatars.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file reviews (nhánh Ecommerce/Components)
  const baseDir = "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/components/reviews";

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
            // Sử dụng getRaw để nạp mã nguồn trực tiếp từ file dựa trên fileName và baseDir
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
