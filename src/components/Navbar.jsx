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
  Alert,
  AlertDescription,
  CloseButton,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SettingsIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Links = ['Stats', 'Playlist Editor'];

const IOS_APP_URL = "https://apps.apple.com/us/app/tunetidy/id6449473280";

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

  let closedAlertTimes = localStorage.getItem('closedAlertTimes');
  if (closedAlertTimes === null) {
    closedAlertTimes = 0;
    localStorage.setItem('closedAlertTimes', '0');
  }

  const [showAlert, setShowAlert] = useState(closedAlertTimes < 3);

  const handleAlertClose = () => {
    let closedAlertTimes = localStorage.getItem('closedAlertTimes');
    closedAlertTimes = Number(closedAlertTimes) + 1;
    localStorage.setItem('closedAlertTimes', closedAlertTimes.toString());

    setShowAlert(false);
  };

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
      {showAlert && (
        <Alert status="info" variant="solid" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" bgColor={'#2f68f2'}>
          <Heading size={'md'} mb={3}>Get access to AI Playlist Cover Art Generation on the app!</Heading>
          <AlertDescription maxWidth="sm">
            <Box ml={5}>
              <Link href={IOS_APP_URL} isExternal>
                <Button rightIcon={
                  <>
                    <Image mr={1} boxSize="30px" src='/large-logo.png' alt='' />
                    <Image boxSize="30px" src='/app-store-logo-small.png' alt='' />
                  </>
                } colorScheme="blackAlpha" variant="solid" px={'13px'} py={'22px'}>
                  <Text>Download now</Text>
                </Button>
              </Link>
            </Box>
            <CloseButton position="absolute" right="8px" top="8px" onClick={handleAlertClose} />
          </AlertDescription>
        </Alert>
      )}


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

            </HStack>
          </Flex>

          <Flex alignItems={'center'}>
            {(!isMobile && !showAlert) && (<Box mr={5}>
              <Link href={IOS_APP_URL} isExternal>
                <Button width={'100%'} rightIcon={<>
                  <Image mr={1} boxSize="25px" src='/large-logo.png' alt='' />
                  <Image boxSize="25px" src='/app-store-logo-small.png' alt='' />
                </>} bgColor={'#2f68f2'} textColor={'white'} variant="solid">
                  <Text>Download now</Text>
                </Button>
              </Link>
            </Box>)}
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
              <Box>
                <Link href={IOS_APP_URL} isExternal>
                  <Button width={'100%'} rightIcon={<>
                    <Image mr={1} boxSize="25px" src='/large-logo.png' alt='' />
                    <Image boxSize="25px" src='/app-store-logo-small.png' alt='' />
                  </>} bgColor={'#2f68f2'} textColor={'white'} variant="solid">
                    <Text>Download now</Text>
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;
