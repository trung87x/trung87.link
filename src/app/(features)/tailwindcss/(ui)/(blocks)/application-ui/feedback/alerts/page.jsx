import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithDescription from "./with_description";
import WithList from "./with_list";
import WithActions from "./with_actions";
import WithLinkOnRight from "./with_link_on_right";
import WithAccentBorder from "./with_accent_border";
import WithDismissButton from "./with_dismiss_button";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With description",
      component: <WithDescription />,
      fileName: "with_description.jsx",
    },
    {
      id: "02",
      name: "With list",
      component: <WithList />,
      fileName: "with_list.jsx",
    },
    {
      id: "03",
      name: "With actions",
      component: <WithActions />,
      fileName: "with_actions.jsx",
    },
    {
      id: "04",
      name: "With link on right",
      component: <WithLinkOnRight />,
      fileName: "with_link_on_right.jsx",
    },
    {
      id: "05",
      name: "With accent border",
      component: <WithAccentBorder />,
      fileName: "with_accent_border.jsx",
    },
    {
      id: "06",
      name: "With dismiss button",
      component: <WithDismissButton />,
      fileName: "with_dismiss_button.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file alerts (Application UI > Feedback)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/feedback/alerts";

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
