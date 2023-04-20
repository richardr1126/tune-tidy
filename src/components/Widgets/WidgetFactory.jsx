import TopArtistsWidget from "./TopArtistsWidget";
import TopTracksWidget from "./TopTracksWidget";
import TopGenresWidget from "./TopGenresWidget";
import TopAlbumsWidget from "./TopAlbumsWidget";


class WidgetFactory {
  createWidget(type, data, obs) {
    switch (type) {
      case 'topArtists':
        return (<TopArtistsWidget key="topArtists" data={data} obs={obs} />);
      case 'topTracks':
        return (<TopTracksWidget key="topTracks" data={data} obs={obs} />);
      case 'topGenres':
        return (<TopGenresWidget key="topGenres" data={data} obs={obs} />);
      case 'topAlbums':
        return (<TopAlbumsWidget key="topAlbums" data={data} obs={obs} />);
      default:
        return null;
    }
  }
}

export default WidgetFactory;
