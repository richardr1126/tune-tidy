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
    const isMobile = window.innerWidth < 768;

    return (
      <Center mt={5}>
        <Breadcrumb spacing={1} separator=" " fontSize="sm" mb="1em">
          <BreadcrumbItem>
            <Button as="a" href="#topArtists" size={isMobile ? 'xs' : 'sm'}>
              Top Artists
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button as="a" href="#topTracks" size={isMobile ? 'xs' : 'sm'}>
              Top Tracks
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button as="a" href="#topAlbums" size={isMobile ? 'xs' : 'sm'}>
              Top Albums
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button as="a" href="#topGenres" size={isMobile ? 'xs' : 'sm'}>
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

    const isMobile = window.innerWidth < 768;

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
        {isMobile && (<Center m={5}>
          <Button as="a" href="#nav" size={'md'}>
            Return to Top
          </Button>
        </Center>)}

      </>
    );
  }
}

export default DataPage;
