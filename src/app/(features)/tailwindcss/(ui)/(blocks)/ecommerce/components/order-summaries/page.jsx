import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithSplitImage from "./with_split_image";
import WithProgressBars from "./with_progress_bars";
import WithLargeImagesAndProgressBars from "./with_large_images_and_progress_bars";
import SimpleWithFullOrderDetails from "./simple_with_full_order_details";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With split image",
      component: <WithSplitImage />,
      fileName: "with_split_image.jsx",
    },
    {
      id: "02",
      name: "With progress bars",
      component: <WithProgressBars />,
      fileName: "with_progress_bars.jsx",
    },
    {
      id: "03",
      name: "With large images and progress bars",
      component: <WithLargeImagesAndProgressBars />,
      fileName: "with_large_images_and_progress_bars.jsx",
    },
    {
      id: "04",
      name: "Simple with full order details",
      component: <SimpleWithFullOrderDetails />,
      fileName: "simple_with_full_order_details.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file order-summaries (Ecommerce Components)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/components/order-summaries";

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
