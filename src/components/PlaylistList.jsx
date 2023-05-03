import { Stack, VStack, useMediaQuery } from '@chakra-ui/react';
import PlaylistCard from './PlaylistCard';

export default function PlaylistList({ userName, playlists, setSelection }) {
  const [isMobile] = useMediaQuery("(max-width: 680px)");

  if (!isMobile) return (
    // center list in container
    <Stack direction={{ base: 'wrap', md: 'wrap' }} flexWrap='wrap'>
      {playlists?.items.map(playlist => (
        (playlist.owner.display_name === userName && playlist.collaborative !== true) && (
          <PlaylistCard key={playlist.id} playlist={playlist} setSelection={setSelection} />
        )
      ))}
    </Stack>
  );
  else return (
    // center list in container
    <VStack align={'left'} mt={5}>
      {playlists?.items.map(playlist => (
        (playlist.owner.display_name === userName && playlist.collaborative !== true) && (
          <PlaylistCard key={playlist.id} playlist={playlist} setSelection={setSelection} />
        )
      ))}
    </VStack>
  );
}

