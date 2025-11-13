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
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    if (target.src && !target.src.includes('no-image-placeholder')) {
      target.src = getCroppedImageUrl('');
    }
  };

  return (
    <Card.Root
      role="article"
      aria-label={`Game: ${game.name}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
        }
      }}
    >
      <Image
        src={getCroppedImageUrl(game.background_image || '')}
        alt={game.name || 'Game image'}
        objectFit="cover"
        onError={handleImageError}
      />
      <Card.Body padding="6px">
        <HStack justify="space-between" align="center">
          <Heading fontSize="lg" fontWeight="semibold">
            {game.name || 'Unknown Game'}
          </Heading>
          {game.rating_top && <Emoji rating={game.rating_top} />}
        </HStack>
        {game.rating !== undefined && <Text>Rating: {game.rating}</Text>}
        {game.released && <Text>Released: {game.released}</Text>}

        <HStack justify="space-between" align="center">
          {game.parent_platforms && game.parent_platforms.length > 0 && (
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
          )}
          {game.metacritic !== undefined && game.metacritic !== null && (
            <CriticScore score={game.metacritic} />
          )}
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
