import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/Layout/NavBar';
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav" bg="coral">
        <NavBar />
      </GridItem>

      <Show when={{ lg: true }}>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
