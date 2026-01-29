import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithLabel from "./with_label";
import WithIcon from "./with_icon";
import WithLabelOnLeft from "./with_label_on_left";
import WithTitle from "./with_title";
import WithTitleOnLeft from "./with_title_on_left";
import WithButton from "./with_button";
import WithTitleAndButton from "./with_title_and_button";
import WithToolbar from "./with_toolbar";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With label",
      component: <WithLabel />,
      fileName: "with_label.jsx",
    },
    {
      id: "02",
      name: "With icon",
      component: <WithIcon />,
      fileName: "with_icon.jsx",
    },
    {
      id: "03",
      name: "With label on left",
      component: <WithLabelOnLeft />,
      fileName: "with_label_on_left.jsx",
    },
    {
      id: "04",
      name: "With title",
      component: <WithTitle />,
      fileName: "with_title.jsx",
    },
    {
      id: "05",
      name: "With title on left",
      component: <WithTitleOnLeft />,
      fileName: "with_title_on_left.jsx",
    },
    {
      id: "06",
      name: "With button",
      component: <WithButton />,
      fileName: "with_button.jsx",
    },
    {
      id: "07",
      name: "With title and button",
      component: <WithTitleAndButton />,
      fileName: "with_title_and_button.jsx",
    },
    {
      id: "08",
      name: "With toolbar",
      component: <WithToolbar />,
      fileName: "with_toolbar.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file dividers (Application UI > Layout)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/layout/dividers";

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
