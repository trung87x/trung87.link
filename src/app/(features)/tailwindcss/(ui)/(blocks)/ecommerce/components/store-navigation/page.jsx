import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithFeaturedCategories from "./with_featured_categories";
import WithImageGrid from "./with_image_grid";
import WithSimpleMenuAndPromo from "./with_simple_menu_and_promo";
import WithCenteredLogoAndFeaturedCategories from "./with_centered_logo_and_featured_categories";
import WithDoubleColumnAndPersistentMobileNav from "./with_double_column_and_persistent_mobile_nav";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With featured categories",
      component: <WithFeaturedCategories />,
      fileName: "with_featured_categories.jsx",
    },
    {
      id: "02",
      name: "With image grid",
      component: <WithImageGrid />,
      fileName: "with_image_grid.jsx",
    },
    {
      id: "03",
      name: "With simple menu and promo",
      component: <WithSimpleMenuAndPromo />,
      fileName: "with_simple_menu_and_promo.jsx",
    },
    {
      id: "04",
      name: "With centered logo and featured categories",
      component: <WithCenteredLogoAndFeaturedCategories />,
      fileName: "with_centered_logo_and_featured_categories.jsx",
    },
    {
      id: "05",
      name: "With double column and persistent mobile nav",
      component: <WithDoubleColumnAndPersistentMobileNav />,
      fileName: "with_double_column_and_persistent_mobile_nav.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file store-navigation (nhánh Ecommerce/Components)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/components/store-navigation";

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
            // Sử dụng getRaw để lấy mã nguồn trực tiếp từ file dựa trên fileName và baseDir
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
