import { Field, Label } from "@/components/catalyst/fieldset";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/catalyst/listbox";
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3Icon,
} from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <Field>
      <Label>Alignment</Label>
      <Listbox name="alignment" defaultValue="left">
        <ListboxOption value="left">
          <Bars3BottomLeftIcon />
          <ListboxLabel>Left</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="right">
          <Bars3BottomRightIcon />
          <ListboxLabel>Right</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="justified">
          <Bars3Icon />
          <ListboxLabel>Justified</ListboxLabel>
        </ListboxOption>
      </Listbox>
    </Field>
  );
}
