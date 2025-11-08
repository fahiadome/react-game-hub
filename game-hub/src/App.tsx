import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/Layout/NavBar';
import GameGrid from './components/Games/GameGrid';
import GenreList from './components/Genres/GenreList';
import { useState } from 'react';
import type { Genre } from './hooks/UseGenres';
import PlatformSelector from './components/Games/PlatformSelector';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <NavBar />
      </GridItem>

      <GridItem paddingX="5px" area="aside">
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
      </GridItem>

      <GridItem area="main">
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
