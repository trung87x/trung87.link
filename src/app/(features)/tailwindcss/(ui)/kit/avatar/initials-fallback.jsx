import { Avatar } from "@/components/catalyst/avatar";

export default function Example({ user }) {
  return (
    <>
      <Avatar
        src={user.avatarUrl}
        initials={user.initials}
        className="size-6 bg-purple-500 text-white"
      />
      <Avatar
        src={user.avatarUrl}
        initials={user.initials}
        className="size-8 bg-purple-500 text-white"
      />
      <Avatar
        src={user.avatarUrl}
        initials={user.initials}
        className="size-10 bg-purple-500 text-white"
      />
    </>
  );
}
