import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/catalyst/pagination";

export default function Example() {
  return (
    <Pagination>
      <PaginationPrevious />
      <PaginationNext href="?after=421c1b0" />
    </Pagination>
  );
}
