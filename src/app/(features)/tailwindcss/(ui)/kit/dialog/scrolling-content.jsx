"use client";

import { Button } from "@/components/catalyst/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/catalyst/dialog";
import { useState } from "react";

export default function Example() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Agree to terms
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen} size="xl">
        <DialogTitle>Terms and conditions</DialogTitle>
        <DialogDescription>
          Please agree to the following terms and conditions to continue.
        </DialogDescription>
        <DialogBody className="text-sm/6 text-zinc-900 dark:text-white">
          <p className="mt-4">
            By accessing and using our services, you are agreeing to these
            terms, which have been meticulously tailored for our benefit and
            your compliance.
          </p>
          <h3 className="mt-6 font-bold">Comprehensive Acceptance of Terms</h3>
          <p className="mt-4">
            Your engagement with our application signifies your irrevocable
            acceptance of these terms, which are binding regardless of your
            awareness or understanding of them. Your continued use acts as a
            silent nod of agreement to any and all stipulations outlined herein.
          </p>
          {/* ... */}
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>I agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
