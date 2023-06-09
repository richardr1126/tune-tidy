// Functional TracksList component
import {
  Card,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useMediaQuery,
  VStack,
  Text,
  HStack,
  Spinner,
  Avatar,
  Divider,
  Container,
  Image,
  Spacer,
  IconButton,
} from '@chakra-ui/react';


export default function DisplayTracks({ tracks }) {
  // Create a CSS-in-JS object for the data cell styles
  const dataCellStyle = {
    padding: '0.5rem',
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    maxWidth: '30rem',
  };

  // Check if the screen is mobile, this will auto update if the screen is resized
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {!isMobile && (
        <Card mt={3} key='table_card'>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th isNumeric sx={dataCellStyle}>#</Th>
                  <Th sx={dataCellStyle}>Track</Th>
                  <Th sx={dataCellStyle}>Album</Th>
                  <Th sx={dataCellStyle}>Artist</Th>
                  <Th minW={'16px'}></Th>
                </Tr>
              </Thead>
              <Tbody key={'table_body'}>
                {tracks.map((track) => (
                  (
                    <Tr key={track.id + track.added_at}>
                      <Td isNumeric sx={dataCellStyle}>{track.original_position}</Td>
                      <Td fontWeight={'bold'} sx={dataCellStyle}>
                        <HStack>
                          <Avatar borderRadius={1} size={'sm'} src={track?.album?.images[0]?.url} icon={
                            <>
                              {track.album.images.length !== 0 ? (
                                <Spinner />
                              ) : (
                                <Avatar borderRadius={1} size={'sm'} src='/playlist_placeholder.png' alt='No cover art' />
                              )}
                            </>
                          } sx={{ margin: '0px' }} />
                          <Text>{track.name}</Text>
                        </HStack>
                      </Td>
                      <Td sx={dataCellStyle}>{track.album.name}</Td>
                      <Td fontWeight={'black'} sx={dataCellStyle}>{track.artists[0].name}</Td>
                      <Td sx={dataCellStyle}> {/* Added for Spotify Logo */}
                        <IconButton
                          backgroundColor={'#1DB954'}
                          aria-label='View playlist on Spotify'
                          icon={<Image src={'/Spotify_Icon_CMYK_Black.png'} boxSize={'20px'} fallback={<Spinner size={'xs'}></Spinner>} />}
                          size={'sm'}
                          ml={2}
                          onClick={() => window.open(track?.uri)}
                          title={'View track on Spotify'}
                        />
                      </Td>
                    </Tr>
                  )
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
      )}
      {isMobile && (
        <VStack align={'left'} mt={2}>
          {tracks.map((track) => (
            (
              <Container sx={{ padding: '0px', margin: '0px', cursor: 'pointer' }} as={'a'} key={track?.id + track?.added_at} onClick={() => window.open(track?.uri)}>
                <Divider />
                <HStack spacing={2} py={1}>
                  <Avatar borderRadius={2} size={'md'} src={track?.album?.images[0]?.url} icon={
                    <>
                      {track.album.images.length !== 0 ? (
                        <Spinner />
                      ) : (
                        <Avatar borderRadius={1} size={'md'} src='/playlist_placeholder.png' alt='No cover art' />
                      )}
                    </>
                  } />
                  <Text as={'h3'} fontWeight='bold' fontSize={'md'}>{track.original_position}.</Text>
                  <VStack spacing={0} align={'left'} ml={'0.5rem !important'}>
                    <HStack spacing={0}>
                      <Text as={'h3'} fontWeight="black" fontSize={'md'}>{track.name}</Text>
                    </HStack>
                    <Text as={'h3'} fontSize={'sm'} fontWeight={'semibold'}>{track.album.name}</Text>
                    <Text as={'h3'} fontSize={'sm'}>{track.artists.map((artist) => artist.name).join(', ')}</Text>
                  </VStack>
                  <Spacer />
                  <Image src={'/Spotify_Icon_CMYK_Black.png'} alt='Spotify logo' boxSize={'16px'} fallback={<Spinner size={'xs'}></Spinner>} title='View track on Spotify' />
                </HStack>
              </Container>
            )
          ))}
        </VStack>
      )}
    </>
  );
}
