import { Checkbox, CheckboxField } from "@/components/catalyst/checkbox";
import { Label } from "@/components/catalyst/fieldset";

export default function Example() {
  return (
    <CheckboxField>
      <Checkbox name="allow_embedding" />
      <Label>Allow embedding</Label>
    </CheckboxField>
  );
}
