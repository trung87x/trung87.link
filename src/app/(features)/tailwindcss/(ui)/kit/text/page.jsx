import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. With link
import WithLink from "./with-link";

// 03. With strong
import WithStrong from "./with-strong";

// 04. With code
import WithCode from "./with-code";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic Text",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/text/basic.jsx"),
    },
    {
      id: "02",
      name: "With Link",
      component: <WithLink />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/text/with-link.jsx"),
    },
    {
      id: "03",
      name: "With Strong (Bold)",
      component: <WithStrong />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/text/with-strong.jsx"),
    },
    {
      id: "04",
      name: "With Code (Inline)",
      component: <WithCode />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/text/with-code.jsx"),
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
            <div className="prose prose-slate max-w-none bg-white p-6">
              {layout.component}
            </div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
