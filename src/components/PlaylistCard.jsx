import { LinkBox, LinkOverlay, CardBody, Card, Heading, Image, Stack, Text } from '@chakra-ui/react';

export default function PlaylistCard({ playlist, setSelection }) {
  return (
    <LinkBox key={playlist.id} sx={{ margin: '1ch' }}>
      <Card maxW='40ch'>
        <CardBody>
          <LinkOverlay onClick={() => setSelection(playlist)} sx={{cursor: 'pointer'}} role='button'>
            <Image
              src={playlist.images[0].url}
              alt={playlist.name + ' image'}
              borderRadius='lg'
            />
          </LinkOverlay>

          <Stack mt='6' spacing='3'>
            <Heading size='md'>
              {playlist.name}
            </Heading>
            {playlist.description && (
              <Text>
                {playlist.description}
              </Text>
            )}
          </Stack>
        </CardBody>
      </Card>
    </LinkBox>
  );
}