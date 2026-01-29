import { Avatar } from "@/components/catalyst/avatar";

export default function Example({ user }) {
  return (
    <>
      <Avatar square className="size-8" src={user.avatarUrl} />
      <Avatar
        square
        initials={user.initials}
        className="size-8 bg-zinc-900 text-white dark:bg-white dark:text-black"
      />
    </>
  );
}
