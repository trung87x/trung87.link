import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import LeftAligned from "./left_aligned";
import LeftAlignedInCard from "./left_aligned_in_card";
import LeftAlignedStriped from "./left_aligned_striped";
import TwoColumn from "./two_column";
import LeftAlignedWithInlineActions from "./left_aligned_with_inline_actions";
import NarrowWithHiddenLabels from "./narrow_with_hidden_labels";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Left-aligned",
      component: <LeftAligned />,
      fileName: "left_aligned.jsx",
    },
    {
      id: "02",
      name: "Left-aligned in card",
      component: <LeftAlignedInCard />,
      fileName: "left_aligned_in_card.jsx",
    },
    {
      id: "03",
      name: "Left-aligned striped",
      component: <LeftAlignedStriped />,
      fileName: "left_aligned_striped.jsx",
    },
    {
      id: "04",
      name: "Two-column",
      component: <TwoColumn />,
      fileName: "two_column.jsx",
    },
    {
      id: "05",
      name: "Left-aligned with inline actions",
      component: <LeftAlignedWithInlineActions />,
      fileName: "left_aligned_with_inline_actions.jsx",
    },
    {
      id: "06",
      name: "Narrow with hidden labels",
      component: <NarrowWithHiddenLabels />,
      fileName: "narrow_with_hidden_labels.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục description-lists (Application UI > Data Display)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/data-display/description-lists";

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
