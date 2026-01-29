import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import BasicCard from "./basic_card";
import CardEdgeToEdgeOnMobile from "./card__edge_to_edge_on_mobile";
import CardWithHeader from "./card_with_header";
import CardWithFooter from "./card_with_footer";
import CardWithHeaderAndFooter from "./card_with_header_and_footer";
import CardWithGrayFooter from "./card_with_gray_footer";
import CardWithGrayBody from "./card_with_gray_body";
import Well from "./well";
import WellOnGray from "./well_on_gray";
import WellEdgeToEdgeOnMobile from "./well__edge_to_edge_on_mobile";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic card",
      component: <BasicCard />,
      fileName: "basic_card.jsx",
    },
    {
      id: "02",
      name: "Card, edge-to-edge on mobile",
      component: <CardEdgeToEdgeOnMobile />,
      fileName: "card__edge_to_edge_on_mobile.jsx",
    },
    {
      id: "03",
      name: "Card with header",
      component: <CardWithHeader />,
      fileName: "card_with_header.jsx",
    },
    {
      id: "04",
      name: "Card with footer",
      component: <CardWithFooter />,
      fileName: "card_with_footer.jsx",
    },
    {
      id: "05",
      name: "Card with header and footer",
      component: <CardWithHeaderAndFooter />,
      fileName: "card_with_header_and_footer.jsx",
    },
    {
      id: "06",
      name: "Card with gray footer",
      component: <CardWithGrayFooter />,
      fileName: "card_with_gray_footer.jsx",
    },
    {
      id: "07",
      name: "Card with gray body",
      component: <CardWithGrayBody />,
      fileName: "card_with_gray_body.jsx",
    },
    { id: "08", name: "Well", component: <Well />, fileName: "well.jsx" },
    {
      id: "09",
      name: "Well on gray",
      component: <WellOnGray />,
      fileName: "well_on_gray.jsx",
    },
    {
      id: "10",
      name: "Well, edge-to-edge on mobile",
      component: <WellEdgeToEdgeOnMobile />,
      fileName: "well__edge_to_edge_on_mobile.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file cards (Application UI > Layout)
  const baseDir = "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/layout/cards";

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
