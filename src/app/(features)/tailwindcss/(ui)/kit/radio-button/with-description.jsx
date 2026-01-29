import { Description, Label } from "@/components/catalyst/fieldset";
import { Radio, RadioField, RadioGroup } from "@/components/catalyst/radio";

export default function Example() {
  return (
    <RadioGroup
      name="resale"
      defaultValue="permit"
      aria-label="Resale and transfers"
    >
      <RadioField>
        <Radio value="permit" />
        <Label>Allow tickets to be resold</Label>
        <Description>
          Customers can resell or transfer their tickets if they can’t make it
          to the event.
        </Description>
      </RadioField>
      <RadioField>
        <Radio value="forbid" />
        <Label>Don’t allow tickets to be resold</Label>
        <Description>
          Tickets cannot be resold or transferred to another person.
        </Description>
      </RadioField>
    </RadioGroup>
  );
}
