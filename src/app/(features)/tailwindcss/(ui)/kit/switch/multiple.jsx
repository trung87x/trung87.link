import { Description, Label } from "@/components/catalyst/fieldset";
import { Switch, SwitchField, SwitchGroup } from "@/components/catalyst/switch";

export default function Example() {
  return (
    <SwitchGroup>
      <SwitchField>
        <Label>Show on events page</Label>
        <Description>Make this event visible on your profile.</Description>
        <Switch name="show_on_events_page" defaultChecked />
      </SwitchField>
      <SwitchField>
        <Label>Allow embedding</Label>
        <Description>
          Allow others to embed your event details on their own site.
        </Description>
        <Switch name="allow_embedding" />
      </SwitchField>
    </SwitchGroup>
  );
}
