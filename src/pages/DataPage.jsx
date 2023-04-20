import { Component } from 'react';
import { Center, Wrap } from '@chakra-ui/react';
import WidgetFactory from '../components/Widgets/WidgetFactory';

class DataPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullUserData: this.props.fullUserData,
      artistsData: this.props.artistsData,
      tracksData: this.props.tracksData,
    };
    this.widgetFactory = new WidgetFactory();
  }

  componentDidMount() {
    document.title = 'Stats | TuneTidy';
  }


  render() {
    const { artistsData, tracksData } = this.state;

    const topArtistsWidget = this.widgetFactory.createWidget('topArtists', artistsData, this.props.obs);
    const topTracksWidget = this.widgetFactory.createWidget('topTracks', tracksData, this.props.obs);

    return (
      <Center maxW={'container.2xl'} m={5}>
        <Wrap spacing={5}>
          {topArtistsWidget}
          {topTracksWidget}
        </Wrap>
      </Center>
    );
  }
}

export default DataPage;