import { Checkbox } from "@/components/catalyst/checkbox";
import { Label } from "@/components/catalyst/fieldset";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <Headless.Field className="flex items-center justify-between gap-4">
      <Label>Allow embedding</Label>
      <Checkbox name="allow_embedding" />
    </Headless.Field>
  );
}
