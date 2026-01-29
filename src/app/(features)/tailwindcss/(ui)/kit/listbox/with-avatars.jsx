import { Avatar } from "@/components/catalyst/avatar";
import { Field, Label } from "@/components/catalyst/fieldset";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/catalyst/listbox";

export default function Example({ users }) {
  return (
    <Field>
      <Label>Assigned to</Label>
      <Listbox name="user">
        {users.map((user) => (
          <ListboxOption key={user.id} value={user}>
            <Avatar
              src={user.avatarUrl}
              initials={user.initials}
              className="bg-purple-500 text-white"
              alt=""
            />
            <ListboxLabel>{user.name}</ListboxLabel>
          </ListboxOption>
        ))}
      </Listbox>
    </Field>
  );
}
