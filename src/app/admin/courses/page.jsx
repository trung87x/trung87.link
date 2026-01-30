import { Heading } from "@/components/catalyst/heading";
import { Divider } from "@/components/catalyst/divider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/catalyst/table";
import { Badge } from "@/components/catalyst/badge";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export const metadata = {
  title: "Quản lý khóa học | Admin",
};

export default async function CoursesAdminPage() {
  const supabase = await createClient();
  const { data: courses } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading>Quản lý khóa học</Heading>
        <Link
          href="/admin/courses/new"
          className="rounded-lg bg-[#5FB446] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#4a8f37]"
        >
          Thêm khóa học mới
        </Link>
      </div>
      <Divider className="my-6" />

      <Table className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        <TableHead>
          <TableRow>
            <TableHeader>Khóa học</TableHeader>
            <TableHeader>Slug</TableHeader>
            <TableHeader>Giá bán</TableHeader>
            <TableHeader>Trạng thái</TableHeader>
            <TableHeader className="text-right">Thao tác</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses?.map((course) => (
            <TableRow key={course.id}>
              <TableCell className="font-semibold">{course.title}</TableCell>
              <TableCell className="text-gray-500">{course.slug}</TableCell>
              <TableCell>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(course.price)}
              </TableCell>
              <TableCell>
                {course.is_active ? (
                  <Badge color="green">Đang bán</Badge>
                ) : (
                  <Badge color="zinc">Nháp</Badge>
                )}
              </TableCell>
              <TableCell className="text-right">
                <Link
                  href={`/admin/courses/${course.id}`}
                  className="font-medium text-[#5FB446] hover:underline"
                >
                  Sửa
                </Link>
              </TableCell>
            </TableRow>
          ))}
          {(!courses || courses.length === 0) && (
            <TableRow>
              <TableCell
                colSpan={5}
                className="py-12 text-center text-gray-500 italic"
              >
                Chưa có khóa học nào.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
