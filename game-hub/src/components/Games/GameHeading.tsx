import { Heading } from '@chakra-ui/react';
import type { GameQuery } from '@/App';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const genreName = gameQuery.genre?.name || '';
  const platformName = gameQuery.platform?.name || '';

  let heading = 'Games';
  if (genreName && platformName) {
    heading = `${genreName} and ${platformName} Games`;
  } else if (genreName) {
    heading = `${genreName} Games`;
  } else if (platformName) {
    heading = `${platformName} Games`;
  }

  return (
    <Heading as="h1" fontSize="4xl" marginBottom={5}>
      Showing {heading}
    </Heading>
  );
};

export default GameHeading;
