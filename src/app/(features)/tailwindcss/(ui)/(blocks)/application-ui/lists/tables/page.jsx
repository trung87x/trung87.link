import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import Simple from "./simple";
import SimpleInCard from "./simple_in_card";
import FullWidth from "./full_width";
import FullWidthConstrained from "./full_width_with_constrained_content";
import WithStripedRows from "./with_striped_rows";
import WithUppercaseHeadings from "./with_uppercase_headings";
import WithStackedColumnsMobile from "./with_stacked_columns_on_mobile";
import WithHiddenColumnsMobile from "./with_hidden_columns_on_mobile";
import WithAvatarsMultiLine from "./with_avatars_and_multi_line_content";
import WithStickyHeader from "./with_sticky_header";
import WithVerticalLines from "./with_vertical_lines";
import WithCondensedContent from "./with_condensed_content";
import WithSortableHeadings from "./with_sortable_headings";
import WithGroupedRows from "./with_grouped_rows";
import WithSummaryRows from "./with_summary_rows";
import WithBorder from "./with_border";
import WithCheckboxes from "./with_checkboxes";
import WithHiddenHeadings from "./with_hidden_headings";
import FullWidthWithAvatars from "./full_width_with_avatars_on_dark";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    { id: "01", name: "Simple", component: <Simple />, fileName: "simple.jsx" },
    {
      id: "02",
      name: "Simple in card",
      component: <SimpleInCard />,
      fileName: "simple_in_card.jsx",
    },
    {
      id: "03",
      name: "Full width",
      component: <FullWidth />,
      fileName: "full_width.jsx",
    },
    {
      id: "04",
      name: "Full width with constrained content",
      component: <FullWidthConstrained />,
      fileName: "full_width_with_constrained_content.jsx",
    },
    {
      id: "05",
      name: "With striped rows",
      component: <WithStripedRows />,
      fileName: "with_striped_rows.jsx",
    },
    {
      id: "06",
      name: "With uppercase headings",
      component: <WithUppercaseHeadings />,
      fileName: "with_uppercase_headings.jsx",
    },
    {
      id: "07",
      name: "With stacked columns on mobile",
      component: <WithStackedColumnsMobile />,
      fileName: "with_stacked_columns_on_mobile.jsx",
    },
    {
      id: "08",
      name: "With hidden columns on mobile",
      component: <WithHiddenColumnsMobile />,
      fileName: "with_hidden_columns_on_mobile.jsx",
    },
    {
      id: "09",
      name: "With avatars and multi-line content",
      component: <WithAvatarsMultiLine />,
      fileName: "with_avatars_and_multi_line_content.jsx",
    },
    {
      id: "10",
      name: "With sticky header",
      component: <WithStickyHeader />,
      fileName: "with_sticky_header.jsx",
    },
    {
      id: "11",
      name: "With vertical lines",
      component: <WithVerticalLines />,
      fileName: "with_vertical_lines.jsx",
    },
    {
      id: "12",
      name: "With condensed content",
      component: <WithCondensedContent />,
      fileName: "with_condensed_content.jsx",
    },
    {
      id: "13",
      name: "With sortable headings",
      component: <WithSortableHeadings />,
      fileName: "with_sortable_headings.jsx",
    },
    {
      id: "14",
      name: "With grouped rows",
      component: <WithGroupedRows />,
      fileName: "with_grouped_rows.jsx",
    },
    {
      id: "15",
      name: "With summary rows",
      component: <WithSummaryRows />,
      fileName: "with_summary_rows.jsx",
    },
    {
      id: "16",
      name: "With border",
      component: <WithBorder />,
      fileName: "with_border.jsx",
    },
    {
      id: "17",
      name: "With checkboxes",
      component: <WithCheckboxes />,
      fileName: "with_checkboxes.jsx",
    },
    {
      id: "18",
      name: "With hidden headings",
      component: <WithHiddenHeadings />,
      fileName: "with_hidden_headings.jsx",
    },
    {
      id: "19",
      name: "Full width with avatars",
      component: <FullWidthWithAvatars />,
      fileName: "full_width_with_avatars_on_dark.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file tables (Application UI > Lists)
  const baseDir = "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/lists/tables";

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
