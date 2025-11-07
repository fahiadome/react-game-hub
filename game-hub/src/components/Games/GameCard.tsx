import type { Game } from '@/hooks/useGames';
import { Card, Heading, HStack, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '@/Services/Games/image-url';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root width="300px" borderRadius={10} overflow="hidden">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        //src={game.background_image}
        alt={game.name}
        objectFit="cover"
      />
      <Card.Body gap="2" padding="10px">
        <Heading fontSize="xl" fontWeight="semibold">
          {game.name}
        </Heading>
        <Text>Rating: {game.rating}</Text>
        <Text>Released: {game.released}</Text>

        <HStack justify="space-between" align="center">
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
