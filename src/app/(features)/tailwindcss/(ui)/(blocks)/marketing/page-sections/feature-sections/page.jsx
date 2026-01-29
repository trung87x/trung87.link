import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import WithProductScreenshot from "./with_product_screenshot";
import Centered2x2Grid from "./centered_2x2_grid";
import WithLargeScreenshot from "./with_large_screenshot";
import WithLargeBorderedScreenshot from "./with_large_bordered_screenshot";
import SimpleThreeColumnSmallIcons from "./simple_three_column_with_small_icons";
import WithProductScreenshotOnLeft from "./with_product_screenshot_on_left";
import SimpleThreeColumnLargeIcons from "./simple_three_column_with_large_icons";
import ContainedInPanel from "./contained_in_panel";
import WithProductScreenshotPanel from "./with_product_screenshot_panel";
import WithTestimonial from "./with_testimonial";
import Offset2x2Grid from "./offset_2x2_grid";
import WithCodeExamplePanel from "./with_code_example_panel";
import OffsetWithFeatureList from "./offset_with_feature_list";
import Simple from "./simple";
import Simple3x2Grid from "./simple_3x2_on_dark";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With product screenshot",
      component: <WithProductScreenshot />,
      fileName: "with_product_screenshot.jsx",
    },
    {
      id: "02",
      name: "Centered 2x2 grid",
      component: <Centered2x2Grid />,
      fileName: "centered_2x2_grid.jsx",
    },
    {
      id: "03",
      name: "With large screenshot",
      component: <WithLargeScreenshot />,
      fileName: "with_large_screenshot.jsx",
    },
    {
      id: "04",
      name: "With large bordered screenshot",
      component: <WithLargeBorderedScreenshot />,
      fileName: "with_large_bordered_screenshot.jsx",
    },
    {
      id: "05",
      name: "Simple three column with small icons",
      component: <SimpleThreeColumnSmallIcons />,
      fileName: "simple_three_column_with_small_icons.jsx",
    },
    {
      id: "06",
      name: "With product screenshot on left",
      component: <WithProductScreenshotOnLeft />,
      fileName: "with_product_screenshot_on_left.jsx",
    },
    {
      id: "07",
      name: "Simple three column with large icons",
      component: <SimpleThreeColumnLargeIcons />,
      fileName: "simple_three_column_with_large_icons.jsx",
    },
    {
      id: "08",
      name: "Contained in panel",
      component: <ContainedInPanel />,
      fileName: "contained_in_panel.jsx",
    },
    {
      id: "09",
      name: "With product screenshot panel",
      component: <WithProductScreenshotPanel />,
      fileName: "with_product_screenshot_panel.jsx",
    },
    {
      id: "10",
      name: "With testimonial",
      component: <WithTestimonial />,
      fileName: "with_testimonial.jsx",
    },
    {
      id: "11",
      name: "Offset 2x2 grid",
      component: <Offset2x2Grid />,
      fileName: "offset_2x2_grid.jsx",
    },
    {
      id: "12",
      name: "With code example panel",
      component: <WithCodeExamplePanel />,
      fileName: "with_code_example_panel.jsx",
    },
    {
      id: "13",
      name: "Offset with feature list",
      component: <OffsetWithFeatureList />,
      fileName: "offset_with_feature_list.jsx",
    },
    { id: "14", name: "Simple", component: <Simple />, fileName: "simple.jsx" },
    {
      id: "15",
      name: "Simple 3x2 grid",
      component: <Simple3x2Grid />,
      fileName: "simple_3x2_on_dark.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file feature-sections
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/feature-sections";

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
            // Gọi getRaw trực tiếp tại đây để lấy mã nguồn chính xác
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
