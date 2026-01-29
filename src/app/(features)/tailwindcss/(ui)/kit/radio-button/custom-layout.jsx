import { Radio } from "@/components/catalyst/radio";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <Headless.Fieldset>
      <Headless.Legend className="text-base/6 font-medium sm:text-sm/6">
        How would you rate your experience?
      </Headless.Legend>
      <Headless.RadioGroup
        name="rating"
        defaultValue={3}
        className="mt-4 flex gap-6 sm:gap-8"
      >
        {[1, 2, 3, 4, 5].map((rating) => (
          <Headless.Field key={rating} className="flex items-center gap-2">
            <Radio value={rating} />
            <Headless.Label className="text-base/6 select-none sm:text-sm/6">
              {rating}
            </Headless.Label>
          </Headless.Field>
        ))}
      </Headless.RadioGroup>
    </Headless.Fieldset>
  );
}
