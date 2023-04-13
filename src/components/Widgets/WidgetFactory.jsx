import TopArtistsWidget from "./TopArtistsWidget";
//import TopTracksWidget from "./TopTracksWidget";

class WidgetFactory {
  createWidget(type, data) {
    switch (type) {
      case 'topArtists':
        return (<TopArtistsWidget key="topArtists" data={data} />);
      // case 'topTracks':
      //   return (<TopTracksWidget key="topTracks" />);
      // Add album widget here
      default:
        return null;
    }
  }
}

export default WidgetFactory;
