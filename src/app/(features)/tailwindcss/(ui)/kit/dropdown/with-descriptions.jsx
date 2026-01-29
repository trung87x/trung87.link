import {
  Dropdown,
  DropdownButton,
  DropdownDescription,
  DropdownItem,
  DropdownLabel,
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
        <DropdownItem href={url} target="_blank">
          <DropdownLabel>Open</DropdownLabel>
          <DropdownDescription>Open the file in a new tab.</DropdownDescription>
        </DropdownItem>
        <DropdownItem onClick={() => renameFile()}>
          <DropdownLabel>Rename</DropdownLabel>
          <DropdownDescription>Rename the file.</DropdownDescription>
        </DropdownItem>
        <DropdownItem onClick={() => deleteFile()}>
          <DropdownLabel>Delete</DropdownLabel>
          <DropdownDescription>Move the file to the trash.</DropdownDescription>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
