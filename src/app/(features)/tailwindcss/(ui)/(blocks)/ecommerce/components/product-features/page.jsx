import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithImageGrid from "./with_image_grid";
import WithHeaderImagesAndDescriptions from "./with_header__images__and_descriptions";
import WithFadingImage from "./with_fading_image";
import WithWideImages from "./with_wide_images";
import WithSplitImage from "./with_split_image";
import WithTabs from "./with_tabs";
import WithAlternatingSections from "./with_alternating_sections";
import WithSquareImages from "./with_square_images";
import WithTieredImages from "./with_tiered_images";

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
      name: "With header, images, and descriptions",
      component: <WithHeaderImagesAndDescriptions />,
      fileName: "with_header__images__and_descriptions.jsx",
    },
    {
      id: "03",
      name: "With fading image",
      component: <WithFadingImage />,
      fileName: "with_fading_image.jsx",
    },
    {
      id: "04",
      name: "With wide images",
      component: <WithWideImages />,
      fileName: "with_wide_images.jsx",
    },
    {
      id: "05",
      name: "With split image",
      component: <WithSplitImage />,
      fileName: "with_split_image.jsx",
    },
    {
      id: "06",
      name: "With tabs",
      component: <WithTabs />,
      fileName: "with_tabs.jsx",
    },
    {
      id: "07",
      name: "With alternating sections",
      component: <WithAlternatingSections />,
      fileName: "with_alternating_sections.jsx",
    },
    {
      id: "08",
      name: "With square images",
      component: <WithSquareImages />,
      fileName: "with_square_images.jsx",
    },
    {
      id: "09",
      name: "With tiered images",
      component: <WithTieredImages />,
      fileName: "with_tiered_images.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file product-features (Ecommerce Components)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/components/product-features";

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
