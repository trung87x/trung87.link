import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithInlinePrice from "./with_inline_price";
import Simple from "./simple";
import WithCtaLink from "./with_cta_link";
import WithColorSwatchesAndHorizontalScrolling from "./with_color_swatches_and_horizontal_scrolling";
import WithTallImages from "./with_tall_images";
import WithImageOverlayAndAddButton from "./with_image_overlay_and_add_button";
import WithTallImagesAndCtaLink from "./with_tall_images_and_cta_link";
import WithBorderGrid from "./with_border_grid";
import WithSupportingText from "./with_supporting_text";
import WithInlinePriceAndCtaLink from "./with_inline_price_and_cta_link";
import CardWithFullDetails from "./card_with_full_details";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With inline price",
      component: <WithInlinePrice />,
      fileName: "with_inline_price.jsx",
    },
    { id: "02", name: "Simple", component: <Simple />, fileName: "simple.jsx" },
    {
      id: "03",
      name: "With CTA link",
      component: <WithCtaLink />,
      fileName: "with_cta_link.jsx",
    },
    {
      id: "04",
      name: "With color swatches and horizontal scrolling",
      component: <WithColorSwatchesAndHorizontalScrolling />,
      fileName: "with_color_swatches_and_horizontal_scrolling.jsx",
    },
    {
      id: "05",
      name: "With tall images",
      component: <WithTallImages />,
      fileName: "with_tall_images.jsx",
    },
    {
      id: "06",
      name: "With image overlay and add button",
      component: <WithImageOverlayAndAddButton />,
      fileName: "with_image_overlay_and_add_button.jsx",
    },
    {
      id: "07",
      name: "With tall images and CTA link",
      component: <WithTallImagesAndCtaLink />,
      fileName: "with_tall_images_and_cta_link.jsx",
    },
    {
      id: "08",
      name: "With border grid",
      component: <WithBorderGrid />,
      fileName: "with_border_grid.jsx",
    },
    {
      id: "09",
      name: "With supporting text",
      component: <WithSupportingText />,
      fileName: "with_supporting_text.jsx",
    },
    {
      id: "10",
      name: "With inline price and CTA link",
      component: <WithInlinePriceAndCtaLink />,
      fileName: "with_inline_price_and_cta_link.jsx",
    },
    {
      id: "11",
      name: "Card with full details",
      component: <CardWithFullDetails />,
      fileName: "card_with_full_details.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file product-lists (Ecommerce Components)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/components/product-lists";

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
