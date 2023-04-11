//Source template: https://chakra-templates.dev/navigation/navbar

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Image,
  Heading,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home', 'Playlists'];

const NavLink = ({ children, href, onClick }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}
    onClick={(e) => {
      if (onClick) {
        onClick();
      }
    }}>
    {children}
  </Link>
);

const NavBar = ({ switchPage, fullUserData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex alignItems='center'>
            <Image boxSize='3ch' src='/large-logo.png' alt='Tune Tidy Logo' />
            <Heading as='h1' fontSize='2ch' sx={{ padding: '0ch 1ch 0ch 0.5ch' }}>TuneTidy</Heading>
            <HStack fontSize='1.75ch' alignItems="center" flexGrow={1} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink
                  key={link}
                  href={'#'+link.toLowerCase()}
                  onClick={() => {
                    switchPage(link.toLowerCase());
                  }}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </Flex>
          <Flex alignItems={'center'}>
            {fullUserData && (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    name={fullUserData.display_name}
                    size='sm'
                    marginRight={'1ch'}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link}
                  onClick={() => {
                    switchPage(link.toLowerCase());
                    onClose();
                  }}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;