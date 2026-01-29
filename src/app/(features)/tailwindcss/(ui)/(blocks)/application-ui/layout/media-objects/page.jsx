import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Basic from "./basic";
import AlignedToCenter from "./aligned_to_center";
import AlignedToBottom from "./aligned_to_bottom";
import StretchedToFit from "./stretched_to_fit";
import MediaOnRight from "./media_on_right";
import BasicResponsive from "./basic_responsive";
import WideResponsive from "./wide_responsive";
import Nested from "./nested";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    { id: "01", name: "Basic", component: <Basic />, fileName: "basic.jsx" },
    {
      id: "02",
      name: "Aligned to center",
      component: <AlignedToCenter />,
      fileName: "aligned_to_center.jsx",
    },
    {
      id: "03",
      name: "Aligned to bottom",
      component: <AlignedToBottom />,
      fileName: "aligned_to_bottom.jsx",
    },
    {
      id: "04",
      name: "Stretched to fit",
      component: <StretchedToFit />,
      fileName: "stretched_to_fit.jsx",
    },
    {
      id: "05",
      name: "Media on right",
      component: <MediaOnRight />,
      fileName: "media_on_right.jsx",
    },
    {
      id: "06",
      name: "Basic responsive",
      component: <BasicResponsive />,
      fileName: "basic_responsive.jsx",
    },
    {
      id: "07",
      name: "Wide responsive",
      component: <WideResponsive />,
      fileName: "wide_responsive.jsx",
    },
    { id: "08", name: "Nested", component: <Nested />, fileName: "nested.jsx" },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file media-objects (Application UI > Layout)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/layout/media-objects";

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
