import { Button, Menu, MenuItem, Portal } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

// interface SortSelectorProps {
//   onSelectSort: (sort: string) => void;
//   selectedSort: string | null;
// }

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="lg">
          Sort by
          <FaChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="released">Release date</MenuItem>
            <MenuItem value="metacritic">Popularity</MenuItem>
            <MenuItem value="rating">Average rating</MenuItem>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
