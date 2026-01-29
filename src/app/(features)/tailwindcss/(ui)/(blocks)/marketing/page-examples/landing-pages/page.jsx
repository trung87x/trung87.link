import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import WithScreenshotsAndStats from "./with_screenshots_and_stats";
import WithLargeScreenshotAndTestimonial from "./with_large_screenshot_and_testimonial";
import WithBackgroundImageHeroAndPricingSection from "./with_background_image_hero_and_pricing_section";
import WithMobileScreenshotAndTestimonialsGrid from "./with_mobile_screenshot_and_testimonials_grid";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With screenshots and stats",
      component: <WithScreenshotsAndStats />,
      fileName: "with_screenshots_and_stats.jsx",
    },
    {
      id: "02",
      name: "With large screenshot and testimonial",
      component: <WithLargeScreenshotAndTestimonial />,
      fileName: "with_large_screenshot_and_testimonial.jsx",
    },
    {
      id: "03",
      name: "With background image hero and pricing section",
      component: <WithBackgroundImageHeroAndPricingSection />,
      fileName: "with_background_image_hero_and_pricing_section.jsx",
    },
    {
      id: "04",
      name: "With mobile screenshot and testimonials grid",
      component: <WithMobileScreenshotAndTestimonialsGrid />,
      fileName: "with_mobile_screenshot_and_testimonials_grid.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file landing-pages
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-examples/landing-pages";

  return (
    <div className="space-y-16 pb-20">
      {layouts.map((layout) => (
        <section
          key={layout.id}
          className="border-b border-gray-100 pb-16 last:border-0"
        >
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            {layout.id}. {layout.name}
          </h2>
          <PreviewWrapper
            name={layout.name}
            // Gọi getRaw trực tiếp để lấy mã nguồn từ hệ thống file
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
