import { Field, Label } from "@/components/catalyst/fieldset";
import { Input } from "@/components/catalyst/input";

export default function Example() {
  return (
    <Field>
      <Label>Your website</Label>
      <Input type="url" name="url" />
    </Field>
  );
}
