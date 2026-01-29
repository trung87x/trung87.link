import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import ContactCardsWithSmallPortraits from "./contact_cards_with_small_portraits";
import ContactCards from "./contact_cards";
import SimpleCards from "./simple_cards";
import HorizontalLinkCards from "./horizontal_link_cards";
import ActionsWithSharedBorders from "./actions_with_shared_borders";
import ImagesWithDetails from "./images_with_details";
import LogosCardsWithDescriptionList from "./logos_cards_with_description_list";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Contact cards with small portraits",
      component: <ContactCardsWithSmallPortraits />,
      fileName: "contact_cards_with_small_portraits.jsx",
    },
    {
      id: "02",
      name: "Contact cards",
      component: <ContactCards />,
      fileName: "contact_cards.jsx",
    },
    {
      id: "03",
      name: "Simple cards",
      component: <SimpleCards />,
      fileName: "simple_cards.jsx",
    },
    {
      id: "04",
      name: "Horizontal link cards",
      component: <HorizontalLinkCards />,
      fileName: "horizontal_link_cards.jsx",
    },
    {
      id: "05",
      name: "Actions with shared borders",
      component: <ActionsWithSharedBorders />,
      fileName: "actions_with_shared_borders.jsx",
    },
    {
      id: "06",
      name: "Images with details",
      component: <ImagesWithDetails />,
      fileName: "images_with_details.jsx",
    },
    {
      id: "07",
      name: "Logos cards with description list",
      component: <LogosCardsWithDescriptionList />,
      fileName: "logos_cards_with_description_list.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file grid-lists (Application UI > Lists)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/lists/grid-lists";

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
