import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import WithLinks from "./with_links";
import WithInlineLinksAvatarGroup from "./with_inline_links_and_avatar_group";
import WithInlineLinksActionsMenu from "./with_inline_links_and_actions_menu";
import WithBadgesButtonActions from "./with_badges__button__and_actions_menu";
import InCardWithLinks from "./in_card_with_links";
import TwoColumnsWithLinks from "./two_columns_with_links";
import FullWidthWithLinks from "./full_width_with_links";
import FullWidthConstrained from "./full_width_with_constrained_content";
import Narrow from "./narrow";
import NarrowStickyHeadings from "./narrow_with_sticky_headings";
import NarrowWithActions from "./narrow_with_actions";
import NarrowTruncated from "./narrow_with_truncated_content";
import NarrowSmallAvatars from "./narrow_with_small_avatars";
import NarrowWithBadges from "./narrow_with_badges_on_dark";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    { id: "01", name: "Simple", component: <Simple />, fileName: "simple.jsx" },
    {
      id: "02",
      name: "With links",
      component: <WithLinks />,
      fileName: "with_links.jsx",
    },
    {
      id: "03",
      name: "With inline links and avatar group",
      component: <WithInlineLinksAvatarGroup />,
      fileName: "with_inline_links_and_avatar_group.jsx",
    },
    {
      id: "04",
      name: "With inline links and actions menu",
      component: <WithInlineLinksActionsMenu />,
      fileName: "with_inline_links_and_actions_menu.jsx",
    },
    {
      id: "05",
      name: "With badges, button, and actions menu",
      component: <WithBadgesButtonActions />,
      fileName: "with_badges__button__and_actions_menu.jsx",
    },
    {
      id: "06",
      name: "In card with links",
      component: <InCardWithLinks />,
      fileName: "in_card_with_links.jsx",
    },
    {
      id: "07",
      name: "Two columns with links",
      component: <TwoColumnsWithLinks />,
      fileName: "two_columns_with_links.jsx",
    },
    {
      id: "08",
      name: "Full width with links",
      component: <FullWidthWithLinks />,
      fileName: "full_width_with_links.jsx",
    },
    {
      id: "09",
      name: "Full-width with constrained content",
      component: <FullWidthConstrained />,
      fileName: "full_width_with_constrained_content.jsx",
    },
    { id: "10", name: "Narrow", component: <Narrow />, fileName: "narrow.jsx" },
    {
      id: "11",
      name: "Narrow with sticky headings",
      component: <NarrowStickyHeadings />,
      fileName: "narrow_with_sticky_headings.jsx",
    },
    {
      id: "12",
      name: "Narrow with actions",
      component: <NarrowWithActions />,
      fileName: "narrow_with_actions.jsx",
    },
    {
      id: "13",
      name: "Narrow with truncated content",
      component: <NarrowTruncated />,
      fileName: "narrow_with_truncated_content.jsx",
    },
    {
      id: "14",
      name: "Narrow with small avatars",
      component: <NarrowSmallAvatars />,
      fileName: "narrow_with_small_avatars.jsx",
    },
    {
      id: "15",
      name: "Narrow with badges",
      component: <NarrowWithBadges />,
      fileName: "narrow_with_badges_on_dark.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file stacked-lists (Application UI > Lists)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/lists/stacked-lists";

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
