import { getRaw } from "@/utils/ui/get-raw";
import DropdownClient from "./page-client";

const Page = () => {
  // Chỉ lấy dữ liệu dạng text (plain object), không chứa Component hay Function
  const layoutsData = [
    {
      id: "01",
      name: "Basic",
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/dropdown/basic.jsx"),
    },
    {
      id: "02",
      name: "Button Style",
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/dropdown/button-style.jsx",
      ),
    },
    {
      id: "03",
      name: "Menu Placement",
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/dropdown/menu-placement.jsx",
      ),
    },
    {
      id: "04",
      name: "With Disabled Items",
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/dropdown/with-disabled.jsx",
      ),
    },
    {
      id: "05",
      name: "With Sections",
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/dropdown/with-sections.jsx",
      ),
    },
    {
      id: "06",
      name: "With Descriptions",
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/dropdown/with-descriptions.jsx",
      ),
    },
    {
      id: "07",
      name: "With Icons",
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/dropdown/with-icons.jsx"),
    },
    {
      id: "08",
      name: "With Keyboard Shortcuts",
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/dropdown/with-shortcuts.jsx",
      ),
    },
    {
      id: "09",
      name: "With Header",
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/dropdown/with-header.jsx",
      ),
    },
    {
      id: "10",
      name: "With Disabled Button",
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/dropdown/disabled-button.jsx",
      ),
    },
    {
      id: "11",
      name: "With Icon Trigger",
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/dropdown/icon-trigger.jsx",
      ),
    },
    {
      id: "12",
      name: "With Avatar Trigger",
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/dropdown/avatar-trigger.jsx",
      ),
    },
    {
      id: "13",
      name: "With Custom Trigger",
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/dropdown/custom-trigger.jsx",
      ),
    },
    {
      id: "14",
      name: "With Custom Menu Width",
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/dropdown/custom-width.jsx",
      ),
    },
  ];

  return <DropdownClient layoutsData={layoutsData} />;
};

export default Page;
