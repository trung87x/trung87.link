import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import WithInvoiceListAndQuickActions from "./with_invoice_list_and_quick_actions";
import WithInvoicePanels from "./with_invoice_panels";
import WithInvoiceTables from "./with_invoice_tables";
import WithInvoiceList from "./with_invoice_list";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      fileName: "simple.jsx",
    },
    {
      id: "02",
      name: "With invoice list and quick actions",
      component: <WithInvoiceListAndQuickActions />,
      fileName: "with_invoice_list_and_quick_actions.jsx",
    },
    {
      id: "03",
      name: "With invoice panels",
      component: <WithInvoicePanels />,
      fileName: "with_invoice_panels.jsx",
    },
    {
      id: "04",
      name: "With invoice tables",
      component: <WithInvoiceTables />,
      fileName: "with_invoice_tables.jsx",
    },
    {
      id: "05",
      name: "With invoice list",
      component: <WithInvoiceList />,
      fileName: "with_invoice_list.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file order-history-pages (nhánh Ecommerce)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/page-examples/order-history-pages";

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
            // Sử dụng getRaw để render mã nguồn trực tiếp từ file dựa trên fileName và baseDir
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
