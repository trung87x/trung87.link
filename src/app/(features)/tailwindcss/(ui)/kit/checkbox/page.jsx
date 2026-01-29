import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic example
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

// 08. Indeterminate state
import Indeterminate from "./indeterminate";

// 09. Controlled component
import Controlled from "./controlled";

// 10. Multiple checkboxes
import MultipleCheckboxes from "./multiple";

// 11. With fieldset
import WithFieldset from "./with-fieldset";

// 12. Disabled state
import DisabledState from "./disabled";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic Example",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/checkbox/basic.jsx"),
    },
    {
      id: "02",
      name: "With Label",
      component: <WithLabel />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/checkbox/with-label.jsx"),
    },
    {
      id: "03",
      name: "With Description",
      component: <WithDescription />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/checkbox/with-description.jsx",
      ),
    },
    {
      id: "04",
      name: "With Custom Layout",
      component: <CustomLayout />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/checkbox/custom-layout.jsx",
      ),
    },
    {
      id: "05",
      name: "With Accent Color",
      component: <AccentColor />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/checkbox/accent-color.jsx",
      ),
    },
    {
      id: "06",
      name: "With Custom Value",
      component: <CustomValue />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/checkbox/custom-value.jsx",
      ),
    },
    {
      id: "07",
      name: "Default Checked State",
      component: <DefaultChecked />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/checkbox/default-checked.jsx",
      ),
    },
    {
      id: "08",
      name: "Indeterminate State",
      component: <Indeterminate />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/checkbox/indeterminate.jsx",
      ),
    },
    {
      id: "09",
      name: "Controlled Component",
      component: <Controlled />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/checkbox/controlled.jsx"),
    },
    {
      id: "10",
      name: "Multiple Checkboxes",
      component: <MultipleCheckboxes />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/checkbox/multiple.jsx"),
    },
    {
      id: "11",
      name: "With Fieldset",
      component: <WithFieldset />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/checkbox/with-fieldset.jsx",
      ),
    },
    {
      id: "12",
      name: "Disabled State",
      component: <DisabledState />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/checkbox/disabled.jsx"),
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
