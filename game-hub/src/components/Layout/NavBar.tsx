import { HStack, Image, Link, Text } from '@chakra-ui/react';

import logo from '../../assets/Logo/logo.webp';
import Theme from '../ui/theme';
import SearchInput from '../Common/SearchInput';
const NavBar = ({ onSearch }: { onSearch: (searchQuery: string) => void }) => {
  return (
    <HStack
      as="nav"
      role="navigation"
      aria-label="Main navigation"
      justify="space-between"
      align="center"
      p={4}
      gap={4}
      flexWrap={{ base: 'wrap', lg: 'nowrap' }}
    >
      <HStack gap={2} role="banner" flexShrink={0}>
        <Image
          src={logo}
          alt="Game Hub Logo"
          boxSize="50px"
          objectFit="cover"
          cursor="pointer"
          role="img"
        />
        <Text
          whiteSpace="nowrap"
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight="bold"
          cursor="pointer"
          aria-label="Game Hub Home"
        >
          Game Hub
        </Text>
      </HStack>

      <SearchInput onSearch={onSearch} />
      <HStack
        role="menubar"
        aria-label="Navigation menu"
        flexShrink={0}
        gap={2}
      >
        <Link
          fontSize={{ base: '14px', md: '16px' }}
          fontWeight="bold"
          href="/"
          role="menuitem"
          aria-label="Games"
          whiteSpace="nowrap"
        >
          Games
        </Link>
        <Link
          fontSize={{ base: '14px', md: '16px' }}
          fontWeight="bold"
          href="/about"
          role="menuitem"
          aria-label="News"
          whiteSpace="nowrap"
          display={{ base: 'none', md: 'block' }}
        >
          News
        </Link>
        <Link
          fontSize={{ base: '14px', md: '16px' }}
          fontWeight="bold"
          href="/contact"
          role="menuitem"
          aria-label="Reviews"
          whiteSpace="nowrap"
          display={{ base: 'none', md: 'block' }}
        >
          Reviews
        </Link>
        <Link
          fontSize={{ base: '14px', md: '16px' }}
          fontWeight="bold"
          href="/Login"
          role="menuitem"
          aria-label="Login"
          whiteSpace="nowrap"
        >
          Login
        </Link>
        <Link
          fontSize={{ base: '14px', md: '16px' }}
          fontWeight="bold"
          href="/Register"
          role="menuitem"
          aria-label="Register"
          whiteSpace="nowrap"
          display={{ base: 'none', lg: 'block' }}
        >
          Register
        </Link>
        <Link
          fontSize={{ base: '14px', md: '16px' }}
          fontWeight="bold"
          href="/Logout"
          role="menuitem"
          aria-label="Logout"
          whiteSpace="nowrap"
          display={{ base: 'none', lg: 'block' }}
        >
          Logout
        </Link>
        <Theme />
      </HStack>
    </HStack>
  );
};

export default NavBar;
