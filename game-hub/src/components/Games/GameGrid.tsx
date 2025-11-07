import useGames from '@/hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import Loading from '../Common/Loading';

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <Loading />}
      {!isLoading && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};
export default GameGrid;
