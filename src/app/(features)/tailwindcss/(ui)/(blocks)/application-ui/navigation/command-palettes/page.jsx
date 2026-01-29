import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import SimpleWithPadding from "./simple_with_padding";
import WithPreview from "./with_preview";
import WithImagesDescriptions from "./with_images_and_descriptions";
import WithIcons from "./with_icons";
import SemiTransparentWithIcons from "./semi_transparent_with_icons";
import WithGroups from "./with_groups";
import WithFooter from "./with_footer";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    { id: "01", name: "Simple", component: <Simple />, fileName: "simple.jsx" },
    {
      id: "02",
      name: "Simple with padding",
      component: <SimpleWithPadding />,
      fileName: "simple_with_padding.jsx",
    },
    {
      id: "03",
      name: "With preview",
      component: <WithPreview />,
      fileName: "with_preview.jsx",
    },
    {
      id: "04",
      name: "With images and descriptions",
      component: <WithImagesDescriptions />,
      fileName: "with_images_and_descriptions.jsx",
    },
    {
      id: "05",
      name: "With icons",
      component: <WithIcons />,
      fileName: "with_icons.jsx",
    },
    {
      id: "06",
      name: "Semi-transparent with icons",
      component: <SemiTransparentWithIcons />,
      fileName: "semi_transparent_with_icons.jsx",
    },
    {
      id: "07",
      name: "With groups",
      component: <WithGroups />,
      fileName: "with_groups.jsx",
    },
    {
      id: "08",
      name: "With footer",
      component: <WithFooter />,
      fileName: "with_footer.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file command-palettes (Application UI > Navigation)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/navigation/command-palettes";

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
