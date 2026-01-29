import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. With label
import WithLabel from "./with-label";

// 03. With description
import WithDescription from "./with-description";

// 04. With custom layout
import CustomLayout from "./custom-layout";

// 05. With accent color
import AccentColor from "./accent-color";

// 06. With custom value
import CustomValue from "./custom-value";

// 07. Default checked state
import DefaultChecked from "./default-checked";

// 08. Controlled component
import Controlled from "./controlled";

// 09. Multiple switches
import MultipleSwitches from "./multiple";

// 10. With fieldset
import WithFieldset from "./with-fieldset";

// 11. Disabled state
import DisabledState from "./disabled";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/switch/basic.jsx"),
    },
    {
      id: "02",
      name: "With Label",
      component: <WithLabel />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/switch/with-label.jsx"),
    },
    {
      id: "03",
      name: "With Description",
      component: <WithDescription />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/switch/with-description.jsx",
      ),
    },
    {
      id: "04",
      name: "With Custom Layout",
      component: <CustomLayout />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/switch/custom-layout.jsx",
      ),
    },
    {
      id: "05",
      name: "With Accent Color",
      component: <AccentColor />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/switch/accent-color.jsx"),
    },
    {
      id: "06",
      name: "With Custom Value",
      component: <CustomValue />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/switch/custom-value.jsx"),
    },
    {
      id: "07",
      name: "Default Checked State",
      component: <DefaultChecked />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/switch/default-checked.jsx",
      ),
    },
    {
      id: "08",
      name: "Controlled Component",
      component: <Controlled />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/switch/controlled.jsx"),
    },
    {
      id: "09",
      name: "Multiple Switches",
      component: <MultipleSwitches />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/switch/multiple.jsx"),
    },
    {
      id: "10",
      name: "With Fieldset",
      component: <WithFieldset />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/switch/with-fieldset.jsx",
      ),
    },
    {
      id: "11",
      name: "Disabled State",
      component: <DisabledState />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/switch/disabled.jsx"),
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
            <div className="flex justify-center py-6">{layout.component}</div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
