import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. With reduced contrast
import ReducedContrast from "./reduced-contrast";

// 03. With spacing
import WithSpacing from "./with-spacing";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/divider/basic.jsx"),
    },
    {
      id: "02",
      name: "With reduced contrast",
      component: <ReducedContrast />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/divider/reduced-contrast.jsx",
      ),
    },
    {
      id: "03",
      name: "With spacing",
      component: <WithSpacing />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/divider/with-spacing.jsx",
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
            {layout.component}
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
