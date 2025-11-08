import useGames from '@/hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import Loading from '../Common/Loading';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      {error && <p>{error}</p>}

      {
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5 }}
          padding="6px"
          gap={2}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <Loading />
              </GameCardContainer>
            ))}

          {data?.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      }
    </div>
  );
};
export default GameGrid;
