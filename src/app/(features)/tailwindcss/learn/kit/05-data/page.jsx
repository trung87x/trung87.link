import { Avatar } from "@/components/catalyst/avatar";
import { Badge } from "@/components/catalyst/badge";
import { Button } from "@/components/catalyst/button";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/catalyst/description-list";
import { Divider } from "@/components/catalyst/divider";
import { Heading, Subheading } from "@/components/catalyst/heading";
import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "@/components/catalyst/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/catalyst/table";
import { Code, Text } from "@/components/catalyst/text";

export const metadata = {
  title: "Data Display - Catalyst Learn",
};

export default function DataDisplayPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <div>
        <Heading>Module 05: Data Display</Heading>
        <Subheading>Presenting information clearly and effectively.</Subheading>
        <Text className="mt-4">
          Catalyst provides specialized components like <Code>Table</Code>,{" "}
          <Code>DescriptionList</Code>, and <Code>Badge</Code> for reading-heavy
          interfaces.
        </Text>
      </div>

      <section className="space-y-6">
        <Heading level={2}>1. Description List</Heading>
        <Text>
          Use <Code>DescriptionList</Code> to display key-value pairs, such as
          detailed object properties.
        </Text>

        <div className="rounded-xl border border-zinc-950/10 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/50">
          <DescriptionList>
            <DescriptionTerm>Full Name</DescriptionTerm>
            <DescriptionDetails>Margot Foster</DescriptionDetails>

            <DescriptionTerm>Application for</DescriptionTerm>
            <DescriptionDetails>Backend Developer</DescriptionDetails>

            <DescriptionTerm>Email address</DescriptionTerm>
            <DescriptionDetails>margotfoster@example.com</DescriptionDetails>

            <DescriptionTerm>Salary expectation</DescriptionTerm>
            <DescriptionDetails>$120,000</DescriptionDetails>
          </DescriptionList>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <Heading level={2}>2. Table & Badge</Heading>
        <Text>
          Use <Code>Table</Code> for collections of data. Combine with{" "}
          <Code>Badge</Code> for status indicators and <Code>Avatar</Code> for
          users.
        </Text>

        <div className="overflow-hidden rounded-xl border border-zinc-950/10 shadow-sm dark:border-white/10 dark:bg-zinc-900/50">
          <Table dense>
            <TableHead>
              <TableRow>
                <TableHeader>User</TableHeader>
                <TableHeader>Role</TableHeader>
                <TableHeader>Status</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar
                      initials="LW"
                      className="size-6 bg-indigo-500 text-white"
                    />
                    Lindsay Walton
                  </div>
                </TableCell>
                <TableCell>Front-end Developer</TableCell>
                <TableCell>
                  <Badge color="green">Active</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar
                      initials="CH"
                      className="size-6 bg-purple-500 text-white"
                    />
                    Courtney Henry
                  </div>
                </TableCell>
                <TableCell>Designer</TableCell>
                <TableCell>
                  <Badge color="zinc">Offline</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar
                      initials="TW"
                      className="size-6 bg-pink-500 text-white"
                    />
                    Tom Whitney
                  </div>
                </TableCell>
                <TableCell>Director</TableCell>
                <TableCell>
                  <Badge color="blue">Busy</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="space-y-6">
        <Heading level={2}>3. Pagination</Heading>
        <Text>Use standard pagination controls for long lists.</Text>

        <div className="rounded-xl border border-zinc-950/10 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/50">
          <Pagination>
            <PaginationPrevious href="#" />
            <PaginationList>
              <PaginationPage href="#" current>
                1
              </PaginationPage>
              <PaginationPage href="#">2</PaginationPage>
              <PaginationPage href="#">3</PaginationPage>
              <span className="px-2 text-zinc-500">...</span>
              <PaginationPage href="#">10</PaginationPage>
            </PaginationList>
            <PaginationNext href="#" />
          </Pagination>
        </div>
      </section>

      <div className="flex justify-between pt-6">
        <Button href="/tailwindcss/learn/kit/04-overlays" plain>
          &larr; Prev: Overlays
        </Button>
        <Button href="/tailwindcss/learn/kit" color="green">
          Finish: Back to Showcase
        </Button>
      </div>
    </div>
  );
}
