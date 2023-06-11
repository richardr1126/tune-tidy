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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverArrow,
  useMediaQuery,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SettingsIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Links = ['Stats', 'Playlist Editor'];

const IOS_APP_URL = "https://apps.apple.com/us/app/tunetidy/id6449473280";  // Replace with your app's App Store URL

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
  const [isMobile] = useMediaQuery('(max-width: 680px)');

  // Load the value from localStorage
  const storedPopoverState = localStorage.getItem('hasPopoverBeenClosed') === 'true';
  const [hasPopoverBeenClosed, setHasPopoverBeenClosed] = useState(storedPopoverState);

  const handlePopoverClose = () => {
    setHasPopoverBeenClosed(true);
    localStorage.setItem('hasPopoverBeenClosed', 'true');
  };

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} id='nav'>
        <Flex h={'8ch'} alignItems={'center'} justifyContent={'space-between'}>

          <Popover isOpen={(!isMobile) ? false : !hasPopoverBeenClosed} onClose={handlePopoverClose} closeOnBlur={false}>
            <PopoverTrigger>
              <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>
                Click here to get to the Playlist Editor
                <PopoverCloseButton />
              </PopoverHeader>
            </PopoverContent>
          </Popover>

          <Flex alignItems='center'>
            <Image boxSize='3ch' src='/large-logo.png' alt='' />
            <Heading as='h1' fontSize='2ch' sx={{ padding: '0ch 1ch 0ch 0.5ch' }}>TuneTidy</Heading>

            <HStack fontSize='1.75ch' alignItems="center" flexGrow={1} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink
                  key={link}
                  href={'#' + link.toLowerCase()}
                  onClick={() => {
                    switchPage(link.toLowerCase());
                  }}>
                  {link}
                </NavLink>
              ))}
              <Box ml={5}>
                <Link href={IOS_APP_URL} isExternal>
                  <Button leftIcon={<Image boxSize="4" src='/large-logo.png' alt='' />} colorScheme="teal" variant="solid">
                    Download on the App Store
                  </Button>
                </Link>
              </Box>
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
                  {fullUserData.images[0]?.url && (<Avatar
                    name={fullUserData.display_name}
                    src={fullUserData.images[0]?.url}
                    size='md'
                  />
                  )}
                  {(fullUserData.images.length === 0) && (
                    <Avatar
                      name={fullUserData.display_name}
                      size='md'
                    />
                  )}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => switchPage("settings")} as={'a'} href='#settings'>
                    <SettingsIcon mr={2} />
                    Settings
                  </MenuItem>
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
                  href={'#' + link.toLowerCase()}
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
