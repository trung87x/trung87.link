import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. With label
import WithLabel from "./with-label";

// 03. With description
import WithDescription from "./with-description";

// 04. With placeholder
import WithPlaceholder from "./with-placeholder";

// 05. With avatars
import WithAvatars from "./with-avatars";

// 06. With icons
import WithIcons from "./with-icons";

// 07. With flags
import WithFlags from "./with-flags";

// 08. Secondary text
import SecondaryText from "./secondary-text";

// 09. Disabled state
import DisabledState from "./disabled";

// 10. Validation errors
import ValidationErrors from "./validation-errors";

// 11. Constraining width
import ConstrainingWidth from "./constraining-width";

// 12. With custom layout
import CustomLayout from "./custom-layout";

// 13. Controlled component
import Controlled from "./controlled";

const mockUsers = [
  {
    id: 1,
    name: "Đinh Trung",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: "DT",
  },
  {
    id: 2,
    name: "Erica Hancock",
    avatarUrl: null,
    initials: "EH",
  },
  {
    id: 3,
    name: "Giao Giao",
    avatarUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: "GG",
  },
];

const mockCountries = [
  { code: "VN", name: "Vietnam" },
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
];

const defaultCountry = "VN";

const mockErrors = new Map([
  ["status", "Vui lòng chọn trạng thái dự án để tiếp tục."],
]);

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/listbox/basic.jsx"),
    },
    {
      id: "02",
      name: "With Label",
      component: <WithLabel />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/listbox/with-label.jsx"),
    },
    {
      id: "03",
      name: "With Description",
      component: <WithDescription />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/listbox/with-description.jsx",
      ),
    },
    {
      id: "04",
      name: "With Placeholder",
      component: <WithPlaceholder />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/listbox/with-placeholder.jsx",
      ),
    },
    {
      id: "05",
      name: "With Avatars",
      component: <WithAvatars users={mockUsers} />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/listbox/with-avatars.jsx",
      ),
    },
    {
      id: "06",
      name: "With Icons",
      component: <WithIcons />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/listbox/with-icons.jsx"),
    },
    {
      id: "07",
      name: "With Flags",
      component: (
        <WithFlags currentCountry={defaultCountry} countries={mockCountries} />
      ),
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/listbox/with-flags.jsx"),
    },
    {
      id: "08",
      name: "With Secondary Text",
      component: <SecondaryText users={mockUsers} />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/listbox/secondary-text.jsx",
      ),
    },
    {
      id: "09",
      name: "Disabled State",
      component: <DisabledState />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/listbox/disabled.jsx"),
    },
    {
      id: "10",
      name: "Validation Errors",
      component: <ValidationErrors errors={mockErrors} />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/listbox/validation-errors.jsx",
      ),
    },
    {
      id: "11",
      name: "Constraining Width",
      component: <ConstrainingWidth />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/listbox/constraining-width.jsx",
      ),
    },
    {
      id: "12",
      name: "With Custom Layout",
      component: <CustomLayout />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/listbox/custom-layout.jsx",
      ),
    },
    {
      id: "13",
      name: "Controlled Component",
      component: <Controlled />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/listbox/controlled.jsx"),
    },
  ];

  return (
    <div className="space-y-10 pb-20">
      {layouts.map((layout) => (
        <section
          key={layout.id}
          className="border-b border-gray-100 pb-10 last:border-0"
        >
          <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-800">
              {layout.id}. {layout.name}
            </h2>
          </div>
          <PreviewWrapper name={layout.name} code={layout.raw}>
            <div className="flex min-h-[300px] justify-center pt-10">
              <div className="w-full max-w-xs">{layout.component}</div>
            </div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
