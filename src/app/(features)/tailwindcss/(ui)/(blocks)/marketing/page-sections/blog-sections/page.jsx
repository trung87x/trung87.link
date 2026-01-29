import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// Import components
import ThreeColumn from "./three_column";
import ThreeColumnWithImages from "./three_column_with_images";
import ThreeColumnWithBackgroundImages from "./three_column_with_background_images";
import SingleColumn from "./single_column";
import SingleColumnWithImages from "./single_column_with_images";
import WithFeaturedPost from "./with_featured_post";
import WithPhotoAndList from "./with_photo_and_list";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Three-column",
      component: <ThreeColumn />,
      fileName: "three_column.jsx",
    },
    {
      id: "02",
      name: "Three-column with images",
      component: <ThreeColumnWithImages />,
      fileName: "three_column_with_images.jsx",
    },
    {
      id: "03",
      name: "Three-column with background images",
      component: <ThreeColumnWithBackgroundImages />,
      fileName: "three_column_with_background_images.jsx",
    },
    {
      id: "04",
      name: "Single-column",
      component: <SingleColumn />,
      fileName: "single_column.jsx",
    },
    {
      id: "05",
      name: "Single-column with images",
      component: <SingleColumnWithImages />,
      fileName: "single_column_with_images.jsx",
    },
    {
      id: "06",
      name: "With featured post",
      component: <WithFeaturedPost />,
      fileName: "with_featured_post.jsx",
    },
    {
      id: "07",
      name: "With photo and list",
      component: <WithPhotoAndList />,
      fileName: "with_photo_and_list.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file blog-sections
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/marketing/page-sections/blog-sections";

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
            // Logic lấy code raw tập trung tại đây
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
