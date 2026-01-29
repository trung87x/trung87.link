import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import FullWidthMobileConstrained from "./full_width_on_mobile__constrained_with_padded_content_above";
import ConstrainedWithPaddedContent from "./constrained_with_padded_content";
import FullWidthMobileConstrainedToBreakpoint from "./full_width_on_mobile__constrained_to_breakpoint_with_padded_content_above_mobile";
import ConstrainedToBreakpointWithPaddedContent from "./constrained_to_breakpoint_with_padded_content";
import NarrowConstrainedWithPaddedContent from "./narrow_constrained_with_padded_content";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Full-width on mobile, constrained with padded content above",
      component: <FullWidthMobileConstrained />,
      fileName:
        "full_width_on_mobile__constrained_with_padded_content_above.jsx",
    },
    {
      id: "02",
      name: "Constrained with padded content",
      component: <ConstrainedWithPaddedContent />,
      fileName: "constrained_with_padded_content.jsx",
    },
    {
      id: "03",
      name: "Full-width on mobile, constrained to breakpoint with padded content above mobile",
      component: <FullWidthMobileConstrainedToBreakpoint />,
      fileName:
        "full_width_on_mobile__constrained_to_breakpoint_with_padded_content_above_mobile.jsx",
    },
    {
      id: "04",
      name: "Constrained to breakpoint with padded content",
      component: <ConstrainedToBreakpointWithPaddedContent />,
      fileName: "constrained_to_breakpoint_with_padded_content.jsx",
    },
    {
      id: "05",
      name: "Narrow constrained with padded content",
      component: <NarrowConstrainedWithPaddedContent />,
      fileName: "narrow_constrained_with_padded_content.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file containers (Application UI > Layout)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/layout/containers";

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
