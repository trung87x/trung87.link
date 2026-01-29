import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import các components hiển thị
import WithButton from "./with_button";
import OnDark from "./on_dark";
import OnBrand from "./on_brand";
import WithBackgroundGlow from "./with_background_glow";
import WithLink from "./with_link";
import LeftAligned from "./left_aligned";
import BottomAligned from "./bottom_aligned";
import FloatingAtBottom from "./floating_at_bottom";
import FloatingAtBottomCentered from "./floating_at_bottom_centered";
import PrivacyNoticeRightAligned from "./privacy_notice_right_aligned";
import PrivacyNoticeCentered from "./privacy_notice_centered";
import PrivacyNoticeLeftAligned from "./privacy_notice_left_aligned";
import PrivacyNoticeFullWidth from "./privacy_notice_full_width";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With button",
      component: <WithButton />,
      fileName: "with_button.jsx",
    },
    {
      id: "02",
      name: "On dark",
      component: <OnDark />,
      fileName: "on_dark.jsx",
    },
    {
      id: "03",
      name: "On brand",
      component: <OnBrand />,
      fileName: "on_brand.jsx",
    },
    {
      id: "04",
      name: "With background glow",
      component: <WithBackgroundGlow />,
      fileName: "with_background_glow.jsx",
    },
    {
      id: "05",
      name: "With link",
      component: <WithLink />,
      fileName: "with_link.jsx",
    },
    {
      id: "06",
      name: "Left-aligned",
      component: <LeftAligned />,
      fileName: "left_aligned.jsx",
    },
    {
      id: "07",
      name: "Bottom aligned",
      component: <BottomAligned />,
      fileName: "bottom_aligned.jsx",
    },
    {
      id: "08",
      name: "Floating at bottom",
      component: <FloatingAtBottom />,
      fileName: "floating_at_bottom.jsx",
    },
    {
      id: "09",
      name: "Floating at bottom centered",
      component: <FloatingAtBottomCentered />,
      fileName: "floating_at_bottom_centered.jsx",
    },
    {
      id: "10",
      name: "Privacy notice right-aligned",
      component: <PrivacyNoticeRightAligned />,
      fileName: "privacy_notice_right_aligned.jsx",
    },
    {
      id: "11",
      name: "Privacy notice centered",
      component: <PrivacyNoticeCentered />,
      fileName: "privacy_notice_centered.jsx",
    },
    {
      id: "12",
      name: "Privacy notice left-aligned",
      component: <PrivacyNoticeLeftAligned />,
      fileName: "privacy_notice_left_aligned.jsx",
    },
    {
      id: "13",
      name: "Privacy notice full width",
      component: <PrivacyNoticeFullWidth />,
      fileName: "privacy_notice_full_width.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file banners
  const baseDir = "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/elements/banners";

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
            // Gọi getRaw tại đây để lấy code dựa trên đường dẫn tập trung
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
