import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import SimpleToggle from "./simple_toggle";
import ShortToggle from "./short_toggle";
import ToggleWithIcon from "./toggle_with_icon";
import WithLeftLabelAndDescription from "./with_left_label_and_description";
import WithRightLabel from "./with_right_label";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple toggle",
      component: <SimpleToggle />,
      fileName: "simple_toggle.jsx",
    },
    {
      id: "02",
      name: "Short toggle",
      component: <ShortToggle />,
      fileName: "short_toggle.jsx",
    },
    {
      id: "03",
      name: "Toggle with icon",
      component: <ToggleWithIcon />,
      fileName: "toggle_with_icon.jsx",
    },
    {
      id: "04",
      name: "With left label and description",
      component: <WithLeftLabelAndDescription />,
      fileName: "with_left_label_and_description.jsx",
    },
    {
      id: "05",
      name: "With right label",
      component: <WithRightLabel />,
      fileName: "with_right_label.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file toggles (Application UI > Forms)
  const baseDir = "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/forms/toggles";

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
