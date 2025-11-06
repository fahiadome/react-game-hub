import { HStack, Image, Link, Spacer, Text } from '@chakra-ui/react';
import logo from '../../assets/Logo/logo.webp';
const NavBar = () => {
  return (
    <HStack as="nav" justify="space-between" align="center" p={4} bg="coral">
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
        <Link fontSize="16px" fontWeight="bold" color="white" href="/">
          Games
        </Link>
        <Link fontSize="16px" fontWeight="bold" color="white" href="/about">
          News
        </Link>
        <Link fontSize="16px" fontWeight="bold" color="white" href="/contact">
          Reviews
        </Link>
        <Link fontSize="16px" fontWeight="bold" color="white" href="/Login">
          Login
        </Link>
        <Link fontSize="16px" fontWeight="bold" color="white" href="/Register">
          Register
        </Link>
        <Link fontSize="16px" fontWeight="bold" color="white" href="/Logout">
          Logout
        </Link>
      </HStack>
    </HStack>
  );
};

export default NavBar;
