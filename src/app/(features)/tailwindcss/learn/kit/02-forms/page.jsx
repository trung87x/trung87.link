import { Button } from "@/components/catalyst/button";
import { Checkbox, CheckboxField, CheckboxGroup } from "@/components/catalyst/checkbox";
import { Divider } from "@/components/catalyst/divider";
import {
  Description,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "@/components/catalyst/fieldset";
import { Heading, Subheading } from "@/components/catalyst/heading";
import { Input } from "@/components/catalyst/input";
import {
  Listbox,
  ListboxDescription,
  ListboxLabel,
  ListboxOption,
} from "@/components/catalyst/listbox";
import { Radio, RadioField, RadioGroup } from "@/components/catalyst/radio";
import { Select } from "@/components/catalyst/select";
import { Switch, SwitchField, SwitchGroup } from "@/components/catalyst/switch";
import { Code, Text } from "@/components/catalyst/text";
import { Textarea } from "@/components/catalyst/textarea";

export const metadata = {
  title: "Forms & Inputs - Catalyst Learn",
};

export default function FormsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <div>
        <Heading>Module 02: Forms & Inputs</Heading>
        <Subheading>Data entry components and layout patterns.</Subheading>
        <Text className="mt-4">
          Catalyst forms are built by composing <Code>Field</Code>,{" "}
          <Code>Label</Code>, <Code>Description</Code>, and the input control
          itself.
        </Text>
      </div>

      <section className="space-y-6">
        <Heading level={2}>1. Text Inputs</Heading>
        <Text>
          Basic text entry using <Code>Input</Code> and <Code>Textarea</Code>.
        </Text>

        <div className="rounded-xl border border-zinc-950/10 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/50">
          <FieldGroup>
            <Field>
              <Label>Email</Label>
              <Input name="email" type="email" placeholder="john@example.com" />
              <Description>We'll only use this for spam.</Description>
            </Field>
            <Field className="mt-6">
              <Label>Bio</Label>
              <Textarea name="bio" rows={3} />
              <Description>Tell us a little about yourself.</Description>
            </Field>
          </FieldGroup>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <Heading level={2}>2. Selection Controls</Heading>
        <Text>
          Use <Code>Select</Code> for native dropdowns, <Code>Listbox</Code> for
          custom UI dropdowns, and <Code>Radio</Code>/<Code>Checkbox</Code> for
          options.
        </Text>

        <div className="grid gap-8 rounded-xl border border-zinc-950/10 p-8 text-zinc-950 shadow-sm sm:grid-cols-2 dark:border-white/10 dark:bg-zinc-900/50 dark:text-white">
          <Field>
            <Label>Timezone (Native Select)</Label>
            <Select name="timezone">
              <option value="utc">UTC</option>
              <option value="est">EST</option>
              <option value="pst">PST</option>
            </Select>
          </Field>

          <Field>
            <Label>Assignment (Listbox)</Label>
            <Listbox name="assignee" placeholder="Select a person">
              <ListboxOption value={1}>
                <ListboxLabel>Tom Cook</ListboxLabel>
                <ListboxDescription>Product Manager</ListboxDescription>
              </ListboxOption>
              <ListboxOption value={2}>
                <ListboxLabel>Wade Warren</ListboxLabel>
                <ListboxDescription>Developer</ListboxDescription>
              </ListboxOption>
            </Listbox>
          </Field>

          <div className="col-span-full mt-4 grid gap-8 sm:grid-cols-2">
            <RadioGroup name="plan" defaultValue="startup">
              <Label>Plan</Label>
              <RadioField>
                <Radio value="startup" />
                <Label>Startup</Label>
                <Description>For new businesses.</Description>
              </RadioField>
              <RadioField>
                <Radio value="business" />
                <Label>Business</Label>
                <Description>For scaling teams.</Description>
              </RadioField>
            </RadioGroup>

            <Fieldset>
              <Legend>Notifications</Legend>
              <CheckboxGroup>
                <CheckboxField>
                  <Checkbox name="email_sub" defaultChecked />
                  <Label>Email</Label>
                </CheckboxField>
                <CheckboxField>
                  <Checkbox name="sms_sub" />
                  <Label>SMS</Label>
                </CheckboxField>
              </CheckboxGroup>
            </Fieldset>
          </div>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <Heading level={2}>3. Toggles (Switches)</Heading>
        <Text>
          Use <Code>Switch</Code> for binary on/off states.
        </Text>

        <div className="rounded-xl border border-zinc-950/10 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/50">
          <SwitchGroup>
            <SwitchField>
              <Label>Enable Dark Mode</Label>
              <Switch defaultChecked />
            </SwitchField>
            <SwitchField className="mt-4">
              <Label>Airplane Mode</Label>
              <Description>Disable all network connections.</Description>
              <Switch color="orange" />
            </SwitchField>
          </SwitchGroup>
        </div>
      </section>

      <div className="flex justify-between pt-6">
        <Button href="/tailwindcss/learn/kit/01-fundamentals" plain>
          &larr; Prev: Fundamentals
        </Button>
        <Button href="/tailwindcss/learn/kit/03-layouts" color="blue">
          Next: Layouts &rarr;
        </Button>
      </div>
    </div>
  );
}
