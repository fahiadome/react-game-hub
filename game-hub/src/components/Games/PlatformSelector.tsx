import { Button, Menu, MenuItem, Portal, Spinner } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import usePlatforms, { type Platform } from '@/hooks/usePlatforms';
import ApiError from '../Common/ApiError';

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { data, isLoading, error, retry } = usePlatforms();

  if (error) {
    return <ApiError error={error} onRetry={retry} compact />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="lg">
          {selectedPlatform?.name || 'Platforms'}
          <FaChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <MenuItem
                key={platform.id}
                value={platform.name}
                onClick={() => onSelectPlatform(platform)}
              >
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
