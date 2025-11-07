import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';

const Loading = () => (
  <Card.Root>
    <Skeleton height="200px" />
    <Card.Body>
      <SkeletonText noOfLines={2} />
    </Card.Body>
    <SkeletonText noOfLines={2} />
  </Card.Root>
);
export default Loading;
