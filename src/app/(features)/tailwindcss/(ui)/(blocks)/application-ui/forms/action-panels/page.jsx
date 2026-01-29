import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import WithLink from "./with_link";
import WithButtonOnRight from "./with_button_on_right";
import WithButtonAtTopRight from "./with_button_at_top_right";
import WithToggle from "./with_toggle";
import WithInput from "./with_input";
import SimpleWell from "./simple_well";
import WithWell from "./with_well";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    { id: "01", name: "Simple", component: <Simple />, fileName: "simple.jsx" },
    {
      id: "02",
      name: "With link",
      component: <WithLink />,
      fileName: "with_link.jsx",
    },
    {
      id: "03",
      name: "With button on right",
      component: <WithButtonOnRight />,
      fileName: "with_button_on_right.jsx",
    },
    {
      id: "04",
      name: "With button at top right",
      component: <WithButtonAtTopRight />,
      fileName: "with_button_at_top_right.jsx",
    },
    {
      id: "05",
      name: "With toggle",
      component: <WithToggle />,
      fileName: "with_toggle.jsx",
    },
    {
      id: "06",
      name: "With input",
      component: <WithInput />,
      fileName: "with_input.jsx",
    },
    {
      id: "07",
      name: "Simple well",
      component: <SimpleWell />,
      fileName: "simple_well.jsx",
    },
    {
      id: "08",
      name: "With well",
      component: <WithWell />,
      fileName: "with_well.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file action-panels (Application UI > Forms)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/forms/action-panels";

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
