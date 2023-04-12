import TopArtistsWidget from "./TopArtistsWidget";
//import TopTracksWidget from "./TopTracksWidget";

class WidgetFactory {
  createWidget(type) {
    switch (type) {
      case 'topArtists':
        return (<TopArtistsWidget key="topArtists" />);
      // case 'topTracks':
      //   return (<TopTracksWidget key="topTracks" />);
      // Add album widget here
      default:
        return null;
    }
  }
}

export default WidgetFactory;
