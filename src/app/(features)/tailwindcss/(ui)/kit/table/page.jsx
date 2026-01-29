import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. Responsive tables
import ResponsiveTable from "./responsive-table";

// 03. Full-width tables
import FullWidthTable from "./full-width";

// 04. Rows as links
import RowsAsLinks from "./rows-as-links";

// 05. With condensed spacing
import CondensedTable from "./condensed-spacing";

// 06. With grid lines
import GridLinesTable from "./grid-lines";

// 07. With striped rows
import StripedRowsTable from "./striped-rows";

// 08. With different heading color
import HeadingColorTable from "./heading-color";

// 09. With complex content
import ComplexContentTable from "./complex-content";

// 10. With pagination
import TableWithPagination from "./with-pagination";

// 11. With dropdowns
import TableWithDropdowns from "./with-dropdowns";

// 12. In dialog
import TableInDialog from "./in-dialog";

const mockUsers = [
  {
    handle: "trung-dinh",
    name: "Đinh Quang Trung",
    email: "trung.dinh@example.com",
    access: "Admin",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    online: true,
  },
  {
    handle: "erica-h",
    name: "Erica Hancock",
    email: "erica.h@example.com",
    access: "Editor",
    avatarUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    online: false,
  },
  {
    handle: "giao-g",
    name: "Giao Giao",
    email: "giao.g@example.com",
    access: "Viewer",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    online: true,
  },
];

const mockPlayers = [
  {
    rank: 1,
    name: "Leon Draisaitl",
    position: "C",
    gamesPlayed: 71,
    goals: 31,
    assists: 68,
    points: 99,
    plusMinus: -9,
  },
  {
    rank: 2,
    name: "Connor McDavid",
    position: "C",
    gamesPlayed: 64,
    goals: 31,
    assists: 65,
    points: 96,
    plusMinus: -7,
  },
  {
    rank: 3,
    name: "David Pastrnak",
    position: "RW",
    gamesPlayed: 70,
    goals: 48,
    assists: 47,
    points: 95,
    plusMinus: 21,
  },
  {
    rank: 4,
    name: "Artemi Panarin",
    position: "LW",
    gamesPlayed: 69,
    goals: 32,
    assists: 63,
    points: 95,
    plusMinus: 36,
  },
];

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic Table",
      component: <Basic users={mockUsers} />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/table/basic.jsx"),
    },
    {
      id: "02",
      name: "Responsive Tables",
      component: <ResponsiveTable users={mockUsers} />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/table/responsive-table.jsx",
      ),
    },
    {
      id: "03",
      name: "Full-width Tables",
      component: <FullWidthTable users={mockUsers} />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/table/full-width.jsx"),
    },
    {
      id: "04",
      name: "Rows as Links",
      component: <RowsAsLinks users={mockUsers} />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/table/rows-as-links.jsx"),
    },
    {
      id: "05",
      name: "With Condensed Spacing",
      component: <CondensedTable players={mockPlayers} />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/table/condensed-spacing.jsx",
      ),
    },
    {
      id: "06",
      name: "With Grid Lines",
      component: <GridLinesTable users={mockUsers} />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/table/grid-lines.jsx"),
    },
    {
      id: "07",
      name: "With Striped Rows",
      component: <StripedRowsTable users={mockUsers} />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/table/striped-rows.jsx"),
    },
    {
      id: "08",
      name: "With Different Heading Color",
      component: <HeadingColorTable users={mockUsers} />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/table/heading-color.jsx"),
    },
    {
      id: "09",
      name: "With Complex Content",
      component: <ComplexContentTable users={mockUsers} />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/table/complex-content.jsx",
      ),
    },
    {
      id: "10",
      name: "With Pagination",
      component: <TableWithPagination users={mockUsers} />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/table/with-pagination.jsx",
      ),
    },
    {
      id: "11",
      name: "With Dropdowns",
      component: <TableWithDropdowns users={mockUsers} />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/table/with-dropdowns.jsx",
      ),
    },
    {
      id: "12",
      name: "In Dialog",
      component: <TableInDialog users={mockUsers} />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/table/in-dialog.jsx"),
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
            <div className="overflow-hidden rounded-lg bg-white">
              {layout.component}
            </div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
