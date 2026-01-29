import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithBorder from "./with_border";
import WithBorderAndDot from "./with_border_and_dot";
import PillWithBorder from "./pill_with_border";
import PillWithBorderAndDot from "./pill_with_border_and_dot";
import WithBorderAndRemoveButton from "./with_border_and_remove_button";
import Flat from "./flat";
import FlatPill from "./flat_pill";
import FlatWithDot from "./flat_with_dot";
import FlatPillWithDot from "./flat_pill_with_dot";
import FlatWithRemoveButton from "./flat_with_remove_button";
import SmallWithBorder from "./small_with_border";
import SmallFlat from "./small_flat";
import SmallPillWithBorder from "./small_pill_with_border";
import SmallFlatPill from "./small_flat_pill";
import SmallFlatWithDot from "./small_flat_with_dot";
import SmallFlatPillWithDot from "./small_flat_pill_with_dot";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With border",
      component: <WithBorder />,
      fileName: "with_border.jsx",
    },
    {
      id: "02",
      name: "With border and dot",
      component: <WithBorderAndDot />,
      fileName: "with_border_and_dot.jsx",
    },
    {
      id: "03",
      name: "Pill with border",
      component: <PillWithBorder />,
      fileName: "pill_with_border.jsx",
    },
    {
      id: "04",
      name: "Pill with border and dot",
      component: <PillWithBorderAndDot />,
      fileName: "pill_with_border_and_dot.jsx",
    },
    {
      id: "05",
      name: "With border and remove button",
      component: <WithBorderAndRemoveButton />,
      fileName: "with_border_and_remove_button.jsx",
    },
    { id: "06", name: "Flat", component: <Flat />, fileName: "flat.jsx" },
    {
      id: "07",
      name: "Flat pill",
      component: <FlatPill />,
      fileName: "flat_pill.jsx",
    },
    {
      id: "08",
      name: "Flat with dot",
      component: <FlatWithDot />,
      fileName: "flat_with_dot.jsx",
    },
    {
      id: "09",
      name: "Flat pill with dot",
      component: <FlatPillWithDot />,
      fileName: "flat_pill_with_dot.jsx",
    },
    {
      id: "10",
      name: "Flat with remove button",
      component: <FlatWithRemoveButton />,
      fileName: "flat_with_remove_button.jsx",
    },
    {
      id: "11",
      name: "Small with border",
      component: <SmallWithBorder />,
      fileName: "small_with_border.jsx",
    },
    {
      id: "12",
      name: "Small flat",
      component: <SmallFlat />,
      fileName: "small_flat.jsx",
    },
    {
      id: "13",
      name: "Small pill with border",
      component: <SmallPillWithBorder />,
      fileName: "small_pill_with_border.jsx",
    },
    {
      id: "14",
      name: "Small flat pill",
      component: <SmallFlatPill />,
      fileName: "small_flat_pill.jsx",
    },
    {
      id: "15",
      name: "Small flat with dot",
      component: <SmallFlatWithDot />,
      fileName: "small_flat_with_dot.jsx",
    },
    {
      id: "16",
      name: "Small flat pill with dot",
      component: <SmallFlatPillWithDot />,
      fileName: "small_flat_pill_with_dot.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục badges (Application UI > Elements)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/elements/badges";

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
            // Tự động nạp mã nguồn dựa trên baseDir và fileName
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
