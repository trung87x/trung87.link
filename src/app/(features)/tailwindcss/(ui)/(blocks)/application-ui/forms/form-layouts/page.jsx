import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Stacked from "./stacked";
import TwoColumn from "./two_column";
import TwoColumnWithCards from "./two_column_with_cards";
import LabelsOnLeft from "./labels_on_left";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Stacked",
      component: <Stacked />,
      fileName: "stacked.jsx",
    },
    {
      id: "02",
      name: "Two-column",
      component: <TwoColumn />,
      fileName: "two_column.jsx",
    },
    {
      id: "03",
      name: "Two-column with cards",
      component: <TwoColumnWithCards />,
      fileName: "two_column_with_cards.jsx",
    },
    {
      id: "04",
      name: "Labels on left",
      component: <LabelsOnLeft />,
      fileName: "labels_on_left.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file form-layouts (Application UI > Forms)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/forms/form-layouts";

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
