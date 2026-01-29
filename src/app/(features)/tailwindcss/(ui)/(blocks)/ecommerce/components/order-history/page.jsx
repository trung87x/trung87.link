import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import InvoicePanels from "./invoice_panels";
import InvoiceTable from "./invoice_table";
import InvoiceList from "./invoice_list";
import InvoiceListWithQuickActions from "./invoice_list_with_quick_actions";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Invoice panels",
      component: <InvoicePanels />,
      fileName: "invoice_panels.jsx",
    },
    {
      id: "02",
      name: "Invoice table",
      component: <InvoiceTable />,
      fileName: "invoice_table.jsx",
    },
    {
      id: "03",
      name: "Invoice list",
      component: <InvoiceList />,
      fileName: "invoice_list.jsx",
    },
    {
      id: "04",
      name: "Invoice list with quick actions",
      component: <InvoiceListWithQuickActions />,
      fileName: "invoice_list_with_quick_actions.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file order-history (Ecommerce Components)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/components/order-history";

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
