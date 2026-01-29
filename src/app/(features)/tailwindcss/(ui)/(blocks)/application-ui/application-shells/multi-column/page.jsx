import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import FullWidthThreeColumn from "./full_width_three_column";
import FullWidthSecondaryRight from "./full_width_secondary_column_on_right";
import ConstrainedThreeColumn from "./constrained_three_column";
import ConstrainedStickyColumns from "./constrained_with_sticky_columns";
import FullWidthNarrowSidebar from "./full_width_with_narrow_sidebar";
import FullWidthNarrowSidebarHeader from "./full_width_with_narrow_sidebar_and_header";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Full-width three-column",
      component: <FullWidthThreeColumn />,
      fileName: "full_width_three_column.jsx",
    },
    {
      id: "02",
      name: "Full-width secondary column on right",
      component: <FullWidthSecondaryRight />,
      fileName: "full_width_secondary_column_on_right.jsx",
    },
    {
      id: "03",
      name: "Constrained three column",
      component: <ConstrainedThreeColumn />,
      fileName: "constrained_three_column.jsx",
    },
    {
      id: "04",
      name: "Constrained with sticky columns",
      component: <ConstrainedStickyColumns />,
      fileName: "constrained_with_sticky_columns.jsx",
    },
    {
      id: "05",
      name: "Full-width with narrow sidebar",
      component: <FullWidthNarrowSidebar />,
      fileName: "full_width_with_narrow_sidebar.jsx",
    },
    {
      id: "06",
      name: "Full-width with narrow sidebar and header",
      component: <FullWidthNarrowSidebarHeader />,
      fileName: "full_width_with_narrow_sidebar_and_header.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục multi-column (Application UI > Application Shells)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/application-shells/multi-column";

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
