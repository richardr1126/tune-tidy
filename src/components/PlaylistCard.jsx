//Source template: https://chakra-templates.dev/components/cards

import {
  Box,
  Heading,
  Text,
  Img,
  Center,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

export default function PlaylistCard({ playlist, setSelection }) {
  return (
    <LinkBox key={playlist.id}>
      <Center py={6}>
        <Box
          w="xs"
          rounded={'sm'}
          my={5}
          mx={[0, 5]}
          overflow={'hidden'}
          bg="white"
          border={'1px'}
          borderColor="black"
          boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
          <Box borderBottom={'1px'} borderColor="black">
            <LinkOverlay onClick={() => setSelection(playlist)} sx={{ cursor: 'pointer' }} role="button">
              <Img
                src={playlist.images[0].url}
                alt={playlist.name + ' image'}
                roundedTop={'sm'}
                objectFit="cover"
                h="full"
                w="full"
              />
            </LinkOverlay>
          </Box>
          <Box p={4}>
            <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
              {playlist.name}
            </Heading>
            {playlist.description && (
              <Text color={'gray.500'} noOfLines={2}>
                {playlist.description}
              </Text>
            )}
          </Box>
        </Box>
      </Center>
    </LinkBox>
  );
}