import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithLighterPageHeader from "./dark_nav_with_white_page_header";
import WithBottomBorder from "./light_nav_with_bottom_border";
import OnSubtleBackground from "./light_nav_on_gray_background";
import BrandedNavCompactLighter from "./branded_nav_with_compact_white_page_header";
import WithOverlap from "./dark_nav_with_overlap";
import BrandNavWithOverlap from "./brand_nav_with_overlap";
import BrandedNavLighterHeader from "./branded_nav_with_white_page_header";
import WithCompactLighterHeader from "./dark_nav_with_compact_white_page_header";
import TwoRowNavWithOverlap from "./two_row_navigation_with_overlap";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Branded nav with white page header",
      component: <WithLighterPageHeader />,
      fileName: "dark_nav_with_white_page_header.jsx",
    },
    {
      id: "02",
      name: "With bottom border",
      component: <WithBottomBorder />,
      fileName: "light_nav_with_bottom_border.jsx",
    },
    {
      id: "03",
      name: "On subtle background",
      component: <OnSubtleBackground />,
      fileName: "light_nav_on_gray_background.jsx",
    },
    {
      id: "04",
      name: "Branded nav with compact lighter page header",
      component: <BrandedNavCompactLighter />,
      fileName: "branded_nav_with_compact_white_page_header.jsx",
    },
    {
      id: "05",
      name: "With overlap",
      component: <WithOverlap />,
      fileName: "dark_nav_with_overlap.jsx",
    },
    {
      id: "06",
      name: "Brand nav with overlap",
      component: <BrandNavWithOverlap />,
      fileName: "brand_nav_with_overlap.jsx",
    },
    {
      id: "07",
      name: "Branded nav with lighter page header",
      component: <BrandedNavLighterHeader />,
      fileName: "branded_nav_with_white_page_header.jsx",
    },
    {
      id: "08",
      name: "With compact lighter page header",
      component: <WithCompactLighterHeader />,
      fileName: "dark_nav_with_compact_white_page_header.jsx",
    },
    {
      id: "09",
      name: "Two-row navigation with overlap",
      component: <TwoRowNavWithOverlap />,
      fileName: "two_row_navigation_with_overlap.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục stacked layouts (Application UI > Application Shells)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/application-shells/stacked";

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
