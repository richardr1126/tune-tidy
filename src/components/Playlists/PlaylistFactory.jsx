import PlaylistEditor from "./PlaylistEditor";


class PlaylistFactory {
  createPlaylist(type, data) {
    switch (type) {
      case 'playlistTracks':
        return (<PlaylistEditor key="playlistTracks" data={data} />);
      default:
        return null;
    }
  }
}

export default PlaylistFactory;
