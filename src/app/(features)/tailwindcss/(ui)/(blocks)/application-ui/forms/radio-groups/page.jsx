import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import SimpleList from "./simple_list";
import SimpleInlineList from "./simple_inline_list";
import ListWithDescription from "./list_with_description";
import ListWithInlineDescription from "./list_with_inline_description";
import ListWithRadioOnRight from "./list_with_radio_on_right";
import SimpleListWithRadioOnRight from "./simple_list_with_radio_on_right";
import SimpleTable from "./simple_table";
import ListWithDescriptionsInPanel from "./list_with_descriptions_in_panel";
import ColorPicker from "./color_picker";
import Cards from "./cards";
import SmallCards from "./small_cards";
import StackedCards from "./stacked_cards";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple list",
      component: <SimpleList />,
      fileName: "simple_list.jsx",
    },
    {
      id: "02",
      name: "Simple inline list",
      component: <SimpleInlineList />,
      fileName: "simple_inline_list.jsx",
    },
    {
      id: "03",
      name: "List with description",
      component: <ListWithDescription />,
      fileName: "list_with_description.jsx",
    },
    {
      id: "04",
      name: "List with inline description",
      component: <ListWithInlineDescription />,
      fileName: "list_with_inline_description.jsx",
    },
    {
      id: "05",
      name: "List with radio on right",
      component: <ListWithRadioOnRight />,
      fileName: "list_with_radio_on_right.jsx",
    },
    {
      id: "06",
      name: "Simple list with radio on right",
      component: <SimpleListWithRadioOnRight />,
      fileName: "simple_list_with_radio_on_right.jsx",
    },
    {
      id: "07",
      name: "Simple table",
      component: <SimpleTable />,
      fileName: "simple_table.jsx",
    },
    {
      id: "08",
      name: "List with descriptions in panel",
      component: <ListWithDescriptionsInPanel />,
      fileName: "list_with_descriptions_in_panel.jsx",
    },
    {
      id: "09",
      name: "Color picker",
      component: <ColorPicker />,
      fileName: "color_picker.jsx",
    },
    { id: "10", name: "Cards", component: <Cards />, fileName: "cards.jsx" },
    {
      id: "11",
      name: "Small cards",
      component: <SmallCards />,
      fileName: "small_cards.jsx",
    },
    {
      id: "12",
      name: "Stacked cards",
      component: <StackedCards />,
      fileName: "stacked_cards.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file radio-groups (Application UI > Forms)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/forms/radio-groups";

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
