import { Navbar } from "@/components/catalyst/navbar";
import { Sidebar } from "@/components/catalyst/sidebar";
import { StackedLayout } from "@/components/catalyst/stacked-layout";

export default function Example({ children }) {
  return (
    <StackedLayout
      navbar={<Navbar>{/* Your navbar content */}</Navbar>}
      sidebar={<Sidebar>{/* Your sidebar content */}</Sidebar>}
    >
      {/* Your page content */}
      {children}
    </StackedLayout>
  );
}
