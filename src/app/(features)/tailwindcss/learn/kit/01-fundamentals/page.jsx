import { Button } from "@/components/catalyst/button";
import { Divider } from "@/components/catalyst/divider";
import { Heading, Subheading } from "@/components/catalyst/heading";
import { Link } from "@/components/catalyst/link";
import { Code, Strong, Text } from "@/components/catalyst/text";

export const metadata = {
  title: "Fundamentals - Catalyst Learn",
};

export default function FundamentalsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <div>
        <Heading>Module 01: Fundamentals</Heading>
        <Subheading>The atoms of UI: Typography and Actions.</Subheading>
        <Text className="mt-4">
          Every interface starts with these basic building blocks. Catalyst
          provides opinionated, accessible wrappers for standard HTML elements.
        </Text>
      </div>

      <section className="space-y-6">
        <Heading level={2}>1. Typography</Heading>
        <Text>
          Use <Code>Heading</Code>, <Code>Subheading</Code>, and{" "}
          <Code>Text</Code> to maintain consistent vertical rhythm and
          readability.
        </Text>

        <div className="rounded-xl border border-zinc-950/10 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/50">
          <Heading>Page Title</Heading>
          <Subheading className="mt-1">
            Section subtitle or description.
          </Subheading>
          <Text className="mt-6">
            This is a standard paragraph using <Code>&lt;Text&gt;</Code>. It
            handles colors for light and dark modes automatically. You can also
            use <Strong>&lt;Strong&gt;</Strong> for emphasis and{" "}
            <Code>&lt;Code&gt;</Code> for technical terms.
          </Text>
          <div className="mt-6 border-t border-zinc-950/5 pt-6 dark:border-white/5">
            <Text size="sm">
              Small text variant for secondary info or captions.
            </Text>
          </div>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <Heading level={2}>2. Buttons</Heading>
        <Text>
          The <Code>Button</Code> component is polymorphic. It determines
          whether to render a <Code>&lt;button&gt;</Code> or an{" "}
          <Code>&lt;a&gt;</Code> tag based on the presence of the{" "}
          <Code>href</Code> prop.
        </Text>

        <div className="flex flex-wrap gap-4 rounded-xl border border-zinc-950/10 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/50">
          <div className="mb-2 w-full">
            <Text font="medium">Variants</Text>
          </div>
          <Button>Solid</Button>
          <Button outline>Outline</Button>
          <Button plain>Plain</Button>

          <div className="mt-4 mb-2 w-full">
            <Text font="medium">Colors</Text>
          </div>
          <Button color="blue">Blue</Button>
          <Button color="red">Red</Button>
          <Button color="green">Green</Button>
          <Button color="orange">Orange</Button>
          <Button color="zinc">Zinc</Button>

          <div className="mt-4 mb-2 w-full">
            <Text font="medium">States</Text>
          </div>
          <Button href="#">Link Button</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <Heading level={2}>3. Links</Heading>
        <Text>
          Use <Code>Link</Code> for interactive text elements that navigate. It
          integrates with your router (e.g., Next.js Link) if configured in{" "}
          <Code>ui/catalyst/link.jsx</Code>.
        </Text>

        <div className="rounded-xl border border-zinc-950/10 p-6 dark:border-white/10">
          <Text>
            Visit the <Link href="/tailwindcss/learn/kit">Catalyst Home</Link>{" "}
            to see more.
          </Text>
        </div>
      </section>

      <div className="flex justify-end pt-6">
        <Button href="/tailwindcss/learn/kit/02-forms" color="blue">
          Next: Forms & Inputs &rarr;
        </Button>
      </div>
    </div>
  );
}
