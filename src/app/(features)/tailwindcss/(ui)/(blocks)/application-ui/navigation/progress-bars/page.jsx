import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import Panels from "./panels";
import Bullets from "./bullets";
import PanelsWithBorder from "./panels_with_border";
import Circles from "./circles";
import BulletsAndText from "./bullets_and_text";
import CirclesWithText from "./circles_with_text";
import ProgressBar from "./progress_bar";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    { id: "01", name: "Simple", component: <Simple />, fileName: "simple.jsx" },
    { id: "02", name: "Panels", component: <Panels />, fileName: "panels.jsx" },
    {
      id: "03",
      name: "Bullets",
      component: <Bullets />,
      fileName: "bullets.jsx",
    },
    {
      id: "04",
      name: "Panels with border",
      component: <PanelsWithBorder />,
      fileName: "panels_with_border.jsx",
    },
    {
      id: "05",
      name: "Circles",
      component: <Circles />,
      fileName: "circles.jsx",
    },
    {
      id: "06",
      name: "Bullets and text",
      component: <BulletsAndText />,
      fileName: "bullets_and_text.jsx",
    },
    {
      id: "07",
      name: "Circles with text",
      component: <CirclesWithText />,
      fileName: "circles_with_text.jsx",
    },
    {
      id: "08",
      name: "Progress bar",
      component: <ProgressBar />,
      fileName: "progress_bar.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file progress-bars (Application UI > Navigation)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/navigation/progress-bars";

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
