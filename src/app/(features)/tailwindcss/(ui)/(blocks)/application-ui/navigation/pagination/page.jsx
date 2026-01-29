import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import CardFooterWithPageButtons from "./card_footer_with_page_buttons";
import CenteredPageNumbers from "./centered_page_numbers";
import SimpleCardFooter from "./simple_card_footer";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Card footer with page buttons",
      component: <CardFooterWithPageButtons />,
      fileName: "card_footer_with_page_buttons.jsx",
    },
    {
      id: "02",
      name: "Centered page numbers",
      component: <CenteredPageNumbers />,
      fileName: "centered_page_numbers.jsx",
    },
    {
      id: "03",
      name: "Simple card footer",
      component: <SimpleCardFooter />,
      fileName: "simple_card_footer.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file pagination (Application UI > Navigation)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/navigation/pagination";

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
