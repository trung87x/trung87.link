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

export const metadata = {
  title: "Quản lý người dùng | Admin",
};

export default async function UsersAdminPage() {
  const supabase = await createClient();
  const { data: users } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <Heading>Quản lý người dùng</Heading>
      <Divider className="my-6" />

      <Table className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        <TableHead>
          <TableRow>
            <TableHeader>Tên</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Vai trò</TableHeader>
            <TableHeader>Ngày tham gia</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                {user.full_name || "Chưa cập nhật"}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {user.role === "admin" ? (
                  <Badge color="purple">Admin</Badge>
                ) : (
                  <Badge color="zinc">User</Badge>
                )}
              </TableCell>
              <TableCell className="text-gray-500">
                {new Date(user.created_at).toLocaleDateString("vi-VN")}
              </TableCell>
            </TableRow>
          ))}
          {(!users || users.length === 0) && (
            <TableRow>
              <TableCell
                colSpan={4}
                className="py-12 text-center text-gray-500 italic"
              >
                Chưa có người dùng nào.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
