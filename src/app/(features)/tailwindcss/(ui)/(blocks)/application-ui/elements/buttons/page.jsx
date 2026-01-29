import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import PrimaryButtons from "./primary_buttons";
import SecondaryButtons from "./secondary_buttons";
import SoftButtons from "./soft_buttons";
import ButtonsWithLeadingIcon from "./buttons_with_leading_icon";
import ButtonsWithTrailingIcon from "./buttons_with_trailing_icon";
import RoundedPrimaryButtons from "./rounded_primary_buttons";
import RoundedSecondaryButtons from "./rounded_secondary_buttons";
import CircularButtons from "./circular_buttons";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Primary buttons",
      component: <PrimaryButtons />,
      fileName: "primary_buttons.jsx",
    },
    {
      id: "02",
      name: "Secondary buttons",
      component: <SecondaryButtons />,
      fileName: "secondary_buttons.jsx",
    },
    {
      id: "03",
      name: "Soft buttons",
      component: <SoftButtons />,
      fileName: "soft_buttons.jsx",
    },
    {
      id: "04",
      name: "Buttons with leading icon",
      component: <ButtonsWithLeadingIcon />,
      fileName: "buttons_with_leading_icon.jsx",
    },
    {
      id: "05",
      name: "Buttons with trailing icon",
      component: <ButtonsWithTrailingIcon />,
      fileName: "buttons_with_trailing_icon.jsx",
    },
    {
      id: "06",
      name: "Rounded primary buttons",
      component: <RoundedPrimaryButtons />,
      fileName: "rounded_primary_buttons.jsx",
    },
    {
      id: "07",
      name: "Rounded secondary buttons",
      component: <RoundedSecondaryButtons />,
      fileName: "rounded_secondary_buttons.jsx",
    },
    {
      id: "08",
      name: "Circular buttons",
      component: <CircularButtons />,
      fileName: "circular_buttons.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file buttons (Application UI > Elements)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/elements/buttons";

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
