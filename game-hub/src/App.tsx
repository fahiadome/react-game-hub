import { Grid, GridItem, HStack } from '@chakra-ui/react';
import NavBar from './components/Layout/NavBar';
import GameGrid from './components/Games/GameGrid';
import GenreList from './components/Genres/GenreList';
import { useState } from 'react';
import type { Genre } from './hooks/UseGenres';
import PlatformSelector from './components/Games/PlatformSelector';
import type { Platform } from './hooks/usePlatforms';
import SortSelector from './components/Games/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchQuery: string;
}
const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar onSearch={(searchQuery) => setGameQuery({ ...gameQuery, searchQuery })} />
      </GridItem>

      <GridItem paddingX="5px" area="aside">
        <GenreList
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>

      <GridItem area="main">
        <HStack gap={5} paddingBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />

          <SortSelector
            onSelectSortOrder={(sort) =>
              setGameQuery({ ...gameQuery, sortOrder: sort })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
