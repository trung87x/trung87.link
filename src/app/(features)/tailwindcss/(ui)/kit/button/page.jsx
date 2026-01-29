import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Button colors
import ButtonColors from "./button-colors";

// 02. Outline buttons
import OutlineButtons from "./outline-buttons";

// 03. Plain buttons
import PlainButtons from "./plain-buttons";

// 04. Disabled states
import DisabledStates from "./disabled-states";

// 05. With icon
import ButtonWithIcon from "./with-icon";

// 06. Using as a link
import ButtonAsLink from "./as-link";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Button Colors",
      component: <ButtonColors />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/button/button-colors.jsx",
      ),
    },
    {
      id: "02",
      name: "Outline Buttons",
      component: <OutlineButtons />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/button/outline-buttons.jsx",
      ),
    },
    {
      id: "03",
      name: "Plain Buttons",
      component: <PlainButtons />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/button/plain-buttons.jsx",
      ),
    },
    {
      id: "04",
      name: "Disabled States",
      component: <DisabledStates />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/button/disabled-states.jsx",
      ),
    },
    {
      id: "05",
      name: "With Icon",
      component: <ButtonWithIcon />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/button/with-icon.jsx"),
    },
    {
      id: "06",
      name: "Using as a Link",
      component: <ButtonAsLink />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/button/as-link.jsx"),
    },
  ];

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
          <PreviewWrapper name={layout.name} code={layout.raw}>
            {layout.component}
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
