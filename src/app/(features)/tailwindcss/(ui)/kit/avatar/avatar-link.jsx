import { AvatarButton } from "@/components/catalyst/avatar";

export default function Example({ user }) {
  return (
    <>
      <AvatarButton href={user.url} className="size-8" src={user.avatarUrl} />
      <AvatarButton
        square
        href={user.url}
        className="size-8"
        src={user.avatarUrl}
      />
    </>
  );
}
