import { Heading } from "@/components/catalyst/heading";
import { Divider } from "@/components/catalyst/divider";
import { Field, Label, Fieldset, Legend } from "@/components/catalyst/fieldset";
import { Input } from "@/components/catalyst/input";
import { Textarea } from "@/components/catalyst/textarea";
import { Button } from "@/components/catalyst/button";
import { Checkbox } from "@/components/catalyst/checkbox";
import { updateCourse } from "../actions";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Sửa khóa học | Admin",
};

export default async function EditCoursePage({ params }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: course } = await supabase
    .from("courses")
    .select("*")
    .eq("id", id)
    .single();

  if (!course) {
    notFound();
  }

  const updateAction = updateCourse.bind(null, id);

  return (
    <div className="max-w-2xl">
      <div className="mb-6 flex items-center gap-4">
        <Link
          href="/admin/courses"
          className="text-gray-500 hover:text-gray-900"
        >
          <ArrowLeftIcon className="size-5" />
        </Link>
        <Heading>Edit: {course.title}</Heading>
      </div>
      <Divider className="mb-8" />

      <form action={updateAction}>
        <Fieldset>
          <Legend>Thông tin chi tiết</Legend>
          <div className="mt-6 grid grid-cols-1 gap-y-6">
            <Field>
              <Label>Tên khóa học</Label>
              <Input name="title" defaultValue={course.title} required />
            </Field>

            <Field>
              <Label>Slug</Label>
              <Input name="slug" defaultValue={course.slug} required />
            </Field>

            <Field>
              <Label>Mô tả</Label>
              <Textarea
                name="description"
                defaultValue={course.description}
                rows={4}
              />
            </Field>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field>
                <Label>Giá bán (VND)</Label>
                <Input
                  name="price"
                  type="number"
                  defaultValue={course.price}
                  required
                />
              </Field>

              <Field>
                <Label>Giá khuyến mãi (VND)</Label>
                <Input
                  name="price_sale"
                  type="number"
                  defaultValue={course.price_sale || ""}
                  placeholder="Bỏ trống nếu không có"
                />
              </Field>
            </div>

            <Field className="flex items-center gap-2">
              <Checkbox name="is_active" defaultChecked={course.is_active} />
              <Label>Đang mở bán (Active)</Label>
            </Field>
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
            Cập nhật
          </Button>
        </div>
      </form>
    </div>
  );
}
