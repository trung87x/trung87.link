import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. Disabling previous/next links
import DisabledLinks from "./disabled-links";

// 03. Current page active state
import ActiveState from "./active-state";

// 04. Without page links
import WithoutPageLinks from "./no-page-links";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic Pagination",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/pagination/basic.jsx"),
    },
    {
      id: "02",
      name: "Disabling Previous/Next Links",
      component: <DisabledLinks />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/pagination/disabled-links.jsx",
      ),
    },
    {
      id: "03",
      name: "Current Page Active State",
      component: <ActiveState />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/pagination/active-state.jsx",
      ),
    },
    {
      id: "04",
      name: "Without Page Links",
      component: <WithoutPageLinks />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/pagination/no-page-links.jsx",
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
            <div className="flex justify-center py-8">{layout.component}</div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
