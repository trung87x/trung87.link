import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. With label
import WithLabel from "./with-label";

// 03. With description
import WithDescription from "./with-description";

// 04. Disabled state
import DisabledState from "./disabled";

// 05. Validation errors
import ValidationErrors from "./validation-errors";

// 06. Constraining width
import ConstrainingWidth from "./constraining-width";

// 07. With custom layout
import CustomLayout from "./custom-layout";

// 08. Controlled component
import Controlled from "./controlled";

const mockErrors = {
  has: (field) => field === "status",
  get: (field) => "Trường này là bắt buộc!",
};

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/select/basic.jsx"),
    },
    {
      id: "02",
      name: "With Label",
      component: <WithLabel />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/select/with-label.jsx"),
    },
    {
      id: "03",
      name: "With Description",
      component: <WithDescription />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/select/with-description.jsx",
      ),
    },
    {
      id: "04",
      name: "Disabled State",
      component: <DisabledState />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/select/disabled.jsx"),
    },
    {
      id: "05",
      name: "Validation Errors",
      component: <ValidationErrors errors={mockErrors} />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/select/validation-errors.jsx",
      ),
    },
    {
      id: "06",
      name: "Constraining Width",
      component: <ConstrainingWidth />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/select/constraining-width.jsx",
      ),
    },
    {
      id: "07",
      name: "With Custom Layout",
      component: <CustomLayout />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/select/custom-layout.jsx",
      ),
    },
    {
      id: "08",
      name: "Controlled Component",
      component: <Controlled />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/select/controlled.jsx"),
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
            <div className="flex min-h-[150px] items-center justify-center py-6">
              <div className="w-full max-w-sm">{layout.component}</div>
            </div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
