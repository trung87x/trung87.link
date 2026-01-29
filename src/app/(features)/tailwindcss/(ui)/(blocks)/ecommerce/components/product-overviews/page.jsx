import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithImageGrid from "./with_image_grid";
import WithTieredImages from "./with_tiered_images";
import WithImageGalleryAndExpandableDetails from "./with_image_gallery_and_expandable_details";
import SplitWithImage from "./split_with_image";
import WithTabs from "./with_tabs";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With image grid",
      component: <WithImageGrid />,
      fileName: "with_image_grid.jsx",
    },
    {
      id: "02",
      name: "With tiered images",
      component: <WithTieredImages />,
      fileName: "with_tiered_images.jsx",
    },
    {
      id: "03",
      name: "With image gallery and expandable details",
      component: <WithImageGalleryAndExpandableDetails />,
      fileName: "with_image_gallery_and_expandable_details.jsx",
    },
    {
      id: "04",
      name: "Split with image",
      component: <SplitWithImage />,
      fileName: "split_with_image.jsx",
    },
    {
      id: "05",
      name: "With tabs",
      component: <WithTabs />,
      fileName: "with_tabs.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file product-overviews (Ecommerce Components)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/components/product-overviews";

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
