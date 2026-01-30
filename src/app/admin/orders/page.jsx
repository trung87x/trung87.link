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
  title: "Quản lý đơn hàng | Admin",
};

export default async function OrdersAdminPage() {
  const supabase = await createClient();
  const { data: orders } = await supabase
    .from("enrollments")
    .select("*")
    .order("updated_at", { ascending: false });

  const getStatusBadge = (status) => {
    switch (status) {
      case "paid":
        return <Badge color="green">Đã thanh toán</Badge>;
      case "pending":
        return <Badge color="amber">Chờ thanh toán</Badge>;
      case "cancelled":
        return <Badge color="red">Đã hủy</Badge>;
      default:
        return <Badge color="zinc">{status}</Badge>;
    }
  };

  return (
    <>
      <Heading>Quản lý đơn hàng</Heading>
      <Divider className="my-6" />

      <Table className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        <TableHead>
          <TableRow>
            <TableHeader>Khách hàng</TableHeader>
            <TableHeader>Khóa học</TableHeader>
            <TableHeader>Số tiền</TableHeader>
            <TableHeader>Trạng thái</TableHeader>
            <TableHeader>Ngày cập nhật</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order, idx) => (
            <TableRow key={order.payment_id || idx}>
              <TableCell className="font-medium">{order.user_email}</TableCell>
              <TableCell>{order.course_id}</TableCell>
              <TableCell>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(order.amount)}
              </TableCell>
              <TableCell>{getStatusBadge(order.status)}</TableCell>
              <TableCell className="text-gray-500">
                {new Date(order.updated_at || order.created_at).toLocaleString(
                  "vi-VN",
                )}
              </TableCell>
            </TableRow>
          ))}
          {(!orders || orders.length === 0) && (
            <TableRow>
              <TableCell
                colSpan={5}
                className="py-12 text-center text-gray-500 italic"
              >
                Chưa có đơn hàng nào.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
