import { Stack } from '@chakra-ui/react';
import PlaylistCard from './PlaylistCard';

export default function PlaylistList({ playlists, setSelection }) {
  return (
    // center list in container
    <Stack spacing='4' direction={{ base: 'wrap', md: 'wrap' }} flexWrap='wrap' justifyContent={'center'}>
      {playlists?.items.map(playlist => (
        <PlaylistCard key={playlist.id} playlist={playlist} setSelection={setSelection} />
      ))}
    </Stack>
  );
}
