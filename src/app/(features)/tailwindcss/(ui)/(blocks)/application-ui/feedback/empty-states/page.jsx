import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import WithDashedBorder from "./with_dashed_border";
import WithStartingPoints from "./with_starting_points";
import WithRecommendations from "./with_recommendations";
import WithTemplates from "./with_templates";
import WithRecommendationsGrid from "./with_recommendations_grid";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      fileName: "simple.jsx",
    },
    {
      id: "02",
      name: "With dashed border",
      component: <WithDashedBorder />,
      fileName: "with_dashed_border.jsx",
    },
    {
      id: "03",
      name: "With starting points",
      component: <WithStartingPoints />,
      fileName: "with_starting_points.jsx",
    },
    {
      id: "04",
      name: "With recommendations",
      component: <WithRecommendations />,
      fileName: "with_recommendations.jsx",
    },
    {
      id: "05",
      name: "With templates",
      component: <WithTemplates />,
      fileName: "with_templates.jsx",
    },
    {
      id: "06",
      name: "With recommendations grid",
      component: <WithRecommendationsGrid />,
      fileName: "with_recommendations_grid.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file empty-states (Application UI > Feedback)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/feedback/empty-states";

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
          <PreviewWrapper
            name={layout.name}
            // Nạp mã nguồn động qua getRaw dựa trên fileName và baseDir
            code={getRaw(`${baseDir}/${layout.fileName}`)}
          >
            {layout.component}
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
