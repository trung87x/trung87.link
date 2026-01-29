import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import SmallWithMeetings from "./small_with_meetings";
import MonthView from "./month_view";
import WeekView from "./week_view";
import DayView from "./day_view";
import YearView from "./year_view";
import Double from "./double";
import BorderlessStacked from "./borderless_stacked";
import BorderlessSideBySide from "./borderless_side_by_side";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Small with meetings",
      component: <SmallWithMeetings />,
      fileName: "small_with_meetings.jsx",
    },
    {
      id: "02",
      name: "Month view",
      component: <MonthView />,
      fileName: "month_view.jsx",
    },
    {
      id: "03",
      name: "Week view",
      component: <WeekView />,
      fileName: "week_view.jsx",
    },
    {
      id: "04",
      name: "Day view",
      component: <DayView />,
      fileName: "day_view.jsx",
    },
    {
      id: "05",
      name: "Year view",
      component: <YearView />,
      fileName: "year_view.jsx",
    },
    { id: "06", name: "Double", component: <Double />, fileName: "double.jsx" },
    {
      id: "07",
      name: "Borderless stacked",
      component: <BorderlessStacked />,
      fileName: "borderless_stacked.jsx",
    },
    {
      id: "08",
      name: "Borderless side-by-side",
      component: <BorderlessSideBySide />,
      fileName: "borderless_side_by_side.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục calendars (Application UI > Data Display)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/data-display/calendars";

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
