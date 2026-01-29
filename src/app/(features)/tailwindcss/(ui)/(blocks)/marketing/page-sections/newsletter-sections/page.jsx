import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import SideBySideWithDetails from "./side_by_side_with_details";
import SimpleSideBySide from "./simple_side_by_side";
import SimpleSideBySideOnBrand from "./simple_side_by_side_on_brand";
import SimpleStacked from "./simple_stacked";
import CenteredCard from "./centered_card";
import SideBySideOnCard from "./side_by_side_on_card";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Side-by-side with details",
      component: <SideBySideWithDetails />,
      fileName: "side_by_side_with_details.jsx",
    },
    {
      id: "02",
      name: "Simple side-by-side",
      component: <SimpleSideBySide />,
      fileName: "simple_side_by_side.jsx",
    },
    {
      id: "03",
      name: "Simple side-by-side on brand",
      component: <SimpleSideBySideOnBrand />,
      fileName: "simple_side_by_side_on_brand.jsx",
    },
    {
      id: "04",
      name: "Simple stacked",
      component: <SimpleStacked />,
      fileName: "simple_stacked.jsx",
    },
    {
      id: "05",
      name: "Centered card",
      component: <CenteredCard />,
      fileName: "centered_card.jsx",
    },
    {
      id: "06",
      name: "Side-by-side on card",
      component: <SideBySideOnCard />,
      fileName: "side_by_side_on_card.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file newsletter-sections
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/newsletter-sections";

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
            // Gọi getRaw trực tiếp tại đây để lấy code
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
