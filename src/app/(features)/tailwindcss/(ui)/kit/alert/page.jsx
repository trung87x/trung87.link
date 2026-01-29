import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. Alert width
import AlertWidth from "./alert-width";

// 03. With body
import WithBody from "./with-body";

// 04. Auto-focusing elements
import AutoFocus from "./auto-focusing";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      fileName: "basic.jsx",
    },
    {
      id: "02",
      name: "Alert Width",
      component: <AlertWidth />,
      fileName: "alert-width.jsx",
    },
    {
      id: "03",
      name: "With Body",
      component: <WithBody />,
      fileName: "with-body.jsx",
    },
    {
      id: "04",
      name: "Auto-focusing Elements",
      component: <AutoFocus />,
      fileName: "auto-focusing.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file alert
  const baseDir = "src/app/(features)/tailwindcss/(ui)/kit/alert";

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
            // Gọi getRaw trực tiếp tại đây để nối chuỗi đường dẫn hoàn chỉnh
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
