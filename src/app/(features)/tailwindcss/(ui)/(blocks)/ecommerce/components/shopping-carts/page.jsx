import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Drawer from "./modal";
import TwoColumnWithQuantityDropdown from "./two_column_with_quantity_dropdown";
import SingleColumn from "./single_column";
import WithExtendedSummary from "./with_extended_summary";
import Dialog from "./slide_over";
import Popover from "./popover";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Drawer",
      component: <Drawer />,
      fileName: "modal.jsx",
    },
    {
      id: "02",
      name: "Two column with quantity dropdown",
      component: <TwoColumnWithQuantityDropdown />,
      fileName: "two_column_with_quantity_dropdown.jsx",
    },
    {
      id: "03",
      name: "Single column",
      component: <SingleColumn />,
      fileName: "single_column.jsx",
    },
    {
      id: "04",
      name: "With extended summary",
      component: <WithExtendedSummary />,
      fileName: "with_extended_summary.jsx",
    },
    {
      id: "05",
      name: "Dialog",
      component: <Dialog />,
      fileName: "slide_over.jsx",
    },
    {
      id: "06",
      name: "Popover",
      component: <Popover />,
      fileName: "popover.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file shopping-carts (nhánh Ecommerce/Components)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/components/shopping-carts";

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
