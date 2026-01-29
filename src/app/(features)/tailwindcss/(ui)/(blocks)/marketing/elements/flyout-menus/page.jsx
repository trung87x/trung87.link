import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import các components hiển thị
import StackedWithFooterActions from "./stacked_with_footer_actions";
import FullWidthTwoColumns from "./full_width_two_columns";
import StackedWithFooterList from "./stacked_with_footer_list";
import FullWidth from "./full_width";
import SimpleWithDescriptions from "./simple_with_descriptions";
import TwoColumn from "./two_column";
import Simple from "./simple";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Stacked with footer actions",
      component: <StackedWithFooterActions />,
      fileName: "stacked_with_footer_actions.jsx",
    },
    {
      id: "02",
      name: "Full-width two-columns",
      component: <FullWidthTwoColumns />,
      fileName: "full_width_two_columns.jsx",
    },
    {
      id: "03",
      name: "Stacked with footer list",
      component: <StackedWithFooterList />,
      fileName: "stacked_with_footer_list.jsx",
    },
    {
      id: "04",
      name: "Full-width",
      component: <FullWidth />,
      fileName: "full_width.jsx",
    },
    {
      id: "05",
      name: "Simple with descriptions",
      component: <SimpleWithDescriptions />,
      fileName: "simple_with_descriptions.jsx",
    },
    {
      id: "06",
      name: "Two-column",
      component: <TwoColumn />,
      fileName: "two_column.jsx",
    },
    {
      id: "07",
      name: "Simple",
      component: <Simple />,
      fileName: "simple.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file flyout-menus
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/elements/flyout-menus";

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
            // Gọi getRaw tại đây để lấy code dựa trên cấu trúc thư mục đã định nghĩa
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
