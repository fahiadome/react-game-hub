import { SimpleGrid, VStack } from '@chakra-ui/react';
import GameCard from './GameCard';
import Loading from '../Common/Loading';
import GameCardContainer from './GameCardContainer';
import EmptyState from './EmptyState';
import ApiError from '../Common/ApiError';
import Pagination from './Pagination';
import type { GameQuery } from '@/App';
import useGames from '@/hooks/useGames';

interface GameGridProps {
  gameQuery: GameQuery;
  onPageChange: (page: number) => void;
}

const GameGrid = ({ gameQuery, onPageChange }: GameGridProps) => {
  const { data, error, isLoading, retry } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const pageSize = 20;
  const totalPages = data ? Math.ceil(data.count / pageSize) : 0;

  if (error) {
    return <ApiError error={error} onRetry={retry} />;
  }

  return (
    <VStack gap={4} align="stretch">
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

        {!isLoading && data?.results.length === 0 && <EmptyState />}

        {data?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>

      {!isLoading && data && data.results.length > 0 && (
        <Pagination
          currentPage={gameQuery.page || 1}
          totalPages={totalPages}
          totalCount={data.count}
          onPageChange={onPageChange}
        />
      )}
    </VStack>
  );
};
export default GameGrid;
