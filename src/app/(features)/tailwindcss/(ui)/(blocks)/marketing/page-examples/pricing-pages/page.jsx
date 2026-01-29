import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import WithFourTiers from "./with_four_tiers";
import WithComparisonTable from "./with_comparison_table";
import WithThreeTiersAndTestimonials from "./with_three_tiers_and_testimonials";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With four tiers",
      component: <WithFourTiers />,
      fileName: "with_four_tiers.jsx",
    },
    {
      id: "02",
      name: "With comparison table",
      component: <WithComparisonTable />,
      fileName: "with_comparison_table.jsx",
    },
    {
      id: "03",
      name: "With three tiers and testimonials",
      component: <WithThreeTiersAndTestimonials />,
      fileName: "with_three_tiers_and_testimonials.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file pricing-pages
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-examples/pricing-pages";

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
            name={`Pricing page ${layout.name.toLowerCase()}`}
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
