import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import SimpleNoLabels from "./simple_no_labels";
import SplitScreen from "./split_screen";
import SimpleCard from "./simple_card";

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
      name: "Simple no labels",
      component: <SimpleNoLabels />,
      fileName: "simple_no_labels.jsx",
    },
    {
      id: "03",
      name: "Split screen",
      component: <SplitScreen />,
      fileName: "split_screen.jsx",
    },
    {
      id: "04",
      name: "Simple card",
      component: <SimpleCard />,
      fileName: "simple_card.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file sign-in-forms (Application UI > Forms)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/forms/sign-in-forms";

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
