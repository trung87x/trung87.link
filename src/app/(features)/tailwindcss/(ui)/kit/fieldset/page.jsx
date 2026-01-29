import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. Without legend
import WithoutLegend from "./without-legend";

// 03. Without role
import WithoutRole from "./without-role";

// 04. With grid layout
import GridLayout from "./grid-layout";

// 05. With custom layout
import CustomLayout from "./custom-layout";

// 06. Disabled state
import DisabledState from "./disabled";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/fieldset/basic.jsx"),
    },
    {
      id: "02",
      name: "Without Legend",
      component: <WithoutLegend />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/fieldset/without-legend.jsx",
      ),
    },
    {
      id: "03",
      name: "Without Role",
      component: <WithoutRole />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/fieldset/without-role.jsx",
      ),
    },
    {
      id: "04",
      name: "With Grid Layout",
      component: <GridLayout />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/fieldset/grid-layout.jsx",
      ),
    },
    {
      id: "05",
      name: "With Custom Layout",
      component: <CustomLayout />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/fieldset/custom-layout.jsx",
      ),
    },
    {
      id: "06",
      name: "Disabled State",
      component: <DisabledState />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/fieldset/disabled.jsx"),
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
