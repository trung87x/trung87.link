import { ErrorMessage, Field, Label } from "@/components/catalyst/fieldset";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/catalyst/listbox";

export default function Example({ errors }) {
  return (
    <Field invalid>
      <Label>Project status</Label>
      <Listbox
        name="status"
        placeholder="Select status&hellip;"
        invalid={errors.has("status")}
      >
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
      {errors.has("status") && (
        <ErrorMessage>{errors.get("status")}</ErrorMessage>
      )}
    </Field>
  );
}
