import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithTrending from "./with_trending";
import Simple from "./simple_on_dark";
import SimpleInCards from "./simple_in_cards";
import WithBrandIcon from "./with_brand_icon";
import WithSharedBorders from "./with_shared_borders";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With trending",
      component: <WithTrending />,
      fileName: "with_trending.jsx",
    },
    {
      id: "02",
      name: "Simple",
      component: <Simple />,
      fileName: "simple_on_dark.jsx",
    },
    {
      id: "03",
      name: "Simple in cards",
      component: <SimpleInCards />,
      fileName: "simple_in_cards.jsx",
    },
    {
      id: "04",
      name: "With brand icon",
      component: <WithBrandIcon />,
      fileName: "with_brand_icon.jsx",
    },
    {
      id: "05",
      name: "With shared borders",
      component: <WithSharedBorders />,
      fileName: "with_shared_borders.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục stats (Application UI > Data Display)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/data-display/stats";

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
