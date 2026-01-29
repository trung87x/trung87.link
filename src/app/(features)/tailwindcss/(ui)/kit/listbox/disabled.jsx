import { Field, Label } from "@/components/catalyst/fieldset";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/catalyst/listbox";

export default function Example() {
  return (
    <Field disabled>
      <Label>Project status</Label>
      <Listbox name="status" defaultValue="delayed">
        <ListboxOption value="active">
          <ListboxLabel>Active</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="paused">
          <ListboxLabel>Paused</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="delayed">
          <ListboxLabel>Delayed</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="canceled">
          <ListboxLabel>Canceled</ListboxLabel>
        </ListboxOption>
      </Listbox>
    </Field>
  );
}
