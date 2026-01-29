"use client";

import {
  Alert,
  AlertActions,
  AlertBody,
  AlertDescription,
  AlertTitle,
} from "@/components/catalyst/alert";
import { Button } from "@/components/catalyst/button";
import { Input } from "@/components/catalyst/input";
import { useState } from "react";

export default function Example() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Delete repository
      </Button>
      <Alert open={isOpen} onClose={setIsOpen} size="sm">
        <AlertTitle>Verification required</AlertTitle>
        <AlertDescription>
          To continue, please enter your password.
        </AlertDescription>
        <AlertBody>
          <Input
            name="password"
            type="password"
            aria-label="Password"
            placeholder="•••••••"
          />
        </AlertBody>
        <AlertActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Continue</Button>
        </AlertActions>
      </Alert>
    </>
  );
}
