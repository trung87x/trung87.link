import { AvatarButton } from "@/components/catalyst/avatar";
import { Button } from "@/components/catalyst/button";
import {
  Description,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "@/components/catalyst/fieldset";
import { Heading, Subheading } from "@/components/catalyst/heading";
import { Radio, RadioField, RadioGroup } from "@/components/catalyst/radio";
import { Select } from "@/components/catalyst/select";
import { Switch, SwitchField } from "@/components/catalyst/switch";
import { Text } from "@/components/catalyst/text";

export const metadata = {
  title: "Settings - Catalyst Showcase",
  description:
    "An intermediate settings page example using Catalyst components.",
};

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <Heading>Settings</Heading>
      <Subheading>Manage your profile and preferences.</Subheading>

      <div className="mt-8">
        <form>
          <FieldGroup>
            {/* Profile Section */}
            <Fieldset>
              <Legend>Profile</Legend>
              <Text>Update your public profile information.</Text>
              <FieldGroup>
                <Field className="flex items-center gap-4">
                  <AvatarButton src="/images/avatar.jpg" initials="TR" />
                  <Button outline>Change Avatar</Button>
                </Field>
                <Field>
                  <Label>Language</Label>
                  <Select name="language" defaultValue="en">
                    <option value="en">English</option>
                    <option value="vi">Vietnamese</option>
                    <option value="fr">French</option>
                  </Select>
                  <Description>
                    The language you want to use in the dashboard.
                  </Description>
                </Field>
              </FieldGroup>
            </Fieldset>

            {/* Notifications Section */}
            <Fieldset>
              <Legend>Notifications</Legend>
              <FieldGroup>
                <SwitchField>
                  <Label>Email marketing</Label>
                  <Description>
                    Receive emails about new products, features, and more.
                  </Description>
                  <Switch name="email_marketing" defaultChecked />
                </SwitchField>
                <SwitchField>
                  <Label>Security updates</Label>
                  <Description>
                    Get notified about important security alerts.
                  </Description>
                  <Switch
                    name="security_updates"
                    defaultChecked
                    color="green"
                  />
                </SwitchField>
              </FieldGroup>
            </Fieldset>

            {/* Visibility Section */}
            <Fieldset>
              <Legend>Visibility</Legend>
              <RadioGroup name="visibility" defaultValue="public">
                <RadioField>
                  <Radio value="public" />
                  <Label>Public</Label>
                  <Description>Everyone can see your profile.</Description>
                </RadioField>
                <RadioField>
                  <Radio value="private" />
                  <Label>Private</Label>
                  <Description>Only you can see your profile.</Description>
                </RadioField>
                <RadioField>
                  <Radio value="friends" />
                  <Label>Friends Only</Label>
                  <Description>
                    Only your friends can see your profile.
                  </Description>
                </RadioField>
              </RadioGroup>
            </Fieldset>
          </FieldGroup>

          <div className="mt-8 flex justify-end gap-4">
            <Button plain>Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
