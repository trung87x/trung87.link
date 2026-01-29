import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import SimpleWithHeading from "./simple_with_heading";
import SimpleWithCallToAction from "./simple_with_call_to_action";
import SimpleLeftAligned from "./simple_left_aligned";
import SplitWithLogosOnRight from "./split_with_logos_on_right";
import Simple from "./simple";
import Grid from "./grid";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple with heading",
      component: <SimpleWithHeading />,
      fileName: "simple_with_heading.jsx",
    },
    {
      id: "02",
      name: "Simple with call-to-action",
      component: <SimpleWithCallToAction />,
      fileName: "simple_with_call_to_action.jsx",
    },
    {
      id: "03",
      name: "Simple left-aligned",
      component: <SimpleLeftAligned />,
      fileName: "simple_left_aligned.jsx",
    },
    {
      id: "04",
      name: "Split with logos on right",
      component: <SplitWithLogosOnRight />,
      fileName: "split_with_logos_on_right.jsx",
    },
    {
      id: "05",
      name: "Simple",
      component: <Simple />,
      fileName: "simple.jsx",
    },
    {
      id: "06",
      name: "Grid",
      component: <Grid />,
      fileName: "grid.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file logo-clouds
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/logo-clouds";

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
            // Gọi getRaw trực tiếp để lấy mã nguồn
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
