import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithOrderSummarySidebar from "./with_order_summary_sidebar";
import SingleStepWithOrderSummary from "./single_step_with_order_summary";
import WithMobileOrderSummaryOverlay from "./with_mobile_order_summary_overlay";
import MultiStep from "./multi_step";
import SplitWithOrderSummary from "./split_with_order_summary";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With order summary sidebar",
      component: <WithOrderSummarySidebar />,
      fileName: "with_order_summary_sidebar.jsx",
    },
    {
      id: "02",
      name: "Single step with order summary",
      component: <SingleStepWithOrderSummary />,
      fileName: "single_step_with_order_summary.jsx",
    },
    {
      id: "03",
      name: "With mobile order summary overlay",
      component: <WithMobileOrderSummaryOverlay />,
      fileName: "with_mobile_order_summary_overlay.jsx",
    },
    {
      id: "04",
      name: "Multi-step",
      component: <MultiStep />,
      fileName: "multi_step.jsx",
    },
    {
      id: "05",
      name: "Split with order summary",
      component: <SplitWithOrderSummary />,
      fileName: "split_with_order_summary.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file checkout-pages (nhánh Ecommerce)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/page-examples/checkout-pages";

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
