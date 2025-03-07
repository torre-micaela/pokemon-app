import { Flex } from "@chakra-ui/react";
import SkeletonCard from "./SkeletonCard";

interface SkeletonGridProps {
  length: number;
}
const SkeletonGrid = ({ length }: SkeletonGridProps) => {
  return (
    <Flex
      gap={6}
      p={2}
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      {Array.from({ length: length }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </Flex>
  );
};

export default SkeletonGrid;
