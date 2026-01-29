import { Fieldset, Label, Legend } from "@/components/catalyst/fieldset";
import { Input } from "@/components/catalyst/input";
import { Select } from "@/components/catalyst/select";
import { Text } from "@/components/catalyst/text";
import { Textarea } from "@/components/catalyst/textarea";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <form action="/orders" method="POST">
      {/* ... */}
      <Fieldset>
        <Legend>Shipping details</Legend>
        <Text>Without this your odds of getting your order are low.</Text>
        <div
          data-slot="control"
          className="grid grid-cols-1 items-center gap-x-4 gap-y-6 sm:grid-cols-3"
        >
          <Headless.Field className="grid grid-cols-subgrid sm:col-span-3">
            <Label>Full name</Label>
            <Input className="mt-3 sm:col-span-2 sm:mt-0" name="full_name" />
          </Headless.Field>
          <Headless.Field className="grid grid-cols-subgrid sm:col-span-3">
            <Label>Street address</Label>
            <Input
              className="mt-3 sm:col-span-2 sm:mt-0"
              name="street_address"
            />
          </Headless.Field>
          <Headless.Field className="grid grid-cols-subgrid sm:col-span-3">
            <Label>Country</Label>
            <Select className="mt-3 sm:col-span-2 sm:mt-0" name="country">
              <option>Canada</option>
              <option>Mexico</option>
              <option>United States</option>
            </Select>
          </Headless.Field>
          <Headless.Field className="grid grid-cols-subgrid sm:col-span-3">
            <Label>Delivery notes</Label>
            <Textarea className="mt-3 sm:col-span-2 sm:mt-0" name="notes" />
          </Headless.Field>
        </div>
      </Fieldset>
      {/* ... */}
    </form>
  );
}
