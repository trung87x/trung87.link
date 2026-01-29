import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import WithBadges from "./with_badges";
import WithIconsAndBadges from "./with_icons_and_badges";
import WithIcons from "./with_icons";
import WithSecondaryNavigation from "./with_secondary_navigation";
import OnGray from "./on_gray";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      fileName: "simple.jsx",
    },
    {
      id: "02",
      name: "With badges",
      component: <WithBadges />,
      fileName: "with_badges.jsx",
    },
    {
      id: "03",
      name: "With icons and badges",
      component: <WithIconsAndBadges />,
      fileName: "with_icons_and_badges.jsx",
    },
    {
      id: "04",
      name: "With icons",
      component: <WithIcons />,
      fileName: "with_icons.jsx",
    },
    {
      id: "05",
      name: "With secondary navigation",
      component: <WithSecondaryNavigation />,
      fileName: "with_secondary_navigation.jsx",
    },
    {
      id: "06",
      name: "On gray",
      component: <OnGray />,
      fileName: "on_gray.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file vertical-navigation (Application UI > Navigation)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/navigation/vertical-navigation";

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
