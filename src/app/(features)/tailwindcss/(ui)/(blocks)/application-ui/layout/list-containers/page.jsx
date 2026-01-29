import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import SimpleWithDividers from "./simple_with_dividers";
import CardWithDividers from "./card_with_dividers";
import CardWithDividersFullWidthOnMobile from "./card_with_dividers__full_width_on_mobile";
import SeparateCards from "./separate_cards";
import SeparateCardsFullWidthOnMobile from "./separate_cards__full_width_on_mobile";
import FlatCardWithDividers from "./flat_card_with_dividers";
import SimpleWithDividersFullWidthOnMobile from "./simple_with_dividers__full_width_on_mobile";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple with dividers",
      component: <SimpleWithDividers />,
      fileName: "simple_with_dividers.jsx",
    },
    {
      id: "02",
      name: "Card with dividers",
      component: <CardWithDividers />,
      fileName: "card_with_dividers.jsx",
    },
    {
      id: "03",
      name: "Card with dividers, full-width on mobile",
      component: <CardWithDividersFullWidthOnMobile />,
      fileName: "card_with_dividers__full_width_on_mobile.jsx",
    },
    {
      id: "04",
      name: "Separate cards",
      component: <SeparateCards />,
      fileName: "separate_cards.jsx",
    },
    {
      id: "05",
      name: "Separate cards, full-width on mobile",
      component: <SeparateCardsFullWidthOnMobile />,
      fileName: "separate_cards__full_width_on_mobile.jsx",
    },
    {
      id: "06",
      name: "Flat card with dividers",
      component: <FlatCardWithDividers />,
      fileName: "flat_card_with_dividers.jsx",
    },
    {
      id: "07",
      name: "Simple with dividers, full-width on mobile",
      component: <SimpleWithDividersFullWidthOnMobile />,
      fileName: "simple_with_dividers__full_width_on_mobile.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file list-containers (Application UI > Layout)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/layout/list-containers";

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
