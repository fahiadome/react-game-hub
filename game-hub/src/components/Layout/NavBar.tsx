import { HStack, Image, Link, Spacer, Text } from '@chakra-ui/react';

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
    >
      <HStack gap={2} role="banner">
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
          fontSize="2xl"
          fontWeight="bold"
          cursor="pointer"
          aria-label="Game Hub Home"
        >
          Game Hub
        </Text>
      </HStack>

      <SearchInput onSearch={onSearch} />
      <Spacer />
      <HStack role="menubar" aria-label="Navigation menu">
        <Link
          fontSize="16px"
          fontWeight="bold"
          href="/"
          role="menuitem"
          aria-label="Games"
        >
          Games
        </Link>
        <Link
          fontSize="16px"
          fontWeight="bold"
          href="/about"
          role="menuitem"
          aria-label="News"
        >
          News
        </Link>
        <Link
          fontSize="16px"
          fontWeight="bold"
          href="/contact"
          role="menuitem"
          aria-label="Reviews"
        >
          Reviews
        </Link>
        <Link
          fontSize="16px"
          fontWeight="bold"
          href="/Login"
          role="menuitem"
          aria-label="Login"
        >
          Login
        </Link>
        <Link
          fontSize="16px"
          fontWeight="bold"
          href="/Register"
          role="menuitem"
          aria-label="Register"
        >
          Register
        </Link>
        <Link
          fontSize="16px"
          fontWeight="bold"
          href="/Logout"
          role="menuitem"
          aria-label="Logout"
        >
          Logout
        </Link>
        <Theme />
      </HStack>
    </HStack>
  );
};

export default NavBar;
