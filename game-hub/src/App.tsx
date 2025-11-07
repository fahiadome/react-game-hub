import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/Layout/NavBar';
import GameGrid from './components/Games/GameGrid';
import GenreList from './components/Genres/GenreList';
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem padding="10px" area="aside">
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
