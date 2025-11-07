import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';

const Loading = () => (
  // <Stack gap="6" maxW="xs">
  //   <HStack width="full">
  //     <SkeletonCircle size="10" />
  //     <SkeletonText noOfLines={2} />
  //   </HStack>
  //   <Skeleton height="200px" />
  // </Stack>
  <Card.Root width="300px" borderRadius={10} overflow="hidden">
    <Skeleton height="200px" />
    <Card.Body>
      <SkeletonText noOfLines={2} />
    </Card.Body>
    <SkeletonText noOfLines={2} />
  </Card.Root>
);
export default Loading;
