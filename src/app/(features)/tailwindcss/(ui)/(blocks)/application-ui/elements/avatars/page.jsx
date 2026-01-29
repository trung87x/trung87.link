import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import AvatarGroupStackedBottomToTop from "./avatar_group_stacked_bottom_to_top";
import CircularAvatars from "./circular_avatars";
import RoundedAvatars from "./rounded_avatars";
import CircularAvatarsWithTopNotification from "./circular_avatars_with_top_notification";
import RoundedAvatarsWithTopNotification from "./rounded_avatars_with_top_notification";
import CircularAvatarsWithBottomNotification from "./circular_avatars_with_bottom_notification";
import RoundedAvatarsWithBottomNotification from "./rounded_avatars_with_bottom_notification";
import CircularAvatarsWithPlaceholderIcon from "./circular_avatars_with_placeholder_icon";
import CircularAvatarsWithPlaceholderInitials from "./circular_avatars_with_placeholder_initials";
import AvatarGroupStackedTopToBottom from "./avatar_group_stacked_top_to_bottom";
import WithText from "./with_text";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Avatar group stacked bottom to top",
      component: <AvatarGroupStackedBottomToTop />,
      fileName: "avatar_group_stacked_bottom_to_top.jsx",
    },
    {
      id: "02",
      name: "Circular avatars",
      component: <CircularAvatars />,
      fileName: "circular_avatars.jsx",
    },
    {
      id: "03",
      name: "Rounded avatars",
      component: <RoundedAvatars />,
      fileName: "rounded_avatars.jsx",
    },
    {
      id: "04",
      name: "Circular avatars with top notification",
      component: <CircularAvatarsWithTopNotification />,
      fileName: "circular_avatars_with_top_notification.jsx",
    },
    {
      id: "05",
      name: "Rounded avatars with top notification",
      component: <RoundedAvatarsWithTopNotification />,
      fileName: "rounded_avatars_with_top_notification.jsx",
    },
    {
      id: "06",
      name: "Circular avatars with bottom notification",
      component: <CircularAvatarsWithBottomNotification />,
      fileName: "circular_avatars_with_bottom_notification.jsx",
    },
    {
      id: "07",
      name: "Rounded avatars with bottom notification",
      component: <RoundedAvatarsWithBottomNotification />,
      fileName: "rounded_avatars_with_bottom_notification.jsx",
    },
    {
      id: "08",
      name: "Circular avatars with placeholder icon",
      component: <CircularAvatarsWithPlaceholderIcon />,
      fileName: "circular_avatars_with_placeholder_icon.jsx",
    },
    {
      id: "09",
      name: "Circular avatars with placeholder initials",
      component: <CircularAvatarsWithPlaceholderInitials />,
      fileName: "circular_avatars_with_placeholder_initials.jsx",
    },
    {
      id: "10",
      name: "Avatar group stacked top to bottom",
      component: <AvatarGroupStackedTopToBottom />,
      fileName: "avatar_group_stacked_top_to_bottom.jsx",
    },
    {
      id: "11",
      name: "With text",
      component: <WithText />,
      fileName: "with_text.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục avatars (Application UI > Elements)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/elements/avatars";

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
            // Tự động nạp mã nguồn dựa trên baseDir và fileName
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
