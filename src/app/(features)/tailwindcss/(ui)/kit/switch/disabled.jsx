import { Description, Fieldset, Label, Legend } from "@/components/catalyst/fieldset";
import { Switch, SwitchField, SwitchGroup } from "@/components/catalyst/switch";
import { Text } from "@/components/catalyst/text";

export default function Example() {
  return (
    <Fieldset>
      <Legend>Discoverability</Legend>
      <Text>Decide where your events can be found across the web.</Text>
      <SwitchGroup>
        <SwitchField>
          <Label>Show on events page</Label>
          <Description>Make this event visible on your profile.</Description>
          <Switch name="discoverability" value="show_on_events_page" />
        </SwitchField>
        <SwitchField disabled>
          <Label>Allow embedding</Label>
          <Description>
            Allow others to embed your event details on their own site.
          </Description>
          <Switch name="discoverability" value="allow_embedding" />
        </SwitchField>
      </SwitchGroup>
    </Fieldset>
  );
}
