"use client";

import { Checkbox, CheckboxField, CheckboxGroup } from "@/components/catalyst/checkbox";
import { Label } from "@/components/catalyst/fieldset";
import { useState } from "react";

const options = ["Show on events page", "Allow embedding"];

export default function Example() {
  let [selected, setSelected] = useState(["Show on events page"]);

  return (
    <CheckboxGroup role="group" aria-label="Discoverability">
      <CheckboxField>
        <Checkbox
          checked={selected.length > 0}
          indeterminate={selected.length !== options.length}
          onChange={(checked) => setSelected(checked ? options : [])}
        />
        <Label>Select all</Label>
      </CheckboxField>

      {options.map((option) => (
        <CheckboxField key={option}>
          <Checkbox
            name={option}
            checked={selected.includes(option)}
            onChange={(checked) => {
              return setSelected((pending) => {
                return checked
                  ? [...pending, option]
                  : pending.filter((item) => item !== option);
              });
            }}
          />
          <Label>{option}</Label>
        </CheckboxField>
      ))}
    </CheckboxGroup>
  );
}
