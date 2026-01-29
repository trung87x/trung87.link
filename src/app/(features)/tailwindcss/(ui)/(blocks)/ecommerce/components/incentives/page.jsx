import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import ThreeColIllustrationsSplitHeader from "./3_column_with_illustrations_and_split_header";
import FourColIllustrations from "./4_column_with_illustrations";
import ThreeColIllustrationsHeader from "./3_column_with_illustrations_and_header";
import ThreeColIllustrationsCenteredText from "./3_column_with_illustrations_and_centered_text";
import ThreeColIllustrationsHeading from "./3_column_with_illustrations_and_heading";
import TwoByTwoGridIllustrations from "./2x2_grid_with_illustrations";
import ThreeColIconsSupportingText from "./3_column_with_icons_and_supporting_text";
import ThreeColIcons from "./3_column_with_icons";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "3-column with illustrations and split header",
      component: <ThreeColIllustrationsSplitHeader />,
      fileName: "3_column_with_illustrations_and_split_header.jsx",
    },
    {
      id: "02",
      name: "4-column with illustrations",
      component: <FourColIllustrations />,
      fileName: "4_column_with_illustrations.jsx",
    },
    {
      id: "03",
      name: "3-column with illustrations and header",
      component: <ThreeColIllustrationsHeader />,
      fileName: "3_column_with_illustrations_and_header.jsx",
    },
    {
      id: "04",
      name: "3-column with illustrations and centered text",
      component: <ThreeColIllustrationsCenteredText />,
      fileName: "3_column_with_illustrations_and_centered_text.jsx",
    },
    {
      id: "05",
      name: "3-column with illustrations and heading",
      component: <ThreeColIllustrationsHeading />,
      fileName: "3_column_with_illustrations_and_heading.jsx",
    },
    {
      id: "06",
      name: "2x2 grid with illustrations",
      component: <TwoByTwoGridIllustrations />,
      fileName: "2x2_grid_with_illustrations.jsx",
    },
    {
      id: "07",
      name: "3-column with icons and supporting text",
      component: <ThreeColIconsSupportingText />,
      fileName: "3_column_with_icons_and_supporting_text.jsx",
    },
    {
      id: "08",
      name: "3-column with icons",
      component: <ThreeColIcons />,
      fileName: "3_column_with_icons.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file incentives (Ecommerce Components)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/ecommerce/components/incentives";

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
            // Nạp mã nguồn động qua getRaw dựa trên fileName và baseDir
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
