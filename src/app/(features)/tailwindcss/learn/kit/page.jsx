import { Button } from "@/components/catalyst/button";
import { Heading, Subheading } from "@/components/catalyst/heading";
import { Text } from "@/components/catalyst/text";

export const metadata = {
  title: "Catalyst - Showcase & Learn",
  description:
    "Master Tailwind Catalyst components and explore real-world examples.",
};

const modules = [
  {
    id: "01",
    title: "Fundamentals",
    description: "Learn the basic atoms: Buttons, Headings, Text, and Links.",
    href: "/tailwindcss/learn/kit/01-fundamentals",
    color: "blue",
  },
  {
    id: "02",
    title: "Forms & Inputs",
    description:
      "Master data entry with Inputs, Selects, Switches, and Fieldsets.",
    href: "/tailwindcss/learn/kit/02-forms",
    color: "indigo",
  },
  {
    id: "03",
    title: "Application Layouts",
    description: "Understand Navbar, Sidebar, and Stacked layouts.",
    href: "/tailwindcss/learn/kit/03-layouts",
    color: "violet",
  },
  {
    id: "04",
    title: "Overlays & Feedback",
    description: "Manage Dialogs, Alerts, and Dropdown menus.",
    href: "/tailwindcss/learn/kit/04-overlays",
    color: "pink",
  },
  {
    id: "05",
    title: "Data Display",
    description: "Present data effectively with Tables, Badges, and Avatars.",
    href: "/tailwindcss/learn/kit/05-data",
    color: "cyan",
  },
];

export default function CatalystKitPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-20">
      {/* Introduction */}
      <div className="text-center">
        <Heading>Tailwind Catalyst</Heading>
        <Subheading className="mt-2 text-zinc-500">
          Professional UI components, built by the creators of Tailwind CSS.
        </Subheading>
      </div>

      {/* Tutorials Section */}
      <section>
        <div className="flex items-center justify-between border-l-4 border-indigo-500 pl-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Interactive Tutorials
            </h2>
            <p className="mt-1 text-gray-600">
              Master the library from atoms to complex overlays.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.id}
              className="group flex flex-col rounded-2xl border border-zinc-950/10 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-zinc-900/50"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`flex size-10 items-center justify-center rounded-lg bg-${module.color}-500/10 text-sm font-bold text-${module.color}-600 dark:bg-${module.color}-400/10 dark:text-${module.color}-400`}
                >
                  {module.id}
                </span>
                <Heading level={3} className="!text-base">
                  {module.title}
                </Heading>
              </div>
              <Text className="mt-4 flex-grow text-zinc-600 dark:text-zinc-400">
                {module.description}
              </Text>
              <div className="mt-6">
                <Button
                  href={module.href}
                  outline
                  className="w-full group-hover:bg-zinc-50 dark:group-hover:bg-white/5"
                >
                  Start Module
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      <section>
        <div className="flex items-center justify-between border-l-4 border-teal-500 pl-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Example Pages</h2>
            <p className="mt-1 text-gray-600">
              See how components come together in real-world layouts.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {/* Basic Information */}
          <section className="flex flex-col items-start gap-4 rounded-xl border border-zinc-950/5 bg-zinc-50 p-8 shadow-sm dark:border-white/5 dark:bg-white/5">
            <Heading level={2} className="!text-lg">
              Basic
            </Heading>
            <p className="text-zinc-600 dark:text-zinc-400">
              A simple contact form demonstrating basic inputs and buttons.
            </p>
            <Button
              href="/tailwindcss/learn/kit/contact"
              color="blue"
              className="mt-auto w-full"
            >
              View Contact Form
            </Button>
          </section>

          {/* Intermediate Settings */}
          <section className="flex flex-col items-start gap-4 rounded-xl border border-zinc-950/5 bg-zinc-50 p-8 shadow-sm dark:border-white/5 dark:bg-white/5">
            <Heading level={2} className="!text-lg">
              Intermediate
            </Heading>
            <p className="text-zinc-600 dark:text-zinc-400">
              User settings layout with toggles, selects, and avatars.
            </p>
            <Button
              href="/tailwindcss/learn/kit/settings"
              color="cyan"
              className="mt-auto w-full"
            >
              View Settings
            </Button>
          </section>

          {/* Advanced Dashboard */}
          <section className="flex flex-col items-start gap-4 rounded-xl border border-zinc-950/5 bg-zinc-50 p-8 shadow-sm dark:border-white/5 dark:bg-white/5">
            <Heading level={2} className="!text-lg">
              Advanced
            </Heading>
            <p className="text-zinc-600 dark:text-zinc-400">
              Complex data dashboard with tables, badges, and pagination.
            </p>
            <Button
              href="/tailwindcss/learn/kit/dashboard"
              color="violet"
              className="mt-auto w-full"
            >
              View Dashboard
            </Button>
          </section>
        </div>
      </section>
    </div>
  );
}
