import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import Centered from "./centered";
import SideBySideGrid from "./side_by_side_grid";
import SplitWithPattern from "./split_with_pattern";
import SimpleFourColumn from "./simple_four_column";
import SimpleCentered from "./simple_centered";
import WithTestimonial from "./with_testimonial";
import SplitWithImage from "./split_with_image";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Centered",
      component: <Centered />,
      fileName: "centered.jsx",
    },
    {
      id: "02",
      name: "Side-by-side grid",
      component: <SideBySideGrid />,
      fileName: "side_by_side_grid.jsx",
    },
    {
      id: "03",
      name: "Split with pattern",
      component: <SplitWithPattern />,
      fileName: "split_with_pattern.jsx",
    },
    {
      id: "04",
      name: "Simple four-column",
      component: <SimpleFourColumn />,
      fileName: "simple_four_column.jsx",
    },
    {
      id: "05",
      name: "Simple centered",
      component: <SimpleCentered />,
      fileName: "simple_centered.jsx",
    },
    {
      id: "06",
      name: "With testimonial",
      component: <WithTestimonial />,
      fileName: "with_testimonial.jsx",
    },
    {
      id: "07",
      name: "Split with image",
      component: <SplitWithImage />,
      fileName: "split_with_image.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file contact-sections
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/contact-sections";

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
