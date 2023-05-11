// Functional PlaylistCard component
//Source template: https://chakra-templates.dev/components/cards

import {
  Box,
  Heading,
  Text,
  Center,
  LinkBox,
  LinkOverlay,
  Spinner,
  Image,
  useMediaQuery,
  HStack,
  Avatar,
  Divider,
  Card,
} from '@chakra-ui/react';

export default function PlaylistCard({ playlist, setSelection }) {
  const [isMobile] = useMediaQuery("(max-width: 680px)");

  if (!isMobile) return (
    <LinkBox key={playlist.id}>
      <Center py={2}>
        <Box
          w="33ch"
          rounded={'sm'}
          my={3}
          mx={[0, 3]}
          overflow={'hidden'}
          bg="white"
          border={'1px'}
          borderColor="black"
          boxShadow={'6px 6px 0 black'}>

          <Box borderBottom={'1px'} borderColor="black">
            <LinkOverlay onClick={() => setSelection(playlist)} sx={{ cursor: 'pointer' }} role="button">
              <Image
                src={playlist.images[0]?.url}
                fallback={
                  <>
                    {playlist.images.length !== 0 ? (
                      <Center p={100}><Box>
                        <Spinner />
                      </Box></Center>
                    ) : (
                      <Image src='/playlist_placeholder.png' alt='No cover art' w={'full'} h={'full'} />
                    )}
                  </>
                }
                alt={playlist.name + ' image'}
                roundedTop={'sm'}
                objectFit="cover"
                h="full"
                w="full"
              />
            </LinkOverlay>
          </Box>
          <Card p={4} shadow={''} m={0}>
            <Heading color={'black'} fontSize={'2xl'}>
              {playlist.name}
            </Heading>
            {playlist.description && (
              <Text color={'gray.500'}>
                {playlist.description}
              </Text>
            )}
            <Image
              src={'/Spotify_Icon_CMYK_Black.png'}
              alt='Spotify logo'
              boxSize={'16px'}
              position={'absolute'}
              top={2}
              right={2}
            />
          </Card>
        </Box>
      </Center>
    </LinkBox>
  )
  else return (

    <LinkBox key={playlist.id} m={'0px !important'}>
      <Divider />
      <Box p={2}>
        <HStack>
          <LinkOverlay onClick={() => setSelection(playlist)} sx={{ cursor: 'pointer' }} role="button">
            <Avatar icon={
              <>
                {playlist.images.length !== 0 ? (
                  <Center p={100}><Box>
                    <Spinner />
                  </Box></Center>
                ) : (
                  <Image src='/playlist_placeholder.png' alt='No cover art' w={'full'} h={'full'} />
                )}
              </>
            } borderRadius={3} size={'md'} src={playlist.images[0]?.url} />
          </LinkOverlay>
          <Heading color={'black'} fontSize={'lg'}>
            {playlist.name}
          </Heading>
        </HStack>
        {playlist.description && (
          <Text color={'gray.500'} pt={2} fontSize={'md'}>
            {playlist.description}
          </Text>
        )}
      </Box>
    </LinkBox>



  );
}