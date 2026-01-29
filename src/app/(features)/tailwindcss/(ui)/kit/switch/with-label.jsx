import { Label } from "@/components/catalyst/fieldset";
import { Switch, SwitchField } from "@/components/catalyst/switch";

export default function Example() {
  return (
    <SwitchField>
      <Label>Allow embedding</Label>
      <Switch name="allow_embedding" />
    </SwitchField>
  );
}
