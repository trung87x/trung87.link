import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import SimpleSidebar from "./light_sidebar";
import SimpleDarkSidebar from "./dark_sidebar";
import SidebarWithHeader from "./light_sidebar_with_header";
import DarkSidebarWithHeader from "./dark_sidebar_with_header";
import WithConstrainedContent from "./light_sidebar_with_constrained_content_area";
import WithOffWhiteBackground from "./light_sidebar_with_off_white_background";
import SimpleBrandSidebar from "./brand_sidebar";
import BrandSidebarWithHeader from "./brand_sidebar_with_header";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple sidebar",
      component: <SimpleSidebar />,
      fileName: "light_sidebar.jsx",
    },
    {
      id: "02",
      name: "Simple dark sidebar",
      component: <SimpleDarkSidebar />,
      fileName: "dark_sidebar.jsx",
    },
    {
      id: "03",
      name: "Sidebar with header",
      component: <SidebarWithHeader />,
      fileName: "light_sidebar_with_header.jsx",
    },
    {
      id: "04",
      name: "Dark sidebar with header",
      component: <DarkSidebarWithHeader />,
      fileName: "dark_sidebar_with_header.jsx",
    },
    {
      id: "05",
      name: "With constrained content area",
      component: <WithConstrainedContent />,
      fileName: "light_sidebar_with_constrained_content_area.jsx",
    },
    {
      id: "06",
      name: "With off-white background",
      component: <WithOffWhiteBackground />,
      fileName: "light_sidebar_with_off_white_background.jsx",
    },
    {
      id: "07",
      name: "Simple brand sidebar",
      component: <SimpleBrandSidebar />,
      fileName: "brand_sidebar.jsx",
    },
    {
      id: "08",
      name: "Brand sidebar with header",
      component: <BrandSidebarWithHeader />,
      fileName: "brand_sidebar_with_header.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục sidebar (Application UI > Application Shells)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/application-shells/sidebar";

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
