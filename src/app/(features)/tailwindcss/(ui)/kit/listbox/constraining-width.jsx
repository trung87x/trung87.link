import { Field, Label } from "@/components/catalyst/fieldset";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/catalyst/listbox";

export default function Example() {
  return (
    <Field>
      <Label>Day of the week</Label>
      <Listbox
        className="max-w-40"
        name="day_of_the_week"
        defaultValue="Monday"
      >
        <ListboxOption value="Monday">
          <ListboxLabel>Monday</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="Tuesday">
          <ListboxLabel>Tuesday</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="Wednesday">
          <ListboxLabel>Wednesday</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="Thursday">
          <ListboxLabel>Thursday</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="Friday">
          <ListboxLabel>Friday</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="Saturday">
          <ListboxLabel>Saturday</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="Sunday">
          <ListboxLabel>Sunday</ListboxLabel>
        </ListboxOption>
      </Listbox>
    </Field>
  );
}
