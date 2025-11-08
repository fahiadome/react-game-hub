import { Button, Menu, MenuItem, Portal, Spinner } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import usePlatforms from '@/hooks/usePlatforms';
const PlatformSelector = () => {
  const { data, isLoading, error } = usePlatforms();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="lg">
          Platforms
          <FaChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <MenuItem key={platform.id} value={platform.name}>
                {platform.name}
              </MenuItem>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
