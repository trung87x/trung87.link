import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import DarkPanelWithAppScreenshot from "./dark_panel_with_app_screenshot";
import SimpleStacked from "./simple_stacked";
import CenteredOnDarkPanel from "./centered_on_dark_panel";
import SimpleCentered from "./simple_centered";
import SimpleCenteredWithGradient from "./simple_centered_on_dark";
import SimpleCenteredOnBrand from "./simple_centered_on_brand";
import SimpleJustified from "./simple_justified";
import SimpleJustifiedOnSubtleBrand from "./simple_justified_on_light_brand";
import SplitWithImage from "./split_with_image";
import TwoColumnsWithPhoto from "./two_columns_with_photo_on_dark";
import WithImageTiles from "./with_image_tiles";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Dark panel with app screenshot",
      component: <DarkPanelWithAppScreenshot />,
      fileName: "dark_panel_with_app_screenshot.jsx",
    },
    {
      id: "02",
      name: "Simple stacked",
      component: <SimpleStacked />,
      fileName: "simple_stacked.jsx",
    },
    {
      id: "03",
      name: "Centered on dark panel",
      component: <CenteredOnDarkPanel />,
      fileName: "centered_on_dark_panel.jsx",
    },
    {
      id: "04",
      name: "Simple centered",
      component: <SimpleCentered />,
      fileName: "simple_centered.jsx",
    },
    {
      id: "05",
      name: "Simple centered with gradient",
      component: <SimpleCenteredWithGradient />,
      fileName: "simple_centered_on_dark.jsx",
    },
    {
      id: "06",
      name: "Simple centered on brand",
      component: <SimpleCenteredOnBrand />,
      fileName: "simple_centered_on_brand.jsx",
    },
    {
      id: "07",
      name: "Simple justified",
      component: <SimpleJustified />,
      fileName: "simple_justified.jsx",
    },
    {
      id: "08",
      name: "Simple justified on subtle brand",
      component: <SimpleJustifiedOnSubtleBrand />,
      fileName: "simple_justified_on_light_brand.jsx",
    },
    {
      id: "09",
      name: "Split with image",
      component: <SplitWithImage />,
      fileName: "split_with_image.jsx",
    },
    {
      id: "10",
      name: "Two columns with photo",
      component: <TwoColumnsWithPhoto />,
      fileName: "two_columns_with_photo_on_dark.jsx",
    },
    {
      id: "11",
      name: "With image tiles",
      component: <WithImageTiles />,
      fileName: "with_image_tiles.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file cta-sections
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/cta-sections";

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
            // Gọi getRaw trực tiếp tại đây với đường dẫn đầy đủ
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
