import { ErrorMessage, Field, Label } from "@/components/catalyst/fieldset";
import { Textarea } from "@/components/catalyst/textarea";

export default function Example({ errors }) {
  return (
    <Field>
      <Label>Description</Label>
      <Textarea name="description" invalid={errors.has("description")} />
      {errors.has("description") && (
        <ErrorMessage>{errors.get("description")}</ErrorMessage>
      )}
    </Field>
  );
}
