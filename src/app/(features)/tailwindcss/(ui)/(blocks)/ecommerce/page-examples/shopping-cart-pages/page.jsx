import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithRelatedProducts from "./with_related_products";
import SimpleWithPolicyGrid from "./simple_with_policy_grid";
import WithPolicyGridAndExtendedSummary from "./with_policy_grid_and_extended_summary";

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
      name: "Simple with policy grid",
      component: <SimpleWithPolicyGrid />,
      fileName: "simple_with_policy_grid.jsx",
    },
    {
      id: "03",
      name: "With policy grid and extended summary",
      component: <WithPolicyGridAndExtendedSummary />,
      fileName: "with_policy_grid_and_extended_summary.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file shopping-cart-pages (nhánh Ecommerce)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/page-examples/shopping-cart-pages";

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
