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

// 06. With custom layout
import CustomLayout from "./custom-layout";

// 07. Controlled component
import Controlled from "./controlled";

const mockErrors = new Map([
  [
    "description",
    "Vui lòng nhập mô tả chi tiết sản phẩm (tối thiểu 20 ký tự).",
  ],
]);

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/textarea/basic.jsx"),
    },
    {
      id: "02",
      name: "With Label",
      component: <WithLabel />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/textarea/with-label.jsx"),
    },
    {
      id: "03",
      name: "With Description",
      component: <WithDescription />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/textarea/with-description.jsx",
      ),
    },
    {
      id: "04",
      name: "Disabled State",
      component: <DisabledState />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/textarea/disabled.jsx"),
    },
    {
      id: "05",
      name: "Validation Errors",
      component: <ValidationErrors errors={mockErrors} />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/textarea/validation-errors.jsx",
      ),
    },
    {
      id: "06",
      name: "With Custom Layout",
      component: <CustomLayout />,
      raw: getRaw(
        "src/app/(features)/tailwindcss/(ui)/kit/textarea/custom-layout.jsx",
      ),
    },
    {
      id: "07",
      name: "Controlled Component",
      component: <Controlled />,
      raw: getRaw("src/app/(features)/tailwindcss/(ui)/kit/textarea/controlled.jsx"),
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
            <div className="mx-auto w-full max-w-xl py-6">
              {layout.component}
            </div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
