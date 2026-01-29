import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import TwoTiersWithEmphasizedTier from "./two_tiers_with_emphasized_tier";
import TwoTiersWithEmphasizedLeftTier from "./two_tiers";
import ThreeTiersWithLogosAndFeatureComparison from "./three_tiers_with_logos_and_feature_comparison";
import TwoTiersWithExtraTier from "./two_tiers_with_extra_tier";
import SinglePriceWithDetails from "./single_price_with_details";
import ThreeTiers from "./three_tiers";
import ThreeTiersWithDividers from "./three_tiers_with_dividers";
import ThreeTiersWithEmphasizedTier from "./three_tiers_with_emphasized_tier";
import ThreeTiersWithToggle from "./three_tiers_with_toggle";
import FourTiersWithToggle from "./four_tiers_with_toggle";
import WithComparisonTable from "./with_comparison_table";
import ThreeTiersWithFeatureComparison from "./three_tiers_with_feature_comparison";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Two tiers with emphasized right tier",
      component: <TwoTiersWithEmphasizedTier />,
      fileName: "two_tiers_with_emphasized_tier.jsx",
    },
    {
      id: "02",
      name: "Two tiers with emphasized left tier",
      component: <TwoTiersWithEmphasizedLeftTier />,
      fileName: "two_tiers.jsx",
    },
    {
      id: "03",
      name: "Three tiers with logos and feature comparison",
      component: <ThreeTiersWithLogosAndFeatureComparison />,
      fileName: "three_tiers_with_logos_and_feature_comparison.jsx",
    },
    {
      id: "04",
      name: "Two tiers with extra tier",
      component: <TwoTiersWithExtraTier />,
      fileName: "two_tiers_with_extra_tier.jsx",
    },
    {
      id: "05",
      name: "Single price with details",
      component: <SinglePriceWithDetails />,
      fileName: "single_price_with_details.jsx",
    },
    {
      id: "06",
      name: "Three tiers",
      component: <ThreeTiers />,
      fileName: "three_tiers.jsx",
    },
    {
      id: "07",
      name: "Three tiers with dividers",
      component: <ThreeTiersWithDividers />,
      fileName: "three_tiers_with_dividers.jsx",
    },
    {
      id: "08",
      name: "Three tiers with emphasized tier",
      component: <ThreeTiersWithEmphasizedTier />,
      fileName: "three_tiers_with_emphasized_tier.jsx",
    },
    {
      id: "09",
      name: "Three tiers with toggle",
      component: <ThreeTiersWithToggle />,
      fileName: "three_tiers_with_toggle.jsx",
    },
    {
      id: "10",
      name: "Four tiers with toggle",
      component: <FourTiersWithToggle />,
      fileName: "four_tiers_with_toggle.jsx",
    },
    {
      id: "11",
      name: "With comparison table",
      component: <WithComparisonTable />,
      fileName: "with_comparison_table.jsx",
    },
    {
      id: "12",
      name: "Three tiers with feature comparison",
      component: <ThreeTiersWithFeatureComparison />,
      fileName: "three_tiers_with_feature_comparison.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file pricing-sections
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/pricing-sections";

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
            // Gọi getRaw trực tiếp để render mã nguồn
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
