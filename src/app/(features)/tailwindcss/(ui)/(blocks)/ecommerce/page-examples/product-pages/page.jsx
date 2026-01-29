import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithRelatedProducts from "./with_related_products";
import WithImageGrid from "./with_image_grid";
import WithExpandableProductDetails from "./with_expandable_product_details";
import WithFeaturedDetails from "./with_featured_details";
import WithTabsAndRelatedProducts from "./with_tabs_and_related_products";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With related products",
      component: <WithRelatedProducts />,
      fileName: "with_related_products.jsx",
    },
    {
      id: "02",
      name: "With image grid",
      component: <WithImageGrid />,
      fileName: "with_image_grid.jsx",
    },
    {
      id: "03",
      name: "With expandable product details",
      component: <WithExpandableProductDetails />,
      fileName: "with_expandable_product_details.jsx",
    },
    {
      id: "04",
      name: "With featured details",
      component: <WithFeaturedDetails />,
      fileName: "with_featured_details.jsx",
    },
    {
      id: "05",
      name: "With tabs and related products",
      component: <WithTabsAndRelatedProducts />,
      fileName: "with_tabs_and_related_products.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file product-pages (nhánh Ecommerce)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/page-examples/product-pages";

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
