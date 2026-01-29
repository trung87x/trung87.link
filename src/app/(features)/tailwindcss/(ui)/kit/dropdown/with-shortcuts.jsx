import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  DropdownShortcut,
} from "@/components/catalyst/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example({ url, renameFile, deleteFile }) {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu anchor="bottom start">
        <DropdownItem href={url}>
          <DropdownLabel>Open</DropdownLabel>
          <DropdownShortcut keys="⌘O" />
        </DropdownItem>
        <DropdownItem onClick={() => renameFile()}>
          <DropdownLabel>Rename</DropdownLabel>
          <DropdownShortcut keys="⌘R" />
        </DropdownItem>
        <DropdownItem onClick={() => deleteFile()}>
          <DropdownLabel>Delete</DropdownLabel>
          <DropdownShortcut keys="⇧⌘⌫" />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
