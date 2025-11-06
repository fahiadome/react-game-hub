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
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show when={{ lg: true }}>
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
};

export default App;
