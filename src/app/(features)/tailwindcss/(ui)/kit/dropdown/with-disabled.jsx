import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/components/catalyst/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example({ url, renameFile, deleteFile }) {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href={url}>Open</DropdownItem>
        <DropdownItem onClick={() => renameFile()} disabled>
          Rename
        </DropdownItem>
        <DropdownItem onClick={() => deleteFile()}>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
