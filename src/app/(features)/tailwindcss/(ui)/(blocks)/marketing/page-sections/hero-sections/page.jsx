import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import SimpleCentered from "./simple_centered";
import SplitWithScreenshot from "./split_with_screenshot_on_dark";
import SplitWithBorderedScreenshot from "./split_with_screenshot";
import SplitWithCodeExample from "./split_with_code_example";
import SimpleCenteredWithBackgroundImage from "./simple_centered_with_background_image";
import WithBorderedAppScreenshot from "./with_app_screenshot";
import WithAppScreenshot from "./with_app_screenshot_on_dark";
import WithPhoneMockup from "./with_phone_mockup";
import SplitWithImage from "./split_with_image";
import WithAngledImageOnRight from "./with_angled_image_on_right";
import WithImageTiles from "./with_image_tiles";
import WithOffsetImage from "./with_offset_image";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple Centered",
      component: <SimpleCentered />,
      fileName: "simple_centered.jsx",
    },
    {
      id: "02",
      name: "Split with screenshot",
      component: <SplitWithScreenshot />,
      fileName: "split_with_screenshot_on_dark.jsx",
    },
    {
      id: "03",
      name: "Split with bordered screenshot",
      component: <SplitWithBorderedScreenshot />,
      fileName: "split_with_screenshot.jsx",
    },
    {
      id: "04",
      name: "Split with code example",
      component: <SplitWithCodeExample />,
      fileName: "split_with_code_example.jsx",
    },
    {
      id: "05",
      name: "Simple centered with background image",
      component: <SimpleCenteredWithBackgroundImage />,
      fileName: "simple_centered_with_background_image.jsx",
    },
    {
      id: "06",
      name: "With bordered app screenshot",
      component: <WithBorderedAppScreenshot />,
      fileName: "with_app_screenshot.jsx",
    },
    {
      id: "07",
      name: "With app screenshot",
      component: <WithAppScreenshot />,
      fileName: "with_app_screenshot_on_dark.jsx",
    },
    {
      id: "08",
      name: "With phone mockup",
      component: <WithPhoneMockup />,
      fileName: "with_phone_mockup.jsx",
    },
    {
      id: "09",
      name: "Split with image",
      component: <SplitWithImage />,
      fileName: "split_with_image.jsx",
    },
    {
      id: "10",
      name: "With angled image on right",
      component: <WithAngledImageOnRight />,
      fileName: "with_angled_image_on_right.jsx",
    },
    {
      id: "11",
      name: "With image tiles",
      component: <WithImageTiles />,
      fileName: "with_image_tiles.jsx",
    },
    {
      id: "12",
      name: "With offset image",
      component: <WithOffsetImage />,
      fileName: "with_offset_image.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file hero-sections
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/hero-sections";

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
            // Gọi getRaw trực tiếp để render code từ hệ thống file
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
