import { useEffect } from 'react';
import {
  Box,
  Center,
  Button,
  VStack,
  Text,
  Image,
  Stack,
} from '@chakra-ui/react';

const Settings = ({ fullUserData }) => {
  useEffect(() => {
    document.title = 'Settings | TuneTidy';
  }, []);

  const Support = 'https://support.spotify.com/us/';
  const Account = 'https://www.spotify.com/us/account/overview/';

  return (
    <Center>
      <Box // Larger box settings
        rounded={'sm'}
        my={3}
        mx={[0, 3]}
        p={'4rem'} // padding controls size of box
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={'6px 6px 0 black'}>
        
        <Stack
          direction={['column', 'row']}
          alignItems="center"
          justifyContent="center"
          spacing={10}>
          <VStack spacing={1}>
            <Image
              boxSize="150px"
              borderRadius="full"
              src={fullUserData && fullUserData.images.length ? fullUserData.images[0].url : ''}
              alt={`${fullUserData.display_name}'s profile image`}
            />
            <Text fontSize="2xl">{fullUserData.display_name}</Text>
            <Text fontSize="md">Followers: {fullUserData.followers.total}</Text>
          </VStack>
          <VStack spacing={5}>
            <Button href={Account} as={'a'} target="_blank">
              Spotify Account
            </Button>
            <Button href={Support} as={'a'} target="_blank">
              Spotify Support
            </Button>
          </VStack>
        </Stack>
      </Box>
    </Center>
  );
};

export default Settings;
