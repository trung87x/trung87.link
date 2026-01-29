import { Avatar } from "@/components/catalyst/avatar";

export default function Example({ users }) {
  return (
    <div className="flex items-center justify-center -space-x-2">
      {users.map((user) => (
        <Avatar
          src={user.avatarUrl}
          className="size-8 ring-2 ring-white dark:ring-zinc-900"
        />
      ))}
    </div>
  );
}
