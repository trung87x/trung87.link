import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. With label
import WithLabel from "./with-label";

// 03. With description
import WithDescription from "./with-description";

// 04. With icon
import WithIcon from "./with-icon";

// 05. Setting the type
import SettingType from "./setting-type";

// 06. Disabled state
import DisabledState from "./disabled";

// 07. Validation errors
import ValidationErrors from "./validation-errors";

// 08. Constraining width
import ConstrainingWidth from "./constraining-width";

// 09. With custom layout
import CustomLayout from "./custom-layout";

// 10. Controlled component
import ControlledComponent from "./controlled";

const mockErrors = new Map([
  ["full_name", "Họ và tên là bắt buộc và không được để trống."],
  ["email", "Địa chỉ email không hợp lệ."],
]);

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/input/basic.jsx"),
    },
    {
      id: "02",
      name: "With Label",
      component: <WithLabel />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/input/with-label.jsx"),
    },
    {
      id: "03",
      name: "With Description",
      component: <WithDescription />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/input/with-description.jsx",
      ),
    },
    {
      id: "04",
      name: "With Icon",
      component: <WithIcon />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/input/with-icon.jsx"),
    },
    {
      id: "05",
      name: "Setting the Type",
      component: <SettingType />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/input/setting-type.jsx"),
    },
    {
      id: "06",
      name: "Disabled State",
      component: <DisabledState />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/input/disabled.jsx"),
    },
    {
      id: "07",
      name: "Validation Errors",
      component: <ValidationErrors errors={mockErrors} />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/input/validation-errors.jsx",
      ),
    },
    {
      id: "08",
      name: "Constraining Width",
      component: <ConstrainingWidth />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/input/constraining-width.jsx",
      ),
    },
    {
      id: "09",
      name: "With Custom Layout",
      component: <CustomLayout />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/input/custom-layout.jsx"),
    },
    {
      id: "10",
      name: "Controlled Component",
      component: <ControlledComponent />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/input/controlled.jsx"),
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
            <div className="mx-auto max-w-xl py-4">{layout.component}</div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
