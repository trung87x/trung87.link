import { Field, Label } from "@/components/catalyst/fieldset";
import { Input } from "@/components/catalyst/input";

export default function Example() {
  return (
    <Field disabled>
      <Label>Full name</Label>
      <Input name="full_name" />
    </Field>
  );
}
