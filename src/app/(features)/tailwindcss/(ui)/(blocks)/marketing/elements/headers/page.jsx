import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import WithStackedFlyoutMenu from "./with_stacked_flyout_menu";
import Constrained from "./constrained";
import OnBrandBackground from "./on_brand_background";
import WithFullWidthFlyoutMenu from "./with_full_width_flyout_menu";
import FullWidth from "./full_width";
import WithCallToAction from "./with_call_to_action";
import WithMultipleFlyoutMenus from "./with_multiple_flyout_menus";
import WithIconsInMobileMenu from "./with_icons_in_mobile_menu";
import WithLeftAlignedNav from "./with_left_aligned_nav";
import WithRightAlignedNav from "./with_right_aligned_nav";
import WithCenteredLogo from "./with_centered_logo";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With stacked flyout menu",
      component: <WithStackedFlyoutMenu />,
      fileName: "with_stacked_flyout_menu.jsx",
    },
    {
      id: "02",
      name: "Constrained",
      component: <Constrained />,
      fileName: "constrained.jsx",
    },
    {
      id: "03",
      name: "On brand background",
      component: <OnBrandBackground />,
      fileName: "on_brand_background.jsx",
    },
    {
      id: "04",
      name: "With full width flyout menu",
      component: <WithFullWidthFlyoutMenu />,
      fileName: "with_full_width_flyout_menu.jsx",
    },
    {
      id: "05",
      name: "Full width",
      component: <FullWidth />,
      fileName: "full_width.jsx",
    },
    {
      id: "06",
      name: "With call-to-action",
      component: <WithCallToAction />,
      fileName: "with_call_to_action.jsx",
    },
    {
      id: "07",
      name: "With multiple flyout menus",
      component: <WithMultipleFlyoutMenus />,
      fileName: "with_multiple_flyout_menus.jsx",
    },
    {
      id: "08",
      name: "With icons in mobile menu",
      component: <WithIconsInMobileMenu />,
      fileName: "with_icons_in_mobile_menu.jsx",
    },
    {
      id: "09",
      name: "With left-aligned nav",
      component: <WithLeftAlignedNav />,
      fileName: "with_left_aligned_nav.jsx",
    },
    {
      id: "10",
      name: "With right-aligned nav",
      component: <WithRightAlignedNav />,
      fileName: "with_right_aligned_nav.jsx",
    },
    {
      id: "11",
      name: "With centered logo",
      component: <WithCenteredLogo />,
      fileName: "with_centered_logo.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file headers
  const baseDir = "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/elements/headers";

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
            // Gọi getRaw trực tiếp tại phần render để đảm bảo đường dẫn chính xác
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
