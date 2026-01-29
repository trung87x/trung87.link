import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownHeading,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
} from "@/components/catalyst/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownSection aria-label="Account">
          <DropdownItem href="/account">Account</DropdownItem>
          <DropdownItem href="/notifications">Notifications</DropdownItem>
          <DropdownItem href="/billing">Billing</DropdownItem>
        </DropdownSection>
        <DropdownDivider />
        <DropdownSection>
          <DropdownHeading>My events</DropdownHeading>
          <DropdownItem href="/upcoming-events">Upcoming events</DropdownItem>
          <DropdownItem href="/past-events">Past events</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
