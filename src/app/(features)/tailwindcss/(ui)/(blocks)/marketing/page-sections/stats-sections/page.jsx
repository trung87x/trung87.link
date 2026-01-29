import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import Simple from "./simple";
import SimpleGrid from "./simple_grid";
import WithBackgroundImage from "./with_background_image";
import SplitWithImage from "./split_with_image";
import Timeline from "./timeline";
import Stepped from "./stepped";
import WithTwoColumnDescription from "./with_two_column_description_on_dark";
import WithDescription from "./with_description";

const Page = () => {
  const layouts = [
    { id: "01", name: "Simple", component: <Simple />, fileName: "simple.jsx" },
    {
      id: "02",
      name: "Simple grid",
      component: <SimpleGrid />,
      fileName: "simple_grid.jsx",
    },
    {
      id: "03",
      name: "With background image",
      component: <WithBackgroundImage />,
      fileName: "with_background_image.jsx",
    },
    {
      id: "04",
      name: "Split with image",
      component: <SplitWithImage />,
      fileName: "split_with_image.jsx",
    },
    {
      id: "05",
      name: "Timeline",
      component: <Timeline />,
      fileName: "timeline.jsx",
    },
    {
      id: "06",
      name: "Stepped",
      component: <Stepped />,
      fileName: "stepped.jsx",
    },
    {
      id: "07",
      name: "With two column description",
      component: <WithTwoColumnDescription />,
      fileName: "with_two_column_description_on_dark.jsx",
    },
    {
      id: "08",
      name: "With description",
      component: <WithDescription />,
      fileName: "with_description.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file stats-sections
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/stats-sections";

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
