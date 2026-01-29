import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic heading
import BasicHeading from "./basic-heading";

// 02. Basic subheading
import BasicSubheading from "./basic-subheading";

// 03. With custom level
import CustomLevel from "./custom-level";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic Heading",
      component: <BasicHeading />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/heading/basic-heading.jsx",
      ),
    },
    {
      id: "02",
      name: "Basic Subheading",
      component: <BasicSubheading />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/heading/basic-subheading.jsx",
      ),
    },
    {
      id: "03",
      name: "With Custom Level",
      component: <CustomLevel />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/heading/custom-level.jsx",
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
