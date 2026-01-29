import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import WithStickyProductScreenshot from "./with_sticky_product_screenshot";
import WithTestimonial from "./with_testimonial";
import WithImageTitles from "./with_image_titles";
import TwoColumnsWithScreenshot from "./two_columns_with_screenshot";
import WithTestimonialAndStats from "./with_testimonial_and_stats";
import SplitWithImage from "./split_with_image";
import Centered from "./centered";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With sticky product screenshot",
      component: <WithStickyProductScreenshot />,
      fileName: "with_sticky_product_screenshot.jsx",
    },
    {
      id: "02",
      name: "With testimonial",
      component: <WithTestimonial />,
      fileName: "with_testimonial.jsx",
    },
    {
      id: "03",
      name: "With image tiles",
      component: <WithImageTitles />,
      fileName: "with_image_titles.jsx",
    },
    {
      id: "04",
      name: "Two columns with screenshot",
      component: <TwoColumnsWithScreenshot />,
      fileName: "two_columns_with_screenshot.jsx",
    },
    {
      id: "05",
      name: "With testimonial and stats",
      component: <WithTestimonialAndStats />,
      fileName: "with_testimonial_and_stats.jsx",
    },
    {
      id: "06",
      name: "Split with image",
      component: <SplitWithImage />,
      fileName: "split_with_image.jsx",
    },
    {
      id: "07",
      name: "Centered",
      component: <Centered />,
      fileName: "centered.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file content-sections
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/content-sections";

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
            // Gọi getRaw trực tiếp tại đây để lấy code dựa trên fileName và baseDir
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
