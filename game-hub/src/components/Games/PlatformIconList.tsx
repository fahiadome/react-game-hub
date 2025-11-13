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

  if (!platforms || platforms.length === 0) {
    return null;
  }

  return (
    <HStack gap="2" role="list" aria-label="Platforms">
      <Text>Platforms: </Text>

      {platforms.map((platform) => {
        if (!platform?.slug || !iconMap[platform.slug]) {
          return null;
        }
        return (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color="gray.500"
            size="lg"
            aria-label={platform.name || platform.slug}
            role="img"
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
