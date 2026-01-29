import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithTextHeaderAndImageProductGrid from "./with_text_header_and_image_product_grid";
import WithImageHeaderAndDetailProductGrid from "./with_image_header_and_detail_product_grid";
import WithTextHeaderAndSimpleProductGrid from "./with_text_header_and_simple_product_grid";
import WithProductGridAndPagination from "./with_product_grid_and_pagination";
import WithLargeImagesAndFiltersSidebar from "./with_large_images_and_filters_sidebar";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With text header and image product grid",
      component: <WithTextHeaderAndImageProductGrid />,
      fileName: "with_text_header_and_image_product_grid.jsx",
    },
    {
      id: "02",
      name: "With image header and detail product grid",
      component: <WithImageHeaderAndDetailProductGrid />,
      fileName: "with_image_header_and_detail_product_grid.jsx",
    },
    {
      id: "03",
      name: "With text header and simple product grid",
      component: <WithTextHeaderAndSimpleProductGrid />,
      fileName: "with_text_header_and_simple_product_grid.jsx",
    },
    {
      id: "04",
      name: "With product grid and pagination",
      component: <WithProductGridAndPagination />,
      fileName: "with_product_grid_and_pagination.jsx",
    },
    {
      id: "05",
      name: "With large images and filters sidebar",
      component: <WithLargeImagesAndFiltersSidebar />,
      fileName: "with_large_images_and_filters_sidebar.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file category-pages (nhánh Ecommerce)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/page-examples/category-pages";

  return (
    <div className="space-y-16 pb-20">
      {layouts.map((layout) => (
        <section
          key={layout.id}
          className="border-b border-gray-100 pb-16 last:border-0"
        >
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            {layout.id}. {layout.name}
          </h2>
          <PreviewWrapper
            name={layout.name}
            // Gọi getRaw trực tiếp tại phần render để đảm bảo mã nguồn được load chính xác
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
