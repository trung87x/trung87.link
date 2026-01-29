import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. Dialog width
import DialogWidth from "./dialog-width";

// 03. Opening from dropdown
import FromDropdown from "./from-dropdown";

// 04. Auto-focusing elements
import AutoFocus from "./auto-focus";

// 05. With scrolling content
import ScrollingContent from "./scrolling-content";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/dialog/basic.jsx"),
    },
    {
      id: "02",
      name: "Dialog Width",
      component: <DialogWidth />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/dialog/dialog-width.jsx"),
    },
    {
      id: "03",
      name: "Opening from Dropdown",
      component: <FromDropdown />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/dialog/from-dropdown.jsx",
      ),
    },
    {
      id: "04",
      name: "Auto-focusing Elements",
      component: <AutoFocus />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/dialog/auto-focus.jsx"),
    },
    {
      id: "05",
      name: "With Scrolling Content",
      component: <ScrollingContent />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/dialog/scrolling-content.jsx",
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
