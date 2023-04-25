// Importing necessary dependencies and components
import React from 'react';
import Widget from './Widget';
import {
  Box,
  VStack,
  HStack,
  Text,
  Select,
  Spinner,
  Card,
  ButtonGroup,
  Button,
  Center,
  Avatar,
} from '@chakra-ui/react';

class TopAlbumsWidget extends Widget {
  constructor(props) {
    super(props);
    this.title = 'Top Albums';
    this.state = {
      time_range: 'medium_term',
      data: this.props.data,
      tracksList: this.props.data.topTracksMediumTerm.items,
      page: 1,
      allTracksLists: {
        short_term: this.props.data.topTracksShortTerm.items,
        medium_term: this.props.data.topTracksMediumTerm.items,
        long_term: this.props.data.topTracksLongTerm.items,
      },
    };

    // Binding the functions to the component's scope
    this.changePage = this.changePage.bind(this);
    this.onTimeRangeChange = this.onTimeRangeChange.bind(this);
    this.displayAlbums = this.displayAlbums.bind(this);
    this.renderPaginationButtons = this.renderPaginationButtons.bind(this);
    this.directToAlbumPage = this.directToAlbumPage.bind(this);
    this.getUniqueAlbums = this.getUniqueAlbums.bind(this);

  }

  // A function to change the page number when pagination buttons are clicked
  changePage(newPage) {
    if (newPage > 0 && newPage <= Math.ceil(this.state.tracksList.length / 10)) {
      this.setState({ page: newPage });
    }
  }

  // A function to handle time range change event
  onTimeRangeChange(event) {
    //match event.target.value to Last 4 weeks, Last 6 months, All Time
    const timeRangeMap = {
      short_term: 'Last 4 weeks',
      medium_term: 'Last 6 months',
      long_term: 'All Time',
    };
    const timeRange = timeRangeMap[event.target.value];
    


    this.setState({ time_range: event.target.value }, () => {
      this.setState({ tracksList: this.state.allTracksLists[event.target.value] }, () => {
        this.props.obs.notify({ message: `Time Range\nSet to ${timeRange}`, status: 'success' });
        this.changePage(1);
      });
    });
  };

  directToAlbumPage(track) {
    window.location.href = track.album?.uri;
  }

  displayAlbums(tracksList) {
    const { page } = this.state;
    const start = (page - 1) * 10;
    const end = page * 10;

    const uniqueAlbums = this.getUniqueAlbums(tracksList);
    const albumItems = uniqueAlbums.slice(start, end);

    return albumItems.map((albumName, index) => {
      const track = tracksList.find(track => track.album.name === albumName);
      return (
        <Card p={2.5} key={track.album.id} onClick={() => this.directToAlbumPage(track)} cursor={'pointer'}>
          <HStack spacing={2}>
            <Avatar borderRadius={2} size={'md'} src={track?.album?.images[0]?.url} icon={<Spinner></Spinner>} />
            <Text as={'h3'} fontWeight='bold' fontSize={'lg'}>{start + index + 1}.</Text>
            <VStack spacing={0} align={'left'} ml={'0.5rem !important'}>
              <HStack spacing={0}>
                <Text as={'h3'} fontWeight="black" fontSize={'lg'}>{albumName}</Text>
              </HStack>
              <Text as={'h3'} fontSize={'sm'}>{track.artists.map((artist) => artist.name).join(', ')}</Text>
            </VStack>
          </HStack>
        </Card>
      );
    });
  }


  getUniqueAlbums(tracksList) {
    var albums = new Set();
    tracksList.forEach((track) => {
      albums.add(track.album.name);
    });

    return Array.from(albums);
  }


  renderPaginationButtons() {
    let { page, tracksList } = this.state;

    const uniqueAlbums = this.getUniqueAlbums(tracksList);
    const pageCount = Math.ceil(uniqueAlbums.length / 10);
    const buttons = [];
    for (let i = 1; i <= pageCount; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => this.changePage(i)}
          isDisabled={page === i}
        >
          {i}
        </Button>
      );
    }
    return buttons;
  }

  // A function to render the content of the widget
  renderContent() {
    const { time_range, tracksList } = this.state;
    if (tracksList) {
      return (
        <Box>
          <Select
            value={time_range}
            onChange={this.onTimeRangeChange}
            bgColor={'white'}
            size="sm"
            border={"1px solid #e2e8f0"}
            borderRadius={"md"}
            variant={"filled"}
            width="fit-content"
            mb={2}
          >
            <option value="short_term">Last 4 weeks</option>
            <option value="medium_term">Last 6 months</option>
            <option value="long_term">All time</option>
          </Select>
          <VStack spacing={2} justifyContent={"left"} alignItems={"left"}>
            {this.displayAlbums(tracksList)}
          </VStack>
          <Center>
            <ButtonGroup paddingTop={5} size="sm">
              {this.renderPaginationButtons()}
            </ButtonGroup>
          </Center>
        </Box>

      );
    } else {
      // Returning a spinner component while the data is being fetched
      return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <Spinner size="lg" />
        </Box>
      );
    }
  }
}

export default TopAlbumsWidget;
