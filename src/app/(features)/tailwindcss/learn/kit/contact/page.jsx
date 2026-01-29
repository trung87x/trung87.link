import { Button } from '@/components/catalyst/button'
import { Field, FieldGroup, Fieldset, Label, Legend } from '@/components/catalyst/fieldset'
import { Heading } from '@/components/catalyst/heading'
import { Input } from '@/components/catalyst/input'
import { Textarea } from '@/components/catalyst/textarea'

export const metadata = {
  title: 'Contact Form - Catalyst Showcase',
  description: 'A basic contact form example using Catalyst components.',
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <Heading>Contact Us</Heading>
      <div className="mt-8">
        <form>
          <Fieldset>
            <Legend>Send us a message</Legend>
            <FieldGroup>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <Field>
                  <Label>First name</Label>
                  <Input name="first_name" placeholder="John" />
                </Field>
                <Field>
                  <Label>Last name</Label>
                  <Input name="last_name" placeholder="Doe" />
                </Field>
              </div>
              <Field>
                <Label>Email</Label>
                <Input name="email" type="email" placeholder="john@example.com" />
              </Field>
              <Field>
                <Label>Subject</Label>
                <Input name="subject" />
              </Field>
              <Field>
                <Label>Message</Label>
                <Textarea name="message" rows={4} />
              </Field>
            </FieldGroup>
            <div className="mt-8 flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </Fieldset>
        </form>
      </div>
    </div>
  )
}
