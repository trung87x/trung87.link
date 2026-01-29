'use client'

import { Label } from "@/components/catalyst/fieldset";
import { Radio, RadioField, RadioGroup } from "@/components/catalyst/radio";
import { useState } from "react";

export default function Example() {
  let [selected, setSelected] = useState("permit");

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioField>
        <Radio value="permit" />
        <Label>Allow tickets to be resold</Label>
      </RadioField>
      <RadioField>
        <Radio value="forbid" />
        <Label>Don’t allow tickets to be resold</Label>
      </RadioField>
    </RadioGroup>
  );
}
