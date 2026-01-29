import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import WithDescription from "./with_description";
import WithActions from "./with_actions";
import WithAction from "./with_action";
import WithInputGroup from "./with_input_group";
import WithTabs from "./with_tabs";
import WithActionsAndTabs from "./with_actions_and_tabs";
import WithInlineTabs from "./with_inline_tabs";
import WithLabel from "./with_label";
import WithBadgeAndDropdown from "./with_badge_and_dropdown";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    { id: "01", name: "Simple", component: <Simple />, fileName: "simple.jsx" },
    {
      id: "02",
      name: "With description",
      component: <WithDescription />,
      fileName: "with_description.jsx",
    },
    {
      id: "03",
      name: "With actions",
      component: <WithActions />,
      fileName: "with_actions.jsx",
    },
    {
      id: "04",
      name: "With action",
      component: <WithAction />,
      fileName: "with_action.jsx",
    },
    {
      id: "05",
      name: "With input group",
      component: <WithInputGroup />,
      fileName: "with_input_group.jsx",
    },
    {
      id: "06",
      name: "With tabs",
      component: <WithTabs />,
      fileName: "with_tabs.jsx",
    },
    {
      id: "07",
      name: "With actions and tabs",
      component: <WithActionsAndTabs />,
      fileName: "with_actions_and_tabs.jsx",
    },
    {
      id: "08",
      name: "With inline tabs",
      component: <WithInlineTabs />,
      fileName: "with_inline_tabs.jsx",
    },
    {
      id: "09",
      name: "With label",
      component: <WithLabel />,
      fileName: "with_label.jsx",
    },
    {
      id: "10",
      name: "With badge and dropdown",
      component: <WithBadgeAndDropdown />,
      fileName: "with_badge_and_dropdown.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file section-headings (Application UI > Headings)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/headings/section-headings";

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
