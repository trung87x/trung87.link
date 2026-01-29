import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithInlineActionsAndExpandableSidebarFilters from "./with_inline_actions_and_expandable_sidebar_filters";
import WithCenteredTextAndDropdownProductFilters from "./with_centered_text_and_dropdown_product_filters";
import WithDropdownProductFilters from "./with_dropdown_product_filters";
import WithExpandableProductFilterPanel from "./with_expandable_product_filter_panel";
import SidebarFilters from "./sidebar_filters";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With inline actions and expandable sidebar filters",
      component: <WithInlineActionsAndExpandableSidebarFilters />,
      fileName: "with_inline_actions_and_expandable_sidebar_filters.jsx",
    },
    {
      id: "02",
      name: "With centered text and dropdown product filters",
      component: <WithCenteredTextAndDropdownProductFilters />,
      fileName: "with_centered_text_and_dropdown_product_filters.jsx",
    },
    {
      id: "03",
      name: "With dropdown product filters",
      component: <WithDropdownProductFilters />,
      fileName: "with_dropdown_product_filters.jsx",
    },
    {
      id: "04",
      name: "With expandable product filter panel",
      component: <WithExpandableProductFilterPanel />,
      fileName: "with_expandable_product_filter_panel.jsx",
    },
    {
      id: "05",
      name: "Sidebar filters",
      component: <SidebarFilters />,
      fileName: "sidebar_filters.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file category-filters (Ecommerce Components)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/components/category-filters";

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
