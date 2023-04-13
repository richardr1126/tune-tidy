import { Component } from 'react';
import { Container } from '@chakra-ui/react';
import WidgetFactory from '../components/Widgets/WidgetFactory';

class DataPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullUserData: this.props.fullUserData,
      artistsData: this.props.artistsData,
    };
    this.widgetFactory = new WidgetFactory();
  }

  componentDidMount() {
    document.title = 'Stats | TuneTidy';
  }


  render() {
    const { artistsData} = this.state;
    

    const topArtistsWidget = this.widgetFactory.createWidget('topArtists', artistsData);
    //const topTracksWidget = this.widgetFactory.createWidget('topTracks');

    return (
      <Container maxW='container.xl' sx={{ padding: '1ch' }}>
        {topArtistsWidget}
        {/* {topTracksWidget} */}
      </Container>
    );
  }
}

export default DataPage;