import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import WithCloseButtonOutside from "./with_close_button_on_outside";
import Empty from "./empty";
import WideEmpty from "./wide_empty";
import WithBackgroundOverlay from "./with_background_overlay";
import WithBrandedHeader from "./with_branded_header";
import WithStickyFooter from "./with_sticky_footer";
import CreateProjectFormExample from "./create_project_form_example";
import WideCreateProjectFormExample from "./wide_create_project_form_example";
import UserProfileExample from "./user_profile_example";
import WideHorizontalUserProfileExample from "./wide_horizontal_user_profile_example";
import ContactListExample from "./contact_list_example";
import FileDetailsExample from "./file_details_example";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "With close button on outside",
      component: <WithCloseButtonOutside />,
      fileName: "with_close_button_on_outside.jsx",
    },
    { id: "02", name: "Empty", component: <Empty />, fileName: "empty.jsx" },
    {
      id: "03",
      name: "Wide empty",
      component: <WideEmpty />,
      fileName: "wide_empty.jsx",
    },
    {
      id: "04",
      name: "With background overlay",
      component: <WithBackgroundOverlay />,
      fileName: "with_background_overlay.jsx",
    },
    {
      id: "05",
      name: "With branded header",
      component: <WithBrandedHeader />,
      fileName: "with_branded_header.jsx",
    },
    {
      id: "06",
      name: "With sticky footer",
      component: <WithStickyFooter />,
      fileName: "with_sticky_footer.jsx",
    },
    {
      id: "07",
      name: "Create project form example",
      component: <CreateProjectFormExample />,
      fileName: "create_project_form_example.jsx",
    },
    {
      id: "08",
      name: "Wide create project form example",
      component: <WideCreateProjectFormExample />,
      fileName: "wide_create_project_form_example.jsx",
    },
    {
      id: "09",
      name: "User profile example",
      component: <UserProfileExample />,
      fileName: "user_profile_example.jsx",
    },
    {
      id: "10",
      name: "Wide horizontal user profile example",
      component: <WideHorizontalUserProfileExample />,
      fileName: "wide_horizontal_user_profile_example.jsx",
    },
    {
      id: "11",
      name: "Contact list example",
      component: <ContactListExample />,
      fileName: "contact_list_example.jsx",
    },
    {
      id: "12",
      name: "File details example",
      component: <FileDetailsExample />,
      fileName: "file_details_example.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file drawers (Application UI > Overlays)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/overlays/drawers";

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
