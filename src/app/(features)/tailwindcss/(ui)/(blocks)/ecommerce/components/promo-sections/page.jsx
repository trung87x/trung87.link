import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithImageTiles from "./with_image_tiles";
import WithFadingBackgroundAndTestimonials from "./with_fading_background_image_and_testimonials";
import FullWidthWithBackgroundImage from "./full_width_with_background_image";
import FullWidthWithOverlappingImageTiles from "./full_width_with_overlapping_image_tiles";
import WithBackgroundImage from "./with_background_image";
import WithOverlappingImageTiles from "./with_overlapping_image_tiles";
import WithOffersAndSplitImage from "./with_offers_and_split_image";
import FullWidthWithBackgroundImageAndLargeContent from "./full_width_with_background_image_and_large_content";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With image tiles",
      component: <WithImageTiles />,
      fileName: "with_image_tiles.jsx",
    },
    {
      id: "02",
      name: "With fading background image and testimonials",
      component: <WithFadingBackgroundAndTestimonials />,
      fileName: "with_fading_background_image_and_testimonials.jsx",
    },
    {
      id: "03",
      name: "Full-width with background image",
      component: <FullWidthWithBackgroundImage />,
      fileName: "full_width_with_background_image.jsx",
    },
    {
      id: "04",
      name: "Full-width with overlapping image tiles",
      component: <FullWidthWithOverlappingImageTiles />,
      fileName: "full_width_with_overlapping_image_tiles.jsx",
    },
    {
      id: "05",
      name: "With background image",
      component: <WithBackgroundImage />,
      fileName: "with_background_image.jsx",
    },
    {
      id: "06",
      name: "With overlapping image tiles",
      component: <WithOverlappingImageTiles />,
      fileName: "with_overlapping_image_tiles.jsx",
    },
    {
      id: "07",
      name: "With offers and split image",
      component: <WithOffersAndSplitImage />,
      fileName: "with_offers_and_split_image.jsx",
    },
    {
      id: "08",
      name: "Full-width with background image and large content",
      component: <FullWidthWithBackgroundImageAndLargeContent />,
      fileName: "full_width_with_background_image_and_large_content.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file promo-sections (nhánh Ecommerce/Components)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/components/promo-sections";

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
