import { Grid, GridItem, HStack } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import NavBar from './components/Layout/NavBar';
import GameGrid from './components/Games/GameGrid';
import GenreList from './components/Genres/GenreList';
import { useState, useEffect } from 'react';
import type { Genre } from './hooks/useGenres';
import PlatformSelector from './components/Games/PlatformSelector';
import type { Platform } from './hooks/usePlatforms';
import SortSelector from './components/Games/SortSelector';
import GameHeading from './components/Games/GameHeading';
import SectionErrorFallback from './components/Common/SectionErrorFallback';
import { logError } from './utils/errorLogger';
import useDebounce from './hooks/useDebounce';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchQuery: string;
  page: number;
}
const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    page: 1,
  } as GameQuery);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    setGameQuery((prev) => {
      if (debouncedSearchQuery !== prev.searchQuery) {
        return { ...prev, searchQuery: debouncedSearchQuery, page: 1 };
      }
      return prev;
    });
  }, [debouncedSearchQuery]);

  const finalGameQuery = {
    ...gameQuery,
    searchQuery: debouncedSearchQuery,
    page: gameQuery.page || 1,
  };

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchQuery) => {
            setSearchQuery(searchQuery);
          }}
        />
      </GridItem>

      <GridItem paddingX="5px" area="aside">
        <ErrorBoundary
          FallbackComponent={SectionErrorFallback}
          onError={(error, errorInfo) => {
            logError(error, {
              componentStack: errorInfo.componentStack ?? undefined,
              errorBoundary: 'GenreList',
            });
          }}
        >
          <GenreList
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre, page: 1 })
            }
            selectedGenre={gameQuery.genre}
          />
        </ErrorBoundary>
      </GridItem>

      <GridItem area="main">
        <HStack gap={5} paddingBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform, page: 1 })
            }
          />

          <SortSelector
            onSelectSortOrder={(sort) =>
              setGameQuery({ ...gameQuery, sortOrder: sort, page: 1 })
            }
            sortOrder={gameQuery.sortOrder}
          />
          <GameHeading gameQuery={finalGameQuery} />
        </HStack>

        <ErrorBoundary
          FallbackComponent={SectionErrorFallback}
          onError={(error, errorInfo) => {
            logError(error, {
              componentStack: errorInfo.componentStack ?? undefined,
              errorBoundary: 'GameGrid',
            });
          }}
        >
          <GameGrid
            gameQuery={finalGameQuery}
            onPageChange={(page) => setGameQuery({ ...gameQuery, page })}
          />
        </ErrorBoundary>
      </GridItem>
    </Grid>
  );
};

export default App;
