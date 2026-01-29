import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. With description
import WithDescription from "./with-description";

// 03. With custom layout
import CustomLayout from "./custom-layout";

// 04. With accent color
import AccentColor from "./accent-color";

// 05. Default selected state
import DefaultSelected from "./default-selected";

// 06. Controlled component
import Controlled from "./controlled";

// 07. With fieldset
import WithFieldset from "./with-fieldset";

// 08. Disabled state
import DisabledState from "./disabled";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/radio-button/basic.jsx"),
    },
    {
      id: "02",
      name: "With Description",
      component: <WithDescription />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/radio-button/with-description.jsx",
      ),
    },
    {
      id: "03",
      name: "With Custom Layout",
      component: <CustomLayout />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/radio-button/custom-layout.jsx",
      ),
    },
    {
      id: "04",
      name: "With Accent Color",
      component: <AccentColor />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/radio-button/accent-color.jsx",
      ),
    },
    {
      id: "05",
      name: "Default Selected State",
      component: <DefaultSelected />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/radio-button/default-selected.jsx",
      ),
    },
    {
      id: "06",
      name: "Controlled Component",
      component: <Controlled />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/radio-button/controlled.jsx",
      ),
    },
    {
      id: "07",
      name: "With Fieldset",
      component: <WithFieldset />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/radio-button/with-fieldset.jsx",
      ),
    },
    {
      id: "08",
      name: "Disabled State",
      component: <DisabledState />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/radio-button/disabled.jsx",
      ),
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
            <div className="py-4">{layout.component}</div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
