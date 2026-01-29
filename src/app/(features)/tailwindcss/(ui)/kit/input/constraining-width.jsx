import { Field, Label } from "@/components/catalyst/fieldset";
import { Input } from "@/components/catalyst/input";

export default function Example() {
  return (
    <Field>
      <Label>CVC</Label>
      <Input className="max-w-24" name="cvc" pattern="[0-9]*" />
    </Field>
  );
}
