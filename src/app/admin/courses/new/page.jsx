import { Heading } from "@/components/catalyst/heading";
import { Divider } from "@/components/catalyst/divider";
import { Field, Label, Fieldset, Legend } from "@/components/catalyst/fieldset";
import { Input } from "@/components/catalyst/input";
import { Textarea } from "@/components/catalyst/textarea";
import { Button } from "@/components/catalyst/button";
import { createCourse } from "../actions";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export const metadata = {
  title: "Thêm khóa học mới | Admin",
};

export default function NewCoursePage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-6 flex items-center gap-4">
        <Link
          href="/admin/courses"
          className="text-gray-500 hover:text-gray-900"
        >
          <ArrowLeftIcon className="size-5" />
        </Link>
        <Heading>Thêm khóa học mới</Heading>
      </div>
      <Divider className="mb-8" />

      <form action={createCourse}>
        <Fieldset>
          <Legend>Thông tin cơ bản</Legend>
          <div className="mt-6 grid grid-cols-1 gap-y-6">
            <Field>
              <Label>Tên khóa học</Label>
              <Input
                name="title"
                placeholder="Ví dụ: React.school Basic"
                required
              />
            </Field>

            <Field>
              <Label>Slug</Label>
              <Input
                name="slug"
                placeholder="Ví dụ: react-school-basic"
                required
              />
            </Field>

            <Field>
              <Label>Mô tả</Label>
              <Textarea
                name="description"
                placeholder="Nhập mô tả khóa học..."
                rows={4}
              />
            </Field>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field>
                <Label>Giá bán (VND)</Label>
                <Input
                  name="price"
                  type="number"
                  defaultValue={500000}
                  required
                />
              </Field>

              <Field>
                <Label>Giá khuyến mãi (VND)</Label>
                <Input
                  name="price_sale"
                  type="number"
                  placeholder="Bỏ trống nếu không có"
                />
              </Field>
            </div>
          </div>
        </Fieldset>

        <div className="mt-10 flex items-center justify-end gap-x-6">
          <Link
            href="/admin/courses"
            className="text-sm leading-6 font-semibold text-gray-900"
          >
            Hủy
          </Link>
          <Button type="submit" color="green">
            Lưu khóa học
          </Button>
        </div>
      </form>
    </div>
  );
}
