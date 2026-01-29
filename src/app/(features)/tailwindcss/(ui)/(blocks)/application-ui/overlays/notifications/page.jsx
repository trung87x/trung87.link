import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import Condensed from "./condensed";
import WithActionsBelow from "./with_actions_below";
import WithAvatar from "./with_avatar";
import WithSplitButtons from "./with_split_buttons";
import WithButtonsBelow from "./with_buttons_below";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    { id: "01", name: "Simple", component: <Simple />, fileName: "simple.jsx" },
    {
      id: "02",
      name: "Condensed",
      component: <Condensed />,
      fileName: "condensed.jsx",
    },
    {
      id: "03",
      name: "With actions below",
      component: <WithActionsBelow />,
      fileName: "with_actions_below.jsx",
    },
    {
      id: "04",
      name: "With avatar",
      component: <WithAvatar />,
      fileName: "with_avatar.jsx",
    },
    {
      id: "05",
      name: "With split buttons",
      component: <WithSplitButtons />,
      fileName: "with_split_buttons.jsx",
    },
    {
      id: "06",
      name: "With buttons below",
      component: <WithButtonsBelow />,
      fileName: "with_buttons_below.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file notifications (Application UI > Overlays)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/overlays/notifications";

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
