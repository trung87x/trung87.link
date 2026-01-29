"use client";

import {
  Alert,
  AlertActions,
  AlertBody,
  AlertDescription,
  AlertTitle,
} from "@/components/catalyst/alert";
import { Button } from "@/components/catalyst/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/catalyst/dialog";
import { Divider } from "@/components/catalyst/divider";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/catalyst/dropdown";
import { Heading, Subheading } from "@/components/catalyst/heading";
import { Code, Text } from "@/components/catalyst/text";
import { ArrowDownCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function OverlaysPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <div>
        <Heading>Module 04: Overlays</Heading>
        <Subheading>Modals, Alerts, and Menus.</Subheading>
        <Text className="mt-4">
          Overlays appear on top of other content. Catalyst handles the z-index,
          focus management, and accessibility for you.
        </Text>
      </div>

      <section className="space-y-6">
        <Heading level={2}>1. Dialog (Modal)</Heading>
        <Text>
          Use <Code>Dialog</Code> for complex interactions that require user
          attention.
        </Text>

        <div className="rounded-xl border border-zinc-950/10 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/50">
          <Button onClick={() => setIsDialogOpen(true)} outline>
            Open Example Dialog
          </Button>

          <Dialog open={isDialogOpen} onClose={setIsDialogOpen}>
            <DialogTitle>Make a transfer</DialogTitle>
            <DialogDescription>
              Initiate a transfer to another account.
            </DialogDescription>
            <DialogBody>
              <Text>
                Are you sure you want to transfer $500 to the Savings account?
                This action is immediate.
              </Text>
            </DialogBody>
            <DialogActions>
              <Button plain onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>
                Confirm Transfer
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <Heading level={2}>2. Alert</Heading>
        <Text>
          Use <Code>Alert</Code> for urgent interruptions or confirmations. It
          has a more rigid structure than a Dialog.
        </Text>

        <div className="rounded-xl border border-zinc-950/10 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/50">
          <Button color="red" onClick={() => setIsAlertOpen(true)} outline>
            Trigger Delete Alert
          </Button>

          <Alert open={isAlertOpen} onClose={setIsAlertOpen}>
            <AlertTitle>Are you absolutely sure?</AlertTitle>
            <AlertDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDescription>
            <AlertActions>
              <Button plain onClick={() => setIsAlertOpen(false)}>
                Cancel
              </Button>
              <Button color="red" onClick={() => setIsAlertOpen(false)}>
                Yes, Delete
              </Button>
            </AlertActions>
          </Alert>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <Heading level={2}>3. Dropdown Menu</Heading>
        <Text>
          Use <Code>Dropdown</Code> for lists of actions. It works with{" "}
          <Code>Button</Code> or any other trigger.
        </Text>

        <div className="flex h-64 items-center justify-center rounded-xl border border-zinc-950/10 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/50">
          <div className="flex justify-center">
            <Dropdown>
              <DropdownButton as={Button} outline>
                Options
                <ArrowDownCircleIcon className="ml-2 size-4" />
              </DropdownButton>
              <DropdownMenu className="min-w-48">
                <DropdownItem href="/tailwindcss/learn/kit/01-fundamentals">
                  <DropdownLabel>View Tutorial</DropdownLabel>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLabel>Edit Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem>
                  <TrashIcon />
                  <DropdownLabel>Delete</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </section>

      <div className="flex justify-between pt-6">
        <Button href="/tailwindcss/learn/kit/03-layouts" plain>
          &larr; Prev: Layouts
        </Button>
        <Button href="/tailwindcss/learn/kit/05-data" color="blue">
          Next: Data Display &rarr;
        </Button>
      </div>
    </div>
  );
}
