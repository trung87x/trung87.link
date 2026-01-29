import { AvatarButton } from "@/components/catalyst/avatar";

export default function Example({ user }) {
  return (
    <>
      <AvatarButton className="size-8" src={user.avatarUrl} />
      <AvatarButton square className="size-8" src={user.avatarUrl} />
    </>
  );
}
