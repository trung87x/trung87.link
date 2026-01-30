import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
  SidebarSpacer,
} from "@/components/catalyst/sidebar";
import { SidebarLayout } from "@/components/catalyst/sidebar-layout";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/catalyst/navbar";
import {
  HomeIcon,
  BookOpenIcon,
  UsersIcon,
  ReceiptRefundIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export default function AdminLayout({ children }) {
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem href="/">
              <ArrowLeftIcon className="size-5" />
              <span>Quay lại Site</span>
            </NavbarItem>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-[#5FB446] font-bold text-white">
                A
              </div>
              <span className="font-bold text-gray-900">Admin Panel</span>
            </div>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/admin/dashboard">
                <HomeIcon className="size-5" />
                <span>Dashboard</span>
              </SidebarItem>
              <SidebarItem href="/admin/courses">
                <BookOpenIcon className="size-5" />
                <span>Khóa học</span>
              </SidebarItem>
              <SidebarItem href="/admin/users">
                <UsersIcon className="size-5" />
                <span>Người dùng</span>
              </SidebarItem>
              <SidebarItem href="/admin/orders">
                <ReceiptRefundIcon className="size-5" />
                <span>Đơn hàng</span>
              </SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
          </SidebarBody>
        </Sidebar>
      }
    >
      <div className="p-4 sm:p-6 lg:p-8">{children}</div>
    </SidebarLayout>
  );
}
