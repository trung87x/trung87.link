import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. With logo
import WithLogo from "./with-logo";

// 03. With icons
import WithIcons from "./with-icons";

// 04. With active state
import ActiveState from "./active-state";

// 05. With sticky header
import StickyHeader from "./sticky-header";

// 06. With sticky footer
import StickyFooter from "./sticky-footer";

// 07. With section headings
import SectionHeadings from "./section-headings";

// 08. With space between sections
import SpaceBetween from "./space-between";

// 09. With divider
import WithDivider from "./with-divider";

// 10. With dropdown
import WithDropdown from "./with-dropdown";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/sidebar/basic.jsx"),
    },
    {
      id: "02",
      name: "With Logo",
      component: <WithLogo />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/sidebar/with-logo.jsx"),
    },
    {
      id: "03",
      name: "With Icons",
      component: <WithIcons />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/sidebar/with-icons.jsx"),
    },
    {
      id: "04",
      name: "With Active State",
      component: <ActiveState />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/sidebar/active-state.jsx",
      ),
    },
    {
      id: "05",
      name: "With Sticky Header",
      component: <StickyHeader />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/sidebar/sticky-header.jsx",
      ),
    },
    {
      id: "06",
      name: "With Sticky Footer",
      component: <StickyFooter />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/sidebar/sticky-footer.jsx",
      ),
    },
    {
      id: "07",
      name: "With Section Headings",
      component: <SectionHeadings />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/sidebar/section-headings.jsx",
      ),
    },
    {
      id: "08",
      name: "With Space Between Sections",
      component: <SpaceBetween />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/sidebar/space-between.jsx",
      ),
    },
    {
      id: "09",
      name: "With Divider",
      component: <WithDivider />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/sidebar/with-divider.jsx",
      ),
    },
    {
      id: "10",
      name: "With Dropdown",
      component: <WithDropdown />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/sidebar/with-dropdown.jsx",
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
            {/* Sidebar cần chiều cao cố định trong bản xem trước để thể hiện tính chất scroll/sticky */}
            <div className="flex h-[400px] w-full max-w-xs overflow-hidden rounded-lg border border-gray-200 bg-white">
              {layout.component}
            </div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
