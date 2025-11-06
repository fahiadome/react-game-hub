import { HStack, Image, Link, Spacer, Text } from '@chakra-ui/react';

import logo from '../../assets/Logo/logo.webp';
import Theme from '../ui/theme';
const NavBar = () => {
  return (
    <HStack as="nav" justify="space-between" align="center" p={4}>
      <Image
        src={logo}
        alt="Game Hub"
        boxSize="50px"
        objectFit="cover"
        cursor="pointer"
      />
      <Text fontSize="2xl" fontWeight="bold" cursor="pointer">
        Game Hub
      </Text>

      <Spacer />
      <HStack>
        <Link fontSize="16px" fontWeight="bold" href="/">
          Games
        </Link>
        <Link fontSize="16px" fontWeight="bold" href="/about">
          News
        </Link>
        <Link fontSize="16px" fontWeight="bold" href="/contact">
          Reviews
        </Link>
        <Link fontSize="16px" fontWeight="bold" href="/Login">
          Login
        </Link>
        <Link fontSize="16px" fontWeight="bold" href="/Register">
          Register
        </Link>
        <Link fontSize="16px" fontWeight="bold" href="/Logout">
          Logout
        </Link>
        <Theme />
      </HStack>
    </HStack>
  );
};

export default NavBar;
