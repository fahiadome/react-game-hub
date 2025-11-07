import { HStack, Icon, Text } from '@chakra-ui/react';
import type { Platform } from '@/hooks/useGames';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import type { IconType } from 'react-icons';

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    windows: FaWindows,
    Playstation: FaPlaystation,
    xbox: FaXbox,
    apple: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack gap="2">
      <Text>Platforms: </Text>

      {platforms.map(
        (platform) =>
          iconMap[platform.slug] && (
            <Icon
              key={platform.id}
              as={iconMap[platform.slug]}
              color="gray.500"
              size="lg"
            />
          )
      )}
    </HStack>
  );
};

export default PlatformIconList;
