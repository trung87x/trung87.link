import { Button } from "@/components/catalyst/button";
import { Divider } from "@/components/catalyst/divider";
import { Heading, Subheading } from "@/components/catalyst/heading";
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/catalyst/navbar";
import {
  Sidebar,
  SidebarDivider,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
  SidebarSpacer,
} from "@/components/catalyst/sidebar";
import { Code, Text } from "@/components/catalyst/text";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Layouts - Catalyst Learn",
};

export default function LayoutsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <div>
        <Heading>Module 03: Layouts</Heading>
        <Subheading>Structuring your application shell.</Subheading>
        <Text className="mt-4">
          Catalyst provides three main layout shells: <Code>SidebarLayout</Code>
          , <Code>StackedLayout</Code>, and a mobile-optimized{" "}
          <Code>Sidebar</Code>. These components control the top-level structure
          of your app.
        </Text>
      </div>

      <section className="space-y-6">
        <Heading level={2}>1. Navbar (For StackedLayout)</Heading>
        <Text>
          The <Code>Navbar</Code> is used in top-navigation designs. It supports
          sections, spacers, and dividers.
        </Text>

        {/* Navbar Simulation */}
        <div className="rounded-xl border border-zinc-950/10 bg-zinc-100/50 p-8 dark:border-white/10 dark:bg-zinc-900/50">
          <div className="rounded-xl bg-white shadow-xl ring-1 ring-zinc-950/10 dark:bg-zinc-950 dark:ring-white/10">
            <Navbar>
              <NavbarItem href="#" current>
                Home
              </NavbarItem>
              <NavbarItem href="#">Features</NavbarItem>
              <NavbarItem href="#">Pricing</NavbarItem>
              <NavbarSpacer />
              <NavbarSection>
                <NavbarItem href="#">
                  <MagnifyingGlassIcon />
                </NavbarItem>
                <NavbarDivider />
                <NavbarItem href="#">Login</NavbarItem>
              </NavbarSection>
            </Navbar>
          </div>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <Heading level={2}>2. Sidebar (For SidebarLayout)</Heading>
        <Text>
          The <Code>Sidebar</Code> provides a vertical navigation column, ideal
          for complex applications. It typically includes a Header, Body
          (scrollable), and Footer.
        </Text>

        {/* Sidebar Simulation */}
        <div className="h-[450px] overflow-hidden rounded-xl border border-zinc-950/10 bg-zinc-100/50 p-8 dark:border-white/10 dark:bg-zinc-900/50">
          <div className="h-full w-64 overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-zinc-950/10 dark:bg-zinc-950 dark:ring-white/10">
            <Sidebar>
              <SidebarHeader>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-lg bg-blue-500" />
                  <span className="font-semibold">Acme Corp</span>
                </div>
              </SidebarHeader>
              <SidebarSection className="p-2">
                <SidebarItem href="#" current>
                  <HomeIcon />
                  <SidebarLabel>Home</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#">
                  <Square2StackIcon />
                  <SidebarLabel>Projects</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#">
                  <TicketIcon />
                  <SidebarLabel>Support</SidebarLabel>
                </SidebarItem>
              </SidebarSection>
              <SidebarSpacer />
              <SidebarSection className="p-2">
                <SidebarItem href="#">
                  <SparklesIcon />
                  <SidebarLabel>Upgrade</SidebarLabel>
                </SidebarItem>
              </SidebarSection>
              <SidebarDivider />
              <SidebarSection className="p-2">
                <SidebarItem href="#">
                  <UserCircleIcon />
                  <SidebarLabel>Account</SidebarLabel>
                </SidebarItem>
              </SidebarSection>
            </Sidebar>
          </div>
        </div>
      </section>

      <div className="rounded-md bg-blue-50 p-4 dark:bg-blue-500/10">
        <Text className="text-blue-700 dark:text-blue-300">
          <strong>Note:</strong> To implement a full page layout, wrap your page
          content with <Code>SidebarLayout</Code> or <Code>StackedLayout</Code>{" "}
          at the root level (e.g., in <Code>layout.jsx</Code>).
        </Text>
      </div>

      <div className="flex justify-between pt-6">
        <Button href="/tailwindcss/learn/kit/02-forms" plain>
          &larr; Prev: Forms
        </Button>
        <Button href="/tailwindcss/learn/kit/04-overlays" color="blue">
          Next: Overlays &rarr;
        </Button>
      </div>
    </div>
  );
}

function SidebarLabel({ children }) {
  return <span className="truncate">{children}</span>;
}
