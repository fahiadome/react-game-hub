import type { Game } from '@/hooks/useGames';
import { Card, Heading, HStack, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '@/Services/Games/image-url';
import Emoji from './Emoji';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root>
      <Image
        src={getCroppedImageUrl(game.background_image) || ''}
        alt={game.name}
        objectFit="cover"
      />
      <Card.Body padding="6px">
        <HStack justify="space-between" align="center">
          <Heading fontSize="lg" fontWeight="semibold">
            {game.name}
          </Heading>
          <Emoji rating={game.rating_top} />
        </HStack>
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
