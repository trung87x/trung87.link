import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import SimpleDarkWithMenuButtonOnLeft from "./simple_dark_with_menu_button_on_left";
import DarkWithQuickAction from "./dark_with_quick_action";
import SimpleDark from "./simple_dark";
import SimpleWithMenuButtonOnLeft from "./simple_with_menu_button_on_left";
import SimpleNavbar from "./simple";
import WithQuickAction from "./with_quick_action";
import DarkWithSearch from "./dark_with_search";
import WithSearch from "./with_search";
import DarkWithCenteredSearch from "./with_centered_search_and_secondary_links_dark";
import WithCenteredSearch from "./with_centered_search_and_secondary_links";
import WithSearchInColumnLayout from "./with_search_in_column_layout";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple dark with menu button on left",
      component: <SimpleDarkWithMenuButtonOnLeft />,
      fileName: "simple_dark_with_menu_button_on_left.jsx",
    },
    {
      id: "02",
      name: "Dark with quick action",
      component: <DarkWithQuickAction />,
      fileName: "dark_with_quick_action.jsx",
    },
    {
      id: "03",
      name: "Simple dark",
      component: <SimpleDark />,
      fileName: "simple_dark.jsx",
    },
    {
      id: "04",
      name: "Simple with menu button on left",
      component: <SimpleWithMenuButtonOnLeft />,
      fileName: "simple_with_menu_button_on_left.jsx",
    },
    {
      id: "05",
      name: "Simple",
      component: <SimpleNavbar />,
      fileName: "simple.jsx",
    },
    {
      id: "06",
      name: "With quick action",
      component: <WithQuickAction />,
      fileName: "with_quick_action.jsx",
    },
    {
      id: "07",
      name: "Dark with search",
      component: <DarkWithSearch />,
      fileName: "dark_with_search.jsx",
    },
    {
      id: "08",
      name: "With search",
      component: <WithSearch />,
      fileName: "with_search.jsx",
    },
    {
      id: "09",
      name: "Dark with centered search and secondary links",
      component: <DarkWithCenteredSearch />,
      fileName: "with_centered_search_and_secondary_links_dark.jsx",
    },
    {
      id: "10",
      name: "With centered search and secondary links",
      component: <WithCenteredSearch />,
      fileName: "with_centered_search_and_secondary_links.jsx",
    },
    {
      id: "11",
      name: "With search in column layout",
      component: <WithSearchInColumnLayout />,
      fileName: "with_search_in_column_layout.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file navbars (Application UI > Navigation)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/navigation/navbars";

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
