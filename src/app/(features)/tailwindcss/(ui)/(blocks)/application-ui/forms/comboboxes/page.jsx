import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import WithStatusIndicator from "./with_status_indicator";
import WithImage from "./with_image";
import WithSecondaryText from "./with_secondary_text";

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
      name: "With status indicator",
      component: <WithStatusIndicator />,
      fileName: "with_status_indicator.jsx",
    },
    {
      id: "03",
      name: "With image",
      component: <WithImage />,
      fileName: "with_image.jsx",
    },
    {
      id: "04",
      name: "With secondary text",
      component: <WithSecondaryText />,
      fileName: "with_secondary_text.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file comboboxes (Application UI > Forms)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/forms/comboboxes";

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
