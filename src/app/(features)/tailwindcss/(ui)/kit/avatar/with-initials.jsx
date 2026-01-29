import { Avatar } from "@/components/catalyst/avatar";

export default function Example() {
  return (
    <>
      <Avatar
        initials="tw"
        className="size-6 bg-zinc-900 text-white dark:bg-white dark:text-black"
      />
      <Avatar
        initials="tw"
        className="size-8 bg-zinc-900 text-white dark:bg-white dark:text-black"
      />
      <Avatar
        initials="tw"
        className="size-10 bg-zinc-900 text-white dark:bg-white dark:text-black"
      />
    </>
  );
}
