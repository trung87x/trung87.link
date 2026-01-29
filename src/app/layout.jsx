import "@/styles/globals.css";

import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/catalyst/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from "@/components/catalyst/sidebar";
import { StackedLayout } from "@/components/catalyst/stacked-layout";
import Link from "next/link";
import AuthButton from "@/components/auth/AuthButton";

export const metadata = {
  title: "Trang web của tôi",
  description: "Mô tả dự án",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <StackedLayout
          navbar={
            /* 1. Phải truyền className cho cả Navbar (như hình 1 của bạn đang thiếu) */
            <Navbar>
              <NavbarSection className="z-50">
                {/* 2. Dùng href trực tiếp, NavbarItem của Catalyst sẽ tự xử lý Link */}
                <NavbarItem href="/" className="" current={false}>
                  Trang chủ
                </NavbarItem>
                <NavbarItem href="/page-examples" className="" current={false}>
                  Page examples
                </NavbarItem>
                <NavbarItem href="/tailwindcss" className="" current={false}>
                  Tailwind CSS
                </NavbarItem>
                <NavbarItem
                  href="/tailwindcss/learn/blocks"
                  className=""
                  current={false}
                >
                  Blocks
                </NavbarItem>
                <NavbarItem
                  href="/tailwindcss/learn/kit"
                  className=""
                  current={false}
                >
                  Kit
                </NavbarItem>
                <NavbarItem href="/bricksbuilder" className="" current={false}>
                  Bricks builder
                </NavbarItem>
                <NavbarItem
                  href="/lunar-new-year/2026"
                  className=""
                  current={false}
                >
                  Lunar New Year 2026
                </NavbarItem>
                <NavbarItem
                  href="/convert/audio-to-hls"
                  className=""
                  current={false}
                >
                  Convert audio to HLS
                </NavbarItem>
                <NavbarItem href="/cloudflare/r2" className="" current={false}>
                  Cloudflare R2
                </NavbarItem>
                <NavbarItem href="/blog" className="" current={false}>
                  Blog
                </NavbarItem>
                <NavbarItem href="/heroicons" className="" current={false}>
                  Heroicons
                </NavbarItem>
              </NavbarSection>
              <NavbarSpacer className="" />
              <NavbarSection className="flex items-center gap-4">
                <AuthButton />
                <NavbarItem href="/contact" className="" current={false}>
                  Liên hệ
                </NavbarItem>
              </NavbarSection>
            </Navbar>
          }
          sidebar={
            <Sidebar className="">
              <SidebarHeader className="">
                <span className="font-display text-avocado-500 font-bold">
                  Menu
                </span>
              </SidebarHeader>
              <SidebarBody className="">
                <SidebarSection className="">
                  <SidebarItem href="/" className="" current={false}>
                    Trang chủ
                  </SidebarItem>
                  <SidebarItem href="/projects" className="" current={false}>
                    Dự án
                  </SidebarItem>
                  <SidebarItem href="/about" className="" current={false}>
                    Giới thiệu
                  </SidebarItem>
                  <SidebarItem href="/contact" className="" current={false}>
                    Liên hệ
                  </SidebarItem>
                </SidebarSection>
              </SidebarBody>
            </Sidebar>
          }
        >
          {children}
        </StackedLayout>
      </body>
    </html>
  );
}
