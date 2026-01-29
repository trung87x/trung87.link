import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithColorAndSizeSelector from "./with_color_and_size_selector";
import WithColorSizeSelectorAndDetailsLink from "./with_color_selector__size_selector__and_details_link";
import WithLargeSizeSelector from "./with_large_size_selector";
import WithColorSelectorAndDescription from "./with_color_selector_and_description";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With color and size selector",
      component: <WithColorAndSizeSelector />,
      fileName: "with_color_and_size_selector.jsx",
    },
    {
      id: "02",
      name: "With color selector, size selector, and details link",
      component: <WithColorSizeSelectorAndDetailsLink />,
      fileName: "with_color_selector__size_selector__and_details_link.jsx",
    },
    {
      id: "03",
      name: "With large size selector",
      component: <WithLargeSizeSelector />,
      fileName: "with_large_size_selector.jsx",
    },
    {
      id: "04",
      name: "With color selector and description",
      component: <WithColorSelectorAndDescription />,
      fileName: "with_color_selector_and_description.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file product-quickviews (Ecommerce Components)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/components/product-quickviews";

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
            // Sử dụng getRaw để nạp mã nguồn trực tiếp dựa trên fileName và baseDir
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
