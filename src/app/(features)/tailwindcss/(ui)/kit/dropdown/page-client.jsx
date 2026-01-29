"use client"; // Đánh dấu đây là Client Component

import PreviewWrapper from "@/utils/ui/preview-wrapper";
import Basic from "./basic";
import ButtonStyle from "./button-style";
import MenuPlacement from "./menu-placement";
import WithDisabled from "./with-disabled";
import WithSections from "./with-sections";
import WithDescriptions from "./with-descriptions";
import WithIcons from "./with-icons";
import WithShortcuts from "./with-shortcuts";
import WithHeader from "./with-header";
import DisabledButton from "./disabled-button";
import IconTrigger from "./icon-trigger";
import AvatarTrigger from "./avatar-trigger";
import CustomTrigger from "./custom-trigger";
import CustomMenuWidth from "./custom-width";

const currentUser = {
  name: "Đinh Quang Trung",
  avatarUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  role: "Administrator",
};

const mockActions = {
  url: "https://google.com",
  renameFile: () => alert("Rename!"),
  deleteFile: () => alert("Delete!"),
  signOut: () => alert("Signed out!"),
  deleteUser: () => alert("User Deleted!"),
};

export default function DropdownClient({ layoutsData }) {
  // Hàm ánh xạ ID sang Component thực tế
  const renderComponent = (id) => {
    switch (id) {
      case "01":
        return <Basic />;
      case "02":
        return <ButtonStyle />;
      case "03":
        return <MenuPlacement />;
      case "04":
        return <WithDisabled {...mockActions} />;
      case "05":
        return <WithSections />;
      case "06":
        return <WithDescriptions {...mockActions} />;
      case "07":
        return <WithIcons />;
      case "08":
        return <WithShortcuts {...mockActions} />;
      case "09":
        return <WithHeader {...mockActions} />;
      case "10":
        return <DisabledButton {...mockActions} />;
      case "11":
        return <IconTrigger {...mockActions} />;
      case "12":
        return <AvatarTrigger currentUser={currentUser} {...mockActions} />;
      case "13":
        return <CustomTrigger currentUser={currentUser} {...mockActions} />;
      case "14":
        return <CustomMenuWidth />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-10 pb-20">
      {layoutsData.map((layout) => (
        <section
          key={layout.id}
          className="border-b border-gray-100 pb-10 last:border-0"
        >
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            {layout.id}. {layout.name}
          </h2>
          <PreviewWrapper name={layout.name} code={layout.raw}>
            <div className="flex min-h-[200px] justify-center pt-10">
              {renderComponent(layout.id)}
            </div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
}
