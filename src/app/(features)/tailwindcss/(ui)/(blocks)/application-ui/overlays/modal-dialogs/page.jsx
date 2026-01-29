import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import SimpleWithGrayFooter from "./simple_with_gray_footer";
import CenteredWithSingleAction from "./centered_with_single_action";
import CenteredWithWideButtons from "./centered_with_wide_buttons";
import SimpleAlert from "./simple_alert";
import SimpleWithDismissButton from "./simple_with_dismiss_button";
import SimpleAlertWithLeftAlignedButtons from "./simple_alert_with_left_aligned_buttons";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple with gray footer",
      component: <SimpleWithGrayFooter />,
      fileName: "simple_with_gray_footer.jsx",
    },
    {
      id: "02",
      name: "Centered with single action",
      component: <CenteredWithSingleAction />,
      fileName: "centered_with_single_action.jsx",
    },
    {
      id: "03",
      name: "Centered with wide buttons",
      component: <CenteredWithWideButtons />,
      fileName: "centered_with_wide_buttons.jsx",
    },
    {
      id: "04",
      name: "Simple alert",
      component: <SimpleAlert />,
      fileName: "simple_alert.jsx",
    },
    {
      id: "05",
      name: "Simple with dismiss button",
      component: <SimpleWithDismissButton />,
      fileName: "simple_with_dismiss_button.jsx",
    },
    {
      id: "06",
      name: "Simple alert with left-aligned buttons",
      component: <SimpleAlertWithLeftAlignedButtons />,
      fileName: "simple_alert_with_left_aligned_buttons.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file modal-dialogs (Application UI > Overlays)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/overlays/modal-dialogs";

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
