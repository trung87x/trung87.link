import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import WithStats from "./with_stats";
import Centered from "./centered";
import CenteredWithEyebrow from "./centered_with_eyebrow";
import WithCards from "./with_cards";
import Simple from "./simple";
import SimpleWithEyebrow from "./simple_with_eyebrow";
import SimpleWithBackgroundImage from "./simple_with_background_image";
import CenteredWithBackgroundImage from "./centered_with_background_image";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With stats",
      component: <WithStats />,
      fileName: "with_stats.jsx",
    },
    {
      id: "02",
      name: "Centered",
      component: <Centered />,
      fileName: "centered.jsx",
    },
    {
      id: "03",
      name: "Centered with eyebrow",
      component: <CenteredWithEyebrow />,
      fileName: "centered_with_eyebrow.jsx",
    },
    {
      id: "04",
      name: "With cards",
      component: <WithCards />,
      fileName: "with_cards.jsx",
    },
    { id: "05", name: "Simple", component: <Simple />, fileName: "simple.jsx" },
    {
      id: "06",
      name: "Simple with eyebrow",
      component: <SimpleWithEyebrow />,
      fileName: "simple_with_eyebrow.jsx",
    },
    {
      id: "07",
      name: "Simple with background image",
      component: <SimpleWithBackgroundImage />,
      fileName: "simple_with_background_image.jsx",
    },
    {
      id: "08",
      name: "Centered with background image",
      component: <CenteredWithBackgroundImage />,
      fileName: "centered_with_background_image.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file header-sections
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/header-sections";

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
            // Gọi getRaw trực tiếp tại phần render để lấy nội dung file
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
