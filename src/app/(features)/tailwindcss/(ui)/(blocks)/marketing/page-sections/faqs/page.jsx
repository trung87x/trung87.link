import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import OffsetWithSupportingText from "./offset_with_supporting_text";
import CenteredAccordion from "./centered_accordion";
import SideBySide from "./side_by_side";
import ThreeColumns from "./three_columns";
import ThreeColumnsWithCenteredIntro from "./three_columns_with_centered_introduction";
import TwoColumns from "./two_columns";
import TwoColumnsWithCenteredIntro from "./two_columns_with_centered_introduction";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Offset with supporting text",
      component: <OffsetWithSupportingText />,
      fileName: "offset_with_supporting_text.jsx",
    },
    {
      id: "02",
      name: "Centered accordion",
      component: <CenteredAccordion />,
      fileName: "centered_accordion.jsx",
    },
    {
      id: "03",
      name: "Side-by-side",
      component: <SideBySide />,
      fileName: "side_by_side.jsx",
    },
    {
      id: "04",
      name: "Three columns",
      component: <ThreeColumns />,
      fileName: "three_columns.jsx",
    },
    {
      id: "05",
      name: "Three columns with centered introduction",
      component: <ThreeColumnsWithCenteredIntro />,
      fileName: "three_columns_with_centered_introduction.jsx",
    },
    {
      id: "06",
      name: "Two columns",
      component: <TwoColumns />,
      fileName: "two_columns.jsx",
    },
    {
      id: "07",
      name: "Two columns with centered introduction",
      component: <TwoColumnsWithCenteredIntro />,
      fileName: "two_columns_with_centered_introduction.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file faqs
  const baseDir = "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/faqs";

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
            // Gọi getRaw trực tiếp tại đây để lấy mã nguồn
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
