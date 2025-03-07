import { HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "./ui/pagination";

interface PaginatorProps {
  count: number;
  pageSize: number;
  defaultPage?: number;
  handlerPagination: (e: { page: number; pageSize?: number }) => void;
}

const Paginator = ({
  count = 10,
  pageSize,
  handlerPagination,
}: PaginatorProps) => {
  return (
    <PaginationRoot
      count={count}
      pageSize={pageSize}
      onPageChange={handlerPagination}
    >
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  );
};

export default Paginator;
