import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import WithImageTiles from "./with_image_tiles";
import WithTimelineAndStats from "./with_timeline_and_stats";
import WithTwoColumnDescription from "./dark";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With image tiles",
      component: <WithImageTiles />,
      fileName: "with_image_tiles.jsx",
    },
    {
      id: "02",
      name: "With timeline and stats",
      component: <WithTimelineAndStats />,
      fileName: "with_timeline_and_stats.jsx",
    },
    {
      id: "03",
      name: "With two column description",
      component: <WithTwoColumnDescription />,
      fileName: "dark.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file about-pages
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-examples/about-pages";

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
            name={`About page ${layout.name.toLowerCase()}`}
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
