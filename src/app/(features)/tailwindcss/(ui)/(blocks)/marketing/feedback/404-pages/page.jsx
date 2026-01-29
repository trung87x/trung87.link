import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import Simple from "./simple";
import SplitWithImage from "./split_with_image";
import WithPopularPages from "./with_popular_pages";
import WithBackgroundImage from "./with_background_image";
import WithNavbarAndFooter from "./with_navbar_and_footer";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      fileName: "simple.jsx",
    },
    {
      id: "02",
      name: "Split with image",
      component: <SplitWithImage />,
      fileName: "split_with_image.jsx",
    },
    {
      id: "03",
      name: "With popular pages",
      component: <WithPopularPages />,
      fileName: "with_popular_pages.jsx",
    },
    {
      id: "04",
      name: "With background image",
      component: <WithBackgroundImage />,
      fileName: "with_background_image.jsx",
    },
    {
      id: "05",
      name: "With navbar and footer",
      component: <WithNavbarAndFooter />,
      fileName: "with_navbar_and_footer.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file 404-pages
  const baseDir = "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/feedback/404-pages";

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
            name={`${layout.name} 404 page`}
            // Sử dụng getRaw để render mã nguồn trực tiếp từ file
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
