import { Link } from "@/components/catalyst/link";
import { Navbar, NavbarItem, NavbarSection } from "@/components/catalyst/navbar";
import { Logo } from "./logo";

export default function Example() {
  return (
    <Navbar>
      <Link href="/" aria-label="Home">
        <Logo className="size-10 sm:size-8" />
      </Link>
      <NavbarSection>
        <NavbarItem href="/" current>
          Home
        </NavbarItem>
        <NavbarItem href="/events">Events</NavbarItem>
        <NavbarItem href="/orders">Orders</NavbarItem>
      </NavbarSection>
    </Navbar>
  );
}
