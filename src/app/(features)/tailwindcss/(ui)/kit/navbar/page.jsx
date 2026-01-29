import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. With logo
import WithLogo from "./with-logo";

// 03. With active state
import ActiveState from "./active-state";

// 04. With icon links
import IconLinks from "./icon-links";

// 05. With space between items
import SpaceBetween from "./space-between";

// 06. With divider
import WithDivider from "./with-divider";

// 07. With dropdown
import WithDropdown from "./with-dropdown";

// 08. With avatar dropdown
import AvatarDropdown from "./avatar-dropdown";

// 09. With mobile menu
import MobileMenu from "./mobile-menu";

// 10. Hiding items on mobile
import HidingMobile from "./hiding-mobile";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/navbar/basic.jsx"),
    },
    {
      id: "02",
      name: "With Logo",
      component: <WithLogo />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/navbar/with-logo.jsx"),
    },
    {
      id: "03",
      name: "With Active State",
      component: <ActiveState />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/navbar/active-state.jsx"),
    },
    {
      id: "04",
      name: "With Icon Links",
      component: <IconLinks />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/navbar/icon-links.jsx"),
    },
    {
      id: "05",
      name: "With Space Between Items",
      component: <SpaceBetween />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/navbar/space-between.jsx",
      ),
    },
    {
      id: "06",
      name: "With Divider",
      component: <WithDivider />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/navbar/with-divider.jsx"),
    },
    {
      id: "07",
      name: "With Dropdown",
      component: <WithDropdown />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/navbar/with-dropdown.jsx",
      ),
    },
    {
      id: "08",
      name: "With Avatar Dropdown",
      component: <AvatarDropdown />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/navbar/avatar-dropdown.jsx",
      ),
    },
    {
      id: "09",
      name: "With Mobile Menu",
      component: <MobileMenu />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/navbar/mobile-menu.jsx"),
    },
    {
      id: "10",
      name: "Hiding Items on Mobile",
      component: <HidingMobile />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/navbar/hiding-mobile.jsx",
      ),
    },
  ];

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
          <PreviewWrapper name={layout.name} code={layout.raw}>
            {/* Navbar cần không gian rộng để hiển thị đúng thực tế */}
            <div className="w-full bg-gray-50 p-4">{layout.component}</div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
