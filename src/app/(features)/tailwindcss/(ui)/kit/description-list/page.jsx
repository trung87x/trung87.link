import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. With heading
import WithHeading from "./with-heading";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/description-list/basic.jsx",
      ),
    },
    {
      id: "02",
      name: "With Heading",
      component: <WithHeading />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/description-list/with-heading.jsx",
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
