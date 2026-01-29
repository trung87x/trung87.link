"use client";

import { Field, Label } from "@/components/catalyst/fieldset";
import { Textarea } from "@/components/catalyst/textarea";
import { useState } from "react";

export default function Example() {
  let [name, setName] = useState("");

  return (
    <Field>
      <Label>Description</Label>
      <Textarea
        name="description"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Field>
  );
}
