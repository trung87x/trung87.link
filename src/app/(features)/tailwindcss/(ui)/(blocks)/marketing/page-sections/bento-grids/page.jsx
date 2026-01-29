import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import ThreeColumnBentoGrid from "./three_column_bento_grid";
import TwoRowBentoGridOnDark from "./two_row_bento_grid_on_dark";
import TwoRowBentoGrid from "./two_row_bento_grid";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Three column bento grid",
      component: <ThreeColumnBentoGrid />,
      fileName: "three_column_bento_grid.jsx",
    },
    {
      id: "02",
      name: "Two row bento grid",
      component: <TwoRowBentoGridOnDark />,
      fileName: "two_row_bento_grid_on_dark.jsx",
    },
    {
      id: "03",
      name: "Two row bento grid with three column second row",
      component: <TwoRowBentoGrid />,
      fileName: "two_row_bento_grid.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file bento-grids
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/bento-grids";

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
            // Logic lấy code raw tập trung tại đây để đảm bảo đường dẫn chính xác
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
