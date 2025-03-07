import { Skeleton, Flex } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Flex
      w={300}
      flexDir="column"
      minH={500}
      p={2}
      outline="1px solid gray"
      justifyContent="space-between"
      alignItems="center"
    >
      <Skeleton w="60%" h="20px" mb={4} variant="pulse" />

      <Skeleton w={200} h={200} variant="pulse" />

      <Flex m={5} justifyContent="center">
        <Skeleton w={120} h={20} variant="pulse" />
      </Flex>

      <Skeleton w="100%" h={8} borderRadius={0} variant="pulse" />
    </Flex>
  );
};

export default SkeletonCard;
