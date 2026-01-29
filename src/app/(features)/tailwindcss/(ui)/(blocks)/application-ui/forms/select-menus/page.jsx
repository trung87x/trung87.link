import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import CustomWithAvatar from "./custom_with_avatar";
import SimpleNative from "./simple_native";
import SimpleCustom from "./simple_custom";
import CustomWithCheckOnLeft from "./custom_with_check_on_left";
import CustomWithStatusIndicator from "./custom_with_status_indicator";
import WithSecondaryText from "./with_secondary_text";
import BrandedWithSupportedText from "./branded_with_supported_text";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Custom with avatar",
      component: <CustomWithAvatar />,
      fileName: "custom_with_avatar.jsx",
    },
    {
      id: "02",
      name: "Simple native",
      component: <SimpleNative />,
      fileName: "simple_native.jsx",
    },
    {
      id: "03",
      name: "Simple custom",
      component: <SimpleCustom />,
      fileName: "simple_custom.jsx",
    },
    {
      id: "04",
      name: "Custom with check on left",
      component: <CustomWithCheckOnLeft />,
      fileName: "custom_with_check_on_left.jsx",
    },
    {
      id: "05",
      name: "Custom with status indicator",
      component: <CustomWithStatusIndicator />,
      fileName: "custom_with_status_indicator.jsx",
    },
    {
      id: "06",
      name: "With secondary text",
      component: <WithSecondaryText />,
      fileName: "with_secondary_text.jsx",
    },
    {
      id: "07",
      name: "Branded with supported text",
      component: <BrandedWithSupportedText />,
      fileName: "branded_with_supported_text.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file select-menus (Application UI > Forms)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/forms/select-menus";

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
