import { Label } from "@/components/catalyst/fieldset";
import { Radio, RadioField, RadioGroup } from "@/components/catalyst/radio";

export default function Example() {
  return (
    <RadioGroup
      name="resale"
      defaultValue="permit"
      aria-label="Resale and transfers"
    >
      <RadioField>
        <Radio color="sky" value="permit" />
        <Label>Allow tickets to be resold</Label>
      </RadioField>
      <RadioField>
        <Radio color="sky" value="forbid" />
        <Label>Don’t allow tickets to be resold</Label>
      </RadioField>
    </RadioGroup>
  );
}
