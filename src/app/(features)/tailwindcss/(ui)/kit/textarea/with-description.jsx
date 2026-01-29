import { Description, Field, Label } from "@/components/catalyst/fieldset";
import { Textarea } from "@/components/catalyst/textarea";

export default function Example() {
  return (
    <Field>
      <Label>Description</Label>
      <Description>This will be shown under the product title.</Description>
      <Textarea name="name" />
    </Field>
  );
}
