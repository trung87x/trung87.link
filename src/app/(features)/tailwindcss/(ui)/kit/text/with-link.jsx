import { Text, TextLink } from "@/components/catalyst/text";

export default function Example() {
  return (
    <Text>
      Deleting your account is permanent, and your data will not be able to be
      recovered. If you still want to use this account in the future, learn
      about <TextLink href="#">pausing your subscription</TextLink> instead.
    </Text>
  );
}
