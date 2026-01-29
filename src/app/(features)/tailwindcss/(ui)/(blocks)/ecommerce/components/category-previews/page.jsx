import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import ThreeColumn from "./three_column";
import WithImageBackgrounds from "./with_image_backgrounds";
import WithBackgroundImageAndDetailOverlay from "./with_background_image_and_detail_overlay";
import ThreeColumnWithDescription from "./three_column_with_description";
import WithScrollingCards from "./with_scrolling_cards";
import WithSplitImages from "./with_split_images";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Three-column",
      component: <ThreeColumn />,
      fileName: "three_column.jsx",
    },
    {
      id: "02",
      name: "With image backgrounds",
      component: <WithImageBackgrounds />,
      fileName: "with_image_backgrounds.jsx",
    },
    {
      id: "03",
      name: "With background image and detail overlay",
      component: <WithBackgroundImageAndDetailOverlay />,
      fileName: "with_background_image_and_detail_overlay.jsx",
    },
    {
      id: "04",
      name: "Three-column with description",
      component: <ThreeColumnWithDescription />,
      fileName: "three_column_with_description.jsx",
    },
    {
      id: "05",
      name: "With scrolling cards",
      component: <WithScrollingCards />,
      fileName: "with_scrolling_cards.jsx",
    },
    {
      id: "06",
      name: "With split images",
      component: <WithSplitImages />,
      fileName: "with_split_images.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file category-previews (Ecommerce Components)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/components/category-previews";

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
