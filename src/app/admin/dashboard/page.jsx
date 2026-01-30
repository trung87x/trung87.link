import { Heading } from "@/components/catalyst/heading";
import { Divider } from "@/components/catalyst/divider";
import { createClient } from "@/utils/supabase/server";

export const metadata = {
  title: "Dashboard | Admin",
};

export default async function DashboardPage() {
  const supabase = await createClient();

  // Fetch some basic stats
  const { count: userCount } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true });
  const { count: courseCount } = await supabase
    .from("courses")
    .select("*", { count: "exact", head: true });
  const { data: recentSales } = await supabase
    .from("enrollments")
    .select("amount")
    .eq("status", "paid");

  const totalRevenue =
    recentSales?.reduce((acc, curr) => acc + curr.amount, 0) || 0;

  const stats = [
    { name: "Tổng người dùng", value: userCount || 0 },
    { name: "Khóa học", value: courseCount || 0 },
    {
      name: "Tổng doanh thu",
      value: new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(totalRevenue),
    },
  ];

  return (
    <>
      <Heading>Dashboard Admin</Heading>
      <Divider className="my-6" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {stat.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Heading level={2}>Hoạt động gần đây</Heading>
        <p className="mt-2 text-gray-500">
          Dữ liệu thực tế sẽ được hiển thị ở đây sau khi bạn tích hợp đầy đủ
          Webhook.
        </p>
      </div>
    </>
  );
}
