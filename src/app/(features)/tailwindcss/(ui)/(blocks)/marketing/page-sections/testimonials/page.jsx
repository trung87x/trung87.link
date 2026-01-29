import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import SimpleCentered from "./simple_centered";
import WithLargeAvatar from "./with_large_avatar";
import WithOverlappingImage from "./with_overlapping_image";
import WithBackgroundImage from "./with_background_image";
import SideBySide from "./side_by_side";
import WithStarRating from "./with_star_rating";
import Grid from "./grid";
import OffWhiteGrid from "./off_white_grid";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple centered",
      component: <SimpleCentered />,
      fileName: "simple_centered.jsx",
    },
    {
      id: "02",
      name: "With large avatar",
      component: <WithLargeAvatar />,
      fileName: "with_large_avatar.jsx",
    },
    {
      id: "03",
      name: "With overlapping image",
      component: <WithOverlappingImage />,
      fileName: "with_overlapping_image.jsx",
    },
    {
      id: "04",
      name: "With background image",
      component: <WithBackgroundImage />,
      fileName: "with_background_image.jsx",
    },
    {
      id: "05",
      name: "Side-by-side",
      component: <SideBySide />,
      fileName: "side_by_side.jsx",
    },
    {
      id: "06",
      name: "With star rating",
      component: <WithStarRating />,
      fileName: "with_star_rating.jsx",
    },
    { id: "07", name: "Grid", component: <Grid />, fileName: "grid.jsx" },
    {
      id: "08",
      name: "Subtle grid",
      component: <OffWhiteGrid />,
      fileName: "off_white_grid.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file testimonials
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/testimonials";

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
            // Gọi getRaw trực tiếp tại đây để lấy mã nguồn từ đường dẫn nối chuỗi
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
