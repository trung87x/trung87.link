"use client";

import { Switch } from "@/components/catalyst/switch";
import { useState } from "react";

export default function Example() {
  let [checked, setChecked] = useState(true);

  return <Switch checked={checked} onChange={setChecked} />;
}
