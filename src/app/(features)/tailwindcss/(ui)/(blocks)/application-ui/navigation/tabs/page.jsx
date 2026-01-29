import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import TabsWithUnderline from "./tabs_with_underline";
import TabsWithUnderlineAndIcons from "./tabs_with_underline_and_icons";
import TabsInPills from "./tabs_in_pills";
import TabsInPillsOnGray from "./tabs_in_pills_on_gray";
import TabsInPillsWithBrandColor from "./tabs_in_pills_with_brand_color";
import FullWidthTabsWithUnderline from "./full_width_tabs_with_underline";
import BarWithUnderline from "./bar_with_underline";
import TabsWithUnderlineAndBadges from "./tabs_with_underline_and_badges";
import SimpleTabs from "./simple_on_dark";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Tabs with underline",
      component: <TabsWithUnderline />,
      fileName: "tabs_with_underline.jsx",
    },
    {
      id: "02",
      name: "Tabs with underline and icons",
      component: <TabsWithUnderlineAndIcons />,
      fileName: "tabs_with_underline_and_icons.jsx",
    },
    {
      id: "03",
      name: "Tabs in pills",
      component: <TabsInPills />,
      fileName: "tabs_in_pills.jsx",
    },
    {
      id: "04",
      name: "Tabs in pills on gray",
      component: <TabsInPillsOnGray />,
      fileName: "tabs_in_pills_on_gray.jsx",
    },
    {
      id: "05",
      name: "Tabs in pills with brand color",
      component: <TabsInPillsWithBrandColor />,
      fileName: "tabs_in_pills_with_brand_color.jsx",
    },
    {
      id: "06",
      name: "Full-width tabs with underline",
      component: <FullWidthTabsWithUnderline />,
      fileName: "full_width_tabs_with_underline.jsx",
    },
    {
      id: "07",
      name: "Bar with underline",
      component: <BarWithUnderline />,
      fileName: "bar_with_underline.jsx",
    },
    {
      id: "08",
      name: "Tabs with underline and badges",
      component: <TabsWithUnderlineAndBadges />,
      fileName: "tabs_with_underline_and_badges.jsx",
    },
    {
      id: "09",
      name: "Simple",
      component: <SimpleTabs />,
      fileName: "simple_on_dark.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file tabs (Application UI > Navigation)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/navigation/tabs";

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
