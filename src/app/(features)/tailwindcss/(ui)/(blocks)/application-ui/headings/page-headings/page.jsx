import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithMetaAndActions from "./with_meta_and_actions";
import WithActions from "./with_actions";
import WithActionsAndBreadcrumbs from "./with_actions_and_breadcrumbs";
import WithBannerImage from "./with_banner_image";
import WithAvatarAndActions from "./with_avatar_and_actions";
import CardWithAvatarAndStats from "./card_with_avatar_and_stats";
import WithMetaActionsAndBreadcrumbs from "./with_meta__actions__and_breadcrumbs";
import WithFiltersAndAction from "./with_filters_and_action";
import WithLogoMetaAndActions from "./with_logo__meta_and_actions";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With meta and actions",
      component: <WithMetaAndActions />,
      fileName: "with_meta_and_actions.jsx",
    },
    {
      id: "02",
      name: "With actions",
      component: <WithActions />,
      fileName: "with_actions.jsx",
    },
    {
      id: "03",
      name: "With actions and breadcrumbs",
      component: <WithActionsAndBreadcrumbs />,
      fileName: "with_actions_and_breadcrumbs.jsx",
    },
    {
      id: "04",
      name: "With banner image",
      component: <WithBannerImage />,
      fileName: "with_banner_image.jsx",
    },
    {
      id: "05",
      name: "With avatar and actions",
      component: <WithAvatarAndActions />,
      fileName: "with_avatar_and_actions.jsx",
    },
    {
      id: "06",
      name: "Card with avatar and stats",
      component: <CardWithAvatarAndStats />,
      fileName: "card_with_avatar_and_stats.jsx",
    },
    {
      id: "07",
      name: "With meta, actions, and breadcrumbs",
      component: <WithMetaActionsAndBreadcrumbs />,
      fileName: "with_meta__actions__and_breadcrumbs.jsx",
    },
    {
      id: "08",
      name: "With filters and action",
      component: <WithFiltersAndAction />,
      fileName: "with_filters_and_action.jsx",
    },
    {
      id: "09",
      name: "With logo, meta and actions",
      component: <WithLogoMetaAndActions />,
      fileName: "with_logo__meta_and_actions.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file page-headings (Application UI > Headings)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/headings/page-headings";

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
