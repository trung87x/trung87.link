import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Badge colors
import BadgeColors from "./badge-colors";

// 02. Using as buttons
import BadgeButtons from "./badge-button";

// 03. Using as links
import BadgeLinks from "./badge-link";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Badge Colors",
      component: <BadgeColors />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/badge/badge-colors.jsx"),
    },
    {
      id: "02",
      name: "Using as Buttons",
      component: <BadgeButtons />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/badge/badge-button.jsx"),
    },
    {
      id: "03",
      name: "Using as Links",
      component: <BadgeLinks />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/badge/badge-link.jsx"),
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
