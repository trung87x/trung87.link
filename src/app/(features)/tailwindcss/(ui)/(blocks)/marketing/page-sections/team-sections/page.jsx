import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import WithSmallImages from "./with_small_images";
import WithLargeImages from "./with_large_images";
import GridWithRoundImages from "./grid_with_round_images";
import LargeGridWithCards from "./dark_version_with_large_images";
import WithImageAndShortParagraph from "./with_image_and_short_paragraph";
import WithVerticalImages from "./with_vertical_images";
import FullWidthWithVerticalImages from "./full_width_with_vertical_images";
import GridWithLargeRoundImages from "./grid_with_large_round_images";
import WithMediumImages from "./with_medium_images_on_dark";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With small images",
      component: <WithSmallImages />,
      fileName: "with_small_images.jsx",
    },
    {
      id: "02",
      name: "With large images",
      component: <WithLargeImages />,
      fileName: "with_large_images.jsx",
    },
    {
      id: "03",
      name: "Grid with round images",
      component: <GridWithRoundImages />,
      fileName: "grid_with_round_images.jsx",
    },
    {
      id: "04",
      name: "Large grid with cards",
      component: <LargeGridWithCards />,
      fileName: "dark_version_with_large_images.jsx",
    },
    {
      id: "05",
      name: "With image and short paragraph",
      component: <WithImageAndShortParagraph />,
      fileName: "with_image_and_short_paragraph.jsx",
    },
    {
      id: "06",
      name: "With vertical images",
      component: <WithVerticalImages />,
      fileName: "with_vertical_images.jsx",
    },
    {
      id: "07",
      name: "Full width with vertical images",
      component: <FullWidthWithVerticalImages />,
      fileName: "full_width_with_vertical_images.jsx",
    },
    {
      id: "08",
      name: "Grid with large round images",
      component: <GridWithLargeRoundImages />,
      fileName: "grid_with_large_round_images.jsx",
    },
    {
      id: "09",
      name: "With medium images",
      component: <WithMediumImages />,
      fileName: "with_medium_images_on_dark.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file team-sections
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/team-sections";

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
            // Gọi getRaw trực tiếp để render mã nguồn chính xác từ đường dẫn nối chuỗi
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
