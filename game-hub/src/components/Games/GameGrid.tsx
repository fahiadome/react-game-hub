import useGames from '@/hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import Loading from '../Common/Loading';

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12];

  return (
    <div>
      {error && <p>{error}</p>}

      {
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px">
          {isLoading && skeletons.map((skeleton) => <Loading key={skeleton} />)}

          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      }
    </div>
  );
};
export default GameGrid;
