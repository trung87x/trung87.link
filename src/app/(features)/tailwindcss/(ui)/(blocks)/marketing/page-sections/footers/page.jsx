import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import FourColumnWithCompanyMissionOnDark from "./4_column_with_company_mission_on_dark";
import FourColumnWithCallToAction from "./4_column_with_call_to_action";
import FourColumnSimple from "./4_column_simple";
import FourColumnWithNewsletter from "./4_column_with_newsletter";
import FourColumnWithNewsletterBelow from "./4_column_with_newsletter_below";
import SimpleCentered from "./simple_centered";
import SimpleWithSocialLinks from "./simple_with_social_links";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "4-column with company mission on dark",
      component: <FourColumnWithCompanyMissionOnDark />,
      fileName: "4_column_with_company_mission_on_dark.jsx",
    },
    {
      id: "02",
      name: "4-column with call-to-action",
      component: <FourColumnWithCallToAction />,
      fileName: "4_column_with_call_to_action.jsx",
    },
    {
      id: "03",
      name: "4-column simple",
      component: <FourColumnSimple />,
      fileName: "4_column_simple.jsx",
    },
    {
      id: "04",
      name: "4-column with newsletter",
      component: <FourColumnWithNewsletter />,
      fileName: "4_column_with_newsletter.jsx",
    },
    {
      id: "05",
      name: "4-column with newsletter below",
      component: <FourColumnWithNewsletterBelow />,
      fileName: "4_column_with_newsletter_below.jsx",
    },
    {
      id: "06",
      name: "Simple centered",
      component: <SimpleCentered />,
      fileName: "simple_centered.jsx",
    },
    {
      id: "07",
      name: "Simple with social links",
      component: <SimpleWithSocialLinks />,
      fileName: "simple_with_social_links.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file footers
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/footers";

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
            // Gọi getRaw trực tiếp tại đây để đảm bảo đường dẫn chính xác
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
