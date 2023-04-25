import { Component } from 'react';
import { Wrap, WrapItem, Breadcrumb, BreadcrumbItem, Button, Center } from '@chakra-ui/react';
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

  renderBreadcrumb() {
    return (
      <Center mt={5}>
        <Breadcrumb spacing={1} separator=" " fontSize="sm" mb="1em">
          <BreadcrumbItem>
            <Button as="a" href="#topArtists" size={'xs'}>
              Top Artists
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button as="a" href="#topTracks" size={'xs'}>
              Top Tracks
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button as="a" href="#topAlbums" size={'xs'}>
              Top Albums
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button as="a" href="#topGenres" size={'xs'}>
              Top Genres
            </Button>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>
    );
  }


  render() {
    const { artistsData, tracksData } = this.state;

    const topArtistsWidget = this.widgetFactory.createWidget('topArtists', artistsData, this.props.obs);
    const topTracksWidget = this.widgetFactory.createWidget('topTracks', tracksData, this.props.obs);
    const topGenresWidget = this.widgetFactory.createWidget('topGenres', artistsData, this.props.obs);
    const topAlbumsWidget = this.widgetFactory.createWidget('topAlbums', tracksData, this.props.obs);

    return (
      <>
        {this.renderBreadcrumb()}
        <Wrap justify={'center'}>
          <WrapItem id="topArtists">
            {topArtistsWidget}
          </WrapItem>
          <WrapItem id="topTracks">
            {topTracksWidget}
          </WrapItem>
          <WrapItem id="topAlbums">
            {topAlbumsWidget}
          </WrapItem>
          <WrapItem id="topGenres">
            {topGenresWidget}
          </WrapItem>
        </Wrap>
      </>
    );
  }
}

export default DataPage;
