import type { Game } from '@/hooks/useGames';
import { Card, Heading, HStack, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius="lg" overflow="hidden">
      <Image
        src={game.background_image}
        alt={game.name}
        height="200px"
        width="100%"
        objectFit="cover"
      />
      <Card.Body gap="2" padding="10px">
        <Heading fontSize="xl" fontWeight="semibold" color="white">
          {game.name}
        </Heading>
        <Text>Rating: {game.rating}</Text>
        <Text>Released: {game.released}</Text>

        <HStack justify="space-between" align="center">
        <PlatformIconList
            platforms={game.parent_platforms.map((platform) => platform.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
