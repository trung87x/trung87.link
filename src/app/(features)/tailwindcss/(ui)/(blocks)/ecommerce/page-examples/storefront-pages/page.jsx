import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import WithDarkNavAndFooter from "./with_dark_nav_and_footer";
import WithOffersAndTestimonials from "./with_offers_and_testimonials";
import WithImageTilesAndFeatureSections from "./with_image_tiles_and_feature_sections";
import WithOverlappingImageTilesAndPerks from "./with_overlapping_image_tiles_and_perks";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With dark nav and footer",
      component: <WithDarkNavAndFooter />,
      fileName: "with_dark_nav_and_footer.jsx",
    },
    {
      id: "02",
      name: "With offers and testimonials",
      component: <WithOffersAndTestimonials />,
      fileName: "with_offers_and_testimonials.jsx",
    },
    {
      id: "03",
      name: "With image tiles and feature sections",
      component: <WithImageTilesAndFeatureSections />,
      fileName: "with_image_tiles_and_feature_sections.jsx",
    },
    {
      id: "04",
      name: "With overlapping image tiles and perks",
      component: <WithOverlappingImageTilesAndPerks />,
      fileName: "with_overlapping_image_tiles_and_perks.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file storefront-pages (nhánh Ecommerce)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/page-examples/storefront-pages";

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
            // Gọi getRaw trực tiếp tại phần render để đảm bảo mã nguồn được load chính xác
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
